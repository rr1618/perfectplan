import React ,{useState,useEffect,useContext}  from 'react'
import { Form, Input, Select,Col,message,Row} from 'antd';
import Modal from 'react-modal'
import API from "../apiService";
import {TokenContext} from "../index";
import {ModalContext} from "../index";
import { GoogleLogin } from 'react-google-login';
const { Option } = Select;


const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};


function LoginModal(props){

        const {token,setToken} = useContext(TokenContext)
        const {modal,setModal} = useContext(ModalContext)
        const [message,setMessage] = useState('')
        const [loginOrSignup,setLoginOrSignup] = useState(true)
        useEffect(()=>{
          if(token) {
            sessionStorage.setItem("token", token['token'])
            sessionStorage.setItem("username", token['user'])
            sessionStorage.setItem("img", token['img'])
            setModal(false)
          }
      },[token])
        const onFinish = values => {
            console.log("register",values)
        if(loginOrSignup)
            API.loginUser({'username':values.username,'password':values.password}).then(res=>{
                            setToken({'token':res.data['token'],'user':res.data['username']})
                            }).catch(error=>{
                                setMessage('Wrong username or password')
                            })
        else
        {
            API.registerUser(values).then(res=>{
                        alert("user created now login")
                        window.location.reload()
                        }).catch(error=>{
                            console.log("error",error)
                        })
        }
        console.log('Success:', values);
                                    };

        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };


            const SignUp=()=>
                {
                  return (
                      <Col>
                            <Col  style={{textAlign: 'center' ,marginBottom:15}}>
                                    <p style={{color:'#8F6952'}}>Home>Enroll Now</p>
                                    <h2 style={{color:'#8F6952'}}><strong> Sign Up</strong></h2>
                                    <h6 style={{color:'#8F6952'}} >Get Ready for your Dream Career</h6>

                        </Col>
                          <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                              <h6 className={'form-labels'} >Your Name(Required)</h6>
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your name!',
                          },
                        ]}
                        style={{margin:0}}
                      >
                        <Input
                        className={'input-fields'}/>
                      </Form.Item>
                              <h6 className={'form-labels'} >Your Email(Required)</h6>
                      <Form.Item
                        name="Email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Email!',
                          },
                        ]}
                        style={{margin:0}}
                      >
                        <Input
                            className={'input-fields'}

                          type="email"

                        />
                      </Form.Item>
                                   <h6 className={'form-labels'} >Your Password(Required)</h6>
                               <Form.Item
                        name="Password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                        style={{margin:0}}
                      >
                        <Input
                            className={'input-fields'}
                          type="password"
                        />

                      </Form.Item>
                              <h6 className={'form-labels'} >Your Mobile(Required)</h6>
                              <Form.Item
                        name="Mobile"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Mobile Number!',
                          },
                        ]}
                        style={{margin:0}}
                      >
                        <Input
                            className={'input-fields'}
                          type="number"
                        />
                      </Form.Item>
                              <h6 className={'form-labels'} >What do you wish to grow into</h6>
                              <Form.Item
                        name="Course"
                        rules={[
                          {
                            required: false,
                            message: '',
                          },
                        ]}
                        style={{marginBottom:8}}
                      >
                                  <Select  className={'input-fields'} style={{borderWidth:1}} bordered={false} >
                                      <Option value="python" > Python</Option>
                                      <Option value="data structure">Data structure</Option>
                                  </Select>
                      </Form.Item>
                      <Form.Item>
                          <Row justify={'center'}>
                              <button className={'form-buttons'}  type="submit" >
                          <strong style={{color:'white'}}>ENROLL NOW</strong>
                        </button>
                          </Row>

                      </Form.Item>
                    </Form>
                      </Col>
                  )
                }
            const Login=()=>{
                const responseGoogle = (res) => {
                    console.log(res)
                    API.SocialAccount({email:res.profileObj.email,token:res.tokenObj.access_token,name:res.profileObj.name,platform:'Google'}).then(resp=>{
                        if(resp.data===true)
                            setToken({'token':res.tokenObj.access_token,'user':res.profileObj.email,'img':res.profileObj.imageUrl})
                                })
                };

                return(<Col >

                        <Col  style={{textAlign: 'center' ,marginBottom:20}}>
                                    <p style={{color:'#8F6952'}}>Home>Login</p>
                                    <h2 style={{color:'#8F6952'}}><strong> Login</strong></h2>
                                    <h6 style={{color:'#8F6952'}} >Login to your account and start learning!</h6>

                        </Col>
                    <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                        <h6 style={{color:'#8F6952'}}>Your Email(Required)</h6>
                      <Form.Item
                        name="username"

                        rules={[
                          {
                            required: true,
                            message: 'Please input your Username!',
                          },
                        ]}
                      >
                        <Input type='email' className={'input-fields'}  />
                      </Form.Item>
                          <h6 style={{color:'#8F6952'}}>Your Password(Required)</h6>
                      <Form.Item

                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                      >
                        <Input className={'input-fields'}

                          type="password"

                        />
                      </Form.Item>


                      <Form.Item>

                        <Row justify={'center'}>

                                <button className={'form-buttons'}  type="submit"
                                         style={{marginRight:10
                                         }}>
                          <strong style={{color:"white"}}>LOGIN</strong>
                        </button>
                         <button className={'form-buttons'} style={{marginLeft:10
                                         }} onClick={()=>{setLoginOrSignup(false)}}><strong style={{color:"white"}}>SIGNUP</strong></button><br />

                        </Row>
                        <div style={{marginLeft:30,marginTop:20}}>
                        <Row justify={'center'}>
                             <GoogleLogin
                                        clientId="613674576814-a3u6c823erg54v0c46rpotn0bvvs61c3.apps.googleusercontent.com"
                                        buttonText="Google Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                    />
                        </Row>
                        <br/>
                        <p style={{color:'red'}}>{message}</p>

                        </div>

                      </Form.Item>
                    </Form>
                </Col>)

}

  const afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    props.cstyle.content.color = 'transparent';

  }

  const closeModal=()=>{
    setModal(false);

  }


            return (
              <div>

                <Modal
                  isOpen={true}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={props.cstyle}
                  contentLabel="Example Modal"

                >
                   <Col style={{backgroundColor:'#F5E2CF'}}>
                     {loginOrSignup&& <Login/> }
                     {!loginOrSignup&& <SignUp/>}
                    </Col>

                </Modal>
              </div>
            );
}
export default LoginModal