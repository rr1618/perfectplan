import React from 'react'
import {Row, Col,Button,Space} from 'antd';

import People from "../images/people.png";
import '../course3rdslide.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {DownloadOutlined} from '@ant-design/icons';


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
const experlist =[
    {name:'Amit Khaturia',exp:'9',company:'Adobe'},
    {name:'Jyoti Chutani',exp:'5',company:'Naukri.com'},
    {name:'Ishan Gupta',exp:'9',company:'CEO'},
    {name:'Rashul Chutani',exp:'2',company:'IIT Delhi'},
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


const Slider=(props)=>
{
    return (
                <Col style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px',marginTop:'6vh'}} justify="center" >
                            <Row justify={'center'}><h1 style={{color:'#796051',fontSize:'2vw'}}>{props.heading}</h1></Row>
                    <ScrollMenu
                                data={props.detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                                innerWrapperStyle={{height:'300px',paddingTop:10}}
                                wrapperStyle={{height:'300px'}}

                            />
                </Col>
    )
}

const Card = (props)=>
{
    return ( <Col  className={'img-card' } key={props.name}   >


                                <Row justify={'center'}>
                                            <h2 className={'img-side'} >{props.heading1} </h2>
                                        <img className={'img'} src={People} alt="" style={{}}/>
                                         <h2 className={'img-side'} >{props.heading2}</h2>
                                </Row>
        {props.type?<Row>
                                <Space size={'large'}>
                                    <Col>
                                        <img src={People} alt=""/>
                                    </Col>
                                    <Col>
                                        <h3>{props.name.name}</h3>
                                        <h4>{props.name.exp} +years Experience</h4>
                                        <h5>{props.name.company}</h5>

                                    </Col>
                                </Space>
                        </Row>:
                            <p>I am  perfet plan b<br/>
                            I m a new startup and <br />
                            I m a new startup and <br />

                            and ishaan is my owner</p>}
                        </Col>)
}

const CoursePageSlide3=()=>
{
    const detail=( list.map((name)=><Card key={name.name} name={name.name} type={false} heading1={'Student'} heading2={'Reviews'}/>))

    const expertlist=( experlist.map((name)=><Card key={name.name} name={name} type={true} heading1={'Expert'} heading2={'Guides'}/>))


    return (<Col>
                <Slider detail={detail} heading={'Success Stories'}/>
                <Slider detail={expertlist} heading={'Our Experts'}/>


                <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2vw'}}>Hiring Companies</h3>
                    </Row>
                    <Companies/>
                </Col>

    </Col>)
}
const Companies=()=>
{

    return(
        <Row justify={'center'} style={{backgroundColor:'#E5D2C7',marginTop:'2vh',width:'100%'}}>
                     <Row justify="center">
                                    <Button  icon={<DownloadOutlined />} style={{backgroundColor:'#796051',color:'white',width:'40vw',height:50,marginBottom:20}}>
          Download Placement Report
        </Button>
                     </Row>


        </Row>

    )
}

export default CoursePageSlide3