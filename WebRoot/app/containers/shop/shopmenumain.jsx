import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopMenuMain extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            categorys: PropTypes.array.isRequired,
            commodity: PropTypes.array.isRequired
        }
    }

    render() {
        const { categorys, commodity } = this.props;
        return (
            <div className="shopmenu-main grid">
                <div>
                    {
                        categorys.map(p =>
                            <div className="shopmenu-list clearfix">
                                <h3 className="shopmenu-title">{p.category}
                                    {
                                        p.category == '热销' && <span className="shopmenu-des">大家喜欢吃,才叫真好吃。</span>
                                    }
                                </h3>
                                {
                                    commodity.map(e => e.categoryId == p.id &&
                                        <div className="shopmenu-food">
                                            <span>
                                                <a href="javascript:;">
                                                    <img src={e.image} alt={e.name} />
                                                </a>
                                            </span>
                                            <div className="shopmenu-food-main">
                                                <h3 className="shopmenu-food-name ui-ellipsis">{e.name}</h3>
                                                <p className="color-mute ui-ellipsis">{e.details}</p>
                                                <p>
                                                    <span>月售{e.orders}份</span>
                                                </p>
                                            </div>
                                            <span className="shopmenu-food-price color-stress">
                                                ¥{e.price}<small>起</small>
                                            </span>
                                            <span className="">
                                                <button className="shop-cartbutton">选规格</button>
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}

export default ShopMenuMain;