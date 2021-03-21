import React from 'react';
import { Card } from 'react-bootstrap';
import {useHistory } from 'react-router';
const Vehicles = (props) => {
    const {vehicleName, id, vehicleImage}=props.vehicle;
    const history = useHistory();
    const handleDestination = (vehicleName,id) =>{
        history.push(`/destination/${vehicleName}/${id}`);
    }


    return (
        <div  onClick={()=>handleDestination(vehicleName, id)} className="container m-auto">

<Card style={{  width: '18rem', height:'20rem'}}>
  <Card.Img className="w-100 h-50 mx-auto" variant="top" src={vehicleImage} />
  <Card.Body>
    <Card.Title>{vehicleName}</Card.Title>
  </Card.Body>
          </Card>
            
        </div>
    );
};

export default Vehicles;