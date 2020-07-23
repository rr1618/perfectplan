import {Row, Col, Button} from 'antd';
import React from 'react';
import CoursePageSlide2 from "./course2ndslide";
import CoursePageSlide3 from "./course3rdslide";
import Block1 from "../images/BLOCK1.png";
import Block2 from "../images/BLOCK2.png";



const CoursePage =(props)=>
{

    return (
        <Col>

             <Col  style={{ marginBottom:50
                        }}
    >
                    <Row >
                <Col span={8}>
                    <h3 style={{color:'white'}}>{props.user}</h3>
                <h1 className='bold-heading' style={{color:'#e3d0c5'}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h1>
                <Button className="homeButtons" size="large" style={{float:"left",marginTop:'1.2em',width:200,borderColor: "#fffff",borderWidth:2.5}}>
                <strong style={{color:'white',fontSize:'1.3em'}}>Enroll For Free</strong></Button>
                </Col>
            </Row>
                    <Row justify={'center'}>
                        <Col><img src={Block1} style={
                            {width:'25vw',marginRight:'2vw'}
                        }/></Col>

                    <Col><img src={Block2}  style={ { width:'25vw' }} alt=""/></Col>
                    </Row>
                    <Row justify="center">
            <Col style={{position:'relative',top:40}}  >
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

        <CoursePageSlide2/>
        <CoursePageSlide3/>

        </Col>

    )
}

export default CoursePage;