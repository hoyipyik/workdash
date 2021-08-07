/**
 * 番茄倒计时的模块， 可以和todo的timing 按钮进行联动，显示剩余的番茄工作周期
 * 倒计时的功能
 * @component
 * 
 */
import React from 'react';
import { useState, useEffect } from 'react';
// import {Switch} from "@material-ui/core";
import "./Clock.css";

/**
 * 番茄倒计时的模块， 可以和todo的timing 按钮进行联动，显示剩余的番茄工作周期
 * 倒计时的功能.
 * 
 * 因为时间的操作的灵活性较高，所以使用了react hook的写法。 虽然是函数的形式，但是本质上也是个对象
 * @class CountDown
 * @author 贺烨毅 2019210737
 */ 

const CountDown=(props) =>{
    //初始化番茄钟 休息和工作的秒数的参数
    const time = 1500;
    const freeTime = 300;
    //state中添加 计时器 状态 工作休息判断 工作轮数 上层工作状态的轮数
    const [counter, setCounter] = useState(time);
    const [isActive, setIsActive] = useState(false);
    const [isWork, setisWork] = useState(true);
    const [Times, setTimes] = useState(props.Times);
    const [prevTimes,setPrevTimes] = useState(props.Times);
    
    /**
     * 
     * lifecycle函数 将上层本来的Times缓存到prevTimes中
     * @function useEffect
     * @memberof CountDown
     */
    useEffect(()=>{
      setPrevTimes(props.Times);
    })
    /**
     * lifecycle函数 刷新页面时， 给Times重新赋上层原本的Times的数值
     * @function useEffect
     * @memberof CountDown
     */
    useEffect(() => {
      if(prevTimes !== props.Times){
        setTimes(props.Times);
      }
    })
    /**
     * 
     * lifecycle函数 
     * @function useEffect
     *@memberof CountDown 
     */
    useEffect(() => {
      let interval = null;
      if (isActive) {
        //进行了倒计时的-1操作
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
    
    /**
     * 下一个状态转换函数， 进行工作和休息的状态的改变
     * @function nextMode
     * @memberof CountDown
     */
    const nextMode = () =>{
      setIsActive(false);
      setisWork(!isWork);
      //根据当前的状态来决定下个倒计时的总的时间数
      setCounter(isWork?freeTime:time);
      //两次状态转换相当完成一轮工作， 对Times剩余的轮数进行了赋值
      setTimes(Times => Times - 0.5);
    }
    /**
     * 
     * 暂停操作函数
     * @function toggle
     * @memberof CountDown
     */
    const toggle = () => {
        setIsActive(!isActive);
        //在restricmode的时候， 会禁用暂停按钮
        if(props.restrictMode){
          setCounter(isWork?time:freeTime);
          // setIsActive(false);
        }
      }
    /**
     * 
     * 重置操作函数
     * @function reset
     * @memberof CountDown 
     */
    const reset = () => {
        setCounter(isWork?time:freeTime);
        setIsActive(false);
      }
    
    /**
     * 分鐘
     */ 
    const minutes = Math.floor(counter / 60);
    /**
     * 秒
     */
    const seconds = counter % 60;

    /**
     * 
     * lifecycle函数 计时结束进行了提醒
     * @function useEffect
     * @memberof CountDown 
     */
    useEffect(()=>{
      if(minutes===0 && seconds===0 && isWork===true)
        window.alert("Well Done, Take a Break :)")
    
      if(minutes===0 && seconds===0 && isWork===false)
        window.alert("Back to Work XD")
    })
console.log(Times)
  return (
    <div className="app">
      <div className="time">
        {minutes}:{seconds}
      </div> 
      <div className="row">
      {/* //根据设定的情况显示不同的按钮功能 */}
      {(props.restrictMode && props.enableTomato) ?
        <button
            className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
            onClick={toggle}>
                {isActive ? 'Reset' : 'Start'}
        </button>:
        <span>
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
        </span>
        }
        <button
          className="button"
          onClick={nextMode}>
            Next
        </button>
      </div>
      
      {/* 参考设定的参数来显示剩余工作轮数的提示 */}
      {props.enableTomato &&
      <div>
      {!props.inlineTomato &&
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
      </div>}
      <br/>
    </div>
  );
}
export default CountDown
