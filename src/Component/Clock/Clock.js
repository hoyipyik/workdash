import React, { Component } from 'react';
import Timer from "./Timer";
import CountDown from "./CountDown";
//clock界面的component， 作为了timer和countdown的承载component
class Clock extends Component {

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