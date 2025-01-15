import React from 'react';
import Tour from './tour';




const Tours = ({ tours, removeTour }) => {
  return (
    <div className="tours">
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour} />
      ))}
    </div>
  );
};
export default Tours;
