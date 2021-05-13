import React, { Component } from 'react';
import CountDown from '../Clock/CountDown';
import InlineTomato from "./InlineTomato";
import AddModule from "./AddModule";
import EditBoard from './EditBoard';
import ListModule from "./ListModule";

class Todo extends Component {

    constructor(props){
        super(props);
        this.state={
            index: 0,
            Times:0,
            enableTomato:this.props.enableTomato,
            inlineTomato:this.props.inlineTomato,
            todoData:[],
        }
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
                body:"You know Professor Sun will love it",
                propoty:false,
                encourage:false,
            },
            {
                id:1,
                checked:true,
                title:"Homework",
                tomatoNumber:5,
                body:"DDL is coming XD",
                propoty:true,
                encourage:true,
            },
            {
                id:2,
                checked:false,
                title:"Design a chip",
                tomatoNumber:3,
                body:"We Chinese can carve a chip by hand, Cry Dutchess :<",
                propoty:true, 
                encourage:false,
            },
            {
                id:3,
                checked:false,
                title:"Sleep",
                tomatoNumber:0,
                body:'',
                propoty:false,
                encourage:false,
            },
            {
                id:4,
                checked:false,
                title:"Eat",
                tomatoNumber:3,
                body:"",
                propoty:false,
                encourage:true,
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
            encourage:false,
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

    // updateTomatoTime = (item)=>{
    //     this.setState({
    //       Times:item,
    //     })
    //   }
    
    tomatoButton = ()=>{
        const index = this.state.index;
        let tomatoTimes =0;
        if (this.state.todoData[index]!==undefined)
            tomatoTimes = this.state.todoData[index].tomatoNumber;
        this.props.updateTomatoTimes(tomatoTimes);
        this.setState({
            Times:tomatoTimes,
        })
        // this.props.updateTomatoTime(tomatoTimes);
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
                <div >
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
                                inlineTomato={this.props.inlineTomato}
                                updateItemStatus={this.updateItemStatus}
                                updateTomatoTimes={this.props.updateTomatoTimes}
                                // updateTomatoTime={this.updateTomatoTime}
                                deleteItem={this.deleteItem}
                                enableTomato={this.props.enableTomato}
                                encourageMode={this.props.encourageMode}
                            />
                            {!this.props.restrictMode &&
                            <div>
                            <label style={{marginLeft: "1rem"}}>
                                Item Delete
                            </label>
                            <span>
                            <button 
                                onClick={this.deleteItem}
                                style={{marginLeft: "1rem"}}>
                                    Delete
                            </button>
                            {this.props.inlineTomato &&
                            <button 
                                onClick={this.tomatoButton}
                                style={{marginLeft: "1rem"}}>
                                    Start Timing
                            </button>}
                            </span>
                            </div>}
                    </div> 
                   </div> 
                   
                   {(this.props.inlineTomato&&this.props.enableTomato) &&
                   <div>
                    <br/>
                    <hr/>
                        <InlineTomato
                            Times = {this.state.Times}
                            enableTomato={this.props.enableTomato}
                            restrictMode={this.props.restrictMode}
                            inlineTomato={false}
                        />
                   </div>}
                   </div>}
                   <br/>
            </div>    
        );
    }
}

export default Todo;