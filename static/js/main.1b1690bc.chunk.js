(this.webpackJsonpworkdash=this.webpackJsonpworkdash||[]).push([[0],{50:function(e,t,a){},63:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(26),i=a.n(n),c=(a(63),a(5)),s=a(6),r=a(8),d=a(7),l=a(9),h=a(38),u=a(23),j=(a(50),a(1)),b=function(e){var t=1500,a=Object(o.useState)(t),n=Object(u.a)(a,2),i=n[0],c=n[1],s=Object(o.useState)(!1),r=Object(u.a)(s,2),d=r[0],l=r[1],h=Object(o.useState)(!0),b=Object(u.a)(h,2),m=b[0],p=b[1],O=Object(o.useState)(e.Times),x=Object(u.a)(O,2),T=x[0],f=x[1],v=Object(o.useState)(e.Times),g=Object(u.a)(v,2),y=g[0],k=g[1];Object(o.useEffect)((function(){k(e.Times)})),Object(o.useEffect)((function(){y!==e.Times&&f(e.Times)})),Object(o.useEffect)((function(){var e=null;return d?e=setInterval((function(){c((function(e){return e>0?e-1:0}))}),1e3):d||0===i||clearInterval(e),function(){return clearInterval(e)}}),[d,i]);var S=function(){l(!d),e.restrictMode&&c(m?t:300)},M=Math.floor(i/60),C=i%60;return Object(o.useEffect)((function(){0===M&&0===C&&!0===m&&window.alert("Well Done, Take a Break :)"),0===M&&0===C&&!1===m&&window.alert("Back to Work XD")})),console.log(T),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[M,":",C]}),Object(j.jsxs)("div",{className:"row",children:[e.restrictMode&&e.enableTomato?Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:S,children:d?"Reset":"Start"}):Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:S,children:d?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){c(m?t:300),l(!1)},children:"Reset"})]}),Object(j.jsx)("button",{className:"button",onClick:function(){l(!1),p(!m),c(m?300:t),f((function(e){return e-.5}))},children:"Next"})]}),e.enableTomato&&Object(j.jsx)("div",{children:!e.inlineTomato&&Object(j.jsx)("div",{children:T<=0?Object(j.jsx)("div",{className:"row",children:"All Done"}):Object(j.jsxs)("div",{className:"row",children:[Math.ceil(T)," Times Left"]})})}),Object(j.jsx)("br",{})]})},m=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Inline Tomato Clock"}),Object(j.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})}}]),a}(o.Component),p=a(52),O=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).addButtonHandler=function(){var e=o.state.title;""!==e&&o.props.updateAddItem(e),o.setState({title:""})},o.changeHandler=function(e){var t=e.target,a=t.name,n=t.value;o.setState(Object(p.a)({},a,n))},o.state={title:""},o}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"title",children:Object(j.jsx)("h5",{children:"What's Your Plan Today"})}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",onChange:this.changeHandler,value:this.state.title}),Object(j.jsx)("input",{type:"button",value:"Add",onClick:this.addButtonHandler})]})}}]),a}(o.Component),x=a(21),T=a(86),f=a(88),v=a(56),g=a(85),y=a(41),k=a(42),S=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).checkboxTheme=Object(v.a)({palette:{primary:{main:y.a[700]},secondary:{main:k.a[300]}}}),o.marks=[{value:0,label:0},{value:5,label:5}],o.editChange=function(e){var t=e.target,a=t.name,n=t.value,i=o.state.data;i[o.props.index][a]=n,o.setState({data:i})},o.switchPropotyChange=function(){var e=o.state.data,t=o.props.index;e[t].propoty=!e[t].propoty,o.setState({data:e})},o.switchEncourageChange=function(){var e=o.state.data,t=o.props.index;e[t].encourage=!e[t].encourage,o.setState({data:e})},o.editSubmit=function(){o.props.updateItemStatus(o.state.data)},o.tomatoButton=function(){var e=o.props.index,t=0;void 0!==o.props.data[e]&&(t=o.props.data[e].tomatoNumber),o.props.updateTomatoTimes(t)},o.sliderChanged=function(e,t){var a=o.state.data;a[o.props.index].tomatoNumber=t,o.setState({data:a})},o.valuetext=function(e){return"".concat(e," Tomatos")},o.state={data:o.props.data,enableTomato:o.props.enableTomato,encourageMode:o.props.encourageMode},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data})}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var e=this.props.index,t={};return t=void 0!==this.props.data[e]?this.props.data[e]:{id:0,checked:!1,title:"",tomatoNumber:0,body:"",propoty:!1,encourage:!1},Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:"Edit"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",value:t.title,onChange:this.editChange}),this.props.encourageMode&&Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Done Advance"}),Object(j.jsx)(g.a,{theme:this.checkboxTheme,children:Object(j.jsx)(T.a,{disabled:!t.checked,checked:!!t.checked&&t.encourage,name:"encourage",id:"encourage",color:"secondary",onChange:this.switchEncourageChange})})]}),this.props.enableTomato&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["Tomato Time ",0!==t.tomatoNumber?t.tomatoNumber:null]}),Object(j.jsxs)("span",{children:[Object(j.jsx)(g.a,{theme:this.checkboxTheme,children:Object(j.jsx)(f.a,{value:t.tomatoNumber,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:this.marks,min:0,max:5,name:"tomatoNumber",id:"tomatoNumber",onChange:this.sliderChanged})}),!this.props.inlineTomato&&Object(j.jsx)(x.b,{to:"/clock",children:Object(j.jsx)("button",{onClick:this.tomatoButton,children:"Start Timing"})})]})]}),Object(j.jsx)("label",{children:"Important"}),Object(j.jsx)(g.a,{theme:this.checkboxTheme,children:Object(j.jsx)(T.a,{checked:t.propoty,name:"propoty",id:"propoty",color:"primary",onChange:this.switchPropotyChange})}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{type:"text",id:"description",name:"body",value:t.body,onChange:this.editChange}),Object(j.jsx)("span",{children:Object(j.jsx)("input",{type:"button",value:"Save",onClick:this.editSubmit})})]})]})}}]),a}(o.Component),M=a(87),C=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).checkboxTheme=Object(v.a)({palette:{primary:{main:y.a[300]},secondary:{main:y.a[700]}}}),o.handleCheckboxChange=function(e){var t=Object(h.a)(o.state.data);t[e].checked=!t[e].checked,o.setState({data:t})},o.sendIndex=function(e){o.setState({index:e})},o.state={data:o.props.todoData,index:-1},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({index:this.props.index})}},{key:"componentDidUpdate",value:function(e,t){e.todoData!==this.props.todoData&&this.setState({data:this.props.todoData}),t.data!==this.state.data&&this.props.updateItemStatus(this.state.data),t.index!==this.state.index&&this.props.updateIndexStatus(this.state.index)}},{key:"render",value:function(){var e=this,t=this.props.todoData.map((function(t,a){return Object(j.jsx)("tr",{children:Object(j.jsxs)("div",{onClick:function(){return e.sendIndex(a)},children:[Object(j.jsx)(g.a,{theme:e.checkboxTheme,children:Object(j.jsx)(M.a,{checked:t.checked,color:t.propoty?"secondary":"primary",onClick:function(){return e.handleCheckboxChange(a)}})}),Object(j.jsx)("span",{style:{textDecoration:t.checked?"line-through":null,marginLeft:16,fontWeight:t.propoty?"bold":null},children:t.title}),Object(j.jsx)("span",{})]})},a)}));return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("table",{children:Object(j.jsx)("tbody",{children:t})})})}}]),a}(o.Component),N=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateAddItem=function(e){var t=o.state.todoData,a={id:t.length,checked:!1,title:e,tomatoNumber:0,body:"",propoty:!1,encourage:!1};console.log(a);var n=[].concat(Object(h.a)(t),[a]);o.setState({todoData:n})},o.updateItemStatus=function(e){o.setState({todoData:e})},o.updateIndexStatus=function(e){o.setState({index:e})},o.deleteDoneItem=function(){var e;e=o.state.todoData.filter((function(e){return!1===e.checked})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&o.setState({todoData:e})},o.deleteItem=function(){var e,t=o.state.todoData,a=o.state.index;e=t.filter((function(e){return e.id!==a})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&o.setState({todoData:e})},o.clearAll=function(){window.confirm("Sure to Change?")&&o.setState({todoData:[]})},o.inlineTomatoButton=function(){var e=o.state.index,t=0;void 0!==o.state.todoData[e]&&(t=o.state.todoData[e].tomatoNumber),o.props.updateTomatoTimes(t),o.setState({Times:t,inlineTag:!0})},o.state={index:0,Times:0,inlineTag:!1,enableTomato:o.props.enableTomato,inlineTomato:o.props.inlineTomato,todoData:[]},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todo"));null!==e?this.setState({todoData:e}):this.setState({index:0,todoData:[{id:0,checked:!0,title:"Try to work 25h a day",tomatoNumber:0,body:"You know Professor Sun will love it",propoty:!1,encourage:!1},{id:1,checked:!0,title:"Homework",tomatoNumber:5,body:"DDL is coming XD",propoty:!0,encourage:!0},{id:2,checked:!1,title:"Design a chip",tomatoNumber:3,body:"We Chinese can carve a chip by hand, Cry Dutchess :<",propoty:!0,encourage:!1},{id:3,checked:!1,title:"Sleep",tomatoNumber:0,body:"",propoty:!1,encourage:!1},{id:4,checked:!1,title:"Eat",tomatoNumber:3,body:"",propoty:!1,encourage:!0}]})}},{key:"componentDidUpdate",value:function(e){e.todoData!==this.state.todoData&&localStorage.setItem("todo",JSON.stringify(this.state.todoData))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"To do"}),Object(j.jsx)(O,{todoData:this.state.todoData,updateAddItem:this.updateAddItem})]}),Object(j.jsx)("br",{}),0!==this.state.todoData.length&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"List "}),Object(j.jsx)(C,{todoData:this.state.todoData,updateItemStatus:this.updateItemStatus,index:this.state.index,updateIndexStatus:this.updateIndexStatus}),Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.deleteDoneItem,children:"Clean Done"}),Object(j.jsx)("button",{style:{marginLeft:"1rem"},onClick:this.clearAll,children:"Clear All"})]})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)(S,{data:this.state.todoData,index:this.state.index,inlineTomato:this.props.inlineTomato,updateItemStatus:this.updateItemStatus,updateTomatoTimes:this.props.updateTomatoTimes,deleteItem:this.deleteItem,enableTomato:this.props.enableTomato,encourageMode:this.props.encourageMode}),!this.props.restrictMode&&Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{style:{marginLeft:"1rem"},children:"Item Delete"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.deleteItem,style:{marginLeft:"1rem"},children:"Delete"}),this.props.inlineTomato&&Object(j.jsx)("button",{onClick:this.inlineTomatoButton,style:{marginLeft:"1rem"},children:"Start Timing"})]})]})]})]}),this.props.inlineTomato&&this.props.enableTomato&&this.state.inlineTag&&Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("hr",{}),Object(j.jsx)(m,{Times:this.state.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:!1})]})]}),Object(j.jsx)("br",{})]})}}]),a}(o.Component),D=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{children:"Board"})})}}]),a}(o.Component),I=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).switchTheme=Object(v.a)({palette:{primary:{main:y.a[700]},secondary:{main:k.a[300]}}}),e.restrictModeMethod=function(){var t=e.props.restrictMode;t=!t,e.props.updateRestricMode(t),e.props.updateInlineTomato(!1)},e.enableTomatoMethod=function(){var t=e.props.enableTomato;t=!t,e.props.updateEnableTomato(t)},e.inlineTomatoMethod=function(){var t=e.props.inlineTomato;t=!t,e.props.updateInlineTomato(t)},e.encourageModeMethod=function(){var t=e.props.encourageMode;t=!t,e.props.updateEncourageMode(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Setting"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Restrict Mode"}),Object(j.jsx)(g.a,{theme:this.switchTheme,children:Object(j.jsx)(T.a,{checked:this.props.restrictMode,name:"restrictMode",id:"restrictMode",color:"secondary",onChange:this.restrictModeMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Enable Tomato Clock"}),Object(j.jsx)(g.a,{theme:this.switchTheme,children:Object(j.jsx)(T.a,{checked:this.props.enableTomato,name:"enableTomato",id:"enableTomato",color:"primary",onChange:this.enableTomatoMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Inline Tomato Clock"}),Object(j.jsx)(g.a,{theme:this.switchTheme,children:Object(j.jsx)(T.a,{disabled:this.props.restrictMode,checked:this.props.inlineTomato,name:"inlineTomato",id:"inlineTomato",color:"primary",onChange:this.inlineTomatoMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Encourage Mode"}),Object(j.jsx)(g.a,{theme:this.switchTheme,children:Object(j.jsx)(T.a,{checked:this.props.encourageMode,name:"encourageMode",id:"encourageMode",color:"primary",onChange:this.encourageModeMethod})})]})]})}}]),a}(o.Component),w=function(){var e=Object(o.useState)(0),t=Object(u.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),c=Object(u.a)(i,2),s=c[0],r=c[1];return Object(o.useEffect)((function(){var e=null;return s?e=setInterval((function(){n((function(e){return e+1}))}),1e3):s||0===a||clearInterval(e),function(){return clearInterval(e)}}),[s,a]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[a,"s"]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){r(!s)},children:s?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){n(0),r(!1)},children:"Reset"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})},E=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Timer"}),Object(j.jsx)(w,{})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Count Down"}),Object(j.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})]})})}}]),a}(o.Component),B=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/workdash",children:"To do"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/board",children:"Board"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/clock",children:"Clock"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/settings",children:"Setting"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/about",children:"About"})})]})})})})}}]),a}(o.Component),A=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsx)("hr",{}),Object(j.jsx)("p",{children:"This is a React App combiming Todo, Note Board and Tomato Clock together"}),Object(j.jsx)("p",{children:"By BUPT Student HYY"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"Setting"}),Object(j.jsx)("h4",{children:"To Do"}),Object(j.jsx)("h4",{children:"Clock"})]})}}]),a}(o.Component),J=function(e){Object(r.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateTomatoTimes=function(e){o.setState({Times:e})},o.updateRestricMode=function(e){o.setState({restrictMode:e})},o.updateEnableTomato=function(e){o.setState({enableTomato:e})},o.updateInlineTomato=function(e){o.setState({inlineTomato:e})},o.updateEncourageMode=function(e){o.setState({encourageMode:e})},o.state={Times:0,restrictMode:!1,enableTomato:!0,inlineTomato:!0,encourageMode:!0},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("enableTomato")),t=JSON.parse(localStorage.getItem("restrictMode")),a=JSON.parse(localStorage.getItem("inlineTomato")),o=JSON.parse(localStorage.getItem("encourageMode"));null!==e?this.setState({enableTomato:e}):this.setState({enableTomato:!0}),null!==a?this.setState({inlineTomato:a}):this.setState({inlineTomato:!0}),null!==o?this.setState({encourageMode:o}):this.setState({encourageMode:!0}),null!==t?this.setState({restrictMode:t}):this.setState({restrictMode:!1})}},{key:"componentDidUpdate",value:function(e){e.enableTomato!==this.state.enableTomato&&localStorage.setItem("enableTomato",JSON.stringify(this.state.enableTomato)),e.restrictMode!==this.state.restrictMode&&localStorage.setItem("restrictMode",JSON.stringify(this.state.restrictMode)),e.inlineTomato!==this.state.inlineTomato&&localStorage.setItem("inlineTomato",JSON.stringify(this.state.inlineTomato)),e.encourageMode!==this.state.encourageMode&&localStorage.setItem("encourageMode",JSON.stringify(this.state.encourageMode))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(B,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/workdash",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(N,{Times:this.state.Times,updateTomatoTimes:this.updateTomatoTimes,restrictMode:this.state.restrictMode,enableTomato:this.state.enableTomato,inlineTomato:this.state.inlineTomato,encourageMode:this.state.encourageMode})}),Object(j.jsx)(l.a,{path:"/board",children:Object(j.jsx)(D,{})}),Object(j.jsx)(l.a,{path:"/clock",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(E,{Times:this.state.Times,enableTomato:this.state.enableTomato,restrictMode:this.state.restrictMode,inlineTomato:this.state.inlineTomato})}),Object(j.jsx)(l.a,{path:"/settings",children:Object(j.jsx)(I,{restrictMode:this.state.restrictMode,updateRestricMode:this.updateRestricMode,enableTomato:this.state.enableTomato,updateEnableTomato:this.updateEnableTomato,inlineTomato:this.state.inlineTomato,updateInlineTomato:this.updateInlineTomato,encourageMode:this.state.encourageMode,updateEncourageMode:this.updateEncourageMode})}),Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(A,{})})]})]})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,90)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),o(e),n(e),i(e),c(e)}))};i.a.render(Object(j.jsx)(x.a,{children:Object(j.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),L()}},[[70,1,2]]]);
//# sourceMappingURL=main.1b1690bc.chunk.js.map