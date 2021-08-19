/**
 * 进行任务的添加， todo部分的第一个模块
 * @component
 * @author 贺烨毅 2019210737
 * 
 */
import React, { PureComponent } from 'react';

/**
 * todo部分的任务添加的component. 
 * 
 * 进行任务的添加， todo部分的第一个模块
 * @author 贺烨毅 2019210737
 */ 

class AddModule extends PureComponent {
    /**
     * constructor function of class
     * @param  {object} props the props of this component
     */
    constructor(props){
        super(props);
        /**
         * State of component
         */
        this.state={
            title:"",
        }
    }
    
    /**
     * 提交之后的赋值函数
     * @function addButtonHandler
     * @memberof AddModule
     */
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
    /**
     * 输入函数 根据对输入事件进行了解构 name对应的是属性中的name value是输入数值
     * @function changeHandler
     * @memberof AddModule 
     */
    changeHandler =(event)=>{
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
        
    }
    /**
     * render
     * 
     */
    render() {
        // const data = [...this.state.todoData];
        return (
            <form>
                <label htmlFor="title">
                    <h2>What's Your Plan Today</h2>
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