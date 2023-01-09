(function(){var e={3829:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{app:function(){return I},user:function(){return Y}});var i=n(144),o=n(3422),a=function(){var e=this,t=e._self._c;return t(o.Z5,{attrs:{mode:"out-in"}},[t("router-view")],1)},s=[],u={name:"App",metaInfo:{title:"NVS",titleTemplate:"%s | Sistema",htmlAttrs:{lang:"pt-br"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},c=u,l=n(1001),f=(0,l.Z)(c,a,s,!1,null,null,null),d=f.exports,v=n(2250),m=n(3176),p=n(8073);i.ZP.use(v.Z,{directives:{ripple:m.Z}});const b={primary:"#E91E63",secondary:"#9C27b0",accent:"#e91e63",info:"#00CAE3",success:"#4CAF50",warning:"#FB8C00",error:"#FF5252"};var h=new v.Z({breakpoint:{mobileBreakpoint:960},icons:{values:{expand:"mdi-menu-down"}},theme:{themes:{dark:b,light:b}},lang:{locales:{pt:p.Z},current:"pt"}}),w=n(629),g=n(7033);g.ZP.options.mapping="simple",g.ZP.options.strict=!0;var C=g.ZP;const y=window.localStorage.profile,S={drawer:null,drawerImage:!0,mini:!0,items:[]},E={title:"Home",icon:"mdi-home",to:"/home/"},F={title:"Financeiro",icon:"mdi-cash",to:"/financeiro/"},O={title:"Relatório de Lançamentos",icon:"mdi-clipboard-text",to:"/relatorio-admin/"},P={title:"Relatório Financeiro",icon:"mdi-clipboard-text",to:"/relatorio-financeiro/"},k={title:"Controle de Frota",icon:"mdi-truck",to:"/empresa/frota/"},T={title:"Perfil de Usuário",icon:"mdi-account",to:"/profile/"},N={title:"Perfil da Empresa",icon:"mdi-factory",to:"/perfil/"},R={title:"Cadastro de Usuários",icon:"mdi-account-plus",to:"/cadastro-de-usuario/"},_={title:"Pedidos",icon:"mdi-list-box",to:"/pedidos/"},A={title:"Testes",icon:"mdi-test-tube",to:"/tests/"},U=[E,F,O,P,k,_,T,R,N,A],x=[E,F,O,T],L=[E,F,P,T],D=[E,k,T,N],V=[E,O,_,R,T];S.items="MASTER"===y?U:"FINANCIAL"===y?L:"ADMIN"===y?x:"CSERVICE"===y?V:"CUSTOMER"===y?D:[];const Z=g.Sy.mutations(S),j={};var I={namespaced:!0,state:S,mutations:Z,getters:j},B=n(7965);const M={dark:!1,drawer:{image:0,gradient:0,mini:!1},gradients:["rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)","rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)","rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)"],images:["https://demos.creative-tim.com/vue-material-dashboard-pro/img/faces/avatar.jpg"],notifications:[],rtl:!1},H=g.Sy.mutations(M),W={fetch:({commit:e})=>{const t=localStorage.getItem("vuetify@user")||"{}",n=JSON.parse(t);for(const r in n)e(r,n[r]);void 0===n.dark&&e("dark",window.matchMedia("(prefers-color-scheme: dark)"))},update:({state:e})=>{B.IN_BROWSER&&localStorage.setItem("vuetify@user",JSON.stringify(e))}},$={dark:(e,t)=>e.dark||-1===t.gradient.indexOf("255, 255, 255"),gradient:e=>e.gradients[e.drawer.gradient],image:e=>""===e.drawer.image?e.drawer.image:e.images[e.drawer.image]};var Y={namespaced:!0,state:M,mutations:H,actions:W,getters:$};i.ZP.use(w.ZP);const q=new w.ZP.Store({modules:r,plugins:[C.plugin]});var G=q;Object.freeze({root:!0});var J=n(8345);function z(e){return e.endsWith("/")?e:e+"/"}var K=n(6486);function Q(e="Default",t,r=""){const i=(0,K.kebabCase)(e);return{children:t,component:()=>n(5403)(`./${i}/Index`),path:r}}function X(e,t,r=""){t=Object(t)===t?t:{default:e.replace(" ","")};const i={};for(const[o,a]of Object.entries(t))i[o]=()=>n(8611)(`./${a}`);return{name:e,components:i,path:r}}i.ZP.use(J.ZP);const ee=new J.ZP({mode:"history",base:"/",scrollBehavior:(e,t,n)=>e.hash?{selector:e.hash}:n||{x:0,y:0},routes:[Q("Default",[X("Login Screen"),X("Financial Control",null,"/financeiro"),X("Financial ReportStaff",null,"/relatorio-financeiro"),X("Financial ReportAdmin",null,"/relatorio-admin"),X("Fleet Control",null,"empresa/frota"),X("Home View",null,"/home"),X("User Register",null,"cadastro-de-usuario"),X("Customer Service",null,"/pedidos"),X("Chunks Test",null,"/chunks"),X("Tests View",null,"/tests"),X("User Profile",null,"/profile"),X("Company Profile",null,"/perfil"),X("manualusuario",null,"/assets/manualusuario")])]});ee.beforeEach(((e,t,n)=>e.path.endsWith("/")?n():n(z(e.path))));var te=ee,ne=n(3678),re=n(9278);i.ZP.config.productionTip=!1,i.ZP.use(re.ZP,{placeholders:{N:null,Y:null}}),(0,ne.Z)(G,te),new i.ZP({vuetify:h,store:G,router:te,render:e=>e(d)}).$mount("#app")},7965:function(e){const t="true"==={NODE_ENV:"production",BASE_URL:"/"}.EN_LOCALE_ONLY,n="undefined"!==typeof window,r="true"==={NODE_ENV:"production",BASE_URL:"/"}.DEBUG,i=!0;e.exports={EN_LOCALE_ONLY:t,IN_BROWSER:n,IS_DEBUG:r,IS_PROD:i}},5403:function(e,t,n){var r={"./default/Index":[3478,876]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=5403,e.exports=i},8611:function(e,t,n){var r={"./ChunksTest":[8685,196,393,284,969,351,685,47],"./ChunksTest.vue":[8685,196,393,284,969,351,685,47],"./CompanyProfile":[8058,196,393,284,969,351,365],"./CompanyProfile.vue":[8058,196,393,284,969,351,365],"./CustomerService":[5856,196,393,284,659,969,495,351,626,561,82,81],"./CustomerService.vue":[5856,196,393,284,659,969,495,351,626,561,82,81],"./Dashboard":[9680,196,393,284,659,969,495,626,561,105],"./Dashboard.vue":[9680,196,393,284,659,969,495,626,561,105],"./ErrorView":[1312,196,393,541],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl":[8774,196,393,284,659,969,495,351,626,561,82,345,134],"./FinancialControl.vue":[8774,196,393,284,659,969,495,351,626,561,82,345,134],"./FinancialReportAdmin":[654,196,393,284,659,969,495,351,626,561,345,73,601],"./FinancialReportAdmin.vue":[654,196,393,284,659,969,495,351,626,561,345,73,601],"./FinancialReportStaff":[1272,196,393,284,659,969,495,351,626,561,345,73,932],"./FinancialReportStaff.vue":[1272,196,393,284,659,969,495,351,626,561,345,73,932],"./FleetControl":[2333,196,393,284,659,969,495,351,626,561,82,693],"./FleetControl.vue":[2333,196,393,284,659,969,495,351,626,561,82,693],"./HomeView":[6994,196,393,487],"./HomeView.vue":[6994,196,393,487],"./LoginScreen":[3028,393,284,969,446],"./LoginScreen.vue":[3028,393,284,969,446],"./TestFinancialControl":[4072,196,393,284,659,969,495,351,626,561,82,345,766],"./TestFinancialControl.vue":[4072,196,393,284,659,969,495,351,626,561,82,345,766],"./TestsView":[8105,196,393,284,969,351,685,304],"./TestsView.vue":[8105,196,393,284,969,351,685,304],"./UserProfile":[3544,196,393,284,969,351,263],"./UserProfile.vue":[3544,196,393,284,969,351,263],"./UserRegister":[3281,196,393,284,659,969,495,351,626,66],"./UserRegister.vue":[3281,196,393,284,659,969,495,351,626,66]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=8611,e.exports=i},1109:function(e,t,n){var r={"./ChunksTest.vue":[8685,196,393,284,969,351,685,47],"./CompanyProfile.vue":[8058,196,393,284,969,351,365],"./CustomerService.vue":[5856,196,393,284,659,969,495,351,626,561,82,81],"./Dashboard.vue":[9680,196,393,284,659,969,495,626,561,105],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl.vue":[8774,196,393,284,659,969,495,351,626,561,82,345,134],"./FinancialReportAdmin.vue":[654,196,393,284,659,969,495,351,626,561,345,73,601],"./FinancialReportStaff.vue":[1272,196,393,284,659,969,495,351,626,561,345,73,932],"./FleetControl.vue":[2333,196,393,284,659,969,495,351,626,561,82,693],"./HomeView.vue":[6994,196,393,487],"./LoginScreen.vue":[3028,393,284,969,446],"./TestFinancialControl.vue":[4072,196,393,284,659,969,495,351,626,561,82,345,766],"./TestsView.vue":[8105,196,393,284,969,351,685,304],"./UserProfile.vue":[3544,196,393,284,969,351,263],"./UserRegister.vue":[3281,196,393,284,659,969,495,351,626,66]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1109,e.exports=i}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],i=e[l][1],o=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,o<a&&(a=o));if(s){e.splice(l--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({47:"views-ChunksTest",66:"views-UserRegister",81:"views-CustomerService",102:"default-account",105:"views-Dashboard",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",365:"views-CompanyProfile",369:"default-settings",376:"default-drawer-toggle",397:"default-footer",432:"expired-notifications",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",601:"views-FinancialReportAdmin",693:"views-FleetControl",766:"views-TestFinancialControl",876:"layout-default-Index",932:"views-FinancialReportStaff",954:"licences-notifications"}[e]||e)+"."+{14:"51b88558",47:"68a3acd4",66:"1e62b2a6",73:"e2a2a2e5",81:"3e7d1bb6",82:"d1ec55dc",102:"405b8da9",105:"f73c17d2",134:"e363e41e",160:"4a8dd344",190:"8cc76f7a",196:"41ed0798",214:"7d244032",263:"2c1486b5",284:"ad60f3ab",304:"d6957f38",345:"00b1dfd7",351:"3263b5c4",355:"4052507d",365:"84e28ffd",369:"c48e6950",376:"2f76be8a",393:"8c3c6d59",397:"9ea755bb",432:"40e163fe",446:"a57785fe",487:"45643038",495:"f5d05acf",533:"2a6e7d39",541:"0fdd080a",561:"cf2dbb05",567:"cfa8ee4e",601:"13389723",626:"5e2eb554",648:"89afe9f5",659:"a8822633",685:"d31ea9eb",693:"2a353b61",766:"ccba1c52",836:"873f4b67",876:"af9b4874",932:"25fcead1",954:"4d264f12",969:"d81a6e16"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({47:"views-ChunksTest",66:"views-UserRegister",81:"views-CustomerService",102:"default-account",105:"views-Dashboard",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",365:"views-CompanyProfile",369:"default-settings",397:"default-footer",432:"expired-notifications",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",601:"views-FinancialReportAdmin",693:"views-FleetControl",766:"views-TestFinancialControl",876:"layout-default-Index",932:"views-FinancialReportStaff",954:"licences-notifications"}[e]||e)+"."+{14:"d1e124e1",47:"353020ed",66:"3f09e332",81:"0bfe7fab",82:"d5f962cf",102:"fc675871",105:"96d6f9c4",134:"70670417",160:"1d957801",190:"6ffb816e",196:"77b2a425",214:"0b8caed0",263:"d9c85580",304:"353020ed",355:"13f1465d",365:"f9b8b2f4",369:"6082e7eb",397:"a2087f38",432:"53e33d0f",446:"0a56bcb5",487:"c68781f4",541:"588be1e8",567:"bb0f8656",601:"88bd9330",626:"bdcfec8f",648:"623d006c",693:"40894b81",766:"f7d7116b",836:"18ea5b08",876:"d30a465a",932:"88bd9330",954:"53e33d0f",969:"e1ed9ab4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nvs-v4:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[i];var d=function(t,n){s.onerror=s.onload=null,clearTimeout(v);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=s,o.parentNode.removeChild(o),i(u)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),s=n.p+a;if(t(a,s))return i();e(r,s,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={14:1,47:1,66:1,81:1,82:1,102:1,105:1,134:1,160:1,190:1,196:1,214:1,263:1,304:1,355:1,365:1,369:1,397:1,432:1,446:1,487:1,541:1,567:1,601:1,626:1,648:1,693:1,766:1,836:1,876:1,932:1,954:1,969:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else if(/^(196|47)$/.test(t))e[t]=0;else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)o=a[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(l)},r=self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3829)}));r=n.O(r)})();
//# sourceMappingURL=app.8a65eb78.js.map