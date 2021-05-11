import React, { Component } from 'react';

class AddModule extends Component {

    constructor(props){
        super(props);
        this.state={
            title:"",
        }
    }

    addButtonHandler=()=>{
        const {title} = this.state;
        if(title!=='')
        this.props.updateAddItem(title);
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
        // const data = [...this.state.todoData];
        return (
            <form>
                <label htmlFor="title">
                    <h5>What's Your Plan Today</h5>
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
        );
    }
}

export default AddModule;