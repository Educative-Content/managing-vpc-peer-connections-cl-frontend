import React, { useState, useEffect } from 'react';
import './App.css'; 

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch('api/s3image')
      .then(resp => resp.json()) 
      .then(data => {
        setResponseData(data);
      })
      .catch(err => {
        console.log('======failure=======');
        console.error(err);
      });
  }, []);
  return (
    <div class="relative text-white min-h-screen">
      <div class="message-container">
        <div class="text-center">
          <div class="text-5xl font-black m-2 mt-8">
            <h1>Congratulations!</h1>
            <h2>You've fetched the following image using PrivateLink</h2>
          </div>
          <div class="imagecontainer">
            <img src={responseData} alt="There was an error"></img>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
