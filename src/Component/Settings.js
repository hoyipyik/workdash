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
    }

    enableTomatoMethod =()=>{
        let enableTomato = this.props.enableTomato;
        enableTomato = !enableTomato;
        this.props.updateEnableTomato(enableTomato);
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
            </div>
        );
    }
}

export default Settings;