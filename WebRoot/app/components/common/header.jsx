import { Component } from 'react';
import Footer from './footer'
import { Link } from 'react-router';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: {
                [0]: 'topbar-item focus',
                [1]: 'topbar-item'
            },
            userName: '',
            tobar: 'topbar'
        };
    }

    componentWillMount() {
        let user = sessionStorage.getItem('user');
        //user = 'yxzhang';
        this.setState({ userName: user })  
    }

    componentDidMount() {
        let { params } = this.props;
        if (params.id) {
            this.setState({ tobar: 'topbar shoptopbar',active:{
                [0]:'topbar-item',
                [1]:'topbar-item'
            }})
        }
        else {
            this.setState({ tobar: 'topbar',active:{
                [0]:'topbar-item focus',
                [1]:'topbar-item'
            }})
        }
    }

    componentWillReceiveProps(nextProps) {
        let { params } = nextProps;
        if (params.id) {
            this.setState({ tobar: 'topbar shoptopbar',active:{
                [0]:'topbar-item',
                [1]:'topbar-item'
            }})
        }
        else {
            this.setState({ tobar: 'topbar',active:{
                [0]:'topbar-item focus',
                [1]:'topbar-item'
            }})
        }
    }

    handleMenuClick(index, e) {
        const { router } = this.props;
        if (index === 0 || index === undefined) {
            this.setState({
                active: {
                    [0]: 'topbar-item focus',
                    [1]: 'topbar-item'
                }
            });
            this.router.push('/');
        }
        else {
            this.setState({
                active: {
                    [0]: 'topbar-item',
                    [1]: 'topbar-item focus'
                }
            });
            this.router.push('');
        }
    }

    render() {
        const children = this.props.children;
        return (
            <div>
                <div>
                    <header className={this.state.tobar} role="navigation">
                        <div className="container clearfix">
                            <h1>
                                <a href="javascript:void(0);" className="topbar-logo">
                                    <span>管理系统</span>
                                </a>
                            </h1>
                            <a href="javascript:void(0)" className={this.state.active[0]} onClick={this.handleMenuClick.bind(this, 0)}>首页</a>
                            <a href="javascript:void(0)" className={this.state.active[1]} onClick={this.handleMenuClick.bind(this, 1)}>我的订单</a>

                            <nav className="topbar-nav">
                                <div className="topbar-profilebox">
                                    <span className="topbar-profilebox-wrapper">
                                        {
                                            this.state.userName == '' || this.state.userName == null ? <a href="javascript:void(0)" style={{ color: '#fff' }}>请登录</a> :
                                                <span className="topbar-profilebox-username">当前用户:{this.state.userName}</span>
                                        }
                                    </span>
                                </div>
                            </nav>
                        </div>
                    </header>
                </div>
                {children}
                <Footer />
            </div>
        );
    };
}

export default Header;