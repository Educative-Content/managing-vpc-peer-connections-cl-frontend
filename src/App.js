import React, { useState, useEffect } from 'react';
import './App.css'; // Import a CSS file for styling

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/s3image')
      .then(resp => resp.json()) // Parse the response as JSON
      .then(data => {
        setResponseData(data);
      })
      .catch(err => {
        console.log('======failure=======');
        console.error(err);
      });
  }, []);
//responseData
  return (
    <div>
      {/* <h1>{responseData}</h1> */}
      <img src={responseData} alt="Girl in a jacket"></img>
    </div>
  );
};

export default App;
