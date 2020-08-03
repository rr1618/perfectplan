import React from 'react'
import {Row, Col,Button,Space} from 'antd';

import People from "../images/people.png";
import '../course3rdslide.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {DownloadOutlined} from '@ant-design/icons';

import Adobe from '../images/adobe.png'
import Hcl from '../images/hcl.png'
import Microsoft from '../images/microsoft.png'
import Sapient from '../images/sapient.png'
import Nagaro from '../images/nagaro.png'
import Tcs from '../images/tcs.png'


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
                <Col style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px',marginTop:30}} justify="center" >
                            <Row justify={'center'}><h1 style={{color:'#796051',fontSize:'2em'}}>{props.heading}</h1></Row>
                    <ScrollMenu
                                data={props.detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                                scrollBy={1}
                                transition={1}


                            />
                </Col>
    )
}

const Card = (props)=>
{
    return ( <Col  className={'img-card' } key={props.name}   >



                                            <Col style={{marginBottom:30}}>
                                                <Row justify={'center'} >
                                                    <h6 className={'img-side'} style={{paddingRight:23,color:'#D5B08F',fontWeight:'bold'}}>{props.heading1}  </h6>
                                                    <h6 className={'img-side'} style={{paddingLeft:23,color:'#D5B08F',fontWeight:'bold'}} >{props.heading2}</h6>
                                            </Row>
                                            <Row justify={'center'}>
                                                    <img className={'img'}  src={People} alt=""/>
                                            </Row>
                                            </Col>
                        {props.type?<Row style={{position:'absolute'}}>
                                    <Col style={{padding:5}}>
                                        <img src={People} height={50} alt=""/>
                                    </Col>
                                    <Col  style={{marginLeft:10}}>
                                        <h5>{props.name.name}</h5>
                                        <h6>{props.name.exp} +years Experience</h6>
                                        <h7>{props.name.company}</h7>

                                    </Col>
                        </Row>:
                            <p style={{textAlign:'center'}}>I am  perfet plan b<br/>
                            I m a new startup and <br />
                            I m a new startup and <br />

                            and ishaan is my owner</p>}
                        </Col>)
}

const Course3=()=>
{
    const detail=( list.map((name)=><Card key={name.name} name={name.name} type={false} heading1={'STUDENT'} heading2={'REVIEWS'}/>))

    const expertlist=( experlist.map((name)=><Card key={name.name} name={name} type={true} heading1={'EXPERT'} heading2={'GUIDES'}/>))


    return (<Col>
                <Slider detail={detail} heading={'Success Stories'}/>
                <Slider detail={expertlist} heading={'Our Experts'}/>


                <Col style={{backgroundColor:'#E5D2C7',marginTop:20}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2em'}}>Hiring Companies</h3>
                    </Row>
                    <Companies/>
                </Col>

    </Col>)
}
const Companies=()=>
{

    return(<Col>
            <Row justify={'center'} style={{backgroundColor:'#E5D2C7',marginTop:'2vh',width:'100%'}}>



                             <Row className={'hiring'} style={{margin:20}}>
                                 <img src={Sapient}  alt=""/>
                             <img src={Hcl}  alt=""/>
                             <img src={Tcs}  alt=""/>
                             <img src={Adobe}  alt=""/>
                             <img src={Microsoft}  alt=""/>
                             <img src={Nagaro}  alt=""/>
                             </Row>
                <Row justify="center">
                                    <Button  icon={<DownloadOutlined />} style={{backgroundColor:'#796051',color:'white',width:'100%',height:50,marginBottom:20}}>
          Download Placement Report
        </Button>

                     </Row >




        </Row>

        </Col>


    )
}

export default Course3