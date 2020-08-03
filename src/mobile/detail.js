import {Row, Col, Button} from 'antd';
import React, {useState,useContext,useEffect} from 'react';
import LogoDark from '../images/logodark.png'
import aboutBack from "../images/aboutBack.png"
import blogBack from "../images/blogBack.png"
import CoursePage from "./course";
import Laptop from "../images/brightlaptop.png";
import Magnifier from "../images/magnifier.png";
import LoginModal from "../login";
import {useParams,Link} from "react-router-dom";
import About from "./about";
import Blog from "./blog";
import {ModalContext, TokenContext} from "../index";
import API from "../apiService";
import Cfooter from "./footer";
import blogBackImg from "../images/blogBackimg.png";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
      backgroundColor: '#F5E2CF',
      height:550,
      width:400


  }
};
const tabContent={
    home:{
        content:()=>{return(<CoursePage/>)},
        background:Laptop,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'white'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        customButton: ()=>{return(<Link to='/course'><button className="homeButtons" style={{float:"left",width:220,borderColor: "#fffff",padding:10}}>
                <strong >ENROLL FOR FREE</strong></button></Link>)}
    },
    about:{
        content:()=>{return(<About/>)},
        background:aboutBack,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'#E5D2C7'}} ><strong>PERFECT ONE-STOP<br />SOLUTION</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        customButton: ()=>{return(<Link to='/course'><button className="homeButtons" style={{float:"left",width:220,borderColor: "#fffff",padding:10}}>
                <strong >EXPLORE SERVICES</strong></button></Link>)}
    },
    blog:{
        content: ()=>{return(<Blog/>)},
        background:blogBack,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'#6A4E3D',fontSize:'3em',marginBottom:0}} ><strong>Blog</strong></h1>)},
        subtitle: ()=>{return(<h6 style={{color:'#6A4E3D',marginBottom:15}}>Follow our blog and get to know about the latest upadates<br />
                    in the fields of technology, enterpreneurship,etc</h6>)},
        customButton: ()=>{return(<Link to='/course'><button className="homeButtons" style={{float:"left",width:220,borderStyle:'none',
            backgroundColor:'#6A4E3D',color:'white',padding:10,
            borderRadius:'10px'}}>
                <strong >SHARE NOW</strong></button></Link>)}
    },
    course:{
        content:()=>{return(<CoursePage/>)},
        background:Laptop,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'white'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        customButton: ()=>{return(<Link to='/course'><button className="homeButtons" style={{float:"left",width:220,borderColor: "#fffff",padding:10}}>
                <strong >ENROLL NOW</strong></button></Link>)}
    }
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
    return(<Col>
            <Row style={{zIndex:1,backgroundColor:'white',width:'100%'}} >
                <Col  className={'navbar'}>
                <img  src={LogoDark} height={30} alt=""/>
                </Col>
         <Col  style={{padding:10}}>
                    <Row style={{margin:5}} >
                        <button className='course-button' style={{borderRadius:10}} ><strong>E-SCHOOL</strong></button>
                    </Row>
                <Row>
                    {sessionToken?<button className='course-button' style={{backgroundColor: '#E5D2C7',borderRadius:10}} onClick={() => {
                    sessionStorage.clear()
                    window.location.reload()
                }}>
                    <strong>Logout</strong></button>:<button className='course-button' style={{backgroundColor: '#E5D2C7',borderRadius:10}} onClick={()=> {
                    setModal(true)
                }}>
                    <strong>LOGIN\ENROLL</strong></button>}
                </Row></Col>
                {modal&&<LoginModal show={modal} cstyle={customStyles}/>}

        <Row>
                <Col>
                    <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
                </Col>
        </Row>
            </Row>
        </Col>





        )

}

const MobileDetailPage = ()=>
{
    let {page} = useParams()
    const [content,setContent] = useState(tabContent['home'])
    useEffect(()=>{
        setContent(tabContent[page])
    },[page])
    const Background=(props)=>
        {
    return (<Col>
        <Row className={'background-nav'}>
            <Link to={`/`} style={{color:'white'}} >Home</Link>
            <Link to={`/about`} style={{color:'white'}} >About</Link>
            <Link to={`/blog`} style={{color:'white'}} >Blog</Link>
            <Link to={`/course`} style={{color:'white'}} >Courses</Link>
            <Link to={`/help`} style={{color:'white'}} >Help and Support</Link>
        </Row>
         <Row>

                    <Col>
                        {props.detail.title()}<br />
                    {props.detail.subtitle()}
                        {props.detail.customButton()}

                    </Col>
                    <Col span={10} >
                        <img src={props.detail.img}  style={{float:'right'}}  height={250}  alt=""/>
                    </Col>
                </Row>
    </Col>)
}


    return ( <Col>
            <NavBar />
            <Col style={{backgroundImage: "url("+`${content.background}`+")",height:'400px',

            backgroundRepeat: 'no-repeat',padding:35}}>

               <Background detail={content} />
</Col>
            {content.content()}


            <Cfooter/>
        </Col>
    )
}
export  {MobileDetailPage,NavBar}