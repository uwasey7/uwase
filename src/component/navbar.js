import React from 'react';
 import logo from "../assets/image/logo.jpg";
 import { Button, Modal,Input,Form } from 'antd';
import { useState } from 'react';
 import  './navbar.css';




const Nav=()=>{
    const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };
    return(
        
        <div className='navu'>
             <img src={logo} alt='Rwanda booking tour' className='logo-img'/> 
            <div className='navigation-links'>
                <ul className='nav-links'>

                    <li ><a href='home' className='nav-link'style={{color:"white"}}>
                        Home
                        </a></li>
                        
                    <li><a href='about' className='nav-link'style={{color:"white"}}>
                        About-us
                        </a></li>
                        
                    
                        
                   
                        
                    <li><a href='Contact' className='nav-link link-green' style={{color:"white"}}>
                        Contact Us
                        </a></li>

                        <li ><a href='gallery' className='nav-link'style={{color:"white"}}>
                        gallery
                        </a></li>
                        
                    <li><a href='/Tour' className='nav-link btn-link'style={{color:"white"}}>
                        Tour
                        </a></li>
                        <Button type="primary" onClick={showModal}>
       sign-in
      </Button>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          disabled: true,
        }}
        cancelButtonProps={{
          disabled: true,
        }}
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
        <Input  placeholder="Username" />
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
         
          type="password"
          placeholder="Password"
        />
      </Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{color:"white",fontSize:"15px"}}>
         Log in
        </Button>
        <Form.Item>
        Or <a href="/register" style={{color:"green",fontSize:"15px"}}>register now!</a>
      </Form.Item>
      </Modal>
                </ul>


            </div>
        </div>

        




    );
    

    };















export default Nav;