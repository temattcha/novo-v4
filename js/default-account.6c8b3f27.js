"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[102],{8735:function(t,e,s){s.r(e),s.d(e,{default:function(){return p}});var i=s(7179),n=s(4192),r=s(5057),o=s(248),a=s(7659),l=s(1495),d=function(){var t=this,e=t._self._c;return e(l.Z,{attrs:{bottom:"",left:"","min-width":"200","offset-y":"",origin:"top right",transition:"scale-transition"},scopedSlots:t._u([{key:"activator",fn:function({attrs:s,on:n}){return[e(i.Z,t._g(t._b({staticClass:"ml-2",attrs:{"min-width":"0",text:""}},"v-btn",s,!1),n),[e(r.Z,[t._v("mdi-account")])],1)]}}])},[e(o.Z,{attrs:{tile:!1,flat:"",nav:""}},[t._l(t.profile,(function(s,i){return[s.divider?e(n.Z,{key:`divider-${i}`,staticClass:"mb-2 mt-2"}):e("app-bar-item",{key:`item-${i}`,attrs:{to:s.to}},[e(a.V9,{domProps:{textContent:t._s(s.title)}})],1)]}))],2)],1)},u=[],h={name:"DefaultAccount",data:()=>({profile:[{title:"Perfil",to:"/profile/"},{title:"Configurações"},{divider:!0},{title:"Sair",icon:"mdi-power",to:"/"}]})},c=h,v=s(1001),f=(0,v.Z)(c,d,u,!1,null,null,null),p=f.exports},4192:function(t,e,s){s.d(e,{Z:function(){return n}});var i=s(3276),n=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},248:function(t,e,s){s.d(e,{Z:function(){return n}});s(7658);var i=s(9868),n=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(t){this.groups.push(t)},unregister(t){const e=this.groups.findIndex((e=>e._uid===t._uid));e>-1&&this.groups.splice(e,1)},listClick(t){if(!this.expand)for(const e of this.groups)e.toggle(t)}},render(t){const e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}})}}]);
//# sourceMappingURL=default-account.6c8b3f27.js.map