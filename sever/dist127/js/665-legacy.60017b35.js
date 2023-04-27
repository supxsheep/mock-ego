"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[665],{8158:function(t,e,s){s.d(e,{Z:function(){return u}});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-item"},[r("router-link",{attrs:{to:"/goodsdetail/"+t.goods.Id}},[r("div",{staticClass:"img-box"},[r("el-image",{attrs:{src:t.goods.imageUrl,fill:"",lazy:""}},[r("div",{staticClass:"img-box",attrs:{slot:"placeholder"},slot:"placeholder"},[r("img",{attrs:{width:"80%",src:s(459)}})])])],1),r("p",{staticClass:"title"},[r("strong",[t._v(t._s(t.goods.title))])]),r("div",{staticClass:"goods-info"},[r("p",{staticClass:"price"},[t._v("￥"+t._s(t.goods.priceStr))]),r("p",{staticClass:"mack",domProps:{innerHTML:t._s(t.goods.mack)}})])])],1)},i=[],o={name:"goods-item",props:["goods"]},a=o,n=s(1001),c=(0,n.Z)(a,r,i,!1,null,"496c8a9a",null),u=c.exports},2866:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.goods?s("div",{staticClass:"goods-detail"},[s("div",{staticClass:"separator-box"},[s("el-breadcrumb",{staticClass:"separator",attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:"/"}},[t._v("首页")]),s("el-breadcrumb-item",{attrs:{to:"/typelist/"+t.goods.type_one},nativeOn:{click:function(e){return t.typeOneClick(t.goods.type_one)}}},[t._v(t._s(t.goods.type_one))]),s("el-breadcrumb-item",[t._v(t._s(t.goods.type_two))])],1),s("div",{staticClass:"address-box"},[s("el-image",{staticClass:"img",attrs:{fill:"",src:t.goods.addressLogo}}),s("router-link",{attrs:{to:"/supplier/"+t.goods.supplier}},[t._v(t._s(t.goods.addressName)+"旗舰店")])],1)],1),s("div",{staticClass:"detail-box"},[t.goods.imgs?s("zoom-box",{attrs:{imgs:t.goods.imgs}}):t._e(),s("div",{staticClass:"goods-info"},[s("h3",[t._v(t._s(t.goods.title)+" "+t._s(t.goods.salePoint))]),s("p",{staticClass:"price"},[t._v("会员价：￥"+t._s(t.goods.priceStr))]),s("p",{staticClass:"supplier"},[t._v("制造商："+t._s(t.goods.supplier))]),s("p",{staticClass:"address"},[t._v("发货地："+t._s(t.address.province)+t._s(t.address.city)+t._s(t.address.district)+t._s(t.address.street))]),s("p",[s("el-input-number",{attrs:{min:1,max:100},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1),s("p",[s("el-button",{attrs:{type:"success"},on:{click:t.addCart}},[t._v("加入购物车")])],1)])],1),t.supplierList.length?s("div",{staticClass:"supplier-list"},[s("div",{staticClass:"recommend"},[t._m(0),s("router-link",{attrs:{to:"/supplier/"+t.goods.supplier}},[t._v("更多")])],1),s("div",{staticClass:"supplier-box"},t._l(t.supplierList,(function(t){return s("goods-item",{key:t.id,attrs:{goods:t}})})),1)]):t._e(),s("div",{staticClass:"goods-desc"},[s("el-tabs",{attrs:{type:"card"},model:{value:t.descName,callback:function(e){t.descName=e},expression:"descName"}},[s("el-tab-pane",{staticClass:"desc-img",attrs:{label:"商品详情",name:"detail"}},t._l(this.goods.descriptionImage,(function(t){return s("el-image",{key:t,staticClass:"img",attrs:{src:t}})})),1),s("el-tab-pane",{staticClass:"description",attrs:{label:"规格与包装",name:"description"}},t._l(this.goods.description,(function(e,r){return s("div",{key:r},[s("strong",[t._v(t._s(e.title))]),t._v(":"+t._s(e.text)+" "),s("el-divider")],1)})),0),s("el-tab-pane",{staticClass:"comment",attrs:{label:"商品评价",name:"comment"}},t._l(t.goods.comment,(function(e,r){return s("div",{key:r,attrs:{comment:e}},[s("div",{staticClass:"comment-item"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"avatar"},[s("el-avatar",{attrs:{size:"large",src:e.userPic}}),s("p",{staticClass:"username"},[t._v(t._s(e.userName))])],1),s("p",{staticClass:"vip"},[t._v(t._s(e.vip)+"级会员")])]),s("div",{staticClass:"comment-info"},[s("div",{staticClass:"comment"},[t._v(t._s(e.text))]),s("p",{staticClass:"product"},[t._v(t._s(e.product))]),s("p",{staticClass:"time"},[t._v(t._s(e.time))])])]),s("el-divider")],1)})),0)],1)],1)]):t._e()},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("strong",[t._v("店长推荐")])])}],o=s(6198),a=(s(2526),s(1817),s(8975),s(2767)),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"zoom-box"},[s("div",{ref:"zoomBox",staticClass:"zoom-img"},[s("div",{ref:"smallBox",staticClass:"small-box",on:{mousemove:function(e){return t.setZoomImg(e)}}},[s("img",{attrs:{src:t.currentImg}}),s("div",{ref:"mask",staticClass:"mask"})]),s("div",{staticClass:"big-box"},[s("img",{ref:"bigImg",attrs:{src:t.currentImg}})])]),s("div",{staticClass:"img-list"},t._l(t.imgs,(function(e,r){return s("div",{key:r,class:{"img-item":!0,active:t.currentImg==e},on:{mouseenter:function(s){t.currentImg=e}}},[s("el-image",{attrs:{fill:"",src:e}})],1)})),0)])},c=[],u={name:"zoom-box",props:["imgs"],data:function(){return{currentImg:this.imgs[1],lastIndex:1}},watch:{imgs:function(t){this.currentImg=t[1]}},methods:{setZoomImg:function(t){var e=this.$refs.zoomBox,s=this.$refs.smallBox,r=this.$refs.mask,i=this.$refs.bigImg,o=t.pageX-r.offsetWidth/2-e.offsetLeft,a=t.pageY-r.offsetHeight/2-e.offsetTop,n=i.offsetHeight/s.offsetHeight,c=0,u=0,d=s.clientWidth-r.offsetWidth,A=s.clientHeight-r.offsetHeight;o=o<c?c:o,a=a<u?u:a,o=o>d?d:o,a=a>A?A:a,r.style.top=a+"px",r.style.left=o+"px",i.style.left=-r.offsetLeft*n+"px",i.style.top=-r.offsetTop*n+"px"}}},d=u,A=s(1001),l=(0,A.Z)(d,n,c,!1,null,"0d9e18cd",null),p=l.exports,m=s(8158),g={name:"goods-detail",components:{ZoomBox:p,GoodsItem:m.Z},data:function(){return{count:1,goods:null,supplierList:[],address:{},supplierName:"recommond",descName:"detail"}},beforeRouteEnter:function(t,e,s){s((function(e){e.getGoods(t),e.descName="detail",e.count=1}))},beforeRouteUpdate:function(t,e,s){this.getGoods(t),this.descName="detail",this.count=1,s()},methods:{addCart:function(){var t=this;return(0,o.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("addCart",{goodId:t.goods.Id,count:t.count});case 2:case"end":return e.stop()}}),e)})))()},getGoods:function(t){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,a.dp)({goodId:t.params.goodsId});case 2:r=s.sent,e.goods=r[0],e.goods.address=JSON.parse(e.goods.address),e.goods.comment=JSON.parse(e.goods.comment),e.goods.descriptionImage=JSON.parse(e.goods.descriptionImage),e.goods.description=JSON.parse(e.goods.description),e.goods.imgs=JSON.parse(e.goods.imgs),e.getSupplierList(e.goods.supplier),e.getAddress(e.goods);case 11:case"end":return s.stop()}}),s)})))()},getSupplierList:function(t){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,a.z7)({supplier:t});case 2:r=s.sent,e.supplierList=r;case 4:case"end":return s.stop()}}),s)})))()},getAddress:function(t){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function s(){var r;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,(0,a.Ri)({lat:t.address.latitude,lng:t.address.longitude});case 2:r=s.sent,e.address=r.result.addressComponent;case 4:case"end":return s.stop()}}),s)})))()},typeOneClick:function(t){var e=this.$store.state.typeOneList.indexOf(t);this.$store.commit("SET_TYPE_ONE_INDEX",e)}}},f=g,v=(0,A.Z)(f,r,i,!1,null,"5d152533",null),C=v.exports},2767:function(t,e,s){s.d(e,{ty:function(){return o},d7:function(){return a},kf:function(){return n},eN:function(){return c},z7:function(){return u},GQ:function(){return d},dp:function(){return A},Ri:function(){return l}});var r=s(6198),i=(s(8975),s(1249),s(1539),s(4062)),o=function(){var t=(0,r.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,i.a)("/banner");case 2:return e=t.sent,e=e.map((function(t){return"http://127.0.0.1:3000"+t})),t.abrupt("return",Promise.resolve(e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){return(0,i.a)("/getTypeOne")},n=function(t){return(0,i.a)("/getTypeTwo",t)},c=function(t){return(0,i.a)("/goodList",t)},u=function(t){return(0,i.a)("/supplierList",t)},d=function(t){return(0,i.a)("/search",t)},A=function(t){return(0,i.a)("/detail",t)},l=function(t){return(0,i.a)("/location",t)}},459:function(t){t.exports="data:image/gif;base64,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"}}]);
//# sourceMappingURL=665-legacy.60017b35.js.map