import {Row, Col, Button,Space} from 'antd';
import React,{useState} from 'react';
import Laptop from "../images/brightlaptop.png";
import LogoDark from '../images/logodark.png'
import SecondBackground from "../images/back2.png";
import Lectures from "../images/videolecture.png";
import Doubt from "../images/doubts.png"
import Live from "../images/liveclasses.png";
import Magnifier from "../images/magnifier.png";
import Quizzes from "../images/quizzes.png";
import Resume from "../images/resume.png";
import Software from "../images/software.png";
import Placement from "../images/placement.png";
import Certification from '../images/badge.png'
import { MailOutlined,DownOutlined,DownloadOutlined,LeftOutlined,RightOutlined } from '@ant-design/icons';
import People from "../images/people.png";
import ID from "../images/idcard.png";
import Hand from "../images/hand.png";
import ScrollMenu from "react-horizontal-scrolling-menu";
import '../course2slide.css'
import '../course3rdslide.css'


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



const ArrowLeft = <a style={{backgroundColor:'transparent',position: 'absolute',left:0,zIndex:3,fontSize:30}}><LeftOutlined/></a>
const ArrowRight = <a style={{backgroundColor:'transparent',position: 'absolute',right:0,zIndex:3,fontSize:30}}><RightOutlined/></a>
const MobileCoursePage2=()=>
{
    {
    const CourseList=(props)=>{
    return(
                <Col  className={'course-slide1' } key={props.name}   >

                            <Row justify={'center'}>
                                <h5 className={'heading'}>{props.name}</h5>
                            </Row>
                            <h6 className={'details'} ></h6>

                        </Col>
    )
}
        const detail=( list.map((name)=><CourseList key={name.name} name={name.name}/>))
        const [selected,setSelected] = useState()


    return (<Col className={'second-slide-icon-mobile'} style={{height:'100vh'}}>
                <Row style={{backgroundColor:'#E5D2C7',marginTop:'8vh',paddingLeft:'3px',paddingRight:'3px'}}  >
                        <Col span={8}><Row justify={'center'}>
                            <img className={'img-slide1'} src={People} alt=""/>
                            <p><strong>Number of Students <br/>110</strong></p>

                        </Row></Col>
                        <Col span={8}>
                            <Row justify={'center'}>
                            <img className={'img-slide1'} src={ID} alt=""/>
                             <p ><strong>Placed students <br/>561</strong></p>
                        </Row>
                        </Col>
                        <Col span={8}>
                            <Row justify={'center'}>
                            <img className={'img-slide1'} src={Hand} alt=""/>
                             <p ><strong>Number of Students <br/>101</strong></p>
                        </Row>
                        </Col>
                </Row>

                <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',height:'35vh',position:'static'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'3vh'}}>Course Categories</h3>
                    </Row>


                             <ScrollMenu
                                data={detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                style={{height:'30vh'}}
                                scrollBy={1}
                                transition={1}
                                inertiaScrolling={true}
                                inertiaScrollingSlowdown={1.5}
                                itemStyle={{outline:'none'}}
                            />



                </Col>
                 <CourseDetail detail={selected}/>


    </Col>)
}
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
                                transition={1}
                            />
                </Col>
        </Row>

    )
}
const MobileCoursePage =()=>
{
    return (
        <Col  style={{

            backgroundSize:'100vw 57vh',
            backgroundRepeat: 'no-repeat',
                    backgroundImage: "url("+`${Laptop}`+")",
                        }}
    >
             <Col span={24} className="site-header" style={{ width: '100%',backgroundColor:'white'}}>
                 <Row>
                     <Col span={10} className="navbar" >

                <img  src={LogoDark} style={{height:25,width:120}} alt=""/>
            </Col>
                      <Col span={14} style={{paddingTop:10}}>
                          <Row justify='right' style={{marginLeft:20}}>
                              <button className='course-button' size="small" >
                                  <p className='text-in-button' >E-SCHOOL</p></button>
            <button className='course-button' size='small'><p className='text-in-button'>LOGIN/ENROLL</p></button>
                          </Row>

            </Col>
                 </Row>
    </Col>

            <Row>
                <input className='search-input' placeholder=' Explore our Courses' style={{backgroundImage:"url("+`${Magnifier}`+")",
                 }} />
                <Col span={24} style={{margin:15}}>
                <h2 className='bold-heading' style={{color:'#e3d0c5',fontSize:42}} ><strong>LEARN NOW <br /> PAY LATER</strong><br /></h2>
                <Button className="homeButtons" size="large" style={{float:"left",borderWidth:3,marginTop:5}}>
                <strong style={{color:'white'}}>Enroll For Free</strong></Button>
            </Col>
            </Row>
            <Row justify='center'>
                <Col span={22} style={{backgroundImage:"url("+`${SecondBackground}`+")",
                    height:'30%',width:'40vw',marginTop:30,marginBottom:15,marginLeft:30,marginRight:30}}>
                          <Row style={{}}>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Lectures} alt=""/>
                                  <h5 className='course-topics'>VIDEO <br /> LECTURES</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Live} alt=""/>
                                    <h5 className='course-topics'>LIVE <br /> CLASSES</h5>
                                  </Row>
                              </Col>
                          </Row>
                    <Row>
                              <Col span={12} >

                                  <Row>
                                      <img className='course-names-icons' src={Quizzes} alt=""/>
                                  <h5 className='course-topics'>REALTIME <br/>QUIZZES</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Doubt} alt=""/>
                                  <h5 className='course-topics'>1-On-1<br />DOUBTS</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
            </Row>
            <Row justify='center'>
                <Col span={22}  style={{backgroundImage:"url("+`${SecondBackground}`+")",height:'30%',width:'40vw',
                marginLeft:30,marginRight:30}}>
                          <Row>

                                      <Col span={12}  >

                                  <Row>
                                      <img className='course-names-icons' src={Certification} alt=""/>
                                  <h5 className='course-topics'>CERTIFICATION</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Software} alt=""/>
                                    <h5 className='course-topics'>SOFT SKILLS<br /> TRAINING</h5>
                                  </Row>
                              </Col>


                          </Row>
                    <Row>
                              <Col span={12} >

                                  <Row>
                                      <img className='course-names-icons' src={Resume} alt=""/>
                                  <h5 className='course-topics'>RESUME <br/>BUILDING</h5>
                                  </Row>
                              </Col>
                              <Col span={12}>
                                  <Row>
                                      <img className='course-names-icons' src={Placement} alt=""/>
                                  <h5 className='course-topics'>JOBS AND<br />PLACEMENT</h5>
                                  </Row>
                              </Col>
                          </Row>
                      </Col>
            </Row>
            <Row style={{marginTop:20}}>
                <Col span={24}>
                    <h5 style={ { color:'black',textAlign:'center'}}>Get trained! Get certified! </h5>
                    <h6 style={ { color:'#715335' ,textAlign:'center'}}>Get your first job/internship or hike in your CTC by 40% to 60%</h6>
                    <Row justify={'center'}>
                        <DownOutlined style={{fontSize:30}}/>
                    </Row>

                </Col>


            </Row>


 <MobileCoursePage2/>
 <MobileCoursePage3/>

        </Col>
    )
}

const MobileCoursePage3=()=>
{
    const ReviewList=(props)=>{
    return(
                <Col  className={'img-card' } key={props.name}   >

                            <Row  justify={'center'} >
                                        <Row >
                                            <h2>Student </h2>
                                        <img className={'img'} src={People} alt=""/>
                                         <h2 >Reviews </h2>
                                        </Row>


                            </Row>
                                <p style={{textAlign: 'center'}}>I am  perfet plan b<br/>
                                            I m a new startup and <br />
                                            and  Mr. Ishaan is my owner</p>
                                        <h6 className={'details'} ></h6>

                </Col>
    )
}
        const detail=( list.map((name)=><ReviewList key={name.name+'course'} name={name.name}/>))



    return (<Col style={{height:'100vh'}}>
                <Col style={{backgroundColor:'#E5D2C7',paddingBottom:'10px',paddingTop:'10px',marginTop:0}} justify="center" >
                            <Row justify={'center'}><h1 style={{color:'#796051',fontSize:'3vh'}}>Success Stories</h1></Row>
                    <ScrollMenu
                                data={detail}
                                arrowLeft={ArrowLeft}
                                arrowRight={ArrowRight}
                                itemStyle={{outline:'none'}}
                                transition={1}

                            />
                            <Companies/>
                </Col>





    </Col>)
}
const Companies=(props)=>
{

    return(
        <Col style={{backgroundColor:'#E5D2C7',marginTop:'2vh',height:'35vh'}} justify={'center'}>
                    <Row justify={'center'}>
                        <h3  style={{color:'#796051',fontSize:'3vh',paddingTop:5}}>Hiring Companies</h3>
                    </Row>
             <Row justify={'center'} style={{backgroundColor:'#E5D2C7',marginTop:'2vh',width:'100vw',height:'32vh'}}>
                     <Row justify="center">
                                    <Button  icon={<DownloadOutlined />} style={{backgroundColor:'#796051',color:'white',width:'40vh',height:'7vh'}}>
          Download Placement Report
        </Button>
                     </Row>


        </Row>

                </Col>


    )
}
export default MobileCoursePage