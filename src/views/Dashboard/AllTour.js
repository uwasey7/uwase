import React from 'react';
import 'antd/dist/antd.css';
// import './index.css';
import { Space, Switch, Table } from 'antd';
import { useState } from 'react';
import AllTour from "../../assets/data/tours.json"
const columns = [
  {
    title: 'title',
    dataIndex: 'title',

  }
  
]
const App = () => <Table columns={columns} dataSource={AllTour} />;
    




export default App;