﻿"use strict";(this.webpackChunkwebsdk=this.webpackChunkwebsdk||[]).push([[902],{18666:(t,e,i)=>{i.d(e,{Z:()=>l});var n=i(55402),a=i.n(n),o=i(60352),s=i.n(o)()(a());s.push([t.id,"\n.v-list-item__icon > .v-image {\n  margin-top: -10px;\n}\n.v-list-item__icon:first-child {\n  margin-right: 15px !important;\n}\n.prependIcon .v-list-item__icon {\n  margin-right: 0 !important;\n}\n.firstChild .v-list-item__icon:first-child {\n  padding-left: 39px;\n}\n.secondChild .v-list-item__icon:first-child {\n  padding-left: 78px;\n}\n.thirdChild .v-list-item__icon:first-child {\n  padding-left: 117px;\n}\n.v-navigation-drawer__content::-webkit-scrollbar {\n  display: none;\n}\n.v-navigation-drawer__content {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n.secondaryTheme {\n  color: black;\n}\n.secondaryTheme .v-list-item--active {\n  color: black !important;\n}\n.secondaryTheme .v-list-item__icon {\n  color: black !important;\n}\n.primaryTheme {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item--active {\n  color: #1976d2 !important;\n}\n.primaryTheme .v-list-item__icon {\n  color: #1976d2 !important;\n}\n.v-list-group--active.primaryTheme .v-list-item--active .v-list-item__title {\n  color: #1976d2 !important;\n}\n.successTheme {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item--active {\n  color: #4cb050 !important;\n}\n.successTheme .v-list-item__icon {\n  color: #4cb050 !important;\n}\n.v-list-group--active.successTheme .v-list-item--active .v-list-item__title {\n  color: #4cb050 !important;\n}\n.errorTheme {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item--active {\n  color: #ff5252 !important;\n}\n.errorTheme .v-list-item__icon {\n  color: #ff5252 !important;\n}\n.v-list-group--active.errorTheme .v-list-item--active .v-list-item__title {\n  color: #ff5252 !important;\n}\n.warningTheme {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item--active {\n  color: #fb8c00 !important;\n}\n.warningTheme .v-list-item__icon {\n  color: #fb8c00 !important;\n}\n.v-list-group--active.warningTheme .v-list-item--active .v-list-item__title {\n  color: #fb8c00 !important;\n}\n\n/* .blackTheme .v-list-item--active:before{\n  opacity: 0.12!important;\n  color: blue!important;\n} */\n.v-list {\n  padding: unset !important;\n}\n.v-list-group__header.v-list-item {\n  height: 56px;\n}\n.v-list-group--active.white--text .v-list-item--active .v-list-item__title {\n  color: white;\n}\n.v-list-item__icon {\n  color: white;\n}\n",""]);const l=s},58902:(t,e,i)=>{i.r(e),i.d(e,{default:()=>P});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-navigation-drawer",{attrs:{permanent:"","mini-variant":t.mini,"mini-variant-width":t.miniVariantWidth,"expand-on-hover":t.expandOnHover,fixed:t.fixed,width:t.width,color:t.color},on:{"update:miniVariant":function(e){t.mini=e},"update:mini-variant":function(e){t.mini=e}},model:{value:t.navDrawer,callback:function(e){t.navDrawer=e},expression:"navDrawer"}},[t.hideMenuTitle?t._e():i("v-list",[i("v-list-item",{staticClass:"px-2"},[i("v-list-item-avatar",[t.showOnlyIcon?t._e():i("v-icon",{class:t.setTheme(),attrs:{id:"menuBtn",large:""},on:{click:function(e){return t.updateMini()}}},[t._v("mdi-menu")])],1),t._v(" "),i("v-list-item-title",{class:t.setTheme()},[t._v(t._s(t.title))]),t._v(" "),i("v-icon",{directives:[{name:"show",rawName:"v-show",value:!t.expandOnHover,expression:"!expandOnHover"}],class:t.setTheme(),attrs:{id:"closeBtn",small:""},on:{click:function(e){return t.updateMini()}}},[t._v("mdi-close")])],1)],1),t._v(" "),t._l(t.resultList,(function(e,n){return i("div",{key:n},[e.menuItem?i("v-list",[e.children&&e.children.length>0?i("v-list-group",{class:t.setTheme(),on:{click:function(e){return t.onClickGroup()}},scopedSlots:t._u([{key:"prependIcon",fn:function(){return[t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e(),t._v(" "),t.setPrependIcon(e.imagePath)?i("v-icon",t._b({},"v-icon",t.setIconSize(e.options),!1),[t._v("\n            "+t._s(t.setPrependIcon(e.imagePath))+"\n          ")]):t._e()]},proxy:!0},{key:"activator",fn:function(){return[i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item",[i("v-list-item-title",[t._v(t._s(e.code))])],1)],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item1.active"}},[t._v(" "),t._v(" "),t._l(e.children,(function(e,n){return i("div",{key:n},[e.menuItem?i("v-list",{staticClass:"firstChild prependIcon"},[e.children&&e.children.length>0?i("v-list-group",{class:t.setTheme(),scopedSlots:t._u([{key:"prependIcon",fn:function(){return[t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e(),t._v(" "),t.setPrependIcon(e.imagePath)?i("v-icon",t._b({},"v-icon",t.setIconSize(e.options),!1),[t._v("\n                  "+t._s(t.setPrependIcon(e.imagePath))+"\n                ")]):t._e()]},proxy:!0},{key:"activator",fn:function(){return[i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item-title",{staticClass:"firstChild",style:"padding-left:"+t.calculatePadding(1,e)+"px",domProps:{textContent:t._s(e.code)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item2.active"}},[t._v(" "),t._v(" "),t._l(e.children,(function(e,n){return i("div",{key:n},[e.menuItem?i("v-list",{staticClass:"secondChild prependIcon"},[e.children&&e.children.length>0?i("v-list-group",{class:t.setTheme(),scopedSlots:t._u([{key:"prependIcon",fn:function(){return[t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e(),t._v(" "),t.setPrependIcon(e.imagePath)?i("v-icon",t._b({},"v-icon",t.setIconSize(e.options),!1),[t._v("\n                        "+t._s(t.setPrependIcon(e.imagePath))+"\n                      ")]):t._e()]},proxy:!0},{key:"activator",fn:function(){return[i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item-title",{staticClass:"secondChild",style:"padding-left:"+t.calculatePadding(2,e)+"px",domProps:{textContent:t._s(e.code)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item3.active"}},[t._v(" "),t._v(" "),t._l(e.children,(function(e,n){return i("div",{key:n},[e.menuItem?i("v-list",{staticClass:"thirdChild"},[e.children&&e.children.length>0?i("v-list-group",{class:t.setTheme(),scopedSlots:t._u([{key:"prependIcon",fn:function(){return[t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e(),t._v(" "),t.setPrependIcon(e.imagePath)?i("v-icon",t._b({},"v-icon",t.setIconSize(e.options),!1),[t._v("\n                              "+t._s(t.setPrependIcon(e.imagePath))+"\n                            ")]):t._e()]},proxy:!0},{key:"activator",fn:function(){return[i("v-list-item-content",[i("v-list-item-title",{style:"padding-left:"+t.calculatePadding(3,e)+"px",domProps:{textContent:t._s(e.code)}})],1)]},proxy:!0}],null,!0),model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item4.active"}}):i("v-list-item-group",{class:t.setTheme()},[i("v-list-item",{on:{click:function(i){return t.clickRow(e)}},model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item4.active"}},[t.isIconPathAvaliable(e.imagePath)||t.isImagePathAvaliable(e.imagePath)?i("v-list-item-icon",[t.isIconPathAvaliable(e.imagePath)?i("v-icon",t._b({domProps:{textContent:t._s(e.imagePath)}},"v-icon",t.setIconSize(e.options),!1)):t._e(),t._v(" "),t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e()],1):t._e(),t._v(" "),i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item-title",{style:"padding-left:"+t.calculatePadding(3,e)+"px",domProps:{textContent:t._s(e.code)}})],1)],1)],1)],1):t._e()],1)}))],2):i("v-list-item-group",{class:t.setTheme()},[i("v-list-item",{attrs:{link:""},on:{click:function(i){return t.clickRow(e)}},model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item3.active"}},[t.isIconPathAvaliable(e.imagePath)||t.isImagePathAvaliable(e.imagePath)?i("v-list-item-icon",[t.isIconPathAvaliable(e.imagePath)?i("v-icon",t._b({domProps:{textContent:t._s(e.imagePath)}},"v-icon",t.setIconSize(e.options),!1)):t._e(),t._v(" "),t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setIconSize(e.options),!1)):t._e()],1):t._e(),t._v(" "),i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item-title",{style:"padding-left:"+t.calculatePadding(2,e)+"px",domProps:{textContent:t._s(e.code)}})],1)],1)],1)],1):t._e()],1)}))],2):i("v-list-item-group",{class:t.setTheme()},[i("v-list-item",{attrs:{id:"listItem2"},on:{click:function(i){return t.clickRow(e)}},model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item2.active"}},[t.isIconPathAvaliable(e.imagePath)||t.isImagePathAvaliable(e.imagePath)?i("v-list-item-icon",[t.isIconPathAvaliable(e.imagePath)?i("v-icon",t._b({domProps:{textContent:t._s(e.imagePath)}},"v-icon",t.setIconSize(e.options),!1)):t._e(),t._v(" "),t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setIconSize(e.options),!1)):t._e()],1):t._e(),t._v(" "),i("v-list-item-content",{attrs:{id:e.code}},[i("v-list-item-title",{style:"padding-left:"+t.calculatePadding(1,e)+"px",domProps:{textContent:t._s(e.code)}})],1)],1)],1)],1):t._e()],1)}))],2):i("v-list-item-group",{class:t.setTheme()},[i("v-list-item",{attrs:{link:""},on:{click:function(i){return t.clickRow(e)}},model:{value:e.active,callback:function(i){t.$set(e,"active",i)},expression:"item1.active"}},[t.isIconPathAvaliable(e.imagePath)||t.isImagePathAvaliable(e.imagePath)?i("v-list-item-icon",[t.isIconPathAvaliable(e.imagePath)?i("v-icon",t._b({domProps:{textContent:t._s(e.imagePath)}},"v-icon",t.setIconSize(e.options),!1)):t._e(),t._v(" "),t.isImagePathAvaliable(e.imagePath)?i("v-img",t._b({attrs:{src:e.imagePath}},"v-img",t.setImageSize(e.options),!1)):t._e()],1):t._e(),t._v(" "),i("v-list-item-title",{style:"padding-left:"+t.calculatePadding(1,e)+"px",domProps:{textContent:t._s(e.code)}})],1)],1)],1):t._e()],1)}))],2)};n._withStripped=!0;const a=i(89146).default.extend({name:"QMenu",data:function(){return{mini:!0,resultList:[Object],innerClass:"",containes:!1}},props:{activeColor:{type:String},width:{type:String},miniVariantWidth:{type:String},menuData:{type:[Object]},collapseOnItemSelect:{type:Boolean,default:!1},hideMenuTitle:{type:Boolean,default:!1},fixed:{type:Boolean},color:{type:String},autoCollapse:{type:Boolean},title:{type:String},showOnlyIcon:{type:Boolean,default:!1},expandOnHover:{type:Boolean,default:!1}},watch:{menuData:{immediate:!0,handler:function(t){this.resultList=null!=t?t:[],this.childrenSetActiveDefaultAsFalse(this.resultList)}},color:{immediate:!0,handler:function(t){this.setTheme()}},mini:{immediate:!0,handler:function(t){this.$emit("update:mini-variant",t)}}},mounted:function(){},destroyed:function(){var t;null===(t=this.$el)||void 0===t||t.remove()},methods:{setTheme:function(){switch(this.activeColor){case"primary":return"primaryTheme";case"secondary":return"secondaryTheme";case"success":return"successTheme";case"error":return"errorTheme";case"warning":return"warningTheme";default:return null==this.color?"secondaryTheme":"white--text"}},isIconPathAvaliable:function(t){return!(!t||!t.startsWith("mdi-"))},isImagePathAvaliable:function(t){return!(!t||!t.toLocaleLowerCase("tr").startsWith("http:")&&!t.toLocaleLowerCase("tr").startsWith("https:"))},setPrependIcon:function(t){return t&&t.startsWith("mdi-")?t:""},setIconSize:function(t){var e,i,n,a,o,s;return{size:null===(e=null==t?void 0:t.iconOptions)||void 0===e?void 0:e.size,"x-small":!!(null===(i=null==t?void 0:t.iconOptions)||void 0===i?void 0:i.xSmall),small:!!(null===(n=null==t?void 0:t.iconOptions)||void 0===n?void 0:n.small),large:!!(null===(a=null==t?void 0:t.iconOptions)||void 0===a?void 0:a.large),"x-large":!!(null===(o=null==t?void 0:t.iconOptions)||void 0===o?void 0:o.xLarge),color:null===(s=null==t?void 0:t.iconOptions)||void 0===s?void 0:s.color}},setImageSize:function(t){var e,i;return{height:null===(e=null==t?void 0:t.imageOptions)||void 0===e?void 0:e.height,width:null===(i=null==t?void 0:t.imageOptions)||void 0===i?void 0:i.width}},childrenSetActiveDefaultAsFalse:function(t){var e=this;t.forEach((function(t){if(Object(t).imagePath&&!Object(t).imagePath.startsWith("mdi-")&&!Object(t).imagePath.toLocaleLowerCase("tr").startsWith("http:")&&!Object(t).imagePath.toLocaleLowerCase("tr").startsWith("https:")){var i=window.location.protocol+"//"+window.location.host;e.$set(t,"imagePath",i+(Object(t).imagePath.startsWith("/")?Object(t).imagePath:"/"+Object(t).imagePath))}Object(t).active||e.$set(t,"active",!1),Object(t).children&&e.childrenSetActiveDefaultAsFalse(Object(t).children)}))},menuItemsLoop:function(t,e){var i=this;this.containes=!1,t.forEach((function(t){Object(t).children?(i.autoCollapse&&(i.isCurrentGroupContainsClickedItem(t,e),0==i.containes&&(Object(t).active=!1)),i.menuItemsLoop(Object(t).children,e)):Object(t).active&&setTimeout((function(){Object(t).active=!1}),100)}))},isCurrentGroupContainsClickedItem:function(t,e){var i=this;t.children.forEach((function(t){t==e?i.containes=!0:t.children&&i.isCurrentGroupContainsClickedItem(t,e)}))},clickRow:function(t,e){if(this.collapseOnItemSelect&&this.updateMini(),Object(t).active)Object(t).active=!1,this.$emit("click:row",t);else{var i=this;this.menuItemsLoop(this.resultList,t),setTimeout((function(){Object(t).active=!0,i.$emit("click:row",t)}),100)}},calculatePadding:function(t,e){return e.imagePath&&e.imagePath.startsWith("mdi-")||e.imagePath&&(e.imagePath.toLocaleLowerCase("tr").startsWith("http:")||e.imagePath.toLocaleLowerCase("tr").startsWith("https:"))?15:15*t+24*t},collapseAll:function(){this.resultList.forEach((function(t){Object(t).active=!1}))},updateMini:function(){this.expandOnHover||(this.collapseAll(),this.mini=!this.mini)},onClickGroup:function(){this.mini&&(this.mini=!1),this.autoCollapse&&this.resultList.forEach((function(t){Object(t).active&&setTimeout((function(){Object(t).active=!1}),100)}))}}});var o=i(75701),s=i.n(o),l=i(8236),c=i.n(l),r=i(6080),m=i.n(r),v=i(56850),d=i.n(v),h=i(87182),u=i.n(h),p=i(39213),g=i.n(p),_=i(18666),f={};f.styleTagTransform=g(),f.setAttributes=d(),f.insert=m().bind(null,"head"),f.domAPI=c(),f.insertStyleElement=u(),s()(_.Z,f),_.Z&&_.Z.locals&&_.Z.locals;const P=(0,i(62264).Z)(a,n,[],!1,null,null,null).exports}}]);