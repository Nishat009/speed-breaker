import React, { useEffect, useState } from 'react';
import image from '../../images/photo-1486390781518-2f8743b0d090.jpg'
import fakeData from '../../fakeData/fakeData.json'
import Vehicles from '../Vehicles/Vehicles';
import './Home.css'

const Home = () => {
    const [vehicles,setVehicles] = useState([])
    
    useEffect (() => {
        setVehicles(fakeData)

    }, [])
    return (
        <div style={{backgroundImage:`url(${image})`}} className="background">
    
            <div className="row m-0">
                 {
               vehicles.map(vehicle =>
               <div className="col-lg-3 col-md-6 col-sm-12">
               <Vehicles vehicle={vehicle}></Vehicles></div>)
            }
            </div>
           
        </div>
    );
};

export default Home;

