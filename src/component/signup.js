import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Modal,Input,Form } from 'antd';
import { useState } from 'react';
import Register from "../component/register.js";

const App = () => {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with customized button props
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
    </>
  );
};

export default App;