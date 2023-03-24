import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {

  const [tours, setTours] = useState(data);

  function removeTour(id) {
      setTours(tours.filter( tour => {
        return tour.id !== id;
      }));
  }

  if(tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
};

export default App;
