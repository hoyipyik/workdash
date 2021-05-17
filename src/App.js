import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import Todo from "./Component/Todo/Todo";
import Board from "./Component/Boards/Board";
import Settings from "./Component/Settings";
import Clock from "./Component/Clock/Clock";
import Navibar from "./Component/Navibar";
import About from "./Component/About";
import Schedule from "./Component/Schedule/Schedule";

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      Times:0,
      restrictMode:false,
      enableTomato:true,
      inlineTomato:true,
      encourageMode:true,
      todoData:[],
      scheduleData:[],
    }
  }

  componentDidMount(){
    const documentEnableTomato = JSON.parse(localStorage.getItem("enableTomato"));
    const documentRestrictMode = JSON.parse(localStorage.getItem("restrictMode"));
    const documentInlineTomato = JSON.parse(localStorage.getItem("inlineTomato"));
    const documentEncourageMode = JSON.parse(localStorage.getItem("encourageMode"));
    const documentData = JSON.parse(localStorage.getItem("todo"));
    const documentScheduleData = JSON.parse(localStorage.getItem("scheduleData"));

    if(documentScheduleData!==null){
      this.setState({
        scheduleData: documentScheduleData,
      })
    }else{
      this.setState({
        scheduleData:[
          {
            id:0,
            title:"Try to work 25h a day",
            tomatoNumber:0,
            body:"You know Professor Sun will love it",
            propoty:false,
            added:false,
        },
        {
            id:1,
            title:"Homework",
            tomatoNumber:5,
            body:"DDL is coming XD",
            propoty:true,
            added:true,
        },
        ],
      })
    }

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

    if(documentEnableTomato!==null){
      this.setState({
        enableTomato:documentEnableTomato,
      })
    }else{
      this.setState({
        enableTomato:true,
      })
    }

    if(documentInlineTomato!==null){
      this.setState({
        inlineTomato:documentInlineTomato,
      })
    }else{
      this.setState({
        inlineTomato:true,
      })
    }

    if(documentEncourageMode!==null){
      this.setState({
        encourageMode:documentEncourageMode,
      })
    }else{
      this.setState({
        encourageMode:true,
      })
    }

    if(documentRestrictMode!==null){
      this.setState({
        restrictMode:documentRestrictMode,
      })
    }else{
      this.setState({
        restrictMode:false,
      })
    }
  }

  componentDidUpdate(prevState){
    if(prevState.todoData!==this.state.todoData){
      localStorage.setItem("todo",JSON.stringify( this.state.todoData));
  }

    if(prevState.scheduleData!==this.state.scheduleData){
      localStorage.setItem("scheduleData",JSON.stringify(this.state.scheduleData))
    }

    if(prevState.enableTomato!==this.state.enableTomato){
        localStorage.setItem("enableTomato",JSON.stringify( this.state.enableTomato));
    }

    if(prevState.restrictMode!==this.state.restrictMode){
      localStorage.setItem("restrictMode",JSON.stringify( this.state.restrictMode));
    }

    if(prevState.inlineTomato!==this.state.inlineTomato){
      localStorage.setItem("inlineTomato",JSON.stringify( this.state.inlineTomato));
    }

    if(prevState.encourageMode!==this.state.encourageMode){
      localStorage.setItem("encourageMode",JSON.stringify( this.state.encourageMode));
    }
}

  updateTomatoTimes = (item)=>{
    this.setState({
      Times:item,
    })
  }

  updateRestricMode = (item) =>{
    this.setState({
      restrictMode: item,
    })
  }

  updateEnableTomato = (item) =>{
    this.setState({
      enableTomato:item,
    })
  }

  updateInlineTomato = (item) =>{
    this.setState({
      inlineTomato:item,
    })
  }

  updateEncourageMode =(item)=>{
    this.setState({
      encourageMode:item,
    })
  }

  //Move from Todo
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

updateScheduleAddItem=(item)=>{
  const {scheduleData} = this.state; 
  let newId = scheduleData.length;
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
  const newScheduleData =  [...scheduleData,newItem];
  this.setState({
      scheduleData: newScheduleData,
  })
}


updateItemStatus = item => {
  this.setState({
      todoData:item,
  })
}
/* End*/

  render(){
    return (
      <div className="container">
        <Navibar/>
        <Switch>
          <Route path="/workdash" target="_blank" rel="noopener noreferrer">
            <Todo
              Times ={this.state.Times}
              updateTomatoTimes={this.updateTomatoTimes}
              restrictMode={this.state.restrictMode}
              enableTomato={this.state.enableTomato}
              inlineTomato={this.state.inlineTomato}
              encourageMode={this.state.encourageMode}
              todoData={this.state.todoData}
              deleteDoneItem={this.deleteDoneItem}
              deleteItem={this.deleteItem}
              clearAll={this.clearAll}
              updateAddItem={this.updateAddItem}
              updateItemStatus={this.updateItemStatus}
            />
          </Route>
          <Route path="/board">
            <Board/>
          </Route>
          <Route path="/clock" target="_blank" rel="noopener noreferrer">
            <Clock
              Times ={this.state.Times}
              enableTomato={this.state.enableTomato}
              restrictMode={this.state.restrictMode}
              inlineTomato={this.state.inlineTomato}
            />
          </Route>
          <Route path="/schedule">
            <Schedule 
              scheduleData={this.state.scheduleData}
              updateScheduleAddItem={this.updateScheduleAddItem}
            />
          </Route>
          <Route path="/settings">
            <Settings
              restrictMode={this.state.restrictMode}
              updateRestricMode={this.updateRestricMode}
              enableTomato={this.state.enableTomato}
              updateEnableTomato={this.updateEnableTomato}
              inlineTomato={this.state.inlineTomato}
              updateInlineTomato={this.updateInlineTomato}
              encourageMode={this.state.encourageMode}
              updateEncourageMode={this.updateEncourageMode}
              />
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;