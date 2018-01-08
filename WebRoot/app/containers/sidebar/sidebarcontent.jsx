import { Component } from 'react';
import PropTypes from 'prop-types'

class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            type: PropTypes.number,
            cartArry: PropTypes.array
        }
        this.state = {
            total: 0,
            number:0,
            cartArry: [
                {
                    id: 0,
                    commodityArry: [
                        {
                            id: 1,
                            title: '金牌牛腩炖土豆套餐',
                            quantity: 1,
                            price: 36.5
                        }
                    ]
                },
                {
                    id: 1,
                    commodityArry: [
                        {
                            id: 1,
                            title: '金牌牛腩炖土豆套餐',
                            quantity: 1,
                            price: 36.5
                        }
                    ]
                }
            ]
        }
    }

    handleChange(id, e) {

    }

    render() {
        let { type } = this.props;
        return (
            <div className="sidebar-content">
                <div className="sidebarcart-caption">
                    {
                        type == 1 ? <a href="/">购物车</a> : <a href="/">我的消息</a>
                    }
                </div>
                <div className="sidebarcart">
                    {
                        this.state.cartArry.length != 0 ? this.state.cartArry.map(p => 
                            <dl>
                                <dt>
                                    <span>{p.id + 1}号购物车</span>
                                    <a href="javascript:void(0);" className="sidebarcart-clear">[清空]</a>
                                </dt>
                                <dd>
                                    <ul>
                                        {
                                            p.commodityArry.map(i => 
                                                <li className="clearfix">
                                                    <div className="sidebarcart-name">{i.title}</div>
                                                    <div className="sidebarcart-quantity">
                                                        <span>-</span>
                                                        <input className="ng-pristine" value={i.quantity} onChange={this.handleChange.bind(this, i.id)} />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="sidebarcart-price">{i.price}</div>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </dd>
                            </dl>
                        ) : ''
                    }
                </div>
                {
                    this.state.cartArry.length != 0 ?
                        <div className="sidebarcart-summary">
                            <p>共<span className="color-stress">{this.state.number}</span>份,总计<span className="color-stress">{this.state.total}</span></p>
                            <button className="sidebarcart-submit">去结算</button>
                        </div> : ''
                }                
            </div>
        );
    }
}

export default SidebarContent;