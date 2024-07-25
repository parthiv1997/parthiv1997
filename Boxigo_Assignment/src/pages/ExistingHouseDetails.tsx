import React from 'react';
import "../Style/Mymoves.css";

interface ExistingHouseDetailsProps {
  fetchData: any;
}

const ExistingHouseDetails: React.FC<ExistingHouseDetailsProps> = ({fetchData}) => {

  return (
    <div className='maincontainer'>
    <div className='boldcolor'>Existing House Details</div>
    <div className='container_div'>
      <div className='sub_container'>
        <span className='bold'>Flat No.</span>
        <span>{fetchData.old_floor_no}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Elevator Available</span>
        <span>{fetchData.old_elevator_availability}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Packing Required</span>
        <span>{fetchData.packing_service}</span>
      </div>
      <div className='sub_container'>
        <span className='bold'>Distance from truck to door</span>
        <span>{fetchData.old_parking_distance}</span>
      </div>
    </div>
    <div className='sub_container'>
      <span className='bold'> Additional Information</span>
      <span>No Additional Information</span>
    </div>
  </div>
 );
}

export default ExistingHouseDetails;
