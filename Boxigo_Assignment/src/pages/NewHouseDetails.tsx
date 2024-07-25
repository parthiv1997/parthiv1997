import React from 'react';
import "../Style/Mymoves.css";

interface NewHouseDetailsProps {
    fetchData: any;
  }
  
  const NewHouseDetails: React.FC<NewHouseDetailsProps> = ({fetchData}) => {

  return (
  <div className='maincontainer'>
    <div className='boldcolor'>New House Details</div>
    <div className='container_div'>
      <div className='sub_container'>
        <span className='bold'>Flat No.</span>
        <span>{fetchData.new_floor_no}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Elevator Available</span>
        <span>{fetchData.new_elevator_availability}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Packing Required</span>
        <span>{fetchData.packing_service}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Distance from truck to door</span>
        <span>{fetchData.new_parking_distance}</span>
      </div>
    </div>
    <div className='sub_container'>
      <span className='bold'> Additional Information</span>
      <span>No Additional Information</span>
    </div>
  </div>
  );
}

export default NewHouseDetails;
