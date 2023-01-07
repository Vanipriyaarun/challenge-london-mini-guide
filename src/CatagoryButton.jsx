import React from 'react';
let catagories=["Pharmacies","Schools and Colleges","Hospitals","Doctors"]
function CatagoryButton() {
  return (
    <div className='catagory'>
      {catagories.map((catagory,index)=>(
        <button key={index} className="btn btn-secondary">{catagory}</button>
      ))}
    </div>
  )
}

export default CatagoryButton;
