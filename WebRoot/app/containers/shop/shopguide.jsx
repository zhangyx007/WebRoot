import { Component } from 'react';
import PropTypes from 'prop-types';

class ShopGuide extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            businesInfo: PropTypes.object
        }
    }

    render() {
        const { businesInfo } = this.props;
        console.log(businesInfo);
        return (
            <div className="shopguide">
                <img src="Image/shop-bg.0391dd.jpg" alt="" />
                <div className="container">
                    <div className="shopguide-info">
                        <img src={businesInfo.image} alt={businesInfo.title} />
                        <div className="shopguide-info-wrapper">

                        </div>
                    </div>
                </div>
            </div>
            );
    }
}

export default ShopGuide;