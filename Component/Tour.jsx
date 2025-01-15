import React, { useState } from 'react';

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h4>{name}</h4>
        <p className="tour-price">${price}</p>
        <p className="tour-info">
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'See less' : 'Show more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
