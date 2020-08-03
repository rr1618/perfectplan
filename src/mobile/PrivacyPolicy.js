
import React, {useEffect} from 'react'
import {Col,Row,Space} from 'antd';
import Cfooter from "./footer";

import {NavBar} from './detail'
import PolicyBack from "../images/aboutLowerBack.png"
const MobilePrivacyPolicy =(props)=>
{
    useEffect(()=>{
            window.scrollTo(0,0)
        },[])
    return (

       <Col>
           <NavBar/>
            <Col className={'policy'} style={{padding:20,paddingTop:40,backgroundImage: "url("+`${PolicyBack}`+")",  backgroundSize: '100% 10%',backgroundRepeat: 'no-repeat'}}>
            <Row justify={'center'}>
                <h2 style={{color:'#6F523F',padding:8,borderRadius:10,backgroundColor:'#E5D2C7'}}>PRIVACY POLICY</h2>
            </Row>
            <p  >
               PerfectPlanB (also referred to as “PPB‘, ‘we’, ‘us’, ‘our’ throughout this document), a member of the PPB Group is committed to protecting your privacy and developing technology to give you a powerful and safe online experience. PerfectPlanB is the owner of domain www.perfectplanb.net in India.

This Statement of Privacy applies to the PPB website www.perfectplanb.net (India)., and governs data collection and usage. By using the PPB website, you consent to the data practices described in this statement.

The PPB Group, signifies  that this privacy policy and practices have been
                reviewed by the company. Requirements for this programme include transparency, accountability and choice regarding the collection and use of your personal information. Our mission, is to accelerate online trust among consumers and organisations. If you have questions or complaints regarding our privacy statement or practices, please contact us at info@perfectplanb.net. The privacy policy covers that the information collected on www.perfectplanb.net, and/or any other means as will be notified from time to time and does not cover information that may be collected through other sites that may be owned and operated by us.</p>
<Row justify={'center'}>
    <h5>Collection of Your Personal Information</h5>
</Row>


<p>PPB collects personally identifiable information, such as your email address, name, home or work address or telephone number and a pin. PPB also collects anonymous demographic information, which is not unique to you, such as your ZIP/Postal code, age, gender, preferences, interests and favourites.

PPB collects certain types of personally identifiable information from businesses such as company name, location address, contact person, position, phone number, email address, valid ID document type and number, registered date of the company, and a pin.

We may collect information about third parties from you such as details of names, email addresses, and date of birth data. If your spouse or family members wish to have their information removed from our site, they may contact us at info@perfectplanb.net.

There is also information about your computer hardware and software that is automatically collected by PPB. This information can include your IP address, browser type, domain names, access times and referring website addresses. This information is used by PPB for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the PPB website.

Our website offers publicly accessible blogs or community forums. You should be aware that any information you provide in these areas may be read, collected, and used by others who have access to them. To request removal of your personal information from our blog or community forum, contact us at info@perfectplanb.net. In some cases, we may not be able to remove your personal information, in which case we will let you know if we are
unable to do so and why.

PPB encourages you to review the privacy statements of websites you choose to link to from PPB so that you can understand how those websites collect, use and share your information. PPB is not responsible for the privacy statements or other content of websites outside of the PPB website and the family of websites.

When you download and use our services, we automatically collect information on the type of device you use, operating system version, and device identifier (UDID).

We do not ask you for access or track any location-based information from your mobile device at any time while downloading or using our mobile applications or services.</p>


<Row justify={'center'}>
    <h5 >Use of Your Personal Information</h5>
</Row>
<p>PPB collects and uses your personal information to help you operate the our local website and deliver the services you have requested, such as allowing you to keep track of new referrals, account balances, transactions, activity and performance, commissions. PPB also uses your personally identifiable information to respond to your enquiries, allow you to subscribe to RSS feeds, newsletters, articles, updates, and inform you of other products or services available from PPB and its affiliates. PPB may also contact you via surveys to
conduct research about your opinions of current services or of potential new services that may be offered. We may require you to provide us certain demographic information (such as zip code). We will also use this information to monitor site traffic and personalise the site.

PPB collects and uses your personal information to create your business account. We may also use your information to send you relevant newsletters, respond to your enquiries, allow you to subscribe to RSS feeds, newsletters, articles and updates. To learn how you may opt- out/ unsubscribe from certain types of communications, please see the paragraph below.

PPB does not share, sell, rent or lease its customer information lists to third parties other than as disclosed in this privacy policy. PPB may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (email, name, address, telephone number) will not be transferred to the third party. In addition, PPB may share data with trusted partners to help us perform statistical analysis, send you email or postal mail, provide customer support, process payments, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to PPB, and they are required to maintain the confidentiality of your information. If you no longer wish to receive email offers, newsletters, articles, or updates you may opt-out at any time by using
the unsubscribe link located at the bottom of each communication, or simply by emailing us at info@perfectplanb.net.

We may also disclose your personal information as required by law, such as to comply with a subpoena, or similar legal process, when we believe in good faith that disclosure is necessary to protect our rights, to protect your safety or the safety of others, investigate fraud, or respond to a government request.

If we are involved in a merger, acquisition, or sale of all or a portion of our assets, you will be notified via email and/or prominent notice on our website of any change in ownership or use of your personal information, as well as any choices you may have regarding your personal information.

PPB does not use or disclose sensitive personal information, such as race, religion, or political affiliations, without your explicit consent.

PPB keeps track of the websites and pages our customers visit within PPB in order to determine. This data is used to deliver customised content and advertising within PPB to customers whose behaviour indicates that they are interested in a particular subject area.
</p>


        </Col>
            <Cfooter/>
        </Col>
    )
}
export default MobilePrivacyPolicy