import { Component } from 'react';
import PropTypes from 'prop-types';


class SidebarMiddle extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            onHandleClick: PropTypes.array
        }
    }

    handleClick(type, e) {
        this.props.onHandleClick(type);
    }

    render() {
        return (
            <div className="toolbar-tabs-middle">
                <a to="javascript:void(0)" className="toolbar-cartbtn toolbar-close" onClick={this.handleClick.bind(this, 0)}>我的订单</a>
                <div className="toolbar-separator"></div>
                <a to="javascript:void(0)" className="toolbar-cartbtn toolbar-open" onClick={this.handleClick.bind(this, 1)}>购物车</a>
                <div className="toolbar-separator"></div>
                <a to="javascript:void(0)" className="toolbar-cartbtn toolbar-open" onClick={this.handleClick.bind(this, 2)}>我的信息</a>
            </div>
        );
    }
}

export default SidebarMiddle;