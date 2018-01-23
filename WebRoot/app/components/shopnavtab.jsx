import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopNavTab extends Component {
    constructor(props) {
        super(props)
        this.propTypes = {
            tab: PropTypes.string.isRequired,
            onHandleClick: PropTypes.func,
            style: PropTypes.object
        }
    }

    handleClick(index, e) {
        this.props.onHandleClick(index);
    }

    render() {
        const { tab, index, style } = this.props;
        return (
            <a className={style} href="javascript:void(0);" onClick={this.handleClick.bind(this, index)}>{tab}</a>
            );
    }
}

export default ShopNavTab;