import React, { Component } from 'react';

import AddModule from "./AddModule";
import EditBoard from './EditBoard';
import ListModule from "./ListModule";

class Todo extends Component {

    constructor(props){
        super(props);
        this.state={
            index: 0,
          
            todoData:[
            {
                id:0,
                checked:true,
                title:"Try to work 25h a day",
                tomatoNumber:0,
                body:"",
                propoty:false,
            },
            {
                id:1,
                checked:false,
                title:"Homework",
                tomatoNumber:3,
                body:"I have to work",
                propoty:true,
            },
            {
                id:2,
                checked:true,
                title:"Design a chip",
                tomatoNumber:3,
                body:"I have to work",
                propoty:true, 
            },
            {
                id:3,
                checked:false,
                title:"Sleep",
                tomatoNumber:0,
                body:'',
                propoty:false,
            },
            {
                id:4,
                checked:false,
                title:"Eat",
                tomatoNumber:10,
                body:"",
                propoty:false,
            }
        ]}
    }

                       
componentDidMount(){
    const documentData = JSON.parse(localStorage.getItem("todo"));
    if (documentData !== null){
      this.setState({
        todoData:documentData,
      })
    }else{
      this.setState({
        index:0,
        todoData:[
            {
                id:0,
                checked:true,
                title:"Try to work 25h a day",
                tomatoNumber:0,
                body:"",
                propoty:false,
            },
            {
                id:1,
                checked:true,
                title:"Homework",
                tomatoNumber:3,
                body:"I have to work",
                propoty:true,
            },
            {
                id:2,
                checked:false,
                title:"Design a chip",
                tomatoNumber:3,
                body:"I have to work",
                propoty:true, 
            }
        ]
      })
    }
    }

    componentDidUpdate(prevState){
        if(prevState.todoData!==this.state.todoData){
            localStorage.setItem("todo",JSON.stringify( this.state.todoData));
        }
    }

    updateAddItem =(item)=>{
        const {todoData} = this.state; 
        let newId = todoData.length;
        const newItem = {
            id:newId,
            checked:false,
            title:item,
            tomatoNumber:0,
            body:"",
            propoty:false,
        }
        console.log(newItem)
        const newTodoData =  [...todoData,newItem];
        this.setState({
            todoData: newTodoData,
        })
    }

    updateItemStatus = item => {
        this.setState({
            todoData:item,
        })
    }

    updateIndexStatus = index =>{
        this.setState({
            index: index,
        })
    }

    deleteDoneItem = () =>{
        const data = this.state.todoData;
        let newData  = [];
        let Data = [];
        newData = data.filter(item=>item.checked === false)
        Data = newData.map((item,index)=>{
            item.id = index;
            return item;
        })
        // console.log("!!!!!!!!!!",Data);
        if(window.confirm("Sure to Change?"))
        this.setState({
            todoData: Data,

        })
    }

    deleteItem = () =>{
        const data = this.state.todoData;
        const index = this.state.index;
        let newData  = [];
        let Data = [];
        newData  = data.filter(item=>item.id!==index)
        Data = newData.map((item,index)=>{
            item.id = index;
            return item;
        })
        // console.log("!!!!!!!!!!",Data);
        if(window.confirm("Sure to Change?"))
        this.setState({
            todoData: Data,
        })
    }

    clearAll = ()=>{
        const newData = [];
        if(window.confirm("Sure to Change?"))
        this.setState({
            todoData: newData,
        })
    }

    

    render() {
        return (
            <div className="container">
                <div>
                    <h1>To do</h1>
                    <AddModule 
                        todoData={this.state.todoData}
                        updateAddItem={this.updateAddItem}
                    />
                </div>
                <br/>
                {this.state.todoData.length!==0 &&
                <div className="flex-row">
                    <div className="flex-large">
                        <h3>List </h3>
                            <ListModule 
                                todoData ={this.state.todoData}
                                updateItemStatus = {this.updateItemStatus}
                                index={this.state.index}
                                updateIndexStatus={this.updateIndexStatus}
                            />
                        <span>
                        <button 
                            onClick={this.deleteDoneItem}>
                                Clean Done
                        </button>
                        <button 
                            style={{marginLeft: "1rem"}}
                            onClick={this.clearAll}>
                                Clear All
                        </button>
                        </span>
                    </div>
                   
                    <div className="flex-large">
                            <EditBoard
                                data={this.state.todoData}
                                index={this.state.index}
                                updateItemStatus={this.updateItemStatus}
                                updateTomatoTimes={this.props.updateTomatoTimes}
                                deleteItem={this.deleteItem}
                            />
                            <label style={{marginLeft: "1rem"}}>
                                Item Delete
                            </label>
                            <button 
                                onClick={this.deleteItem}
                                style={{marginLeft: "1rem"}}>
                                    Delete
                            </button>
                    </div> 
                   </div> }
                   <br/>
            </div>    
        );
    }
}

export default Todo;