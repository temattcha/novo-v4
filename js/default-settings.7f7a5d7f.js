"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[369],{3022:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var s=i(8819),n=i(3385),r=i(5223),a=i(4437),o=i(4192),l=i(5057),u=i(4791),h=i(4987),c=i(6596),d=i(144);const p=d.ZP.extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return(0,c.Kd)("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):((0,c.Kd)("v-item should only contain a single element",this),t)}});var v=(0,h.Z)(p,(0,u.d)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),m=i(2021),f=i(1495),g=i(5294),y=i(5234),b=(i(7393),i(1465)),x=i(3316),C=i(3134),S=i(3422),$=i(6275),Z=i(1050),k=b.Z.extend({name:"v-switch",directives:{Touch:C.Z},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...x.Z.options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){const{title:t,...e}=this.attrs$;return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.attrs,...e}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(S.b0,{},[!1===this.loading?null:this.$slots.progress||this.$createElement($.Z,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===Z.Do.left&&this.isActive||t.keyCode===Z.Do.right&&!this.isActive)&&this.onChange()}}}),w=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"settings-wrapper"}},[e(n.Z,{staticClass:"pa-2",staticStyle:{position:"fixed",top:"90%",right:"-40px","border-radius":"8px","z-index":"10"},attrs:{id:"settings",color:"rgba(0, 0, 0, .3)",dark:"",flat:"",link:"","min-width":"100"}},[e(l.Z,{attrs:{large:""}},[t._v(" mdi-cog ")])],1),e(f.Z,{attrs:{"close-on-content-click":!1,activator:"#settings",bottom:"","content-class":"v-settings",left:"","nudge-left":"8","offset-x":"",origin:"top right",transition:"scale-transition"},model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(n.Z,{staticClass:"text-center mb-0",attrs:{width:"300"}},[e(r.ZB,[e("strong",{staticClass:"mb-3 d-inline-block"},[t._v("Escolha o tema que te agrada!")]),e(m.Z,{attrs:{mandatory:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},t._l(t.colors,(function(i){return e(v,{key:i,attrs:{value:i},scopedSlots:t._u([{key:"default",fn:function({active:t,toggle:n}){return[e(s.Z,{staticClass:"v-settings__item mx-1",class:t&&"v-settings__item--active",attrs:{color:i,size:"25"},on:{click:n}})]}}],null,!0)})})),1),e(o.Z,{staticClass:"my-4 amber"}),e(g.Z,{attrs:{align:"center","no-gutters":""}},[e(a.Z,{attrs:{cols:"auto"}},[t._v(" Modo Noite ")]),e(y.Z),e(a.Z,{attrs:{cols:"auto"}},[e(k,{staticClass:"ma-0 pa-0",attrs:{color:"amber","hide-details":""},model:{value:t.$vuetify.theme.dark,callback:function(e){t.$set(t.$vuetify.theme,"dark",e)},expression:"$vuetify.theme.dark"}})],1)],1)],1)],1)],1)],1)},B=[],V=i(3939),A=i(7033),_={name:"DashboardCoreSettings",mixins:[V.Z],data:()=>({color:"#FFC107",colors:["#FFC107","#E91E63","#4CAF50","#00BCD4","#607D8B","#000000"],menu:!1}),computed:{...(0,A.Z_)("app",["drawer","drawerImage","mini"]),...(0,A.Z_)("user",["drawer@gradient","drawer@image"]),...(0,A.U2)("user",["images","gradients"])},watch:{color(t){this.$vuetify.theme.themes.dark.primary=t,this.$vuetify.theme.themes.light.primary=t}}},z=_,j=i(1001),O=(0,j.Z)(z,w,B,!1,null,null,null),I=O.exports},8819:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(8914),n=i(9196),r=i(3960),a=i(1050),o=i(4987),l=(0,o.Z)(s.Z,n.Z,r.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,a.kb)(this.size),minWidth:(0,a.kb)(this.size),width:(0,a.kb)(this.size),...this.measurableStyles}}},render(t){const e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})},5223:function(t,e,i){i.d(e,{EB:function(){return l},ZB:function(){return o},h7:function(){return r}});var s=i(3385),n=i(1050);const r=(0,n.Ji)("v-card__actions"),a=(0,n.Ji)("v-card__subtitle"),o=(0,n.Ji)("v-card__text"),l=(0,n.Ji)("v-card__title");s.Z},4192:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(3276),n=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},4437:function(t,e,i){i(7658),i(1884);var s=i(144),n=i(2653),r=i(1050);const a=["sm","md","lg","xl"],o=(()=>a.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>a.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),u=(()=>a.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h={col:Object.keys(o),offset:Object.keys(l),order:Object.keys(u)};function c(t,e,i){let s=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");s+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(s+=`-${i}`,s.toLowerCase()):s.toLowerCase()}}const d=new Map;e["Z"]=s.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...o,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:s,parent:r}){let a="";for(const n in e)a+=String(e[n]);let o=d.get(a);if(!o){let t;for(t in o=[],h)h[t].forEach((i=>{const s=e[i],n=c(t,i,s);n&&o.push(n)}));const i=o.some((t=>t.startsWith("col-")));o.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),d.set(a,o)}return t(e.tag,(0,n.ZP)(i,{class:o}),s)}})},5294:function(t,e,i){i(7658),i(1884);var s=i(144),n=i(2653),r=i(1050);const a=["sm","md","lg","xl"],o=["start","end","center"];function l(t,e){return a.reduce(((i,s)=>(i[t+(0,r.jC)(s)]=e(),i)),{})}const u=t=>[...o,"baseline","stretch"].includes(t),h=l("align",(()=>({type:String,default:null,validator:u}))),c=t=>[...o,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:c}))),p=t=>[...o,"space-between","space-around","stretch"].includes(t),v=l("alignContent",(()=>({type:String,default:null,validator:p}))),m={align:Object.keys(h),justify:Object.keys(d),alignContent:Object.keys(v)},f={align:"align",justify:"justify",alignContent:"align-content"};function g(t,e,i){let s=f[t];if(null!=i){if(e){const i=e.replace(t,"");s+=`-${i}`}return s+=`-${i}`,s.toLowerCase()}}const y=new Map;e["Z"]=s.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...h,justify:{type:String,default:null,validator:c},...d,alignContent:{type:String,default:null,validator:p},...v},render(t,{props:e,data:i,children:s}){let r="";for(const n in e)r+=String(e[n]);let a=y.get(r);if(!a){let t;for(t in a=[],m)m[t].forEach((i=>{const s=e[i],n=g(t,i,s);n&&a.push(n)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),y.set(r,a)}return t(e.tag,(0,n.ZP)(i,{staticClass:"row",class:a}),s)}})},5234:function(t,e,i){i(9027);var s=i(1050);e["Z"]=(0,s.Ji)("spacer","div","v-spacer")},2021:function(t,e,i){i.d(e,{y:function(){return l},Z:function(){return u}});i(7658);var s=i(564),n=i(3939),r=i(3276),a=i(4987),o=i(6596);const l=(0,a.Z)(s.Z,n.Z,r.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((t,e)=>this.toggleMethod(this.getValue(t,e))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return t=>this.valueComparator(this.internalValue,t);const t=this.internalValue;return Array.isArray(t)?e=>t.some((t=>this.valueComparator(t,e))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,o.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(t,e){return void 0===t.value?e:t.value},onClick(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register(t){const e=this.items.push(t)-1;t.$on("change",(()=>this.onClick(t))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,e)},unregister(t){if(this._isDestroyed)return;const e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);const s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((t=>t!==i)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(t,e){const i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory(t){if(!this.items.length)return;const e=this.items.slice();t&&e.reverse();const i=e.find((t=>!t.disabled));if(!i)return;const s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))},updateMultiple(t){const e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((e=>this.valueComparator(e,t)));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle(t){const e=this.valueComparator(this.internalValue,t);this.mandatory&&e||(this.internalValue=e?void 0:t)}},render(t){return t(this.tag,this.genData(),this.$slots.default)}});var u=l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},6275:function(t,e,i){i.d(e,{Z:function(){return a}});var s=i(1558),n=i(8914),r=i(1050),a=n.Z.extend({name:"v-progress-circular",directives:{intersect:s.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,r.kb)(this.calculatedSize),width:(0,r.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(t,e){return this.$createElement("circle",{class:`v-progress-circular__${t}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg(){const t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},t)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(t,e,i){this.isVisible=i}},render(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},9868:function(t,e,i){i.d(e,{Z:function(){return h}});var s=i(4609),n=i(8914),r=i(5303),a=i(9196),o=i(3960),l=i(3276),u=i(4987),h=(0,u.Z)(s.Z,n.Z,r.Z,a.Z,o.Z,l.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(t){const e={class:this.classes,style:this.styles,on:this.listeners$};return t(this.tag,this.setBackgroundColor(this.color,e),this.$slots.default)}})},2925:function(t,e,i){var s=i(9868);e["Z"]=s.Z},1558:function(t,e,i){function s(t,e,i){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const s=e.modifiers||{},r=e.value,{handler:a,options:o}="object"===typeof r?r:{handler:r,options:{}},l=new IntersectionObserver(((r=[],o)=>{var l;const u=null===(l=t._observe)||void 0===l?void 0:l[i.context._uid];if(!u)return;const h=r.some((t=>t.isIntersecting));!a||s.quiet&&!u.init||s.once&&!h&&!u.init||a(r,o,h),h&&s.once?n(t,e,i):u.init=!0}),o);t._observe=Object(t._observe),t._observe[i.context._uid]={init:!1,observer:l},l.observe(t)}function n(t,e,i){var s;const n=null===(s=t._observe)||void 0===s?void 0:s[i.context._uid];n&&(n.observer.unobserve(t),delete t._observe[i.context._uid])}const r={inserted:s,unbind:n};e["Z"]=r},3134:function(t,e,i){var s=i(1050);const n=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:n}=t,r=.5,a=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<s-a&&t.up(t),t.down&&n>s+a&&t.down(t))};function r(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function o(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>a(t,e),touchmove:t=>o(t,e)}}function u(t,e,i){const n=e.value,r=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!r)return;const o=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[i.context._uid]=o,(0,s.XP)(o).forEach((t=>{r.addEventListener(t,o[t],a)}))}function h(t,e,i){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[i.context._uid];(0,s.XP)(r).forEach((t=>{n.removeEventListener(t,r[t])})),delete n._touchHandlers[i.context._uid]}const c={inserted:u,unbind:h};e["Z"]=c},4609:function(t,e,i){var s=i(144);function n(t){return function(e,i){for(const s in i)Object.prototype.hasOwnProperty.call(e,s)||this.$delete(this.$data[t],s);for(const s in e)this.$set(this.$data[t],s,e[s])}}e["Z"]=s.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",n("attrs$"),{immediate:!0}),this.$watch("$listeners",n("listeners$"),{immediate:!0})}})},7601:function(t,e,i){var s=i(6596),n=i(144);e["Z"]=n.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,s.Jk)("lazy",this)},methods:{showLazyContent(t){return this.hasContent&&t?t():[this.$createElement()]}}})},8914:function(t,e,i){var s=i(144),n=i(6596),r=i(8604);e["Z"]=s.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(t,e={}){return"string"===typeof e.style?((0,n.N6)("style must be an object",this),e):"string"===typeof e.class?((0,n.N6)("class must be an object",this),e):((0,r.NA)(t)?e.style={...e.style,"background-color":`${t}`,"border-color":`${t}`}:t&&(e.class={...e.class,[t]:!0}),e)},setTextColor(t,e={}){if("string"===typeof e.style)return(0,n.N6)("style must be an object",this),e;if("string"===typeof e.class)return(0,n.N6)("class must be an object",this),e;if((0,r.NA)(t))e.style={...e.style,color:`${t}`,"caret-color":`${t}`};else if(t){const[i,s]=t.toString().trim().split(" ",2);e.class={...e.class,[i+"--text"]:!0},s&&(e.class["text--"+s]=!0)}return e}}})},564:function(t,e,i){var s=i(144),n=i(1050);e["Z"]=s.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.vZ}}})},5303:function(t,e,i){var s=i(144);e["Z"]=s.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const t=this.computedElevation;return null==t||isNaN(parseInt(t))?{}:{[`elevation-${this.elevation}`]:!0}}}})},4791:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(380);function n(t,e,i){return(0,s.f)(t,e,i).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[t])return this[t].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[t]&&this[t].register(this)},beforeDestroy(){this[t]&&this[t].unregister(this)},methods:{toggle(){this.$emit("change")}}})}n("itemGroup")},9196:function(t,e,i){var s=i(1050),n=i(144);e["Z"]=n.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const t={},e=(0,s.kb)(this.height),i=(0,s.kb)(this.minHeight),n=(0,s.kb)(this.minWidth),r=(0,s.kb)(this.maxHeight),a=(0,s.kb)(this.maxWidth),o=(0,s.kb)(this.width);return e&&(t.height=e),i&&(t.minHeight=i),n&&(t.minWidth=n),r&&(t.maxHeight=r),a&&(t.maxWidth=a),o&&(t.width=o),t}}})},8386:function(t,e,i){i.d(e,{d:function(){return a}});var s=i(144),n=i(1050);const r={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function a(t=[]){return s.ZP.extend({name:"positionable",props:t.length?(0,n.ji)(r,t):r})}e["Z"]=a()},3939:function(t,e,i){var s=i(144);function n(t="value",e="change"){return s.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=n();e["Z"]=r},380:function(t,e,i){i.d(e,{J:function(){return o},f:function(){return a}});var s=i(144),n=i(6596);function r(t,e){return()=>(0,n.Kd)(`The ${t} component must be used inside a ${e}`)}function a(t,e,i){const n=e&&i?{register:r(e,i),unregister:r(e,i)}:null;return s.ZP.extend({name:"registrable-inject",inject:{[t]:{default:n}}})}function o(t,e=!1){return s.ZP.extend({name:"registrable-provide",provide(){return{[t]:e?this:{register:this.register,unregister:this.unregister}}}})}},3960:function(t,e,i){i(7658);var s=i(144);e["Z"]=s.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const t=[],e="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)t.push("rounded-0");else if("string"===typeof e){const i=e.split(" ");for(const e of i)t.push(`rounded-${e}`)}else e&&t.push("rounded");return t.length>0?{[t.join(" ")]:!0}:{}}}})},4040:function(t,e,i){var s=i(144),n=i(3176),r=i(1050);e["Z"]=s.ZP.extend({name:"routable",directives:{Ripple:n.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const t={};return this.to||(this.activeClass&&(t[this.activeClass]=this.isActive),this.proxyClass&&(t[this.proxyClass]=this.isActive)),t},computedRipple(){var t;return null!==(t=this.ripple)&&void 0!==t?t:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let t,e=this.exact;const i={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(e="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let s=this.activeClass,n=this.exactActiveClass||s;this.proxyClass&&(s=`${s} ${this.proxyClass}`.trim(),n=`${n} ${this.proxyClass}`.trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(i.props,{to:this.to,exact:e,exactPath:this.exactPath,activeClass:s,exactActiveClass:n,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(i.attrs.href=this.href);return this.target&&(i.attrs.target=this.target),{tag:t,data:i}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const t=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),e=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||t,i="_vnode.data.class."+(this.exact?e:t);this.$nextTick((()=>{!(0,r.vO)(this.$refs.link,i)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},1465:function(t,e,i){i.d(e,{Z:function(){return h}});i(7658);var s=i(3316),n=i(3176),r=i(144),a=r.ZP.extend({name:"rippleable",directives:{ripple:n.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}}),o=i(564),l=i(4987);function u(t){t.preventDefault()}var h=(0,l.Z)(s.Z,a,o.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some((e=>this.valueComparator(e,t))):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=s.Z.options.methods.genLabel.call(this);return t?(t.data.on={click:u},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:u},ref:"input"})},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter((e=>!this.valueComparator(e,t))),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(t){this.isFocused=!0,this.$emit("focus",t)},onBlur(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown(t){}}})},281:function(t,e,i){var s=i(144);e["Z"]=s.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},6470:function(t,e,i){i.d(e,{d:function(){return n}});var s=i(144);function n(t="value",e="input"){return s.ZP.extend({name:"toggleable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{isActive:!!this[t]}},watch:{[t](t){this.isActive=!!t},isActive(i){!!i!==this[t]&&this.$emit(e,i)}}})}const r=n();e["Z"]=r},1884:function(){},9027:function(){},7393:function(){}}]);
//# sourceMappingURL=default-settings.7f7a5d7f.js.map