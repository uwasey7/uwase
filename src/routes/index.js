import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../views/Home';
import AboutUs from '../views/About'
import HomeLayout from '../component/HomeLayout';
import Tour from '../views/Tour';
import ContactUs from '../views/Contact';


import DashboardLayout from '../component/DashboardLayout';
import AllTour from "../views/Dashboard/AllTour"
import App from '../views/Dashboard/AllTour';
import createTour from "../views/Dashboard/createTour"

import Form from '../views/Dashboard/createTour';


const Index=()=>{
   
   return(
    <>
    {/* <DashboardLayout>
   <Routes>
   <Route exact path='/Admin' element= {<DashboardLayout/>}></Route>
    </Routes> 
</DashboardLayout> */}
    <HomeLayout>
<Routes>
    <Route exact path='/' element= {<Home/>}></Route>
    <Route exact path='/home' element= {<Home/>}></Route>
      <Route exact path='/about' element= {<AboutUs/>}></Route>
     <Route  path='/Tour' element= {<Tour/>}></Route>   
    <Route  path='/Contact' element= {<ContactUs/>}></Route> 
    
</Routes>
<DashboardLayout>
   <Routes>
   <Route exact path='/Admin' element= {<App/>}></Route>
   <Route exact path='/Admin-Dashboard' element= {<Form/>}></Route>
    </Routes> 
</DashboardLayout>
</HomeLayout>

</>
    )
}


export default Index;