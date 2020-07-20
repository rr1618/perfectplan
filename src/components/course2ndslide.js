import React,{useState,useEffect} from 'react'
import {Row, Col} from 'antd';
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import People from "../images/people.png";
import '../course2slide.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';


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


const CoursePageSlide2=()=>
{
    const CourseList=(props)=>{
    return(
                <Col  className={'course-slide1' } key={props.name} onClick={()=>{setSelected(props.name)}}  >

                            <Row justify={'center'}>
                                <h5 className={'heading'}>{props.name}</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                        </Col>
    )
}
        const detail=( list.map((name)=><CourseList key={name.name} name={name.name}/>))
        const [selected,setSelected] = useState()


    return (<Col  style={{height:'87vh'}}>
                <Row style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px',marginTop:'8vh'}} justify="center" >
                            <Col span={6}  >
                                <Row >
                                        <img  className={'img-slide1'} src={People} />
                                        <Col>
                                                <h5 style={{color:'#836A5C'}}>Number of Students</h5>
                                            <h3 style={{color:'#836A5C'}}>1120</h3>
                                        </Col>

                                </Row>
                                </Col>

                      <Col span={6} style={{borderRightStyle:'solid',borderColor:'#CEB8AB',borderRightWidth:3,marginRight:'5vw'}}>
                          <Row >
                            <img  className={'img-slide1'}  src={ID} alt=""/>
                            <Col>
                                <h5 style={{color:'#836A5C'}}>Placed Students</h5>
                                <h3 style={{color:'#836A5C'}}>561</h3>
                            </Col>
                          </Row>


                      </Col>
                      <Col span={6}>
                      <Row>
                            <img  className={'img-slide1'}  src={Hand} alt=""/>
                            <Col>
                                <h5 style={{color:'#836A5C'}}>Number of Students</h5>
                                <h3 style={{color:'#836A5C'}}>101</h3>
                            </Col>
                          </Row>
                      </Col>
                </Row>

                <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',height:'35vh',position:'static'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2vw'}}>Course Categories</h3>
                    </Row>


                             <ScrollMenu
                                data={detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                style={{height:'30vh'}}

                                itemStyle={{outline:'none'}}
                            />



                </Col>
                 <CourseDetail detail={selected}/>


    </Col>)
}
const CourseDetail=(props)=>
{

    const Lessons =(props)=>{
        return(
            <Col className={'course-slide1-down'} key={props.name}>
                          <Row justify={'center'}>
                                <h5 className={'heading'}>{props.name}</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                     </Col>
        )
    }
    const details=( list.map((name)=><Lessons key={name.name+"lesson"} name={name.name}/>))
    return(
        <Row justify={'center'}>
            <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',position:'relative',width:'100vw',height:'35vh'}} justify={'center'}>
                     <Row justify="center">
                         <h3 style={{color:'#796051'}}>{props.detail}</h3>
                     </Row>
                             <ScrollMenu
                                data={details}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                            />
                </Col>
        </Row>

    )
}

export default CoursePageSlide2