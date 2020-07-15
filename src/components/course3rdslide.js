import React,{useState,useEffect} from 'react'
import {Row, Col,Button} from 'antd';
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import People from "../images/people.png";
import '../course3rdslide.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { LeftOutlined,RightOutlined ,DownloadOutlined} from '@ant-design/icons';


const list =[
    {name:'Machine Learning'},
    {name:'Algorithm'},
    {name:'Data Science'},
    {name:'history'},
    {name:'civics'},
    {name:'geo'},
    {name:'geomath'},
    {name:'geomathhiind'},


]

const Arrow = ({ text, className }) => {
  return (
    <a
      className={className} style={{fontSize:50,margin:10}}
    >{text}</a>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const CoursePageSlide3=()=>
{
    const CourseList=(props)=>{
    return(
                <Col  className={'img-card' } key={props.name}   >

                            <Row  >
                                <Row justify={'center'}>
                                            <h2 className={'img-side'} >Student </h2>
                                        <img className={'img'} src={People} alt="" style={{}}/>
                                         <h2 className={'img-side'} >Reviews </h2>
                                </Row>


                            </Row>
                            <p>I am  perfet plan b<br/>
                            I m a new startup and <br />
                            and ishaan is my owner</p>
                            <h6 className={'details'} ></h6>

                        </Col>
    )
}
        const detail=( list.map((name)=><CourseList key={name.name} name={name.name}/>))



    return (<Col style={{height:'87vh'}}>
                <Col style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px',marginTop:'6vh'}} justify="center" >
                            <Row justify={'center'}><h1 style={{color:'#796051',fontSize:'2vw'}}>Success Stories</h1></Row>
                    <ScrollMenu
                                data={detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}

                            />
                </Col>

                <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',height:'35vh'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2vw'}}>Hiring Companies</h3>
                    </Row>
                    <Companies/>
                </Col>



    </Col>)
}
const Companies=(props)=>
{

    return(
        <Row justify={'center'} style={{backgroundColor:'#E5D2C7',marginTop:'2vh',width:'100vw',height:'32vh'}}>
                     <Row justify="center">
                                    <Button  icon={<DownloadOutlined />} style={{backgroundColor:'#796051',color:'white',width:'40vw',height:'7vh'}}>
          Download Placement Report
        </Button>
                     </Row>


        </Row>

    )
}

export default CoursePageSlide3