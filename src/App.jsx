import React, { useState, useEffect } from 'react';
import Tours from '../Component/Tours';
import Loading from '../Component/Loding';
import toursData from './toursData';


function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setTours(toursData);
      setLoading(false);
    }, 1000);
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  if (loading) {
    return <Loading />;
  }

  if (tours.length === 0) {
    return (
      <div className="no-tours">
        <h2>No tours left</h2>
        <button onClick={() => setTours(toursData)}>Refresh</button>
      </div>
    );
  }

  return <Tours tours={tours} removeTour={removeTour} />;
}

export default App;
