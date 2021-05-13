import React, { Component } from 'react';
import {Switch} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green} from '@material-ui/core/colors';

class Settings extends Component {

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

    restrictModeMethod = ()=>{
        let restricMode = this.props.restrictMode;
        restricMode = !restricMode;
        this.props.updateRestricMode(restricMode);
        this.props.updateInlineTomato(false);
    }

    enableTomatoMethod =()=>{
        let enableTomato = this.props.enableTomato;
        enableTomato = !enableTomato;
        this.props.updateEnableTomato(enableTomato);
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

    render() {
        return (
            <div className="container">
                <h1>Setting</h1>
                <hr/>
                <span>
                    <label>Restrict Mode</label>
                    <ThemeProvider theme={this.switchTheme}>
                        <Switch
                            checked={this.props.restrictMode}
                            name="restrictMode"
                            id="restrictMode"
                            color="secondary"
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
                            disabled={this.props.restrictMode}
                            checked={this.props.inlineTomato}
                            name="inlineTomato"
                            id="inlineTomato"
                            color="primary"
                            onChange={this.inlineTomatoMethod}
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
            </div>
        );
    }
}

export default Settings;