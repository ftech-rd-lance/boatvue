(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b406b34","chunk-7884cf7c"],{"13b1":function(e,t,s){"use strict";s("cef3")},"389a":function(e,t,s){},"3f2c":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-container"},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-carousel",{attrs:{interval:5e3,arrow:"never",autoplay:"true","indicator-position":"none",height:"100vh"}},e._l(e.buildingImg,(function(e){return s("el-carousel-item",{key:e},[s("el-image",{staticClass:"buildingImg",attrs:{fit:"fill",src:e,alt:"building image"}})],1)})),1)],1),s("el-col",{staticClass:"right-side",attrs:{span:12}},[s("div",{staticClass:"logo-container"},[s("img",{staticClass:"logoImg",attrs:{src:e.logoImg}})]),s("h2",{staticClass:"title"},[e._v("管理者頁面")]),s("el-col",{staticClass:"button-area"},[s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:e.search}},[e._v("查詢")]),s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:e.drawing}},[e._v("抽籤")]),s("el-button",{staticClass:"button-type",attrs:{plain:""},on:{click:e.result}},[e._v("抽籤"),s("br"),e._v("結果")])],1)],1)],1)],1)},n=[],c="/boatvue/",i={name:"Login",data:function(){return{loginType:0,buildingImg:["".concat(c,"assets/image/building/1.jpg"),"".concat(c,"assets/image/building/2.jpg"),"".concat(c,"assets/image/building/3.jpg"),"".concat(c,"assets/image/building/4.jpg"),"".concat(c,"assets/image/building/5.jpg"),"".concat(c,"assets/image/building/6.jpg"),"".concat(c,"assets/image/building/7.jpg"),"".concat(c,"assets/image/building/8.jpg")],logoImg:"".concat(c,"assets/image/logo.png")}},methods:{search:function(){this.$router.push("/adminCheck")},drawing:function(){this.$router.push("/drawing")},result:function(){this.$router.push("/winner")}}},r=i,o=(s("f889"),s("13b1"),s("2877")),l=Object(o["a"])(r,a,n,!1,null,"11c143c8",null);t["default"]=l.exports},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df48","./fa.js":"8df48","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b46","./gd.js":"f6b46","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e9","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e9","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"7db0":function(e,t,s){"use strict";var a=s("23e7"),n=s("b727").find,c=s("44d2"),i=s("ae40"),r="find",o=!0,l=i(r);r in[]&&Array(1)[r]((function(){o=!1})),a({target:"Array",proto:!0,forced:o||!l},{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),c(r)},9406:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"dashboard-container"},[s(e.currentRole,{tag:"component",on:{isLoading:e.isLoading}})],1)},n=[],c=s("5530"),i=(s("caad"),s("2532"),s("2f62")),r=s("3f2c"),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("div",{staticClass:"header"},[s("div",{staticClass:"logo-container",staticStyle:{"margin-left":"-20px"}},[s("img",{staticClass:"logo",attrs:{src:e.logo,alt:"logo"}})]),s("div",{staticStyle:{"margin-left":"20px"}},[s("p",{staticClass:"general-font-size"},[e._v("台船船佳堡員工認購網站 姓名:"+e._s(e.name)+"，身分證字號:"+e._s(e.user_id))])])]),s("div",{staticClass:"info"},[s("p",{staticClass:"general-font-size"},[e._v("總持有籤數："+e._s(e.lotteryCount)+"支")]),s("p",{staticClass:"note general-font-size",staticStyle:{"margin-left":"20px"}},[e._v("※ 投遞順序為候補順序")])]),s("el-table",{staticClass:"tableData",staticStyle:{width:"1171px","font-size":"20px"},attrs:{data:e.list,border:"","cell-style":{"text-align":"center"}}},[s("el-table-column",{attrs:{prop:"number",label:"持有籤號",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"floorRoom",label:"投遞樓層與房型",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{label:"操作",width:"130","header-align":"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[s("el-button",{staticClass:"modify-button",attrs:{type:"text",disabled:0==a.can_use},on:{click:function(t){return e.modifyRoom(a)}}},[e._v("修改")])]}}])}),s("el-table-column",{attrs:{prop:"drawing1",label:"第一次投籤",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"time1",label:"時間",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"seq1",label:"投籤順序",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"drawing2",label:"第二次投籤",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"time2",label:"時間",width:"130","header-align":"center"}}),s("el-table-column",{attrs:{prop:"seq2",label:"投籤順序",width:"130","header-align":"center"}})],1),e._m(0)],1)},l=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"info2"},[s("p",{staticClass:"note general-font-size"},[e._v("※ 每個序號僅可修改一次")]),s("p",{staticClass:"note general-font-size"},[e._v("※ 可投籤時間：3/1 AM 00:00~3/31 PM 11:59")])])}],d=s("c7eb"),b=s("1da1"),f=(s("d3b7"),s("159b"),s("99af"),s("7db0"),s("b0c0"),s("c1df")),u=s.n(f),j=s("c24f"),m="/boatvue/",g={name:"userDashboard",data:function(){return{list:[],name:"",user_id:localStorage.getItem("username"),logo:"".concat(m,"assets/image/logo.png"),loginList:[],lotteryCount:0}},methods:{modifyRoom:function(e){this.$router.push({path:"/drawingNumber",query:{number:e.number,ticket_id:e.ticket_id}}),console.log("首頁 籤號",e.number,"籤號id",e.ticket_id)},getList:function(){var e=this;return Object(b["a"])(Object(d["a"])().mark((function t(){var s,a,n,i;return Object(d["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(j["e"])();case 2:s=t.sent,a=s.data.list,n=[],i={},a.forEach((function(e){var t=e.number,s=e.floor&&e.type?"".concat(e.floor).concat(e.type):"";if(i[t]){var a=n.find((function(e){return e.number===t}));a&&(a.floorRoom="".concat(e.floor).concat(e.type),a.drawing2=a.floorRoom,a.time2=u()(e.created_at).format("YYYY-MM-DD \n HH:mm:ss"),a.seq2=e.seq,a.can_use=e.can_use)}else{var r=e.floor&&e.type?"".concat(e.floor).concat(e.type):"",o=e.created_at?u()(e.created_at).format("YYYY-MM-DD \n HH:mm:ss"):"",l=e.seq,d=e.can_use;n.push(Object(c["a"])(Object(c["a"])({},e),{},{drawing1:r,time1:o,seq1:l,floorRoom:s,can_use:d})),i[t]=!0}})),e.list=n,e.name=e.list[0].name,e.lotteryCount=s.data.count[0].total;case 10:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.getList()}},h=g,p=(s("f3d7"),s("2877")),v=Object(p["a"])(h,o,l,!1,null,"7a2a3794",null),y=v.exports,k={name:"Dashboard",components:{adminDashboard:r["default"],editorDashboard:y},data:function(){return{loading:!1,currentRole:"editorDashboard"}},computed:Object(c["a"])({},Object(i["b"])(["roles"])),created:function(){this.roles.includes("admin")&&(this.currentRole="adminDashboard")},methods:{isLoading:function(e){this.loading=e}}},w=k,_=Object(p["a"])(w,a,n,!1,null,null,null);t["default"]=_.exports},"9b51":function(e,t,s){},cef3:function(e,t,s){},f3d7:function(e,t,s){"use strict";s("389a")},f889:function(e,t,s){"use strict";s("9b51")}}]);