import React, { useState } from 'react';
import axios from 'axios';
import Ghi from './Ghi';
import BarChart from '../charts/BarChart';
import DoughnutChart from '../charts/DoughnutChart';
import LineChart from '../charts/LineChart';
import PieChart from '../charts/PieChart';
import PolarChart from '../charts/PolarChart';
import RadarChart from '../charts/RadarChart';
import Filters from './Filters';

export default function Def({ data, setMainData }) {

    const [limit, setLimit] = useState(8);
    const limitedData = data.slice(0, limit);
    const [search, setSearch] = useState("");
    const [selectedChart, setSelectedChart] = useState("DC");

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

    const handleChartButtonClick = (chartType) => {
        setSelectedChart(chartType);
    }

    return (
        <div className="container-fluid" style={{ backgroundColor: "#1f1f1f" }}>
            <div  style={{display:"flex",flexDirection:"row"}}>
                <div className="col-md-1 bhk d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#252525", minHeight: "100vh",minWidth:"8vw" }}>
                    <div onClick={() => handleChartButtonClick("BC")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "20px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>BC</button>
                    </div>
                    <div onClick={() => handleChartButtonClick("DC")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "30px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>DC</button>
                    </div>
                    <div onClick={() => handleChartButtonClick("LC")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "30px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>LC</button>
                    </div>
                    <div onClick={() => handleChartButtonClick("PC")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "30px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>PC</button>
                    </div>
                    <div onClick={() => handleChartButtonClick("PO")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "30px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>PO</button>
                    </div>
                    <div onClick={() => handleChartButtonClick("RA")} style={{ height: "50px", width: "50px", border: "2px solid black", margin: "30px", position: "relative" }}>
                        <button className="hover-button" style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "#8b3df9", border: "none", color: "white", fontWeight: "bold" }}>RA</button>
                    </div>
                </div>

                {/* Rest of your code */}
                <div className="api" style={{minWidth:"45vw"}}>
                    <div className="row" style={{ minHeight: "2vh" }}></div>
                    <div className="row" style={{ minHeight: "4vh" }}>
                        <div className="col-md-11" style={{ color: "#8b3df9" }}><h2><b>VISUALIZATION DASHBOARD</b></h2></div>
                    </div>
                    <div className="row" style={{ minHeight: "2vh" }}></div>
                    <div className="row" style={{  minHeight: "60vh" ,backgroundColor:"#252525"}}>
                        
                    {selectedChart === "BC" && <BarChart serverData={data} />}
                        {selectedChart === "DC" && <DoughnutChart serverData={data} />}
                        {selectedChart === "LC" && <LineChart serverData={data} />}
                        {selectedChart === "PC" && <PieChart serverData={data} />}
                        {selectedChart === "PO" && <PolarChart serverData={data} />}
                        {selectedChart === "RA" && <RadarChart serverData={data} />}
                    </div>
                    <div className="row" style={{ height: "20px" }}></div>
                    <div className="row" style={{  minHeight: "20vh",backgroundColor:"#252525" }}>
                    <Filters setMainData={setMainData} />
                    </div>
                </div>
                <div className="api" style={{ backgroundColor: "#1f1f1f" ,minWidth:"36vw"}}>
                    <div className="row">
                        <Ghi data={data} setMainData={setMainData} />
                    </div>
                </div>
            </div>
        </div>
    );
}
