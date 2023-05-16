"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[47],{8328:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(2925),r=s(1903),n=s(1012),o=s(6470),a=s(3276),l=s(3599),c=s(4987),h=s(6596),u=(0,c.Z)(i.Z,o.Z,l.Z).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(r.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(n.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(n.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,h.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},1903:function(t,e,s){var i=s(6887);e["Z"]=i.Z},6904:function(t,e,s){s(7658);var i=s(4987),r=s(4609),n=s(380);e["Z"]=(0,i.Z)(r.Z,(0,n.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}})},4437:function(t,e,s){s(7658),s(889);var i=s(144),r=s(2653),n=s(1050);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>o.reduce(((t,e)=>(t["order"+(0,n.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(c)};function u(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;e["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:n}){let o="";for(const r in e)o+=String(e[r]);let a=d.get(o);if(!a){let t;for(t in a=[],h)h[t].forEach((s=>{const i=e[s],r=u(t,s,i);r&&a.push(r)}));const s=a.some((t=>t.startsWith("col-")));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(o,a)}return t(e.tag,(0,r.ZP)(s,{class:a}),i)}})},6035:function(t,e,s){s.d(e,{Z:function(){return o}});s(7844),s(889);var i=s(144);function r(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:r}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:n}=i;if(n){i.attrs={};const t=Object.keys(n).filter((t=>{if("slot"===t)return!1;const e=n[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,r)}})}var n=s(2653),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let r;const{attrs:o}=s;return o&&(s.attrs={},r=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,n.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),i)}})},5294:function(t,e,s){s(7658),s(889);var i=s(144),r=s(2653),n=s(1050);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((s,i)=>(s[t+(0,n.jC)(i)]=e(),s)),{})}const c=t=>[...a,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:c}))),u=t=>[...a,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:u}))),p=t=>[...a,"space-between","space-around","stretch"].includes(t),m=l("alignContent",(()=>({type:String,default:null,validator:p}))),g={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(m)},f={align:"align",justify:"justify",alignContent:"align-content"};function v(t,e,s){let i=f[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const y=new Map;e["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...h,justify:{type:String,default:null,validator:u},...d,alignContent:{type:String,default:null,validator:p},...m},render(t,{props:e,data:s,children:i}){let n="";for(const r in e)n+=String(e[r]);let o=y.get(n);if(!o){let t;for(t in o=[],g)g[t].forEach((s=>{const i=e[s],r=v(t,s,i);r&&o.push(r)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(n,o)}return t(e.tag,(0,r.ZP)(s,{staticClass:"row",class:o}),i)}})},3296:function(t,e,s){var i=s(8009),r=s(6470),n=s(4987),o=s(6596);e["Z"]=(0,n.Z)(i.Z,r.Z).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter(){this.runDelay("open")},onMouseLeave(){this.runDelay("close")}},render(){if(!this.$scopedSlots.default&&void 0===this.value)return(0,o.Kd)("v-hover is missing a default scopedSlot or bound value",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):((0,o.Kd)("v-hover should only contain a single element",this),t)}})},9522:function(t,e,s){s.d(e,{Z:function(){return p}});s(7658);var i=s(1558),r=s(9196),n=s(4987),o=s(1050),a=(0,n.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=a,c=s(3276),h=s(2653),u=s(6596);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var p=(0,n.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const s=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[s]):s}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,s){if(!d||s||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,u.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const s=()=>{const{naturalHeight:i,naturalWidth:r}=t;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(s,e)};s()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,o.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),s=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,s,e.children)}})},6560:function(t,e,s){s.d(e,{Z:function(){return a}});s(7658);var i=s(8914),r=s(3276),n=s(6470),o=s(4987),a=(0,o.Z)(i.Z,r.Z,n.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},5947:function(t,e,s){s.d(e,{Z:function(){return o}});var i=s(1938),r=s(4987);const n=(0,r.Z)(i.Z);var o=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},9495:function(t,e,s){function i(t,e,s){const i=e.value,r=e.options||{passive:!0};window.addEventListener("resize",i,r),t._onResize=Object(t._onResize),t._onResize[s.context._uid]={callback:i,options:r},e.modifiers&&e.modifiers.quiet||i()}function r(t,e,s){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[s.context._uid]))return;const{callback:r,options:n}=t._onResize[s.context._uid];window.removeEventListener("resize",r,n),delete t._onResize[s.context._uid]}const n={inserted:i,unbind:r};e["Z"]=n},8009:function(t,e,s){var i=s(144);e["Z"]=i.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(t,e){this.clearDelay();const s=parseInt(this[`${t}Delay`],10);this[`${t}Timeout`]=setTimeout(e||(()=>{this.isActive={open:!0,close:!1}[t]}),s)}}})},3939:function(t,e,s){var i=s(144);function r(t="value",e="change"){return i.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const n=r();e["Z"]=n},3599:function(t,e,s){var i=s(144);e["Z"]=i.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},6044:function(t,e,s){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}s.d(e,{e:function(){return i}})},4173:function(t,e,s){s.r(e),s.d(e,{default:function(){return w}});var i=s(8328),r=s(6887),n=s(3385),o=s(4437),a=s(6035),l=s(3422),c=s(6904),h=s(3296),u=s(4019),d=s(9522),p=s(6560),m=s(5294),g=s(5947),f=function(){var t=this,e=t._self._c;return"true"===t.logado?e(a.Z,{attrs:{id:"user-profile-view",fluid:"",tag:"section"}},[e(p.Z,{attrs:{value:t.showUpdate}},[e(i.Z,{staticClass:"position-fixed",attrs:{icon:"mdi-check",prominent:"",shaped:"",type:"success",transition:"scale-transition"}},[t._v(" Perfil atualizado com sucesso! ")])],1),e(p.Z,{attrs:{value:t.showError}},[e(i.Z,{staticClass:"position-fixed",attrs:{icon:"mdi-alert",prominent:"",shaped:"",type:"error",transition:"scale-transition"}},[t._v(" Algo de errado não está certo. ")])],1),e(m.Z,{attrs:{justify:"center"}},[e(o.Z,{attrs:{cols:"12",md:"8"}},[e(n.Z,{staticClass:"mt-7 mb-10 mb-md-0"},[e(m.Z,[e(o.Z,{attrs:{cols:"6",md:"2"}},[e(h.Z,{scopedSlots:t._u([{key:"default",fn:function({hover:s}){return[e("label",{attrs:{for:"file-input"}},[e(d.Z,{staticClass:"rounded-circle mt-n16 ms-6 profile-pic",staticStyle:{cursor:"pointer"},attrs:{align:"center",width:"125","aspect-ratio":1,src:t.profilePic}},[e(l.b0,[s?e(u.Z,{staticClass:"fill-height",attrs:{large:"",dark:""}},[t._v(" mdi-camera ")]):t._e()],1)],1)],1)]}}],null,!1,2774562068)}),e("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file-input",type:"file",accept:".pdf,.jpg,.jpeg,.png","show-size":""},on:{change:t.onFileChange}}),e(r.Z,{attrs:{fab:"",small:"",href:t.profilePic,download:"Foto de perfil"}},[e(u.Z,{attrs:{dark:"",color:"green darken-2"}},[t._v(" mdi-download ")])],1)],1)],1),e(c.Z,[e(a.Z,{staticClass:"py-0"},[e(m.Z,[e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"1",counter:"",outlined:""},model:{value:t.chunk1,callback:function(e){t.chunk1=e},expression:"chunk1"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"2",counter:"",outlined:""},model:{value:t.chunk2,callback:function(e){t.chunk2=e},expression:"chunk2"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"3",counter:"",outlined:""},model:{value:t.chunk3,callback:function(e){t.chunk3=e},expression:"chunk3"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"4",counter:"",outlined:""},model:{value:t.chunk4,callback:function(e){t.chunk4=e},expression:"chunk4"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"5",counter:"",outlined:""},model:{value:t.chunk5,callback:function(e){t.chunk5=e},expression:"chunk5"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"6",counter:"",outlined:""},model:{value:t.chunk6,callback:function(e){t.chunk6=e},expression:"chunk6"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"7",counter:"",outlined:""},model:{value:t.chunk7,callback:function(e){t.chunk7=e},expression:"chunk7"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"8",counter:"",outlined:""},model:{value:t.chunk8,callback:function(e){t.chunk8=e},expression:"chunk8"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"9",counter:"",outlined:""},model:{value:t.chunk9,callback:function(e){t.chunk9=e},expression:"chunk9"}})],1),e(o.Z,{attrs:{cols:"4"}},[e(g.Z,{attrs:{color:"blue",label:"10",counter:"",outlined:""},model:{value:t.chunk10,callback:function(e){t.chunk10=e},expression:"chunk10"}})],1)],1),e(o.Z,{staticClass:"text-right",attrs:{cols:"12"}},[e(r.Z,{attrs:{color:"primary","min-width":"150"},on:{click:t.separateInChunks}},[t._v(" Dividir ")]),e(r.Z,{attrs:{color:"primary","min-width":"150"},on:{click:t.editProfile}},[t._v(" Atualizar Perfil ")])],1)],1)],1)],1)],1)],1)],1):t._e()},v=[],y=s(594),b={name:"ChunksTest",data:()=>({showUpdate:!1,showProfileUpdate:!1,showError:!1,originalImg:"",profilePic:window.localStorage.img,logado:window.localStorage.logado,chunk1:"",chunk2:"",chunk3:"",chunk4:"",chunk5:"",chunk6:"",chunk7:"",chunk8:"",chunk9:"",chunk10:"",icon:[{text:"mdi-camera"}],items:{sobre:window.localStorage.sobre}}),watch:{items:{handler(){window.localStorage.sobre=this.items.sobre},deep:!0}},methods:{set(t){try{localStorage.setItem(t,this.profilePic)}catch(e){console.log(`Falha no armazenamento: ${e}`)}},onFileChange(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage(t){var e=new FileReader;e.onload=t=>{this.profilePic=t.target.result,this.set("img")},e.readAsDataURL(t)},separateInChunks(){const[t,e,s,i,r,n,o,a,l,c]=JSON.stringify(this.stringChop(this.profilePic,5e4)).replace('["',"").replace('"]',"").split(",");console.log(this.profilePic.length),void 0!=t&&(this.chunk1=t.replace('"',"").replace('"',"").concat(",")),void 0!=e&&(this.chunk2=e.replace('"',"").replace('"',"")),void 0!=s&&(this.chunk3=s.replace('"',"").replace('"',"")),void 0!=i&&(this.chunk4=i.replace('"',"").replace('"',"")),void 0!=r&&(this.chunk5=r.replace('"',"").replace('"',"")),void 0!=n&&(this.chunk6=n.replace('"',"").replace('"',"")),void 0!=o&&(this.chunk7=o.replace('"',"").replace('"',"")),void 0!=a&&(this.chunk8=a.replace('"',"").replace('"',"")),void 0!=l&&(this.chunk9=l.replace('"',"").replace('"',"")),void 0!=c&&(this.chunk10=c.replace('"',"").replace('"',"")),this.downloadableFile=t.concat(e).concat(s).concat(i).concat(r).concat(n).concat(o).concat(a).concat(l).concat(c)},stringChop(t,e){return null==t?[]:(t=String(t),e=~~e,e>0?t.match(new RegExp(".{1,"+e+"}","g")):[t])},editProfile(){y.Z.put("https://sheetdb.io/api/v1/1q4dfgpu4na0b/ID/1",{data:{chunk1:`${this.chunk1}`,chunk2:`${this.chunk2}`,chunk3:`${this.chunk3}`,chunk4:`${this.chunk4}`,chunk5:`${this.chunk5}`,chunk6:`${this.chunk6}`,chunk7:`${this.chunk7}`,chunk8:`${this.chunk8}`,chunk9:`${this.chunk9}`,chunk10:`${this.chunk10}`}}).then((t=>{200===t.status||201===t.status?(this.showUpdate=!this.showUpdate,setTimeout((()=>{this.showUpdate=!this.showUpdate}),3500)):(this.showError=!this.showError,setTimeout((()=>{this.showError=!this.showError}),3500))}))}}},k=b,S=s(4252),_=(0,S.Z)(k,f,v,!1,null,"76e80bae",null),w=_.exports},889:function(){}}]);
//# sourceMappingURL=views-ChunksTest.35a45faf.js.map