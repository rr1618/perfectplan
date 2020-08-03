import { Row,Col,Button} from 'antd';
import React,{useState} from 'react';
import icon1 from '../images/icon1.png'
import LoginModal from "../login";
import Background from '../images/background.png';
import Logo from '../images/mobilelogo.png';
import MobBack from '../images/mobileBack2.png';
import SecondBackground from "../images/back2.png";
import icon2 from "../images/icon2.png";
import {Link} from "react-router-dom";
const MoblieHome =()=>
{

    return (
        <Col>
        <Col  style={{
                    minHeight: '100vh',
                    width:'100%',
                    backgroundImage: "url("+`${Background}`+")",

                        }}

    >
            <Col className="site-header" style={{ width: '100%',position: 'fixed', zIndex:1}}>
        <Row justify='center' >
            <Col className="navbar"  >
                <img  src={Logo} style={{height:30}} alt=""/>
            </Col>
        </Row>

    </Col>


            <Col className="home-boxes"  style={{padding:25}}>
                <Col style={{marginTop: 50}}>
                    <p style={{lineHeight:"15px",fontSize:14,textAlign:"left"}}>Python<br/>
                    Data Structure<br/>
                    Machine Learning<br/>
                    Digital Marketing<br />
                    Enterpreneurship<br/>
                    Personal Development<br /></p>
                <h2   className='bold-heading' style={{textAlign:"left",fontSize:22}}><strong>GET READY FOR <br/> YOUR DREAM CAREER</strong></h2>
                <h6 className='bold-heading' style={{textAlign:"left",fontSize:14}}>Learn, Grow and Become Leaders of Tomorrow</h6>
                <Link to='/course'><Button className='home-buttons'
                 size="large" >
                <strong>ENROLL FOR FREE</strong></Button></Link>

            </Col>
            <Col style={{width:200,marginLeft:60,marginTop:100}}>
                <hr className='rounded'/>
            </Col>

            <Col  style={{position:'static',paddingRight:15,paddingTop:10}}>

                        <Button className="home-buttons" size="large" style={ {float: "right"}} >
                    <strong>GET PLAN B NOW</strong></Button><br /><br />


                       <h4  style={{color:"white",textAlign:'right',fontSize:14,marginTop:10}}>One Stop Solution to help Grow Your Business</h4>
                    <h2 style={{textAlign:"right",fontSize:24,color:'#e3d0c5'}} ><strong>GROW YOUR BUSINESS<br /> TO TEN TIMES</strong></h2>

                    <p style={{lineHeight:"15px",fontSize:14,textAlign:"right",paddingTop:8}}>Website/App Development<br/>
                    Digital Marketing<br/>
                    Software Development<br />
                    Project Management<br/>
                    Tax Advisory<br />
                    Sales and Marketing</p>
                    </Col>
                </Col>
        </Col>
            <Col style={{
                    minHeight: '100vh',
                    width:'100vw',
                    backgroundImage: "url("+`${MobBack}`+")",
                    backgroundSize: '100%',
                zIndex:-1


                        }}

            >
                <Row >
                    <Col  >

                   <Row justify='center'>
                        <Col span={20} style={{backgroundImage:"url("+`${SecondBackground}`+")",
                            height:270,width:'50%',marginTop:15}} >
                        <Row justify='center'>
                                <Col>
                                    <Row justify={'center'}>
                                        <img src={icon1} style={{height:80,width:80}} alt=""/>
                                    </Row>

                          <h2 style={{color:'#4F3B33'}}><strong>E-LEARNING</strong></h2>
                          <h6 style={{color:'white',textAlign:'center'}}>We help you learn,<br />
                          grow and become<br />
                          the leaders of<br />
                          tomorrow</h6>
                          <Row justify={'center'}>
                                        <Link to='/course'><Button className='home-buttons' style={{backgroundColor:'#F3DDD1',color:'#8A7162 '}}>
                                            <strong>START NOW</strong></Button></Link>
                                    </Row>
                                </Col>
                        </Row>
                </Col>
                   </Row>
                        <Row justify={'center'}>
                             <Col style={{width:200}}>
                <hr className='rounded' style={{borderColor: '#EFD9CD'}}/>
            </Col>
                        </Row>

                        <Row justify='center'>
                            <Col span={20} style={{backgroundImage:"url("+`${SecondBackground}`+")",
                                height:270,width:'100vw'}}>
                    <Row justify='center'>
                                <Col>
                                    <Row justify={'center'}>
                                         <img src={icon2} style={{height:80,width:80}} alt=""/>
                                    </Row>

                          <h2 style={{textAlign:'center',color:'#4F3B33'}}><strong>E-BUSINESS</strong></h2>
                          <h6 style={{color:'white',textAlign:'center'}}>We provide the ,<br />
                          one stop solution<br />
                          to help grow your<br />
                          business</h6>
                                    <Row justify={'center'}>
                                        <Link to='/course'><Button className='home-buttons' style={{backgroundColor:'#F3DDD1',color:'#8A7162 '}}>
                                            <strong>START NOW</strong></Button></Link>
                                    </Row>

                                </Col>
                    </Row>
                </Col>
                        </Row>

                </Col>
                </Row>
            </Col>
             </Col>
    )
}
export default MoblieHome;