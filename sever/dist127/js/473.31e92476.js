"use strict";(self["webpackChunkvue_app"]=self["webpackChunkvue_app"]||[]).push([[473],{473:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-view"},[t.cartList.length?s("div",[s("el-table",{ref:"multipleTable",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:t.cartList},on:{"selection-change":t.selectionChange}},[s("el-table-column",{attrs:{type:"selection",width:"100"}}),s("el-table-column",{attrs:{label:"商品",width:"400"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("router-link",{staticClass:"goods",attrs:{to:"/goodsdetail/"+e.row.Id}},[s("el-image",{staticClass:"img",attrs:{fit:"fill",src:e.row.imageUrl}}),s("div",{staticClass:"info"},[s("p",[s("strong",{staticClass:"ellipsis2"},[t._v(t._s(e.row.title)+" "+t._s(e.row.salePoint))])]),s("p",{domProps:{innerHTML:t._s(e.row.mack)}})])],1)]}}])}),s("el-table-column",{attrs:{label:"单价",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("price")(e.row.priceStr)))]}}])}),s("el-table-column",{attrs:{label:"数量",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("cart-number",{key:e.row.Id,attrs:{goods:e.row},on:{countUpdate:function(e){return t.resetTotalPrice(t.selectionList)}}})]}}])}),s("el-table-column",{attrs:{label:"小结",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("price")(e.row.priceStr*e.row.count)))]}}])}),s("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[s("el-button",{attrs:{type:"danger",plain:"",icon:"el-icon-delete"},on:{click:function(s){return t.dialogShowClick(e.row)}}},[t._v("删除")])]}}])})],1),s("div",{staticClass:"total-box"},[s("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.selectAll},model:{value:t.isSelectedAll,callback:function(e){t.isSelectedAll=e},expression:"isSelectedAll"}},[t._v("全选")]),s("div",{staticClass:"settle-accounts"},[s("span",{staticClass:"price"},[t._v("总价: "),s("strong",[t._v(t._s(t._f("price")(t.totalPrice)))])]),s("el-button",{staticClass:"settle-btn",attrs:{type:"danger"}},[t._v("结算")])],1)],1)],1):s("div",{staticClass:"cart-empty-box"},[s("i",{staticClass:"el-icon-shopping-cart-2",staticStyle:{"font-size":"60px"}}),s("div",[s("p",[t._v("购物车空空的哦~，去看看心仪的商品吧~")]),s("router-link",{staticStyle:{color:"red"},attrs:{to:"/"}},[t._v("去购物 "),s("i",{staticClass:"el-icon-arrow-right"})])],1)]),s("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"20%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[s("span",[t._v("确定要删除这个商品吗?")]),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:t.cancelBtnClick}},[t._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:t.delBtnClick}},[t._v("确 定")])],1)])],1)},l=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-number"},[s("el-input-number",{attrs:{min:1,max:100,size:"mini"},on:{change:t.countChange},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}})],1)},o=[],n=s(2196),c=s.n(n),r={name:"cart-number",props:["goods"],data(){return{count:this.goods.count}},methods:{countChange(t){this.updateCartDebounce(this,t)},updateCartDebounce:c().debounce((async(t,e)=>{await t.$store.dispatch("updateCart",{goods:t.goods,count:e}),t.$emit("countUpdate")}),1e3)}},u=r,d=s(1001),h=(0,d.Z)(u,a,o,!1,null,"1be7cbb2",null),p=h.exports,g={name:"cart-view",components:{CartNumber:p},data(){return{dialogVisible:!1,goods:{},totalPrice:0,isSelectedAll:!1,isIndeterminate:!1,selectionList:[]}},computed:{cartList(){return this.$store.getters.cartList}},activated(){},deactivated(){this.isSelectedAll=!1},methods:{async getCartList(){await this.$store.dispatch("getCartList")},resetTotalPrice(t){this.totalPrice=t.reduce(((t,e)=>t+e.count*e.priceStr),0)},selectAll(){this.isSelectedAll?this.$refs.multipleTable.toggleAllSelection():this.$refs.multipleTable.clearSelection()},selectionChange(t){this.selectionList=t,this.isSelectedAll=t.length==this.cartList.length,this.isIndeterminate=t.length>0&&t.length<this.cartList.length,this.resetTotalPrice(t)},dialogShowClick(t){this.dialogVisible=!0,this.goods=t},cancelBtnClick(){this.dialogVisible=!1,this.goods={}},async delBtnClick(){this.dialogVisible=!1,await this.$store.dispatch("delCart",this.goods)},countChange(){this.resetTotalPrice(this.selectionList)}}},b=g,f=(0,d.Z)(b,i,l,!1,null,"5a9e3af8",null),m=f.exports}}]);
//# sourceMappingURL=473.31e92476.js.map