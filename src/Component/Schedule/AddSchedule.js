import React, { Component } from 'react';

class AddSchedule extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
        }
    }

    addButtonHandler=()=>{
        const {title} = this.state;
        if(title!=='')
        this.props.updateScheduleAddItem(title);
        // console.log("addButton")
        this.setState({
            title:"",
        })
    }

    changeHandler =(event)=>{
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
        
    }

    render() {
        return (
            <div>
                <form>
                <label htmlFor="title">
                    <h5>Add Your Schedules For the Next Days</h5>
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    onChange={this.changeHandler}
                    value={this.state.title}
                />
                <input 
                    type="button" 
                    value="Add"
                    onClick={this.addButtonHandler}/>
            </form>
            </div>
        );
    }
}

export default AddSchedule;