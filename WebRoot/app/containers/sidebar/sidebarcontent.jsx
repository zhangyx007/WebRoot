import { Component } from 'react';
import SidebarCaption from '../../components/sidebar/sidebarcaption'

class SidebarContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-content">
                <SidebarCaption />
            </div>
        );
    }
}

export default SidebarContent;