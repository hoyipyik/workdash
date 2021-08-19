/**
 *todo功能的顶部组件， 作为了AddModule， ListModule, EditModule, InlinTomato的容器
 *存放todoData数组， 顶层函数和一些临时的参数 
 * 
 * @author 贺烨毅 2019210737
 */
import React, { PureComponent } from 'react';
import CountDown from '../Clock/CountDown';
import InlineTomato from "./InlineTomato";
import AddModule from "./AddModule";
import EditBoard from './EditBoard';
import ListModule from "./ListModule";

import axios from 'axios';
/**
 * Todo component
 * 
 * todo功能的顶部组件， 作为了AddModule， ListModule, EditModule, InlinTomato的容器
 * 存放todoData数组， 顶层函数和一些临时的参数 
 * @author 贺烨毅 2019210737
 */
class Todo extends PureComponent {
    //初始化state 同时接收App.js传来的设定参数
    /**
     * constructor of component
     * @param  {object} props
     */
    constructor(props){
        super(props);
        /**
         * State of component
         */
        this.state={
            index: 0,
            Times:0,
            inlineTag:false,
            hideDone: false,
            orderByName: false,
            orderByProperty: false,
            enableTomato:this.props.enableTomato,
            inlineTomato:this.props.inlineTomato,
            todoData:[]
        }
    }

/**
 * 
 * lifecycle函数 从localStorage读取todo数据的document                       
 * 
 */
componentDidMount(){
    const onlineMode = this.props.onlineMode
    console.log(onlineMode, "#$%^&*((^%$#$%^&*(*&^#$%^&**&^%$")
    if(onlineMode){
        console.log("Mount")
        axios.get("https://chatapp-hyy-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json")
            .then(responce=>{
                const rawData = Object.values(responce.data)
                const data = rawData[rawData.length-1]
                console.log("[Todo.js]: GET" ,data)
                if(data[0].title==="DEMO"){
                    this.setState({
                        todoData: []
                    })
                }else
                this.setState({
                    todoData: [...data]
                })
            })
            .catch(error=>{
                console.log(error)
            })
    }else{
        const documentData = JSON.parse(localStorage.getItem("todo"))
    if (documentData !== null){
      this.setState({
        todoData:documentData,
      })
    }else{
        //如果不存在数据，加载设定好的demo
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
                body:"We BUPTers can carve a chip by hand",
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
                propoty:true,
                encourage:true,
            }
        ]
      })
    }
    }
    
    }

    
    /**
     * 如果state的todoData的内容变化， 同步更新localStorage中储存的值
     * @param  {object} prevState fromer state of component
     */
    componentDidUpdate(prevProps,prevState){
        if(prevState.todoData!==this.state.todoData){
            const onlineMode = this.props.onlineMode
            console.log(onlineMode)
            if(onlineMode){
                let data = this.state.todoData
                console.log("Debug whiteSpace", this.state.todoData)
                if(data.length === 0){
                    data = [{
                        id:null,
                        checked:false,
                        title:"DEMO",
                        tomatoNumber:null,
                        body:"",
                        propoty:null,
                        encourage:null,
                    }]
                    console.log("DEMO changed", data)
                }
                axios.post("https://chatapp-hyy-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json", data)
                    .then(responce=>{
                        console.log("[Todo.js]: Post", responce)
                    })
                    .catch(error=>{
                        console.log(error)
                    })
            }else localStorage.setItem("todo",JSON.stringify( this.state.todoData));
        }
    }

    //任务增加函数 
    /**
     * 接受第一部分 addmodule中输入的内容， 将新的内容增加到todoData的数组中
     * @function updateAddItem
     * @param {String} item new title of todo item
     * @memberof Todo
     */
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
    /**
     * 更新todoData 函数
     * 
     * 从editboard中接收修改后的新的todoData进行更新 向上参数传递函数
     * @function updateItemStatus
     * @param {Array} item new todoData list
     * @memberof Todo
     */
    updateItemStatus = item => {
        this.setState({
            todoData:item,
        })
    }
    /**
     * index更新函数
     * 
     * 接收listmodule中点击的条目对应的id，更新state中的index方便传递到editmodule中 向上参数传递函数
     * @function updateIndexStatus
     * @param {number} index index of selected item
     * @memberof Todo
     */
    updateIndexStatus = index =>{
        this.setState({
            index: index,
        })
    }
    /**
     * 删除完成项目函数
     * @function deleteDoneItem
     * @memberof Todo
     */
    deleteDoneItem = () =>{
        const data = this.state.todoData;
        let newData  = [];
        let Data = [];
        //使用data数组的filter函数， 保留未完成的条目
        newData = data.filter(item=>item.checked === false)
        //重新进行id的分配，消除删除造成的id和index的不一致问题
        Data = newData.map((item,index)=>{
            item.id = index;
            return item;
        })
        //删除的警告确认
        if(window.confirm("Sure to Change?"))
        //对最高级state的数据todoData进行了更新
        this.setState({
            todoData: Data,

        })
    }

    
    // 在editmodule中使用
    /**
     * 删除单个条目函数
     * @function deleteItem
     * @memberof Todo
     */
    deleteItem = () =>{
        const data = this.state.todoData;
        const index = this.state.index;
        let newData  = [];
        let Data = [];
        newData  = data.filter(item=>item.id!==index)
        // 重新给id
        Data = newData.map((item,index)=>{
            item.id = index;
            return item;
        })
        if(window.confirm("Sure to Change?"))
        this.setState({
            todoData: Data,
        })
    }
    /**
     * 全部删除函数
     * @function clearAll
     * @memberof Todo
     */
    clearAll = ()=>{
        const newData = [];
        if(window.confirm("Sure to Change?"))
        this.setState({
            todoData: newData,
        })
    }
    
    /**
     * inlinetomato开始工作函数
     * @function inlineTomatoButton
     * @memberof Todo
     */
    inlineTomatoButton = ()=>{
        const index = this.state.index;
        let tomatoTimes =0;
        if (this.state.todoData[index]!==undefined)
            tomatoTimes = this.state.todoData[index].tomatoNumber;
            //更新tomatoclock的工作周期
        this.props.updateTomatoTimes(tomatoTimes);
        this.setState({
            Times:tomatoTimes,
            // 给inlineTag赋值，触发显示
            inlineTag:true,
        })
    }

    /**
     * 隐藏已经完成的部分 向上参数传递函数
     * @function updateHideDone
     * @param {boolean} event factor of settings
     * @memberof Todo
     */
    updateHideDone = (event) =>{
        this.setState({
            hideDone: event,
        }) 
    }
    /**
     * 按照名称进行排序 向上参数传递函数
     * @function updateOrderByName
     * @param {boolean} event factor of settings
     * @memberof Todo
     */
    updateOrderByName =(event) =>{
        this.setState({
            orderByName: event,
        })
    }
   /**
    * 按照优先级排序 向上参数传递函数
    * @function updateOrderByProperty
    * @param {boolean} event factor of settings
    * @memberof Todo
    */
    updateOrderByProperty = (event)=>{
        this.setState({
            orderByProperty:event,
        })
    }
    /**
     *  页面显示
     */
    render() {
        return (
            <div className="container">
                <div>
                    <h1>To do</h1>
                    {/* 增添部分 */}
                    <AddModule 
                        todoData={this.state.todoData}
                        updateAddItem={this.updateAddItem}
                    />
                </div>
                <br/>
                {/* 如果列表中没有数据，后面的模块不显示 */}
                {this.state.todoData.length!==0 &&
                <div >
                <div className="flex-row">
                {/* 第二部分 左边是列表 右边是编辑 */}
                    <div className="flex-large">
                        {/* <h3>List </h3> */}
                            <ListModule 
                                todoData ={this.state.todoData}
                                updateItemStatus = {this.updateItemStatus}
                                index={this.state.index}
                                updateIndexStatus={this.updateIndexStatus}
                                encourageMode={this.props.encourageMode}
                                hideDone={this.state.hideDone}
                                orderByName={this.state.orderByName}
                                orderByProperty={this.state.orderByProperty}
                                updateOrderByName={this.updateOrderByName}
                                updateOrderByProperty={this.updateOrderByProperty}
                                updateHideDone = {this.updateHideDone}
                                enableOrder={this.props.enableOrder}
                            />
                        <span>
                        <br/>
                        {/* 为了符合react的刷新机制，实现页面的局部刷新 将删除按钮分出 */}
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
                                deleteItem={this.deleteItem}
                                enableTomato={this.props.enableTomato}
                                encourageMode={this.props.encourageMode}
                            />
                            {/* restricmode下不使用单个项目的删除 */}
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
                            {/* inlinemode的番茄工作模式触发 */}
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
                   {/* inlinetomato的显示条件 */}
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