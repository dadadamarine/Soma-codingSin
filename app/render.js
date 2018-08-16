import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './render.css';

// import Login from './user/login';
// import SignUp from './user/signup';
import Main from './page/main';
import NoMatch from './error/nomatch';
import Header from './component/header'
import Footer from './component/footer'
import Room from './page/room'

render(<Router>
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/room" component={Room} />
            <Route component={NoMatch} />
        </Switch>
        <Footer/>
    </div>
</Router>
    , document.getElementById('root'));