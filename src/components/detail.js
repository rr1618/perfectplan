import {Row, Col, Button,Tabs} from 'antd';
import React, {useState,useContext,useEffect} from 'react';
import LogoDark from '../images/logodark.png'
import aboutBack from "../images/aboutBack.png"
import blogBack from "../images/blogBack.png"

import CoursePage from "./course";
import Laptop from "../images/brightlaptop.png";
import Magnifier from "../images/magnifier.png";
import LoginModal from "./login";
import About from "./about";
import Blog from "./blog";
import {ModalContext, TokenContext} from "../index";
import API from "../apiService";
import Cfooter from "./footer";

const { TabPane } = Tabs;
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
      backgroundColor: '#F5E2CF',
      height:'75vh',
      width:'30vw'


  }
};
const backImages={
'1':Laptop,
    '2': aboutBack,
    '3': blogBack,
    '4': Laptop
}
function callback(key) {
  console.log(key);
}
const NavBar=()=>
{
    var sessionUser = sessionStorage.getItem('username')
    var sessionToken = sessionStorage.getItem('token')
      const {token,setToken} = useContext(TokenContext)
    const {modal,setModal} = useContext(ModalContext)
    useEffect(()=>{
        console.log("useeffetc",sessionToken,sessionUser)
        API.checkToken({'user':sessionUser,'token':sessionToken}).then(res=>{
            console.log(res.data)
            if (res.data!==true)
                sessionStorage.clear()
        })
    },[])
    return(<Row >
            <Col className="navbar" >
                <img  src={LogoDark} height={40} alt=""/>
            </Col>

             <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
            <Col style={{marginLeft: 100,marginTop: 10}}>
                    <button className='course-button' ><strong>E-SCHOOL</strong></button>
                {sessionToken?<button className='course-button' style={{backgroundColor: '#E5D2C7'}} onClick={() => {
                    sessionStorage.clear()
                    window.location.reload()
                }}>
                    <strong>Logout</strong></button>:<button className='course-button' style={{backgroundColor: '#E5D2C7'}} onClick={()=> {
                    setModal(true)
                }}>
                    <strong>LOGIN\ENROLL</strong></button>}
                {modal&&<LoginModal show={modal} cstyle={customStyles}/>}
            </Col>

        </Row>)

}
const DetailPage = ()=>
{
    const [background,setBackground] = useState(blogBack)

    return ( <Col>
            <NavBar />
            <Col style={{backgroundImage: "url("+`${background}`+")",
                backgroundSize:'100% 60vh',
            backgroundRepeat: 'no-repeat',padding:35}}>
                <Tabs defaultActiveKey="3"  size={'large'} onTabClick={(e)=>{setBackground(backImages[e])}}>

    <TabPane tab={<h6 >Home</h6>} key="1"   >

    </TabPane>
    <TabPane tab={<h6 >About</h6>} key="2"   >
        <About/>
    </TabPane>
    <TabPane tab={<h6 >Blog</h6>} key="3"   >
        <Blog />
    </TabPane>
    <TabPane tab={<h6 >Courses</h6>} key="4"   >
        <CoursePage/>
    </TabPane>
    <TabPane tab={<h6>Career</h6>} key="5"   >

    </TabPane>
    <TabPane tab={<h6>Help and Support</h6>} key="6" >

    </TabPane>
  </Tabs>
            </Col>
            <Cfooter/>
        </Col>
    )
}
export default DetailPage