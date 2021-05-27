import React from 'react'
import './Utils.css'

import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone, } from '@ant-design/icons';
import { Result,Button,message,notification,Modal, Spin, Space} from 'antd';
export const showErrMsg = (msg) => {
    return <div className="errMsg">{msg}</div>
}

export const showSuccessMsg = (msg) => {
    return <div className="successMsg">{msg}</div>
}
export const success = (mess) => {
    message.success({
      content: mess,
      className: 'custom-class',
      style: {
        marginTop: '10vh',
        marginLeft:"10vh"
      },
    });
  };
  export const err = (mess) => {
    message.error({
      content: mess,
      className: 'custom-class',
      style: {
        marginTop: '14vh',
      },
    });
  };
 
 export const noti = (title) => {
notification.open({
    message: title,
    icon: <CheckCircleTwoTone  twoToneColor="#52c41a"  />,
    style: {
        marginTop: '7vh',
      },
    
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });}
  export const Loading=()=>{
    return(
      <div className="example">
    <Space size="middle">
    <Spin size="large" tip="internet speeed issue please wait until data available or referesh page...!"/>
  </Space>
  </div>
    )}
 export function done() {
     Modal.success({
      title: 'This is a confirmaton message',
      icon:<HeartTwoTone twoToneColor="#eb2f96" />,
      content:  <Result
      status="success"
      title="Successfully Regisration and Payment Done!"
      
      subTitle=" Industro software configuration takes  minutes, please wait."
      extra={[
        <a type="primary" key="console" href='/' className="btn btn-primary">
          Go To DashBoard
        </a>,
        
      ]}
    />,
    });
   
  }
