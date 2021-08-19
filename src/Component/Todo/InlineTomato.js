/**
 * Inline模式下的使用 在todo的界面内来显示番茄计时器 来调用CoutDown模块
 * @component
 * @author 贺烨毅 2019210737
 */
import React, { PureComponent } from 'react';

import CountDown from "../Clock/CountDown"
/**
 * Inline模式下的使用 在todo的界面内来显示番茄计时器 来调用CoutDown模块
 * 
 * inlinetomato组件的component 为了提高可读性 是todo.js的部分的第三部分的component
 * @author 贺烨毅 2019210737
 */
class InlineTomato extends PureComponent {
    /**
     * constructor function
     * @param  {object} props
     */
    constructor(props){
        super(props);
    }
    /**
     * render
     */
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