import { Component } from 'react'
import PropTypes from 'prop-types';

class Summary extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            number: PropTypes.number.isRequired,
            total: PropTypes.number.isRequired,
            onHandleSettlement: PropTypes.func
        }
    }

    handleClick(e) {
        const { number, total } = this.props;
        this.props.onHandleSettlement(number,total);
    }

    render() {
        const { number, total } = this.props;
        return (
            <div className="sidebarcart-summary">
                <p>共<span className="color-stress">{number}</span>份,总计<span className="color-stress">{total}</span></p>
                <button className="sidebarcart-submit" onClick={this.handleClick.bind(this)}>去结算</button>
            </div>
            );
    }
}

export default Summary;