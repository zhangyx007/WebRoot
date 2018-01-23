import { Component } from 'react';
import PropTypes from 'prop-types';
import ShopNavTab from '../../components/shopnavtab'

class ShopNav extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            onHandleTab: PropTypes.func,
            onHandleSort: PropTypes.func
        }
        this.state = {
            navtab: {
                [0]: 'shopnav-tab active',
                [1]: 'shopnav-tab',
                [2]: 'shopnav-tab',
            },
            sort: {
                [0]: 'active',
                [1]: '',
                [2]: '',
                [3]: '',
            }
        }
    }

    handleTabClick(index) {
        switch (index) {
            case 0:
                this.setState({
                    navtab: {
                        [0]: 'shopnav-tab active',
                        [1]: 'shopnav-tab',
                        [2]: 'shopnav-tab'
                    }
                })
                break;
            case 1:
                this.setState({
                    navtab: {
                        [0]: 'shopnav-tab',
                        [1]: 'shopnav-tab active',
                        [2]: 'shopnav-tab'
                    }
                })
                break;
            case 2:
                this.setState({
                    navtab: {
                        [0]: 'shopnav-tab',
                        [1]: 'shopnav-tab',
                        [2]: 'shopnav-tab active'
                    }
                })
                break;
        }
        this.props.onHandleTab(index);
    }

    handleSortClick(index) {
        switch (index) {
            case 0:
                this.setState({
                    sort: {
                        [0]: 'active',
                        [1]: '',
                        [2]: '',
                        [3]: '',
                    }
                })
                break;
            case 1:
                this.setState({
                    sort: {
                        [0]: '',
                        [1]: 'active',
                        [2]: '',
                        [3]: '',
                    }
                })
                break;
            case 2:
                this.setState({
                    sort: {
                        [0]: '',
                        [1]: '',
                        [2]: 'active',
                        [3]: '',
                    }
                })
                break;
            case 3:
                this.setState({
                    sort: {
                        [0]: '',
                        [1]: '',
                        [2]: '',
                        [3]: 'active',
                    }
                })
                break;
        }
        this.props.onHandleSort(index);
    }

    render() {
        return (
            <div>
                <div className="shopnav">
                    <div className="container">
                        <div className="shopnav-left">
                            <ShopNavTab
                                style={this.state.navtab[0]}
                                tab="所有商品"
                                index={0}
                                onHandleClick={this.handleTabClick.bind(this)}
                            />
                            <ShopNavTab
                                style={this.state.navtab[1]}
                                tab="评价"
                                index={1}
                                onHandleClick={this.handleTabClick.bind(this)}
                            />
                            <ShopNavTab
                                style={this.state.navtab[2]}
                                tab="商家资质"
                                index={2}
                                onHandleClick={this.handleTabClick.bind(this)}
                            />
                            <span className="shopnav-filter">
                                <a className={this.state.sort[0]} href="javascript:void(0);" onClick={this.handleSortClick.bind(this, 0)}>默认排序</a>
                                <a className={this.state.sort[1]} href="javascript:void(0);" onClick={this.handleSortClick.bind(this, 1)}>评分</a>
                                <a className={this.state.sort[2]} href="javascript:void(0);" onClick={this.handleSortClick.bind(this, 2)}>销量</a>
                                <a className={this.state.sort[3]} href="javascript:void(0);" onClick={this.handleSortClick.bind(this, 3)}>价格</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopNav;