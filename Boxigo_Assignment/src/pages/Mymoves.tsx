import React, { useEffect, useState } from 'react';
import "../Style/Mymoves.css"
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import Shipping_Location from './Shipping_Location.tsx';
import Shipping_Info from './Shipping_Info.tsx';
import Disclaimer from './Disclaimer.tsx';
import InventoryTitle from './InventoryTitle.tsx';
import Accordion_Summary from './Accordion_Summary.tsx';
import WithCategories from './WithCategories.tsx';
import WithOutCategories from './WithOutCategories.tsx';
import HouseDetailsTitle from './HouseDetailsTitle.tsx';
import ExistingHouseDetails from './ExistingHouseDetails.tsx';
import NewHouseDetails from './NewHouseDetails.tsx';

const Mymoves: React.FC = () => {

  const [fetchData, setFetchData] = useState<any>(null);
  const [expandIcon, setExpandIcon] = useState(false);

  const handleExpandChange = () =>{
    setExpandIcon(!expandIcon);
  }

  const handleCheckChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    if(fetchData !== null){
      const newValue = event.target.checked ? event.target.value : null; 
      setFetchData({ ...fetchData, move_date_flexible: newValue });
    }
  }
  useEffect(() => {
    const fetchLedgerData = async () => {      
        fetch('/api_assignment.json')
        .then(response => response.json())
        .then(data =>{
         setFetchData(data);    
        })
        .catch(error => console.error('Error fetching data:', error));
    };
    fetchLedgerData();
  }, []);
 
  return (
    
    <div className='home'>
      {fetchData !== null &&
      <div className='maincontainer'>
        <h6 className='titleText'>My Moves</h6>
       <Shipping_Location fetchData={fetchData} />
       <Shipping_Info fetchData={fetchData} onClick={handleExpandChange} onChange={handleCheckChange}/>
        <Disclaimer expandIcon={expandIcon}/>
        {expandIcon ?<> <InventoryTitle />
        {fetchData.items !== null  ?
        (fetchData.items.rooms !== null && fetchData.items.rooms !== undefined && fetchData.items.rooms.length>0 ? 
        fetchData.items.rooms.map((category,i) => (                                 
        <div style={{marginTop: i!==0 ? '-14px':'0px'}}>
          <Accordion sx={{ width: "100%", backgroundColor: "#e8e8e8" }}>
          <Accordion_Summary categoryRoomName={category.roomName} fetchData={fetchData.items.rooms}/>
  <AccordionDetails sx={{ backgroundColor: "white", display:'flex'}}>
  {category.hasCategory === true ? category.categories !== null && category.categories !== undefined &&  category.categories.filter(item => item !== null) && category.categories.map((n, m) => (
    <WithCategories fetchData={n}/>
  )):category.hasCategory === false ? category.categories === null || category.categories === undefined && category.hasCategory === false && 
    <WithOutCategories fetchData={category} />
  :<></>} 
  </AccordionDetails>
          </Accordion>         
        </div>
       )):<></> 
      ):<></>}<HouseDetailsTitle /> 
      <ExistingHouseDetails fetchData={fetchData}/>
      <NewHouseDetails fetchData={fetchData}/></>:<></>}
      </div>
}
    </div>
  );
}

export default Mymoves;
