import { Component } from 'react'
import PropTypes from 'prop-types';

class SidebarCart extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            cartArry: PropTypes.array,
            onHandleAddChange: PropTypes.func,
            onHandleRemoveChange: PropTypes.func,
            onHandleClear:PropTypes.func
        }
    }

    handleClear(id,e){
        this.props.onHandleClear(id);
    }

    handleAdd(cartid,id,e) {
        this.props.onHandleAddChange(cartid,id)
    }

    handleRemove(cartid,id, e) {
        this.props.onHandleRemoveChange(cartid,id);
    }

    render() {
        const { cartArry } = this.props;
        return (
            <div className="sidebarcart">
                {
                    cartArry.length != 0 ? cartArry.map(p =>
                        <dl>
                            <dt>
                                <span>{p.id + 1}号购物车</span>
                                <a href="javascript:void(0);" className="sidebarcart-clear" onClick={this.handleClear.bind(this,p.id)}>[清空]</a>
                            </dt>
                            <dd>
                                <ul>
                                    {
                                        p.commodityArry.map(i =>
                                            <li className="clearfix">
                                                <div className="sidebarcart-name">{i.title}</div>
                                                <div className="sidebarcart-quantity">
                                                    <span onClick={this.handleRemove.bind(this, p.id, i.id)}>-</span>
                                                    <input className="ng-pristine" value={i.quantity} disabled/>
                                                    <span onClick={this.handleAdd.bind(this, p.id,i.id)}>+</span>
                                                </div>
                                                <div className="sidebarcart-price">{i.showPrice}</div>
                                            </li>
                                        )
                                    }
                                </ul>
                            </dd>
                        </dl>
                    ) : ''
                }
            </div>
            );
    }
}

export default SidebarCart;