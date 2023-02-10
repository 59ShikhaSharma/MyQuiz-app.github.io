import React from 'react'
import "./Home.css";
import { TextField } from "@material-ui/core";

const Home = () => {
  return (
    <div className="content">
      <div className='settings'>
        <span style={{fontSize: 30}}>Quiz Settings</span>
        
        <div className='settings_select'>
          <TextField 
          style={{marginBottom: 25}}
          label = " Enter Your Name" 
          variant="outlined"/>

        </div>
      </div>
      <img src="/quiz.svg" className='banner' alt="quiz img"/>

    </div>
    
  )
}

export default Home;
