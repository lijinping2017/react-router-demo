import React,{Component} from 'react';

import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Home from './Home';
import News from './News';

class MyRouter extends Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Router>
				<div>
					<Link to='/'>首页</Link>
					<Link to='/news'>新闻</Link>
				</div>
				<Route exact path='/' component={Home} />
				<Route path='/news' component={News} />
			</Router>
		)
	}
}

export default MyRouter;