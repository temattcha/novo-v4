(function(){var e={3829:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{app:function(){return j},user:function(){return W}});var o=n(144),i=n(3422),a=function(){var e=this,t=e._self._c;return t(i.Z5,{attrs:{mode:"out-in"}},[t("router-view")],1)},u=[],s={name:"App",metaInfo:{title:"NVS",titleTemplate:"%s | Sistema",htmlAttrs:{lang:"pt-br"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},c=s,l=n(1001),f=(0,l.Z)(c,a,u,!1,null,null,null),d=f.exports,v=n(2250),m=n(3176),p=n(8073);o.ZP.use(v.Z,{directives:{ripple:m.Z}});const b={primary:"#E91E63",secondary:"#9C27b0",accent:"#e91e63",info:"#00CAE3",success:"#4CAF50",warning:"#FB8C00",error:"#FF5252"};var w=new v.Z({breakpoint:{mobileBreakpoint:960},icons:{values:{expand:"mdi-menu-down"}},theme:{themes:{dark:b,light:b}},lang:{locales:{pt:p.Z},current:"pt"}}),g=n(629),h=n(7033);h.ZP.options.mapping="simple",h.ZP.options.strict=!0;var C=h.ZP;const y=window.localStorage.profile,E={drawer:null,drawerImage:!0,mini:!0,items:[]},O={title:"Home",icon:"mdi-home",to:"/home/"},P={title:"Financeiro",icon:"mdi-cash",to:"/staff/financial/"},S={title:"Relatório de Lançamentos",icon:"mdi-clipboard-text",to:"/staff/reports/financial/"},F={title:"Controle de Frota",icon:"mdi-truck",to:"/empresa/frota/"},k={title:"Perfil de Usuário",icon:"mdi-account",to:"/profile/"},N={title:"Perfil da Empresa",icon:"mdi-factory",to:"/perfil/"},_={title:"Cadastro de Usuários",icon:"mdi-account-plus",to:"/cadastro-de-usuario/"},T={title:"Testes",icon:"mdi-test-tube",to:"/tests/"},U=[O,P,S,F,k,N,_,T],L=[O,P,S,k],R=[O,P,k],A=[O,F,k,N],V=[O,S,k,_];E.items="MASTER"===y?U:"FINANCIAL"===y?R:"ADMIN"===y?L:"CSERVICE"===y?V:"CUSTOMER"===y?A:[];const Z=h.Sy.mutations(E),x={};var j={namespaced:!0,state:E,mutations:Z,getters:x},D=n(7965);const I={dark:!1,drawer:{image:0,gradient:0,mini:!1},gradients:["rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)","rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)","rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)"],images:["https://demos.creative-tim.com/vue-material-dashboard-pro/img/faces/avatar.jpg"],notifications:[],rtl:!1},B=h.Sy.mutations(I),M={fetch:({commit:e})=>{const t=localStorage.getItem("vuetify@user")||"{}",n=JSON.parse(t);for(const r in n)e(r,n[r]);void 0===n.dark&&e("dark",window.matchMedia("(prefers-color-scheme: dark)"))},update:({state:e})=>{D.IN_BROWSER&&localStorage.setItem("vuetify@user",JSON.stringify(e))}},H={dark:(e,t)=>e.dark||-1===t.gradient.indexOf("255, 255, 255"),gradient:e=>e.gradients[e.drawer.gradient],image:e=>""===e.drawer.image?e.drawer.image:e.images[e.drawer.image]};var W={namespaced:!0,state:I,mutations:B,actions:M,getters:H};o.ZP.use(g.ZP);const $=new g.ZP.Store({modules:r,plugins:[C.plugin]});var Y=$;Object.freeze({root:!0});var q=n(8345);function G(e){return e.endsWith("/")?e:e+"/"}var J=n(6486);function z(e="Default",t,r=""){const o=(0,J.kebabCase)(e);return{children:t,component:()=>n(5403)(`./${o}/Index`),path:r}}function K(e,t,r=""){t=Object(t)===t?t:{default:e.replace(" ","")};const o={};for(const[i,a]of Object.entries(t))o[i]=()=>n(8611)(`./${a}`);return{name:e,components:o,path:r}}o.ZP.use(q.ZP);const Q=new q.ZP({mode:"history",base:"/",scrollBehavior:(e,t,n)=>e.hash?{selector:e.hash}:n||{x:0,y:0},routes:[z("Default",[K("Login Screen"),K("Financial Control",null,"staff/financial"),K("Financial Report",null,"staff/reports/financial"),K("Fleet Control",null,"empresa/frota"),K("Home View",null,"/home"),K("User Register",null,"cadastro-de-usuario"),K("Tests View",null,"/tests"),K("User Profile",null,"/profile"),K("Company Profile",null,"/perfil"),K("manualusuario",null,"/assets/manualusuario")])]});Q.beforeEach(((e,t,n)=>e.path.endsWith("/")?n():n(G(e.path))));var X=Q,ee=n(3678),te=n(9278);o.ZP.config.productionTip=!1,o.ZP.use(te.ZP,{placeholders:{N:null,Y:null}}),(0,ee.Z)(Y,X),new o.ZP({vuetify:w,store:Y,router:X,render:e=>e(d)}).$mount("#app")},7965:function(e){const t="true"==={NODE_ENV:"production",BASE_URL:"/"}.EN_LOCALE_ONLY,n="undefined"!==typeof window,r="true"==={NODE_ENV:"production",BASE_URL:"/"}.DEBUG,o=!0;e.exports={EN_LOCALE_ONLY:t,IN_BROWSER:n,IS_DEBUG:r,IS_PROD:o}},5403:function(e,t,n){var r={"./default/Index":[3478,876]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=5403,e.exports=o},8611:function(e,t,n){var r={"./CompanyProfile":[7880,196,393,284,969,351,365],"./CompanyProfile.vue":[7880,196,393,284,969,351,365],"./CustomerService":[5981,196,393,659,284,969,495,351,626,850,643,981,81],"./CustomerService.vue":[5981,196,393,659,284,969,495,351,626,850,643,981,81],"./ErrorView":[1312,196,393,541],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl":[2778,196,393,659,284,969,495,351,626,850,643,345,134],"./FinancialControl.vue":[2778,196,393,659,284,969,495,351,626,850,643,345,134],"./FinancialReport":[2874,196,393,659,284,969,495,351,626,850,345,685],"./FinancialReport.vue":[2874,196,393,659,284,969,495,351,626,850,345,685],"./FleetControl":[8148,196,393,659,284,969,495,351,626,850,643,693],"./FleetControl.vue":[8148,196,393,659,284,969,495,351,626,850,643,693],"./HomeView":[6994,196,393,487],"./HomeView.vue":[6994,196,393,487],"./LoginScreen":[7798,393,284,969,446],"./LoginScreen.vue":[7798,393,284,969,446],"./TestFinancialControl":[4072,196,393,659,284,969,495,351,626,850,643,345,766],"./TestFinancialControl.vue":[4072,196,393,659,284,969,495,351,626,850,643,345,766],"./TestsView":[9610,196,393,659,284,969,495,351,626,850,643,981,304],"./TestsView.vue":[9610,196,393,659,284,969,495,351,626,850,643,981,304],"./UserProfile":[703,196,393,284,969,351,263],"./UserProfile.vue":[703,196,393,284,969,351,263],"./UserRegister":[3281,196,393,659,284,969,495,351,626,66],"./UserRegister.vue":[3281,196,393,659,284,969,495,351,626,66]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=8611,e.exports=o},1109:function(e,t,n){var r={"./CompanyProfile.vue":[7880,196,393,284,969,351,365],"./CustomerService.vue":[5981,196,393,659,284,969,495,351,626,850,643,981,81],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl.vue":[2778,196,393,659,284,969,495,351,626,850,643,345,134],"./FinancialReport.vue":[2874,196,393,659,284,969,495,351,626,850,345,685],"./FleetControl.vue":[8148,196,393,659,284,969,495,351,626,850,643,693],"./HomeView.vue":[6994,196,393,487],"./LoginScreen.vue":[7798,393,284,969,446],"./TestFinancialControl.vue":[4072,196,393,659,284,969,495,351,626,850,643,345,766],"./TestsView.vue":[9610,196,393,659,284,969,495,351,626,850,643,981,304],"./UserProfile.vue":[703,196,393,284,969,351,263],"./UserRegister.vue":[3281,196,393,659,284,969,495,351,626,66]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=1109,e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({66:"views-UserRegister",81:"views-CustomerService",102:"default-account",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",365:"views-CompanyProfile",369:"default-settings",376:"default-drawer-toggle",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",685:"views-FinancialReport",693:"views-FleetControl",766:"views-TestFinancialControl",796:"default-notifications",876:"layout-default-Index"}[e]||e)+"."+{14:"7bc857fb",66:"1e62b2a6",81:"84694f53",102:"be94b502",134:"f5bfb2b6",160:"348f9f8c",196:"41ed0798",214:"345ef76f",260:"27b2fe4b",263:"76af8204",284:"fcb6af14",304:"bdc0b289",325:"4830424d",345:"00b1dfd7",351:"3263b5c4",355:"4052507d",365:"739e4ded",369:"7f7a5d7f",376:"2f76be8a",393:"8c3c6d59",397:"9ea755bb",411:"57456bd5",446:"d2b0e3d9",487:"6865551d",495:"f5d05acf",533:"2a6e7d39",541:"0fdd080a",626:"5e2eb554",643:"dbb1e40d",659:"efbf6593",685:"0cb114a4",693:"5c8eaf6f",708:"48834346",766:"6ae81a14",796:"9eafc85a",850:"73137988",876:"e2544322",969:"d81a6e16",981:"de05ad59"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({66:"views-UserRegister",81:"views-CustomerService",102:"default-account",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",365:"views-CompanyProfile",369:"default-settings",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",685:"views-FinancialReport",693:"views-FleetControl",766:"views-TestFinancialControl",796:"default-notifications",876:"layout-default-Index"}[e]||e)+"."+{14:"d1e124e1",66:"3f09e332",81:"9f8eaadd",102:"fc675871",134:"ba3a0932",160:"1d957801",196:"77b2a425",214:"0b8caed0",260:"18ea5b08",263:"6680e23b",304:"9f8eaadd",325:"623d006c",355:"13f1465d",365:"3cc1730f",369:"6082e7eb",397:"a2087f38",411:"6ffb816e",446:"3fef99f2",487:"c68781f4",541:"588be1e8",626:"bdcfec8f",643:"8c80d862",685:"88bd9330",693:"4542319c",708:"bb0f8656",766:"c729ad21",796:"53e33d0f",876:"d30a465a",969:"a5a86312"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nvs-v4:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={14:1,66:1,81:1,102:1,134:1,160:1,196:1,214:1,260:1,263:1,304:1,325:1,355:1,365:1,369:1,397:1,411:1,446:1,487:1,541:1,626:1,643:1,685:1,693:1,708:1,766:1,796:1,876:1,969:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(/^(196|81)$/.test(t))e[t]=0;else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3829)}));r=n.O(r)})();
//# sourceMappingURL=app.b6189045.js.map