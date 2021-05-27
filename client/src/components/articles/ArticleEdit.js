import React, { useState, useEffect } from "react";
import Axios, { get, patch } from 'axios';
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
function ArticleEdit(props) {

  const initialState = { username: '', address: '',phone:"",delevieryType:"",delevieryTime:"" ,}
  const [article, setArticle] = useState(initialState)
  const [form] = Form.useForm();
 
 
  useEffect(function() {
    async function getArticle() {
      try {
        const response = await get(`/api/articles/${props.match.params._id}`);
        setArticle(response.data);        
      } catch(error) {
        console.log(error);
      }
    }
    getArticle();    
  }, [props]);
const {username,address,delevieryTime,delevieryType,phone}=article




 
  const onFinish =async (values) => {
   
    try {
      const response = await Axios.patch(`/api/articles/${props.match.params._id}`, values); 
      props.history.push(`/articles`);  
      noti(response.data)
    } catch(error) {
      console.log('error', error);
    }
  

  console.log('Received values of form: ', values);
};
React.useEffect(() => {
  form.setFieldsValue({
    username,address,phone,delevieryTime,delevieryType,delevieryTime
  });
}, [article]);
  return (
    <div className="container shadow">
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        initialValues={{
        }}
        form={form}
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

export default ArticleEdit;