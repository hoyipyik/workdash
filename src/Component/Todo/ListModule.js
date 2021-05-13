import React, { Component } from 'react';
import { Checkbox } from '@material-ui/core';
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
            index:-1,
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
    }
    //lifecycle函数 对data进行更新， 同时如果有数据变动， 将数据传回到上一层中
    componentDidUpdate(prevProps, prevState){
        if(prevProps.todoData!==this.props.todoData){
            this.setState({
                data: this.props.todoData,
            })
        }
        if(prevState.data!==this.state.data){
            this.props.updateItemStatus(this.state.data);
        }
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

    render() {
        const data = this.props.todoData;
        //对data数组进行了map遍历
        const rows = data.map((row, index)=>{
            return(
                //使用了key来重用列表
                <tr key={index}>
                    <div onClick={()=>this.sendIndex(index)}>
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
            <table>
                <tbody>{rows}</tbody>
            </table>
            </div>
        )
        
    }
}

export default ListModule;