(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fba5"],{"60Md":function(e,t,l){"use strict";l.r(t);var i=l("gDS+"),a=l.n(i),n={name:"Product",data:function(){return{isLoading:!1,NODE_KEY:"id",MAX_LEVEL:3,NODE_ID_START:0,startId:null,defaultProps:{children:"children",label:"label"},initParam:{label:"新增节点",pid:0,children:[]},setTree:[{id:1,value:"CSG",label:"CSG",children:[{id:2,value:"Desktop",label:"Desktop",children:[{id:3,value:"Alienware Desktops",label:"Alienware Desktops"},{id:4,value:"Inspiron Desktops",label:"Inspiron Desktops"},{id:5,value:"OptiPlex Desktops",label:"OptiPlex Desktops"},{id:6,value:"Precision Desktops",label:"Precision Desktops"},{id:7,value:"XPS Desktops",label:"XPS Desktops"}]},{id:8,value:"IoT",label:"IoT",children:[{id:9,value:"Cloud Products",label:"Cloud Products"}]},{id:10,value:"Notebook",label:"Notebook",children:[{id:11,value:"Alienware Notebooks",label:"Alienware Notebooks"},{id:12,value:"Commercial Chrome",label:"Commercial Chrome"},{id:13,value:"Inspiron Notebooks",label:"Inspiron Notebooks"},{id:14,value:"Latitude",label:"Latitude"},{id:15,value:"Precision Notebooks",label:"Precision Notebooks"},{id:16,value:"Vostro Notebooks",label:"Vostro Notebooks"},{id:17,value:"XPS Notebooks",label:"XPS Notebooks"}]},{id:18,value:"Rugged",label:"Rugged",children:[{id:19,value:"Latitude",label:"Latitude"},{id:20,value:"Tablets",label:"Tablets"}]},{id:21,value:"Wyse",label:"Wyse",children:[{id:22,value:"WYSE",label:"WYSE"}]}]},{id:23,value:"ISG",label:"ISG",children:[{id:24,value:"ESI",label:"ESI"},{id:25,value:"Server",label:"Server",children:[{id:26,value:"Cloud Products",label:"Cloud Products"},{id:27,value:"PowerEdge",label:"PowerEdge"},{id:28,value:"PowerEdge OEM",label:"PowerEdge OEM"},{id:29,value:"Software",label:"Software",children:[{id:30,value:"Server and Other",label:"Server and Other"},{id:31,value:"Storage",label:"Storage"}]}]},{id:32,value:"Storage",label:"Storage",children:[{id:33,value:"Dell Networking",label:"Dell Networking"},{id:34,value:"Dell Storage OEM",label:"Dell Storage OEM"},{id:35,value:"Dell Storage PS",label:"Dell Storage PS"},{id:36,value:"Dell Storage SC",label:"Dell Storage SC"}]}]},{id:37,value:"S&P, Monitor",label:"S&P, Monitor",children:[{id:38,value:"Monitor",label:"Monitor"},{id:39,value:"Projector",label:"Projector"}]}]}},created:function(){this.startId=this.NODE_ID_START},methods:{handleDelete:function(e,t){var l=this;if(console.log(e,t),t.children&&0!==t.children.length)return this.$message.error("此节点有子级，不可删除！"),!1;var i=function(){l.$nextTick(function(){l.$refs.SlotTree&&(l.$refs.SlotTree.remove(t),l.$message.success("删除成功！"))})};t[this.NODE_KEY]<this.NODE_ID_START?i():l.$confirm("是否删除此节点？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then(function(){i()}).catch(function(){})},handleInput:function(e,t){console.log(e,t),e.isEdit&&this.$set(e,"isEdit",!1)},handleEdit:function(e,t){var l=this;console.log(e,t),e.isEdit||this.$set(e,"isEdit",!0),this.$nextTick(function(){l.$refs["slotTreeInput"+t[l.NODE_KEY]]&&l.$refs["slotTreeInput"+t[l.NODE_KEY]].$refs.input.focus()})},handleAdd:function(e,t){if(console.log(e,t),e.level>=this.MAX_LEVEL)return this.$message.warning("当前已达到"+this.MAX_LEVEL+"级，无法新增！"),!1;var l=JSON.parse(a()(this.initParam));l.pid=t[this.NODE_KEY],l[this.NODE_KEY]=--this.startId,t.children||this.$set(t,"children",[]),t.children.push(l),e.expanded||(e.expanded=!0)},handleAddTop:function(){var e=JSON.parse(a()(this.initParam));e[this.NODE_KEY]=--this.startId,this.setTree.push(e)}}},o=(l("GJRT"),l("KHd+")),r=Object(o.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],staticClass:"comp-tree"},[l("el-button",{staticClass:"comp-tr-top",attrs:{type:"primary",size:"small"},on:{click:e.handleAddTop}},[e._v("添加顶级节点")]),e._v(" "),l("el-tree",{ref:"SlotTree",attrs:{data:e.setTree,props:e.defaultProps,"expand-on-click-node":!1,"node-key":e.NODE_KEY,"highlight-current":""},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,a=t.data;return l("div",{staticClass:"comp-tr-node"},[i.isEdit?[l("el-input",{ref:"slotTreeInput"+a[e.NODE_KEY],attrs:{autofocus:"",size:"mini"},on:{blur:function(t){t.stopPropagation(),e.handleInput(i,a)}},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleInput(i,a)}},model:{value:a.label,callback:function(t){e.$set(a,"label",t)},expression:"data.label"}})]:[l("span",{class:[a[e.NODE_KEY]<e.NODE_ID_START?"is-new":"","comp-tr-node--name"]},[e._v("\n            "+e._s(i.label)+"\n          ")]),e._v(" "),l("span",{staticClass:"comp-tr-node--btns"},[l("el-button",{attrs:{icon:"el-icon-plus",size:"mini",circle:"",type:"primary"},on:{click:function(t){e.handleAdd(i,a)}}}),e._v(" "),l("el-button",{attrs:{icon:"el-icon-edit",size:"mini",circle:"",type:"info"},on:{click:function(t){e.handleEdit(i,a)}}}),e._v(" "),l("el-button",{attrs:{icon:"el-icon-delete",size:"mini",circle:"",type:"danger"},on:{click:function(t){e.handleDelete(i,a)}}})],1)]],2)}}])})],1)])},[],!1,null,"784cea5e",null);r.options.__file="product.vue";var s={name:"Index",components:{product:r.exports},data:function(){return{activeName:"first"}}},d=(l("Dhf5"),Object(o.a)(s,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"Product Group",name:"first"}},[l("product")],1)],1)],1)},[],!1,null,"abbe167a",null));d.options.__file="index.vue";t.default=d.exports},Dhf5:function(e,t,l){"use strict";var i=l("tfiA");l.n(i).a},GJRT:function(e,t,l){"use strict";var i=l("kKQQ");l.n(i).a},"gDS+":function(e,t,l){e.exports={default:l("oh+g"),__esModule:!0}},kKQQ:function(e,t,l){},"oh+g":function(e,t,l){var i=l("WEpk"),a=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},tfiA:function(e,t,l){}}]);