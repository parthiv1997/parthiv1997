import React from 'react';
import "../Style/Mymoves.css"
import { BsFillExclamationTriangleFill } from "react-icons/bs";


const Disclaimer: React.FC = () => {

  return (
    <div className='container_divlast'>
    <BsFillExclamationTriangleFill className='colors' />
    <p className='opacity checkbox1'><b>Disclaimer: </b>please update your move date before two days of shifting</p>
  </div>
  );
}

export default Disclaimer;
