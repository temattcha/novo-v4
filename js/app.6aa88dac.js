(function(){var e={8594:function(e,t,n){"use strict";var r={};n.r(r),n.d(r,{app:function(){return Z},user:function(){return I}});var o=n(144),i=n(3422),a=function(){var e=this,t=e._self._c;return t(i.Z5,{attrs:{mode:"out-in"}},[t("router-view")],1)},u=[],c={name:"App",metaInfo:{title:"NVS",titleTemplate:"%s | Sistema",htmlAttrs:{lang:"pt-br"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]}},s=c,f=n(1001),l=(0,f.Z)(s,a,u,!1,null,null,null),d=l.exports,m=n(2250),p=n(3176),v=n(8073);o.ZP.use(m.Z,{directives:{ripple:p.Z}});const b={primary:"#E91E63",secondary:"#9C27b0",accent:"#e91e63",info:"#00CAE3",success:"#4CAF50",warning:"#FB8C00",error:"#FF5252"};var h=new m.Z({breakpoint:{mobileBreakpoint:960},icons:{values:{expand:"mdi-menu-down"}},theme:{themes:{dark:b,light:b}},lang:{locales:{pt:v.Z},current:"pt"}}),g=n(629),w=n(7033);w.ZP.options.mapping="simple",w.ZP.options.strict=!0;var y=w.ZP;const O=window.localStorage.profile,E={drawer:null,drawerImage:!0,mini:!0,items:[]},P={title:"Home",icon:"mdi-home",to:"/home/"},S={title:"Financeiro",icon:"mdi-cash",to:"/staff/financial/"},k={title:"Relatório de Lançamentos",icon:"mdi-clipboard-text",to:"/staff/reports/financial/"},N={title:"Perfil de Usuário",icon:"mdi-account",to:"/profile/"},C={title:"Testes",icon:"mdi-test-tube",to:"/tests/"},_=[P,S,k,N,C],F=[P,S,k,N],L=[P,S,N];E.items="MASTER"===O?_:"FINANCIAL"===O?L:"ADMIN"===O?F:[];const A=w.Sy.mutations(E),T={};var Z={namespaced:!0,state:E,mutations:A,getters:T},x=n(7965);const j={dark:!1,drawer:{image:0,gradient:0,mini:!1},gradients:["rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)","rgba(228, 226, 226, 1), rgba(255, 255, 255, 0.7)","rgba(244, 67, 54, .8), rgba(244, 67, 54, .8)"],images:["https://demos.creative-tim.com/vue-material-dashboard-pro/img/faces/avatar.jpg"],notifications:[],rtl:!1},V=w.Sy.mutations(j),U={fetch:({commit:e})=>{const t=localStorage.getItem("vuetify@user")||"{}",n=JSON.parse(t);for(const r in n)e(r,n[r]);void 0===n.dark&&e("dark",window.matchMedia("(prefers-color-scheme: dark)"))},update:({state:e})=>{x.IN_BROWSER&&localStorage.setItem("vuetify@user",JSON.stringify(e))}},D={dark:(e,t)=>e.dark||-1===t.gradient.indexOf("255, 255, 255"),gradient:e=>e.gradients[e.drawer.gradient],image:e=>""===e.drawer.image?e.drawer.image:e.images[e.drawer.image]};var I={namespaced:!0,state:j,mutations:V,actions:U,getters:D};o.ZP.use(g.ZP);const R=new g.ZP.Store({modules:r,plugins:[y.plugin]});var B=R;Object.freeze({root:!0});var M=n(8345);function H(e){return e.endsWith("/")?e:e+"/"}var W=n(6486);function $(e="Default",t,r=""){const o=(0,W.kebabCase)(e);return{children:t,component:()=>n(5403)(`./${o}/Index`),path:r}}function q(e,t,r=""){t=Object(t)===t?t:{default:e.replace(" ","")};const o={};for(const[i,a]of Object.entries(t))o[i]=()=>n(8611)(`./${a}`);return{name:e,components:o,path:r}}o.ZP.use(M.ZP);const G=new M.ZP({mode:"history",base:"/",scrollBehavior:(e,t,n)=>e.hash?{selector:e.hash}:n||{x:0,y:0},routes:[$("Default",[q("Login Screen"),q("Financial Control",null,"staff/financial"),q("Financial Report",null,"staff/reports/financial"),q("Home View",null,"/home"),q("Tests View",null,"/tests"),q("User Profile",null,"/profile"),q("manualusuario",null,"/assets/manualusuario")])]});G.beforeEach(((e,t,n)=>e.path.endsWith("/")?n():n(H(e.path))));var J=G,Y=n(3678),z=n(9278);o.ZP.config.productionTip=!1,o.ZP.use(z.ZP,{placeholders:{N:null}}),(0,Y.Z)(B,J),new o.ZP({vuetify:h,store:B,router:J,render:e=>e(d)}).$mount("#app")},7965:function(e){const t="true"==={NODE_ENV:"production",BASE_URL:"/"}.EN_LOCALE_ONLY,n="undefined"!==typeof window,r="true"==={NODE_ENV:"production",BASE_URL:"/"}.DEBUG,o=!0;e.exports={EN_LOCALE_ONLY:t,IN_BROWSER:n,IS_DEBUG:r,IS_PROD:o}},5403:function(e,t,n){var r={"./default/Index":[3478,876]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=5403,e.exports=o},8611:function(e,t,n){var r={"./ErrorView":[1312,196,393,541],"./ErrorView.vue":[1312,196,393,541],"./FinancialControl":[1219,196,393,659,495,191,969,351,69,134],"./FinancialControl.vue":[1219,196,393,659,495,191,969,351,69,134],"./FinancialReport":[9474,196,393,659,495,191,969,351,69,685],"./FinancialReport.vue":[9474,196,393,659,495,191,969,351,69,685],"./HomeView":[0,196,393,487],"./HomeView.vue":[0,196,393,487],"./LoginScreen":[7772,393,191,969,446],"./LoginScreen.vue":[7772,393,191,969,446],"./TestsView":[7419,196,393,659,495,191,969,351,69,685,304],"./TestsView.vue":[7419,196,393,659,495,191,969,351,69,685,304],"./UserProfile":[1667,196,393,191,969,351,263],"./UserProfile.vue":[1667,196,393,191,969,351,263]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=8611,e.exports=o},1109:function(e,t,n){var r={"./ErrorView.vue":[1312,196,393,541],"./FinancialControl.vue":[1219,196,393,659,495,191,969,351,69,134],"./FinancialReport.vue":[9474,196,393,659,495,191,969,351,69,685],"./HomeView.vue":[0,196,393,487],"./LoginScreen.vue":[7772,393,191,969,446],"./TestsView.vue":[7419,196,393,659,495,191,969,351,69,685,304],"./UserProfile.vue":[1667,196,393,191,969,351,263]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=1109,e.exports=o}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdD=function(){throw new Error("define cannot be used indirect")}}(),function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){e.splice(f--,1);var s=o();void 0!==s&&(t=s)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({102:"default-account",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",304:"views-TestsView",355:"default-view",369:"default-settings",376:"default-drawer-toggle",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",685:"views-FinancialReport",796:"default-notifications",876:"layout-default-Index"}[e]||e)+"."+{14:"7bc857fb",69:"db981ddf",102:"498529f4",134:"3a8dbd94",160:"283d15a0",191:"a0e13494",196:"41ed0798",214:"389d79e7",260:"32180f98",263:"b9675377",304:"bd369380",325:"43b172a0",351:"23f36be6",355:"afc664a3",369:"b321abcf",376:"2f76be8a",393:"99d0b479",397:"6babd0d4",411:"c47b2f38",446:"db13354f",487:"e5516c55",495:"cb3e513f",533:"2a6e7d39",541:"66af0468",659:"28477240",685:"75347c7c",708:"f8dd7923",796:"ada134e1",876:"3591b965",969:"dce0491b"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+({102:"default-account",134:"views-FinancialControl",160:"default-drawer",214:"default-app-bar",263:"views-UserProfile",355:"default-view",369:"default-settings",397:"default-footer",446:"views-LoginScreen",487:"views-HomeView",541:"views-ErrorView",796:"default-notifications",876:"layout-default-Index"}[e]||e)+"."+{14:"d1e124e1",69:"ad000a30",102:"77084794",134:"ff26e752",160:"1d957801",196:"77b2a425",214:"0b8caed0",260:"18ea5b08",263:"6680e23b",325:"623d006c",355:"13f1465d",369:"6082e7eb",397:"a2087f38",411:"6ffb816e",446:"d0ab099b",487:"c68781f4",541:"588be1e8",708:"bb0f8656",796:"649e876f",876:"d30a465a",969:"3571b7b4"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nvs-v4:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+i),u.src=r),e[r]=[o];var d=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=u,i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(t(a,u))return o();e(r,u,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={14:1,69:1,102:1,134:1,160:1,196:1,214:1,260:1,263:1,325:1,355:1,369:1,397:1,411:1,446:1,487:1,541:1,708:1,796:1,876:1,969:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(196!=t){var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),u=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+t,t)}else e[t]=0},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(t&&t(r);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8594)}));r=n.O(r)})();
//# sourceMappingURL=app.6aa88dac.js.map