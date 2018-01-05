import { Component } from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types';

class Location extends Component{
    constructor(props){
        super(props);
        this.propTypes = {
            location: PropTypes.string.isRequire,
        }     
    }

    render() {
        const { location } = this.props;     
        return (
            <div className="location" role="navigation">
                <span>当前位置:</span>
                <span className="location-current">
                    <a href="javascript:void(0)">{location}</a>
                </span>
                <span className="location-change">
                    <Link to="/">[切换地址]</Link>
                </span>
            </div>
       );
    }
}

export default Location;