import React from 'react'
import Button from 'react-bootstrap/Button';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';
import '../App.css';

// here we are returning a bootstrap dropdown and just a button
const Filters = ({ setMainData }) => {
    //function to call the getDataFromDB function and passing the 'year' to it entered by the user
    const handleSelect = (eventKey, event) => {
        getDataFromDB(event.target.innerText)
    };
    // func to fetch the filtered data by year and update the state
    const getDataFromDB = async(year) => {
        try{
            const response = await axios.get(`http://localhost:8000/api/data/year/${year}`);
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
    }
    // func to handle the "reset filters button" by making another api call and update state 
    const handleReset = async() => {
        try{
            const response = await axios.get("http://localhost:8000/api/data/all");
            setMainData(response.data.data)
        }
        catch(e){
            console.log(e)
        }
       
    }

    return (<div>
        <div className='row' style={{height:"45px"}}></div>
    <div className='row'>
       
<div className='col-md-2'></div>
<div className='col-md-3'>
            <Dropdown onSelect={handleSelect}>

                <Dropdown.Toggle variant="success" id="dropdown-basic" style={{border:"2px solid black"}}>
                    Filter(Year)
                </Dropdown.Toggle>

                <Dropdown.Menu style={{border:"2px solid black",backgroundColor:"#8b3df9"}}>
                    <Dropdown.Item eventKey="1" class="adm" style={{color:"white"}} ><b>2014</b></Dropdown.Item>
                    <Dropdown.Item eventKey="2" style={{color:"white"}} ><b>2015</b></Dropdown.Item>
                    <Dropdown.Item eventKey="3" style={{color:"white"}} ><b>2016</b></Dropdown.Item>
                    <Dropdown.Item eventKey="4" style={{color:"white"}} ><b>2017</b></Dropdown.Item>
                    <Dropdown.Item eventKey="5" style={{color:"white"}} ><b>2018</b></Dropdown.Item>
                    <Dropdown.Item eventKey="6" style={{color:"white"}} ><b>2019</b></Dropdown.Item>
                    <Dropdown.Item eventKey="7" style={{color:"white"}} ><b>2020</b></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            <div className='col-md-2'></div>
            <div className='col-md-3'>

            <Button variant="danger" style={{border:"2px solid black"}} onClick={handleReset} >Reset Filters</Button>
            </div>
            <div className='col-md-2'></div>
        </div>
        
        </div>
    )
}

export default Filters