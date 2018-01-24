import { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchBusinsinfoData } from '../../actions/detail'
import { connect } from 'react-redux'
import ShopGuide from './shopguide'
import ShopNav from './shopnav'
import ShopMain from './shopmain'

//const categorys = [
//    { id: 0, category: '热销',active:''},
//    { id: 1, category: '季节限定', active: ''},
//    { id: 2, category: '白色先醇', active: ''},
//    { id: 3, category: '醇香奶茶', active: ''},
//    { id: 4, category: '醇黑浓情', active: ''},
//    { id: 5, category: '鲜果鲜茶', active: ''},
//    { id: 6, category: '益菌多多', active: ''},
//]

class Shop extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            result: PropTypes.object
        }
        const { params, dispatch } = this.props;
        dispatch(fetchBusinsinfoData(params.id));
    }

    handleSort(index) {

    }

    handleTab(index) {

    }

    render() {
        const { result } = this.props;
        console.log(result)
        return (
            <div className="main">
                <ShopGuide businesInfo={result} />
                <ShopNav
                    onHandleSort={this.handleSort.bind(this)}
                    onHandleTab={this.handleTab.bind(this)}
                />
                {
                    result.categorys != null && < ShopMain categorys={result.categorys} />   
                }                           
            </div>  
            );
    }
}

function mapStateToProp(state) {
    return {
        result: state.getBusinDetail.result
    }
}

export default connect(mapStateToProp)(Shop);