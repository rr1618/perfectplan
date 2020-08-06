import {Row, Col, Button} from 'antd';
import React,{useState,useEffect} from 'react';
import LoginModal from "../login";
import {Link} from 'react-router-dom'
import TweenOne from 'rc-tween-one';
import Background from '../images/background.png';
import Logo from '../logo.png';
import Aos from 'aos'
import "aos/dist/aos.css"
import {
DownOutlined ,
} from '@ant-design/icons';

const Home =()=> {
useEffect(()=>
{
     Aos.init({duration:1000})
},[])
return (



        <Col  style={{
                    minHeight: '100vh',
                    width:'100%',
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

        <Row  justify='center' >

            <Col className="home-boxes"  style={{marginRight:20,marginTop:40,paddingTop:40}}>
                <h3 data-aos={'fade-right'}   className='bold-heading' style={{textAlign:"right",}}>
                    <strong>GET READY <br />FOR YOUR<br/>DREAM CAREER</strong></h3>
                <h4 style={{textAlign:"right",color:'white'}}>Learn, Grow and become leaders of Tomorrow</h4>
                <p>Python<br/>
                    Data Structure<br/>
                    Machine Learning<br/>
                    Digital Marketing<br />
                    Enterpreneurship<br/>
                    Personal Development<br /></p>
                <div data-aos={'fade-up'}><Link to='/course'><button className="homeButtons" style={{float:"right",width:220,borderColor: "#fffff",padding:10}}>
                <strong  >ENROLL FOR FREE</strong></button></Link></div>
            </Col>

            <Col   className="strip" style={{paddingTop:50,paddingBottom:10}} >
            <div style={{marginLeft: 20,marginTop:40 }}>
                <Row>
                    <div data-aos={'fade-down'}>
                        <Link to='/course'><button className="homeButtons" style={{float:"left",width:250,borderColor: "black",padding:10,color:'black',marginBottom:15}}>
                <strong  >GET PLAN B NOW</strong></button></Link>
                    </div>
                </Row>
                    <p style={{lineHeight:"20px",fontSize:'1.2em'}}>Website/App Development<br/>
                    Digital Marketing<br/>
                    Software Development<br />
                    Project Management<br/>
                    Tax Advisory<br />
                    Sales and Marketing</p>
                    <h4 style={{color:"white"}}>One Stop Solution to help Grow Your Business</h4>
                    <h3  data-aos={'fade-left'} className='bold-heading' style={{color:'black'}} ><strong>GROW YOUR <br /> BUSINESS TO <br/>10 TIMESS</strong></h3>
            </div>
            </Col>
            </Row>

            <Row justify={'center'}>
                <Col  style={{position:'absolute',bottom:10}} >

        <TweenOne
            animation={{
                y:'10px',
                repeat: -1,
                duration: 1000
                        }}
        >

                <Col >
                <DownOutlined style={ { fontSize:40,color:"white", }} />
            </Col>


        </TweenOne>

            </Col>
            </Row>


        </Col>






);

}
export default Home