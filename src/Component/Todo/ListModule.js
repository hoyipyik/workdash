/*代办todo列表的显示模块 
 *实现任务的勾选， 点击后和EditModule联动在edit中进一步编辑功能
 *提供排序功能 已完成项目隐藏功能
 * 
 * 贺烨毅 2019210737
 */

import React, { Component } from 'react';
import { Checkbox ,Switch} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';

//用函数模式定义了encouragemode下的勾选颜色为绿色的checkbox的样式
const EncourageCheckbox = withStyles({
    root: {
    //   color: green[400],
      '&$checked': {
        color: green[300],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

//todo.js的第二部分的左边的任务展示区域的component

class ListModule extends Component {
    //state的声明
    constructor(props){
        super(props);
        this.state={
            data:this.props.todoData,
            disableHideDone: false,
            index:-1,
            hideDone: this.props.hideDone,
            orderByName: this.props.orderByName,
            orderByProperty: this.props.orderByProperty,
        }
    }
//checkbox的样式颜色的设定
    checkboxTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[300],
            },
          secondary: {
            main: blue[700],
          },
          default:{
            main: green[300],
          }
        },
      });
      //lifecycle函数 对index进行了数据初始化
    componentDidMount(){
        this.setState({
            index:this.props.index,
        })
        const data = this.state.data;
        let disableHideDone = data.every(item=>item.checked===true);
        this.setState({
            disableHideDone: disableHideDone,
        })
    }
    //lifecycle函数 对data进行更新， 同时如果有数据变动， 将数据传回到上一层中
    componentDidUpdate(prevProps, prevState){
        if(prevProps.todoData!==this.props.todoData){
            this.setState({
                data: this.props.todoData,
            })
            this.props.updateHideDone(false);
            this.props.updateOrderByName(false);
            this.props.updateOrderByProperty(false);
            this.setState({
                hideDone: false,
                orderByName: false,
                orderByProperty: false,
            })
            
        }
        if(prevState.data!==this.state.data){
            const data = this.state.data;
            let disableHideDone = data.every(item=>item.checked===true);
            this.setState({
                disableHideDone: disableHideDone,
            })
        }
        if(prevProps.hideDone!==this.props.hideDone){
            this.setState({
                hideDone: this.props.hideDone,
            })
        }
        if(prevProps.orderByProperty!==this.props.orderByProperty){
            this.setState({
                orderByProperty: this.props.orderByProperty,
            })
        }
        if(prevProps.orderByName!==this.props.orderByName){
            this.setState({
                orderByName: this.props.orderByName,
            })
        }
        //排序功能和已完成项目隐藏功能的触发
        /*
        整个功能的思路： 、
        按照优先级， 按照名称排序，已经隐藏已经完成项目三个开关和功能是独立叠加的
        三个功能在本质上只是显示的不同， 并不改变上层模块中的总todoData的数据，也不需要进行新的数据的回传
        所以只需要写出三个功能，有条件地叠加即可。
        但是如果关闭一些功能，需要对state的todo进行重新赋值
        对state的数据的刷新，需要使用lifecycle函数的prevState和当前state进行对比，
        检测之前为开启，现在是关闭的状态
        */ 
       //检测按钮的状态发生了改变
        if(prevState.hideDone!==this.state.hideDone ||
            prevState.orderByName!==this.state.orderByName ||
            prevState.orderByProperty!==this.state.orderByProperty)
        {
            //保存修改之前的todo数据
            let data = [...this.state.data];
            const fullData = [...this.props.todoData];
            console.log("switch update")
            //如果按钮从开启变为了关闭
            if((prevState.hideDone===true&&this.state.hideDone===false)||
                (prevState.orderByName===true&&this.state.orderByName===false)||
                (prevState.orderByProperty===true&&this.state.orderByProperty===false)){
                    console.log("Emmmm, Don't be sad, I am working")
                    this.setState({
                        // data: fullData,
                        joker:fullData,//此变量用于debug
                    })
                    data = fullData;  //对data重新赋为值
                }
            //按照名称排序的模块
            if(this.props.orderByName){
                let title = data.map(item => item.title);
                title = title.sort();
                let newData = [];
                const prevData = [...data];
                //使用遍历的for循环实现换序
                console.log(title,"Array XD");
                for (let i=0;  i < title.length;i++){
                    console.log("I am sure I am looping")
                    for(let j=0; j< prevData.length; j++){
                        console.log(prevData[j],"hey")
                        if(prevData[j].title==title[i]){
                            newData[i] = prevData[j];
                        }
                    }
                }
                data = [...newData];
                console.log(newData,"New data")
            }
            //按照优先级来进行排序，进行筛选，然后重新组合数组
            if(this.props.orderByProperty){
                const dataPropoty = data.filter(item => (item.propoty===true && item.checked===false))
                const dataCommon = data.filter(item =>(item.propoty===false && item.checked===false))
                const dataDonePropoty = data.filter(item => (item.checked===true&&item.propoty===true))
                const dataDoneCommon = data.filter(item => (item.checked===true&&item.propoty===false))
                data = [...dataPropoty, ...dataCommon, ...dataDonePropoty, ...dataDoneCommon];
            }

            if(this.props.hideDone){
                data = data.filter(item =>item.checked ===false)
            }

            this.setState({
                data: data,
            })
        }
        // if(prevState.data!==this.state.data){
        //     this.props.updateItemStatus(this.state.data);
        // }
        if(prevState.index!==this.state.index){
            this.props.updateIndexStatus(this.state.index)
        }
    }
    // 勾选取消勾选的反馈函数
    handleCheckboxChange = (index) => {
        let data = [...this.state.data];
        data[index].checked = !data[index].checked;
        this.setState({ 
            data: data,
        })
      }
      //序号传递函数 点击条目之后传递对应的序号， 传给上一层， todo将会把它传给edit来显示对应条目的详细内容
    sendIndex = (index) =>{
        this.setState({
            index: index,
        })
    }
    //开关的触发函数
    hideDoneMethod = () =>{
        let hideDone = this.props.hideDone;
        hideDone = !hideDone;
        this.props.updateHideDone(hideDone);
    }

    orderByNameMethod = ()=>{
        let orderByName = this.props.orderByName;
        orderByName = !orderByName;
        this.props.updateOrderByName(orderByName);
    }

    orderByPropertyMethod = ()=>{
        let orderByProperty = this.props.orderByProperty;
        orderByProperty = !orderByProperty;
        this.props.updateOrderByProperty(orderByProperty);
    }

    render() {
        const data = this.state.data;
        let disableHideDone = this.state.disableHideDone;
        //对data数组进行了map遍历
        const rows = data.map((row, index)=>{
            return(
                //使用了key来重用列表
                <tr key={index}>
                    <div onClick={()=>this.sendIndex(row.id)}>
                    <ThemeProvider theme={this.checkboxTheme}>
                    {(row.encourage&&this.props.encourageMode)?
                        <EncourageCheckbox 
                            checked={row.checked}
                            color={row.propoty?"secondary":"primary"}
                            onClick={()=>this.handleCheckboxChange(index)} 
                            />
                        :<Checkbox 
                            checked={row.checked}
                            color={row.propoty?"secondary":"primary"}
                            onClick={()=>this.handleCheckboxChange(index)} 
                            />
                    }
                        </ThemeProvider>
                        <span
                            //重要的任务文字粗体显示 已经完成则是勾划掉的字体
                            style={{ textDecoration: row.checked ? "line-through" : null,
                            marginLeft:16, fontWeight: row.propoty ? "bold" : null,
                                }}
                        >
                               {row.title}
                        </span>
                        <span>
                        </span>
                    </div>
                </tr>
            )
        })
        return(
            <div className="container">
            <h3>List </h3>
            <table>
            {rows.length===0?<tbody style={{fontWeight:"bold"}}>. . . . .  .</tbody>:
                <tbody>{rows}</tbody>}
            </table>
            {this.props.enableOrder &&<div>
            <h4>Order Type</h4>
                <label>Hide Done</label>
                <ThemeProvider >
                    <Switch
                        disabled={disableHideDone}
                        // disabled={true}
                        checked={this.props.hideDone}
                        name="hideDone"
                        id="hideDone"
                        color="secondary"
                        onChange={this.hideDoneMethod}
                        />
                    </ThemeProvider>
                <label>Order By Name</label>
                <ThemeProvider >
                    <Switch
                        checked={this.props.orderByName}
                        name="orderByName"
                        id="orderByName"
                        color="primary"
                        onChange={this.orderByNameMethod}
                        />
                    </ThemeProvider>
                <label>Order By Property</label>
                <ThemeProvider >
                    <Switch
                        checked={this.props.orderByProperty}
                        name="orderByProperty"
                        id="orderByProperty"
                        color="primary"
                        onChange={this.orderByPropertyMethod}
                        />
                    </ThemeProvider>
                </div>}
            </div>
        )
        
    }
}

export default ListModule;