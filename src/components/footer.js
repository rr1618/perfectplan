import React, {useContext} from 'react'
import Logo from './logo.png'
import {Link} from "react-router-dom";
import {Row,Col,Button,Collapse,Space} from 'antd';
import {
    TwitterOutlined,
FacebookFilled,
InstagramFilled,
LinkedinFilled,
YoutubeFilled} from '@ant-design/icons';
import drop from '../images/dropdown.png'
import upi from '../images/upi.png'
import paypal from '../images/paypal.png'
import visa from '../images/visa.png'
import mastercard from '../images/masrtercard.png'
import {ModalContext} from "../index";
const { Panel } = Collapse;

const Cfooter = ()=>
{
    const {modal,setModal} = useContext(ModalContext)
    var sessionToken = sessionStorage.getItem('token')
    return (
        <Col className={'footer'}  style={{backgroundColor:'#777676'}}>
            <Col style={{backgroundColor:'#9C8273',paddingLeft:30,paddingRight:30,paddingBottom:20}}>
            <Row justify="center">
                <img src={Logo} height={60}/>
            </Row>
            <Col span={24} md={24} className={'footer-anchors'} style={{color:'white'}}>

                <Link to={`/about`}  >About us</Link>
                <Link to={`/blog`} >Blog</Link>
                <Link to={`/course`} >Featured Courses</Link>
                <Link>Perfect PlanB for Business</Link>
                <Link >Teach on Perfect Plan B</Link>
                <Link >Career</Link>
                <Link to={`/help`} >Help and Support</Link>
                <Link >Affliate</Link>
                <Link to={`/policy/terms`}>Terms</Link>
                <Link to={`/policy/privacy`}>Privacy Policy</Link>
                <Link >Cookie Policy</Link>
                <Link to={`/policy/refund`}>Refund Policy</Link>
                <Link  to={`/policy/media`}>Media Policy</Link>
                <Link>Sitemap</Link>

            </Col>
                </Col>
        <Row style={{paddingLeft:50,paddingRight:20,paddingBottom:20,paddingTop:20}}>
            <Col  xs={24} lg={8} style={{textAlign:"left" }}>
                <Space direction={'vertical'}>
                <img src={Logo} height={50}/>
                <h4 >Learn,Grow and Become Leaders of Tomorrow</h4>
                    {!sessionToken&&<Button style={{backgroundColor:'#DDDDDD' ,width:250,height:45,marginBottom:20,marginTop:20}} onClick={()=> {
                    setModal(true)
                }}>
                        <strong style={{color:'#777676',fontSize:'1.5em'}}>Enroll For Free</strong></Button>}
                    <h5  >"In a time of drastic change it is<br />
                    the learners who inherit the future.<br />
                    The learned usually find themselves<br/>
                    equipped to live in a world<br />
                    that no longer exists."</h5>
                    </Space>

             </Col>
            <Col xs={24} lg={8}  >
               <Col >
                   <Collapse
                        bordered={false}
                        destroyInactivePanel={true}

                        expandIcon={({ isActive }) => <img src={drop} height={30} style={ {transform:`rotate(${isActive?'90deg':'0deg'})` ,marginLeft:-10}} />}
                        className="site-collapse-custom-collapse" style={{backgroundColor:'#777676',textAlign:'center'}}
                      ghost>
                        <Panel header={<h6>How Perfect Plan B would help<br/> me to get job after completing the<br/> Data Structure & Machine<br /> Learning course?</h6>} key="1" className="site-collapse-custom-panel" style={{color:'white'}} >
                          <p style={{color:'white'}} >On completing the Data Structure & Machine Learning<br />
                          course, Perfect Plan B would help you build your<br />
                          resume on latest technologies, arrange mock<br />
                          interviews for you and further on, Perfect Plan B<br />
                          would keep on arranging your interviews until you get<br />
                          your dream job. This way Perfect Plan B helps you in<br />
                          getting placed or freelancing projects. Thus, Perfect<br />
                          Plan B won't leave you until you get your dream<br />
                          career.
                          </p>
                        </Panel>
                        <Panel header={<h6>How do PerfectPlanB gives<br /> freelancing projects?:</h6>} key="2" className="site-collapse-custom-panel">
                          <p>
                             Perfect Plan B takes projects by giving services to <br />
                              various clients and they give Paid Freelancing<br />
                              projects to students who study from them. Only to<br />
                              students who are performing very well in their tests<br />
                              get the freelancing projects directly.
                          </p>
                        </Panel>
                        <Panel header={<h6>What are the ideas behind<br /> a successful start-up?</h6>} key="3" className="site-collapse-custom-panel">
                          <p>
                              There are no great ideas or bad ideas. A successful<br />
                             venture depends on how well you execute your idea <br />
                              and what type of guidance you receive. The simplest<br />
                              idea can be a great business venture with a high ROI<br />
                              when planned and executed well.<br />
                              Perfect Plan B is a one stop solution providing all<br />
                              services required to get that idea to implementation:<br />
                              - Business Counselling and Opportunity<br />
                              - Business and Tax advisory<br />
                              - E-Learning (Learn how to earn)<br />
                              - Marketing Plan<br />
                              - E-business (Web & App Development)<br />
                              - Project Management<br />
                          </p>
                        </Panel>
                     <Panel header={<h6>Apart from the online courses,<br /> Will I get Live classes also?</h6>} key="4" className="site-collapse-custom-panel">
                          <p>
                              Yes, once anyone enrolls in the Master plan, he/she<br />
                             gets following features along with the online video<br />
                            lectures:<br />
                              -Quiz & Assignments<br />
                             -Certification<br />
                            -Weekly live class<br />
                            -Live Doubt session<br />
                            -Resume Building<br />
                            -Soft Skills Training<br />
                            -Placements<br />
                            -Competitive Coding<br />
                            -Freelancing projects<br />
                            -Live projects<br />
                          </p>
                        </Panel>
                     <Panel header={<h6>How does P2B helps me in getting <br /> new projects / placements?</h6>} key="5" className="site-collapse-custom-panel">
                          <p>
                              <br/>
                              Perfect Plan B will be pleased to support and guide<br/>
                              you to channelize your ideas and energy in the right<br/>
                              direction to achieve your goal. We provide a mix of<br/>
                              courses and pieces of training that will make you a <br/>
                              leader of tomorrow. Further, Perfect Plan B has tie ups <br/>
                              with various big tech firms to provide projects / placement <br/>opportunities to our stars.
                          </p>
                        </Panel>
                </Collapse>
               </Col>

                <Row justify={'center'} >
                     <Space direction='horizontal'>
                         <TwitterOutlined style={{fontSize:30,color: '#fff'}}/>
                     <FacebookFilled style={{fontSize:30,color: '#fff'}}/>
                     <InstagramFilled style={{fontSize:30,color: '#fff'}}/>
                     <LinkedinFilled style={{fontSize:30,color: '#fff'}}/>
                     <YoutubeFilled style={{fontSize:30,color: '#fff'}}/>
                     </Space>

                 </Row>
             </Col>
            <Col  xs={24} lg={8} style={{marginBottom:30,textAlign:'center'}}>
                 <Space direction='vertical' size='large'>

                 <h3><strong style={{color:'white'}}>Contact Us</strong></h3>
                     <div>
                        <h3 > Phone number</h3>
                        <h6>+918766312017</h6>
                     </div>
                 <div>
                     <h3 >Email</h3>
                    <h6>info@perfectplanb.net</h6>
                 </div>
                 <div style={{marginBottom:30}}>
                     <h3 > Address</h3>
                        <h6>Office no 43 Sector 11D<br />
                            Faridabad, Haryana<br />
                            121006</h6>
                 </div>
                     </Space>
                <Row justify={'center'}>
                    <Space>
                        <img src={visa} height={40} />
                    <img src={paypal} height={40} />
                    <img src={upi} height={40}/>
                    <img src={mastercard} height={40}/>
                    </Space>
                </Row>

             </Col>

            </Row>
         </Col>
    )
}
export default Cfooter