/*Timer计时器模块   
 * 以秒作为单位，向上进行计时
 * 贺烨毅 2019210737
 */
import React, { useState, useEffect } from 'react';
import "./Clock.css";
// 因为时间的操作的灵活性较高，所以使用了react hook的写法。 虽然是函数的形式，但是本质上也是个对象
const Timer = () => {
  //在state中添加了秒数和计时状态参数
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
//停止函数
  const toggle=()=> {
    setIsActive(!isActive);
  }
//重置函数
  const reset=() =>{setSeconds(0);
    setIsActive(false);
  }
//lifecycle函数 
  useEffect(() => {
    let interval = null;
    if (isActive) {
      //秒数1s加一
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {seconds}s
      </div> 
      <div className="row">
        <button 
            className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} 
            onClick={toggle}>
            {/* 根据状态来改变按钮的名字 */}
                {isActive ? 'Pause' : 'Start'}
        </button>
        <button 
            className="button" 
            onClick={reset}>
                Reset
        </button>
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default Timer;