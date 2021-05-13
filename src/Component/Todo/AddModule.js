import React, { Component } from 'react';

//todo部分的任务添加的component

class AddModule extends Component {
    //声明state
    constructor(props){
        super(props);
        this.state={
            title:"",
        }
    }
    //提交之后的赋值函数
    addButtonHandler=()=>{
        const {title} = this.state;
        if(title!=='')
        //在上一级中添加， 将新的task增加到todo.js的state的todoData数组中
        this.props.updateAddItem(title);
        //清除本state的title的内容， 清空输入框的内容
        this.setState({
            title:"",
        })
    }
    // 输入函数 根据对输入事件进行了解构 name对应的是属性中的name value是输入数值
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
                // input组件
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