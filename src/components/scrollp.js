import React from "react";
import {Col,Row} from 'antd';
import {
  Link,
  Element,
} from "react-scroll";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Section=()=> {


    return (
      <Col  >


             <Row style={{position:'fixed',zIndex:5}}>
                 <Link
                    activeClass="active"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                    style={{padding:10}}
                  >
                    Dashboard
                  </Link>
                 <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 2
                  </Link>
                 <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 3
                  </Link>
                 <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 4
                  </Link>

             </Row>



        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <Element name="test3" className="element">
          test 3
        </Element>

        <Element name="test4" className="element">
          test 4
        </Element>



      </Col>
    );

}

export default Section
