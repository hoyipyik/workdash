import React, { Component } from 'react';
import { Switch , Route} from 'react-router-dom';
import Todo from "./Component/Todo/Todo";
import Board from "./Component/Boards/Board";
import Settings from "./Component/Settings";
import Clock from "./Component/Clock/Clock";
import Navibar from "./Component/Navibar";
import About from "./Component/About"

//程序的main组件， 用作路由的设定和全局设定变量的储存

class App extends Component {
//构造函数
  constructor(props) {
    super(props);
    //声明App的state
    this.state={
      Times:0,   // 番茄钟记时次数的变量存储
      //下面分别是四个设定参数
      restrictMode:false,
      enableTomato:true,
      inlineTomato:true,
      encourageMode:true,
      enableOrder:true,
    }
  }
//lifecycle函数 从localStorage读取先前存储的设定参数
  componentDidMount(){
    const documentEnableTomato = JSON.parse(localStorage.getItem("enableTomato"));
    const documentRestrictMode = JSON.parse(localStorage.getItem("restrictMode"));
    const documentInlineTomato = JSON.parse(localStorage.getItem("inlineTomato"));
    const documentEncourageMode = JSON.parse(localStorage.getItem("encourageMode"));
    
    // 空值判断和对设定参数进行赋值
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
//lifecycle函数 state中的数据出现变化之后，向localStorage对应的document赋值，相当于本地的储存环节
//这里对应的也是四个设定参数的本地储存 
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
//番茄钟次数的赋值函数， 用于子模块调用
  updateTomatoTimes = (item)=>{
    this.setState({
      Times:item,
    })
  }


  //下面的四个函数分别对四个设定参数进行了回传的赋值，用于子模块调用

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

  updateEnableOrder = item=>{
    this.setState({
      enableOrder:item
    })
  }
//render函数， 进行显示， 此处主要是react-route-dom的路由的设定和参数的传递
  render() {
    return (
      <div className="container">
        {/* 顶部导航栏 */}
        <Navibar/>  
        <Switch>
        {/* 路由的设定和向子component的props传递参数 */}
          <Route path="/workdash" target="_blank" rel="noopener noreferrer">
            <Todo
              Times ={this.state.Times}
              updateTomatoTimes={this.updateTomatoTimes}
              restrictMode={this.state.restrictMode}
              enableTomato={this.state.enableTomato}
              inlineTomato={this.state.inlineTomato}
              encourageMode={this.state.encourageMode}
              enableOrder={this.state.enableOrder}
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
              enableOrder={this.state.enableOrder}
              updateEnableOrder={this.updateEnableOrder}
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
//导出App
export default App;