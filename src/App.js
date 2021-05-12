import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import Todo from "./Component/Todo/Todo";
import Board from "./Component/Boards/Board";
import Settings from "./Component/Settings";
import Clock from "./Component/Clock/Clock";
import Navibar from "./Component/Navibar";
import About from "./Component/About"

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      Times:0,
      restrictMode:false,
      enableTomato:true,
      inlineTomato:true,
      encourageMode:true,
    }
  }

  componentDidMount(){
    const documentEnableTomato = JSON.parse(localStorage.getItem("enableTomato"));
    const documentRestrictMode = JSON.parse(localStorage.getItem("restrictMode"));
    const documentInlineTomato = JSON.parse(localStorage.getItem("inlineTomato"));
    const documentEncourageMode = JSON.parse(localStorage.getItem("encourageMode"));
    
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

  render() {
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