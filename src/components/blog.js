import {Row, Col, Button,Tabs} from 'antd';
import React from 'react';
import blogBackImg from "../images/blogBackimg.png"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const Blog =(props)=>
{
    return (<Col  style={{ marginBottom:50
                        }}
    >
                    <Row >
                <Col  style={{marginBottom:20}}>
                    <h3 style={{color:'white'}}>{props.user}</h3>
                <Row>
                    <Col>
                        <h1 className='bold-heading' style={{color:'#6A4E3D'}} ><strong>Blog</strong><br /></h1>
                    <h4 style={{color:'#6A4E3D'}}>Follow our blog and get to know about the latest upadates<br />
                    in the fields of technology, enterpreneurship,etc</h4>
                         <Button className="homeButtons" size="large" style={{backgroundColor:'#6A4E3D',float:"left",marginTop:'1.2em',width:180,borderStyle:'none',padding:5}}>
                <strong style={{color:'white',fontSize:'1.3em',}}>SHARE NOW</strong></Button>
                    </Col>
                    <Col >
                        <img src={blogBackImg}  style={{marginLeft:250,position: 'relative',top:0}} height={250}  alt=""/>
                    </Col>

                </Row>
                   <Row style={{marginTop:'6vh'}} justify={'center'}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab={<h6>View All</h6>} key="1">
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab={<h6>Enterpreneur</h6>} key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab={<h6>Learning</h6>} key="3">
      Content of Tab Pane 3
    </TabPane>
    <TabPane tab={<h6>Technology</h6>} key="4">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
                   </Row>


                </Col>
            </Row>







        </Col>)
}
export default Blog