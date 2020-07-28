import {Col, Breadcrumb,Row,Collapse} from 'antd';
import React,{useState,useEffect} from 'react';
import API from '../apiService'
import {useParams} from "react-router-dom";
import blogBack from "../images/blogBack.png"
import {NavBar} from './detail'
const { Panel } = Collapse;
const CourseDetail=(props)=>{
    let {courses} = useParams();
    const [course,setCourse] =useState(false)
    const [curriculum,setCurriculum] =useState(false)
    const [content,setContent] = useState(false)
    const [panel,setPanel] = useState('')
    useEffect(() => {

        API.courseFetch({course:courses}).then(res=>{
            console.log(res.data)
            setCourse(res.data)
            setCurriculum(res.data[0].topics)

        })
        .catch(err=>{console.log(err)})

    }, []);
    const collapse=()=>
    {
        if (curriculum)
    {
        var paneli = []
        curriculum.map(c=>{console.log(c.topics)
            paneli = [...paneli,<Panel style={{backgroundColor:'#F7DFCA',borderStyle:'none',marginBottom:3,borderRadius:10}} key={c.topics}
                                       header={<strong style={{color:'#6A4E3D'}}>{c.topics}</strong>}>
                {c.lessons.map(m=>{return (<h6 style={{textAlign:'center',color:'#6A4E3D'}}>{m.subTopics}</h6>)})}</Panel>]

        })
        return paneli

    }
    }

    return (<Col>
        <NavBar/>
        <Col style={{backgroundImage: "url("+`${blogBack}`+")",padding:30,borderStyle:'solid',borderWidth:0,borderBottomWidth:1,}}>
            <Breadcrumb separator=">">
                <Breadcrumb.Item>Courses</Breadcrumb.Item>
                <Breadcrumb.Item href="">Python</Breadcrumb.Item>
                <Breadcrumb.Item href="">Python Certification</Breadcrumb.Item>
            </Breadcrumb>
            {course&&<h1 className='bold-heading' style={{color:'#6A4E3D'}} ><strong>{course[0].heading} Certification</strong></h1>}
            <h4 style={{color:'#6A4E3D'}}>Learn Python, right from the basics to the advanced and jumpstart<br />
            your programming career</h4>
            <button style={{borderStyle:'none',color:'white',padding:8,borderRadius:5,backgroundColor:'#6A4E3D'}}>ENROLL NOW</button>
        </Col>
        <Row>
            <Col span={16}>
            <Row className='blog' style={{borderStyle:'solid',borderWidth:0,borderBottomWidth:1,paddingTop:5}} >
            <button style={{marginLeft:100}} onClick={(e)=>{setContent(course[0].description)
                                                                setPanel('')}}>DESCRIPTION</button>
            <button onClick={(e)=>{setContent(course[0].highlights)
                                        setPanel('')}}>HIGHLIGHTS</button>
            <button onClick={(e)=>{setPanel(collapse)}}>CURRICULUM</button>
            <button onClick={(e)=>{setContent(course[0].heading)
                                                setPanel('')}}>REVIEWS</button>
            </Row>
            <Row justify={'center'} style={{marginTop:60}}>
                {!panel&&<p style={{color: 'black', textAlign: 'center', margin: 25}}> {content}</p>}
                {panel&&<Collapse style={{backgroundColor:'transparent',borderStyle:'none'}}>
                    {panel}
                </Collapse>}



            </Row>
        </Col>
        <Col span={6} style={{backgroundColor:'#6A4E3D', position:'relative',top:-120,marginRight:20,borderRadius:10}}>
            <Col style={{margin:16}}>
            <Col style={{borderWidth:1,borderStyle:'solid',borderColor:'white',marginBottom:10}}>
                <video src=""></video>
            </Col>
            <h6 style={{color:'#F7DFCA'}}>PYTHON CERTIFICATION</h6>
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