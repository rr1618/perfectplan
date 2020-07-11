import React ,{useState,useEffect}  from 'react'
import { Form, Input, Button, Checkbox,Space ,Col} from 'antd';
import Modal from 'react-modal'
import { UserOutlined, LockOutlined,MailOutlined ,GoogleOutlined,FacebookFilled} from '@ant-design/icons';
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
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  var subtitle;
  const [modalIsOpen,setIsOpen] = useState(props.show);
  const [which,setWhich] = useState(true)
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

        Or <a onClick={()=>{setWhich(false)}}>register now!</a><br />
        </Space>
        <div style={{marginLeft:60,marginTop:20}}>
            <Space >
         <a ><GoogleOutlined style={{fontSize:30,color: '#D54B3D'}}/></a>
        <a ><FacebookFilled style={{fontSize:30,color: '#3B5998'}}/></a>
          </Space>
        </div>

      </Form.Item>
    </Form>)

}
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    customStyles.content.color = 'transparent';

  }

  function closeModal(){
    setIsOpen(false);
    props.greet()

  }

    return (
      <div>
        {/*<button onClick={openModal}>Open Modal</button>*/}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <Col>
             {which&& <Login/> }
             {!which&& <SignUp/>}
            </Col>

        </Modal>
      </div>
    );
}
export default LoginModal