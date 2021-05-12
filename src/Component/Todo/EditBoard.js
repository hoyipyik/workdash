import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Slider} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green} from '@material-ui/core/colors';


class EditBoard extends Component {

    constructor(props){
        super(props);
        this.state={
            data:this.props.data,
            enableTomato:this.props.enableTomato,
        }

    }

    checkboxTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[700],
            },
          secondary: {
            main: green[300],
          },
        },
      });

      marks = [
        {
            value:0,
            label:0,
        },
        {
            value:5,
            label:5,
        }
    ]

    componentDidMount(){
        this.setState({
            data:this.props.data,
    
        })
    }
    
    componentDidUpdate(prevProps,prevState){
        if(prevProps.data !== this.props.data){
            this.setState({
                data:this.props.data,
            })
        }
        
    }

    editChange=(event)=>{
        const {name,value} = event.target;
        let {data} = this.state;
        data[this.props.index][name] = value;
        this.setState({
            data: data,
        })
    }

    switchChange = ()=>{
        let {data} = this.state;
        const index = this.props.index;
        data[index].propoty = !data[index].propoty
        this.setState({
            data: data,
        })
    }

    editSubmit=()=>{
        // if(window.confirm("Sure to Change?"))
            this.props.updateItemStatus(this.state.data);
    }

    tomatoButton = ()=>{
        const index = this.props.index;
        let tomatoTimes =0;
        if (this.props.data[index]!==undefined)
            tomatoTimes = this.props.data[index].tomatoNumber;
        this.props.updateTomatoTimes(tomatoTimes);
    }

    sliderChanged =(event,value)=>{
        let {data} = this.state;
        const index = this.props.index;
        data[index].tomatoNumber = value;
        this.setState({
            data: data,
        })
    }

    valuetext = (value)=> {
        return `${value} Tomatos`;
      }

      

    render() {
        const index = this.props.index;
        let data = {};
        if (this.props.data[index]!==undefined)
             data = this.props.data[index];
        else data = {
                id:0,
                checked:false,
                title:'',
                tomatoNumber:0,
                body:"",
                propoty:false,
        }
        // console.log(data.title)
        return (
            
            <div className="container">
                <h3>Edit</h3>
                <form>
                    <label>Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={this.editChange}
                    /> 
                    {this.props.enableTomato &&
                    <div>
                    <label>Tomato Time {data.tomatoNumber!==0?data.tomatoNumber:null}</label>
                    <span>
                    <ThemeProvider theme={this.checkboxTheme}>
                    <Slider 
                        value={data.tomatoNumber}
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks={this.marks}
                        // valueLabelDisplay="on"
                        min={0}
                        max={5}
                        name="tomatoNumber"
                        id='tomatoNumber'
                        onChange={this.sliderChanged}
                    />
                    </ThemeProvider>
                    <Link to="/clock">
                    <button onClick={this.tomatoButton}>
                        Start Timing
                    </button>   
                    </Link>
                    
                    </span>
                    </div>}
                    <label>Important</label>
                    <ThemeProvider theme={this.checkboxTheme}>
                    <Switch
                        checked={data.propoty}
                        name="propoty"
                        id="propoty"
                        color="primary"
                        onChange={this.switchChange}
                        />
                    </ThemeProvider>
                    <label>Description</label>
                    <textarea
                        type="text"
                        id="description"
                        name="body"
                        value={data.body}
                        onChange={this.editChange}
                    />   
                    <span>
                        <input
                            type="button"
                            value="Save"
                            onClick={this.editSubmit}
                        />
                        {/* <button 
                            onClick={this.props.deleteItem}
                            style={{marginLeft: "1rem"}}>
                                Delete
                        </button> */}
                    </span>
        
                </form>
            </div>     
        );
    
    }
}

export default EditBoard;