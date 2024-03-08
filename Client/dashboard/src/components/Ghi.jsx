import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import '../App.css';

//import from files
import CardsForData from './CardsForData';
import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';
import axios from 'axios';

export default function Ghi({ data, setMainData }) {

    const [limit, setLimit] = useState(8);
    const limitedData = data.slice(0, limit);
    // state to store the search bar text
    const [search, setSearch] = useState("");

    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:8000/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

  return (
    <><div className='row' style={{ height: "20px" }}></div>
     <div className='row'><div className=''></div><div className='col-md-11'>
            <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex' }}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." aria-label="Search" onChange={(e) => setSearch(e.target.value)} style={{ marginRight: '1rem' }} />
                        <button className="btn btn-primary my-2 my-sm-0" type="submit" style={{backgroundColor:"#8b3df9"}}>Search</button>
                    </form></div><div className='col-md-1'></div>
            </div>
            <div className='row' style={{ height: "20px" }}></div>
    <div className='row'>

            {/* <div className='row'><div className='col-md-1'></div><div className='col-md-10'>
                CARDS</div><div className='col-md-1'></div></div> */}
<div className='row' style={{overflow: 'auto', maxHeight: '86vh',maxWidth:'100vh', backgroundColor:"#252525"}}>
{limitedData && limitedData.length === 0 ? (
    <div style={{margin:'10rem'}}>No data found, or please wait for a while.</div>
) : limitedData && limitedData.length > 0 ? (
    <CardGroup >
        {limitedData.map((e, i) => {
            return <div className='col-md-5' style={{margin:"8px"}}><CardsForData item={e} key={i} /></div>
        })}
    </CardGroup>
) : (
    <div>Loading...</div>
)}

<Button variant="primary" style={{backgroundColor:"#8b3df9"}} onClick={() => setLimit(prev => prev + 2)}>Show More</Button></div>


            </div>
            </>
  )
}
