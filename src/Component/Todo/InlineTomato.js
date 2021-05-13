import React, { Component } from 'react';

import CountDown from "../Clock/CountDown"
//inlinetomato组件的component 为了提高可读性 是todo.js的部分的第三部分的component
class InlineTomato extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Inline Tomato Clock</h3>
                    <CountDown
                        // 将设定参数和工作周期传递给countdown， 重用countdown component
                        Times = {this.props.Times}
                        enableTomato={this.props.enableTomato}
                        restrictMode={this.props.restrictMode}
                        inlineTomato={this.props.inlineTomato}
                    />
            </div>
        );
    }
}

export default InlineTomato;