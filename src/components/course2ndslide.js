import React,{useState} from 'react'
import {Row, Col, Button,Space,Divider} from 'antd';
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import People from "../images/people.png";
import '../course2slide.css'
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
const CourseDetail=(props)=>
{
    return(
        <Col style={{backgroundColor:'#E5D2C7'}} justify={'center'}>
                     <Row justify="center">
                         <h3 style={{color:'#796051'}}>{props.detail}</h3>
                     </Row>
                     <Row justify={'center'}>
                         <a><Col><LeftOutlined style={{fontSize:70,position: 'relative',top:70,right:20}}/></Col></a>
                     <a><Col className={'course-slide1-down'}>
                          <Row justify={'center'}>
                                <h5 className={'heading'}>TensorFlow Introduction</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                     </Col></a>
                     <a><Col className={'course-slide1-down'}>
                         <Row justify={'center'}>
                                <h5 className={'heading'}>Convolurional Neural Network</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                     </Col></a>
                     <a><Col className={'course-slide1-down'}>
                         <Row justify={'center'}>
                                <h5 className={'heading'}>Natural Language Processing</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                     </Col></a>
                     <a ><Col><RightOutlined style={{fontSize:70,position: 'relative',top:70,left:20}} /></Col></a>
                     </Row>
                </Col>
    )
}
const CoursePageSlide1=()=>
{
    const [detail,setDetail] =useState('Machine Learning')
    return (<Col span={24}>
            <Col style={{marginTop:58}}>
                <Row style={{backgroundColor:'#E5D2C7',marginBottom:10,paddingBottom:5}} justify="center" >


                            <Col span={6}  style={{borderRightStyle:'solid',borderColor:'#CEB8AB',borderRightWidth:3,marginRight:30}}>
                                <Row>
                                        <img  className={'img-slide1'} src={People} />
                                        <Col>
                                                <h5 style={{color:'#836A5C'}}>Number of Students</h5>
                                            <h3 style={{color:'#836A5C'}}>1120</h3>
                                        </Col>

                                </Row>
                                </Col>

                      <Col span={6} style={{borderRightStyle:'solid',borderColor:'#CEB8AB',borderRightWidth:3,marginRight:30}}>
                          <Row>
                            <img  className={'img-slide1'}  src={ID} alt=""/>
                            <Col>
                                <h5 style={{color:'#836A5C'}}>Placed Students</h5>
                                <h3 style={{color:'#836A5C'}}>561</h3>
                            </Col>
                          </Row>


                      </Col>
                      <Col span={6}>
                      <Row>
                            <img  className={'img-slide1'}  src={Hand} alt=""/>
                            <Col>
                                <h5 style={{color:'#836A5C'}}>Number of Students</h5>
                                <h3 style={{color:'#836A5C'}}>101</h3>
                            </Col>
                          </Row>
                      </Col>




                   


                </Row>

                <Col style={{backgroundColor:'#E5D2C7',marginBottom:10}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051'}}>Course Categories</h3>
                    </Row>
                    <Row justify={'center'}>
                        <a><Col><LeftOutlined style={{fontSize:70,position: 'relative',top:70,right:20}}/></Col></a>

                    <Row >

                        <a onClick={()=>{setDetail('Machine Learning')}}><Col  className={'course-slide1' }  >

                            <Row justify={'center'}>
                                <h5 className={'heading'}>Machine Learning</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                    </Col></a>
                    <Col>
                        <a onClick={()=>{setDetail('Python')}} ><Col  className={'course-slide1'} style={{height:75,width:170,margin:0,marginBottom:8,marginTop:20}}>

                                <Row justify={'center'}>
                                <h5 className={'heading'} >Python</h5>
                            </Row>
                                <Row justify={'center'}>
                                    <h6 className={'details'} ></h6>
                                </Row>
                            </Col></a>
                        <a onClick={()=>{setDetail('Data Structures')}}><Col className={'course-slide1'} style={{height:75,width:170,margin:0,}} >
                         <Row justify={'center'}>
                                <h5 className={'heading'} >Data Structures</h5>
                            </Row>
                    </Col></a>
                    </Col>
                    </Row>
                    <Row>
                        <a onClick={()=>{setDetail('Digital Marketing')}}> <Col className={'course-slide1'} >
                            <Row justify={'center'}>
                                <h5 className={'heading'} >Digital Marketing</h5>
                            </Row>
                            <Row justify={'center'}>
                                <h6 className={'details'}>Digital Marketing is the component<br />
                                of marketing that utilizes internet<br />
                                and online based digital technologies<br />
                                such as desktop computers, mobile<br/>
                                phones,etc</h6>
                            </Row>
                        </Col></a>
                     <Col>
                         <a onClick={()=>{setDetail('Entrepreneurship')}} ><Col className={'course-slide1'} style={{height:75,width:170,margin:0,marginBottom:8,marginTop:20}} >
                                <Row justify={'center'}>
                                <h5 className={'heading'} style={{position:'absolute',bottom:0,color:'white'}}>Entrepreneurship</h5>
                            </Row>
                            </Col></a>
                         <a onClick={()=>{setDetail('Soft Skills')}} ><Col className={'course-slide1'} style={{height:75,width:170,margin:0}} >
                        <Row justify={'center'}>
                                <h5 className={'heading'} style={{position:'absolute',bottom:0,color:'white'}}>Soft Skills</h5>
                            </Row>
                    </Col></a>
                    </Col>
                    </Row>

                    <a ><Col><RightOutlined style={{fontSize:70,position: 'relative',top:70,left:20}} /></Col></a>
                    </Row>

                </Col>
                 <CourseDetail detail={detail}/>

            </Col>
    </Col>)
}
export default CoursePageSlide1