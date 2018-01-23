import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopGuide extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            businesInfo: PropTypes.object
        }
        this.state = {
            overflow: 'hidden',
            opacity: 0,
        }
    }

    handleMouseOver(){
        this.setState({
            overflow: 'inherit',
            opacity: 1,
        })
    }

    handleMouseLeave() {
        this.setState({
            overflow: 'hidden',
            opacity: 0,
        })
    }


    render() {
        const { businesInfo } = this.props;
        return (
            <div className="shopguide">
                <img src="Image/shop-bg.0391dd.jpg" alt="" />
                <div className="container">
                    <div className="shopguide-info">
                        <img src={businesInfo.image} alt={businesInfo.title} />
                        <div className="shopguide-info-wrapper">
                            <div>
                                <h1 title={businesInfo.title}>{businesInfo.title}</h1>
                            </div>
                            <p className="shopguide-info-rate">
                                <span>月售{businesInfo.order}单</span>
                            </p>
                        </div>
                        <div className="shopguide-info-extra" onMouseOver={this.handleMouseOver.bind(this)} onMouseLeave={this.handleMouseLeave.bind(this)} style={{ overflow: this.state.overflow, opacity: this.state.opacity }}>
                            <ul>
                                <li className="shopguide-extra-item shopguide-extra-compete">
                                    <div>
                                        <h2 className="color-stress">4.8</h2>
                                        <p>
                                            综合评价
                                            <br />
                                            <span className="color-mute">高于周边商家</span>
                                            <span className="color-stress">69.5%</span>
                                         </p>
                                    </div>
                                    <div>
                                        <p>
                                            服务态度
                                        <div className="starrating"></div>
                                            <span className="color-stress">4.7分</span>
                                        </p>
                                        <p>
                                            菜品评价
                                        <div className="starrating"></div>
                                            <span className="color-stress">4.8分</span>
                                        </p>
                                    </div>
                                </li>
                                <li className="shopguide-extra-item">欢迎光临</li>
                                <li className="shopguide-extra-item address">
                                    <p>
                                        <span className="label">商家地址：</span>
                                        <span>{businesInfo.address}</span>
                                    </p>
                                    <p>
                                        <span className="label">营业时间：</span>
                                        <span>{businesInfo.businessHours}</span>
                                    </p>
                                </li>
                                <li className="shopguide-extra-item">
                                    <p className="shopguide-extra-delivery">
                                        由<span>{businesInfo.title}</span>提供配送服务
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
            );
    }
}

export default ShopGuide;