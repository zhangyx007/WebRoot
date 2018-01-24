import { Component } from 'react';
import PropTypes from 'prop-types'

class ShopMenuNav extends Component {
    constructor(props) {
        super(props);
        this.propType = {
            categorys: PropTypes.array.isRequired,
            onHandleCategory: PropTypes.func
        }
        const { categorys } = this.props;
        this.state = {
            categorys: categorys
        }
    }

    handleCategory(id) {
        let arry = this.state.categorys;
        for (let p of arry) {
            if (p.id === id) {
                p.active = 'active';
            }
            else {
                p.active = '';
            }
        }
        this.setState({
            categorys: arry
        })
        this.props.onHandleCategory(id);
    }

    render() {
        return (
            <div className="shopmenu-nav" style={{ maxHeight: '460px' }}>
                {
                    this.state.categorys.map(p =>
                        <a href="javascript:" key={p.id} onClick={this.handleCategory.bind(this, p.id)} className={p.active}>{p.category}</a>
                    )
                }
            </div>
            );
    }
}

export default ShopMenuNav;