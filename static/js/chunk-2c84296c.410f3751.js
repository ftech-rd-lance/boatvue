(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c84296c"],{"3f2c":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"login-container"},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-carousel",{attrs:{interval:5e3,arrow:"never",autoplay:"true","indicator-position":"none",height:"100vh"}},t._l(t.buildingImg,(function(t){return s("el-carousel-item",{key:t},[s("el-image",{staticClass:"buildingImg",attrs:{fit:"fill",src:t,alt:"building image"}})],1)})),1)],1),s("el-col",{staticClass:"right-side",attrs:{span:12}},[s("div",{staticClass:"logo-container"},[s("img",{staticClass:"logoImg",attrs:{src:t.logoImg}})]),s("h2",{staticClass:"title"},[t._v("管理者頁面")]),s("el-col",{staticClass:"button-area"},[s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:t.search}},[t._v("查詢")]),s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:t.drawing}},[t._v("抽籤")]),s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:t.result}},[t._v("抽籤"),s("br"),t._v("結果")])],1)],1)],1)],1)},a=[],n={name:"Login",data:function(){return{loginType:0,buildingImg:["/assets/image/building/1.jpg","/assets/image/building/2.jpg","/assets/image/building/3.jpg","/assets/image/building/4.jpg","/assets/image/building/5.jpg","/assets/image/building/6.jpg","/assets/image/building/7.jpg","/assets/image/building/8.jpg"],logoImg:"/assets/image/logo.png"}},methods:{search:function(){this.$router.push("/adminCheck")},drawing:function(){this.$router.push("/drawing")},result:function(){this.$router.push("/winner")}}},l=n,c=(s("cc19"),s("b803"),s("2877")),o=Object(c["a"])(l,e,a,!1,null,"29ef4c32",null);i["default"]=o.exports},"732e":function(t,i,s){},b803:function(t,i,s){"use strict";s("de9f")},cc19:function(t,i,s){"use strict";s("732e")},de9f:function(t,i,s){}}]);