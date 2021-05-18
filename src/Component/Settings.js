import React, { Component } from 'react';
import {Switch} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green} from '@material-ui/core/colors';
//设定界面 setting的component，进行功能选项的设置
class Settings extends Component {
    //设定switch组建的样式
    switchTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[700],
            },
          secondary: {
            main: green[300],
          },
        },
      });

    //分别更新四个设定参数

    restrictModeMethod = ()=>{
        let restricMode = this.props.restrictMode;
        restricMode = !restricMode;
        this.props.updateRestricMode(restricMode);
        //如果使用restrictmode会自动禁用inlinetomato
        this.props.updateInlineTomato(false);
    }

    enableTomatoMethod =()=>{
        let enableTomato = this.props.enableTomato;
        enableTomato = !enableTomato;
        this.props.updateEnableTomato(enableTomato);
        if(!enableTomato){
            //如果不使用tomato clock， inline tomato自然也是禁用的
            this.props.updateInlineTomato(false);
        }
    }

    inlineTomatoMethod = ()=>{
        let inlineTomato = this.props.inlineTomato;
        inlineTomato = !inlineTomato;
        this.props.updateInlineTomato(inlineTomato);
    }

    encourageModeMethod =()=>{
        let encourageMode = this.props.encourageMode;
        encourageMode = !encourageMode;
        this.props.updateEncourageMode(encourageMode);
    }

    enableOrderMethod=()=>{
        let enableOrder = this.props.enableOrder;
        enableOrder = !enableOrder;
        this.props.updateEnableOrder(enableOrder);
    }
//lifecycle函数 显示
    render() {
        return (
            <div className="container">
                <h1>Setting</h1>
                <hr/>
                <span>
                    <label>Restrict Mode</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            // switch组件， 对应上层App.js传来的数据
                            checked={this.props.restrictMode}
                            name="restrictMode"
                            id="restrictMode"
                            color="secondary"
                            // 触发函数
                            onChange={this.restrictModeMethod}
                        />
                    </ThemeProvider>
                </span>
                <span>
                    <label>Enable Tomato Clock</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            checked={this.props.enableTomato}
                            name="enableTomato"
                            id="enableTomato"
                            color="primary"
                            onChange={this.enableTomatoMethod}
                        />
                    </ThemeProvider>
                </span>
                <span>
                    <label>Inline Tomato Clock</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            // disabled={this.props.restrictMode}
                            // 禁用按钮的条件
                            disabled={this.props.restrictMode||!(this.props.enableTomato)}
                            checked={this.props.inlineTomato}
                            name="inlineTomato"
                            id="inlineTomato"
                            color="primary"
                            onChange={this.inlineTomatoMethod}
                        />
                    </ThemeProvider>
                </span>
                <span>
                    <label>Enable Order</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            checked={this.props.enableOrder}
                            name="inlineTomato"
                            id="inlineTomato"
                            color="primary"
                            onChange={this.enableOrderMethod}
                        />
                    </ThemeProvider>
                </span>
                <span>
                    <label>Encourage Mode</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            checked={this.props.encourageMode}
                            name="encourageMode"
                            id="encourageMode"
                            color="primary"
                            onChange={this.encourageModeMethod}
                        />
                    </ThemeProvider>
                </span>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Settings;