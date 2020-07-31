import {Col, Breadcrumb,Row,Collapse} from 'antd';
import React,{useState,useEffect,useRef} from 'react';
import API from '../apiService'
import YouTube from 'react-youtube';
import {useParams} from "react-router-dom";
import blogBack from "../images/blogBack.png"
import {NavBar} from './detail'
const { Panel } = Collapse;
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
const useMountEffect = (fun) => useEffect(fun, [])

const CourseDetail=(props)=>{
    let {courses} = useParams();
    const [course,setCourse] =useState(false)
    const [description,setDescription] = useState('')
    const [highlight,setHighlight] = useState('')
    const [curriculum,setCurriculum] =useState([])
    useMountEffect(() => scrollToRef(descRef)) // Scroll on mount
    const descRef = useRef(null)
    const curriRef = useRef(null)
    const highRef = useRef(null)
    const navRef = useRef(null)


    useEffect(() => {
        const header = document.getElementById("menus");
        const contents = document.getElementById("courseContents");
        const sticky = header.offsetTop
        const contentSticky = header.offsetTop
        const scrollCallBack=window.addEventListener("scroll",()=>{
            if(window.pageYOffset>sticky+300){
                header.classList.add("sticky")
            }
            else{
                header.classList.remove("sticky")
            }
            if(window.pageYOffset>contentSticky+150){
                contents.classList.add("stickyContents")
            }
            else{
                contents.classList.remove("stickyContents")
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


    return (<Col>
        <NavBar/>
        <Col style={{backgroundImage: "url("+`${blogBack}`+")",padding:30,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,paddingTop:80}}>
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="/course">Courses</Breadcrumb.Item>
                <Breadcrumb.Item >{course}</Breadcrumb.Item>
            </Breadcrumb>
            <h1 className='bold-heading' style={{color:'#6A4E3D'}} ><strong>{course} Certification</strong></h1>
            <h4 style={{color:'#6A4E3D'}}>Learn Python, right from the basics to the advanced and jumpstart<br />
            your programming career</h4>
            <button style={{borderStyle:'none',color:'white',padding:8,borderRadius:5,backgroundColor:'#6A4E3D'}}>ENROLL NOW</button>
        </Col>
        <Row>
            <Col span={16}>
                <div ref={navRef} id={'menus'} style={{zIndex:3}}>
                <Row className='blog' style={{borderStyle:'solid',borderWidth:0,borderBottomWidth:1,paddingTop:5,backgroundColor:'white'}} >
            <button style={{marginLeft:100}} onClick={()=>scrollToRef(descRef)} >DESCRIPTION</button>
            <button onClick={()=>scrollToRef(highRef)}>HIGHLIGHTS</button>
            <button onClick={()=>scrollToRef(curriRef)}>CURRICULUM</button>
            <button >REVIEWS</button>
            </Row>
                    </div>

                <Col style={{padding:30}}>
                <div ref={descRef} style={{height:300}}>
                    <p style={{color:'black'}}>{description}</p>
                </div>
                <div style={{height:1500}} />
                <div ref={curriRef} >
                    <Collapse style={{backgroundColor:'transparent',borderStyle:'none'}}>
                    {curriculum}
                </Collapse>
                </div>
                    <div style={{height:1500}} />
                <div ref={highRef} style={{height:300}}>
                    <p style={{color:'black'}}>{highlight}</p>
                </div>
                    </Col>

        </Col>

        <Col span={6}   className={'courseContents'}  >

            <Col style={{margin:16}} id={'courseContents'} >

            <YouTube videoId="zxsmT84nwLI"  opts={{width:'100%',height:'inherit'}}   />

                {course&&<h6 style={{color:'#F7DFCA'}}>{course[0].heading}</h6>}
            <h4 style={{color:'white'}}>315,150.00</h4>
            <button style={{backgroundColor:"#F7DFCA",width:'100%',borderStyle:'none',marginBottom:4}}>BUY NOW</button>
            <button style={{backgroundColor:"transparent",width:'100%',borderStyle:'solid',borderColor:'#F7DFCA',marginBottom:4,
                            color:'#F7DFCA'}}>ADD TO CART</button>
                </Col>
        </Col>

            </Row>

    </Col>)
}
export default CourseDetail