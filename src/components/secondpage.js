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
                <Col className={classes.Content} >
                <Col className={classes.SubContent} style={{marginBottom:110}} >
                    <UpOutlined style={ { fontSize:50,color:"white" }} />
                    <Row className='two-box' >

                        <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")",height:490,width:360,marginRight:10}}>
                          <img src={icon2} style={{height:150,width:150}} alt=""/>
                          <h1 style={{}}><strong>E-Learning</strong></h1>
                          <h4 style={{color:'white'}}>We help you learn,<br />
                          grow and become<br />
                          the leaders of<br />
                          tomorrow</h4>
                          <Button className='start-now' style={{position:'absolute',right:125}} ><strong>Start Now</strong></Button>
                      </Col>
                    <Col  style={{backgroundImage:"url("+`${SecondBackground}`+")" ,height:490,width:360}}>
                          <img src={icon1} style={{height:150,width:150}} alt=""/>
                          <h1 style={{}}><strong>E-Business</strong></h1>
                          <h4 style={{color:'white'}}>We provide the <br />
                          one-step solution<br/>
                          to help grow your<br/>
                          business</h4>
                          <Button  className="start-now"  style={{position:'absolute',right:125}}><strong>Start Now</strong></Button>
                      </Col>

                    </Row>


                </Col>
            </Col>
        </animated.div>




    )

}

const Middle =()=>
{


  return (

<Row justify='center'>

    <Col style={{postion:'absoute'}}>
        <video autoPlay muted loop id="myVideo" className="video"
               style={ {width:'100%'}
                 }>
      <source src={BackgroundVideo} type="video/mp4"/>


        Your browser does not support HTML5 video.

      </video>

            <Parts/>








</Col>

</Row>
  )
}
export default Middle;
