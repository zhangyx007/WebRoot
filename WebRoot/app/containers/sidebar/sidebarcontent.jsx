import { Component } from 'react';
import * as _ from 'lodash'
import PropTypes from 'prop-types'
import SidebarCart from '../../components/sidebar/sidebarcart'
import Summary from '../../components/sidebar/summary'

class SidebarContent extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            type: PropTypes.number,
            cartArry: PropTypes.array
        }
        this.state = {
            total: 0,
            number: 0,
            cartArry: [
                {
                    id: 0,
                    commodityArry: [
                        {
                            id: 1,
                            title: '金牌牛腩炖土豆套餐',
                            quantity: 1,
                            price: 36.5,
                            showPrice: 36.5
                        }
                    ]
                },
                {
                    id: 1,
                    commodityArry: [
                        {
                            id: 1,
                            title: '金牌牛腩炖土豆套餐',
                            quantity: 2,
                            price: 36.5,
                            showPrice: 36.5
                        }
                    ]
                }
            ]
        }
    }

    handleSettlement(num, tol) {
        console.log(num, tol)
    }

    handleClear(id,e) {
        let arry = this.state.cartArry;
        _.remove(arry,p => p.id == id);
        this.setState({ cartArry: arry});    
        this.state.total = 0;
        this.state.number = 0;   
        this.settlement();
    }

    handleAddChange(cartId, id) {
        let arry = this.state.cartArry;
        arry.forEach(p => {
            if (p.id === cartId) {
                p.commodityArry.forEach(i => {
                    if (i.id === id) {
                        i.quantity = i.quantity + 1;
                        i.showPrice += i.price;
                        this.state.total = this.state.total + i.price;
                        this.state.number = this.state.number + 1;
                    }
                })
            }
        })
        this.setState({ cartArry: arry });
    }

    handleRemoveChange(cartId, id) {
        let arry = this.state.cartArry
        arry.forEach(p => {
            if (p.id === cartId) {
                p.commodityArry.forEach(i => {
                    if (i.id === id) {
                        i.quantity = i.quantity - 1;
                        i.showPrice -= i.price;
                        this.state.total = this.state.total - i.price;
                        this.state.number = this.state.number - 1;
                        if (i.quantity == 0) {
                            _.remove(p.commodityArry, l => l.id == i.id);
                        }
                    }
                })
                if (p.commodityArry.length == 0) {
                    _.remove(arry, i => i.id == p.id);
                }
            }
        })
        this.setState({ cartArry: arry });
    }

    settlement(){
        if (this.state.cartArry != null && this.state.cartArry.length != 0) {
            this.state.cartArry.forEach(p => {
                if (p != null && p.commodityArry.length != 0) {
                    p.commodityArry.forEach(i => {
                        this.state.total += i.showPrice;
                        this.state.number += i.quantity;
                    })
                }
            })
        }
    }

    componentWillMount() {
        this.settlement();
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
                <SidebarCart
                    cartArry={this.state.cartArry}
                    onHandleAddChange={this.handleAddChange.bind(this)}
                    onHandleRemoveChange={this.handleRemoveChange.bind(this)}
                    onHandleClear={this.handleClear.bind(this)}
                />
                {
                    this.state.cartArry.length != 0 ?
                        <Summary
                            number={this.state.number}
                            total={this.state.total}
                            onHandleSettlement={this.handleSettlement.bind(this)}
                        /> : ''
                }
            </div>
        );
    }
}

export default SidebarContent;