import React,{Fragment} from 'react';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullPage, Slide } from 'react-full-page';
import {Col,Row} from 'antd'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Home from './components/home'
import Middle from "./components/secondpage";
import CoursePage from "./components/course";
import MobileCoursePage from "./mobile/course";
import Media from 'react-media';
import {DetailPage} from "./components/detail";
import CourseDetail from "./components/courseDetail";
import Section from "./components/scrollp";
import MoblieHome from "./mobile/home";
import {MobileDetailPage} from './mobile/detail'
import MobileCourseDetail from "./mobile/courseDetail";
import MediaPolicy from "./components/MediaPolicy";
import MobileMediaPolicy from "./mobile/MediaPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import MobilePrivacyPolicy from "./mobile/PrivacyPolicy";
import RefundPolicy from "./components/RefundPolicy";
import MobileRefundPolicy from "./mobile/RefundPolicy";
import Tnc from "./components/Terms";
import MobileTnc from "./mobile/Terms";
class App extends React.Component {
  render() {
    return (

        <Media queries={{
          small: "(min-width: 220px) and (max-width: 599px)",
          large: "(min-width: 600px) "
        }}>
          {matches => (
            <Fragment>
              {matches.small && <Col>
                  {console.log("device width",matches.small)}
                   <BrowserRouter >

                          <Switch>
                                 <Route exact  path="/">

                                     <Slide><MoblieHome/></Slide>


                                 </Route>
                              <Route exact path="/test" >
                        <Section/>

                    </Route>

                    <Route exact path="/course" >
                        <MobileCoursePage/>

                    </Route>
                    <Route exact path="/course/:courses" >
                        <MobileCourseDetail />
                    </Route>
                             <Route exact path="/:page" >
                        <MobileDetailPage/>
                    </Route>
                              <Route exact path="/policy/privacy" >
                        <MobilePrivacyPolicy/>
                    </Route>
                              <Route exact path="/policy/media" >
                        <MobileMediaPolicy/>
                    </Route>
                     <Route exact path="/policy/refund" >
                        <MobileRefundPolicy/>
                    </Route>
                              <Route exact path="/policy/terms" >
                        <MobileTnc/>
                    </Route>


                          </Switch>

</BrowserRouter>
              </Col>}
                {matches.large &&
                    <Col>
                         <BrowserRouter >

                          <Switch>
                                 <Route exact  path="/">
                                 <FullPage>
                                     <Slide><Home/></Slide>
                                     <Slide><Row><Middle/></Row></Slide>
                                 </FullPage>
                                 </Route>
                              <Route exact path="/test" >
                        <Section/>

                    </Route>

                    <Route exact path="/course" >
                        <CoursePage/>

                    </Route>
                    <Route exact path="/course/:courses" >
                        <CourseDetail />
                    </Route>
                             <Route exact path="/:page" >
                        <DetailPage/>
                    </Route>

                              <Route exact path="/policy/privacy" >
                        <PrivacyPolicy/>
                    </Route>
                              <Route exact path="/policy/media" >
                        <MediaPolicy/>
                    </Route>
                     <Route exact path="/policy/refund" >
                        <RefundPolicy/>
                    </Route>
                              <Route exact path="/policy/terms" >
                        <Tnc/>
                    </Route>

                          </Switch>

</BrowserRouter>
                </Col>
                     }
              </Fragment>
          )}
        </Media>
    );
  }
}
export default App;
 
