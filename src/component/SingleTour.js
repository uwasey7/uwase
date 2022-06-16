import React from "react";
import { Button, Space } from "antd";
import {input,Card,Typography}from 'antd';
import { Carousel } from 'antd';

// 11111
const SingleTour =({data})=>{
    return(
        <>
        <div>
        <h1>{data.title}</h1>
         <Carousel autoplay> 
        <img src={data.photo}alt=""/>
         <img src={data.photos}alt=""/> 
        </Carousel>
        <p style={{textAlign:"center"}}>{data.preparedBy}</p>
        <p style={{textAlign:"center"}}>{data.description}</p>
        <p style={{textAlign:"center"}}>{data.dueDate}</p> 
        </div>
        <Card title="Application Form" style={{fontSize:"20px",textAlign:"center",background:"grey"}}>
        <Space direction="vertical"></Space>   
        <input placeholder="Email" style={{fontSize:"10px",textAlign:"center",padding:"4px"}}></input>
        <input placeholder="phone"style={{fontSize:"10px",textAlign:"center",padding:"4px",margin:"5px"}}></input>
        <Button onClick={()=>{}}>Send Application</Button>
        </Card>

        </>
    );
};
export default SingleTour;