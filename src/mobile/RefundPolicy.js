
import React,{useEffect} from 'react'
import {Col,Row,Space} from 'antd';
import Cfooter from "./footer";

import {NavBar} from './detail'
import PolicyBack from "../images/aboutLowerBack.png"
const MobileRefundPolicy =(props)=>
{
        useEffect(()=>{
            window.scrollTo(0,0)
        },[])
    return (


       <Col>
           <NavBar/>
            <Col className={'policy'} style={{padding:20,paddingTop:40,backgroundImage: "url("+`${PolicyBack}`+")",  backgroundSize: '100% 20%',backgroundRepeat: 'no-repeat'}}>
           <Row justify={'center'}>
                <h2 style={{color:'#6F523F',padding:8,borderRadius:10,backgroundColor:'#E5D2C7'}}>REFUND POLICY</h2>
            </Row>
          <p>
              Perfect Plan B (PPB) refund policy with respect to candidates withdrawing from the course before commencement of the course: Time required for the processing refund request is 10 -15 working days after receiving the signed hard copy of the prescribed refund request form from the candidate.

All cancellations must be made in writing to info@perfectplanb.net Cancellation fees
are as follows:
1. More than 7 days prior to the course start date: No cancellation/Refund.
2. 7 days or less prior to the course start date: 40% cancellation fee

Note : If you got the course through scholarship programme, then refund policy is not there.

If the payment is made using the card (debit/credit card) in online transaction card swipe, the card transaction charges (2-3%, depending on the card) will be deducted.

If the bill is already generated, then the GST amount will be deducted and only the Net amount will be refunded.

Any fees incurred will be deducted from the payment received..
          </p>

<Row justify={'center'}>
    <h5>Ownership of Course Materials
</h5>
</Row>


<p>PPB solely own all the intellectual property or have obtained the necessary rights relating to the materials used for the open enrolment courses. Title to and the right to determine the disposition of any copyrightable materials first produced under the terms of the agreement solely by the staff shall remain with PPB and will be governed by the Perfect Plan B intellectual property policies. You must not copy, reproduce, republish, disassemble, decompile, reverse engineer, download, post, broadcast, transmit, make available to the public, or otherwise use PPB content in any way except for your own personal, non-commercial use. You also agree not to adapt, alter or create a derivative work from any PPB content except for your own personal, non-commercial use. Any other use of PPB content requires the prior written permission of the Perfect Plan B licensing office, Gurgaon.</p>




        </Col>
            <Cfooter/>
        </Col>
    )
}
export default MobileRefundPolicy