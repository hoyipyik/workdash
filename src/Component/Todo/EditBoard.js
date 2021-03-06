/**
 * EditBoard的界面
 * listModule的点击项目触发后，在editboard中显示对应的条目的详细信息
 * 可以对标题，描述， 重要性进行修改，可以对单个项目进行删除的操作
 * 设定中， 相应的功能开启的时候
 * 可以标记提前完成
 * 设定番茄工作周期， 直接进行番茄钟的联动触发。
 * @component
 * 
 */
import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom';
import {Switch, Slider} from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, green} from '@material-ui/core/colors';
/**
 * EditBoard的界面
 * 
 * listModule的点击项目触发后，在editboard中显示对应的条目的详细信息
 * 可以对标题，描述， 重要性进行修改，可以对单个项目进行删除的操作
 * 设定中， 相应的功能开启的时候
 * 可以标记提前完成
 * 设定番茄工作周期， 直接进行番茄钟的联动触发。
 * @author 贺烨毅 2019210737
 */
class EditBoard extends PureComponent {
//state初始化 设定参数的接收
    /**
     * constructor function of the component
     * @param  {object} props
     */
    constructor(props){
        super(props);
        /**
         * State of component
         */
        this.state={
            data:this.props.data,
            enableTomato:this.props.enableTomato,
            encourageMode:this.props.encourageMode,
        }

    }
/**
 * checkbox颜色样式设定
 */
    checkboxTheme = createMuiTheme({
        palette: {
          primary:{
            main: blue[700],
            },
          secondary: {
            main: green[300],
          },
        },
      });
      /**
       * slider组件的标尺设定
       */
      marks = [
        {
            value:0,
            label:0,
        },
        {
            value:5,
            label:5,
        }
    ]
/**
 * lifecycle函数 
 */
    componentDidMount(){
        this.setState({
            data:this.props.data,
    
        })
    }
    /**
     * lifecycle函数 更新数据
     * @param  {object} prevProps former props of component
     * @param  {object} prevState former state of component
     */
    componentDidUpdate(prevProps,prevState){
        if(prevProps.data !== this.props.data){
            this.setState({
                data:this.props.data,
            })
        }
        
    }
    /**
     * 输入框更新函数
     * @param  {object} event
     * @function
     * @memberof EditBoard
     */
    editChange=(event)=>{
        const {name,value} = event.target;
        let {data} = this.state;
        data[this.props.index][name] = value;
        this.setState({
            data: data,
        })
    }
    /**switch改变函数
     * @function switchPropotyChange
     * @memberof EditBoard
     */
    switchPropotyChange = ()=>{
        let {data} = this.state;
        const index = this.props.index;
        data[index].propoty = !data[index].propoty
        this.setState({
            data: data,
        })
    }
    /**
     * switch method
     * @function switchEncourageChange
     * @memberof EditBoard
     */
    switchEncourageChange = ()=>{
        let {data} = this.state;
        const index = this.props.index;
        data[index].encourage = !data[index].encourage
        this.setState({
            data: data,
        })
    }
    /**
     * 内容提交函数   直接更新上层todoData的内容
     * @function editSubmit
     * @memberof EditBoard 
     */
    editSubmit=()=>{
            this.props.updateItemStatus(this.state.data);
    }
    /**
     * 触发番茄模式函数
     * @function tomatoButton
     * @memberof EditBoard
     */
    tomatoButton = ()=>{
        const index = this.props.index;
        let tomatoTimes =0;
        if (this.props.data[index]!==undefined)
            tomatoTimes = this.props.data[index].tomatoNumber;
        // 向上提交周期Times更新
            this.props.updateTomatoTimes(tomatoTimes);
    }
    /**
     * slider选数函数
     * @function sliderChanged
     * @memberof EditBoard
     */
    sliderChanged =(event,value)=>{
        let {data} = this.state;
        const index = this.props.index;
        data[index].tomatoNumber = value;
        this.setState({
            data: data,
        })
    }
    /**
     * slider悬浮显示函数
     * @function valuetext
     * @memberof EditBoard
     */
    valuetext = (value)=> {
        return `${value} Tomatos`;
      }
    /**
     * render()
     */
    render() {
        const index = this.props.index;
        let data = {};
        if (this.props.data[index]!==undefined)
             data = this.props.data[index];
            //  空值的特殊处理
        else data = {
                id:0,
                checked:false,
                title:'',
                tomatoNumber:0,
                body:"",
                propoty:false,
                encourage:false,
        }
        
        return (
            
            <div className="container">
                <h3>Edit</h3>
                <form>
                    <label>Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={this.editChange}
                    /> 
                    {this.props.encourageMode &&
                    <div>
                    <label>Done Advance</label>
                    <ThemeProvider theme={this.checkboxTheme}>
                    <Switch
                        disabled={!data.checked}
                        checked={data.checked?data.encourage:false}
                        name="encourage"
                        id="encourage"
                        color="secondary"
                        onChange={this.switchEncourageChange}
                        />
                    </ThemeProvider>
                    </div>}
                    {this.props.enableTomato &&
                    <div>
                    <label>Tomato Time {data.tomatoNumber!==0?data.tomatoNumber:null}</label>
                    <span>
                    <ThemeProvider theme={this.checkboxTheme}>
                    <Slider 
                        // slider的数值
                        value={data.tomatoNumber}
                        //悬浮显示内容
                        getAriaValueText={this.valuetext}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        //步长设定
                        step={1}
                        marks={this.marks}
                        //数字的范围
                        min={0}
                        max={5}
                        name="tomatoNumber"
                        id='tomatoNumber'
                        onChange={this.sliderChanged}
                    />
                    </ThemeProvider>
                    {/* inlinetomato模式使用todo.js的timing button禁用此处的 */}
                    {!this.props.inlineTomato &&
                    <Link to="/clock">
                    <button onClick={this.tomatoButton}>
                        Start Timing
                    </button>   
                    </Link>
                    }
                    </span>
                    </div>}
                    {/* 重要程度设定 */}
                    <label>Important</label>
                    <ThemeProvider theme={this.checkboxTheme}>
                    <Switch
                        checked={data.propoty}
                        name="propoty"
                        id="propoty"
                        color="primary"
                        onChange={this.switchPropotyChange}
                        />
                    </ThemeProvider>
                    <label>Description</label>
                    {/* 文字框属性 */}
                    <textarea
                        type="text"
                        id="description"
                        name="body"
                        value={data.body}
                        onChange={this.editChange}
                    />   
                    <span>
                        {/* 表单提交按钮 */}
                        <input
                            type="button"
                            value="Save"
                            onClick={this.editSubmit}
                        />
                        
                    </span>
        
                </form>
            </div>     
        );
    
    }
}

export default EditBoard;