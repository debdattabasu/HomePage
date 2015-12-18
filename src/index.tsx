import { App } from "./app/App";
import { AboutPage } from "./app/AboutPage";
import { HomePage } from "./app/HomePage";
import * as React from 'react';
import * as ReactDom from 'react-dom';
import {Router, Route, IndexRoute} from "react-router";
import * as History from "history"; 

require('./style/Global.css');
require('./style/Raleway.css');

var container = document.createElement('div');
container.id = 'container'; 
document.body.appendChild(container);

var history = History.createHistory();

ReactDom.render(
	<Router history={history}>
		<Route path="/" component={App}>
			<Route path="about" component={AboutPage}/>
			<IndexRoute component={HomePage}/>
		</Route>
	</Router>
, container);