import React,{useEffect,useState,Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullPage, Slide } from 'react-full-page';
import {Col,Row} from 'antd'
import Home from './components/home'
import Middle from "./components/secondpage";
import Footer from "./components/footer"

import Media from 'react-media';
const Loading = ()=>
{
    return (<h1>loading.......</h1>)
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <Col>
                  <Home/>
                  <Row><Middle/></Row>

              </Col>}
              {matches.medium && <h1>I am medium!</h1>}
              {matches.large && <Col>
                  <FullPage>

                        <Slide>
                          <Home/>
                      </Slide>
                      <Slide>
                          <Row>
                              <Middle/>
                          </Row>
                      </Slide>
                      <Slide>
                           <Row><Footer/></Row>
                      </Slide>

                  </FullPage>
              </Col>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}
export default App;
 
