import React,{useState} from "react";
import {Card,description,Image, Space, Typography,Button,Drawer} from "antd";
import SingleTour from "../component/singleTour"; 
import allTours from "../assets/Data/tours.json";
const {Text,Title}=Typography
const Tours = () =>{
    const [showDrawer,setShowDrawer]=useState(false);
    const[selectedTour,setSelectedTour]=useState({});
    return(
        <>
        <div style={{width:'100%',height:'auto',padding:'10px',padding:"20px 90px"}}>
            <Card>
                {allTours.map((tour)=>(
                    <Card.Grid className="tour-card-grid"
                     style={{width:"100",minHeight:"40rem",textAlign:"center"}}>
                        <Space direction="vertical">
                            <Image preview={true} src={tour.photo}/>
                            <Title level={4} style={{color:"brack"}}>
                                {tour.title.toUpperCase()}
                                </Title>
                                <Text type="secondary" style={{color:"blue"}} italic>{tour.description}</Text>
                                <Space>
                        
                        <Text>DUE Date:</Text>
                        <Text strong>{tour.dueDate} 10h30</Text>
                        </Space>
                        <Button onClick={() =>{
                            setSelectedTour(tour);
                            setShowDrawer(true)}}>Book Now</Button>
                        
                        </Space>
                    </Card.Grid>
                    )) }
                    </Card>
          
                    </div>
                    <Drawer title="Single Tour!" 
                    placement="right"  
                    onClose={() =>{setShowDrawer(false)}}
                    visible={showDrawer}>
                        <SingleTour data={selectedTour}/>
                    </Drawer>
                    </>
                    );
};
export default Tours;