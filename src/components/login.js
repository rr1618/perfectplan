import React ,{useState,useEffect,useContext}  from 'react'
import { Form, Input, Button, Checkbox,Space ,Col,message} from 'antd';
import Modal from 'react-modal'
import API from "../apiService";
import {TokenContext} from "../index";
import {ModalContext} from "../index";
import { GoogleLogin } from 'react-google-login';
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    color                 :'red'

  }
};
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
                      <Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your name!',
                          },
                        ]}
                      >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
                      </Form.Item>
                      <Form.Item
                        name="Email"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Email!',
                          },
                        ]}
                      >
                        <Input
                          prefix={<MailOutlined className="site-form-item-icon" />}
                          type="email"
                          placeholder="Email"
                        />
                      </Form.Item>
                               <Form.Item
                        name="Password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                      >
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                          Sign Up
                        </Button>
                      </Form.Item>
                    </Form>
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

                return(<Form
                      name="normal_login"
                      className="login-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Username!',
                          },
                        ]}
                      >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                      </Form.Item>
                      <Form.Item
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your Password!',
                          },
                        ]}
                      >
                        <Input
                          prefix={<LockOutlined className="site-form-item-icon" />}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Item>
                      <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                          Forgot password
                        </a>
                      </Form.Item>

                      <Form.Item>
                        <Space>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                          Log in
                        </Button>

                        Or <a onClick={()=>{setLoginOrSignup(false)}}>register now!</a><br />
                        </Space>
                        <div style={{marginLeft:30,marginTop:20}}>

                         <GoogleLogin
                                        clientId="613674576814-a3u6c823erg54v0c46rpotn0bvvs61c3.apps.googleusercontent.com"
                                        buttonText="Google Login"
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}
                                    /><br/>
                        <p style={{color:'red'}}>{message}</p>

                        </div>

                      </Form.Item>
                    </Form>)

}

  const afterOpenModal=()=> {
    // references are now sync'd and can be accessed.
    customStyles.content.color = 'transparent';

  }

  const closeModal=()=>{
    setModal(false);

  }

            return (
              <div>
                <Modal
                  isOpen={modal}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"

                >
                   <Col>
                     {loginOrSignup&& <Login/> }
                     {!loginOrSignup&& <SignUp/>}
                    </Col>

                </Modal>
              </div>
            );
}
export default LoginModal