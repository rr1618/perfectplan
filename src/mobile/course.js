import {Row, Col, Button,Space} from 'antd';
import React, {useContext, useEffect, useState} from 'react';
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
import Course2 from "./course2";
import Course3 from "./course3";
import { DownOutlined,DownloadOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
import People from "../images/people.png";
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import ScrollMenu from "react-horizontal-scrolling-menu";
import Aos from 'aos'
import "aos/dist/aos.css"
import '../course2slide.css'
import '../course3rdslide.css'
import {ModalContext, TokenContext} from "../index";
import API from "../apiService";
import LoginModal from "../login";
import {Link} from "react-router-dom";
import Recruitment from "../images/recruitment.png";
import Cfooter from "./footer";

const customStylesMobile = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
      backgroundColor: '#F5E2CF',
      height:'60vh',
      width:'80vw'


  }
};

const MobileCoursePage =()=>
{
    var sessionUser = sessionStorage.getItem('username')
    var sessionToken = sessionStorage.getItem('token')
      const {token,setToken} = useContext(TokenContext)
    const {modal,setModal} = useContext(ModalContext)
    useEffect(()=>{
        Aos.init({duration:2000})
        console.log("useeffetc",sessionToken,sessionUser)
        API.checkToken({'user':sessionUser,'token':sessionToken}).then(res=>{
            console.log(res.data)
            if (res.data!==true)
                sessionStorage.clear()
        })
    },[])
    return (
        <Col  style={{

            backgroundSize:'100vw 57vh',
            backgroundRepeat: 'no-repeat',
                    backgroundImage: "url("+`${Laptop}`+")",
                        }}
    >
             <Col span={24} className="site-header" style={{ width: '100%',backgroundColor:'white'}}>
                 <Row>
                     <Col span={9} className="navbar" >

                <img  src={LogoDark} style={{height:25,width:120}} alt=""/>
            </Col>
                      <Col style={{marginTop: 10,borderRadius:10}}>
                    <button className='course-button' style={{borderRadius:10}} ><strong>E-SCHOOL</strong></button>
                {sessionToken?<button className='course-button' style={{backgroundColor: '#E5D2C7',borderRadius:10}} onClick={() => {
                    sessionStorage.clear()
                    window.location.reload()
                }}>
                    <strong>Logout</strong></button>:<button className='course-button' style={{backgroundColor: '#E5D2C7',borderRadius:10}} onClick={()=> {
                    setModal(true)
                }}>
                    <strong>LOGIN\ENROLL</strong></button>}
                {modal&&<LoginModal show={modal} cstyle={customStylesMobile}/>}
            </Col>
                 </Row>
    </Col>

            <Row>
                <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
                <div data-aos={'flip-left'}>
                    <Col span={24} style={{margin:15}}>
                     <h3 style={{color:'white'}}>{sessionUser}</h3>
                <h2 className='bold-heading' style={{color:'#e3d0c5',fontSize:35}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h2>
                <Link to='/course'><button className="homeButtons" style={{float:"left",width:200,borderColor: "#fffff",padding:6}}>
                <strong >ENROLL FOR FREE</strong></button></Link>
            </Col>
                </div>
            </Row>
            <Row justify='center'>
                <Col span={22} style={{backgroundImage:"url("+`${SecondBackground}`+")",
                    height:'30%',width:'40vw',marginTop:50,marginBottom:15,marginLeft:30,marginRight:30}}>
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



        <Course2/>
        <Row style={{marginTop:20}}>
                <img src={Recruitment} alt="" width="100%"/>
            </Row>
        <Course3/>
        <Cfooter/>
        </Col>
    )
}


export default MobileCoursePage