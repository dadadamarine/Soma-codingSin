import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './render.css';

import Main from './page/main';
import NoMatch from './error/nomatch';
import Header from './component/header';
import Footer from './component/footer';
import Room from './page/room';
import Login from './page/login';
import SingUp from './page/signup';
import Active from './page/active';
import Lecture from './page/lecture';
import LectureReg from './page/lectureReg';
import LectureDetail from './page/lectureDetail';
import MyLecture from './page/myLecture';

render(<Router>
    <div>
        <Switch>
            <Route path="/room" component={Room} />
            <Header/>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/room" component={Room} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={SingUp} />
                    <Route path="/active/:code" component={Active} />
                    <Route exact path="/lecture" component={Lecture} />
                    <Route path="/lectureReg" component={LectureReg} />
                    <Route path="/lecture/:id" component={LectureDetail} />
                    <Route path="/myLecture" component={MyLecture} />
                    <Route missing component={NoMatch} />
                </Switch>
            <Footer/>
        </Switch>
    </div>
</Router>
    , document.getElementById('root'));