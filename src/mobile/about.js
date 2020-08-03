import {Row, Col} from 'antd';
import React from 'react';

const About =(props)=>
{
    return (<Col
    >
             <Row justify="center" style={{position: 'relative',top:-150}}>
                 <Row className={'about-strip'}  >
                     <h6 style={{color:'white',fontWeight:'bold'}}>HELPING STUDENTS AND WORKING <br/> PROFESSIONALS GET READY FOR <br/> THEIR DREAM JOB</h6></Row>
                 <Row className={'about-strip'} >
                     <h6 style={{color:'white',fontWeight:'bold'}}>PROVIDING BUSINESS THE  <br/>PERFECT PLAN B TO START OR <br/>  GROW TO TEN TIMES.</h6></Row>
             </Row>
        <Row className={'about'} justify="center">
              <Col
                  style={{position: 'relative',top:-100}}
              >
                    <div >
                    <h4 style={{textAlign:'center',color:'#5B4233',fontWeight:'bold'}}  >SERVICES PROVIDED BY <br/>PERFECT PLAN B</h4>
                    </div>
                  <Row justify={'center'}>
                    <div className={'hildu'}></div>
                  </Row>


                    <Row     justify={'center'}>

                        <Col span={20} >
                            <a ><h6 >BUSINESS COUNSELLING AND OPPURTUNITY</h6></a><br/>
                            <a><h6>BUSINESS AND TAX ADVISORY</h6></a><br/>
                            <a><h6>E-LEARNING(LEARN HOW TO EARN)</h6></a><br/>
                        </Col>
                        <Col span={20} >
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