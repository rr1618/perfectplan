import {Row, Col, Button} from 'antd';
import React,{useState} from 'react';
import LoginModal from "./login";
import {Link} from 'react-router-dom'
import TweenOne from 'rc-tween-one';
import Background from '../images/background.png';
import Logo from '../logo.png';
import {
DownOutlined ,
} from '@ant-design/icons';

const Home =()=> {


return (



        <Col  style={{
                    minHeight: '100vh',
                    width:'100vw',
                    height:'100vh',
                    backgroundImage: "url("+`${Background}`+")",

                        }}
    >
    <Col className="site-header" style={{ width: '100%'}}>
        <Row justify="center">
            <Col className="navbar" style={{}} >
                <img className="center" src={Logo} style={{height:50}} alt=""/>
            </Col>
        </Row>
    </Col>

        <Row  justify='center' style={{height:'75vh'}}>

            <Col className="home-boxes"  style={{marginRight:20,marginTop:'1vh'}}>
                <h2   className='bold-heading' style={{textAlign:"right",}}><strong>Get Ready <br />For You<br/>Dream Career</strong></h2>
                <h4 style={{color:"white",textAlign:"right"}}>Learn, Grow and become leaders of Tomorrow</h4>
                <p>Python<br/>
                    Data Structure<br/>
                    Machine Learning<br/>
                    Digital Marketing<br />
                    Enterpreneurship<br/>
                    Personal Development<br /></p>
                <Link to='/dashboard'><Button className="homeButtons" size="large" style={{float:"right",marginTop:15,width:'12vw',borderColor: "#fffff"}}>
                <strong style={{color:'white'}}>Enroll For Free</strong></Button></Link>
            </Col>

            <Col   className="strip" >
            <div style={{marginTop: '1vh',marginLeft: 20 }}>
                <Button className="homeButtons" size="large" style={ {width:200,borderColor: "#fffff",marginBottom:10,color:"black" }} >
                    <strong>Get Plan B Now</strong></Button>
                    <p style={{lineHeight:"20px",fontSize:17}}>Website/App Development<br/>
                    Digital Marketing<br/>
                    Software Development<br />
                    Project Management<br/>
                    Tax Advisory<br />
                    Sales and Marketing</p>
                    <h4 style={{color:"white"}}>One Stop Solution to help Grow Your Business</h4>
                    <h2 className='bold-heading' ><strong>Grow Your <br /> Business To <br/>10 Times</strong></h2>
            </div>
            </Col>
            </Row>
<Row justify="center" >
        <TweenOne
            animation={{
                y:'10px',
                repeat: -1,
                duration: 1000
                        }}
        >

                <Col>
                <DownOutlined style={ { fontSize:60,color:"white", }} />
            </Col>


        </TweenOne>
</Row>
        </Col>






);

}
export default Home