import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import Todo from "./Component/Todo/Todo";
import Board from "./Component/Boards/Board";
import About from "./Component/About";
import Clock from "./Component/Clock/Clock";
import Navibar from "./Component/Navibar";

class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      Times:0,
    }
  }

  updateTomatoTimes = (item)=>{
    this.setState({
      Times:item,
    })
  }
  render() {
    return (
      <div className="container">
        <Navibar/>
        <Switch>
          <Route exact path="/" target="_blank" rel="noopener noreferrer">
            <Todo
              updateTomatoTimes={this.updateTomatoTimes}
            />
          </Route>
          <Route path="/board">
            <Board/>
          </Route>
          <Route path="/clock" target="_blank" rel="noopener noreferrer">
            <Clock
              Times ={this.state.Times}
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