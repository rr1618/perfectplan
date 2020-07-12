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
import Certification from '../images/badge.png'
import { MailOutlined,DownOutlined } from '@ant-design/icons';
const MobileCoursePage =()=>
{
    return (
        <Col  style={{

            backgroundSize:'100vw 57vh',
            backgroundRepeat: 'no-repeat',
                    backgroundImage: "url("+`${Laptop}`+")",
                        }}
    >
             <Col span={24} className="site-header" style={{ width: '100%',backgroundColor:'white'}}>
                 <Row>
                     <Col span={10} className="navbar" >

                <img  src={LogoDark} style={{height:25,width:120}} alt=""/>
            </Col>
                      <Col span={14} style={{paddingTop:10}}>
                          <Row justify='right' style={{marginLeft:20}}>
                              <button className='course-button' size="small" >
                                  <p className='text-in-button' >E-SCHOOL</p></button>
            <button className='course-button' size='small'><p className='text-in-button'>LOGIN/ENROLL</p></button>
                          </Row>

            </Col>
                 </Row>
    </Col>

            <Row>
                <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
                <Col span={24} style={{margin:15}}>
                <h2 className='bold-heading' style={{color:'#e3d0c5',fontSize:42}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h2>
                <Button className="homeButtons" size="large" style={{float:"left",borderWidth:3,marginTop:5}}>
                <strong style={{color:'white'}}>Enroll For Free</strong></Button>
            </Col>
            </Row>
            <Row justify='center'>
                <Col span={22} style={{backgroundImage:"url("+`${SecondBackground}`+")",
                    height:'30%',width:'40vw',marginTop:30,marginBottom:15,marginLeft:30,marginRight:30}}>
                          <Row style={{}}>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Lectures} alt=""/>
                                  <h5 className='course-topics'>VIDEO <br /> LECTURES</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Live} alt=""/>
                                    <h5 className='course-topics'>LIVE <br /> CLASSES</h5>
                                  </Row>
                              </Col>
                          </Row>
                    <Row>
                              <Col span={12} >

                                  <Row>
                                      <img className='course-names-icons' src={Quizzes} alt=""/>
                                  <h5 className='course-topics'>REALTIME <br/>QUIZZES</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Doubt} alt=""/>
                                  <h5 className='course-topics'>1-On-1<br />DOUBTS</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
            </Row>
            <Row justify='center'>
                <Col span={22}  style={{backgroundImage:"url("+`${SecondBackground}`+")",height:'30%',width:'40vw',
                marginLeft:30,marginRight:30}}>
                          <Row>

                                      <Col span={12}  >

                                  <Row>
                                      <img className='course-names-icons' src={Certification} alt=""/>
                                  <h5 className='course-topics'>CERTIFICATION</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Software} alt=""/>
                                    <h5 className='course-topics'>SOFT SKILLS<br /> TRAINING</h5>
                                  </Row>
                              </Col>


                          </Row>
                    <Row>
                              <Col span={12} >

                                  <Row>
                                      <img className='course-names-icons' src={Resume} alt=""/>
                                  <h5 className='course-topics'>RESUME <br/>BUILDING</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Placement} alt=""/>
                                  <h5 className='course-topics'>JOBS AND<br />PLACEMENT</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
            </Row>
            <Row style={{marginTop:20}}>
                <Col span={24}>
                    <h5 style={ { color:'black',textAlign:'center'}}>Get trained! Get certified! </h5>
                    <h6 style={ { color:'#715335' ,textAlign:'center'}}>Get your first job/internship or hike in your CTC by 40% to 60%</h6>
                    <Row justify={'center'}>
                        <DownOutlined style={{fontSize:30}}/>
                    </Row>

                </Col>


            </Row>
            <Row justify='center'>
                <Col>

                </Col>

            </Row>



        </Col>
    )
}
export default MobileCoursePage