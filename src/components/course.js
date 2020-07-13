import {Row, Col, Button} from 'antd';
import React from 'react';
import { FullPage, Slide } from 'react-full-page';
import CoursePageSlide1 from "./course2ndslide";
import Laptop from "../images/brightlaptop.png";
import LogoDark from '../images/logodark.png'

import Magnifier from "../images/magnifier.png";

import Block1 from "../images/BLOCK1.png";
import Block2 from "../images/BLOCK2.png";

const CoursePage =()=>
{
    return (
        <FullPage>

        <Slide>
             <Col  style={{
height:'100vh',
            backgroundSize:'100vw 65vh',
            backgroundRepeat: 'no-repeat',
                    backgroundImage: "url("+`${Laptop}`+")",

                        }}
    >
             <Col className="site-header" style={{ width: '100%',backgroundColor:'white',position: 'fixed',zIndex:2}}>
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
                 <Col >
                     <Row >
                <Col span={8} style={{margin:30,marginBottom:'3.5vh',marginTop:'15vh',height:'33vh'}}>
                <h1 className='bold-heading' style={{color:'#e3d0c5'}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h1>
                <Button className="homeButtons" size="large" style={{float:"left",marginTop:'2vh',width:'12vw',borderColor: "#fffff",borderWidth:2.5}}>
                <strong style={{color:'white'}}>Enroll For Free</strong></Button>
                </Col>
            </Row>
                 </Col>
                <Col>
                    <Row justify={'center'}>
                        <Col><img src={Block1} style={
                            {width:'25vw',marginRight:'2vw'}
                        }/></Col>

                    <Col><img src={Block2}  style={ { width:'25vw' }} alt=""/></Col>
                    </Row>

                </Col>

                 <Row justify="center">
            <Col style={{position:'absolute',bottom:'2vh'}}  >
                     <Row justify={'center'} >

                    <hr className="new" style={{width:'20%',marginRight:10}} /><h3 style={ { color:'#715335' }}>Get trained! Get certified! </h3>
                <hr className="new" style={{width:'20%',marginLeft:10}} />
            </Row>
            <Row justify='center'>

                <h3 style={ { color:'#715335' }}>Get your first job/internship or hike in your CTC by 40% to 60%</h3>
            </Row>
                 </Col>
                     </Row>
        </Col>
        </Slide>
            <Slide>
                <CoursePageSlide1/>
            </Slide>

                    </FullPage>
    )
}

export default CoursePage;