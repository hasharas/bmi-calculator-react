import React, { useState } from "react";

import './index.css';


function App() {

  const [weight, setWeight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setmessage] = useState('');

  let imgSrc='';

  return (
    <div className="App">
      <div className='container'>
           <h2 className="center">BMI Calculetor</h2>
           <form action="">
              <div>
                  <label htmlFor="">Weight (lbs)</label>
                  <input value={weight} />
              </div>
              <div>
                  <label htmlFor="">Height (in)</label>
                  <input value={height} />
              </div>
              <div>
                  <button className="btn" type="submit">Submit</button>
                  <button className="btn btn-outline" type="submit">Submit</button>
              </div>
           </form>
              <div className="center">
                  <h3>You BMI is: {bmi}</h3>
                  <p>{message}</p>
              </div>

              <div className="img-container">
                  <img src={imgSrc} alt=""></img>
              </div>

           </div>    
    </div>
  );
}

export default App;
