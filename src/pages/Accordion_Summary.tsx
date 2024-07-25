import React from 'react';
import "../Style/Mymoves.css"
import { AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Accordion_SummaryProps {
    categoryRoomName: any;
    fetchData:any;
  }
const Accordion_Summary: React.FC<Accordion_SummaryProps> = ({categoryRoomName, fetchData}) => {

    const numberOfRooms = (roomName) =>{
        const withCategories =  fetchData.filter((k)=>k.roomName === roomName).map((category) => {                    
          return category.categories !== null && category.categories !== undefined && category.categories.filter(item => item !== null) // Remove null values                                     
     })
     const withCategoriesfiltered = withCategories.filter(Array.isArray);
     const withCategoriesflattened = withCategoriesfiltered.flat(); 
     const withOutCategories =  fetchData.filter((k)=>k.roomName === roomName).map((category) => {                    
      return category.categories === null || category.categories === undefined && category
    })
    const withOutCategoriesfiltered = withOutCategories.filter(item => typeof item === 'object' && item !== null)
    const withOutCategoriesflattened = withOutCategoriesfiltered.filter(Boolean);
    const mergedArray = withCategoriesflattened.concat(withOutCategoriesflattened);
    const mergedArray1 = mergedArray.map((k)=>{return k.itemsList})
    const mergedArray2 = mergedArray1.map((k)=>{return k.all});
    let finalArrayOutput = mergedArray2.flat();
    return finalArrayOutput.reduce((total, item) => total + parseInt(item.qty), 0)     
      }
  return (
    <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1-content"
    id="panel1-header"
    sx={{ color: "#ef5238" }}
  >
    {categoryRoomName} &nbsp;&nbsp;&nbsp;<span className='ovel'>{numberOfRooms(categoryRoomName)}</span>
  </AccordionSummary>
  );
}

export default Accordion_Summary;
