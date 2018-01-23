import { Component } from 'react';
import PropTypes from 'prop-types';
import ShopServer from '../../components/shopguideserver'

class ShopGuideServer extends Component {
    constructor(props) {
        super(props)
        this.propTypes = {
            shopServer: PropTypes.object.isRequired
        }
    }

    render() {
        const { startingPrice, distributionFee, arrivTime } = this.props; 
        return (
            <div className="shopguide-server">
                <ShopServer
                    serverName="起送价"
                    serverValue={`${startingPrice}元`}
                />
                <ShopServer
                    serverName="配送费"
                    serverValue={`配送费¥${distributionFee}`}
                />
                <ShopServer
                    serverName="平均送达速度"
                    serverValue={`${arrivTime}分钟`}
                />
            </div>
            );
    }
}

export default ShopGuideServer;