(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[874],{8158:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"goods-item"},[n("router-link",{attrs:{to:"/goodsdetail/"+t.goods.Id}},[n("div",{staticClass:"img-box"},[n("el-image",{attrs:{src:t.goods.imageUrl,fill:"",lazy:""}},[n("div",{staticClass:"img-box",attrs:{slot:"placeholder"},slot:"placeholder"},[n("img",{attrs:{width:"80%",src:r(459)}})])])],1),n("p",{staticClass:"title"},[n("strong",[t._v(t._s(t.goods.title))])]),n("div",{staticClass:"goods-info"},[n("p",{staticClass:"price"},[t._v("￥"+t._s(t.goods.priceStr))]),n("p",{staticClass:"mack",domProps:{innerHTML:t._s(t.goods.mack)}})])])],1)},o=[],i={name:"goods-item",props:["goods"]},a=i,s=r(1001),A=(0,s.Z)(a,n,o,!1,null,"496c8a9a",null),u=A.exports},2874:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return w}});var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"goods-info"},[t.bannerList.length?r("div",{staticClass:"banner"},[r("el-carousel",t._l(t.bannerList,(function(t){return r("el-carousel-item",{key:t},[r("el-image",{attrs:{src:t}})],1)})),1)],1):t._e(),t.goodsList.length?r("div",{staticClass:"goods-list"},t._l(t.goodsList,(function(t){return r("goods-item",{key:t.id,attrs:{goods:t}})})),1):t._e()])},o=[];function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t){if(Array.isArray(t))return i(t)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function s(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r(7042),r(8309),r(4916),r(7601);function A(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}r(1703);function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function c(t){return a(t)||s(t)||A(t)||u()}var m=r(6198),g=(r(8975),r(8158)),d=r(2767),f={name:"home",components:{GoodsItem:g.Z},data:function(){return{bannerList:[],page:0,goodsList:[],isLoadmore:!1}},created:function(){this.getBanner(),this.getGoodsList(),document.addEventListener("scroll",this.loadmoreList)},beforeRouteLeave:function(t,e,r){document.removeEventListener("scroll",this.loadmoreList),r()},methods:{getBanner:function(){var t=this;return(0,m.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:setTimeout((0,m.Z)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ty)();case 2:r=e.sent,t.bannerList=r;case 4:case"end":return e.stop()}}),e)}))),1e3*Math.random());case 1:case"end":return e.stop()}}),e)})))()},getGoodsList:function(){var t=this;return(0,m.Z)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.page++,t.isLoadmore=!0,e.next=4,(0,d.eN)({page:t.page});case 4:n=e.sent,(r=t.goodsList).push.apply(r,c(n)),t.isLoadmore=!1;case 7:case"end":return e.stop()}}),e)})))()},loadmoreList:function(){var t=document.documentElement.scrollHeight,e=document.documentElement.clientHeight,r=document.scrollingElement.scrollTop;e+r+800>=t&&!this.isLoadmore&&this.getGoodsList()}}},p=f,l=r(1001),h=(0,l.Z)(p,n,o,!1,null,"56c794e2",null),w=h.exports},1038:function(t,e,r){var n=r(2109),o=r(8457),i=r(7072),a=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:o})},2767:function(t,e,r){"use strict";r.d(e,{ty:function(){return i},d7:function(){return a},kf:function(){return s},eN:function(){return A},z7:function(){return u},GQ:function(){return c},dp:function(){return m},Ri:function(){return g}});var n=r(6198),o=(r(8975),r(1249),r(1539),r(4062)),i=function(){var t=(0,n.Z)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.a)("/banner");case 2:return e=t.sent,e=e.map((function(t){return t})),t.abrupt("return",Promise.resolve(e));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),a=function(){return(0,o.a)("/getTypeOne")},s=function(t){return(0,o.a)("/getTypeTwo",t)},A=function(t){return(0,o.a)("/goodList",t)},u=function(t){return(0,o.a)("/supplierList",t)},c=function(t){return(0,o.a)("/search",t)},m=function(t){return(0,o.a)("/detail",t)},g=function(t){return(0,o.a)("/location",t)}},459:function(t){"use strict";t.exports="data:image/gif;base64,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"}}]);
//# sourceMappingURL=874-legacy.cd1ec277.js.map