(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(17),n(18),n(9)),s=n(6),l=n(4),d=n(26),j=n(8),u=Object(j.b)({name:"contacts",initialState:{items:[],filter:""},reducers:{addContacts:function(e,t){e.items.push(t.payload)},deleteContactsAction:function(e,t){e.items=e.items.filter((function(e){return e.id!==t.payload}))},changeFilter:function(e,t){e.filter=t.payload}}}),b=u.actions,m=b.addContacts,p=b.deleteContactsAction,f=b.changeFilter,O=u.reducer,x=n(2);var h=Object(x.a)("div",{target:"e1fixn0p7"})({name:"dnp3pp",styles:"display:inline-flex;flex-direction:column"}),g=Object(x.a)("form",{target:"e1fixn0p6"})({name:"iaas47",styles:"display:inline-flex;flex-direction:column;align-items:center;border:1px dashed tomato;padding:10px;margin:10px"}),y=Object(x.a)("label",{target:"e1fixn0p5"})(""),v=Object(x.a)("input",{target:"e1fixn0p4"})({name:"1jyr00o",styles:"caret-color:tomato;margin:10px"}),C=Object(x.a)("label",{target:"e1fixn0p3"})(""),w=Object(x.a)("input",{target:"e1fixn0p2"})({name:"1jyr00o",styles:"caret-color:tomato;margin:10px"}),A=Object(x.a)("button",{target:"e1fixn0p1"})(""),k=Object(x.a)("h2",{target:"e1fixn0p0"})({name:"1nts6pa",styles:"color:tomato;display:flex;justify-content:center;align-items:center"}),S=n(1),z=function(e){var t=e.handleAddContact,n=e.nameValue,a=e.numberValue,c=e.handleChange,r=Object(d.a)(),i=Object(d.a)();return Object(S.jsxs)(h,{children:[Object(S.jsx)(k,{children:"Add contact"}),Object(S.jsxs)(g,{onSubmit:t,children:[Object(S.jsx)(y,{htmlFor:r,children:"Name"}),Object(S.jsx)(v,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:c,id:r}),Object(S.jsx)(C,{htmlFor:i,children:"Number"}),Object(S.jsx)(w,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:a,id:i,onChange:c}),Object(S.jsx)(A,{type:"submit",children:"Add contact"})]})]})};var N=Object(x.a)("ul",{target:"e1apjfqg2"})({name:"pha8e7",styles:"padding:5px"}),q=Object(x.a)("li",{target:"e1apjfqg1"})({name:"1rkzys4",styles:"width:300px;display:flex;align-items:center;justify-content:space-between;padding:10px;border:1px solid black;&:not(:last-child){margin-bottom:5px;}"}),F=Object(x.a)("button",{target:"e1apjfqg0"})({name:"1yzqyz8",styles:"margin:0 5px"}),J=function(e){var t=e.deleteContact,n=Object(l.c)((function(e){return e.contacts.items})),a=Object(l.c)((function(e){return e.contacts.filter}));return Object(S.jsx)(N,{children:n.filter((function(e){return""===a||e.number.toLowerCase().includes(a.toLowerCase())||e.name.toLowerCase().includes(a.toLowerCase())})).map((function(e){var n=e.id,a=e.name,c=e.number;return Object(S.jsxs)(q,{children:[a," : ",c,Object(S.jsx)(F,{onClick:function(){return t(n)},children:"x"})]},n)}))})};var L=Object(x.a)("input",{target:"eienggn0"})({name:"1r9s657",styles:"caret-color:tomato"}),V=function(e){var t=e.handleNameFilter;return Object(S.jsx)(L,{onChange:t,type:"text"})},I=Object(a.memo)(V);var Z=Object(x.a)("section",{target:"etpt69e4"})(""),B=Object(x.a)("h1",{target:"etpt69e3"})({name:"h7fvah",styles:"display:flex;justify-content:center;color:tomato"}),D=Object(x.a)("h2",{target:"etpt69e2"})({name:"1yx3syy",styles:"color:tomato"}),E=Object(x.a)("div",{target:"etpt69e1"})({name:"1lt5lnu",styles:"display:inline-flex;align-items:center;flex-direction:column"}),M=Object(x.a)("div",{target:"etpt69e0"})({name:"1rhk5m1",styles:"display:flex;flex-direction:row;justify-content:space-around"}),T=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.contacts.items})),n=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(o.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]},c=n("name",""),r=Object(o.a)(c,2),i=r[0],j=r[1],u=n("number",""),b=Object(o.a)(u,2),O=b[0],x=b[1];return Object(S.jsxs)(Z,{children:[Object(S.jsx)(B,{children:"Phonebook"}),Object(S.jsxs)(M,{children:[Object(S.jsx)(z,{handleAddContact:function(n){var a=Object(d.a)();n.preventDefault(),t.some((function(e){return e.name===i}))?s.b.error("Contact is already added in the phonebook"):(e(m({id:a,name:i,number:O})),s.b.success("Contact added"),j(""),x(""))},handleChange:function(e){switch(e.target.name){case"name":j(e.target.value);break;case"number":x(e.target.value);break;default:return}},nameValue:i,numberValue:O}),Object(S.jsxs)(E,{children:[Object(S.jsx)(D,{children:"Contacts"}),Object(S.jsx)(I,{handleNameFilter:function(t){e(f(t.target.value))}}),t.length>0?Object(S.jsx)(J,{deleteContact:function(t){e(p(t)),s.b.error("Contact Deleted")}}):Object(S.jsx)(D,{children:"Add please new contacts"})]})]}),Object(S.jsx)(s.a,{position:"top-right",toastOptions:{error:{iconTheme:{primary:"tomato",secondary:"white"}}}})]})};var P=function(){return Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(T,{})})},$=Object(j.a)({reducer:{contacts:O},devTools:!1});i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(l.a,{store:$,children:Object(S.jsx)(P,{})})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.f26cc14c.chunk.js.map