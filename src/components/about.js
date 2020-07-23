import {Row, Col, Button} from 'antd';
import React from 'react';


const About =(props)=>
{
    return (<Col  style={{ marginBottom:50
                        }}
    >
                    <Row >
                <Col  style={{marginBottom:20}}>
                    <h3 style={{color:'white'}}>{props.user}</h3>
                <h1 className='bold-heading' style={{color:'#e3d0c5'}} ><strong>PERFECT ONE-STOP <br /> SOLUTION</strong><br /></h1>
                <Button className="homeButtons" size="large" style={{float:"left",marginTop:'1.2em',width:250,borderColor: "#fffff",borderWidth:2.5}}>
                <strong style={{color:'white',fontSize:'1.3em'}}>EXPLORE SERVICES</strong></Button>
                </Col>
            </Row>
             <Row justify={'center'}>

                        <Col >
                            <Row >
                            <Col ><h5 style={{backgroundColor:'rgba(122,83,63, .8)',padding:35,color:'white',textAlign:'center',marginRight:100}}>HELPING STUDENTS AND WORKING<br />
                        PROFESSIONALS GET READY FOR<br />
                        THEIR DREAM JOB</h5></Col>
                        <Col >
                            <h5 style={{backgroundColor:'rgba(122,83,63, .8)',padding:35,color:'white',textAlign:'center'}}>PROVIDING BUSINESSS THE
                        PERFECT <br /> PLAN B TO START OR<br/>
                        GROW TO TEN TIMES</h5>
                        </Col>
                                      </Row>
                        </Col>
             </Row>

                        


                    <h4 style={{textAlign: 'center' ,marginTop:20}}><h5>SERVICES PROVIDED BY PERFECT PLAN B</h5></h4><br />
                    <hr className="new" style={{width:'20%',textAlign: 'center',marginTop:0}} />
                    <Row  className={'about'}   justify={'center'}>

                        <Col >
                            <button ><h6>BUSINESS COUNSELLING AND OPPURTUNITY</h6></button><br/>
                            <button><h6>BUSINESS AND TAX ADVISORY</h6></button><br/>
                            <button><h6>E-LEARNING(LEARN HOW TO EARN)</h6></button><br/>
                        </Col>
                        <Col>
                            <button><h6>MARKETING PLAN</h6></button><br/>
                            <button><h6>E-BUSINESS(WEB & APP DEVEPLOPMENT)</h6></button><br/>
                            <button><h6>PROJECT MANAGEMENT</h6></button><br/>
                        </Col>
                     </Row>

        </Col>)
}
export default About