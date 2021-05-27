import React, { useState } from "react";
import { post } from 'axios';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
  DatePicker
} from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import { noti } from "../Utils";
const { Option } = Select
const { RangePicker } = DatePicker;;
const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
function ArticleAdd(props) {
  
  const [article, setArticle] = useState("")

  function handleChange(event) {
    setArticle({ ...article, [event.target.name]: event.target.value })
  }

  

  function handleCancel() {
    props.history.push("/articles");
  }






  const onFinish = (values) => {
      async function postArticle() {
      try {
        const response = await post('/api/articles', values); 
        props.history.push(`/articles/${response.data._id}`);  
        noti(response.data)
      } catch(error) {
        console.log('error', error);
      }
    }
    postArticle();
    console.log('Received values of form: ', values);
  };

  return (
    <div className="container shadow">
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
        }}
      >
        <div className="row">

          <div className="col-md-4">
            <Form.Item
              {...formItemLayout}
              name="username"
              label="Name"
              hasFeedback
            >
              <Input placeholder="customer name" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              {...formItemLayout}
              name="phone"
              label="Phone"

              hasFeedback
            >
              <Input placeholder="phone number" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
              {...formItemLayout}
              name="address"
              label="Address"
              hasFeedback
            >
              <Input placeholder="address" />
            </Form.Item>
          </div>
          <div className="col-md-4">
            <Form.Item
                name="delevieryTime"
                label="Deleviery Time"
                rules={[
                  {
                    required: true,
                    message: 'Please select your deleviery Time!',
                    type: 'array',
                  },
                ]}
            >
              <Select placeholder="Please select a deleviery Time" mode="multiple">
                <Option value="morning">Morning</Option>
                <Option value="evening">Evening</Option>
              
              </Select>
            </Form.Item></div>
          
            
            <div className="col-md-8">
            <Form.Item name="delevieryType" label="Day Of Deleveiry">
            <Checkbox.Group>
             
                  <Checkbox
                    value="sunday"
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Sunday
                  </Checkbox>
              
               
                  <Checkbox
                    value="monday"
                    style={{
                      lineHeight: '32px',
                    }}
                    
                  >
                    Monday
                  </Checkbox>
               
               
                  <Checkbox
                    value="tuesday"
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Tuesday
                  </Checkbox>
               
               
                  <Checkbox
                    value="wednesday"
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Wednesday
                  </Checkbox>
               
               
                  <Checkbox
                    value="thursday"
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Thursday
                  </Checkbox>
               
               
                  <Checkbox
                    value="friday"
                    style={{
                      lineHeight: '32px',
                    }}
                  >
                    Friday
                  </Checkbox>
               
               
                <Checkbox
                  value="saturday"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Saturday
                </Checkbox>
                <Checkbox
                  value="even"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Even Date
                </Checkbox>
                <Checkbox
                  value="saturday"
                  style={{
                    lineHeight: '32px',
                  }}
                >
                  Odd Date
                </Checkbox>
            </Checkbox.Group>
          </Form.Item>
    
            </div>


          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>

    </div>
  );
}

export default ArticleAdd;