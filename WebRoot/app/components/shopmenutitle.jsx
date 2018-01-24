import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopMenuTitle extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            title: PropTypes.string.isRequired,
            decsiption: PropTypes.string
        }
    }

    render() {
        const { title, decsiption } = this.props;
        return (
            <h3 className="shopmenu-title">{title}<span className="shopmenu-des">{decsiption}</span></h3>
            );
    }
}

export default ShopMenuTitle;