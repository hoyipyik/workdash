import React from 'react';
import { useState, useEffect } from 'react';
// import {Switch} from "@material-ui/core";
import "./Clock.css";
const CountDown=(props) =>{
    let time = 1500;
    let freeTime = 300;
    const [counter, setCounter] = useState(time);
    const [isActive, setIsActive] = useState(false);
    const [isWork, setisWork] = useState(true);
    const [Times, setTimes] = useState(props.Times);
    // const [tomatoTag, setTomatoTag] = useState(true)

    useEffect(() => {
      let interval = null;
      if (isActive) {
        interval = setInterval(() => {
          setCounter(counter => {
            if(counter > 0)
              return counter -1;
            else 
              return 0;
          });
        }, 1000);
      } else if (!isActive && counter !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isActive, counter]);
    
    const nextMode = () =>{
      setIsActive(false);
      setisWork(!isWork);
      setCounter(isWork?freeTime:time);
      setTimes(Times => Times - 0.5);
    }

    const toggle = () => {
        setIsActive(!isActive);
        
      }
    
    const reset = () => {
        setCounter(isWork?time:freeTime);
        setIsActive(false);
      }
    
    // const tomatoTagFunction = () =>{
    //   setTomatoTag(!tomatoTag);
    // }
  
    const minutes = Math.floor(counter / 60);
    const seconds = counter % 60;
    useEffect(()=>{
      if(minutes===0 && seconds===0 && isWork===true)
        window.alert("Well Done, Take a Break :)")
    
      if(minutes===0 && seconds===0 && isWork===false)
        window.alert("Back to Work XD")
    })

  return (
    <div className="app">
      <div className="time">
        {minutes}:{seconds}
      </div> 
      <div className="row">
        <button 
            className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
            onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
        </button>
        <button 
            className="button" 
            onClick={reset}>
                Reset
        </button>
        <button
          className="button"
          onClick={nextMode}>
            Next
        </button>
      </div>
      
      {/* <Switch 
        checked={tomatoTag}
        name="tomatoTag"
        id="tomatoTag"
        color="primary"
        onChange={tomatoTagFunction}
      /> */}
      {props.enableTomato &&
      <div>
      {Times<=0?
      <div className='row'>
        All Done
      </div>:
      <div className="row">
        {Math.ceil(Times)} Times Left
      </div>}
      </div>
      }
      <br/>
    </div>
  );
}
export default CountDown
