(this.webpackJsonpworkdash=this.webpackJsonpworkdash||[]).push([[0],{51:function(e,t,o){},65:function(e,t,o){},72:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o(24),r=o.n(n),i=(o(65),o(7)),s=o(8),c=o(10),d=o(9),l=o(5),h=o(18),u=o(21),j=(o(51),o(1)),b=function(e){var t=1500,o=Object(a.useState)(t),n=Object(u.a)(o,2),r=n[0],i=n[1],s=Object(a.useState)(!1),c=Object(u.a)(s,2),d=c[0],l=c[1],h=Object(a.useState)(!0),b=Object(u.a)(h,2),p=b[0],m=b[1],O=Object(a.useState)(e.Times),x=Object(u.a)(O,2),y=x[0],f=x[1],g=Object(a.useState)(e.Times),v=Object(u.a)(g,2),T=v[0],k=v[1];Object(a.useEffect)((function(){k(e.Times)})),Object(a.useEffect)((function(){T!==e.Times&&f(e.Times)})),Object(a.useEffect)((function(){var e=null;return d?e=setInterval((function(){i((function(e){return e>0?e-1:0}))}),1e3):d||0===r||clearInterval(e),function(){return clearInterval(e)}}),[d,r]);var S=function(){l(!d),e.restrictMode&&i(p?t:300)},M=Math.floor(r/60),D=r%60;return Object(a.useEffect)((function(){0===M&&0===D&&!0===p&&window.alert("Well Done, Take a Break :)"),0===M&&0===D&&!1===p&&window.alert("Back to Work XD")})),console.log(y),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[M,":",D]}),Object(j.jsxs)("div",{className:"row",children:[e.restrictMode&&e.enableTomato?Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:S,children:d?"Reset":"Start"}):Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(d?"active":"inactive"),onClick:S,children:d?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){i(p?t:300),l(!1)},children:"Reset"})]}),Object(j.jsx)("button",{className:"button",onClick:function(){l(!1),m(!p),i(p?300:t),f((function(e){return e-.5}))},children:"Next"})]}),e.enableTomato&&Object(j.jsx)("div",{children:!e.inlineTomato&&Object(j.jsx)("div",{children:y<=0?Object(j.jsx)("div",{className:"row",children:"All Done"}):Object(j.jsxs)("div",{className:"row",children:[Math.ceil(y)," Times Left"]})})}),Object(j.jsx)("br",{})]})},p=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){return Object(i.a)(this,o),t.call(this,e)}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Inline Tomato Clock"}),Object(j.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})}}]),o}(a.Component),m=o(30),O=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).addButtonHandler=function(){var e=a.state.title;""!==e&&a.props.updateAddItem(e),a.setState({title:""})},a.changeHandler=function(e){var t=e.target,o=t.name,n=t.value;a.setState(Object(m.a)({},o,n))},a.state={title:""},a}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"title",children:Object(j.jsx)("h5",{children:"What's Your Plan Today"})}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",onChange:this.changeHandler,value:this.state.title}),Object(j.jsx)("input",{type:"button",value:"Add",onClick:this.addButtonHandler})]})}}]),o}(a.Component),x=o(19),y=o(89),f=o(91),g=o(58),v=o(88),T=o(40),k=o(41),S=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).checkboxTheme=Object(g.a)({palette:{primary:{main:T.a[700]},secondary:{main:k.a[300]}}}),a.marks=[{value:0,label:0},{value:5,label:5}],a.editChange=function(e){var t=e.target,o=t.name,n=t.value,r=a.state.data;r[a.props.index][o]=n,a.setState({data:r})},a.switchPropotyChange=function(){var e=a.state.data,t=a.props.index;e[t].propoty=!e[t].propoty,a.setState({data:e})},a.switchEncourageChange=function(){var e=a.state.data,t=a.props.index;e[t].encourage=!e[t].encourage,a.setState({data:e})},a.editSubmit=function(){a.props.updateItemStatus(a.state.data)},a.tomatoButton=function(){var e=a.props.index,t=0;void 0!==a.props.data[e]&&(t=a.props.data[e].tomatoNumber),a.props.updateTomatoTimes(t)},a.sliderChanged=function(e,t){var o=a.state.data;o[a.props.index].tomatoNumber=t,a.setState({data:o})},a.valuetext=function(e){return"".concat(e," Tomatos")},a.state={data:a.props.data,enableTomato:a.props.enableTomato,encourageMode:a.props.encourageMode},a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){this.setState({data:this.props.data})}},{key:"componentDidUpdate",value:function(e,t){e.data!==this.props.data&&this.setState({data:this.props.data})}},{key:"render",value:function(){var e=this.props.index,t={};return t=void 0!==this.props.data[e]?this.props.data[e]:{id:0,checked:!1,title:"",tomatoNumber:0,body:"",propoty:!1,encourage:!1},Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:"Edit"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",value:t.title,onChange:this.editChange}),this.props.encourageMode&&Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:"Done Advance"}),Object(j.jsx)(v.a,{theme:this.checkboxTheme,children:Object(j.jsx)(y.a,{disabled:!t.checked,checked:!!t.checked&&t.encourage,name:"encourage",id:"encourage",color:"secondary",onChange:this.switchEncourageChange})})]}),this.props.enableTomato&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{children:["Tomato Time ",0!==t.tomatoNumber?t.tomatoNumber:null]}),Object(j.jsxs)("span",{children:[Object(j.jsx)(v.a,{theme:this.checkboxTheme,children:Object(j.jsx)(f.a,{value:t.tomatoNumber,getAriaValueText:this.valuetext,"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",step:1,marks:this.marks,min:0,max:5,name:"tomatoNumber",id:"tomatoNumber",onChange:this.sliderChanged})}),!this.props.inlineTomato&&Object(j.jsx)(x.b,{to:"/clock",children:Object(j.jsx)("button",{onClick:this.tomatoButton,children:"Start Timing"})})]})]}),Object(j.jsx)("label",{children:"Important"}),Object(j.jsx)(v.a,{theme:this.checkboxTheme,children:Object(j.jsx)(y.a,{checked:t.propoty,name:"propoty",id:"propoty",color:"primary",onChange:this.switchPropotyChange})}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{type:"text",id:"description",name:"body",value:t.body,onChange:this.editChange}),Object(j.jsx)("span",{children:Object(j.jsx)("input",{type:"button",value:"Save",onClick:this.editSubmit})})]})]})}}]),o}(a.Component),M=o(57),D=o(90),w=o(12),N=Object(w.a)({root:{"&$checked":{color:k.a[300]}},checked:{}})((function(e){return Object(j.jsx)(D.a,Object(M.a)({color:"default"},e))})),C=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).checkboxTheme=Object(g.a)({palette:{primary:{main:T.a[300]},secondary:{main:T.a[700]},default:{main:k.a[300]}}}),a.handleCheckboxChange=function(e){var t=Object(h.a)(a.state.data);t[e].checked=!t[e].checked,a.setState({data:t})},a.sendIndex=function(e){a.setState({index:e})},a.hideDoneMethod=function(){var e=a.props.hideDone;e=!e,a.props.updateHideDone(e)},a.orderByNameMethod=function(){var e=a.props.orderByName;e=!e,a.props.updateOrderByName(e)},a.orderByPropertyMethod=function(){var e=a.props.orderByProperty;e=!e,a.props.updateOrderByProperty(e)},a.state={data:a.props.todoData,disableHideDone:!1,index:-1,hideDone:a.props.hideDone,orderByName:a.props.orderByName,orderByProperty:a.props.orderByProperty},a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){this.setState({index:this.props.index});var e=this.state.data.every((function(e){return!0===e.checked}));this.setState({disableHideDone:e})}},{key:"componentDidUpdate",value:function(e,t){if(e.todoData!==this.props.todoData&&(this.setState({data:this.props.todoData}),this.props.updateHideDone(!1),this.props.updateOrderByName(!1),this.props.updateOrderByProperty(!1),this.setState({hideDone:!1,orderByName:!1,orderByProperty:!1})),t.data!==this.state.data){var o=this.state.data.every((function(e){return!0===e.checked}));this.setState({disableHideDone:o})}if(e.hideDone!==this.props.hideDone&&this.setState({hideDone:this.props.hideDone}),e.orderByProperty!==this.props.orderByProperty&&this.setState({orderByProperty:this.props.orderByProperty}),e.orderByName!==this.props.orderByName&&this.setState({orderByName:this.props.orderByName}),t.hideDone!==this.state.hideDone||t.orderByName!==this.state.orderByName||t.orderByProperty!==this.state.orderByProperty){var a=Object(h.a)(this.state.data),n=Object(h.a)(this.props.todoData);if(console.log("switch update"),(!0===t.hideDone&&!1===this.state.hideDone||!0===t.orderByName&&!1===this.state.orderByName||!0===t.orderByProperty&&!1===this.state.orderByProperty)&&(console.log("Emmmm, Don't be sad, I am working"),this.setState({joker:n}),a=n),this.props.orderByName){var r=a.map((function(e){return e.title}));r=r.sort();var i=[],s=Object(h.a)(a);console.log(r,"Array XD");for(var c=0;c<r.length;c++){console.log("I am sure I am looping");for(var d=0;d<s.length;d++)console.log(s[d],"hey"),s[d].title==r[c]&&(i[c]=s[d])}a=[].concat(i),console.log(i,"New data")}if(this.props.orderByProperty){var l=a.filter((function(e){return!0===e.propoty&&!1===e.checked})),u=a.filter((function(e){return!1===e.propoty&&!1===e.checked})),j=a.filter((function(e){return!0===e.checked&&!0===e.propoty})),b=a.filter((function(e){return!0===e.checked&&!1===e.propoty}));a=[].concat(Object(h.a)(l),Object(h.a)(u),Object(h.a)(j),Object(h.a)(b))}this.props.hideDone&&(a=a.filter((function(e){return!1===e.checked}))),this.setState({data:a})}t.index!==this.state.index&&this.props.updateIndexStatus(this.state.index)}},{key:"render",value:function(){var e=this,t=this.state.data,o=this.state.disableHideDone,a=t.map((function(t,o){return Object(j.jsx)("tr",{children:Object(j.jsxs)("div",{onClick:function(){return e.sendIndex(t.id)},children:[Object(j.jsx)(v.a,{theme:e.checkboxTheme,children:t.encourage&&e.props.encourageMode?Object(j.jsx)(N,{checked:t.checked,color:t.propoty?"secondary":"primary",onClick:function(){return e.handleCheckboxChange(o)}}):Object(j.jsx)(D.a,{checked:t.checked,color:t.propoty?"secondary":"primary",onClick:function(){return e.handleCheckboxChange(o)}})}),Object(j.jsx)("span",{style:{textDecoration:t.checked?"line-through":null,marginLeft:16,fontWeight:t.propoty?"bold":null},children:t.title}),Object(j.jsx)("span",{})]})},o)}));return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{children:"List "}),Object(j.jsx)("table",{children:0===a.length?Object(j.jsx)("tbody",{style:{fontWeight:"bold"},children:". . . . .  ."}):Object(j.jsx)("tbody",{children:a})}),this.props.enableOrder&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{children:"Order Type"}),Object(j.jsx)("label",{children:"Hide Done"}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{disabled:o,checked:this.props.hideDone,name:"hideDone",id:"hideDone",color:"secondary",onChange:this.hideDoneMethod})}),Object(j.jsx)("label",{children:"Order By Name"}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{checked:this.props.orderByName,name:"orderByName",id:"orderByName",color:"primary",onChange:this.orderByNameMethod})}),Object(j.jsx)("label",{children:"Order By Property"}),Object(j.jsx)(v.a,{children:Object(j.jsx)(y.a,{checked:this.props.orderByProperty,name:"orderByProperty",id:"orderByProperty",color:"primary",onChange:this.orderByPropertyMethod})})]})]})}}]),o}(a.Component),B=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).updateAddItem=function(e){var t=a.state.todoData,o={id:t.length,checked:!1,title:e,tomatoNumber:0,body:"",propoty:!1,encourage:!1};console.log(o);var n=[].concat(Object(h.a)(t),[o]);a.setState({todoData:n})},a.updateItemStatus=function(e){a.setState({todoData:e})},a.updateIndexStatus=function(e){a.setState({index:e})},a.deleteDoneItem=function(){var e;e=a.state.todoData.filter((function(e){return!1===e.checked})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&a.setState({todoData:e})},a.deleteItem=function(){var e,t=a.state.todoData,o=a.state.index;e=t.filter((function(e){return e.id!==o})).map((function(e,t){return e.id=t,e})),window.confirm("Sure to Change?")&&a.setState({todoData:e})},a.clearAll=function(){window.confirm("Sure to Change?")&&a.setState({todoData:[]})},a.inlineTomatoButton=function(){var e=a.state.index,t=0;void 0!==a.state.todoData[e]&&(t=a.state.todoData[e].tomatoNumber),a.props.updateTomatoTimes(t),a.setState({Times:t,inlineTag:!0})},a.updateHideDone=function(e){a.setState({hideDone:e})},a.updateOrderByName=function(e){a.setState({orderByName:e})},a.updateOrderByProperty=function(e){a.setState({orderByProperty:e})},a.state={index:0,Times:0,inlineTag:!1,hideDone:!1,orderByName:!1,orderByProperty:!1,enableTomato:a.props.enableTomato,inlineTomato:a.props.inlineTomato,todoData:[]},a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todo"));null!==e?this.setState({todoData:e}):this.setState({index:0,todoData:[{id:0,checked:!0,title:"Try to work 25h a day",tomatoNumber:0,body:"You know Professor Sun will love it",propoty:!1,encourage:!1},{id:1,checked:!0,title:"Homework",tomatoNumber:5,body:"DDL is coming XD",propoty:!0,encourage:!0},{id:2,checked:!1,title:"Design a chip",tomatoNumber:3,body:"We BUPTers can carve a chip by hand",propoty:!0,encourage:!1},{id:3,checked:!1,title:"Sleep",tomatoNumber:0,body:"",propoty:!1,encourage:!1},{id:4,checked:!1,title:"Eat",tomatoNumber:3,body:"",propoty:!0,encourage:!0}]})}},{key:"componentDidUpdate",value:function(e){e.todoData!==this.state.todoData&&localStorage.setItem("todo",JSON.stringify(this.state.todoData))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"To do"}),Object(j.jsx)(O,{todoData:this.state.todoData,updateAddItem:this.updateAddItem})]}),Object(j.jsx)("br",{}),0!==this.state.todoData.length&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)(C,{todoData:this.state.todoData,updateItemStatus:this.updateItemStatus,index:this.state.index,updateIndexStatus:this.updateIndexStatus,encourageMode:this.props.encourageMode,hideDone:this.state.hideDone,orderByName:this.state.orderByName,orderByProperty:this.state.orderByProperty,updateOrderByName:this.updateOrderByName,updateOrderByProperty:this.updateOrderByProperty,updateHideDone:this.updateHideDone,enableOrder:this.props.enableOrder}),Object(j.jsxs)("span",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:this.deleteDoneItem,children:"Clean Done"}),Object(j.jsx)("button",{style:{marginLeft:"1rem"},onClick:this.clearAll,children:"Clear All"})]})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)(S,{data:this.state.todoData,index:this.state.index,inlineTomato:this.props.inlineTomato,updateItemStatus:this.updateItemStatus,updateTomatoTimes:this.props.updateTomatoTimes,deleteItem:this.deleteItem,enableTomato:this.props.enableTomato,encourageMode:this.props.encourageMode}),!this.props.restrictMode&&Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{style:{marginLeft:"1rem"},children:"Item Delete"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:this.deleteItem,style:{marginLeft:"1rem"},children:"Delete"}),this.props.inlineTomato&&Object(j.jsx)("button",{onClick:this.inlineTomatoButton,style:{marginLeft:"1rem"},children:"Start Timing"})]})]})]})]}),this.props.inlineTomato&&this.props.enableTomato&&this.state.inlineTag&&Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)("hr",{}),Object(j.jsx)(p,{Times:this.state.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:!1})]})]}),Object(j.jsx)("br",{})]})}}]),o}(a.Component),I=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(){var e;Object(i.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).switchTheme=Object(g.a)({palette:{primary:{main:T.a[700]},secondary:{main:k.a[300]}}}),e.restrictModeMethod=function(){var t=e.props.restrictMode;t=!t,e.props.updateRestricMode(t),e.props.updateInlineTomato(!1)},e.enableTomatoMethod=function(){var t=e.props.enableTomato;t=!t,e.props.updateEnableTomato(t),t||e.props.updateInlineTomato(!1)},e.inlineTomatoMethod=function(){var t=e.props.inlineTomato;t=!t,e.props.updateInlineTomato(t)},e.encourageModeMethod=function(){var t=e.props.encourageMode;t=!t,e.props.updateEncourageMode(t)},e.enableOrderMethod=function(){var t=e.props.enableOrder;t=!t,e.props.updateEnableOrder(t)},e}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Setting"}),Object(j.jsx)("hr",{}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Restrict Mode"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(y.a,{checked:this.props.restrictMode,name:"restrictMode",id:"restrictMode",color:"secondary",onChange:this.restrictModeMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Enable Tomato Clock"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(y.a,{checked:this.props.enableTomato,name:"enableTomato",id:"enableTomato",color:"primary",onChange:this.enableTomatoMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Inline Tomato Clock"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(y.a,{disabled:this.props.restrictMode||!this.props.enableTomato,checked:this.props.inlineTomato,name:"inlineTomato",id:"inlineTomato",color:"primary",onChange:this.inlineTomatoMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Enable Order"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(y.a,{checked:this.props.enableOrder,name:"inlineTomato",id:"inlineTomato",color:"primary",onChange:this.enableOrderMethod})})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("label",{children:"Encourage Mode"}),Object(j.jsx)(v.a,{theme:this.switchTheme,children:Object(j.jsx)(y.a,{checked:this.props.encourageMode,name:"encourageMode",id:"encourageMode",color:"primary",onChange:this.encourageModeMethod})})]}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}}]),o}(a.Component),P=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),o=t[0],n=t[1],r=Object(a.useState)(!1),i=Object(u.a)(r,2),s=i[0],c=i[1];return Object(a.useEffect)((function(){var e=null;return s?e=setInterval((function(){n((function(e){return e+1}))}),1e3):s||0===o||clearInterval(e),function(){return clearInterval(e)}}),[s,o]),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"time",children:[o,"s"]}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("button",{className:"button button-primary button-primary-".concat(s?"active":"inactive"),onClick:function(){c(!s)},children:s?"Pause":"Start"}),Object(j.jsx)("button",{className:"button",onClick:function(){n(0),c(!1)},children:"Reset"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]})},E=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"flex-row",children:[Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Timer"}),Object(j.jsx)(P,{})]}),Object(j.jsxs)("div",{className:"flex-large",children:[Object(j.jsx)("h3",{children:"Count Down"}),Object(j.jsx)(b,{Times:this.props.Times,enableTomato:this.props.enableTomato,restrictMode:this.props.restrictMode,inlineTomato:this.props.inlineTomato})]})]})})}}]),o}(a.Component),A=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("table",{children:Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/workdash",children:"To do"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/clock",children:"Clock"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/settings",children:"Setting"})}),Object(j.jsx)("th",{children:Object(j.jsx)(x.b,{to:"/about",children:"About"})})]})})})})}}]),o}(a.Component),H=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(){return Object(i.a)(this,o),t.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"About"}),Object(j.jsx)("p",{children:"A React App Combining Todo and Tomato Clock Together"}),Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:"Setting"}),Object(j.jsx)("label",{children:Object(j.jsx)("li",{children:"Restrict Mode"})}),Object(j.jsx)("p",{children:Object(j.jsx)("tr",{children:"As seen from the name, Restrict Mode will disable some features to help you concentrate better."})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("li",{children:"Disable Single Item Delete Button"}),Object(j.jsx)("tr",{children:"Restrict Mode will disable single delete button which will prevent you from deleting the item you added on the list."}),Object(j.jsx)("tr",{children:"Hard tasks left on the list of no doubt make you not that happy."}),Object(j.jsx)("tr",{children:"So, urge yourself to complete them instead of cheating yourself..."}),Object(j.jsx)("tr",{children:"Eh, at least we have taken away your delete button XD ."})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("li",{children:"Disable Inline Tomato Clock"}),Object(j.jsx)("tr",{children:"Restrict Mode will disable Inline Tomato Clock."}),Object(j.jsx)("tr",{children:"Shown just down the task list, Inline Tomato Clock makes it easy to check your task with clock counting. "}),Object(j.jsx)("tr",{children:"However, if you want to enjoy your concentration without any interuption. Leaving other tasks alone is a wise choice."}),Object(j.jsx)("tr",{children:"So, why not jump to the clock page and enjoy your own time :)"})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("li",{children:"Disable Pause Option of the Tomato Clock"}),Object(j.jsx)("tr",{children:"Restrict Mode will disable the Pause Option of the Tomato (Count Down) Clock."}),Object(j.jsx)("tr",{children:"In fact, according to the policy of Tomato Work Method, pause is even not allowed."}),Object(j.jsx)("tr",{children:"So, if you sruely wanna pause, just reset and start again."})]}),Object(j.jsx)("label",{children:Object(j.jsx)("li",{children:"Encourage Mode"})}),Object(j.jsxs)("p",{children:[Object(j.jsx)("tr",{children:"If there were no bosses patroling around, "}),Object(j.jsx)("tr",{children:"everyone would be happy showing off the fact of finishing work ahead of scheduled time."}),Object(j.jsx)("tr",{children:"To be honest, I am not rich enough to store your data on the cloud without selling them to your managers."}),Object(j.jsx)("tr",{children:"However, my coding level surely sucks, which will guarantee your privacy safety because I have no ability to store data online."}),Object(j.jsx)("tr",{children:"So, you should feel lucky and keep the switch on. Feel free to tap the switch if you finish your work in advance."}),Object(j.jsx)("tr",{children:"The checkbox will turn green as encouragement."})]}),Object(j.jsx)("h4",{children:"To Do"}),Object(j.jsxs)("p",{children:[Object(j.jsx)("tr",{children:"Add your item to start."}),Object(j.jsx)("tr",{children:"Click at the task to see its propotions and edit it."}),Object(j.jsx)("tr",{children:"You can set tomato clock time to each task use interactive tomato clock."})]}),Object(j.jsx)("hr",{}),Object(j.jsx)("dd",{children:"Designed by HYY at BUPT"}),Object(j.jsx)("br",{})]})}}]),o}(a.Component),R=function(e){Object(c.a)(o,e);var t=Object(d.a)(o);function o(e){var a;return Object(i.a)(this,o),(a=t.call(this,e)).updateTomatoTimes=function(e){a.setState({Times:e})},a.updateRestricMode=function(e){a.setState({restrictMode:e})},a.updateEnableTomato=function(e){a.setState({enableTomato:e})},a.updateInlineTomato=function(e){a.setState({inlineTomato:e})},a.updateEncourageMode=function(e){a.setState({encourageMode:e})},a.updateEnableOrder=function(e){a.setState({enableOrder:e})},a.state={Times:0,restrictMode:!1,enableTomato:!0,inlineTomato:!0,encourageMode:!0,enableOrder:!0},a}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("enableTomato")),t=JSON.parse(localStorage.getItem("restrictMode")),o=JSON.parse(localStorage.getItem("inlineTomato")),a=JSON.parse(localStorage.getItem("encourageMode"));null!==e?this.setState({enableTomato:e}):this.setState({enableTomato:!0}),null!==o?this.setState({inlineTomato:o}):this.setState({inlineTomato:!0}),null!==a?this.setState({encourageMode:a}):this.setState({encourageMode:!0}),null!==t?this.setState({restrictMode:t}):this.setState({restrictMode:!1})}},{key:"componentDidUpdate",value:function(e){e.enableTomato!==this.state.enableTomato&&localStorage.setItem("enableTomato",JSON.stringify(this.state.enableTomato)),e.restrictMode!==this.state.restrictMode&&localStorage.setItem("restrictMode",JSON.stringify(this.state.restrictMode)),e.inlineTomato!==this.state.inlineTomato&&localStorage.setItem("inlineTomato",JSON.stringify(this.state.inlineTomato)),e.encourageMode!==this.state.encourageMode&&localStorage.setItem("encourageMode",JSON.stringify(this.state.encourageMode))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(A,{}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/workdash",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(B,{Times:this.state.Times,updateTomatoTimes:this.updateTomatoTimes,restrictMode:this.state.restrictMode,enableTomato:this.state.enableTomato,inlineTomato:this.state.inlineTomato,encourageMode:this.state.encourageMode,enableOrder:this.state.enableOrder})}),Object(j.jsx)(l.a,{path:"/clock",target:"_blank",rel:"noopener noreferrer",children:Object(j.jsx)(E,{Times:this.state.Times,enableTomato:this.state.enableTomato,restrictMode:this.state.restrictMode,inlineTomato:this.state.inlineTomato})}),Object(j.jsx)(l.a,{path:"/settings",children:Object(j.jsx)(I,{restrictMode:this.state.restrictMode,updateRestricMode:this.updateRestricMode,enableTomato:this.state.enableTomato,updateEnableTomato:this.updateEnableTomato,inlineTomato:this.state.inlineTomato,updateInlineTomato:this.updateInlineTomato,encourageMode:this.state.encourageMode,updateEncourageMode:this.updateEncourageMode,enableOrder:this.state.enableOrder,updateEnableOrder:this.updateEnableOrder})}),Object(j.jsx)(l.a,{path:"/about",children:Object(j.jsx)(H,{})})]})]})}}]),o}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("OK :)"),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,92)).then((function(t){var o=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;o(e),a(e),n(e),r(e),i(e)}))};r.a.render(Object(j.jsx)(x.a,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/workdash",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/workdash","/service-worker.js");L?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var a=o.headers.get("content-type");404===o.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):W(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):W(t,e)}))}}(),J()}},[[72,1,2]]]);
//# sourceMappingURL=main.a28321c0.chunk.js.map