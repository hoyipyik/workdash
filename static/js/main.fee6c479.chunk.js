(this.webpackJsonpworkdash=this.webpackJsonpworkdash||[]).push([[0],{51:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a(26),i=a.n(n),c=(a(64),a(5)),s=a(6),r=a(8),l=a(7),d=a(9),h=a(39),j=a(23),u=(a(51),a(1)),b=function(e){var t=1500,a=Object(o.useState)(t),n=Object(j.a)(a,2),i=n[0],c=n[1],s=Object(o.useState)(!1),r=Object(j.a)(s,2),l=r[0],d=r[1],h=Object(o.useState)(!0),b=Object(j.a)(h,2),m=b[0],p=b[1],O=Object(o.useState)(e.Times),x=Object(j.a)(O,2),f=x[0],T=x[1],g=Object(o.useState)(e.Times),v=Object(j.a)(g,2),y=v[0],k=v[1];Object(o.useEffect)((function(){k(e.Times)})),Object(o.useEffect)((function(){y!==e.Times&&T(e.Times)})),Object(o.useEffect)((function(){var e=null;return l?e=setInterval((function(){c((function(e){return e>0?e-1:0}))}),1e3):l||0===i||clearInterval(e),function(){return clearInterval(e)}}),[l,i]);var S=function(){d(!l),e.restrictMode&&c(m?t:300)},M=Math.floor(i/60),C=i%60;return Object(o.useEffect)((function(){0===M&&0===C&&!0===m&&window.alert("Well Done, Take a Break :)"),0===M&&0===C&&!1===m&&window.alert("Back to Work XD")})),console.log(f),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"time",children:[M,":",C]}),Object(u.jsxs)("div",{className:"row",children:[e.restrictMode&&e.enableTomato?Object(u.jsx)("button",{className:"button button-primary button-primary-".concat(l?"active":"inactive"),onClick:S,children:l?"Reset":"Start"}):Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{className:"button button-primary button-primary-".concat(l?"active":"inactive"),onClick:S,children:l?"Pause":"Start"}),Object(u.jsx)("button",{className:"button",onClick:function(){c(m?t:300),d(!1)},children:"Reset"})]}),Object(u.jsx)("button",{className:"button",onClick:function(){d(!1),p(!m),c(m?300:t),T((function(e){return e-.5}))},children:"Next"})]}),e.enableTomato&&Object(u.jsx)("div",{children:!e.inlineTomato&&Object(u.jsx)("div",{children:f<=0?Object(u.jsx)("div",{className:"row",children:"All Done"}):Object(u.jsxs)("div",{className:"row",children:[Math.ceil(f)," Times Left"]})})}),Object(u.jsx)("br",{})]})},m=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Inline Tomato Clock"}),Object(u.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})}}]),a}(o.Component),p=a(30),O=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).addButtonHandler=function(){var e=o.state.title;""!==e&&o.props.updateAddItem(e),o.setState({title:""})},o.changeHandler=function(e){var t=e.target,a=t.name,n=t.value;o.setState(Object(p.a)({},a,n))},o.state={title:""},o}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{htmlFor:"title",children:Object(u.jsx)("h5",{children:"What's Your Plan Today"})}),Object(u.jsx)("input",{type:"text",id:"title",name:"title",onChange:this.changeHandler,value:this.state.title}),Object(u.jsx)("input",{type:"button",value:"Add",onClick:this.addButtonHandler})]})}}]),a}(o.Component),x=a(21),f=a(87),T=a(89),g=a(57),v=a(86),y=a(42),k=a(43),S=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).checkboxTheme=Object(g.a)({palette:{primary:{main:y.a[700]},secondary:{main:k.a[300]}}}),o.marks=[{value:0,label:0},{value:5,label:5}],o.editChange=function(e){var t=e.target,a=t.name,n=t.value,i=o.state.data;i[o.props.index][a]=n,o.setState({data:i})},o.switchPropotyChange=function(){var e=o.state.data,t=o.props.index;e[t].propoty=!e[t].propoty,o.setState({data:e})},o.switchEncourageChange=function(){var e=o.state.data,t=o.props.index;e[t].encourage=!e[t].encourage,o.setState({data:e})},o.editSubmit=function(){o.props.updateItemStatus(o.state.data)},o.tomatoButton=function(){var e=o.props.index,t=0;void 0!==o.props.data[e]&&(t=o.props.data[e].tomatoNumber),o.props.updateTomatoTimes(t)},o.sliderChanged=function(e,t){var a=o.state.data;a[o.props.index].tomatoNumber=t,o.setState({data:a})},o.valuetext=function(e){return"".concat(e," Tomatos")},o.state={data:o.props.data,enableTomato:o.props.enableTomato,encourageMode:o.props.encourageMode},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data})}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var e=this.props.index,t={};return t=void 0!==this.props.data[e]?this.props.data[e]:{id:0,checked:!1,title:"",tomatoNumber:0,body:"",propoty:!1,encourage:!1},Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{children:"Edit"}),Object(u.jsxs)("form",{children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",id:"title",name:"title",value:t.title,onChange:this.editChange}),this.props.encourageMode&&Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{children:"Done Advance"}),Object(u.jsx)(v.a,{theme:this.checkboxTheme,children:Object(u.jsx)(f.a,{disabled:!t.checked,checked:!!t.checked&&t.encourage,name:"encourage",id:"encourage",color:"secondary",onChange:this.switchEncourageChange})})]}),this.props.enableTomato&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("label",{children:["Tomato Time ",0!==t.tomatoNumber?t.tomatoNumber:null]}),Object(u.jsxs)("span",{children:[Object(u.jsx)(v.a,{theme:this.checkboxTheme,children:Object(u.jsx)(T.a,{value:t.tomatoNumber,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:this.marks,min:0,max:5,name:"tomatoNumber",id:"tomatoNumber",onChange:this.sliderChanged})}),!this.props.inlineTomato&&Object(u.jsx)(x.b,{to:"/clock",children:Object(u.jsx)("button",{onClick:this.tomatoButton,children:"Start Timing"})})]})]}),Object(u.jsx)("label",{children:"Important"}),Object(u.jsx)(v.a,{theme:this.checkboxTheme,children:Object(u.jsx)(f.a,{checked:t.propoty,name:"propoty",id:"propoty",color:"primary",onChange:this.switchPropotyChange})}),Object(u.jsx)("label",{children:"Description"}),Object(u.jsx)("textarea",{type:"text",id:"description",name:"body",value:t.body,onChange:this.editChange}),Object(u.jsx)("span",{children:Object(u.jsx)("input",{type:"button",value:"Save",onClick:this.editSubmit})})]})]})}}]),a}(o.Component),M=a(56),C=a(88),w=a(13),D=Object(w.a)({root:{"&$checked":{color:k.a[300]}},checked:{}})((function(e){return Object(u.jsx)(C.a,Object(M.a)({color:"default"},e))})),I=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).checkboxTheme=Object(g.a)({palette:{primary:{main:y.a[300]},secondary:{main:y.a[700]},default:{main:k.a[300]}}}),o.handleCheckboxChange=function(e){var t=Object(h.a)(o.state.data);t[e].checked=!t[e].checked,o.setState({data:t})},o.sendIndex=function(e){o.setState({index:e})},o.state={data:o.props.todoData,index:-1},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({index:this.props.index})}},{key:"componentDidUpdate",value:function(e,t){e.todoData!==this.props.todoData&&this.setState({data:this.props.todoData}),t.data!==this.state.data&&this.props.updateItemStatus(this.state.data),t.index!==this.state.index&&this.props.updateIndexStatus(this.state.index)}},{key:"render",value:function(){var e=this,t=this.props.todoData.map((function(t,a){return Object(u.jsx)("tr",{children:Object(u.jsxs)("div",{onClick:function(){return e.sendIndex(a)},children:[Object(u.jsx)(v.a,{theme:e.checkboxTheme,children:t.encourage&&e.props.encourageMode?Object(u.jsx)(D,{checked:t.checked,color:t.propoty?"secondary":"primary",onClick:function(){return e.handleCheckboxChange(a)}}):Object(u.jsx)(C.a,{checked:t.checked,color:t.propoty?"secondary":"primary",onClick:function(){return e.handleCheckboxChange(a)}})}),Object(u.jsx)("span",{style:{textDecoration:t.checked?"line-through":null,marginLeft:16,fontWeight:t.propoty?"bold":null},children:t.title}),Object(u.jsx)("span",{})]})},a)}));return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("table",{children:Object(u.jsx)("tbody",{children:t})})})}}]),a}(o.Component),N=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateAddItem=function(e){var t=o.state.todoData,a={id:t.length,checked:!1,title:e,tomatoNumber:0,body:"",propoty:!1,encourage:!1};console.log(a);var n=[].concat(Object(h.a)(t),[a]);o.setState({todoData:n})},o.updateItemStatus=function(e){o.setState({todoData:e})},o.updateIndexStatus=function(e){o.setState({index:e})},o.deleteDoneItem=function(){var e;e=o.state.todoData.filter((function(e){return!1===e.checked})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&o.setState({todoData:e})},o.deleteItem=function(){var e,t=o.state.todoData,a=o.state.index;e=t.filter((function(e){return e.id!==a})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&o.setState({todoData:e})},o.clearAll=function(){window.confirm("Sure to Change?")&&o.setState({todoData:[]})},o.inlineTomatoButton=function(){var e=o.state.index,t=0;void 0!==o.state.todoData[e]&&(t=o.state.todoData[e].tomatoNumber),o.props.updateTomatoTimes(t),o.setState({Times:t,inlineTag:!0})},o.state={index:0,Times:0,inlineTag:!1,enableTomato:o.props.enableTomato,inlineTomato:o.props.inlineTomato,todoData:[]},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todo"));null!==e?this.setState({todoData:e}):this.setState({index:0,todoData:[{id:0,checked:!0,title:"Try to work 25h a day",tomatoNumber:0,body:"You know Professor Sun will love it",propoty:!1,encourage:!1},{id:1,checked:!0,title:"Homework",tomatoNumber:5,body:"DDL is coming XD",propoty:!0,encourage:!0},{id:2,checked:!1,title:"Design a chip",tomatoNumber:3,body:"We Chinese can carve a chip by hand, Cry Dutchess :<",propoty:!0,encourage:!1},{id:3,checked:!1,title:"Sleep",tomatoNumber:0,body:"",propoty:!1,encourage:!1},{id:4,checked:!1,title:"Eat",tomatoNumber:3,body:"",propoty:!1,encourage:!0}]})}},{key:"componentDidUpdate",value:function(e){e.todoData!==this.state.todoData&&localStorage.setItem("todo",JSON.stringify(this.state.todoData))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"To do"}),Object(u.jsx)(O,{todoData:this.state.todoData,updateAddItem:this.updateAddItem})]}),Object(u.jsx)("br",{}),0!==this.state.todoData.length&&Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"flex-row",children:[Object(u.jsxs)("div",{className:"flex-large",children:[Object(u.jsx)("h3",{children:"List "}),Object(u.jsx)(I,{todoData:this.state.todoData,updateItemStatus:this.updateItemStatus,index:this.state.index,updateIndexStatus:this.updateIndexStatus,encourageMode:this.props.encourageMode}),Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{onClick:this.deleteDoneItem,children:"Clean Done"}),Object(u.jsx)("button",{style:{marginLeft:"1rem"},onClick:this.clearAll,children:"Clear All"})]})]}),Object(u.jsxs)("div",{className:"flex-large",children:[Object(u.jsx)(S,{data:this.state.todoData,index:this.state.index,inlineTomato:this.props.inlineTomato,updateItemStatus:this.updateItemStatus,updateTomatoTimes:this.props.updateTomatoTimes,deleteItem:this.deleteItem,enableTomato:this.props.enableTomato,encourageMode:this.props.encourageMode}),!this.props.restrictMode&&Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{style:{marginLeft:"1rem"},children:"Item Delete"}),Object(u.jsxs)("span",{children:[Object(u.jsx)("button",{onClick:this.deleteItem,style:{marginLeft:"1rem"},children:"Delete"}),this.props.inlineTomato&&Object(u.jsx)("button",{onClick:this.inlineTomatoButton,style:{marginLeft:"1rem"},children:"Start Timing"})]})]})]})]}),this.props.inlineTomato&&this.props.enableTomato&&this.state.inlineTag&&Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("hr",{}),Object(u.jsx)(m,{Times:this.state.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:!1})]})]}),Object(u.jsx)("br",{})]})}}]),a}(o.Component),E=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("h1",{children:"Board"})})}}]),a}(o.Component),A=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,n=new Array(o),i=0;i<o;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).switchTheme=Object(g.a)({palette:{primary:{main:y.a[700]},secondary:{main:k.a[300]}}}),e.restrictModeMethod=function(){var t=e.props.restrictMode;t=!t,e.props.updateRestricMode(t),e.props.updateInlineTomato(!1)},e.enableTomatoMethod=function(){var t=e.props.enableTomato;t=!t,e.props.updateEnableTomato(t),t||e.props.updateInlineTomato(!1)},e.inlineTomatoMethod=function(){var t=e.props.inlineTomato;t=!t,e.props.updateInlineTomato(t)},e.encourageModeMethod=function(){var t=e.props.encourageMode;t=!t,e.props.updateEncourageMode(t)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Setting"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Restrict Mode"}),Object(u.jsx)(v.a,{theme:this.switchTheme,children:Object(u.jsx)(f.a,{checked:this.props.restrictMode,name:"restrictMode",id:"restrictMode",color:"secondary",onChange:this.restrictModeMethod})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Enable Tomato Clock"}),Object(u.jsx)(v.a,{theme:this.switchTheme,children:Object(u.jsx)(f.a,{checked:this.props.enableTomato,name:"enableTomato",id:"enableTomato",color:"primary",onChange:this.enableTomatoMethod})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Inline Tomato Clock"}),Object(u.jsx)(v.a,{theme:this.switchTheme,children:Object(u.jsx)(f.a,{disabled:this.props.restrictMode||!this.props.enableTomato,checked:this.props.inlineTomato,name:"inlineTomato",id:"inlineTomato",color:"primary",onChange:this.inlineTomatoMethod})})]}),Object(u.jsxs)("span",{children:[Object(u.jsx)("label",{children:"Encourage Mode"}),Object(u.jsx)(v.a,{theme:this.switchTheme,children:Object(u.jsx)(f.a,{checked:this.props.encourageMode,name:"encourageMode",id:"encourageMode",color:"primary",onChange:this.encourageModeMethod})})]})]})}}]),a}(o.Component),B=function(){var e=Object(o.useState)(0),t=Object(j.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(!1),c=Object(j.a)(i,2),s=c[0],r=c[1];return Object(o.useEffect)((function(){var e=null;return s?e=setInterval((function(){n((function(e){return e+1}))}),1e3):s||0===a||clearInterval(e),function(){return clearInterval(e)}}),[s,a]),Object(u.jsxs)("div",{className:"app",children:[Object(u.jsxs)("div",{className:"time",children:[a,"s"]}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){r(!s)},children:s?"Pause":"Start"}),Object(u.jsx)("button",{className:"button",onClick:function(){n(0),r(!1)},children:"Reset"}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})]})},R=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"flex-row",children:[Object(u.jsxs)("div",{className:"flex-large",children:[Object(u.jsx)("h3",{children:"Timer"}),Object(u.jsx)(B,{})]}),Object(u.jsxs)("div",{className:"flex-large",children:[Object(u.jsx)("h3",{children:"Count Down"}),Object(u.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})]})})}}]),a}(o.Component),J=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("table",{children:Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsx)(x.b,{to:"/workdash",children:"To do"})}),Object(u.jsx)("th",{children:Object(u.jsx)(x.b,{to:"/clock",children:"Clock"})}),Object(u.jsx)("th",{children:Object(u.jsx)(x.b,{to:"/settings",children:"Setting"})}),Object(u.jsx)("th",{children:Object(u.jsx)(x.b,{to:"/about",children:"About"})})]})})})})}}]),a}(o.Component),L=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"About"}),Object(u.jsx)("p",{children:"A React App Combining Todo and Tomato Clock Together"}),Object(u.jsx)("hr",{}),Object(u.jsx)("h4",{children:"Setting"}),Object(u.jsx)("label",{children:Object(u.jsx)("li",{children:"Restrict Mode"})}),Object(u.jsx)("p",{children:Object(u.jsx)("tr",{children:"As seen from the name, Restrict Mode will disable some functions to help you concentrate better."})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("li",{children:"Disable Single Item Delete Button"}),Object(u.jsx)("tr",{children:"Restrict Mode will disable single delete button which will prevent you from deleting the item you added on the list."}),Object(u.jsx)("tr",{children:"Hard tasks left on the list of no doubt make you not that happy."}),Object(u.jsx)("tr",{children:"So, urge yourself to complete them instead of cheating yourself..."}),Object(u.jsx)("tr",{children:"Eh, at least we have taken away your delete button XD ."})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("li",{children:"Disable Inline Tomato Clock"}),Object(u.jsx)("tr",{children:"Restrict Mode will disable Inline Tomato Clock."}),Object(u.jsx)("tr",{children:"Shown just down the task list, Inline Tomato Clock makes it easy to check your task with clock counting. "}),Object(u.jsx)("tr",{children:"However, if you want to enjoy your concentration without any interuption. Leaving other tasks alone is a wise choice."}),Object(u.jsx)("tr",{children:"So, why not jump to the clock page and enjoy your own time :)"})]}),Object(u.jsxs)("p",{children:[Object(u.jsx)("li",{children:"Disable Pause Option of the Tomato Clock"}),Object(u.jsx)("tr",{children:"Restrict Mode will disable the Pause Option of the Tomato (Count Down) Clock."}),Object(u.jsx)("tr",{children:"In fact, according to the policy of Tomato Work Method, pause is even not allowed."}),Object(u.jsx)("tr",{children:"So, if you sruely wanna pause, just reset and start again."})]}),Object(u.jsx)("label",{children:Object(u.jsx)("li",{children:"Encourage Mode"})}),Object(u.jsxs)("p",{children:[Object(u.jsx)("tr",{children:"If there were no bosses patroling around, "}),Object(u.jsx)("tr",{children:"everyone would be happy showing off the fact of finishing work ahead of scheduled time."}),Object(u.jsx)("tr",{children:"To be host, I am not rich enough to store your data on the cloud without selling them to your managers."}),Object(u.jsx)("tr",{children:"However, my coding level surely sucks, which will guarantee your privacy safety because I have no ability to store data online."}),Object(u.jsx)("tr",{children:"So, you should feel lucky and keep the switch on. Feel free to tap the switch if you finish your work in advance."}),Object(u.jsx)("tr",{children:"The checkbox will turn green as encouragement."})]}),Object(u.jsx)("h4",{children:"To Do"}),Object(u.jsxs)("p",{children:[Object(u.jsx)("tr",{children:"Add your item to start."}),Object(u.jsx)("tr",{children:"Click at the task to see its propotions and edit it."}),Object(u.jsx)("tr",{children:"You can set tomato clock time to each task use interactive tomato clock."})]}),Object(u.jsx)("hr",{}),Object(u.jsx)("p",{children:"Designed by HYY at BUPT"}),Object(u.jsx)("br",{})]})}}]),a}(o.Component),P=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).updateTomatoTimes=function(e){o.setState({Times:e})},o.updateRestricMode=function(e){o.setState({restrictMode:e})},o.updateEnableTomato=function(e){o.setState({enableTomato:e})},o.updateInlineTomato=function(e){o.setState({inlineTomato:e})},o.updateEncourageMode=function(e){o.setState({encourageMode:e})},o.state={Times:0,restrictMode:!1,enableTomato:!0,inlineTomato:!0,encourageMode:!0},o}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("enableTomato")),t=JSON.parse(localStorage.getItem("restrictMode")),a=JSON.parse(localStorage.getItem("inlineTomato")),o=JSON.parse(localStorage.getItem("encourageMode"));null!==e?this.setState({enableTomato:e}):this.setState({enableTomato:!0}),null!==a?this.setState({inlineTomato:a}):this.setState({inlineTomato:!0}),null!==o?this.setState({encourageMode:o}):this.setState({encourageMode:!0}),null!==t?this.setState({restrictMode:t}):this.setState({restrictMode:!1})}},{key:"componentDidUpdate",value:function(e){e.enableTomato!==this.state.enableTomato&&localStorage.setItem("enableTomato",JSON.stringify(this.state.enableTomato)),e.restrictMode!==this.state.restrictMode&&localStorage.setItem("restrictMode",JSON.stringify(this.state.restrictMode)),e.inlineTomato!==this.state.inlineTomato&&localStorage.setItem("inlineTomato",JSON.stringify(this.state.inlineTomato)),e.encourageMode!==this.state.encourageMode&&localStorage.setItem("encourageMode",JSON.stringify(this.state.encourageMode))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(J,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/workdash",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(N,{Times:this.state.Times,updateTomatoTimes:this.updateTomatoTimes,restrictMode:this.state.restrictMode,enableTomato:this.state.enableTomato,inlineTomato:this.state.inlineTomato,encourageMode:this.state.encourageMode})}),Object(u.jsx)(d.a,{path:"/board",children:Object(u.jsx)(E,{})}),Object(u.jsx)(d.a,{path:"/clock",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(R,{Times:this.state.Times,enableTomato:this.state.enableTomato,restrictMode:this.state.restrictMode,inlineTomato:this.state.inlineTomato})}),Object(u.jsx)(d.a,{path:"/settings",children:Object(u.jsx)(A,{restrictMode:this.state.restrictMode,updateRestricMode:this.updateRestricMode,enableTomato:this.state.enableTomato,updateEnableTomato:this.updateEnableTomato,inlineTomato:this.state.inlineTomato,updateInlineTomato:this.updateInlineTomato,encourageMode:this.state.encourageMode,updateEncourageMode:this.updateEncourageMode})}),Object(u.jsx)(d.a,{path:"/about",children:Object(u.jsx)(L,{})})]})]})}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,91)).then((function(t){var a=t.getCLS,o=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),o(e),n(e),i(e),c(e)}))};i.a.render(Object(u.jsx)(x.a,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),H()}},[[71,1,2]]]);
//# sourceMappingURL=main.fee6c479.chunk.js.map