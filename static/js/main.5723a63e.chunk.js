(this.webpackJsonpworkdash=this.webpackJsonpworkdash||[]).push([[0],{51:function(t,e,a){},63:function(t,e,a){},70:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(26),c=a.n(n),i=(a(63),a(7)),r=a(8),s=a(10),d=a(9),l=a(5),h=a(38),b=a(52),j=a(1),u=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(i.a)(this,a),(o=e.call(this,t)).addButtonHandler=function(){var t=o.state.title;""!==t&&o.props.updateAddItem(t),o.setState({title:""})},o.changeHandler=function(t){var e=t.target,a=e.name,n=e.value;o.setState(Object(b.a)({},a,n))},o.state={title:""},o}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"title",children:Object(j.jsx)("h5",{children:"What's Your Plan Today"})}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",onChange:this.changeHandler,value:this.state.title}),Object(j.jsx)("input",{type:"button",value:"Add",onClick:this.addButtonHandler})]})}}]),a}(o.Component),m=a(21),p=a(88),O=a(86),x=a(56),v=a(85),f=a(41),y=a(42),k=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(i.a)(this,a),(o=e.call(this,t)).checkboxTheme=Object(x.a)({palette:{primary:{main:f.a[700]},secondary:{main:y.a[300]}}}),o.marks=[{value:0,label:0},{value:5,label:5}],o.editChange=function(t){var e=t.target,a=e.name,n=e.value,c=o.state.data;c[o.props.index][a]=n,o.setState({data:c})},o.switchChange=function(){var t=o.state.data,e=o.props.index;t[e].propoty=!t[e].propoty,o.setState({data:t})},o.editSubmit=function(){o.props.updateItemStatus(o.state.data)},o.tomatoButton=function(){var t=o.props.index,e=0;void 0!==o.props.data[t]&&(e=o.props.data[t].tomatoNumber),o.props.updateTomatoTimes(e)},o.sliderChanged=function(t,e){var a=o.state.data;a[o.props.index].tomatoNumber=e,o.setState({data:a})},o.valuetext=function(t){return"".concat(t," Tomatos")},o.state={data:o.props.data,enableTomato:o.props.enableTomato},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data})}},{key:"componentDidUpdate",value:function(t,e){t.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var t=this.props.index,e={};return e=void 0!==this.props.data[t]?this.props.data[t]:{id:0,checked:!1,title:"",tomatoNumber:0,body:"",propoty:!1},Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:"Edit"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",value:e.title,onChange:this.editChange}),this.props.enableTomato&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["Tomato Time ",0!==e.tomatoNumber?e.tomatoNumber:null]}),Object(j.jsxs)("span",{children:[Object(j.jsx)(v.a,{theme:this.checkboxTheme,children:Object(j.jsx)(p.a,{value:e.tomatoNumber,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:this.marks,min:0,max:5,name:"tomatoNumber",id:"tomatoNumber",onChange:this.sliderChanged})}),Object(j.jsx)(m.b,{to:"/clock",children:Object(j.jsx)("button",{onClick:this.tomatoButton,children:"Start Timing"})})]})]}),Object(j.jsx)("label",{children:"Important"}),Object(j.jsx)(v.a,{theme:this.checkboxTheme,children:Object(j.jsx)(O.a,{checked:e.propoty,name:"propoty",id:"propoty",color:"primary",onChange:this.switchChange})}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{type:"text",id:"description",name:"body",value:e.body,onChange:this.editChange}),Object(j.jsx)("span",{children:Object(j.jsx)("input",{type:"button",value:"Save",onClick:this.editSubmit})})]})]})}}]),a}(o.Component),T=a(87),g=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(i.a)(this,a),(o=e.call(this,t)).checkboxTheme=Object(x.a)({palette:{primary:{main:f.a[300]},secondary:{main:f.a[700]}}}),o.handleCheckboxChange=function(t){var e=Object(h.a)(o.state.data);e[t].checked=!e[t].checked,o.setState({data:e})},o.sendIndex=function(t){o.setState({index:t})},o.state={data:o.props.todoData,index:-1},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.setState({index:this.props.index})}},{key:"componentDidUpdate",value:function(t,e){t.todoData!==this.props.todoData&&this.setState({data:this.props.todoData}),e.data!==this.state.data&&this.props.updateItemStatus(this.state.data),e.index!==this.state.index&&this.props.updateIndexStatus(this.state.index)}},{key:"render",value:function(){var t=this,e=this.props.todoData.map((function(e,a){return Object(j.jsx)("tr",{children:Object(j.jsxs)("div",{children:[Object(j.jsx)(v.a,{theme:t.checkboxTheme,children:Object(j.jsx)(T.a,{checked:e.checked,color:e.propoty?"secondary":"primary",onClick:function(){return t.handleCheckboxChange(a)}})}),Object(j.jsx)("span",{onClick:function(){return t.sendIndex(a)},style:{textDecoration:e.checked?"line-through":null,marginLeft:16,fontWeight:e.propoty?"bold":null},children:e.title}),Object(j.jsx)("span",{})]})},a)}));return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:e})})})}}]),a}(o.Component),S=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(i.a)(this,a),(o=e.call(this,t)).updateAddItem=function(t){var e=o.state.todoData,a={id:e.length,checked:!1,title:t,tomatoNumber:0,body:"",propoty:!1};console.log(a);var n=[].concat(Object(h.a)(e),[a]);o.setState({todoData:n})},o.updateItemStatus=function(t){o.setState({todoData:t})},o.updateIndexStatus=function(t){o.setState({index:t})},o.deleteDoneItem=function(){var t;t=o.state.todoData.filter((function(t){return!1===t.checked})).map((function(t,e){return t.id=e,t})),window.confirm("Sure to Change?")&&o.setState({todoData:t})},o.deleteItem=function(){var t,e=o.state.todoData,a=o.state.index;t=e.filter((function(t){return t.id!==a})).map((function(t,e){return t.id=e,t})),window.confirm("Sure to Change?")&&o.setState({todoData:t})},o.clearAll=function(){window.confirm("Sure to Change?")&&o.setState({todoData:[]})},o.state={index:0,enableTomato:o.props.enableTomato,todoData:[{id:0,checked:!0,title:"Try to work 25h a day",tomatoNumber:0,body:"",propoty:!1},{id:1,checked:!1,title:"Homework",tomatoNumber:3,body:"I have to work",propoty:!0},{id:2,checked:!0,title:"Design a chip",tomatoNumber:3,body:"I have to work",propoty:!0},{id:3,checked:!1,title:"Sleep",tomatoNumber:0,body:"",propoty:!1},{id:4,checked:!1,title:"Eat",tomatoNumber:10,body:"",propoty:!1}]},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("todo"));null!==t?this.setState({todoData:t}):this.setState({index:0,todoData:[{id:0,checked:!0,title:"Try to work 25h a day",tomatoNumber:0,body:"You know Professor Sun will love it",propoty:!1},{id:1,checked:!0,title:"Homework",tomatoNumber:5,body:"DDL is coming XD",propoty:!0},{id:2,checked:!1,title:"Design a chip",tomatoNumber:3,body:"We Chinese can carve a chip by hand, Cry Dutchess :<",propoty:!0},{id:3,checked:!1,title:"Sleep",tomatoNumber:0,body:"",propoty:!1},{id:4,checked:!1,title:"Eat",tomatoNumber:0,body:"",propoty:!1}]})}},{key:"componentDidUpdate",value:function(t){t.todoData!==this.state.todoData&&localStorage.setItem("todo",JSON.stringify(this.state.todoData))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"To do"}),Object(j.jsx)(u,{todoData:this.state.todoData,updateAddItem:this.updateAddItem})]}),Object(j.jsx)("br",{}),0!==this.state.todoData.length&&Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"List "}),Object(j.jsx)(g,{todoData:this.state.todoData,updateItemStatus:this.updateItemStatus,index:this.state.index,updateIndexStatus:this.updateIndexStatus}),Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.deleteDoneItem,children:"Clean Done"}),Object(j.jsx)("button",{style:{marginLeft:"1rem"},onClick:this.clearAll,children:"Clear All"})]})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)(k,{data:this.state.todoData,index:this.state.index,updateItemStatus:this.updateItemStatus,updateTomatoTimes:this.props.updateTomatoTimes,deleteItem:this.deleteItem,enableTomato:this.props.enableTomato}),!this.props.restrictMode&&Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{style:{marginLeft:"1rem"},children:"Item Delete"}),Object(j.jsx)("button",{onClick:this.deleteItem,style:{marginLeft:"1rem"},children:"Delete"})]})]})]}),Object(j.jsx)("br",{})]})}}]),a}(o.Component),C=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{children:"Board"})})}}]),a}(o.Component),N=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).switchTheme=Object(x.a)({palette:{primary:{main:f.a[700]},secondary:{main:y.a[300]}}}),t.restrictModeMethod=function(){var e=t.props.restrictMode;e=!e,t.props.updateRestricMode(e)},t.enableTomatoMethod=function(){var e=t.props.enableTomato;e=!e,t.props.updateEnableTomato(e)},t}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Setting"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Restrict Mode"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(O.a,{checked:this.props.restrictMode,name:"restrictMode",id:"restrictMode",color:"secondary",onChange:this.restrictModeMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Enable Tomato Clock"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(O.a,{checked:this.props.enableTomato,name:"enableTomato",id:"enableTomato",color:"primary",onChange:this.enableTomatoMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Encourage Mode"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(O.a,{checked:this.props.enableTomato,name:"encourageMode",id:"encourageMode",color:"primary",onChange:this.enableTomatoMethod})})]})]})}}]),a}(o.Component),D=a(23),M=(a(51),function(){var t=Object(o.useState)(0),e=Object(D.a)(t,2),a=e[0],n=e[1],c=Object(o.useState)(!1),i=Object(D.a)(c,2),r=i[0],s=i[1];return Object(o.useEffect)((function(){var t=null;return r?t=setInterval((function(){n((function(t){return t+1}))}),1e3):r||0===a||clearInterval(t),function(){return clearInterval(t)}}),[r,a]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[a,"s"]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(r?"active":"inactive"),onClick:function(){s(!r)},children:r?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){n(0),s(!1)},children:"Reset"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})}),w=function(t){var e=1500,a=Object(o.useState)(e),n=Object(D.a)(a,2),c=n[0],i=n[1],r=Object(o.useState)(!1),s=Object(D.a)(r,2),d=s[0],l=s[1],h=Object(o.useState)(!0),b=Object(D.a)(h,2),u=b[0],m=b[1],p=Object(o.useState)(t.Times),O=Object(D.a)(p,2),x=O[0],v=O[1];Object(o.useEffect)((function(){var t=null;return d?t=setInterval((function(){i((function(t){return t>0?t-1:0}))}),1e3):d||0===c||clearInterval(t),function(){return clearInterval(t)}}),[d,c]);var f=function(){l(!d),t.restrictMode&&i(u?e:300)},y=Math.floor(c/60),k=c%60;return Object(o.useEffect)((function(){0===y&&0===k&&!0===u&&window.alert("Well Done, Take a Break :)"),0===y&&0===k&&!1===u&&window.alert("Back to Work XD")})),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[y,":",k]}),Object(j.jsxs)("div",{className:"row",children:[t.restrictMode?Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:f,children:d?"Reset":"Start"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:f,children:d?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){i(u?e:300),l(!1)},children:"Reset"})]}),Object(j.jsx)("button",{className:"button",onClick:function(){l(!1),m(!u),i(u?300:e),v((function(t){return t-.5}))},children:"Next"})]}),t.enableTomato&&Object(j.jsx)("div",{children:x<=0?Object(j.jsx)("div",{className:"row",children:"All Done"}):Object(j.jsxs)("div",{className:"row",children:[Math.ceil(x)," Times Left"]})}),Object(j.jsx)("br",{})]})},I=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Timer"}),Object(j.jsx)(M,{})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Count Down"}),Object(j.jsx)(w,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode})]})]})})}}]),a}(o.Component),A=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)(m.b,{to:"/workdash",children:"To do"})}),Object(j.jsx)("th",{children:Object(j.jsx)(m.b,{to:"/board",children:"Board"})}),Object(j.jsx)("th",{children:Object(j.jsx)(m.b,{to:"/clock",children:"Clock"})}),Object(j.jsx)("th",{children:Object(j.jsx)(m.b,{to:"/settings",children:"Setting"})}),Object(j.jsx)("th",{children:Object(j.jsx)(m.b,{to:"/about",children:"About"})})]})})})})}}]),a}(o.Component),B=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"This is a React App combiming Todo, Note Board and Tomato Clock together"}),Object(j.jsx)("p",{children:"By BUPT Student HYY"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"Setting"}),Object(j.jsx)("h4",{children:"To Do"}),Object(j.jsx)("h4",{children:"Clock"})]})}}]),a}(o.Component),E=function(t){Object(s.a)(a,t);var e=Object(d.a)(a);function a(t){var o;return Object(i.a)(this,a),(o=e.call(this,t)).updateTomatoTimes=function(t){o.setState({Times:t})},o.updateRestricMode=function(t){o.setState({restrictMode:t})},o.updateEnableTomato=function(t){o.setState({enableTomato:t})},o.state={Times:0,restrictMode:!1,enableTomato:!0},o}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("enableTomato")),e=JSON.parse(localStorage.getItem("restrictMode"));null!==t?this.setState({enableTomato:t}):this.setState({enableTomato:!0}),null!==e?this.setState({restrictMode:e}):this.setState({restrictMode:!1})}},{key:"componentDidUpdate",value:function(t){t.enableTomato!==this.state.enableTomato&&localStorage.setItem("enableTomato",JSON.stringify(this.state.enableTomato)),t.restrictMode!==this.state.restrictMode&&localStorage.setItem("restrictMode",JSON.stringify(this.state.restrictMode))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(A,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/workdash",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(S,{updateTomatoTimes:this.updateTomatoTimes,restrictMode:this.state.restrictMode,enableTomato:this.state.enableTomato})}),Object(j.jsx)(l.a,{path:"/board",children:Object(j.jsx)(C,{})}),Object(j.jsx)(l.a,{path:"/clock",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(I,{Times:this.state.Times,enableTomato:this.state.enableTomato,restrictMode:this.state.restrictMode})}),Object(j.jsx)(l.a,{path:"/settings",children:Object(j.jsx)(N,{restrictMode:this.state.restrictMode,updateRestricMode:this.updateRestricMode,enableTomato:this.state.enableTomato,updateEnableTomato:this.updateEnableTomato})}),Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(B,{})})]})]})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(e){var a=e.getCLS,o=e.getFID,n=e.getFCP,c=e.getLCP,i=e.getTTFB;a(t),o(t),n(t),c(t),i(t)}))};c.a.render(Object(j.jsx)(m.a,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.5723a63e.chunk.js.map