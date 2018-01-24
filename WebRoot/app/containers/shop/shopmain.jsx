import { Component } from 'react';
import PropTypes from 'prop-types'
import ShopMenuNav from './shopmenunav'
import ShopMenuMain from './shopmenumain'

class ShopMain extends Component {
    constructor(props) {
        super(props)
        this.propType = {
            categorys: PropTypes.array.isRequired,
            commodity: PropTypes.array.isRequired
        }
    }

    handleCategory(id) {
        console.log(id);
    }

    render() {
        const { categorys,commodity } = this.props;
        return (
            <div className="shopmain container">
                <div className="shopmenu">
                    <ShopMenuNav
                        categorys={categorys}
                        onHandleCategory={this.handleCategory.bind(this)}
                    />
                    <ShopMenuMain
                        categorys={categorys}
                        commodity={commodity}
                    />
                </div>
            </div>
            );
    }
}

export default ShopMain;