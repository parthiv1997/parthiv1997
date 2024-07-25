import React from 'react';
import "../Style/Mymoves.css"
import { BsFillExclamationTriangleFill } from "react-icons/bs";


interface DisclaimerProps {
  expandIcon: any;
}

const Disclaimer: React.FC<DisclaimerProps> = ({expandIcon}) => { 

  return (
    <div className={!expandIcon?'container_divlast':"container_divlast downline"}>
    <BsFillExclamationTriangleFill className='colors' />
    <p className='opacity checkbox1'><b>Disclaimer: </b>please update your move date before two days of shifting</p>
  </div>
  );
}

export default Disclaimer;
