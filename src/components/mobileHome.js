import { Row,Col,Button} from 'antd';
import React from 'react';
import Background from '../background.png';
import Logo from '../mobilelogo.png';
const MoblieHome =()=>
{
    return (
        <Col  style={{
                    minHeight: '100vh',
                    width:'100vw',
                    backgroundImage: "url("+`${Background}`+")",
                        }}

    >
            <Col className="site-header" style={{ width: '100vw'}}>
        <Row >
            <Col className="navbar"  >
                <img  src={Logo} style={{height:30}} alt=""/>
            </Col>
        </Row>
    </Col>


            <Col className="home-boxes"  style={{marginTop:5,padding:25}}>
                <p style={{lineHeight:"15px",fontSize:14,textAlign:"left"}}>Python<br/>
                    Data Structure<br/>
                    Machine Learning<br/>
                    Digital Marketing<br />
                    Enterpreneurship<br/>
                    Personal Development<br /></p>
                <h2   className='bold-heading' style={{textAlign:"left",fontSize:22,color:'#e3d0c5'}}><strong>GET READY FOR <br/> YOUR DREAM CAREER</strong></h2>
                <h6 style={{color:"white",textAlign:"left",fontSize:14}}>Learn, Grow and Become Leaders of Tomorrow</h6>
                <Button  size="large" style={{float:"left",
                    marginTop:15,width:140,height:33,
                    borderColor: '#e3d0c5',color:'#e3d0c5',
                    backgroundColor:'transparent',borderWidth:2,
                fontSize:13}}>
                <strong>ENROLL FOR FREE</strong></Button>



            </Col>
            <Col style={{width:200,marginLeft:80,marginTop:50}}>
                <hr className='rounded'/>
            </Col>

            <Col  style={{position:'static',padding:25,paddingTop:10}}>

                        <Button className="homeButtons" size="large" style={ {float: "right",borderColor: '#e3d0c5',borderWidth:2,
                            color:'#e3d0c5',backgroundColor:'transparent',
                        width:140,height:33,fontSize:13}} >
                    <strong>GET PLAN B NOW</strong></Button><br /><br />


                       <h4  style={{color:"white",textAlign:'right',fontSize:14}}>One Stop Solution to help Grow Your Business</h4>
                    <h2 style={{textAlign:"right",fontSize:24,color:'#e3d0c5'}} ><strong>GROW YOUR BUSINESS<br /> TO TEN TIMES</strong></h2>

                    <p style={{lineHeight:"15px",fontSize:14,textAlign:"right",paddingTop:8}}>Website/App Development<br/>
                    Digital Marketing<br/>
                    Software Development<br />
                    Project Management<br/>
                    Tax Advisory<br />
                    Sales and Marketing</p>
                    </Col>




        </Col>
    )
}
export default MoblieHome;