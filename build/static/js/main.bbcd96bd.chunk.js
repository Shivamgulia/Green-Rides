(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,t,n){"use strict";var c=n(48),a=n(12),r=n(2),s=n(3),o=n.n(s),i=n(1);function l(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(i.useReducer)(l,{status:t?"pending":null,data:null,error:null}),s=Object(r.a)(n,2),d=s[0],u=s[1],j=Object(i.useCallback)(function(){var t=Object(a.a)(o.a.mark((function t(n){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,u({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),u({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:j},d)}},11:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return x}));var c=n(12),a=n(3),r=n.n(a),s="https://cycle-api.azurewebsites.net";function o(e){return i.apply(this,arguments)}function i(){return(i=Object(c.a)(r.a.mark((function e(t){var n,c,a,o,i,l,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/cycles/").concat(t.cycleid),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,a=c.stdid,n.ok){e.next=9;break}throw new Error(c.message||"Could not Rent Cycle");case 9:if("student"!==t.role||"rented"!==c.status){e.next=11;break}throw new Error("Cycle already Rented");case 11:if("guard"!==t.role||""!==c.status){e.next=13;break}throw new Error("Cycle not Rented Yet");case 13:return"student"===t.role&&(o=t.cycleid),"guard"===t.role&&(o=""),"student"===t.role&&(a=t.userid),e.next=18,fetch("".concat(s,"/users/").concat(a),{method:"PATCH",body:JSON.stringify({cycleid:o}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 18:return n=e.sent,e.next=21,n.json();case 21:if(c=e.sent,n.ok){e.next=24;break}throw new Error(c.message||"Could not Rent Cycle.");case 24:return"student"===t.role&&(i=t.userid),"guard"===t.role&&(i=""),"student"===t.role&&(l=t.name),"guard"===t.role&&(l=""),"student"===t.role&&(d="rented"),"guard"===t.role&&(d=""),e.next=32,fetch("".concat(s,"/cycles/").concat(t.cycleid),{method:"PATCH",body:JSON.stringify({status:d,stdid:i,stdname:l}),headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 32:return n=e.sent,e.next=35,n.json();case 35:if(c=e.sent,n.ok){e.next=38;break}throw new Error(c.message||"Could not Rent Cycle.");case 38:return e.abrupt("return","Cycle Rented");case 39:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/users/signup"),{method:"POST",body:JSON.stringify(t.student),headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not Add Student.");case 8:return e.abrupt("return","Student Added");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/users/").concat(t.student.email),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not Delete Student.");case 8:return e.abrupt("return","Student Deleted");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/cycles/add"),{method:"POST",body:JSON.stringify(t.cycle),headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not Add Cycle.");case 8:return e.abrupt("return","Student Added");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/cycles/").concat(t.cycleid),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not Delete Cycle");case 8:return e.abrupt("return","Cycle Deleted");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(r.a.mark((function e(t){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/cycles/all"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t.token}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(c=e.sent,n.ok){e.next=8;break}throw new Error(c.message||"Could not fetch Cycles.");case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},17:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka",image:"MainNavigation_image__1Uu62"}},19:function(e,t,n){"use strict";var c=n(43),a=n.n(c),r=n(0);t.a=function(e){return Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)("div",{className:a.a.action,children:Object(r.jsx)("button",{onClick:e.click,type:"button",children:e.children})})})}},20:function(e,t,n){e.exports={auth:"AddStudentForm_auth__h7mok",control:"AddStudentForm_control__2g9qK",actions:"AddStudentForm_actions__u4M92",toggle:"AddStudentForm_toggle__29Mvf"}},22:function(e,t,n){"use strict";var c=n(2),a=n(1),r=n(25),s=n.n(r),o=n(38),i=n(0);t.a=function(e){var t=Object(a.useState)(!1),n=Object(c.a)(t,2),r=n[0],l=n[1];return Object(i.jsxs)("div",{className:s.a.camera,children:[Object(i.jsx)("div",{className:s.a.action,children:Object(i.jsx)("button",{type:"button",onClick:function(){r&&l(!1),r||l(!0)},children:r?"Close Camera":"Open Camera"})}),Object(i.jsx)("div",{className:s.a.camera,children:r&&Object(i.jsx)(o.a,{onFind:function(t,n){t&&e.scan(t),n&&console.info(n)}})})]})}},25:function(e,t,n){e.exports={camera:"Scanner_camera__2iaKL",bu:"Scanner_bu__3hea6",action:"Scanner_action__2ugFY"}},35:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},37:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},4:function(e,t,n){e.exports={auth:"AddStudentForm_auth__TS3h4",control:"AddStudentForm_control__1gHrQ",actions:"AddStudentForm_actions__3i30V",toggle:"AddStudentForm_toggle__3pMps"}},43:function(e,t,n){e.exports={action:"Button_action__1h3-3"}},44:function(e,t,n){e.exports={container:"AdminPage_container__1m3KL"}},45:function(e,t,n){e.exports={item:"CycleItem_item__3DiAo"}},46:function(e,t,n){e.exports={list:"CycleList_list__31-ni",sorting:"CycleList_sorting__9l_4o"}},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c,a=n(2),r=n(1),s=n.n(r),o=n(32),i=n.n(o),l=n(33),d=n(0),u=s.a.createContext({token:"",isLoggedIn:!1,userid:"",email:"",password:"",role:"",cycleid:"",data:{},name:"",login:function(e,t,n,c,a,r,s){},logout:function(){},addCycle:function(){}}),j=function(e){var t=(new Date).getTime();return new Date(e).getTime()-t},b=function(e){var t,n,s,o,b,O,m,h,x,p,f=function(){var e=localStorage.getItem("password");if(null!==e&&""!==e&&void 0!==e)try{e=Object(l.a)(localStorage.getItem("password")).value}catch(O){}var t=localStorage.getItem("token"),n=localStorage.getItem("expirationTime"),c=localStorage.getItem("userid"),a=localStorage.getItem("role"),r=localStorage.getItem("email"),s=localStorage.getItem("cycleid"),o=localStorage.getItem("data"),i=localStorage.getItem("name"),d=localStorage.getItem("branch"),u=localStorage.getItem("rollno"),b=j(n);return b<=360?(localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userid"),localStorage.removeItem("role"),localStorage.removeItem("cycleid"),localStorage.removeItem("data"),localStorage.removeItem("name"),localStorage.removeItem("password"),localStorage.removeItem("email"),localStorage.removeItem("branch"),localStorage.removeItem("rollno"),null):{token:t,userid:c,role:a,cycleid:s,data:o,name:i,branch:d,password:e,email:r,rollno:u,duration:b}}();f&&(b=f.data,t=f.token,n=f.userid,s=f.role,o=f.cycleid,p=f.password,x=f.email,O=f.name,m=f.branch,h=f.rollno);var g=Object(r.useState)(b),v=Object(a.a)(g,2),S=v[0],y=v[1],N=Object(r.useState)(n),k=Object(a.a)(N,2),w=k[0],C=k[1],_=Object(r.useState)(s),I=Object(a.a)(_,2),A=I[0],R=I[1],E=Object(r.useState)(t),D=Object(a.a)(E,2),T=D[0],q=D[1],F=Object(r.useState)(o),L=Object(a.a)(F,2),P=L[0],G=L[1],z=Object(r.useState)(p),B=Object(a.a)(z,2),M=B[0],U=B[1],J=Object(r.useState)(x),K=Object(a.a)(J,2),H=K[0],Q=K[1],V=Object(r.useState)(O),X=Object(a.a)(V,2),Y=X[0],W=X[1],Z=Object(r.useState)(m),$=Object(a.a)(Z,2),ee=$[0],te=$[1],ne=Object(r.useState)(h),ce=Object(a.a)(ne,2),ae=ce[0],re=ce[1],se=!!T,oe=Object(r.useCallback)((function(){q(null),C(null),R(null),G(null),y(null),W(null),te(null),U(null),Q(null),re(null),localStorage.removeItem("token"),localStorage.removeItem("expirationTime"),localStorage.removeItem("userid"),localStorage.removeItem("role"),localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.removeItem("cycleid"),localStorage.removeItem("data"),localStorage.removeItem("name"),localStorage.removeItem("branch"),localStorage.removeItem("rollno"),localStorage.setItem("userIsLoggedIn",!1),c&&clearTimeout(c)}),[]);Object(r.useEffect)((function(){f&&(c=setTimeout(oe,f.duration))}),[f,oe]);var ie={data:S,token:T,isLoggedIn:se,userid:w,role:A,cycleid:P,email:H,password:M,name:Y,branch:ee,rollno:ae,login:function(e,t,n,a,r,s,o){var l=j(o),d=i()({value:t},"screte sauce");y(e),q(n),R(r),C(a),Q(e.email),W(e.name),U(t),te(e.branch),re(e.rollno),G(s),localStorage.setItem("token",n),localStorage.setItem("role",r),localStorage.setItem("userid",a),localStorage.setItem("cycleid",s),localStorage.setItem("name",e.name),localStorage.setItem("branch",e.branch),localStorage.setItem("password",d),localStorage.setItem("email",e.email),localStorage.setItem("rollno",e.rollno),localStorage.setItem("userIsLoggedIn",!0),localStorage.setItem("expirationTime",o),localStorage.setItem("data",JSON.stringify(e)),c=setTimeout(oe,l)},logout:oe,addCycle:function(e){localStorage.setItem("cycleid",e),G(e),console.log(e+" incycle"+P)}};return Object(d.jsx)(u.Provider,{value:ie,children:e.children})};t.b=u},59:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(31),a=n.n(c),r=n(16),s=n(5),o=(n(59),n(2)),i=n(1),l=n.n(i),d=n(6),u=n(34),j=n(28),b=n(30),O=n(10),m=n(11),h=n(7),x=n(20),p=n.n(x),f=n(0),g=function(e){console.log(e);var t=Object(i.useContext)(s.b),n=Object(i.useRef)(),c=Object(d.g)(),a=Object(i.useState)(!1),r=Object(o.a)(a,2),l=r[0],u=r[1],j=Object(i.useState)(!1),x=Object(o.a)(j,2),g=x[0],v=x[1],S=Object(i.useState)(!1),y=Object(o.a)(S,2),N=y[0],k=y[1],w=Object(O.a)(m.b,!1),C=w.sendRequest,_=w.status,I=w.error;if("pending"===_)return Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})});if(I)return Object(f.jsx)("p",{className:"centered",children:I});return Object(f.jsxs)("section",{className:p.a.auth,children:[Object(f.jsx)("h1",{children:"Add Student"}),Object(f.jsxs)("form",{onSubmit:function(a){a.preventDefault(),N?(v(!0),C({student:{name:e.user.name,rollno:"100",branch:"user",role:"student",email:e.user.email,password:n.current.value},token:t.token}),v(!1),c.replace("/")):alert("Verify that you are a human")},children:[Object(f.jsxs)("div",{className:p.a.control,children:[Object(f.jsx)("label",{htmlFor:"Name",children:"Student Name"}),Object(f.jsx)("input",{type:"Name",id:"Name",required:!0,value:e.user.name,readOnly:!0})]}),Object(f.jsxs)("div",{className:p.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"userName",id:"userName",required:!0,value:e.user.email,readOnly:!0})]}),Object(f.jsxs)("div",{className:p.a.control,children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:l?"text":"password",id:"password",required:!0,ref:n})]}),Object(f.jsx)("input",{type:"checkbox",onClick:function(){l&&u(!1),l||u(!0)}})," Show Password",Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{sitekey:"6LcU0VQjAAAAAHdKzj2Ub7RAbfQCf6QXbgOif9Le",onChange:function(){k(!0)}})}),Object(f.jsxs)("div",{className:p.a.actions,children:[!g&&Object(f.jsx)("button",{children:"Create Account"}),g&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},v=function(){var e="796516456467-obk13f0j5ajcme475pfl3ioecispqv5a.apps.googleusercontent.com",t=Object(i.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)({}),s=Object(o.a)(r,2),l=s[0],d=s[1];Object(i.useEffect)((function(){j.a.load("client:auth2",(function(){j.a.client.init({clientId:e,scope:""})}))}),[]);return Object(f.jsxs)("div",{children:[!c&&Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(u.GoogleLogin,{clientId:e,buttonText:"Sign in with Google",onSuccess:function(e){d(e),a(!0)},cookiePolicy:"single_host_origin",isSignedIn:!0})}),c&&Object(f.jsx)("div",{children:Object(f.jsx)(g,{user:l.profileObj})})]})},S=n(37),y=n.n(S),N=n.p+"static/media/gogreen.c1a0a6ff.png",k=n(17),w=n.n(k),C=function(){var e=Object(i.useContext)(s.b),t=Object(i.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],l=Object(i.useState)(!1),d=Object(o.a)(l,2),u=d[0],j=d[1];Object(i.useEffect)((function(){"student"===e.role&&(a(!1),j(!1)),"guard"===e.role&&(a(!0),j(!1)),"admin"===e.role&&(j(!0),a(!1))}),[e,e.role]);var b=function(){e.logout()};return Object(f.jsxs)("header",{className:w.a.header,children:[Object(f.jsxs)("div",{className:w.a.logo,children:[Object(f.jsx)("img",{src:N}),"Green Rides"]}),Object(f.jsx)("nav",{className:w.a.nav,children:Object(f.jsxs)("ul",{children:[e.isLoggedIn&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/mainPage",activeClassName:w.a.active,children:"Main Page"})}),e.isLoggedIn&&!u&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/rent",activeClassName:w.a.active,children:c?"Return":"Rent"})}),e.isLoggedIn&&u&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/admin",activeClassName:w.a.active,children:"Admin"})}),!e.isLoggedIn&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/auth",activeClassName:w.a.active,onClick:b,children:"Login"})}),e.isLoggedIn&&u&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/cycles",activeClassName:w.a.active,children:"Cycles"})}),e.isLoggedIn&&Object(f.jsx)("li",{children:Object(f.jsx)(r.b,{to:"/auth",activeClassName:w.a.active,onClick:b,children:"Logout"})})]})})]})},_=function(e){return Object(f.jsxs)(i.Fragment,{children:[Object(f.jsx)(C,{}),Object(f.jsx)("main",{className:y.a.main,children:e.children})]})},I=n(22),A=n(4),R=n.n(A),E=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(o.a)(a,2),l=r[0],d=r[1],u=Object(i.useState)(null),j=Object(o.a)(u,2),b=j[0],x=j[1],p=Object(i.useContext)(s.b),g=Object(O.a)(m.a,!1),v=g.sendRequest,S=g.status,y=g.error;return"pending"===S?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):y?Object(f.jsx)("p",{className:"centered",children:y}):Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Add Cycle"}),Object(f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),v({cycle:{cycleid:b,status:"",stdid:""},token:p.token}),y||alert("Cycle Added"),c(!1)},children:[!l&&Object(f.jsx)(I.a,{scan:function(e){x(e),d(!0)}}),l&&Object(f.jsx)("h3",{children:b}),Object(f.jsxs)("div",{className:R.a.actions,children:[!n&&l&&Object(f.jsx)("button",{children:"Add Cycle"}),n&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},D=function(){var e=Object(i.useRef)(),t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useState)(!1),a=Object(o.a)(c,2),r=a[0],l=a[1],d=Object(i.useState)(!1),u=Object(o.a)(d,2),j=u[0],b=u[1],x=Object(O.a)(m.b,!1),p=x.sendRequest,g=x.status,v=x.error;return"pending"===g?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):v?Object(f.jsx)("p",{className:"centered",children:v}):Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Add Guard"}),Object(f.jsxs)("form",{onSubmit:function(c){c.preventDefault(),b(!0),p({student:{name:e.current.value,email:t.current.value,role:"guard",password:n.current.value},token:s.b.token}),v||alert("Guard Added"),b(!1)},children:[Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"Name",children:"Guard Name"}),Object(f.jsx)("input",{type:"Name",id:"Name",required:!0,ref:e})]}),Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Guard Email"}),Object(f.jsx)("input",{type:"userName",id:"userName",required:!0,ref:t})]}),Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"password",children:"Guard Password"}),Object(f.jsx)("input",{type:r?"text":"password",id:"password",required:!0,ref:n})]}),Object(f.jsx)("input",{type:"checkbox",onClick:function(){r&&l(!1),r||l(!0)}})," Show Password",Object(f.jsxs)("div",{className:R.a.actions,children:[!j&&Object(f.jsx)("button",{children:"Add Guard"}),j&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},T=function(){var e=Object(i.useContext)(s.b),t=Object(i.useRef)(),n=Object(i.useRef)(),c=Object(i.useRef)(),a=Object(i.useState)(!1),r=Object(o.a)(a,2),l=r[0],d=r[1],u=Object(i.useState)(!1),j=Object(o.a)(u,2),b=j[0],x=j[1],p=Object(O.a)(m.b,!1),g=p.sendRequest,v=p.status,S=p.error;if(b)return Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})});if("pending"===v)return Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})});if(S)return Object(f.jsx)("p",{className:"centered",children:S});return Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Add User"}),Object(f.jsxs)("form",{onSubmit:function(a){a.preventDefault(),x(!0),g({student:{name:t.current.value,rollno:"",branch:"",role:"student",email:n.current.value,password:c.current.value},token:e.token}),S||alert("Student Added"),x(!1)},children:[Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"Name",children:"Name"}),Object(f.jsx)("input",{type:"Name",id:"Name",required:!0,ref:t})]}),Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"userName",id:"userName",required:!0,ref:n})]}),Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:l?"text":"password",id:"password",required:!0,ref:c})]}),Object(f.jsx)("input",{type:"checkbox",onClick:function(){l&&d(!1),l||d(!0)}})," Show Password",Object(f.jsxs)("div",{className:R.a.actions,children:[!b&&Object(f.jsx)("button",{children:"Add Student"}),b&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},q=function(){var e=Object(i.useContext)(s.b),t=Object(i.useState)(!1),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(!1),l=Object(o.a)(r,2),d=l[0],u=l[1],j=Object(i.useState)(null),b=Object(o.a)(j,2),x=b[0],p=b[1],g=Object(O.a)(m.c,!1),v=g.sendRequest,S=g.status,y=g.error;return"pending"===S?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):y?Object(f.jsx)("p",{className:"centered",children:y}):Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Delete Cycle"}),Object(f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),a(!0),v({cycleid:x,token:e.token}),y||alert("Cycle Deleted"),a(!1)},children:[!d&&Object(f.jsx)(I.a,{scan:function(e){p(e),u(!0)}}),d&&Object(f.jsx)("h3",{children:x}),Object(f.jsxs)("div",{className:R.a.actions,children:[!c&&d&&Object(f.jsx)("button",{children:"Delete Cycle"}),c&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},F=function(){var e=Object(i.useContext)(s.b),t=Object(i.useRef)(),n=Object(i.useState)(!1),c=Object(o.a)(n,2),a=c[0],r=c[1],l=Object(O.a)(m.d,!1),d=l.sendRequest,u=l.status,j=l.error;return"pending"===u?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):j?Object(f.jsx)("p",{className:"centered",children:j}):Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Delete Guard"}),Object(f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(!0),d({student:{email:t.current.value},token:e.token}),j||alert("Guard Deleted"),r(!1)},children:[Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"Guard Email"}),Object(f.jsx)("input",{type:"userName",id:"userName",required:!0,ref:t})]}),Object(f.jsxs)("div",{className:R.a.actions,children:[!a&&Object(f.jsx)("button",{children:"Delete Guard"}),a&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},L=function(){var e=Object(i.useContext)(s.b),t=Object(i.useRef)(),n=Object(i.useState)(!1),c=Object(o.a)(n,2),a=c[0],r=c[1],l=Object(O.a)(m.d,!1),d=l.sendRequest,u=l.status,j=l.error;return a||"pending"===u?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):j?Object(f.jsx)("p",{className:"centered",children:j}):Object(f.jsxs)("section",{className:R.a.auth,children:[Object(f.jsx)("h1",{children:"Delete User"}),Object(f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),r(!0),d({student:{email:t.current.value},token:e.token}),j||alert("Student Deleted"),r(!1)},children:[Object(f.jsxs)("div",{className:R.a.control,children:[Object(f.jsx)("label",{htmlFor:"email",children:"User Email"}),Object(f.jsx)("input",{type:"userName",id:"userName",required:!0,ref:t})]}),Object(f.jsxs)("div",{className:R.a.actions,children:[!a&&Object(f.jsx)("button",{children:"Delete Student"}),a&&Object(f.jsx)("p",{children:"Sending Request...."})]})]})]})},P=n(19),G=function(e){return Object(f.jsx)("section",{children:Object(f.jsxs)("form",{children:[Object(f.jsxs)("div",{className:"centered",children:[Object(f.jsx)(P.a,{click:e.printadds,children:"Add User"}),Object(f.jsx)(P.a,{click:e.printdels,children:"Delete User"}),Object(f.jsx)(P.a,{click:e.printaddg,children:"Add Guard"}),Object(f.jsx)(P.a,{click:e.printdelg,children:"Delete Guard"})]}),Object(f.jsxs)("div",{className:"centered",children:[Object(f.jsx)(P.a,{click:e.printaddc,children:"Add Cycle"}),Object(f.jsx)(P.a,{click:e.printdelc,children:"Delete Cycle"})]})]})})},z=n(44),B=n.n(z),M=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!1),r=Object(o.a)(a,2),s=r[0],l=r[1],d=Object(i.useState)(!1),u=Object(o.a)(d,2),j=u[0],b=u[1],O=Object(i.useState)(!1),m=Object(o.a)(O,2),h=m[0],x=m[1],p=Object(i.useState)(!1),g=Object(o.a)(p,2),v=g[0],S=g[1],y=Object(i.useState)(!1),N=Object(o.a)(y,2),k=N[0],w=N[1];return Object(f.jsx)("div",{className:B.a.container,children:Object(f.jsxs)("div",{children:[n&&Object(f.jsx)(T,{}),s&&Object(f.jsx)(L,{}),j&&Object(f.jsx)(D,{}),h&&Object(f.jsx)(F,{}),v&&Object(f.jsx)(E,{}),k&&Object(f.jsx)(q,{}),Object(f.jsx)(G,{printadds:function(){n&&c(!1),n||(c(!0),l(!1),b(!1),x(!1),S(!1),w(!1))},printdels:function(){s&&l(!1),s||(c(!1),l(!0),b(!1),x(!1),S(!1),w(!1))},printaddg:function(){j&&b(!1),j||(c(!1),l(!1),b(!0),x(!1),S(!1),w(!1))},printdelg:function(){h&&x(!1),h||(c(!1),l(!1),b(!1),x(!0),S(!1),w(!1))},printaddc:function(){v&&S(!1),v||(c(!1),l(!1),b(!1),x(!1),S(!0),w(!1))},printdelc:function(){k&&w(!1),k||(c(!1),l(!1),b(!1),x(!1),S(!1),w(!0))}})]})})},U=n(45),J=n.n(U),K=function(e){return"Not Rented","rented"===e.status&&"Rented",Object(f.jsx)("li",{className:J.a.item,children:Object(f.jsx)("figure",{children:Object(f.jsxs)("blockcycle",{children:[Object(f.jsxs)("p",{children:["Cycle Id: ",e.id]}),Object(f.jsxs)("p",{children:["Name: ",e.stdname]})]})})})},H=n(46),Q=n.n(H),V=function(e){return 0===e.cycles.length?Object(f.jsx)(i.Fragment,{children:Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)("h1",{children:"No Cycles Rented"})})}):Object(f.jsx)(i.Fragment,{children:Object(f.jsx)("ul",{className:Q.a.list,children:e.cycles.map((function(e){return Object(f.jsx)(K,{stdid:e.stdid,id:e.cycleid,status:e.status,stdname:e.stdname},e.cycleid)}))})})},X=function(){var e=Object(i.useContext)(s.b),t=Object(i.useState)(!0),n=Object(o.a)(t,2),c=n[0],a=n[1],r=Object(O.a)(m.e,!1),l=r.sendRequest,d=r.status,u=r.data,j=r.error;return c&&(a(!1),l({token:e.token})),"pending"===d?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):j?Object(f.jsx)("p",{className:"centered",children:j}):Object(f.jsx)(i.Fragment,{children:Object(f.jsx)(V,{cycles:u})})};var Y=function(){var e=l.a.lazy((function(){return n.e(6).then(n.bind(null,73))})),t=l.a.lazy((function(){return n.e(3).then(n.bind(null,75))})),c=l.a.lazy((function(){return n.e(4).then(n.bind(null,76))})),a=l.a.lazy((function(){return n.e(5).then(n.bind(null,74))})),r=Object(i.useContext)(s.b),u=Object(i.useState)(!1),j=Object(o.a)(u,2),b=j[0],O=j[1],m=Object(i.useState)(!1),x=Object(o.a)(m,2),p=x[0],g=x[1],S=r.isLoggedIn;return Object(i.useEffect)((function(){S&&(O(!0),fetch("https://cycle-api.azurewebsites.net/users/login",{method:"POST",body:JSON.stringify({email:r.email,password:r.password}),headers:{"Content-Type":"application/json"}}).then((function(e){return O(!1),e.ok?e.json():(r.logout(),e.json().then((function(e){var t="Authentication Failed";throw e&&e.error&&e.error.message&&(O(!1),t=e.error.message),new Error(t)})))})).then((function(e){var t=new Date((new Date).getTime()+36e6);r.login(e,r.password,e.token,e._id,e.role,e.cycleid,t.toISOString())})).catch((function(e){alert(e.message)})))}),[S]),Object(i.useEffect)((function(){"admin"===r.role?g(!0):g(!1)}),[p,r.role,r]),b?Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}):Object(f.jsx)(_,{children:Object(f.jsx)(i.Suspense,{fallback:Object(f.jsx)("div",{className:"centered",children:Object(f.jsx)(h.a,{})}),children:Object(f.jsxs)(d.d,{children:[Object(f.jsxs)(d.b,{path:"/",exact:!0,children:[S&&Object(f.jsx)(d.a,{to:"/mainPage"}),!S&&Object(f.jsx)(d.a,{to:"/auth"})]}),Object(f.jsxs)(d.b,{path:"/signup",children:[S&&Object(f.jsx)(d.a,{to:"/mainPage"}),!S&&Object(f.jsx)(v,{})]}),Object(f.jsxs)(d.b,{path:"/auth",children:[S&&Object(f.jsx)(d.a,{to:"/mainPage"}),!S&&Object(f.jsx)(c,{})]}),Object(f.jsxs)(d.b,{path:"/mainPage",children:[S&&Object(f.jsx)(t,{}),!S&&Object(f.jsx)(d.a,{to:"/auth"})]}),Object(f.jsxs)(d.b,{path:"/rent",children:[S&&Object(f.jsx)(a,{}),!S&&Object(f.jsx)(d.a,{to:"/auth"})]}),Object(f.jsxs)(d.b,{path:"/admin",children:[S&&p&&Object(f.jsx)(M,{}),S&&!p&&Object(f.jsx)(d.a,{to:"/auth"}),!S&&!p&&Object(f.jsx)(d.a,{to:"/auth"})]}),Object(f.jsx)(d.b,{path:"/cycles",children:Object(f.jsx)(X,{})}),Object(f.jsx)(d.b,{path:"*",children:Object(f.jsx)(e,{})})]})})})};a.a.createRoot(document.getElementById("root")).render(Object(f.jsx)(s.a,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(Y,{})})}))},7:function(e,t,n){"use strict";var c=n(35),a=n.n(c),r=n(0);t.a=function(){return Object(r.jsx)("div",{className:a.a.spinner})}}},[[68,1,2]]]);
//# sourceMappingURL=main.bbcd96bd.chunk.js.map