import {Row, Col} from 'antd';
import React from 'react';
import CoursePageSlide2 from "./course2ndslide";
import CoursePageSlide3 from "./course3rdslide";
import Block1 from "../images/BLOCK1.png";
import Block2 from "../images/BLOCK2.png";



const CoursePage =(props)=>
{

    return (
        <Col>

             <Col  style={{ marginBottom:50,position: 'relative',top:-110
                        }}
    >
                    <Row justify={'center'}>
                        <Col><img src={Block1} style={
                            {width:450,marginRight:'2vw'}
                        }/></Col>

                    <Col><img src={Block2}  style={ { width:450 }} alt=""/></Col>
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