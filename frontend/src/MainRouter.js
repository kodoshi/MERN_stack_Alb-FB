import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from './home/HomePage';
import RegisterUser from './user/RegisterUser';
import LoginUser from './user/LoginUser';
import Navigation from './home/Navigation'; 
import UserProfile from './user/UserProfile';
import Users from './user/Users'; 
import EditUser from './user/EditUser';
import FindPeople from './user/FindPeople'; 
import CreatePost from './post/CreatePost'; 
import SinglePost from './post/SinglePost'; 
import EditPost from './post/EditPost';
import Admin from './admin/Admin'

import PrivateRoute from './auth/PrivateRoute'; 





class MainRouter extends React.Component {

render() {
	return (
	<div>
	<Navigation />
		<Switch>
			<Route exact path="/" component={HomePage} />
			<PrivateRoute Route exact path="/post/:postId" component={SinglePost} />
			<PrivateRoute exact path="/post/edit/:postId" component={EditPost} />
			<Route exact path="/users" component={Users} />
			<Route exact path="/signup" component={RegisterUser} />
			<Route exact path="/signin" component={LoginUser} />
			<PrivateRoute exact path="/user/edit/:userId" component={EditUser} />
			<PrivateRoute exact path="/findfriends" component={FindPeople} />
			<PrivateRoute exact path="/user/:userId" component={UserProfile} />
			<PrivateRoute exact path="/add/post" component={CreatePost} />
			<PrivateRoute exact path="/admin" component={Admin} />
		</Switch>
	</div>
		)
}

	
}

export default MainRouter;