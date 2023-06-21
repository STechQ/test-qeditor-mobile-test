﻿"use strict";(this.webpackChunkwebsdk=this.webpackChunkwebsdk||[]).push([[689],{2470:(e,t,n)=>{n.d(t,{Z:()=>d});var i=n(55402),s=n.n(i),o=n(60352),l=n.n(o)()(s());l.push([e.id,"\n#draggableDiv[data-v-5dba9be3] {\n  position: absolute;\n  background-color: #f1f1f1;\n  text-align: center;\n  box-shadow: 0 5px 5px;\n}\n.b-close[data-v-5dba9be3] {\n  position: absolute !important;\n  right: 8px;\n  top: 15px;\n  cursor: pointer;\n}\n@media (min-width: 320px) and (max-width: 767px) {\n#draggableDiv[data-v-5dba9be3] {\n    width: 100% !important;\n    height: 100% !important;\n}\n}\n",""]);const d=l},69689:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"draggableDiv",class:this.class,style:[{width:e.width,height:e.height,right:e.right,left:e.left,top:e.top,bottom:e.bottom,zIndex:e.zIndex}],attrs:{id:"draggableDiv",name:"draggableDiv"}},[n("div",e._g({ref:"draggableDivHeader",style:[e.border?{"box-shadow":"0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12)"}:{"box-shadow":"none"},e.pinned?{cursor:"auto"}:{cursor:"move"},{padding:e.headerPadding}],attrs:{id:"draggableDivHeader"}},{mousedown:e.pinned||e._renderingProps.isEditMode?null:e.dragMouseDown,touchstart:e.pinned||e._renderingProps.isEditMode?null:e.dragMouseDown}),[n("div",[e._t("header")],2),e._v(" "),e.closeBtn?n("v-icon",{staticClass:"b-close",attrs:{medium:""},on:{click:e.closePopup}},[e._v("mdi-close")]):e._e()],1),e._v(" "),e._t("content")],2)};i._withStripped=!0;const s=n(89146).default.extend({name:"QLightBox",data:function(){return{element:new HTMLDivElement,pos1:0,pos2:0,pos3:0,pos4:0,_bottom:0,_left:0,_right:0,_top:0,rect:new DOMRect}},props:{width:{type:String},height:{type:String},headerPadding:{type:String,default:"27px"},right:{type:String},left:{type:String},top:{type:String},bottom:{type:String},zIndex:{type:String},pinned:{type:Boolean},backgroundColor:{type:String},_renderingProps:{type:Object},class:{type:String},border:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},mounted:function(){this.configureForEditor(),this.dragElement(this.$refs.draggableDiv),document.onclick=this.clickEvent,this.$emit("mounted")},methods:{closeDragElement:function(){document.onmouseup=null,document.onmousemove=null,document.ontouchend=null,document.ontouchmove=null},elementDrag:function(e){if((e=e||window.event).preventDefault(),this.pos1=this.pos3-e.clientX,this.pos2=this.pos4-e.clientY,this.pos3=e.clientX,this.pos4=e.clientY,this.element.offsetTop<0)this.element.style.top="0px";else if(this.element.offsetLeft<0)this.element.style.left="0px";else if(this.element.offsetTop+this.element.offsetHeight>document.getElementsByClassName("v-application--wrap")[0].clientHeight)this.element.style.top=this.element.offsetTop-this.element.offsetHeight+this.element.offsetHeight-3+"px";else if(this.element.offsetLeft+this.element.offsetWidth>document.body.clientWidth)this.element.style.left=this.element.offsetLeft-this.element.offsetWidth+this.element.offsetWidth-3+"px";else{var t=this.element.offsetLeft-this.pos1,n=this.element.offsetTop-this.pos2;t<this._left||n<this._top||t+this.rect.width>this._right||n+this.rect.height>this._bottom||(this.element.style.top=this.element.offsetTop-this.pos2+"px",this.element.style.left=this.element.offsetLeft-this.pos1+"px")}},elementMobileDrag:function(e){(e=e||window.event).preventDefault(),this.pos1=this.pos3-e.touches[0].clientX,this.pos2=this.pos4-e.touches[0].clientY,this.pos3=e.touches[0].clientX,this.pos4=e.touches[0].clientY,this.element.style.top=this.element.offsetTop-this.pos2+"px",this.element.style.left=this.element.offsetLeft-this.pos1+"px"},dragMouseDown:function(e){(e=e||window.event).preventDefault(),this.pos3=e.clientX,this.pos4=e.clientY,this.rect=this.element.getBoundingClientRect(),this._bottom=window.innerHeight,this._right=window.innerWidth,document.onmouseup=this.closeDragElement,document.onmousemove=this.elementDrag,document.ontouchmove=this.elementMobileDrag,document.ontouchend=this.closeDragElement,document.activeElement.blur(),this.fixZIndex()},dragElement:function(e){this.pos1=0,this.pos2=0,this.pos3=0,this.pos4=0,this.element=e},closePopup:function(){this.$emit("closePopup")},clickEvent:function(e){var t=document.getElementById("draggableDiv");t&&e.target instanceof HTMLElement&&e.target&&t.contains(e.target)?this.$emit("clickInside"):this.$emit("clickOutside")},fixZIndex:function(){var e=this;null===this.zIndex||void 0===this.zIndex||""===this.zIndex?(document.getElementsByName("draggableDiv").forEach((function(e){e.style.zIndex="9"})),this.element.style.zIndex="12"):(document.getElementsByName("draggableDiv").forEach((function(t){var n=e.zIndex-1;t.style.zIndex=n.toString()})),this.element.style.zIndex=this.zIndex)},configureForEditor:function(){this._renderingProps.isEditMode||null==this._renderingProps.isEditMode||null==this._renderingProps.isEditMode?this.$refs.draggableDiv.style.position="relative":this.$refs.draggableDiv.style.position="absolute"}},destroyed:function(){var e;null===(e=this.$el)||void 0===e||e.remove()}});var o=n(75701),l=n.n(o),d=n(8236),h=n.n(d),r=n(6080),a=n.n(r),p=n(56850),c=n.n(p),m=n(87182),u=n.n(m),f=n(39213),g=n.n(f),b=n(2470),v={};v.styleTagTransform=g(),v.setAttributes=c(),v.insert=a().bind(null,"head"),v.domAPI=h(),v.insertStyleElement=u(),l()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;const x=(0,n(62264).Z)(s,i,[],!1,null,"5dba9be3",null).exports}}]);