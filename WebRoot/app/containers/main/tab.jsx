import { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            filter: PropTypes.array.isRequire,
            onHandleFilter: PropTypes.func.isRequire
        }
        this.state = {
            active: 0
        }
    }

    handleFilter(index) {
        this.setState({ active: index });
        this.props.onHandleFilter(index);
    }

    render() {
        const { filter } = this.props;
        return (
            <div className="excavator excavator-filter">
                <span className="excavator-filter-name">商家分类:</span>
                {
                    filter.map(p => {
                        return <a className={p.key == this.state.active ? 'excavator-filter-item active' : 'excavator-filter-item'} href="javascript:void(0)" key={p.key} onClick={this.handleFilter.bind(this, p.key)}>{p.FilterName}</a>
                    })
                }
            </div>
        );
    }
}

export default Tab;