import {Row, Col, Button} from 'antd';
import React, {useEffect} from 'react';
import CoursePageSlide2 from "./course2ndslide";
import CoursePageSlide3 from "./course3rdslide";
import Laptop from "../images/brightlaptop.png";
import Block1 from "../images/BLOCK1.png";
import Block2 from "../images/BLOCK2.png";
import {NavBar} from "./detail";
import Cfooter from "./footer";
import {
DownOutlined ,
} from '@ant-design/icons';
import TweenOne from "rc-tween-one";

const CoursePage =(props)=>
{
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <Col span={24}>
            <NavBar/>
            <Col style={{height:'100vh'}}>
        <Col style={{backgroundImage: "url("+`${Laptop}`+")",

            backgroundSize:'cover',padding:35,paddingTop:80,

            paddingBottom:0}}>

                <Row >
                    <Col >
                    <h1 className='bold-heading' style={{color:'white'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>
            <Button className="homeButtons" size="large" style={{backgroundColor:'#6A4E3D',float:"left",marginTop:'1.2em',width:200,borderStyle:'none',padding:5}}>
                <strong style={{color:'white',fontSize:'1.3em',}}>ENROLL NOW</strong></Button>
                </Col>
                </Row>
                        <Row justify={'center'} style={{position: 'relative',bottom:-75}}>
                        <Col ><img src={Block1} style={
                            {width:450,marginRight:'2vw',marginTop:0}
                        }/></Col>

                    <Col><img src={Block2}  style={ { width:450 }} alt=""/></Col>
                    </Row>

            </Col>
                    <Row justify="center" >
            <Col   style={{position: 'absolute',bottom:0}}>
                     <Row justify={'center'} >

                    <hr className="new" style={{width:'20%',marginRight:10}} /><h3 style={ { color:'#715335' }}>Get trained! Get certified! </h3>
                <hr className="new" style={{width:'20%',marginLeft:10}} />
            </Row>
            <Col justify='center'>

                <h3 style={ { color:'#715335' }}>Get your first job/internship or hike in your CTC by 40% to 60%</h3>
                <Row justify={'center'}>
                    <DownOutlined style={ { fontSize:60,color:"#715335", }} />
                </Row>

            </Col>



                        </Col>

                     </Row>

                </Col>
        <CoursePageSlide2/>
        <CoursePageSlide3/>
        <Cfooter/>
        </Col>

    )
}

export default CoursePage;