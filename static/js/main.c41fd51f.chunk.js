(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={button:"ContactListItem_button__1Z-te",item:"ContactListItem_item__bntQB"}},11:function(t,e,n){t.exports={filterName:"FilterContacts_filterName__1KGlL",input:"FilterContacts_input__16fS0"}},12:function(t,e,n){t.exports={title:"App_title__2X8WI"}},14:function(t,e,n){t.exports={Container:"Container_Container__3CuSv"}},16:function(t,e,n){t.exports={contactList:"ContactList_contactList__1OQB9"}},2:function(t,e,n){t.exports={form:"ContactForm_form__ZMDOi",property:"ContactForm_property__1Nzb5",input:"ContactForm_input__3hs5B",button:"ContactForm_button__1eqNO"}},32:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(13),o=n.n(r),s=n(17),i=n(5),u=n(6),l=n(8),m=n(7),d=n(3),b=n.n(d),p=n(14),f=n.n(p),h=n(0),j=function(t){var e=t.children;return Object(h.jsx)("div",{className:f.a.Container,children:e})},C=n(15),O=n(2),_=n.n(O),v=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:t.props.name,number:t.props.number},t.nameInputId=b.a.generate(),t.numberInputId=b.a.generate(),t.handleContactAdd=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(C.a)({},a,c))},t.handlesubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{onSubmit:this.handlesubmit,className:_.a.form,children:[Object(h.jsxs)("label",{htmlFor:this.nameInputId,className:_.a.property,children:[Object(h.jsx)("span",{children:"Name"}),Object(h.jsx)("input",{type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:_.a.input,onChange:this.handleContactAdd,id:this.nameInputId})]}),Object(h.jsxs)("label",{htmlFor:this.numberInputId,className:_.a.property,children:[Object(h.jsx)("span",{children:"Number"}),Object(h.jsx)("input",{type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:_.a.input,onChange:this.handleContactAdd,id:this.numberInputId})]}),Object(h.jsx)("button",{type:"submit",className:_.a.button,children:"Add contact"})]})}}]),n}(a.Component);v.defaultProps={name:"",number:""};var x=v,g=n(16),N=n.n(g),y=n(10),I=n.n(y),S=function(t){var e=t.contact,n=e.name,a=e.number,c=e.id,r=t.onDeleteContact;return Object(h.jsxs)("li",{className:I.a.item,children:[Object(h.jsxs)("span",{children:[n,": ",a]}),Object(h.jsx)("button",{type:"button",className:I.a.button,onClick:function(){return r(c)},children:"Delete"})]})},A=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(h.jsx)("ul",{className:N.a.contactList,children:e.map((function(t){return Object(h.jsx)(S,{contact:t,onDeleteContact:n},t.id)}))})},F=n(11),L=n.n(F),w=function(t){var e=t.value,n=t.onChange;return Object(h.jsxs)("label",{className:L.a.filterName,children:["Filter by name",Object(h.jsx)("input",{type:"text",value:e,onChange:n,className:L.a.input})]})},D=n(12),k=n.n(D),z=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:t.props.contacts,filter:t.props.filter},t.formAddContact=function(e){var n=e.name,a=e.number,c=t.state.contacts,r={id:b.a.generate(),name:n,number:a};c.some((function(t){return t.name.toLowerCase()===r.name.toLowerCase()}))?alert("".concat(n," is already in contacts")):c.some((function(t){return t.number===r.number}))?alert("".concat(a," is already in contacts under a different name")):t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(s.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getfilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.componentDidMount=function(){var e=localStorage.getItem("contacts"),n=JSON.parse(e);n&&t.setState({contacts:n})},t.componentDidUpdate=function(e,n){t.state.contacts!==n.contacts&&localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getfilteredContacts();return Object(h.jsxs)(j,{children:[Object(h.jsx)("h1",{className:k.a.title,children:"Phonebook"}),Object(h.jsx)(x,{onSubmit:this.formAddContact}),Object(h.jsx)("h2",{className:k.a.title,children:"Contacts"}),Object(h.jsx)(w,{value:t,onChange:this.changeFilter}),Object(h.jsx)(A,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);z.defaultProps={contacts:[],filter:""};var B=z;n(31),n(32);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.c41fd51f.chunk.js.map