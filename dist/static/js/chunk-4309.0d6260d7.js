(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4309"],{c11S:function(e,t,o){"use strict";var i=o("gTgX");o.n(i).a},gTgX:function(e,t,o){},ntYl:function(e,t,o){"use strict";o.r(t);var i=o("Yfch"),r=o("t3Un");function n(e){return Object(r.a)({url:"/addUserLog",method:"post",data:e})}var s={name:"Login",data:function(){var e=function(e,t,o){Object(i.b)(t.toLowerCase())?o():o(new Error("Please enter the correct user email, e.g. xxx@dell.com"))};return{loginForm:{username:"",password:""},loginRules:{username:[{required:!0,trigger:"blur",validator:e}],password:[{required:!0,trigger:"blur",validator:function(e,t,o){t.length<5?o(new Error("The password can not be less than 5 digits")):o()}}]},visitorLoginForm:{visitorUsername:""},visitorLoginRules:{visitorUsername:[{required:!0,trigger:"blur",validator:e}]},loading:!1,pwdType:"password",showDialog:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},mounted:function(){""===this.loginForm.username?this.$refs.username.focus():""===this.loginForm.password&&this.$refs.password.focus()},methods:{showPwd:function(){var e=this;"password"===this.pwdType?this.pwdType="":this.pwdType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleLogin:function(){var e=this;this.$refs.loginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("Login",e.loginForm).then(function(){e.loading=!1;var t={email:"",role:""};t.email=e.loginForm.username,n(t).then(function(t){e.$router.push({path:e.redirect||"/"})}).catch(function(t){e.$message.error(t)})}).catch(function(){e.loading=!1})})},handleVisitorLogin:function(){var e=this;this.$refs.visitorLoginForm.validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$store.dispatch("VisitorLogin").then(function(){e.showDialog=!1;var t={email:"",role:""};t.email=e.visitorLoginForm.visitorUsername,t.role="visitor",n(t).then(function(t){e.$router.push({path:e.redirect||"/"})}).catch(function(t){e.$message.error(t)})})})}}},a=(o("c11S"),o("tfCo"),o("KHd+")),l=Object(a.a)(s,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"login-container"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",[o("h3",{staticClass:"title"},[e._v("Dell X-NUDD Tracker System")])]),e._v(" "),o("el-form-item",{attrs:{prop:"username"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),o("el-input",{ref:"username",attrs:{name:"username",type:"text","auto-complete":"on",placeholder:"email"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"password"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),o("el-input",{ref:"password",attrs:{type:e.pwdType,name:"password","auto-complete":"on",placeholder:"default password: 12345"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleLogin(t):null}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}}),e._v(" "),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.pwdType?"eye":"eye-open"}})],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"48%"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e._v("Sign in")]),e._v(" "),o("el-button",{staticStyle:{width:"48%"},attrs:{type:"primary"},on:{click:function(t){e.showDialog=!0}}},[e._v("Visitor Login")])],1)],1),e._v(" "),o("div",{staticClass:"visitorLogin-container"},[o("el-dialog",{attrs:{visible:e.showDialog,title:"Visitor Login",width:"40%"},on:{"update:visible":function(t){e.showDialog=t}}},[e._v("\n      Please input your Email Address below\n      "),o("br"),e._v(" "),o("br"),e._v(" "),o("el-form",{ref:"visitorLoginForm",attrs:{model:e.visitorLoginForm,rules:e.visitorLoginRules,"auto-complete":"on","label-position":"left"}},[o("el-form-item",{attrs:{prop:"visitorUsername"}},[o("el-input",{attrs:{type:"text","auto-complete":"on",placeholder:"email"},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.handleVisitorLogin(t):null}},model:{value:e.visitorLoginForm.visitorUsername,callback:function(t){e.$set(e.visitorLoginForm,"visitorUsername",t)},expression:"visitorLoginForm.visitorUsername"}})],1)],1),e._v(" "),o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleVisitorLogin(t)}}},[e._v("Sign in ")])],1)],1)])},[],!1,null,"27f90812",null);l.options.__file="index.vue";t.default=l.exports},tfCo:function(e,t,o){"use strict";var i=o("yRo+");o.n(i).a},"yRo+":function(e,t,o){}}]);