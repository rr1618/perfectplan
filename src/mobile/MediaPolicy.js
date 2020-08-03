
import React, {useEffect} from 'react'
import {Col,Row,Space} from 'antd';
import Cfooter from "./footer";

import {NavBar} from './detail'
import PolicyBack from "../images/aboutLowerBack.png"
const MobileMediaPolicy =(props)=>
{
    useEffect(()=>{
            window.scrollTo(0,0)
        },[])

    return (

       <Col>
           <NavBar/>
            <Col className={'policy'} style={{padding:20,paddingTop:40,backgroundImage: "url("+`${PolicyBack}`+")",  backgroundSize: '100% 20%',backgroundRepeat: 'no-repeat'}}>
            <Row justify={'center'}>
                <h2 style={{color:'#6F523F',padding:8,borderRadius:10,backgroundColor:'#E5D2C7'}}>MEDIA POLICY</h2>
            </Row>
            <p  >
               The media policy for Perfect Plan B provides a framework for using social media. Whether employees are handling a corporate account or use one of their own, they should remain productive. This policy provides a practical approach to avoid issues that might arise by careless use of social media in the workplace.

We expect all our employees to follow this policy.
<Row justify={'center'}>
    <h5>Policy elements</h5>
</Row>


<p>“Social media” refers to a variety of online communities like blogs, social networks (Facebook, LinkedIn, Instagram, Pinterest, etc), chat rooms, and other online forums. This policy covers all of them. Perfect Plan B Media Policy emulates different elements for using personal social media at work and representing our company through social media.</p>


<Row justify={'center'}>
    <h5 >Using personal social media</h5>
</Row>
<p>We permit employees to access their personal social media accounts at work. But we expect them to act sensibly and ensure their efficiency isn’t affected. Using social media unreasonably while at work can reduce their productivity and attentiveness. Whether employees are using their accounts for business or personal purposes, they may easily lose focus by the vast amount of available content on the social media.


We advise our employees to:
 Use their common sense – If employees neglect their official duties to spend time on social media, their decline in productivity will show on their performance reviews.
 Please ensure that personal account or statements don’t represent the company –
Employees shouldn’t state or imply that their personal opinions and content on the social media are official or permitted and endorsed by the company. We advise you to avoid such misunderstandings and keep your statements to a private level as much as possible.
 Avoid sharing intellectual property – Like trademarks on a personal account without approval.Confidentiality and privacy policy of the company always apply.
 Avoid any defamatory, offensive or derogatory content – It may be considered as a violation of our company’s Code of Ethics, if directed towards colleagues, clients or partners.

Representing our company
Some employees/contractual employees characterize our company by handling corporate social media accounts or express views on our company’s behalf.We expect them to act carefully, sensibly and dutifully to protect our company’s image and reputation.

Employees should:
 Be respectful, polite and patient – When engaging in conversations on our company’s behalf, they should be extra careful when making declarations or promises towards customers and stakeholders
 Avoid speaking on matters outside their field of expertise – Everyone should be careful not to answer questions or make statements that fall under somebody else’s responsibility.
 Follow our Code of Ethics and Privacy Policy – Observe laws on copyright, trademarks, plagiarism and fair use.
 Avoid deleting or ignoring comments – They should listen and reply to criticism.
 Should not any post any discriminatory, offensive content – Be attentive and keep in mind to not post any content which might result in embarrassment to the company, its shareholders, other employees, customers and its products/services.
 Correct or remove – Any misleading or false content as quickly as possible from your social media accounts which are not in favour of the Perfect Plan B’s policies.

Disciplinary Consequences
Perfect Plan B will monitor all social media postings on our corporate account.
We may have to take disciplinary action leading up to and including termination if employees do not follow this policy’s guidelines.Examples of non-conformity with the employee social media policy include but are not limited to:
 Disregarding job responsibilities and deadlines to use social media.
 Disclosing confidential information through personal or corporate accounts.
 Directing offensive comments towards other members of the online community.</p>
            </p>
        </Col>
            <Cfooter/>
        </Col>
    )
}
export default MobileMediaPolicy