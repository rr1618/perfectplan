import React, {useEffect,useState} from 'react'
import {Row, Col} from 'antd';
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import {Link} from 'react-router-dom'
import People from "../images/people.png";
import '../course2slide.css'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import API from "../apiService";



const Arrow = ({ text, className }) => {
  return (
    <a
      className={className} style={{fontSize:50,margin:10}}
    >{text}</a>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const CourseCards=(props)=>
{
    return (
        <Col  className={'course-slide1' } key={props.name}  >

                            <Row justify={'center'}>
                                <h5 className={'heading'}>{props.name}</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                        </Col>
    )
}

const CoursePageSlide2=()=>
{
    const [courseName,setCourseName]=useState('')
    const [topics,setTopics] = useState('')
    const [course,setCourse]=useState('Python')
    useEffect(() => {
        API.courseFetch('').then(res=>{
            setCourseName(res.data.map((name)=>
                <CourseCards onClick={()=>{CreateLesson(name.heading)
                setCourse(name.heading)}}  key={name.heading} name={name.heading} />
        ))
            CreateLesson('Python')
        })
        .catch(err=>{console.log(err)})

    }, []);
    const CreateLesson=(courseName)=>
    {

        API.courseFetch({course:courseName}).then(res=>{res.data[0].topics.map(c=>{
            setTopics ([...topics,<Link to={`/course/${courseName}`}><CourseCards key={c.topics+"lesson"} name={c.topics}/></Link>])
        })})


    }


    return (<Col >
                <Row style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px'}} justify="center" >
                            <Col span={6}  style={{borderRightStyle:'solid',borderColor:'#CEB8AB',borderRightWidth:3,marginRight:'5vw'}} >
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
                <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',position:'static'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2vw'}}>Course Categories</h3>
                    </Row>

                    <ScrollMenu
                                data={courseName}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                                scrollBy={1}
                                transition={1}

                            />
                </Col>
        <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',position:'static'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'2vw'}}>{course}</h3>
                    </Row>
                             <ScrollMenu
                                data={topics}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                                scrollBy={1}
                                transition={1}
                            />
                </Col>
    </Col>)
}


export default CoursePageSlide2