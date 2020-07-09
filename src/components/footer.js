import React from 'react'
import { Layout ,Row,Col,Button,Collapse,Space,Divider} from 'antd';
import {
    TwitterOutlined,
FacebookOutlined,
InstagramOutlined,
LinkedinOutlined,
    MobileOutlined ,
    MailOutlined ,
    HomeOutlined ,
CaretRightOutlined} from '@ant-design/icons';

const { Panel } = Collapse;

const Footer = ()=>
{
    return (
        <Footer style={{ textAlign: 'center',backgroundColor:'#262626',position:'fixed',bottom:0 }}>
             <Row  >
                <Col xs={24} lg={8} style={{textAlign:"left" ,marginTop:60}}>
                    <h5  className='title'>There's no force higher than an Enterpreneur determined to get started and Plan B is the way to get started!!!</h5>
                 <Button type='primary' style={{width:280}} ><h5>Get Plan</h5></Button>

             </Col>

             <Col  xs={24} lg={8} style={{marginBottom:30}}>
                 <Space direction='vertical' size='large'>

                 <h3 className='title'><strong>Contact Info</strong></h3>
                 <h5 className='title'>Chase your vision and see success chase you!!!</h5>

                     <div>
                        <h3 className='title'><MobileOutlined style={{fontSize:25}}/> Phone number</h3>
                 <h6>+918766312017</h6>
                     </div>
                 <div>
                     <h3 className='title'><MailOutlined style={{fontSize:25}}/> Email</h3>
                 <h6>info@perfectplanb.net</h6>
                 </div>
                 <div style={{marginBottom:30}}>
                     <h3 className='title'><HomeOutlined style={{fontSize:25}}/> Address</h3>
                 <h6>Office no 43 Sector 11D<br />
                        Faridabad, Haryana<br />
                        121006</h6>
                 </div>
                     </Space>
                 <Row justify='center' >
                     <Space direction='horizontal'>
                        <TwitterOutlined style={{fontSize:30,color: '#fff'}}/>
                     <FacebookOutlined style={{fontSize:30,color: '#fff'}}/>
                     <InstagramOutlined style={{fontSize:30,color: '#fff'}}/>
                     <LinkedinOutlined style={{fontSize:30,color: '#fff'}}/>
                     </Space>

                 </Row>
             </Col>
             <Col xs={24} lg={8}>
                <h2 className='title'>FAQs</h2>
                 <Collapse
                        bordered={false}
                        destroyInactivePanel={true}
                        ghost={true}
                        expandIcon={({ isActive }) => <CaretRightOutlined style={ { color:'white' }} rotate={isActive ? 90 : 0} />}
                        className="site-collapse-custom-collapse" style={{backgroundColor:'#262626'}}
                      >
                        <Panel header={<h6>How Perfect Plan B would help me to get job after completing the Data Structure & Machine Learning course?</h6>} key="1" className="site-collapse-custom-panel" style={{color:'white'}} >
                          <p style={{color:'white'}}>On completing the Data Structure & Machine Learning<br />
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
                        <Panel header={<h6>How do PerfectPlanB gives freelancing projects?:</h6>} key="2" className="site-collapse-custom-panel">
                          <p>
                             Perfect Plan B takes projects by giving services to <br />
                              various clients and they give Paid Freelancing<br />
                              projects to students who study from them. Only to<br />
                              students who are performing very well in their tests<br />
                              get the freelancing projects directly.
                          </p>
                        </Panel>
                        <Panel header={<h6>What are the ideas behind a successful start-up?</h6>} key="3" className="site-collapse-custom-panel">
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
                     <Panel header={<h6>Apart from the online courses, Will I get Live classes also?</h6>} key="3" className="site-collapse-custom-panel">
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
                     <Panel header={<h6>How does P2B helps me in getting new projects / placements?</h6>} key="3" className="site-collapse-custom-panel">
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
             </Row>


         </Footer>
    )
}
export default Footer