/**
 * 时钟的顶层模块 作为timer和countdown的容器
 * @component
 * 贺烨毅 2019210737
 */
import React, { Component } from 'react';
import Timer from "./Timer";
import CountDown from "./CountDown";
/**
 * clock界面的component， 作为了timer和countdown的承载component
 * @author 贺烨毅 2019210737
 */
class Clock extends Component {
    /**
     * @method render
     * @memberof Clock
     * @author 贺烨毅 2019210737
     */
    render() {
        return (
            <div className="container">
               {/* <h1>Clock</h1> */}
               <div className="flex-row">
               {/* 调用flex-large的classname，在大荧幕的状态左右的grid各占1/2 */}
                    <div className="flex-large">
                    <h3>Timer</h3>
                        <Timer/>                        
                    </div>
                    <div className="flex-large">
                    <h3>Count Down</h3>
                        <CountDown
                        // 给countdown传递参数
                            Times = {this.props.Times}
                            enableTomato={this.props.enableTomato}
                            restrictMode={this.props.restrictMode}
                            inlineTomato={this.props.inlineTomato}
                        />
                    </div>
               </div>
               
           </div>
        );
    }
}

export default Clock;