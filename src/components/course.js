import {Row, Col} from 'antd';
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
import {Link} from "react-router-dom";
import Recruitment from "../images/recruitment.png";
import Aos from "aos";

const CoursePage =(props)=>
{
    useEffect(() => {
        Aos.init({duration:2000})
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
                    <div ><Col  >
                    <h1 data-aos={'fade-right'} data-aos-duration={1000} className='bold-heading' style={{color:'#E5D2C7'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>
            <Link data-aos={'fade-left'} to='/course'><button className="homeButtons" style={{float:"left",width:220,borderColor: "#fffff",padding:10}}>
                <strong >ENROLL FOR FREE</strong></button></Link>
                </Col></div>
                </Row>
                        <Row justify={'center'} style={{position: 'relative',bottom:-75}}>
                        <Col ><img data-aos={'fade-down'} src={Block1} style={
                            {width:450,marginRight:50}
                        }/></Col>

                    <Col><img data-aos={'fade-up'} src={Block2}  style={ { width:450 }} alt=""/></Col>
                    </Row>

            </Col>
                    <Row justify="center" >
            <Col   style={{
                position: 'absolute',
                bottom:0}}>
                     <Row justify={'center'} >

                    <hr className="new" style={{width:'20%',marginRight:10,borderWidth:3}} /><h4 style={ { color:'#715335' }}>Get trained! Get certified! </h4>
                <hr className="new" style={{width:'20%',marginLeft:10,borderWidth:3}} />
            </Row>
            <Col justify='center'>

                <h5 style={ { color:'#715335' }}>Get your first job/internship or hike in your CTC by 40% to 60%</h5>
                <Row justify={'center'}>
                    <DownOutlined style={ { fontSize:30,color:"#715335", }} />
                </Row>

            </Col>



                        </Col>

                     </Row>

                </Col>
        <CoursePageSlide2/>
          <Row style={{marginTop:20}}>
                <img data-aos={'fade-left'} src={Recruitment} alt="" width="100%"/>
            </Row>
        <CoursePageSlide3/>
        <Cfooter/>
        </Col>

    )
}

export default CoursePage;