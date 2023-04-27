"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[359],{8359:function(t,e,i){i.r(e),i.d(e,{default:function(){return v}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-view"},[t.cartList.length?i("div",[i("el-table",{ref:"multipleTable",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.cartList},on:{"selection-change":t.selectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"100"}}),i("el-table-column",{attrs:{label:"商品",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("router-link",{staticClass:"goods",attrs:{to:"/goodsdetail/"+e.row.Id}},[i("el-image",{staticClass:"img",attrs:{fit:"fill",src:e.row.imageUrl}}),i("div",{staticClass:"info"},[i("p",[i("strong",{staticClass:"ellipsis2"},[t._v(t._s(e.row.title)+" "+t._s(e.row.salePoint))])]),i("p",{domProps:{innerHTML:t._s(e.row.mack)}})])],1)]}}])}),i("el-table-column",{attrs:{label:"单价",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("price")(e.row.priceStr)))]}}])}),i("el-table-column",{attrs:{label:"数量",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("cart-number",{key:e.row.Id,attrs:{goods:e.row},on:{countUpdate:function(e){return t.resetTotalPrice(t.selectionList)}}})]}}])}),i("el-table-column",{attrs:{label:"小结",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("price")(e.row.priceStr*e.row.count)))]}}])}),i("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete"},on:{click:function(i){return t.dialogShowClick(e.row)}}},[t._v("删除")])]}}])})],1),i("div",{staticClass:"total-box"},[i("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.selectAll},model:{value:t.isSelectedAll,callback:function(e){t.isSelectedAll=e},expression:"isSelectedAll"}},[t._v("全选")]),i("div",{staticClass:"settle-accounts"},[i("span",{staticClass:"price"},[t._v("总价: "),i("strong",[t._v(t._s(t._f("price")(t.totalPrice)))])]),i("el-button",{staticClass:"settle-btn",attrs:{type:"danger"}},[t._v("结算")])],1)],1)],1):i("div",{staticClass:"cart-empty-box"},[i("i",{staticClass:"el-icon-shopping-cart-2",staticStyle:{"font-size":"60px"}}),i("div",[i("p",[t._v("购物车空空的哦~，去看看心仪的商品吧~")]),i("router-link",{staticStyle:{color:"red"},attrs:{to:"/"}},[t._v("去购物 "),i("i",{staticClass:"el-icon-arrow-right"})])],1)]),i("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("span",[t._v("确定要删除这个商品吗?")]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancelBtnClick}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.delBtnClick}},[t._v("确 定")])],1)])],1)},s=[],l=i(6198),o=(i(8975),i(1539),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cart-number"},[i("el-input-number",{attrs:{min:1,max:100,size:"mini"},on:{change:t.countChange},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1)}),a=[],r=i(2196),c=i.n(r),u={name:"cart-number",props:["goods"],data:function(){return{count:this.goods.count}},methods:{countChange:function(t){this.updateCartDebounce(this,t)},updateCartDebounce:c().debounce(function(){var t=(0,l.Z)(regeneratorRuntime.mark((function t(e,i){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("updateCart",{goods:e.goods,count:i});case 2:e.$emit("countUpdate");case 3:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),1e3)}},d=u,p=i(1001),h=(0,p.Z)(d,o,a,!1,null,"1be7cbb2",null),f=h.exports,g={name:"cart-view",components:{CartNumber:f},data:function(){return{dialogVisible:!1,goods:{},totalPrice:0,isSelectedAll:!1,isIndeterminate:!1,selectionList:[]}},computed:{cartList:function(){return this.$store.getters.cartList}},deactivated:function(){this.isSelectedAll=!1},methods:{resetTotalPrice:function(t){this.totalPrice=t.reduce((function(t,e){return t+e.count*e.priceStr}),0)},selectAll:function(){this.isSelectedAll?this.$refs.multipleTable.toggleAllSelection():this.$refs.multipleTable.clearSelection()},selectionChange:function(t){this.selectionList=t,this.isSelectedAll=t.length==this.cartList.length,this.isIndeterminate=t.length>0&&t.length<this.cartList.length,this.resetTotalPrice(t)},dialogShowClick:function(t){this.dialogVisible=!0,this.goods=t},cancelBtnClick:function(){this.dialogVisible=!1,this.goods={}},delBtnClick:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.dialogVisible=!1,e.next=3,t.$store.dispatch("delCart",t.goods);case 3:case"end":return e.stop()}}),e)})))()},countChange:function(){this.resetTotalPrice(this.selectionList)}}},b=g,m=(0,p.Z)(b,n,s,!1,null,"6557ef24",null),v=m.exports}}]);
//# sourceMappingURL=359-legacy.7fa7fff7.js.map