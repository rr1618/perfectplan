import {Row, Col} from 'antd';
import React from 'react';

const About =(props)=>
{
    return (<Col
    >
             <Row justify="center" style={{position: 'relative',top:-60}}>
                 <Col className={'about-strip'}>
                     <h5 style={{color:'white',fontWeight:'bold'}}>HELPING STUDENTS AND WORKING <br/> PROFESSIONALS GET READY FOR <br/> THEIR DREAM JOB</h5></Col>
                 <Col className={'about-strip'} style={{marginLeft:30}}>
                     <h5 style={{color:'white',fontWeight:'bold'}}>PROVIDING BUSINESS THE  <br/>PERFECT PLAN B TO START OR <br/>  GROW TO TEN TIMES.</h5></Col>
             </Row>
        <Row className={'about'} justify="center">
              <Col style={{position: 'relative',top:-20}} >
                    <div >
                    <h4 style={{textAlign:'center',color:'#5B4233',fontWeight:'bolder'}}  >SERVICES PROVIDED BY PERFECT PLAN B</h4>
                    </div>
                  <Row justify={'center'}>
                    <div className={'hildu'}></div>
                  </Row>


                    <Row     justify={'center'}>

                        <Col style={{marginRight:15}} >
                            <a ><h6 >BUSINESS COUNSELLING AND OPPURTUNITY</h6></a><br/>
                            <a><h6>BUSINESS AND TAX ADVISORY</h6></a><br/>
                            <a><h6>E-LEARNING(LEARN HOW TO EARN)</h6></a><br/>
                        </Col>
                        <Col>
                            <a><h6>MARKETING PLAN</h6></a><br/>
                            <a><h6>E-BUSINESS(WEB & APP DEVEPLOPMENT)</h6></a><br/>
                            <a><h6>PROJECT MANAGEMENT</h6></a><br/>
                        </Col>
                     </Row>
                </Col>
        </Row>
        <Row>
            <Col>

            </Col>
        </Row>
        </Col>)
}
export default About