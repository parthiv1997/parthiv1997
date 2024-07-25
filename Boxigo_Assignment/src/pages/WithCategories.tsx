import React from 'react';
import "../Style/Mymoves.css";

interface WithCategoriesProps {
  fetchData: any;

}
const WithCategories: React.FC<WithCategoriesProps> = ({fetchData}) => {

  return (
    <div className='acdive' style={{width:'25%'}}>  
    <div className='container_div'>     
      <div className='sub_container4'>
        <span className='boldness'>{fetchData.categoryName !== null && fetchData.categoryName !=="" && fetchData.categoryName}</span>
      </div>           
    </div>                 
       <div className='container_div1'>
        {fetchData.itemsList.all !== null && fetchData.itemsList.all !== undefined && fetchData.itemsList.all.filter(item => item !== null).filter(o=>parseInt(o.qty) > 0).map((n, m) => (
      <div className='sub_container3'>
        <span className='sub_container223'>
          <span>{n.display_name}</span>
          <span className='bold'>{parseInt(n.qty)}</span>
        </span>
        <span className='bold'>{n !== null && n !== undefined?n.size !== null && n.size !== undefined?n.size.defaultSelect:n.type !== null && n.type !== undefined?n.type.default_type[0]:"" :""}</span>
      </div> ))}      
    </div>      
  </div>
  );
}

export default WithCategories;
