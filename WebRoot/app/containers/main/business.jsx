import { Component } from 'react';
import PropTypes from 'prop-types';
import RSLogo from '../../components/main/bussineslogo';
import RSContent from '../../components/main/bussinescontent'
import { Link} from 'react-router'

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
                            return <Link to={"/" + p.id} className="rstblock">
                                <RSLogo bussines={p} />
                                <RSContent bussines={p} />
                            </Link>
                        })
                    }
                </div>
            </div>
            );
    }
}

export default Business;