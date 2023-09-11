import React from 'react';
import "../Styles/BusinessList.css"



function BusinessList({ businesses }) {
  return (
    <div className='list-container'>
      {businesses.map((business) => (
        <div key={business.id} className='list-card' >
          <h2>{business.name}</h2>
          <p> {business.category}</p>
          <p> {business.address}</p>
          <p> {business.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default BusinessList;
