import {Row, Col, Button} from 'antd';
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
      height:'75vh',
      width:'30vw'


  }
};
const tabContent={
    home:{
        content:()=>{return(<CoursePage/>)},
        background:Laptop,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'white'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        buttonText:'ENROLL NOW'
    },
    about:{
        content:()=>{return(<About/>)},
        background:aboutBack,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'white'}} ><strong>PERFECT ONE-STOP<br />SOLUTION</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        buttonText:'EXPLORE SERVICES'
    },
    blog:{
        content: ()=>{return(<Blog/>)},
        background:blogBack,
        img:blogBackImg,
        title: ()=>{return (<h1 className='bold-heading' style={{color:'#6A4E3D'}} ><strong>Blog</strong></h1>)},
        subtitle: ()=>{return(<h4 style={{color:'#6A4E3D'}}>Follow our blog and get to know about the latest upadates<br />
                    in the fields of technology, enterpreneurship,etc</h4>)},
        buttonText:'SHARE NOW'
    },
    course:{
        content:()=>{return(<CoursePage/>)},
        background:Laptop,
        img:'',
        title: ()=>{return (<h1 className='bold-heading' style={{color:'white'}} ><strong>LEARN NOW<br />PAY LATER</strong></h1>)},
        subtitle: ()=>{return (<div></div>)},
        buttonText:'ENROLL NOW'
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
    const [content,setContent] = useState(tabContent['home'])

    const Background=(props)=>
        {
    return (<Col>
        <Row className={'background-nav'}>
            <a key={'home'} id={'home'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                            }}>Home</a>
            <a key={'about'} id={'about'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                            }}>About</a>
            <a key={'blog'} id={'blog'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                            }}>Blog</a>
            <a key={'course'} id={'course'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                                }}>Courses</a>
            <a key={'career'} id={'career'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                                }}>Career</a>
            <a key={'help'} id={'help'} style={{color:'white'}} onClick={(e)=>{setContent(tabContent[e.target.id])
                                                                }}>Help and Support</a>
        </Row>
         <Row>

                    <Col>
                        {props.detail.title()}<br />
                    {props.detail.subtitle()}
                         <Button className="homeButtons" size="large" style={{backgroundColor:'#6A4E3D',float:"left",marginTop:'1.2em',width:200,borderStyle:'none',padding:5}}>
                <strong style={{color:'white',fontSize:'1.3em',}}>{props.detail.buttonText}</strong></Button>
                    </Col>
                    <Col span={10} >
                        <img src={props.detail.img}  style={{float:'right'}}  height={250}  alt=""/>
                    </Col>
                </Row>
    </Col>)
}


    return ( <Col>
            <NavBar />
            <Col style={{backgroundImage: "url("+`${content.background}`+")",

            backgroundRepeat: 'no-repeat',padding:35}}>

               <Background detail={content} />
</Col>
            {content.content()}


            <Cfooter/>
        </Col>
    )
}
export  {DetailPage,NavBar}