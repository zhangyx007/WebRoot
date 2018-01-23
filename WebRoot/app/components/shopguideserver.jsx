import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopServer extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            serverName: PropTypes.string.isRequired,
            serverValue: PropTypes.string.isRequired
        }
    }

    render() {
        const { serverName, serverValue } = this.props;
        return (
            <span>
                <em>{serverName}</em>
                <em className="shopguide-server-value">{serverValue}</em>
            </span>
        );
    }
}

export default ShopServer;