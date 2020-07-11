import {Row, Col, Button} from 'antd';
import React,{useState} from 'react';
import Laptop from "../images/brightlaptop.png";
import LogoDark from '../images/logodark.png'
import SecondBackground from "../images/back2.png";
import Lectures from "../images/videolecture.png";
import Doubt from "../images/doubts.png"
import Live from "../images/liveclasses.png";
import Magnifier from "../images/magnifier.png";
import Quizzes from "../images/quizzes.png";
import Resume from "../images/resume.png";
import Software from "../images/software.png";
import Placement from "../images/placement.png";
import icon2 from "../images/icon2.png";
import Certification from '../images/badge.png'
import { SearchOutlined } from '@ant-design/icons';
import Background from "../images/background.png";

const CoursePage =()=>
{
    return (
        <Col  style={{

            backgroundSize:'100vw 65vh',
            backgroundRepeat: 'no-repeat',
                    backgroundImage: "url("+`${Laptop}`+")",
                        }}
    >
             <Col className="site-header" style={{ width: '100%',backgroundColor:'white'}}>
        <Row >
            <Col className="navbar" >
                <img  src={LogoDark} style={{height:40}} alt=""/>
            </Col>

             <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
            <Col style={{marginLeft: 100,marginTop: 10}}>
                    <button className='course-button' ><strong>E-SCHOOL</strong></button>
            <button className='course-button' style={{backgroundColor:'#E5D2C7'}}><strong>LOGIN/ENROLL</strong></button>
            </Col>

        </Row>
    </Col>

            <Row>
                <Col span={8} style={{margin:30}}>
                <h1 className='bold-heading' style={{color:'#e3d0c5'}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h1>
                <Button className="homeButtons" size="large" style={{float:"left",marginTop:15,width:200,borderColor: "#fffff",borderWidth:2.5}}>
                <strong style={{color:'white'}}>Enroll For Free</strong></Button>
            </Col>
            </Row>
            <Row justify='center'>
                <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")",height:'30%',width:'40vw',marginRight:40}}>
                          <Row>
                              <Col style={{marginRight:25}}>
                                  <Row>
                                      <img className='course-names-icons' src={Lectures} alt=""/>
                                  <h5 className='course-topics'>VIDEO <br /> LECTURES</h5>
                                  </Row>
                              </Col>
                              <Col>
                                  <Row>
                                      <img className='course-names-icons' src={Live} alt=""/>
                                    <h5 className='course-topics'>LIVE <br /> CLASSES</h5>
                                  </Row>
                              </Col>
                          </Row>
                    <Row>
                              <Col style={{marginRight:25}}>

                                  <Row>
                                      <img className='course-names-icons' src={Quizzes} alt=""/>
                                  <h5 className='course-topics'>REALTIME <br/>QUIZZES</h5>
                                  </Row>
                              </Col>
                              <Col>
                                  <Row>
                                      <img className='course-names-icons' src={Doubt} alt=""/>
                                  <h5 className='course-topics'>1-On-1<br />DOUBTS</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
                <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")",height:'30%',width:'40vw',marginRight:10}}>
                          <Row>

                                      <Col style={{marginRight:25}}>

                                  <Row>
                                      <img className='course-names-icons' src={Certification} alt=""/>
                                  <h5 className='course-topics'>Certification</h5>
                                  </Row>
                              </Col>
                              <Col>
                                  <Row>
                                      <img className='course-names-icons' src={Software} alt=""/>
                                    <h5 className='course-topics'>SOFT SKILLS<br /> TRAINING</h5>
                                  </Row>
                              </Col>
                                 

                          </Row>
                    <Row>
                              <Col style={{marginRight:25}}>

                                  <Row>
                                      <img className='course-names-icons' src={Resume} alt=""/>
                                  <h5 className='course-topics'>RESUME <br/>BUILDING</h5>
                                  </Row>
                              </Col>
                              <Col>
                                  <Row>
                                      <img className='course-names-icons' src={Placement} alt=""/>
                                  <h5 className='course-topics'>JOBS AND<br />PLACEMENT</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>

            </Row>
            <Row style={{marginTop:20}}>

                    <hr className="new" style={{width:'20%',marginRight:10}} /><h3 style={ { color:'#715335' }}>Get trained! Get certified! </h3>
                <hr className="new" style={{width:'20%',marginLeft:10}} />
            </Row>
            <Row justify='center'>

                <h3 style={ { color:'#715335' }}>Get your first job/internship or hike in your CTC by 40% to 60%</h3>
            </Row>



        </Col>
    )
}

export default CoursePage;