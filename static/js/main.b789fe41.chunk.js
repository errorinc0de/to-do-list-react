(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{21:function(t,e,n){},22:function(t,e,n){},23:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n(2),i=n.n(s),c=n(5),r=n.n(c),d=(n(21),n(13)),u=n(8),l=n(9),o=n(3),j=n(15),h=n(14),b=(n(22),n(23),n(10)),m=n(11);var p=function(t){var e=t.items.map((function(e){return Object(a.jsx)("div",{className:"list",children:Object(a.jsxs)("p",{children:[Object(a.jsx)("input",{type:"text",value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}},e.key),Object(a.jsx)("span",{children:Object(a.jsx)(b.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(a.jsx)("div",{children:Object(a.jsx)(m.a,{duration:500,easing:"ease-in-out",children:e})})},x=n(4),O=n(12);x.b.add(O.a);var v=function(t){Object(j.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(o.a)(a)),a.addItem=a.addItem.bind(Object(o.a)(a)),a.deleteItem=a.deleteItem.bind(Object(o.a)(a)),a.setUpdate=a.setUpdate.bind(Object(o.a)(a)),a}return Object(l.a)(n,[{key:"handleInput",value:function(t){this.setState({currentItem:{text:t.target.value,key:Date.now()}})}},{key:"addItem",value:function(t){t.preventDefault();var e=this.state.currentItem;if(""!==e.text){var n=[].concat(Object(d.a)(this.state.items),[e]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(t){var e=this.state.items.filter((function(e){return e.key!==t}));this.setState({items:e})}},{key:"setUpdate",value:function(t,e){var n=this.state.items;n.map((function(n){n.key===e&&(n.text=t)})),this.setState({items:n})}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsxs)("form",{id:"to-do-list",onSubmit:this.addItem,children:[Object(a.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(a.jsx)("button",{type:"submit",children:"ADD"})]})}),Object(a.jsx)("div",{className:"cards",children:Object(a.jsx)(p,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.setUpdate})})]})}}]),n}(i.a.Component);var f=function(){return Object(a.jsx)("div",{id:"heading",children:"To-Do-List using ReactJS"})};r.a.render(Object(a.jsxs)(i.a.StrictMode,{children:[Object(a.jsx)(f,{id:"heading"}),Object(a.jsx)(v,{})]}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.b789fe41.chunk.js.map