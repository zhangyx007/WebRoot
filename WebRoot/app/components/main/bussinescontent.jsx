import { Component } from 'react';
import PropTypes from 'prop-types';

class RSContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { bussines } = this.props;
        return (
            <div className="rstblock-content">
                <div className="rstblock-title">{bussines.title}</div>
                <span className="rstblock-monthsales">月售{bussines.order}单</span>
                <div className="rstblock-cost">配送费¥{bussines.distributionFee}</div>
            </div>
            );
    }
}

export default RSContent;