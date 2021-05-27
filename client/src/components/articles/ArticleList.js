import React, { useState, useEffect } from 'react';
import  axios  from 'axios';
import { Link } from 'react-router-dom';
import { Table, Input, Button, Space, Badge, Spin } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons'

import {Loading, noti} from '../Utils'

import moment from "moment"

let searchInput
function ArticleList(props) {
  const [articles, setArticles] = useState([])

  useEffect(function() {
    async function getArticles() {
      try {
        const response = await axios.get("/api/articles");
        setArticles(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }        
    getArticles();
  }, []);
  const [searchText, setSearchText] = useState("")
  const [searchedColumn, setSearchedColumn] = useState("")
  const handleDelete=async(id)=>{
  
      try {
        await axios.delete(`/api/articles/${id}`); 
        props.history.push("/articles"); 
      } catch(error) {
        console.error(error);
      }
      const filterData = articles.filter(p=>p._id!==id)
      setArticles(filterData)
    
  }
   const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
           searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText(selectedKeys[0])
                setSearchedColumn(dataIndex)
                 
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => searchInput.select(), 100);
        }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
   const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      setSearchText(selectedKeys[0])
      setSearchedColumn(dataIndex)
       
    };
  
   const handleReset = clearFilters => {
      clearFilters();
      setSearchText('');
    };
 
    
      const columns = [
   
        {
          title: 'Name',
          dataIndex: 'username',
          key: "_id",
          width: '3%',
          ...getColumnSearchProps('username'),
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: "_id",
          width: '2%',
          ...getColumnSearchProps('phone'),
        },
        {
          title: 'Address', 
          dataIndex: 'address',
          key: "_id",
         
          width: '5%',
          ...getColumnSearchProps('address'),
         
        },
       
        {
          title: 'Deleviery Time',
          dataIndex: 'delevieryTime',
          key: "_id",
          width: '4%',
          ...getColumnSearchProps('delevieryTime'),
          // render: (key) => <span>{key.map(p=>p)}</span>
          
        },
        {
          title: 'Delviery Day',
          dataIndex: 'delevieryType',
          key: "_id",
          width: '4%',
          ...getColumnSearchProps('delevieryType'),
        },
       
        // {
        //   title: 'DocInfo',
        //   dataIndex: 'docInfo',
        //   key: "_id",
        //   width: '4%',
        //   ...getColumnSearchProps('docInfo'),
        // },
        // {
        //   title: 'Approvals',
        //   key: "_id",
        //   width: '4%',
        //   render: (key) => <span>{key.HR && key.emp && key.manager===true?`Approved `:"waiting"}</span>,
        // },
         {
          title: 'Action',
          key: '_id',
          fixed: 'right',
          width: 30,
          render: (key) => <><Link to={`/articles/edit/${key._id}`}><i className="fa fa-pencil" style={{color:"purple"}}></i></Link>
          <i className="fa fa-trash  ml-4" onClick={()=>handleDelete(key._id)}></i>
          </>
        }
        
      ];
  return (
    <div>
         <Link to={`/articles/new`} className="btn btn-primary float-right mb-2">Create New Customer</Link>
    <Table columns={columns} dataSource={articles} bordered scroll={{ x: 1200 }} />
    
    </div>
  )
}

export default ArticleList;