"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[304],{6872:function(t,e,s){s.r(e),s.d(e,{default:function(){return U}});var i=s(5223),n=s(4437),r=s(6035),o=s(5408),a=s(5057),l=s(2755),h=s(5294),c=s(4470),d=s(4791),u=s(4040),f=s(3276),p=s(1050),v=s(4987);const g=(0,v.Z)(u.Z,(0,d.d)("tabsBar"),f.Z);var m=g.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:()=>({proxyClass:"v-tab--active"}),computed:{classes(){return{"v-tab":!0,...u.Z.options.computed.classes.call(this),"v-tab--disabled":this.disabled,...this.groupClasses}},value(){let t=this.to||this.href;if(null==t)return t;if(this.$router&&this.to===Object(this.to)){const e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},methods:{click(t){this.disabled?t.preventDefault():(this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle())},toggle(){this.isActive&&(this.tabsBar.mandatory||this.to)||this.$emit("change")}},render(t){const{tag:e,data:s}=this.generateRouteLink();return s.attrs={...s.attrs,"aria-selected":String(this.isActive),role:"tab",tabindex:this.disabled?-1:0},s.on={...s.on,keydown:t=>{t.keyCode===p.Do.enter&&this.click(t),this.$emit("keydown",t)}},t(e,s,this.$slots.default)}}),w=s(7601),b=s(3134);const y=(0,v.Z)(w.Z,(0,d.d)("windowGroup","v-window-item","v-window"));var x=y.extend().extend().extend({name:"v-window-item",directives:{Touch:b.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,p.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick((()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=(0,p.kb)(t.clientHeight))}))}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((()=>[this.genWindowItem()])))}}),$=x.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem(){const t=x.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),C=(s(7658),s(1012)),S=s(3422),k=s(2021),O=s(4587),T=s(9495);function _(t){const e=.501,s=Math.abs(t);return Math.sign(t)*(s/((1/e-2)*(1-s)+1))}function Z(t,e,s,i){const n=t.clientWidth,r=s?e.content-t.offsetLeft-n:t.offsetLeft;s&&(i=-i);const o=e.wrapper+i,a=n+r,l=.4*n;return r<=i?i=Math.max(r-l,0):o<=a&&(i=Math.min(i-(o-a-l),e.content-e.wrapper)),s?-i:i}function B(t,e,s){const{offsetLeft:i,clientWidth:n}=t;if(s){const t=e.content-i-n/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,t))}{const t=i+n/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,t))}}const I=(0,v.Z)(k.y,O.Z).extend({name:"base-slide-group",directives:{Resize:T.Z,Touch:b.Z},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},showArrows:{type:[Boolean,String],validator:t=>"boolean"===typeof t||["always","desktop","mobile"].includes(t)}},data:()=>({isOverflowing:!1,resizeTimeout:0,startX:0,isSwipingHorizontal:!1,isSwiping:!1,scrollOffset:0,widths:{content:0,wrapper:0}}),computed:{canTouch(){return"undefined"!==typeof window},__cachedNext(){return this.genTransition("next")},__cachedPrev(){return this.genTransition("prev")},classes(){return{...k.y.options.computed.classes.call(this),"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing}},hasAffixes(){switch(this.showArrows){case"always":return!0;case"desktop":return!this.isMobile;case!0:return this.isOverflowing||Math.abs(this.scrollOffset)>0;case"mobile":return this.isMobile||this.isOverflowing||Math.abs(this.scrollOffset)>0;default:return!this.isMobile&&(this.isOverflowing||Math.abs(this.scrollOffset)>0)}},hasNext(){if(!this.hasAffixes)return!1;const{content:t,wrapper:e}=this.widths;return t>Math.abs(this.scrollOffset)+e},hasPrev(){return this.hasAffixes&&0!==this.scrollOffset}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset(t){this.$vuetify.rtl&&(t=-t);let e=t<=0?_(-t):t>this.widths.content-this.widths.wrapper?-(this.widths.content-this.widths.wrapper)+_(this.widths.content-this.widths.wrapper-t):-t;this.$vuetify.rtl&&(e=-e),this.$refs.content.style.transform=`translateX(${e}px)`}},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver((()=>{this.onResize()}));t.observe(this.$el),t.observe(this.$refs.content),this.$on("hook:destroyed",(()=>{t.disconnect()}))}else{let t=0;this.$on("hook:beforeUpdate",(()=>{var e;t=((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length})),this.$on("hook:updated",(()=>{var e;t!==((null===(e=this.$refs.content)||void 0===e?void 0:e.children)||[]).length&&this.setWidths()}))}},methods:{onScroll(){this.$refs.wrapper.scrollLeft=0},onFocusin(t){if(this.isOverflowing)for(const e of(0,p.iZ)(t))for(const t of this.items)if(t.$el===e)return void(this.scrollOffset=Z(t.$el,this.widths,this.$vuetify.rtl,this.scrollOffset))},genNext(){const t=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:()=>this.onAffixClick("next")},key:"next"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content",on:{focusin:this.onFocusin}},this.$slots.default)},genData(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon(t){let e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");const s=`${t[0].toUpperCase()}${t.slice(1)}`,i=this[`has${s}`];return this.showArrows||i?this.$createElement(C.Z,{props:{disabled:!i}},this[`${e}Icon`]):null},genPrev(){const t=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:()=>this.onAffixClick("prev")},key:"prev"},[t])},genTransition(t){return this.$createElement(S.Z5,[this.genIcon(t)])},genWrapper(){return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:t=>this.overflowCheck(t,this.onTouchStart),move:t=>this.overflowCheck(t,this.onTouchMove),end:t=>this.overflowCheck(t,this.onTouchEnd)}}],ref:"wrapper",on:{scroll:this.onScroll}},[this.genContent()])},calculateNewOffset(t,e,s,i){const n=s?-1:1,r=n*i+("prev"===t?-1:1)*e.wrapper;return n*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick(t){this.$emit(`click:${t}`),this.scrollTo(t)},onResize(){this._isDestroyed||this.setWidths()},onTouchStart(t){const{content:e}=this.$refs;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove(t){if(this.canTouch){if(!this.isSwiping){const e=t.touchmoveX-t.touchstartX,s=t.touchmoveY-t.touchstartY;this.isSwipingHorizontal=Math.abs(e)>Math.abs(s),this.isSwiping=!0}this.isSwipingHorizontal&&(this.scrollOffset=this.startX-t.touchmoveX,document.documentElement.style.overflowY="hidden")}},onTouchEnd(){if(!this.canTouch)return;const{content:t,wrapper:e}=this.$refs,s=t.clientWidth-e.clientWidth;t.style.setProperty("transition",null),t.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-s&&(this.scrollOffset=-s):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=s&&(this.scrollOffset=s),this.isSwiping=!1,document.documentElement.style.removeProperty("overflow-y")},overflowCheck(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView(){if(!this.selectedItem&&this.items.length){const t=this.items[this.items.length-1].$el.getBoundingClientRect(),e=this.$refs.wrapper.getBoundingClientRect();(this.$vuetify.rtl&&e.right<t.right||!this.$vuetify.rtl&&e.left>t.left)&&this.scrollTo("prev")}this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=B(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=Z(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},scrollTo(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths(){window.requestAnimationFrame((()=>{if(this._isDestroyed)return;const{content:t,wrapper:e}=this.$refs;this.widths={content:t?t.clientWidth:0,wrapper:e?e.clientWidth:0},this.isOverflowing=this.widths.wrapper+1<this.widths.content,this.scrollIntoView()}))}},render(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}});I.extend({name:"v-slide-group",provide(){return{slideGroup:this}}});var P=s(8574),A=(0,v.Z)(I,P.Z,f.Z).extend({name:"v-tabs-bar",provide(){return{tabsBar:this}},computed:{classes(){return{...I.options.computed.classes.call(this),"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows,...this.themeClasses}}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider(){this.isBooted&&this.$emit("call:slider")},genContent(){const t=I.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange(t,e){if(this.mandatory)return;const s=this.items,i=t.path,n=e.path;let r=!1,o=!1;for(const a of s)if(a.to===n?o=!0:a.to===i&&(r=!0),r&&o)break;!r&&o&&(this.internalValue=void 0)}},render(t){const e=I.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),R=s(1903),E=k.y.extend({name:"v-window",directives:{Touch:b.Z},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...k.y.options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find((t=>!t.disabled)))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex(((t,e)=>this.internalValue===this.getValue(t,e)))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame((()=>this.isBooted=!0))},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var i,n,r;const o={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},a={"aria-label":this.$vuetify.lang.t(`$vuetify.carousel.${t}`)},l=null!==(r=null===(n=(i=this.$scopedSlots)[t])||void 0===n?void 0:n.call(i,{on:o,attrs:a}))&&void 0!==r?r:[this.$createElement(R.Z,{props:{icon:!0},attrs:a,on:o},[this.$createElement(C.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:`v-window__${t}`},l)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,i=s-1;return s<=2?t<e:t===i&&0===e||(0!==t||e!==i)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}}),M=E.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes(){return{...E.options.computed.classes.call(this),"v-tabs-items":!0}},isDark(){return this.rootIsDark}},methods:{getValue(t,e){return t.id||k.y.options.methods.getValue.call(this,t,e)}}}),z=s(8914),D=(0,v.Z)(z.Z).extend({name:"v-tabs-slider",render(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),N=s(3939);const W=(0,v.Z)(z.Z,N.Z,f.Z);var j=W.extend().extend({name:"v-tabs",directives:{Resize:T.Z},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakpoint:[String,Number],nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:[Boolean,String],sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes(){return{"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical,...this.themeClasses}},isReversed(){return this.$vuetify.rtl&&this.vertical},sliderStyles(){return{height:(0,p.kb)(this.slider.height),left:this.isReversed?void 0:(0,p.kb)(this.slider.left),right:this.isReversed?(0,p.kb)(this.slider.right):void 0,top:this.vertical?(0,p.kb)(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:(0,p.kb)(this.slider.width)}},computedColor(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",iconsAndText:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted(){if("undefined"!==typeof ResizeObserver){const t=new ResizeObserver((()=>{this.onResize()}));t.observe(this.$el),this.$on("hook:destroyed",(()=>{t.disconnect()}))}this.$nextTick((()=>{window.setTimeout(this.callSlider,30)}))},methods:{callSlider(){return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((()=>{const t=this.$refs.items.selectedItems[0];if(!t||!t.$el)return this.slider.width=0,void(this.slider.left=0);const e=t.$el;this.slider={height:this.vertical?e.scrollHeight:Number(this.sliderSize),left:this.vertical?0:e.offsetLeft,right:this.vertical?0:e.offsetLeft+e.offsetWidth,top:e.offsetTop,width:this.vertical?Number(this.sliderSize):e.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar(t,e){const s={style:{height:(0,p.kb)(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakpoint:this.mobileBreakpoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:t=>{this.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,s),this.setBackgroundColor(this.backgroundColor,s),this.$createElement(A,s,[this.genSlider(e),t])},genItems(t,e){return t||(e.length?this.$createElement(M,{props:{value:this.internalValue},on:{change:t=>{this.internalValue=t}}},e):null)},genSlider(t){return this.hideSlider?null:(t||(t=this.$createElement(D,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes(){let t=null,e=null;const s=[],i=[],n=this.$slots.default||[],r=n.length;for(let o=0;o<r;o++){const r=n[o];if(r.componentOptions)switch(r.componentOptions.Ctor.options.name){case"v-tabs-slider":e=r;break;case"v-tabs-items":t=r;break;case"v-tab-item":s.push(r);break;default:i.push(r)}else i.push(r)}return{tab:i,slider:e,items:t,item:s}}},render(t){const{tab:e,slider:s,items:i,item:n}=this.parseNodes();return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(e,s),this.genItems(i,n)])}}),X=function(){var t=this,e=t._self._c;return"true"===t.logado?e(r.Z,{attrs:{id:"dashboard-view",fluid:"",tag:"section"}},[e(h.Z,[e(n.Z,{attrs:{cols:"12"}},[e(h.Z,t._l(t.charts,(function(s,i){return e(n.Z,{key:`chart-${i}`,attrs:{cols:"12",md:"6",lg:"4"}},[e("material-chart-card",{attrs:{color:s.color,data:s.data,options:s.options,"responsive-options":s.responsiveOptions,title:s.title,type:s.type},scopedSlots:t._u([{key:"subtitle",fn:function(){return[e("div",{staticClass:"font-weight-light text--secondary"},[e("div",{domProps:{innerHTML:t._s(s.subtitle)}})])]},proxy:!0},{key:"actions",fn:function(){return[e(a.Z,{staticClass:"mr-1",attrs:{small:""}},[t._v(" mdi-clock-outline ")]),e("span",{staticClass:"text-caption grey--text font-weight-light",domProps:{textContent:t._s(s.time)}})]},proxy:!0}],null,!0)})],1)})),1)],1),t._l(t.stats,(function({actionIcon:s,actionText:i,...r},o){return e(n.Z,{key:o,attrs:{cols:"12",md:"4",lg:"4"}},[e("material-stat-card",t._b({scopedSlots:t._u([{key:"actions",fn:function(){return[e(a.Z,{staticClass:"mr-2",attrs:{small:""},domProps:{textContent:t._s(s)}}),e("div",{staticClass:"text-truncate"},[t._v(" "+t._s(i)+" ")])]},proxy:!0}],null,!0)},"material-stat-card",r,!1))],1)})),e(n.Z,{attrs:{cols:"12",md:"6"}},[e("material-card",{attrs:{color:"orange","full-header":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e("div",{staticClass:"pa-8 white--text"},[e("div",{staticClass:"text-h4 font-weight-light"},[t._v(" Desempenho dos Colaboradores ")]),e("div",{staticClass:"text-caption"},[t._v(" Período: [PERÍODO] ")])])]},proxy:!0}],null,!1,4103211144)},[e(i.ZB,[e(o.Z,{attrs:{headers:t.headers,items:t.items}})],1)],1)],1),e(n.Z,{attrs:{cols:"12",md:"6"}},[e("material-card",{attrs:{color:"accent","full-header":""},scopedSlots:t._u([{key:"heading",fn:function(){return[e(j,{staticClass:"pa-8",attrs:{"background-color":"transparent","slider-color":"white"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[e("span",{staticClass:"subheading font-weight-light mx-3",staticStyle:{"align-self":"center"}},[t._v("Tarefas:")]),e(m,{staticClass:"mr-3"},[e(a.Z,{staticClass:"mr-2"},[t._v(" mdi-cancel ")]),t._v(" Erros ")],1),e(m,{staticClass:"mr-3"},[e(a.Z,{staticClass:"mr-2"},[t._v(" mdi-clock-fast ")]),t._v(" Atrasos ")],1),e(m,[e(a.Z,{staticClass:"mr-2"},[t._v(" mdi-arrow-right ")]),t._v(" Em andamento ")],1)],1)]},proxy:!0}],null,!1,2830701063)},[e(M,{attrs:{"background-color":"transparent"},model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},t._l(3,(function(s){return e($,{key:s},[e(i.ZB,[t._l(t.tasks[t.tabs],(function(s,i){return[e(h.Z,{key:i,staticClass:"flex-nowrap",attrs:{align:"center"}},[e(n.Z,{attrs:{cols:"1"}},[e(l.Z,[e(c.Z,{attrs:{color:"secondary"},model:{value:s.value,callback:function(e){t.$set(s,"value",e)},expression:"task.value"}})],1)],1),e(n.Z,{staticClass:"font-weight-light",attrs:{cols:"8"},domProps:{textContent:t._s(s.text)}}),e(n.Z,{staticClass:"text-right",attrs:{cols:"auto"}},[e(a.Z,{staticClass:"mx-1"},[t._v(" mdi-pencil ")]),e(a.Z,{staticClass:"mx-1",attrs:{color:"error"}},[t._v(" mdi-close ")])],1)],1)]}))],2)],1)})),1)],1)],1)],2)],1):t._e()},H=[],L=s(7033),V=s(144);const G=V.ZP.chartist.Interpolation.cardinal({tension:0});var Y={name:"DashboardView",data:()=>({logado:window.localStorage.logado,charts:[{type:"Bar",color:"primary",title:"Taxas Pagas",subtitle:"Performance do Mês",time:"atualizado há [tempo] minutos",data:{labels:["Ja","Fe","Ma","Ab","Ma","Jn","Jl","Ag","Se","Ou","No","De"],series:[[350,400,700,400,200,453,326,434,568,610,756,895]]},options:{axisX:{showGrid:!1},low:0,high:1e3,chartPadding:{top:0,right:5,bottom:0,left:0}},responsiveOptions:[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(t){return t[0]}}}]]},{type:"Line",color:"primary",title:"Vendas Hoje",subtitle:'Crescimento de <i class="mdi mdi-arrow-up green--text"></i><span class="green--text">55%</span>&nbsp; hoje',time:"atualizado há [tempo] minutos",data:{labels:["8h","9h","10h","11h","12h","13h","15h","17h"],series:[[230,750,550,400,10,240,400,390]]},options:{lineSmooth:G,low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}},{type:"Line",color:"primary",title:"Boletos Recebidos",subtitle:"Boletos pagos por nossos clientes",time:"informações da última semana",data:{labels:["Seg","Ter","Qua","Qui","Sex","Sab"],series:[[120,170,700,170,230,100]]},options:{lineSmooth:G,low:0,high:1e3,chartPadding:{top:0,right:0,bottom:0,left:0}}}],headers:[{sortable:!1,text:"ID",value:"id"},{sortable:!0,text:"Nome",value:"name"},{sortable:!0,text:"Salário",value:"salary"},{sortable:!0,text:"Cidade",value:"city"}],items:[{id:1,name:"Jéssica",city:"Colombo",salary:"5.738,00"},{id:2,name:"Jeniffer",city:"Colombo",salary:"3.738,00"},{id:3,name:"Thainara",city:"Curitiba",salary:"5.142,00"},{id:4,name:"Karoline",city:"Colombo",salary:"5.735,00"},{id:5,name:"Ghabriel",city:"Curitiba",salary:"3.542,00"}],stats:[{actionIcon:"mdi-alert",actionText:"Contrate Mais Espaço...",color:"#FD9A13",icon:"mdi-rocket",title:"Lançamentos de [PERÍODO]",value:"9.840"},{actionIcon:"mdi-calendar-range",actionText:"[PERÍODO]",color:"pink",icon:"mdi-cash-fast",title:"Taxas Pagas",value:"R$25.132,00"},{actionIcon:"mdi-calendar-range",actionText:"[PERÍODO]",color:"success",icon:"mdi-cash-register",title:"Receita",value:"R$34.245,00"}],tabs:0,tasks:{0:[{text:'Sign contract for "What are conference organizers afraid of?"',value:!0},{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!1},{text:"Create 4 Invisible User Experiences you Never Knew About",value:!0}],1:[{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!1}],2:[{text:"Lines From Great Russian Literature? Or E-mails From My Boss?",value:!1},{text:"Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit",value:!0},{text:'Sign contract for "What are conference organizers afraid of?"',value:!0}]}}),computed:{sales:(0,L.U2)("sales/sales"),totalSales(){return this.sales.reduce(((t,e)=>t+e.salesInM),0)}}},F=Y,q=s(1001),J=(0,q.Z)(F,X,H,!1,null,null,null),U=J.exports},2935:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("div",[e("dashboard-view")],1)},n=[],r=s(6872),o={name:"TestsView",components:{DashboardView:()=>Promise.resolve().then(s.bind(s,6872))},data:()=>({DashboardView:r["default"]})},a=o,l=s(1001),h=(0,l.Z)(a,i,n,!1,null,null,null),c=h.exports},1903:function(t,e,s){var i=s(7179);e["Z"]=i.Z},4437:function(t,e,s){s(7658),s(1884);var i=s(144),n=s(2653),r=s(1050);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),l=(()=>o.reduce(((t,e)=>(t["offset"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),h=(()=>o.reduce(((t,e)=>(t["order"+(0,r.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c={col:Object.keys(a),offset:Object.keys(l),order:Object.keys(h)};function d(t,e,s){let i=t;if(null!=s&&!1!==s){if(e){const s=e.replace(t,"");i+=`-${s}`}return"col"!==t||""!==s&&!0!==s?(i+=`-${s}`,i.toLowerCase()):i.toLowerCase()}}const u=new Map;e["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...l,order:{type:[String,Number],default:null},...h,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:s,children:i,parent:r}){let o="";for(const n in e)o+=String(e[n]);let a=u.get(o);if(!a){let t;for(t in a=[],c)c[t].forEach((s=>{const i=e[s],n=d(t,s,i);n&&a.push(n)}));const s=a.some((t=>t.startsWith("col-")));a.push({col:!s||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),u.set(o,a)}return t(e.tag,(0,n.ZP)(s,{class:a}),i)}})},6035:function(t,e,s){s.d(e,{Z:function(){return o}});s(9027),s(1884);var i=s(144);function n(t){return i.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:s,data:i,children:n}){i.staticClass=`${t} ${i.staticClass||""}`.trim();const{attrs:r}=i;if(r){i.attrs={};const t=Object.keys(r).filter((t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(i.staticClass+=` ${t.join(" ")}`)}return s.id&&(i.domProps=i.domProps||{},i.domProps.id=s.id),e(s.tag,i,n)}})}var r=s(2653),o=n("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:s,children:i}){let n;const{attrs:o}=s;return o&&(s.attrs={},n=Object.keys(o).filter((t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(s.domProps=s.domProps||{},s.domProps.id=e.id),t(e.tag,(0,r.ZP)(s,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),i)}})},5294:function(t,e,s){s(7658),s(1884);var i=s(144),n=s(2653),r=s(1050);const o=["sm","md","lg","xl"],a=["start","end","center"];function l(t,e){return o.reduce(((s,i)=>(s[t+(0,r.jC)(i)]=e(),s)),{})}const h=t=>[...a,"baseline","stretch"].includes(t),c=l("align",(()=>({type:String,default:null,validator:h}))),d=t=>[...a,"space-between","space-around"].includes(t),u=l("justify",(()=>({type:String,default:null,validator:d}))),f=t=>[...a,"space-between","space-around","stretch"].includes(t),p=l("alignContent",(()=>({type:String,default:null,validator:f}))),v={align:Object.keys(c),justify:Object.keys(u),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,s){let i=g[t];if(null!=s){if(e){const s=e.replace(t,"");i+=`-${s}`}return i+=`-${s}`,i.toLowerCase()}}const w=new Map;e["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h},...c,justify:{type:String,default:null,validator:d},...u,alignContent:{type:String,default:null,validator:f},...p},render(t,{props:e,data:s,children:i}){let r="";for(const n in e)r+=String(e[n]);let o=w.get(r);if(!o){let t;for(t in o=[],v)v[t].forEach((s=>{const i=e[s],n=m(t,s,i);n&&o.push(n)}));o.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),w.set(r,o)}return t(e.tag,(0,n.ZP)(s,{staticClass:"row",class:o}),i)}})},3134:function(t,e,s){var i=s(1050);const n=t=>{const{touchstartX:e,touchendX:s,touchstartY:i,touchendY:n}=t,r=.5,o=16;t.offsetX=s-e,t.offsetY=n-i,Math.abs(t.offsetY)<r*Math.abs(t.offsetX)&&(t.left&&s<e-o&&t.left(t),t.right&&s>e+o&&t.right(t)),Math.abs(t.offsetX)<r*Math.abs(t.offsetY)&&(t.up&&n<i-o&&t.up(t),t.down&&n>i+o&&t.down(t))};function r(t,e){const s=t.changedTouches[0];e.touchstartX=s.clientX,e.touchstartY=s.clientY,e.start&&e.start(Object.assign(t,e))}function o(t,e){const s=t.changedTouches[0];e.touchendX=s.clientX,e.touchendY=s.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function a(t,e){const s=t.changedTouches[0];e.touchmoveX=s.clientX,e.touchmoveY=s.clientY,e.move&&e.move(Object.assign(t,e))}function l(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>r(t,e),touchend:t=>o(t,e),touchmove:t=>a(t,e)}}function h(t,e,s){const n=e.value,r=n.parent?t.parentElement:t,o=n.options||{passive:!0};if(!r)return;const a=l(e.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[s.context._uid]=a,(0,i.XP)(a).forEach((t=>{r.addEventListener(t,a[t],o)}))}function c(t,e,s){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const r=n._touchHandlers[s.context._uid];(0,i.XP)(r).forEach((t=>{n.removeEventListener(t,r[t])})),delete n._touchHandlers[s.context._uid]}const d={inserted:h,unbind:c};e["Z"]=d},8574:function(t,e,s){var i=s(144);e["Z"]=i.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},1884:function(){}}]);
//# sourceMappingURL=views-TestsView.1a067fe3.js.map