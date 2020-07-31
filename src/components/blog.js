import {Row, Col, Button,Tabs} from 'antd';
import React,{useState,useEffect} from 'react';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Article=(props)=>
{
    return(<Col className={'article'} >
        <h6 style={{color:'#6A4E3D'}}>Learning|Technology</h6>
        <h3 style={{color:'#6A4E3D'}}>{props.title}</h3>
        <p>{props.blog}</p>
        <Row justify={'center'}>
            <p >{props.date}</p>
            <p >Leave a Comment</p>
            <p >{props.author}</p>
        </Row>
        <p>{props.content}</p>
        <button>Read Article</button>
    </Col>)
}
const Blog =(props)=>
{
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    const [blog,setBlog]=useState(0)
    return (
                    <Col>
                   <Row className='blog' justify={'center'}>
                    <button onClick={()=>{setBlog(0)}}> View All</button>
                    <button onClick={()=>{setBlog(1)}}>Enterpreneurship </button>
                    <button onClick={()=>{setBlog(2)}}> Learning</button>
                    <button onClick={()=>{setBlog(3)}}>Technology</button>
                       </Row>
                        <Row justify={'center'}>
                            <Article title={<div>Get Started With Data<br /> Science In Python</div>} blog={blog} author={'Ishaan Sharma'} date={'June 23, 2020'}/>
      <Article title={<div>Get Started With Data<br /> Science In Python</div>} blog={blog} author={'Ishaan Sharma'} date={'June 23, 2020'}/>
                        </Row>







                        </Col>











        )
}
export default Blog