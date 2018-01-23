import { Component } from 'react';
import PropTypes from 'prop-types';
import ShopGuideInfo from './shopguideinfo'
import ShopGuideServer from './shopguideserver'

class ShopGuide extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            businesInfo: PropTypes.object
        }        
    }

    render() {
        const { businesInfo } = this.props;
        return (
            <div className="shopguide">
                <img src="Image/shop-bg.0391dd.jpg" alt="" />
                <div className="container">
                    <ShopGuideInfo shopInfo={businesInfo} />
                    <ShopGuideServer
                        startingPrice={businesInfo.startingPrice}
                        distributionFee={businesInfo.distributionFee}
                        arrivTime={businesInfo.arrivTime}
                    />
                    <a className="shopguide-favor" href="javascript:void(0);">
                        <span>收藏</span>
                    </a>
                </div>
            </div>
            );
    }
}

export default ShopGuide;