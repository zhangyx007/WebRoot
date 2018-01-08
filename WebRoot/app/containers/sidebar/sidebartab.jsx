import { Component } from 'react';
import SidebarMiddle from '../../components/sidebar/sidebarmiddle';
import PropTypes from 'prop-types'

class SidebarTab extends Component {
    constructor(props) {
        super(props)
        this.propTypes = {
            onHandleTypeChange: PropTypes.array
        }
    }

    handlClick(type) {
        this.props.onHandleTypeChange(type);
    }

    render() {
        return (
            <div className="sidebar-tabs">
                <SidebarMiddle onHandleClick={this.handlClick.bind(this)} />
            </div>
            );
    }
}

export default SidebarTab;