import React,{Fragment} from 'react';
import './App.css';
import './home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullPage, Slide } from 'react-full-page';
import {Col,Row} from 'antd'
import Home from './components/home'
import MobileHome from './components/mobileHome'
import Middle from "./components/secondpage";

import Media from 'react-media';

class App extends React.Component {
  render() {
    return (

        <Media queries={{
          small: "(min-width: 220px) and (max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px) and (max-width:1600px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <Col>
                  {console.log(matches.small)}
                  <MobileHome/>


              </Col>}
              {matches.medium && <h1>I am medium!</h1>}
                {matches.large && <Col>
                    <FullPage>
                        <Slide>
                            <Home/>
                        </Slide>
                        <Slide>
                            <Middle/>
                        </Slide>
                    </FullPage>
                </Col>}
              </Fragment>
          )}
        </Media>
    );
  }
}
export default App;
 
