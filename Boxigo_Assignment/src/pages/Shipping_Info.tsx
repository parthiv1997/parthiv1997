import React, { useState } from 'react';
import "../Style/Mymoves.css"
import { FaPencilAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxes, faHome, faTruckFront } from "@fortawesome/free-solid-svg-icons";
import { GiPathDistance } from "react-icons/gi";
import moment from 'moment';

interface ShippingInfoProps {
    fetchData: any;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  }

const Shipping_Info: React.FC<ShippingInfoProps> = ({fetchData, onChange, onClick}) => {  

  return (
        <div className='container_div'>
          <div className='sub_container2'>
            <span className='colors'><FontAwesomeIcon icon={faHome} className='imageInside' /></span>
            <span>{fetchData.property_size}</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><FontAwesomeIcon icon={faBoxes} className='imageInside' /></span>
            <span>{fetchData.boxes_count}</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><GiPathDistance className='imageInside'/></span>
            <span>{fetchData.distance}</span>
          </div>
          <div className='sub_container2'>
            <span className='colors'><FontAwesomeIcon icon={faTruckFront} className='imageInside' /></span>            
            <span className='sub_container2'>
              <span>{moment(fetchData.moving_on, 'YYYY-MM-DD HH:mm:ss').format('MMM DD,YYYY [at] hh:mm a')}</span>
              <FaPencilAlt className='altColors' />
            </span>
          </div>
          <div className='sub_container2'>
            <input className='colors' type='checkbox' id='move_date_flexible' name="move_date_flexible" checked={fetchData.move_date_flexible === "1"} value={fetchData.move_date_flexible} onChange={onChange}></input>
            <label className='checkbox1' htmlFor="checkbox">is flexible</label>
          </div>
          <div className='sub_container22'>
            <button onClick={onClick} className='button1 textDefaultSize'> View More details</button>
            <button className='button2 textDefaultSize'> Quotes Awaiting</button>
          </div>
        </div>
  );
}

export default Shipping_Info;
