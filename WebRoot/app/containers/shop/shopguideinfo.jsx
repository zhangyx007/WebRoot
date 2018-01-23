import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopGuideInfo extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            shopInfo: PropTypes.object.isRequired
        }
        this.state = {
            overflow: 'hidden',
            opacity: 0,
        }
    }

    handleMouseOver() {
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
        const { shopInfo } = this.props;
        return (
            <div className="shopguide-info">
                <img src={shopInfo.image} alt={shopInfo.title} />
                <div className="shopguide-info-wrapper">
                    <div>
                        <h1 title={shopInfo.title}>{shopInfo.title}</h1>
                    </div>
                    <p className="shopguide-info-rate">
                        <span>月售{shopInfo.order}单</span>
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
                                <span>{shopInfo.address}</span>
                            </p>
                            <p>
                                <span className="label">营业时间：</span>
                                <span>{shopInfo.businessHours}</span>
                            </p>
                        </li>
                        <li className="shopguide-extra-item">
                            <p className="shopguide-extra-delivery">
                                由<span>{shopInfo.title}</span>提供配送服务
                            </p>
                        </li>
                    </ul>
                </div>
            </div> 
            );
    }
}

export default ShopGuideInfo;