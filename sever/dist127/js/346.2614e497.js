"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[346],{1346:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"regist"},[t("el-form",{ref:"registFrom",staticClass:"form",attrs:{model:e.registFrom,"status-icon":"",rules:e.rules}},[t("el-form-item",{attrs:{prop:"userName"}},[t("el-input",{attrs:{type:"text",autocomplete:"off",placeholder:"用户名"},model:{value:e.registFrom.userName,callback:function(r){e.$set(e.registFrom,"userName",r)},expression:"registFrom.userName"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-user"})])],2)],1),t("el-form-item",{attrs:{prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"密码"},model:{value:e.registFrom.password,callback:function(r){e.$set(e.registFrom,"password",r)},expression:"registFrom.password"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-key"})])],2)],1),t("el-form-item",{attrs:{prop:"repassword"}},[t("el-input",{attrs:{type:"password",autocomplete:"off",placeholder:"确认密码"},model:{value:e.registFrom.repassword,callback:function(r){e.$set(e.registFrom,"repassword",r)},expression:"registFrom.repassword"}},[t("template",{slot:"prepend"},[t("i",{staticClass:"el-icon-key"})])],2)],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("registFrom")}}},[e._v("注册")]),t("el-button",{on:{click:function(r){return e.resetForm("registFrom")}}},[e._v("重置")])],1)],1)],1)},o=[],a=(t(1703),t(6165)),i={name:"regist",data(){var e=(e,r,t)=>{""===r?t(new Error("请输入用户名")):/^[\w\u4e00-\u9fa5]{2,12}$/.test(r)?t():t(new Error("只能包含2-12位字母、数字和汉字"))},r=(e,r,t)=>{""===r?t(new Error("请输入密码")):/^\w{6,18}$/.test(r)?t():t(new Error("只能包含数字、字母、下划线6-18位"))},t=(e,r,t)=>{""===r?t(new Error("请再次输入密码")):r!==this.registFrom.password?t(new Error("两次输入密码不一致!")):t()};return{registFrom:{userName:"",password:"",repassword:""},rules:{userName:[{validator:e,trigger:"blur"}],password:[{validator:r,trigger:"blur"}],repassword:[{validator:t,trigger:"blur"}]}}},deactivated(){this.$refs["registFrom"].resetFields()},methods:{submitForm(e){this.$refs[e].validate((async e=>{if(!e)return this.$message.warning("账号或者密码不符合要求"),!1;{let e=await(0,a.P)(this.registFrom);1==e.code?(this.$message.success(e.data),this.$router.replace("/login")):this.$message.warning(e.data)}}))},resetForm(e){this.$refs[e].resetFields()}}},l=i,n=t(1001),m=(0,n.Z)(l,s,o,!1,null,"6f311ce8",null),p=m.exports}}]);
//# sourceMappingURL=346.2614e497.js.map