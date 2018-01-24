import { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchBusinsinfoData } from '../../actions/detail'
import { connect } from 'react-redux'
import ShopGuide from './shopguide'
import ShopNav from './shopnav'
import ShopMain from './shopmain'

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
                    result.categorys != null &&
                    <ShopMain
                        categorys={result.categorys}
                        commodity={result.commodityList}
                    />   
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