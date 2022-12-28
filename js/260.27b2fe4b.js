"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[260],{7260:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var r=s(3385),i=s(4437),n=s(5057),a=s(248),l=s(5294),o=function(){var e=this,t=e._self._c;return t(a.Z,e._g(e._b({attrs:{expand:"",nav:""}},"v-list",e.$attrs,!1),e.$listeners),[t(l.Z,{staticClass:"justify-center",attrs:{"no-gutters":""}},[e._l(e.items.filter((e=>"/home/"!==e.to&&"/profile/"!==e.to)),(function(s,a){return[t(i.Z,{key:`group-${a}`,staticClass:"ma-5",attrs:{cols:"4",md:"3"}},[t("router-link",{staticClass:"text-decoration-none",attrs:{to:s.to}},[t(r.Z,{staticClass:"pa-2 amber d-flex flex-column"},[t(n.Z,{staticClass:"white--text mt-3",attrs:{"x-large":""}},[e._v(" "+e._s(s.icon)+" ")]),t("p",{staticClass:"white--text text-h5 font-weight-bold mx-auto"},[e._v(" "+e._s(s.title)+" ")])],1)],1)],1)]}))],2)],1)},u=[],d={name:"GridList",props:{items:{type:Array,default:()=>[]}}},c=d,h=s(1001),g=(0,h.Z)(c,o,u,!1,null,null,null),f=g.exports},3385:function(e,t,s){s(4245);var r=s(2925),i=s(6382),n=s(4040),a=s(4987);t["Z"]=(0,a.Z)(i.Z,n.Z,r.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...r.Z.options.computed.classes.call(this)}},styles(){const e={...r.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i.Z.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:s}=this.generateRouteLink();return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},4437:function(e,t,s){s(7658),s(1884);var r=s(144),i=s(2653),n=s(1050);const a=["sm","md","lg","xl"],l=(()=>a.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),o=(()=>a.reduce(((e,t)=>(e["offset"+(0,n.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>a.reduce(((e,t)=>(e["order"+(0,n.jC)(t)]={type:[String,Number],default:null},e)),{}))(),d={col:Object.keys(l),offset:Object.keys(o),order:Object.keys(u)};function c(e,t,s){let r=e;if(null!=s&&!1!==s){if(t){const s=t.replace(e,"");r+=`-${s}`}return"col"!==e||""!==s&&!0!==s?(r+=`-${s}`,r.toLowerCase()):r.toLowerCase()}}const h=new Map;t["Z"]=r.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...o,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:s,children:r,parent:n}){let a="";for(const i in t)a+=String(t[i]);let l=h.get(a);if(!l){let e;for(e in l=[],d)d[e].forEach((s=>{const r=t[s],i=c(e,s,r);i&&l.push(i)}));const s=l.some((e=>e.startsWith("col-")));l.push({col:!s||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),h.set(a,l)}return e(t.tag,(0,i.ZP)(s,{class:l}),r)}})},5294:function(e,t,s){s(7658),s(1884);var r=s(144),i=s(2653),n=s(1050);const a=["sm","md","lg","xl"],l=["start","end","center"];function o(e,t){return a.reduce(((s,r)=>(s[e+(0,n.jC)(r)]=t(),s)),{})}const u=e=>[...l,"baseline","stretch"].includes(e),d=o("align",(()=>({type:String,default:null,validator:u}))),c=e=>[...l,"space-between","space-around"].includes(e),h=o("justify",(()=>({type:String,default:null,validator:c}))),g=e=>[...l,"space-between","space-around","stretch"].includes(e),f=o("alignContent",(()=>({type:String,default:null,validator:g}))),p={align:Object.keys(d),justify:Object.keys(h),alignContent:Object.keys(f)},v={align:"align",justify:"justify",alignContent:"align-content"};function m(e,t,s){let r=v[e];if(null!=s){if(t){const s=t.replace(e,"");r+=`-${s}`}return r+=`-${s}`,r.toLowerCase()}}const y=new Map;t["Z"]=r.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...d,justify:{type:String,default:null,validator:c},...h,alignContent:{type:String,default:null,validator:g},...f},render(e,{props:t,data:s,children:r}){let n="";for(const i in t)n+=String(t[i]);let a=y.get(n);if(!a){let e;for(e in a=[],p)p[e].forEach((s=>{const r=t[s],i=m(e,s,r);i&&a.push(i)}));a.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(n,a)}return e(t.tag,(0,i.ZP)(s,{staticClass:"row",class:a}),r)}})},248:function(e,t,s){s.d(t,{Z:function(){return i}});s(7658);var r=s(9868),i=r.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...r.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(e){this.groups.push(e)},unregister(e){const t=this.groups.findIndex((t=>t._uid===e._uid));t>-1&&this.groups.splice(t,1)},listClick(e){if(!this.expand)for(const t of this.groups)t.toggle(e)}},render(e){const t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},1302:function(e,t,s){s.d(t,{Z:function(){return h}});var r=s(3422),i=s(1558),n=s(8914),a=s(8386),l=s(3939),o=s(3276),u=s(1050),d=s(4987);const c=(0,d.Z)(n.Z,(0,a.d)(["absolute","fixed","top","bottom"]),l.Z,o.Z);var h=c.extend({name:"v-progress-linear",directives:{intersect:i.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,u.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,u.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,u.kb)(this.normalizedValue,"%"),width:(0,u.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,u.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,u.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,s){this.isVisible=s},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,u.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},6382:function(e,t,s){s.d(t,{Z:function(){return a}});var r=s(144),i=s(1302),n=i.Z,a=r.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(n,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},3939:function(e,t,s){var r=s(144);function i(e="value",t="change"){return r.ZP.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const n=i();t["Z"]=n},4245:function(){}}]);
//# sourceMappingURL=260.27b2fe4b.js.map