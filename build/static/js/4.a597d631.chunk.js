(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{66:function(e,t,n){e.exports={auth:"AuthForm_auth__2ZSKH",control:"AuthForm_control__1evQ4",actions:"AuthForm_actions__25Vmz",toggle:"AuthForm_toggle__1Wxr6"}},72:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),s=n(4),o=n(5),i=n(66),a=n.n(i),u=n(0),l=function(){var e=Object(s.g)(),t=Object(r.useState)(!1),n=Object(c.a)(t,2),i=n[0],l=n[1],j=Object(r.useContext)(o.b),h=Object(r.useRef)(),d=Object(r.useRef)(),b=Object(r.useState)(!1),p=Object(c.a)(b,2),O=p[0],m=p[1];return Object(u.jsxs)("section",{className:a.a.auth,children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=h.current.value,c=d.current.value;m(!0),fetch("https://cycle-renter.azurewebsites.net//users/login",{method:"POST",body:JSON.stringify({email:n,password:c}),headers:{"Content-Type":"application/json"}}).then((function(e){return m(!1),e.ok?e.json():e.json().then((function(e){var t="Authentication Failed";throw e&&e.error&&e.error.message&&(m(!1),t=e.error.message),new Error(t)}))})).then((function(t){var n=new Date((new Date).getTime()+36e6);j.login(t,c,t.token,t._id,t.role,t.cycleid,n.toISOString()),e.replace("/")})).catch((function(e){alert(e.message)}))},children:[Object(u.jsxs)("div",{className:a.a.control,children:[Object(u.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(u.jsx)("input",{type:"userName",id:"userName",required:!0,ref:h})]}),Object(u.jsxs)("div",{className:a.a.control,children:[Object(u.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(u.jsx)("input",{type:i?"text":"password",id:"password",required:!0,ref:d})]}),Object(u.jsx)("input",{type:"checkbox",onClick:function(){i&&l(!1),i||l(!0)}})," Show Password",Object(u.jsxs)("div",{className:a.a.actions,children:[!O&&Object(u.jsx)("button",{children:"Login"}),O&&Object(u.jsx)("p",{children:"Sending Request...."})]})]}),Object(u.jsx)("div",{className:a.a.actions,children:Object(u.jsx)("button",{onClick:function(){e.push("/signup")},children:" Sign Up"})})]})};t.default=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l,{})})}}}]);
//# sourceMappingURL=4.a597d631.chunk.js.map