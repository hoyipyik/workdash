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

  render() {
    return (
      <div className="container">
        <Navibar/>
        <Switch>
          <Route path="/workdash" target="_blank" rel="noopener noreferrer">
            <Todo
              updateTomatoTimes={this.updateTomatoTimes}
              restrictMode={this.state.restrictMode}
              enableTomato={this.state.enableTomato}
            />
          </Route>
          <Route path="/board">
            <Board/>
          </Route>
          <Route path="/clock" target="_blank" rel="noopener noreferrer">
            <Clock
              Times ={this.state.Times}
              enableTomato={this.state.enableTomato}
            />
          </Route>
          <Route path="/settings">
            <Settings
              restrictMode={this.state.restrictMode}
              updateRestricMode={this.updateRestricMode}
              enableTomato={this.state.enableTomato}
              updateEnableTomato={this.updateEnableTomato}
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