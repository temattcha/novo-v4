"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[7095],{8197:function(t,e,s){s.d(e,{Z:function(){return u}});var i,a,o=s(3296),r=s(1908),n={name:"AppBarItem",render(t){return t(o.Z,{scopedSlots:{default:({hover:e})=>t(r.Z,{attrs:this.$attrs,class:{"black--text":!e,"white--text blue elevation-12":e},props:{activeClass:"",dark:e,link:!0,...this.$attrs}},this.$slots.default)}})}},l=n,d=s(1001),h=(0,d.Z)(l,i,a,!1,null,null,null),u=h.exports},7305:function(t,e,s){s.r(e),s.d(e,{default:function(){return g}});var i=s(5132),a=s(7179),o=s(5057),r=s(248),n=s(7659),l=s(1495),d=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{bottom:"",left:"","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({attrs:s,on:r}){return[e(a.Z,t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),r),["CUSTOMER"!=t.profile&&0!=t.allExpired.length?e(i.Z,{attrs:{bordered:"",color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[e("span",[t._v(t._s(t.allExpired.length))])]},proxy:!0}],null,!0)},[e(o.Z,[t._v("mdi-clock")])],1):"CUSTOMER"===t.profile&&0!=t.customerExpired.length?e(i.Z,{attrs:{bordered:"",color:"red",overlap:""},scopedSlots:t._u([{key:"badge",fn:function(){return[e("span",[t._v(t._s(t.customerExpired.length))])]},proxy:!0}],null,!0)},[e(o.Z,[t._v("mdi-clock")])],1):e(o.Z,[t._v(" mdi-clock ")])],1)]}}])},["CUSTOMER"!=t.profile&&0!=t.allExpired.length?e(r.Z,{attrs:{flat:"",nav:"",dense:""}},t._l(t.allExpired,(function(s,i){return e("app-bar-item",{key:i,attrs:{disabled:""}},[e(n.km,[e(n.V9,[t._v(t._s(s))])],1)],1)})),1):"CUSTOMER"===t.profile&&0!=t.customerExpired.length?e(r.Z,{attrs:{flat:"",nav:"",dense:""}},t._l(t.customerExpired,(function(s,i){return e("app-bar-item",{key:i,attrs:{disabled:""}},[t._v(" "+t._s(s)+" ")])})),1):e(r.Z,{attrs:{disabled:""}},[e("app-bar-item",[t._v("Não há licenças expiradas")])],1)],1)},h=[],u=(s(7658),s(8197)),c={name:"ExpiredallExpications",components:{AppBarItem:u.Z},data:()=>({customerExpired:[],allExpired:[]}),computed:{profile(){return window.localStorage.profile},razaoSocial(){return window.localStorage.razaosocial}},created(){this.fetchExpired()},methods:{fetchExpired(){return fetch("https://sheetdb.io/api/v1/afxq0nl1f0gvg").then((t=>t.json())).then((t=>{let e=t.filter((t=>"VENCIDA"===t.STATUSAET)),s=t.filter((t=>t.EMPRESA===this.razaoSocial&&"VENCIDA"===t.STATUSAET));e.forEach((t=>this.allExpired.push(t.EMPRESA+" - Licença ID "+t.ID+" vencida"))),s.forEach((t=>this.customerExpired.push("AET "+t.AET+" - Vencida")))}))}}},p=c,f=s(1001),v=(0,f.Z)(p,d,h,!1,null,null,null),g=v.exports},5132:function(t,e,s){s.d(e,{Z:function(){return u}});s(541),s(7658);var i=s(5057),a=s(8914),o=s(3276),r=s(6470),n=s(3599),l=s(8386),d=s(4987),h=s(1050),u=(0,d.Z)(a.Z,(0,l.d)(["left","bottom"]),o.Z,r.Z,n.Z).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes(){return{"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile,...this.themeClasses}},computedBottom(){return this.bottom?"auto":this.computedYOffset},computedLeft(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop(){return this.bottom?this.computedYOffset:"auto"},computedXOffset(){return this.calcPosition(this.offsetX)},computedYOffset(){return this.calcPosition(this.offsetY)},isRtl(){return this.$vuetify.rtl},offset(){return this.overlap?this.dot?8:12:this.dot?2:4},styles(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition(t){return`calc(100% - ${(0,h.kb)(t||this.offset)})`},genBadge(){const t=this.$vuetify.lang,e=this.$attrs["aria-label"]||t.t(this.label),s=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":e,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),i=this.$createElement("span",s,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[i]):i},genBadgeContent(){if(this.dot)return;const t=(0,h.z9)(this,"badge");return t||(this.content?String(this.content):this.icon?this.$createElement(i.Z,this.icon):void 0)},genBadgeWrapper(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render(t){const e=[this.genBadgeWrapper()],s=[(0,h.z9)(this)],{"aria-atomic":i,"aria-label":a,"aria-live":o,role:r,title:n,...l}=this.$attrs;return this.inline&&this.left?s.unshift(e):s.push(e),t("span",{staticClass:"v-badge",attrs:l,class:this.classes},s)}})},3296:function(t,e,s){var i=s(4019),a=s(6470),o=s(4987),r=s(6596);e["Z"]=(0,o.Z)(i.Z,a.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,r.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,r.Kd)("v-hover should only contain a single element",this),t)}})},248:function(t,e,s){s.d(e,{Z:function(){return a}});s(7658);var i=s(9868),a=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})},3599:function(t,e,s){var i=s(144);e["Z"]=i.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})}}]);
//# sourceMappingURL=7095.5131907e.js.map