import { Router, Route, IndexRoute } from 'react-router';
import Home from './home'
import Header from './components/common/header'
import Shop from './containers/shop/index'

const routeConfigure = (
    <Router>
        <Route path="/" component={Header}>
            <IndexRoute component={Home} />
            <Route path="/:id" component={Shop} />
        </Route>        
    </Router>
);

export default routeConfigure;

