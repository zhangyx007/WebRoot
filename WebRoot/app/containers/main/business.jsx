import { Component } from 'react';
import PropTypes from 'prop-types';
import RSLogo from '../../components/main/bussineslogo';
import RSContent from '../../components/main/bussinescontent'

class Business extends Component {
    constructor(props) {
        super(props);
        this.propTypes = {
            business: PropTypes.array
        }
    }

    render() {
        const { business } = this.props;
        return (
            <div className="place-rstbox clearfix">
                <div className="clearfix">
                    {
                        business == null ? '' : business.map(p => {
                            return <a href="javascript:void(0)" className="rstblock">
                                <RSLogo bussines={p} />
                                <RSContent bussines={p} />
                                   </a>
                        })
                    }
                </div>
            </div>
            );
    }
}

export default Business;