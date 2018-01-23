import { Component } from 'react'
import PropTypes from 'prop-types'
import { fetchBusinsinfoData } from '../../actions/detail'
import { connect } from 'react-redux'
import ShopGuide from './shopguide'

class Shop extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            result: PropTypes.object
        }
        const { params, dispatch } = this.props;
        dispatch(fetchBusinsinfoData(params.id));
    }

    render() {
        const { result } = this.props;
        return (
            <div className="main">
                <ShopGuide businesInfo={result} />
            </div>
            );
    }
}

function mapStateToProp(state) {
    console.log(state)
    return {
        result: state.getBusinDetail.result
    }
}

export default connect(mapStateToProp)(Shop);