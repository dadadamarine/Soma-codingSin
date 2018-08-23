import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './render.css';

// import Login from './user/login';
// import SignUp from './user/signup';
import Main from './page/main';
import NoMatch from './error/nomatch';
import Header from './component/header';
import Footer from './component/footer';
import Room from './page/room';
import Login from './page/login';
import SingUp from './page/signup';
import Active from './page/active';
import Lecture from './page/lecture';

render(<Router>
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/room" component={Room} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SingUp} />
            <Route path="/active/:code" component={Active} />
            <Route path="/lecture" component={Lecture} />
            <Route missing component={NoMatch} />
        </Switch>
        <Footer/>
    </div>
</Router>
    , document.getElementById('root'));