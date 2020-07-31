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
                <Col style={{position:'absolute',top:100}}  >
                    <Row justify={'center'}>
                        <UpOutlined style={ { fontSize:'10vh',color:"white" }} />
                    </Row>

                    <Row className='two-box' style={{borderStyle:'solid',borderColor:'white'}} >

                        <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")",marginRight:80,padding:80,margin:10,paddingTop:20}}>

                                <Row justify={'center'}>
                                    <img src={icon2}  alt=""/>
                                </Row>
                          <h1 style={{textAlign:'center',marginBottom:10}}><strong>E-LEARNING</strong></h1>
                          <h4 style={{color:'white',textAlign:'center',marginBottom:20}}>We help you learn,<br />
                          grow and become<br />
                          the leaders of<br />
                          tomorrow</h4>
                            <Row justify={'center'}>
                                <Button className='start-now' ><strong>Start Now</strong></Button>
                            </Row>



                      </Col>
                    <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")" ,padding:80,margin:10,paddingTop:20}}>

                                <Row justify={'center'}>
                                    <img src={icon1}  alt=""/>
                                </Row>
                          <h1 style={{textAlign:'center',marginBottom:10}}><strong>E-BUSINESS</strong></h1>
                          <h4 style={{color:'white',textAlign:'center',marginBottom:20}}>We provide the <br />
                          one-step solution<br/>
                          to help grow your<br/>
                          business</h4>
                        <Row justify={'center'}>
                            <Button  className="start-now"  ><strong>Start Now</strong></Button>
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
<Col style={{height:'100vh'}}>
    <Col style={{postion:'absolute'}}>
        <video autoPlay muted loop id="myVideo" className="video"
               style={ {width:'100vw'}
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
