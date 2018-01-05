import { Component } from 'react';
import PropTypes from 'prop-types';

class RSLogo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bussines } = this.props;
        return (
            <div className="rstblock-logo">
                <img src={bussines.url} alt="" className="rstblock-logo-icon" />
                <span>{bussines.arrivTime}分钟</span>
            </div>
            );
    }
}

export default RSLogo;