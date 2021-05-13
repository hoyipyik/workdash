import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';


// import Checkbox from "./CheckBox";

const EncourageCheckbox = withStyles({
    root: {
    //   color: green[400],
      '&$checked': {
        color: green[300],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);


class ListModule extends Component {
    
    constructor(props){
        super(props);
        this.state={
            data:this.props.todoData,
            index:-1,
            // checked:false,
        }
    }

    
    

    checkboxTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[300],
            },
          secondary: {
            main: blue[700],
          },
          default:{
            main: green[300],
          }
        },
      });

    componentDidMount(){
        this.setState({
            // data:this.props.todoData,
            index:this.props.index,
        })
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.todoData!==this.props.todoData){
            this.setState({
                data: this.props.todoData,
            })
        }
        if(prevState.data!==this.state.data){
            this.props.updateItemStatus(this.state.data);
        }
        if(prevState.index!==this.state.index){
            this.props.updateIndexStatus(this.state.index)
        }
    }

    handleCheckboxChange = (index) => {
        let data = [...this.state.data];
        data[index].checked = !data[index].checked;
        this.setState({ 
            data: data,
        })
      }

    sendIndex = (index) =>{
        this.setState({
            index: index,
        })
    }

    render() {
        const data = this.props.todoData;
        // console.log(data);
        // console.log("now map")
        const rows = data.map((row, index)=>{
            // console.log(row,"_____________________")
            // console.log("Checked")
            // console.log(row.checked)
            return(
                <tr key={index}>
                    <div onClick={()=>this.sendIndex(index)}>
                    <ThemeProvider theme={this.checkboxTheme}>
                    {(row.encourage&&this.props.encourageMode)?
                        <EncourageCheckbox 
                            checked={row.checked}
                            color={row.propoty?"secondary":"primary"}
                            onClick={()=>this.handleCheckboxChange(index)} 
                            />
                        :<Checkbox 
                            checked={row.checked}
                            color={row.propoty?"secondary":"primary"}
                            onClick={()=>this.handleCheckboxChange(index)} 
                            />
                    }
                        </ThemeProvider>
                        <span
                            // onClick={()=>this.sendIndex(index)}
                            style={{ textDecoration: row.checked ? "line-through" : null,
                            marginLeft:16, fontWeight: row.propoty ? "bold" : null,
                                }}
                        >
                               {row.title}
                        </span>
                        <span>
                        </span>
                    </div>
                </tr>
            )
        })
        return(
            <div className="container">
            <table>
                <tbody>{rows}</tbody>
            </table>
            </div>
        )
        
    }
}

export default ListModule;