(function(){var e={3829:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{app:function(){return B},user:function(){return q}});var i=n(144),o=n(3422),a=function(){var e=this,t=e._self._c;return t(o.Z5,{attrs:{mode:"out-in"}},[t("router-view")],1)},u=[],s={name:"App",metaInfo:{title:"NVS",titleTemplate:"%s | Sistema",htmlAttrs:{lang:"pt-br"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},l=s,c=n(1001),f=(0,c.Z)(l,a,u,!1,null,null,null),d=f.exports,v=n(2250),m=n(3176),p=n(8073);i.ZP.use(v.Z,{directives:{ripple:m.Z}});const b={primary:"#E91E63",secondary:"#9C27b0",accent:"#e91e63",info:"#00CAE3",success:"#4CAF50",warning:"#FB8C00",error:"#FF5252"};var h=new v.Z({breakpoint:{mobileBreakpoint:960},icons:{values:{expand:"mdi-menu-down"}},theme:{themes:{dark:b,light:b}},lang:{locales:{pt:p.Z},current:"pt"}}),w=n(629),g=n(7033);g.ZP.options.mapping="simple",g.ZP.options.strict=!0;var C=g.ZP;const y=window.localStorage.profile,F={drawer:null,drawerImage:!0,mini:!0,items:[]},S={title:"Home",icon:"mdi-home",to:"/home/"},E={title:"Financeiro",icon:"mdi-cash",to:"/financeiro/"},O={title:"Relatório de Lançamentos",icon:"mdi-clipboard-text",to:"/relatorio-admin/"},P={title:"Relatório Financeiro",icon:"mdi-clipboard-text",to:"/relatorio-financeiro/"},k={title:"Relatório de Frota",icon:"mdi-clipboard-text",to:"/relatorio-de-frota/"},R={title:"Controle de Frota",icon:"mdi-truck",to:"/empresa/frota/"},T={title:"Perfil de Usuário",icon:"mdi-account",to:"/profile/"},N={title:"Perfil da Empresa",icon:"mdi-factory",to:"/perfil/"},_={title:"Cadastro de Usuários",icon:"mdi-account-plus",to:"/cadastro-de-usuario/"},A={title:"Pedidos",icon:"mdi-list-box",to:"/pedidos/"},U={title:"Testes",icon:"mdi-test-tube",to:"/tests/"},V=[S,E,O,P,k,R,A,T,_,N,U],L=[S,E,O,T],x=[S,E,P,T],D=[S,R,k,T,N],Z=[S,O,A,_,T];F.items="MASTER"===y?V:"FINANCIAL"===y?x:"ADMIN"===y?L:"CSERVICE"===y?Z:"CUSTOMER"===y?D:[];const j=g.Sy.mutations(F),I={};var B={namespaced:!0,state:F,mutations:j,getters:I},M=n(7965);const H={dark:!1,drawer:{image:0,gradient:0,mini:!1},gradients:["rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)","rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)","rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)"],images:["https://demos.creative-tim.com/vue-material-dashboard-pro/img/faces/avatar.jpg"],notifications:[],rtl:!1},W=g.Sy.mutations(H),$={fetch:({commit:e})=>{const t=localStorage.getItem("vuetify@user")||"{}",n=JSON.parse(t);for(const r in n)e(r,n[r]);void 0===n.dark&&e("dark",window.matchMedia("(prefers-color-scheme: dark)"))},update:({state:e})=>{M.IN_BROWSER&&localStorage.setItem("vuetify@user",JSON.stringify(e))}},Y={dark:(e,t)=>e.dark||-1===t.gradient.indexOf("255, 255, 255"),gradient:e=>e.gradients[e.drawer.gradient],image:e=>""===e.drawer.image?e.drawer.image:e.images[e.drawer.image]};var q={namespaced:!0,state:H,mutations:W,actions:$,getters:Y};i.ZP.use(w.ZP);const G=new w.ZP.Store({modules:r,plugins:[C.plugin]});var J=G;Object.freeze({root:!0});var z=n(8345);function K(e){return e.endsWith("/")?e:e+"/"}var Q=n(6486);function X(e="Default",t,r=""){const i=(0,Q.kebabCase)(e);return{children:t,component:()=>n(5403)(`./${i}/Index`),path:r}}function ee(e,t,r=""){t=Object(t)===t?t:{default:e.replace(" ","")};const i={};for(const[o,a]of Object.entries(t))i[o]=()=>n(8611)(`./${a}`);return{name:e,components:i,path:r}}i.ZP.use(z.ZP);const te=new z.ZP({mode:"history",base:"/",scrollBehavior:(e,t,n)=>e.hash?{selector:e.hash}:n||{x:0,y:0},routes:[X("Default",[ee("Login Screen"),ee("Financial Control",null,"/financeiro"),ee("Financial ReportStaff",null,"/relatorio-financeiro"),ee("Financial ReportAdmin",null,"/relatorio-admin"),ee("Fleet Report",null,"/relatorio-de-frota"),ee("Fleet Control",null,"empresa/frota"),ee("Home View",null,"/home"),ee("User Register",null,"cadastro-de-usuario"),ee("Customer Service",null,"/pedidos"),ee("Chunks Test",null,"/chunks"),ee("Dashboard View",null,"/dashboard"),ee("Tests View",null,"/tests"),ee("User Profile",null,"/profile"),ee("Company Profile",null,"/perfil")])]});te.beforeEach(((e,t,n)=>e.path.endsWith("/")?n():n(K(e.path))));var ne=te,re=n(3678),ie=n(9278);i.ZP.config.productionTip=!1,i.ZP.use(ie.ZP,{placeholders:{N:null,Y:null}}),(0,re.Z)(J,ne),new i.ZP({vuetify:h,store:J,router:ne,render:e=>e(d)}).$mount("#app")},7965:function(e){const t="true"==={NODE_ENV:"production",BASE_URL:"/"}.EN_LOCALE_ONLY,n="undefined"!==typeof window,r="true"==={NODE_ENV:"production",BASE_URL:"/"}.DEBUG,i=!0;e.exports={EN_LOCALE_ONLY:t,IN_BROWSER:n,IS_DEBUG:r,IS_PROD:i}},5403:function(e,t,n){var r={"./default/Index":[3478,876]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=5403,e.exports=i},8611:function(e,t,n){var r={"./ChunksTest":[8685,196,393,406,969,351,47],"./ChunksTest.vue":[8685,196,393,406,969,351,47],"./CompanyProfile":[8058,196,393,406,969,351,365],"./CompanyProfile.vue":[8058,196,393,406,969,351,365],"./CustomerService":[5856,196,393,659,495,406,969,351,626,561,53,81],"./CustomerService.vue":[5856,196,393,659,495,406,969,351,626,561,53,81],"./DashboardView":[6872,196,393,659,495,406,969,626,561,14],"./DashboardView.vue":[6872,196,393,659,495,406,969,626,561,14],"./ErrorView":[1312,196,393,541],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl":[7302,196,393,659,495,406,969,351,626,561,276,53,134],"./FinancialControl.vue":[7302,196,393,659,495,406,969,351,626,561,276,53,134],"./FinancialReportAdmin":[654,196,393,659,495,406,969,351,626,561,276,928,601],"./FinancialReportAdmin.vue":[654,196,393,659,495,406,969,351,626,561,276,928,601],"./FinancialReportStaff":[1272,196,393,659,495,406,969,351,626,561,276,928,932],"./FinancialReportStaff.vue":[1272,196,393,659,495,406,969,351,626,561,276,928,932],"./FleetControl":[3258,196,393,659,495,406,969,351,626,561,53,693],"./FleetControl.vue":[3258,196,393,659,495,406,969,351,626,561,53,693],"./FleetReport":[6757,196,393,659,495,406,969,351,626,561,276,928,986],"./FleetReport.vue":[6757,196,393,659,495,406,969,351,626,561,276,928,986],"./HomeView":[6994,196,393,487],"./HomeView.vue":[6994,196,393,487],"./LoginScreen":[3028,393,406,969,446],"./LoginScreen.vue":[3028,393,406,969,446],"./TestFinancialControl":[4072,196,393,659,495,406,969,351,626,561,276,53,766],"./TestFinancialControl.vue":[4072,196,393,659,495,406,969,351,626,561,276,53,766],"./TestsView":[2935,196,393,659,495,406,969,626,561,72,304],"./TestsView.vue":[2935,196,393,659,495,406,969,626,561,72,304],"./UserProfile":[3544,196,393,406,969,351,263],"./UserProfile.vue":[3544,196,393,406,969,351,263],"./UserRegister":[3281,196,393,659,495,406,969,351,626,66],"./UserRegister.vue":[3281,196,393,659,495,406,969,351,626,66]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=8611,e.exports=i},1109:function(e,t,n){var r={"./ChunksTest.vue":[8685,196,393,406,969,351,47],"./CompanyProfile.vue":[8058,196,393,406,969,351,365],"./CustomerService.vue":[5856,196,393,659,495,406,969,351,626,561,53,81],"./DashboardView.vue":[6872,196,393,659,495,406,969,626,561,14],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl.vue":[7302,196,393,659,495,406,969,351,626,561,276,53,134],"./FinancialReportAdmin.vue":[654,196,393,659,495,406,969,351,626,561,276,928,601],"./FinancialReportStaff.vue":[1272,196,393,659,495,406,969,351,626,561,276,928,932],"./FleetControl.vue":[3258,196,393,659,495,406,969,351,626,561,53,693],"./FleetReport.vue":[6757,196,393,659,495,406,969,351,626,561,276,928,986],"./HomeView.vue":[6994,196,393,487],"./LoginScreen.vue":[3028,393,406,969,446],"./TestFinancialControl.vue":[4072,196,393,659,495,406,969,351,626,561,276,53,766],"./TestsView.vue":[2935,196,393,659,495,406,969,626,561,72,304],"./UserProfile.vue":[3544,196,393,406,969,351,263],"./UserRegister.vue":[3281,196,393,659,495,406,969,351,626,66]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id=1109,e.exports=i}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,i,o){if(!r){var a=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],o=e[c][2];for(var u=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,o<a&&(a=o));if(u){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({14:"views-DashboardView",47:"views-ChunksTest",66:"views-UserRegister",81:"views-CustomerService",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",365:"views-CompanyProfile",369:"default-settings",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",601:"views-FinancialReportAdmin",693:"views-FleetControl",766:"views-TestFinancialControl",876:"layout-default-Index",932:"views-FinancialReportStaff",986:"views-FleetReport"}[e]||e)+"."+{14:"68261650",47:"0055ff60",53:"50e2b396",66:"1e62b2a6",72:"3d77e812",81:"9fc1d786",95:"8e43042a",104:"0d9afdf9",134:"13396784",160:"70e39117",196:"41ed0798",214:"78608b14",237:"a17f35c6",263:"aa1200e2",276:"a9ee0efb",304:"1a067fe3",325:"4830424d",351:"3263b5c4",355:"4052507d",365:"74c006f6",369:"7f7a5d7f",393:"8c3c6d59",397:"9ea755bb",406:"2656d948",411:"57456bd5",446:"f3447e75",487:"45643038",495:"29a9ba30",533:"2a6e7d39",541:"0fdd080a",561:"cf2dbb05",601:"13389723",626:"5e2eb554",633:"79d067cd",659:"efbf6593",693:"8eb39073",708:"48834346",739:"1d0531a5",766:"ccba1c52",836:"873f4b67",876:"f00e63bf",928:"b7c9e779",932:"25fcead1",969:"d81a6e16",986:"4bd0c537",988:"87f5e8e2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({14:"views-DashboardView",47:"views-ChunksTest",66:"views-UserRegister",81:"views-CustomerService",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",355:"default-view",365:"views-CompanyProfile",369:"default-settings",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",601:"views-FinancialReportAdmin",693:"views-FleetControl",766:"views-TestFinancialControl",876:"layout-default-Index",932:"views-FinancialReportStaff",986:"views-FleetReport"}[e]||e)+"."+{14:"96d6f9c4",47:"353020ed",53:"d5f962cf",66:"3f09e332",72:"96d6f9c4",81:"0bfe7fab",95:"53e33d0f",104:"53e33d0f",134:"70670417",160:"1d957801",196:"77b2a425",214:"0b8caed0",237:"fc675871",263:"d9c85580",325:"623d006c",355:"13f1465d",365:"f9b8b2f4",369:"6082e7eb",397:"a2087f38",411:"6ffb816e",446:"0a56bcb5",487:"c68781f4",541:"588be1e8",601:"88bd9330",626:"bdcfec8f",633:"53e33d0f",693:"40894b81",708:"bb0f8656",739:"d1e124e1",766:"f7d7116b",836:"18ea5b08",876:"d30a465a",932:"88bd9330",969:"e1ed9ab4",986:"88bd9330"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nvs-v4:";n.l=function(r,i,o,a){if(e[r])e[r].push(i);else{var u,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+o){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[i];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var i=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),i&&i.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r,i){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(n){if(o.onerror=o.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),i(s)}};return o.onerror=o.onload=a,o.href=t,n?n.parentNode.insertBefore(o,n.nextSibling):document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===e||o===t)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return i();e(r,u,null,i,o)}))},i={143:0};n.f.miniCss=function(e,t){var n={14:1,47:1,53:1,66:1,72:1,81:1,95:1,104:1,134:1,160:1,196:1,214:1,237:1,263:1,325:1,355:1,365:1,369:1,397:1,411:1,446:1,487:1,541:1,601:1,626:1,633:1,693:1,708:1,739:1,766:1,836:1,876:1,932:1,969:1,986:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=r(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else if(/^(196|72)$/.test(t))e[t]=0;else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,i[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,o,a=r[0],u=r[1],s=r[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(i in u)n.o(u,i)&&(n.m[i]=u[i]);if(s)var c=s(n)}for(t&&t(r);l<a.length;l++)o=a[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(c)},r=self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3829)}));r=n.O(r)})();
//# sourceMappingURL=app.d082c4d4.js.map