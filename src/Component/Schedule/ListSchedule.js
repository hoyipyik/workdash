import React, { Component } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { blue, grey } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

class ListScheule extends Component {


    IconTheme = createMuiTheme({
        palette: {
          primary:{
              main:grey[800],
            },
          secondary: {
            main: blue[700],
          },
        },
      });

    render() {
        const data = this.props.scheduleData;
        
        const rows = data.map((item, index)=>{
            return(
            <tr key={index}>
                <div>
                <ThemeProvider theme={this.IconTheme}>
                <AddCircleOutlineIcon 
                    color={item.added?"secondary":"primary"}
                    style={{ fontSize: 17 }}
                    // onClick={}
                    />
                </ThemeProvider>
                <span 
                    style={{ fontSize: 19, 
                    marginLeft: "1rem" }}>
                    {item.title}
                </span>
                </div>
                
            </tr>
            )
        })
        console.log(rows,"This is schedule data");
        return (
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default ListScheule;