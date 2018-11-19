import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './render.css';

import NoMatch from './error/nomatch';
import Header from './component/header';
import Footer from './component/footer';
import Room from './page/room';
import Login from './page/login';
import SingUp from './page/signup';
import Active from './page/active';
import Lecture from './page/lecture';
import Tutor from './page/tutor';
import Content from './page/content';
import ContentDetail from './page/contentDetail';
import Community from './page/community';
import LectureReg from './page/lectureReg';
import LectureDetail from './page/lectureDetail';
import MyLecture from './page/myLecture';
import Admin from './page/admin';
import TutorDetail from './page/tutorDetail';
import TutorReview from './page/tutorReview';
import TutorActivity from './page/tutorActivity';
import TutorLecture from './page/tutorLecture';
import Notice from './page/notice';
import NoticeWrite from './page/noticeWrite';        


render(<Router>
    <div>    
        {location.pathname.startsWith("/room")?null:<Header/>}
        <Switch>
            <Route exact path="/" component={Lecture} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SingUp} />
            <Route path="/active/:code" component={Active} />
            <Route exact path="/lecture" component={Lecture} />
            <Route exact path="/tutor" component={Tutor}/>
            <Route exact path="/content" component={Content}/>
            <Route exact path="/content/:id" component={ContentDetail}/>
            <Route exact path="/community" component={Community}/>
            <Route exact path="/community/notice" component={Notice}/>
            <Route exact path="/community/notice/new" component={NoticeWrite}/>
            <Route path="/lectureReg" component={LectureReg} />
            <Route path="/lecture/:id" component={LectureDetail} />
            <Redirect exact from="/tutor/:id" to="/tutor/:id/detail"/>
            <Route path="/tutor/:id/detail" component={TutorDetail}/>
            <Route path="/tutor/:id/review" component={TutorReview}/>
            <Route path="/tutor/:id/activity" component={TutorActivity}/>
            <Route path="/tutor/:id/lecture" component={TutorLecture}/>
            <Route path="/room" component={Room} />
            <Route path="/myLecture" component={MyLecture} />
            <Route path="/admin" component={Admin} />
            <Route missing component={NoMatch} />
        </Switch>
        {location.pathname.startsWith("/room")?null:<Footer/>} 
    </div>
</Router>
    , document.getElementById('root'));