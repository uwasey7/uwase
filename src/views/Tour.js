import React, { useState } from 'react';
import {Card,Image,Space,Typography,Drawer,Button}from "antd"
// import './tour.css'
// import { DownloadOutlined } from '@ant-design/icons';
// import { Button} from 'antd';
// import single from '../views/Tour';
import AllTour from '../assets/data/tours.json'
 import SingleTour from '../component/SingleTour';
import Yup from "../assets/imgs/go.jpg";
import By from "../assets/imgs/vo.jpg";

const{Text,Title}=Typography



const Tours =()=>{

const [size, setSize] = useState('large');
const [showDrawer,setShowDrawer]=useState(true);
const [selectedTour,setSelectedTour]=useState({});
    return(
       
<>

<div style={{width:'100%',height:'auto', padding:'20px 100px',textAlign:"center"}}>
<Card className="card">

    
       {AllTour.map ((Tour) =>(
       <Card.Grid style={{width:"30%",minHeight:"30rem"}} className="container-card">
            <Space direction="vertical">
            <Image preview={true} src={Tour.photo} />
           <Title level={4} style={{color:"blue"}}> 
           {Tour.title.toUpperCase()}
            </Title>
            <Text type="secondary" italic>{Tour.descrption}</Text>
                <Space>

<Text>DUE Date:</Text>
<Text strong>{Tour.dueDate} 10h30</Text>

    </Space>         
    <Button onClick={()=>{setSelectedTour(Tour);
        setShowDrawer(true)}}>
        Book Now!
      </Button >
                </Space>
            
    </Card.Grid>)) }
</Card>
</div>



<Drawer title="single Tour"
 placement='right' 
  onClose={()=>{setShowDrawer(false)}}
  visible={showDrawer}>
<SingleTour data={selectedTour}/>
</Drawer>
</>


);

    
}
export default Tours;