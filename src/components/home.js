import { Row,Col,Button} from 'antd';
import React from 'react';
import {useSpring ,animated,useTransition} from 'react-spring'

import TweenOne from 'rc-tween-one';
import Background from '../background.png';
import Middle from './secondpage'
import Logo from '../logo.png';
import {
DownOutlined ,
} from '@ant-design/icons';

const Home =()=> {
return (



        <Col  style={{
                    minHeight: '100vh',
                    width:'100vw',
                    backgroundImage: "url("+`${Background}`+")",
                        }}
    >


    <Col className="site-header" style={{ width: '100%'}}>
        <Row justify="center">
            <Col className="navbar"  >
                <img className="center" src={Logo} style={{height:50}} alt=""/>
            </Col>
        </Row>
    </Col>

        <Row  justify='center'>

            <Col className="home-boxes"  style={{marginRight:20,marginTop:150}}>
                <h1 style={{textAlign:"right",fontSize:60,color:"white"}}><strong>Get Ready <br />For You<br/>Dream Career</strong></h1>
                <h4 style={{color:"white",textAlign:"right"}}>Learn, Grow and become leaders of Tomorrow</h4>
                <p style={{lineHeight:"20px",fontSize:17,textAlign:"right"}}>Python<br/>
                    Data Structure<br/>
                    Machine Learning<br/>
                    Digital Marketing<br />
                    Enterpreneurship<br/>
                    Personal Development<br /></p>
                <Button className="homeButtons" size="large" style={{float:"right",marginTop:15,width:200,borderColor: "#fffff"}}>
                <strong>Enroll For Free</strong></Button>
            </Col>

            <Col   className="strip" >
            <div style={{marginTop: 150,marginLeft: 20 }}>
                <Button className="homeButtons" size="large" style={ {width:200,borderColor: "#fffff",marginBottom:10,color:"black" }} >
                    <strong>Get Plan B Now</strong></Button>
                    <p style={{lineHeight:"20px",fontSize:17}}>Website/App Development<br/>
                    Digital Marketing<br/>
                    Software Development<br />
                    Project Management<br/>
                    Tax Advisory<br />
                    Sales and Marketing</p>
                    <h4 style={{color:"white"}}>One Stop Solution to help Grow Your Business</h4>
                    <h1 style={{fontSize:60}}><strong>Grow Your <br /> Business To <br/>10 Times</strong></h1>
            </div>
            </Col>
            </Row>

        <TweenOne
            animation={{
                y:'10px',
                repeat: -1,
                duration: 1000
                        }}
        >
            <Row justify="center">
                <Col >
                <DownOutlined style={ { fontSize:60,color:"white",marginTop:10 }} />
            </Col>
            </Row>

        </TweenOne>

        </Col>






);

}
export default Home