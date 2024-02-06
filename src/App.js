import React, { useState, useEffect } from 'react';
import './App.css'; // Import a CSS file for styling

const App = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    fetch('api')
      .then(resp => resp.json()) // Parse the response as JSON
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
            <h2>You've fetched the following message from your backend server</h2>
          </div>
          <div class="imagecontainer">
            <h2>{responseData}</h2>
          </div>
        </div>
      </div>

    </div>
  );
};

export default App;
