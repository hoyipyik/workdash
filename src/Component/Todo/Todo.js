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
            inlineTag:false,
            enableTomato:this.props.enableTomato,
            inlineTomato:this.props.inlineTomato,
            todoData:this.props.todoData,
        }
    }

    componentDidUpdate(prevState){
        if(prevState.todoData !== this.props.todoData){
            this.setState({
                todoData: this.props.todoData,
            })
        }
    }

    

    updateIndexStatus = index =>{
        this.setState({
            index: index,
        })
    }

    
    inlineTomatoButton = ()=>{
        const index = this.state.index;
        let tomatoTimes =0;
        if (this.state.todoData[index]!==undefined)
            tomatoTimes = this.state.todoData[index].tomatoNumber;
        this.props.updateTomatoTimes(tomatoTimes);
        this.setState({
            Times:tomatoTimes,
            inlineTag:true,
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
                        updateAddItem={this.props.updateAddItem}
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
                                updateItemStatus = {this.props.updateItemStatus}
                                index={this.state.index}
                                updateIndexStatus={this.updateIndexStatus}
                                encourageMode={this.props.encourageMode}
                            />
                        <span>
                        <button 
                            onClick={this.props.deleteDoneItem}>
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
                                updateItemStatus={this.props.updateItemStatus}
                                updateTomatoTimes={this.props.updateTomatoTimes}
                                // updateTomatoTime={this.updateTomatoTime}
                                deleteItem={this.props.deleteItem}
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
                                onClick={this.props.deleteItem}
                                style={{marginLeft: "1rem"}}>
                                    Delete
                            </button>
                            {this.props.inlineTomato &&
                            <button 
                                onClick={this.inlineTomatoButton}
                                style={{marginLeft: "1rem"}}>
                                    Start Timing
                            </button>}
                            </span>
                            </div>}
                    </div> 
                   </div> 
                   
                   {(this.props.inlineTomato&&this.props.enableTomato&&this.state.inlineTag) &&
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