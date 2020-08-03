import {Col, Breadcrumb,Row,Collapse} from 'antd';
import React,{useState,useEffect,useRef} from 'react';
import { Modal, Button } from 'antd';
import API from '../apiService'
import YouTube from 'react-youtube';
import {useParams} from "react-router-dom";
import blogBack from "../images/blogBack.png"
import Cfooter from "./footer";
import {
  Link,

  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";
import {NavBar} from './detail'
const { Panel } = Collapse;
// const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
// const useMountEffect = (fun) => useEffect(fun, [])

const MobileCourseDetail=(props)=>{
    let {courses} = useParams();
    const [visible,setVisible] = useState(true)
    const [course,setCourse] =useState(false)
    const [description,setDescription] = useState('')
    const [highlight,setHighlight] = useState('')
    const [curriculum,setCurriculum] =useState([])

    const navRef = useRef(null)


    useEffect(() => {
        setVisible(true)
        window.scrollTo(0,0)
        const header = document.getElementById("menus");
        const contents = document.getElementById("courseContents");
        const lastElement = document.getElementById("lastElement");
        const highlight = document.getElementById("highlight");
        const description = document.getElementById("description");
        const sticky = header.offsetTop
        const contentSticky = header.offsetTop
        const last = lastElement.offsetTop
        const high = highlight.offsetTop


        const scrollCallBack=window.addEventListener("scroll",()=>{
            if(window.pageYOffset>sticky+450){
                header.classList.add("sticky")
            }
            else{
                header.classList.remove("sticky")
            }

            if(window.pageYOffset<800){
                description.classList.add("links")

            }
            else
            {
                    description.classList.remove("links")
            }
        })

        API.courseFetch({course:courses}).then(res=>{
            console.log(res.data)
            setCourse(res.data[0].heading)
            setDescription(res.data[0].description)
            setHighlight(res.data[0].highlights)
            res.data[0].topics.map(c=>{
            setCurriculum ([...curriculum,<Panel style={{backgroundColor:'#F7DFCA',borderStyle:'none',marginBottom:3,borderRadius:10}} key={c.topics}
                                       header={<strong style={{color:'#6A4E3D'}}>{c.topics}</strong>}>
                {c.lessons.map(m=>{return (<h6 style={{textAlign:'center',color:'#6A4E3D'}}>{m.subTopics}</h6>)})}</Panel>])
        })
        })
        .catch(err=>{console.log(err)})
            return ()=>{window.removeEventListener("scroll",scrollCallBack)}
    }, []);

const showModal = () => {
    setVisible(true)
  };

    const handleOk = e => {
    console.log(e);
    setVisible(false)
  };

  const handleCancel = e => {
    console.log(e);
    setVisible(false)
  };

    return (<Col>
        <NavBar/>

        <Col style={{backgroundImage: "url("+`${blogBack}`+")",padding:30,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,paddingTop:20}}>
            <Breadcrumb separator=">" style={{fontSize:'1.5em'}}>
                <Breadcrumb.Item href="/course" >Courses</Breadcrumb.Item>
                <Breadcrumb.Item >{course}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className='bold-heading' style={{color:'#6A4E3D'}} ><strong>{course} Certification</strong></h1>
            <h5 style={{color:'#6A4E3D',marginBottom:20}}>Learn Python, right from the basics to the advanced and jumpstart<br />
            your programming career</h5>
            <button style={{borderStyle:'none',color:'white',padding:8,borderRadius:5,backgroundColor:'#6A4E3D',fontWeight:'bolder'}}>ENROLL NOW</button>
        </Col>
        <Row>
            <Col >

        <Modal

          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}

          bodyStyle={{backgroundColor:'#6A4E3D',borderRadius:20,marginLeft:15,position:'absolute',width:'90%'}}
        >
          <Col
             className={'courseContents'}
             id={'courseContents'}  >

            <Col style={{margin:16}}  >

            <YouTube videoId="zxsmT84nwLI"  opts={{width:'100%',height:'inherit'}}   />

                {course&&<h6 style={{color:'#F7DFCA'}}>{course[0].heading}</h6>}
            <h4 style={{color:'white'}}>315,150.00</h4>
            <button style={{backgroundColor:"#F7DFCA",width:'100%',borderStyle:'none',marginBottom:4}}>BUY NOW</button>
            <button style={{backgroundColor:"transparent",width:'100%',borderStyle:'solid',borderColor:'#F7DFCA',marginBottom:4,
                            color:'#F7DFCA'}}>ADD TO CART</button>
                </Col>
        </Col>
        </Modal>
                <div ref={navRef} id={'menus'} style={{zIndex:3}}>
                <Row justify={'center'} className={'blog'}  style={{borderStyle:'solid',borderColor:'#6A4E3D',borderWidth:0,borderBottomWidth:2,paddingTop:5,backgroundColor:'white'}} >
                   <Link
                       id={'description'}
                       className={'links'}
                    // activeClass="active"

                    onClick={()=>{scroll.scrollToTop()}}
                    spy={true}
                     hashSpy={true}
                    smooth={true}
                    duration={500}
                    style={{fontWeight:'bolder',color:'#6A4E3D',fontSize:13,marginRight:8,padding:5}}
                  >
                    DESCRIPTION
                  </Link>
                 <Link

                     id={'highlight'}
                    activeClass="active"
                    to="highlight"
                    spy={true}
                     hashSpy={true}
                    smooth={true}
                    duration={500}
                    style={{fontWeight:'bolder',color:'#6A4E3D',fontSize:13,marginRight:8,padding:5}}
                  >
                    HIGHLIGHTS
                  </Link>
                <Link

                    activeClass="active"
                    to="curriculum"
                    spy={true}
                     hashSpy={true}
                    smooth={true}
                    duration={500}
                    style={{fontWeight:'bolder',color:'#6A4E3D',fontSize:13,marginRight:8,padding:5}}
                  >
                    CURRICULUM
                  </Link>
                    <Link

                    activeClass="active"
                    to="review"
                    spy={true}
                     hashSpy={true}
                    smooth={true}
                    duration={500}
                    style={{fontWeight:'bolder',color:'#6A4E3D',fontSize:13,padding:5}}
                  >
                    REVIEW
                  </Link>

            </Row>
                    </div>

                <Col style={{padding:30,paddingTop:0}}>

                    <Element name="description" className="element" style={{backgroundColor:'transparent',borderStyle:'none'}}>
                        <p style={{color:'black',fontSize:20}}>{description}</p>
                    </Element>
                    <Element name="highlight"  className="element" style={{backgroundColor:'transparent',borderStyle:'none'}}>
         <p style={{color:'black',fontSize:20}}>{highlight}</p>
        </Element>
                    <Element name="curriculum" id={"lastElement"} className="element" style={{backgroundColor:'transparent',borderStyle:'none'}}>
                           <Collapse style={{backgroundColor:'transparent',borderStyle:'none'}}>
                    {curriculum}
                </Collapse>
                    </Element>





                    </Col>

        </Col>



            </Row>
        <Cfooter/>

    </Col>)
}
export default MobileCourseDetail