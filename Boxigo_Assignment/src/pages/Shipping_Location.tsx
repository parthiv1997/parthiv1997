import React from 'react';
import "../Style/Mymoves.css"
import { FaArrowRight } from "react-icons/fa";

interface LocationProps {
  fetchData: any;
}

const Shipping_Location: React.FC<LocationProps> = ({fetchData}) => {


  return (
    <div className='container_div'>
    <div className='sub_container'>
      <span className='bold'>From</span>
      <span className='opacity' >{fetchData.moving_from}</span>
    </div>
    <div className='sub_containercircle'>
      <FaArrowRight />
    </div >
    <div className='sub_container'>
      <span className='bold' >To</span>
      <span className='opacity'>{fetchData.moving_to}</span>
    </div>
    <div className='sub_container'>
      <span className='bold' >Request#</span>
      <span className='color'>{fetchData.estimate_id}</span>
    </div>
  </div>
  );
}

export default Shipping_Location;
