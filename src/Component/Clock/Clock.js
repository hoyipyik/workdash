import React, { Component } from 'react';
import Timer from "./Timer";
import CountDown from "./CountDown";

class Clock extends Component {

    render() {
        return (
            <div className="container">
               {/* <h1>Clock</h1> */}
               <div className="flex-row">
                    <div className="flex-large">
                    <h3>Timer</h3>
                        <Timer/>                        
                    </div>
                    <div className="flex-large">
                    <h3>Count Down</h3>
                        <CountDown
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