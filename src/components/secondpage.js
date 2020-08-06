import React from 'react'
import {useSpring ,animated} from 'react-spring'
import {Row,Col,Button,Space} from 'antd';
import SecondBackground from '../images/back2.png'
import BackgroundVideo from '../images/vid1.mp4'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import classes from '../BackgroundVideo.module.css';

import {

    UpOutlined ,
} from '@ant-design/icons';
import {Link} from "react-router-dom";

const Parts = ()=>
{

    const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYPos;
        console.log("scorrl",isScrollingUp)
      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);
        return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  const trail = useSpring( shouldShowActions?{from:{opacity:0},to:{opacity:1}}:{opacity:0})
    return(

        <animated.div style={trail}>
                <Row   justify="center" >
                <Col style={{position:'absolute',top:40}}  >
                    <Row justify={'center'}>
                        <UpOutlined style={ { fontSize:'4em',color:"white" }} />
                    </Row>

                    <Row className='two-box' style={{borderStyle:'solid',borderColor:'white'}} >

                        <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")",marginRight:80,padding:80,margin:10,paddingTop:20,height:'70vh'}}>

                                <Row justify={'center'}>
                                    <img src={icon2}  alt=""/>
                                </Row>
                          <h1 style={{textAlign:'center',marginBottom:10,color:'#4F3B33'}}><strong>E-LEARNING</strong></h1>
                          <h4 style={{color:'white',textAlign:'center',marginBottom:20}}>We help you learn,<br />
                          grow and become<br />
                          the leaders of<br />
                          tomorrow</h4>
                            <Row justify={'center'}>
                                <Link to='/course'><button className="homeButtons" style={{float:"right",width:150,
                                borderStyle:'none',backgroundColor:'#F3DDD1',padding:10,color:'#8A7162 ',margin:0}}>
                <strong >START NOW</strong></button></Link>
                            </Row>



                      </Col>
                    <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")" ,padding:80,margin:10,paddingTop:20,height:'70vh'}}>

                                <Row justify={'center'}>
                                    <img src={icon1}  alt=""/>
                                </Row>
                          <h1 style={{textAlign:'center',marginBottom:10,color:'#4F3B33'}}><strong>E-BUSINESS</strong></h1>
                          <h4 style={{color:'white',textAlign:'center',marginBottom:20}}>We provide the <br />
                          one-step solution<br/>
                          to help grow your<br/>
                          business</h4>
                        <Row justify={'center'}>
                            <Link to='/course'><button className="homeButtons" style={{float:"right",width:150,
                                borderStyle:'none',backgroundColor:'#F3DDD1',padding:10,color:'#8A7162 '}}>
                <strong >START NOW</strong></button></Link>
                        </Row>



                      </Col>

                    </Row>


                </Col>
            </Row>
        </animated.div>




    )

}

const Middle =()=>
{


  return (
<Col >
    <Col style={{postion:'absolute'}}>
        <video autoPlay muted loop id="myVideo" className="video"
               style={ {width:'100%'}
                 }>
      <source src={BackgroundVideo} type="video/mp4"/>
        Your browser does not support HTML5 video.
      </video>
</Col>
    <Parts/>
    </Col>
  )
}
export default Middle;
