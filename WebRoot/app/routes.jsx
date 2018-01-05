import { Router, Route, IndexRoute } from 'react-router';
import Home from './home'
import Header from './components/common/header'

//const routeConfigure = [
//    {
//        path: '/',
//        component: Header,
//        indexRoute: { component: Home },
//        childRoutes: [
//            {
//            }
//        ]
//    }
//]

const routeConfigure = (
    <Router>
        <Route path="/" component={Header}>
            <IndexRoute component={Home} />
        </Route>
    </Router>
);

export default routeConfigure;

