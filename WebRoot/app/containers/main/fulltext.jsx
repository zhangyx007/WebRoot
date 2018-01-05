import { Component } from 'react';
import PropTypes from 'prop-types';

class FullText extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.propTypes = {
            onHandleClick: PropTypes.func.isRequire
        }
        this.state = {
            searchText: ''
        }
    }

    handleClick(e) {
        this.props.onHandleClick(this.state.searchText);
    }

    handleChange(e) {
        this.setState({ searchText: e.target.value });
    }

    render() {
        return (
            <div className="place-search" role="search">
                <a className="place-search-btn" href="javascript:void(0)" onClick={this.handleClick}></a>
                <input id="globalsearch" className="place-search-input" value={this.state.searchText} placeholder="搜索商家,美食..." onChange={this.handleChange} />
            </div>
            );
    }
}

export default FullText;