"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[365],{2018:function(t,e,s){s.r(e),s.d(e,{default:function(){return Z}});var i=s(4568),o=s(7179),r=s(3385),n=s(4437),a=s(6035),l=s(6904),c=s(8236),d=s(5294),u=s(5251),h=function(){var t=this,e=t._self._c;return"true"==t.logado?e(a.Z,{attrs:{fluid:"",tag:"section"}},[e(c.Z,{attrs:{value:t.showUpdate}},[e(i.Z,{staticClass:"alert-banner",attrs:{icon:"mdi-check",prominent:"",shaped:"",type:"success",transition:"scale-transition"}},[t._v(" Perfil atualizado com sucesso! ")])],1),e(c.Z,{attrs:{value:t.showError}},[e(i.Z,{staticClass:"position-fixed",attrs:{icon:"mdi-alert",prominent:"",shaped:"",type:"error",transition:"scale-transition"}},[t._v(" Erro ao atualizar perfil. ")])],1),e(d.Z,{attrs:{justify:"center"}},[e(n.Z,{attrs:{cols:"12",md:"8"}},[e(r.Z,{staticClass:"mt-7 mb-10 mb-md-0"},[e(d.Z,[e(n.Z,{attrs:{cols:"12"}},[e("h3",{staticClass:"font-weight-medium ms-5 mb-10"},[t._v(" Editar Perfil — "),e("small",{staticClass:"text-body-1"},[t._v("Atualize as informações da empresa")])])])],1),e(l.Z,[e(a.Z,{staticClass:"py-0"},[e(d.Z,[e(n.Z,{attrs:{cols:"6",md:"3"}},[e(u.Z,{attrs:{disabled:"",label:"Empresa",outlined:""},model:{value:t.items.RAZAOSOCIAL,callback:function(e){t.$set(t.items,"RAZAOSOCIAL",e)},expression:"items.RAZAOSOCIAL"}})],1),e(n.Z,{attrs:{cols:"6",md:"3"}},[e(u.Z,{attrs:{disabled:"",color:"blue",label:"PJ"===t.items.TIPO?"CNPJ":"CPF",outlined:""},model:{value:t.items.CNPJ,callback:function(e){t.$set(t.items,"CNPJ",e)},expression:"items.CNPJ"}})],1),e(n.Z,{attrs:{cols:"12",md:"6"}},[e(u.Z,{attrs:{color:"blue",label:"Contato",outlined:""},model:{value:t.items.CONTATO1,callback:function(e){t.$set(t.items,"CONTATO1",e)},expression:"items.CONTATO1"}})],1),e(n.Z,{attrs:{cols:"8",md:"9"}},[e(u.Z,{attrs:{color:"blue",label:"Logradouro",outlined:"",disabled:""},model:{value:t.items.LOGRADOURO,callback:function(e){t.$set(t.items,"LOGRADOURO",e)},expression:"items.LOGRADOURO"}})],1),e(n.Z,{attrs:{cols:"4",md:"3"}},[e(u.Z,{attrs:{color:"blue",label:"Número",outlined:""},model:{value:t.items.NUM,callback:function(e){t.$set(t.items,"NUM",e)},expression:"items.NUM"}})],1),e(n.Z,{attrs:{cols:"6",md:"4"}},[e(u.Z,{attrs:{color:"blue",label:"Estado",outlined:"",disabled:""},model:{value:t.items.ESTADO,callback:function(e){t.$set(t.items,"ESTADO",e)},expression:"items.ESTADO"}})],1),e(n.Z,{attrs:{cols:"6",md:"4"}},[e(u.Z,{attrs:{color:"blue",label:"Cidade",outlined:"",disabled:""},model:{value:t.items.CIDADE,callback:function(e){t.$set(t.items,"CIDADE",e)},expression:"items.CIDADE"}})],1),e(n.Z,{attrs:{cols:"12",md:"4"}},[e(u.Z,{directives:[{name:"mask",rawName:"v-mask",value:"########",expression:"'########'"}],attrs:{rules:t.rulesCEP,required:"",color:"blue",name:"cep",label:"CEP",outlined:""},on:{keyup:t.preencherCep},model:{value:t.items.CEP,callback:function(e){t.$set(t.items,"CEP",e)},expression:"items.CEP"}})],1),e(n.Z,{staticClass:"text-right",attrs:{cols:"12"}},[e(o.Z,{attrs:{color:"primary","min-width":"150"},on:{click:t.editProfile}},[t._v(" Atualizar Perfil ")])],1)],1)],1)],1)],1)],1)],1)],1):t._e()},m=[],p=(s(7658),s(594)),v=s(144),C={name:"UserProfileView",data:()=>({erroCep:!1,showUpdate:!1,showProfileUpdate:!1,showError:!1,logado:window.sessionStorage.logado,err:"",items:{LOGRADOURO:"",ESTADO:"",CIDADE:"",ID:window.sessionStorage.empid,CNPJ:window.sessionStorage.empcnpj,CEP:window.sessionStorage.empcep,NUM:window.sessionStorage.empnum,CONTATO1:window.sessionStorage.empcontato,TIPO:window.sessionStorage.emptipo,RAZAOSOCIAL:window.sessionStorage.razaosocial}}),computed:{rulesCEP(){const t=[],e=!1===this.erroCep&&8===this.items.CEP.length||"CEP inválido";return t.push(e),t}},watch:{items:{handler(){window.sessionStorage.empcontato=this.items.CONTATO1,window.sessionStorage.empcep=this.items.CEP,window.sessionStorage.empnum=this.items.NUM},deep:!0},err(){alert(this.err)}},created(){v.ZP.config.warnHandler=t=>this.err=t},beforeMount(){this.preencherCep()},methods:{getCep(t){return p.Z.get(`https://viacep.com.br/ws/${t}/json/`)},preencherCep(){const t=this.items.CEP.replace(/\D/g,"");8===t.length&&this.getCep(t).then((t=>{this.items.LOGRADOURO=t.data.logradouro,this.items.ESTADO=t.data.uf,this.items.CIDADE=t.data.localidade,"erro"in t.data?this.erroCep=!0:this.erroCep=!1}))},editProfile(){p.Z.put(`https://sheetdb.io/api/v1/8nmjdq4kt9z0x/IDEMPRESA/${this.items.ID}`,{data:{CONTATO01:`${this.items.CONTATO1}`,NUM:`${this.items.NUM}`,CEP:`${this.items.CEP}`}}).then((t=>{200!==t.status&&201!==t.status||(this.showUpdate=!this.showUpdate,setTimeout((()=>{this.showUpdate=!this.showUpdate}),2500))})).catch((t=>{t.response&&(this.showError=!this.showError,setTimeout((()=>{this.showError=!this.showError}),2500))}))}}},f=C,b=s(1001),g=(0,b.Z)(f,h,m,!1,null,null,null),Z=g.exports},4568:function(t,e,s){s.d(e,{Z:function(){return u}});var i=s(2925),o=s(1903),r=s(1012),n=s(6470),a=s(3276),l=s(3599),c=s(4987),d=s(6596),u=(0,c.Z)(i.Z,n.Z,l.Z).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(o.Z,{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(r.Z,{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(r.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t[`v-alert--border-${this.border}`]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||a.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},8236:function(t,e,s){s.d(e,{Z:function(){return a}});s(7658);var i=s(8914),o=s(3276),r=s(6470),n=s(4987),a=(0,n.Z)(i.Z,o.Z,r.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}})},9495:function(t,e,s){function i(t,e,s){const i=e.value,o=e.options||{passive:!0};window.addEventListener("resize",i,o),t._onResize=Object(t._onResize),t._onResize[s.context._uid]={callback:i,options:o},e.modifiers&&e.modifiers.quiet||i()}function o(t,e,s){var i;if(!(null===(i=t._onResize)||void 0===i?void 0:i[s.context._uid]))return;const{callback:o,options:r}=t._onResize[s.context._uid];window.removeEventListener("resize",o,r),delete t._onResize[s.context._uid]}const r={inserted:i,unbind:o};e["Z"]=r},3939:function(t,e,s){var i=s(144);function o(t="value",e="change"){return i.ZP.extend({name:"proxyable",model:{prop:t,event:e},props:{[t]:{required:!1}},data(){return{internalLazyValue:this[t]}},computed:{internalValue:{get(){return this.internalLazyValue},set(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:{[t](t){this.internalLazyValue=t}}})}const r=o();e["Z"]=r},3599:function(t,e,s){var i=s(144);e["Z"]=i.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},6044:function(t,e,s){function i(t){if("function"!==typeof t.getRootNode){while(t.parentNode)t=t.parentNode;return t!==document?null:document}const e=t.getRootNode();return e!==document&&e.getRootNode({composed:!0})!==document?null:e}s.d(e,{e:function(){return i}})}}]);
//# sourceMappingURL=views-CompanyProfile.4764eb3c.js.map