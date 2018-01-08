import { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import Location from './containers/main/location'
import FullText from './containers/main/fulltext'
import ShowTab from './containers/main/showtab'
import Tab from './containers/main/tab'
import Business from './containers/main/business'
require('es6-promise');
import { fetchGetBusiness } from './actions/main/home'

const businessFilter = [
    { key: 0, FilterName: '全部商家',active:'' },
    { key: 1, FilterName: '美食', active: ''},
    { key: 2, FilterName: '快餐便当', active: ''},
    { key: 3, FilterName: '特色菜系', active: '' },
    { key: 4, FilterName: '小吃夜宵', active: ''},
    { key: 5, FilterName: '甜品饮品', active: ''},
    { key: 6, FilterName: '果蔬生鲜', active: ''},
    { key: 7, FilterName: '商店超市', active: '' },
    { key: 8, FilterName: '早餐', active: '' },
    { key: 9, FilterName: '午餐', active: '' },
    { key: 10, FilterName: '下午茶', active: ''},
    { key: 11, FilterName: '晚餐', active: '' },
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);

        //this.state = {
        //    bussinessArry: [
        //        {
        //            id: 0,
        //            url: 'Image/6745acb55e9f0150f02720f22bb44png.webp.jpg',
        //            arrivTime: '24',
        //            title: '满炖(三好旗舰店)',
        //            order: '11206',
        //            distributionFee:'4'
        //        },
        //    ]
        //}
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchGetBusiness())
    }

    handleSearch(searchModel) {
        console.log(searchModel);
    }

    handleFilter(index) {
        console.log(index)
    }

    render() {
        const locationName = '东北大马路';
        let { items } = this.props;
        return (
            <div className="main"> 
                <div className="container clearfix">
                    <Location location={locationName} />
                    <FullText onHandleClick={this.handleSearch} />
                </div>
                <div className="place-tab clearfix container" style={{ marginLeft:'230px' }}>
                    <ShowTab />
                </div>
                <div className="container">
                    <Tab
                        filter={businessFilter}
                        onHandleFilter={this.handleFilter}
                    />
                    <Business business={items} />
                </div>
            </div>
            );
    }
}

function mapStateToProp(state) {
    return {
        items: state.getBusiness.items
    }
}

export default connect(mapStateToProp)(Home);