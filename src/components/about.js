import {Row, Col} from 'antd';
import React from 'react';

const About =(props)=>
{
    return (<Col
    >
             <Row justify="center" style={{position: 'relative',top:-60}}>
                 <Col style={{backgroundColor:'rgba(122,83,63, .8)', padding:20,marginRight:30,fontWeight:'bold',textAlign: 'center',width:450}}>
                     <h5 style={{color:'white'}}>HELPING STUDENTS AND WORKING <br/> PROFESSIONALS GET READY FOR <br/> THEIR DREAM JOB</h5></Col>
                 <Col style={{backgroundColor:'rgba(122,83,63, .8)', padding:20,marginLeft:30,textAlign: 'center',width:450}}>
                     <h5 style={{color:'white'}}>PROVIDING BUSINESS THE  <br/>PERFECT PLAN B TO START OR <br/>  GROW TO TEN TIMES.</h5></Col>
             </Row>
        <Row justify="center">
              <Col style={{position: 'relative',top:-20}} >
                    <h4 style={{textAlign: 'center'}}><h5>SERVICES PROVIDED BY PERFECT PLAN B</h5></h4><br />
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
                </Col>
        </Row>
        <Row>
            <Col>

            </Col>
        </Row>
        </Col>)
}
export default About