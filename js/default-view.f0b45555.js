"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[355],{9672:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var r=e(6035),a=e(8574),i=a.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:n,right:e,footer:r,insetFooter:a,bottom:i,left:s}=this.$vuetify.application;return{paddingTop:`${n+t}px`,paddingRight:`${e}px`,paddingBottom:`${r+a+i}px`,paddingLeft:`${s}px`}}},render(t){const n={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,n,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}}),s=function(){var t=this,n=t._self._c;return n(i,[n(r.Z,{attrs:{fluid:""}},[n("router-view",{key:t.$route.path})],1)],1)},o=[],d={name:"DefaultView"},u=d,l=e(1001),c=(0,l.Z)(u,s,o,!1,null,null,null),p=c.exports},6035:function(t,n,e){e.d(n,{Z:function(){return s}});e(9027),e(1884);var r=e(144);function a(t){return r.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(n,{props:e,data:r,children:a}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:i}=r;if(i){r.attrs={};const t=Object.keys(i).filter((t=>{if("slot"===t)return!1;const n=i[t];return t.startsWith("data-")?(r.attrs[t]=n,!1):n||"string"===typeof n}));t.length&&(r.staticClass+=` ${t.join(" ")}`)}return e.id&&(r.domProps=r.domProps||{},r.domProps.id=e.id),n(e.tag,r,a)}})}var i=e(2653),s=a("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:n,data:e,children:r}){let a;const{attrs:s}=e;return s&&(e.attrs={},a=Object.keys(s).filter((t=>{if("slot"===t)return!1;const n=s[t];return t.startsWith("data-")?(e.attrs[t]=n,!1):n||"string"===typeof n}))),n.id&&(e.domProps=e.domProps||{},e.domProps.id=n.id),t(n.tag,(0,i.ZP)(e,{staticClass:"container",class:Array({"container--fluid":n.fluid}).concat(a||[])}),r)}})},8574:function(t,n,e){var r=e(144);n["Z"]=r.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},1884:function(){},9027:function(){}}]);
//# sourceMappingURL=default-view.f0b45555.js.map