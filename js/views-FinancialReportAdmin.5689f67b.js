"use strict";(self["webpackChunknvs_v4"]=self["webpackChunknvs_v4"]||[]).push([[601],{7174:function(t,e,a){a.r(e),a.d(e,{default:function(){return M}});var s=a(2602),r=a(6887),i=a(3385),n=a(5223),l=a(4437),o=a(6035),c=a(5602),A=a(6770),d=a(6904),u=a(4019),p=a(393),h=a(8421),D=a(1819),m=a(8689),T=a(5294),f=a(4146),g=a(117),E=a(5234),S=a(1938),P=function(){var t=this,e=t._self._c;return e("div",[e(o.Z,[e(T.Z,[e(l.Z,{attrs:{cols:"12"}},[e(i.Z,{staticClass:"mx-auto",attrs:{"max-width":"650"}},[e(d.Z,[e(n.EB,[e("span",{staticClass:"text-h4 text-md-h3"},[t._v("Relatório de Lançamentos")])]),e(n.ZB,[e(o.Z,[e(T.Z,{attrs:{justify:"center"}},[e(l.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[e(s.Z,{staticClass:"grey-label",attrs:{items:t.companies,color:"blue",outlined:"","hide-details":"",label:"Empresa","prepend-icon":"mdi-office-building-outline","item-text":"EMPRESA","item-value":"EMPRESA"},on:{keyup:function(e){t.company=t.company.toLowerCase().split(" ").map((t=>t.charAt(0).toUpperCase()+t.substring(1))).join(" ")}},scopedSlots:t._u([{key:"no-data",fn:function(){return[e(p.Z,[e(h.V9,[t._v(" Nenhum item encontrado "),e("br"),e("br"),e(m.Z,{attrs:{indeterminate:"",color:"blue"}})],1)],1)]},proxy:!0}]),model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),e(l.Z,{attrs:{cols:"12",sm:"6",md:"12"}},[e(s.Z,{staticClass:"grey-label",attrs:{items:t.company?t.plates:t.companies,color:"blue",outlined:"","hide-details":"",label:"Placa","prepend-icon":"mdi-account-outline","item-text":"PLACA","item-value":"PLACA",onkeyup:"this.value = this.value.toUpperCase()"},scopedSlots:t._u([{key:"no-data",fn:function(){return[e(p.Z,[e(h.V9,[t._v(" Nenhum item encontrado "),e("br"),e("br"),e(m.Z,{attrs:{indeterminate:"",color:"blue"}})],1)],1)]},proxy:!0}]),model:{value:t.plate,callback:function(e){t.plate=e},expression:"plate"}})],1),e(l.Z,{attrs:{cols:"12",md:"6"}},[e(f.Z,{staticClass:"grey-label",attrs:{color:"blue","hide-details":"",items:t.states,"prepend-icon":"mdi-map-marker-outline",label:"Estado",placeholder:"Selecione",outlined:""},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),e(l.Z,{attrs:{cols:"12",md:"6"}},[e(f.Z,{staticClass:"grey-label",attrs:{color:"blue","prepend-icon":"mdi-list-status","hide-details":"",multiple:"",items:t.statuses,label:"Status",placeholder:"Selecione",outlined:""},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),e(l.Z,{attrs:{cols:"12",sm:"6"}},[e(D.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(S.Z,t._g(t._b({staticClass:"my-0 ms-2 pa-0",attrs:{readonly:"",outlined:"","persistent-hint":"","max-width":"100",label:"Data Pagamento Taxa",hint:"Início"},model:{value:t.computedFeePaymentDateFormattedStart,callback:function(e){t.computedFeePaymentDateFormattedStart=e},expression:"computedFeePaymentDateFormattedStart"}},"v-text-field",s,!1),a))]}}])},[e(A.Z,{staticClass:"ma-0 pa-0 mx-auto",attrs:{color:"amber",locale:"pt-BR","no-title":""},model:{value:t.feePaymentDateStart,callback:function(e){t.feePaymentDateStart=e},expression:"feePaymentDateStart"}})],1)],1),e(l.Z,{attrs:{cols:"12",sm:"6"}},[e(D.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(S.Z,t._g(t._b({staticClass:"my-0 ms-2 pa-0",attrs:{readonly:"",outlined:"","persistent-hint":"","max-width":"100",label:"Data Pagamento Taxa",hint:"Final"},model:{value:t.computedFeePaymentDateFormattedEnd,callback:function(e){t.computedFeePaymentDateFormattedEnd=e},expression:"computedFeePaymentDateFormattedEnd"}},"v-text-field",s,!1),a))]}}])},[e(A.Z,{staticClass:"ma-0 pa-0 mx-auto",attrs:{color:"amber",locale:"pt-BR","no-title":""},model:{value:t.feePaymentDateEnd,callback:function(e){t.feePaymentDateEnd=e},expression:"feePaymentDateEnd"}})],1)],1),e(l.Z,{attrs:{cols:"12",sm:"6"}},[e(D.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(S.Z,t._g(t._b({staticClass:"my-0 ms-2 pa-0",attrs:{readonly:"",outlined:"","persistent-hint":"","max-width":"100",label:"Data Lançamento",hint:"Início"},model:{value:t.computedRegisterDateFormattedStart,callback:function(e){t.computedRegisterDateFormattedStart=e},expression:"computedRegisterDateFormattedStart"}},"v-text-field",s,!1),a))]}}])},[e(A.Z,{staticClass:"ma-0 pa-0 mx-auto",attrs:{color:"amber",locale:"pt-BR","no-title":""},model:{value:t.registerDateStart,callback:function(e){t.registerDateStart=e},expression:"registerDateStart"}})],1)],1),e(l.Z,{attrs:{cols:"12",sm:"6"}},[e(D.Z,{staticClass:"d-flex",attrs:{"min-width":"auto","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(S.Z,t._g(t._b({staticClass:"my-0 ms-2 pa-0",attrs:{readonly:"",outlined:"","persistent-hint":"","max-width":"100",label:"Data Lançamento",hint:"Final"},model:{value:t.computedRegisterDateFormattedEnd,callback:function(e){t.computedRegisterDateFormattedEnd=e},expression:"computedRegisterDateFormattedEnd"}},"v-text-field",s,!1),a))]}}])},[e(A.Z,{staticClass:"ma-0 pa-0 mx-auto",attrs:{color:"amber",locale:"pt-BR","no-title":""},model:{value:t.registerDateEnd,callback:function(e){t.registerDateEnd=e},expression:"registerDateEnd"}})],1)],1)],1)],1)],1),e(n.h7,{staticClass:"mt-n10 px-10 py-5"},[e(r.Z,{attrs:{fab:"",small:"",disabled:!t.licences,loading:t.loading2},on:{click:function(e){return t.downloadPDF()}}},[e(u.Z,{attrs:{dark:"",color:"red darken-2"}},[t._v(" mdi-file-pdf-box ")])],1),e(r.Z,{attrs:{fab:"",small:"",disabled:!t.licences,loading:t.loading3},on:{click:function(e){return t.downloadXLSX("xlsx")}}},[e(u.Z,{attrs:{dark:"",color:"green darken-2"}},[t._v(" mdi-microsoft-excel ")])],1),e(E.Z),e(r.Z,{attrs:{color:"blue darken-3 white--text",loading:t.loading},on:{click:function(e){t.generateReport(),t.loading=!0}}},[t._v(" Gerar Relatório ")])],1)],1)],1)],1)],1),e(T.Z,[!0===t.showReport?e(o.Z,[e(c.Z,{attrs:{headers:t.headers,items:t.licences,"footer-props":{itemsPerPageOptions:[5,10,-1]}}})],1):t._e()],1)],1),e("vue-html2pdf",{ref:"html2Pdf",attrs:{"show-layout":!1,"enable-download":!0,"manual-pagination":!1,"paginate-elements-by-height":14001,filename:t.reportName,"pdf-quality":2,"pdf-format":"a4","pdf-orientation":"landscape","pdf-content-width":"100%"},on:{startPagination:function(e){t.loading2=!0},hasDownloaded:function(e){t.loading2=!1}}},[e("section",{attrs:{slot:"pdf-content"},slot:"pdf-content"},[e(T.Z,[e(l.Z,{attrs:{cols:"12"}},[e(g.Z,[e("thead",[e("tr",[e("th",[t._v("Custo")]),e("th",[t._v("Receita")]),e("th",[t._v("Saldo")])])]),e("tbody",[e("tr",[e("td",[t._v(t._s(t.totalCost))]),e("td",[t._v(t._s(t.totalRev))]),e("td",[t._v(t._s(t.totalProfit))])])])])],1),e("hr"),e(l.Z,{attrs:{cols:"12"}},[!0===t.showReport?e(o.Z,[e(c.Z,{attrs:{headers:t.headers,items:t.licences,"footer-props":{itemsPerPageOptions:[-1]}}})],1):t._e()],1)],1)],1)]),e("table",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"exportableTable"},[e("tr",t._l(t.headers,(function(a,s){return e("th",{key:"header"+s},[t._v(" "+t._s(a.text)+" ")])})),0),t._l(t.licences,(function(a,s){return e("tr",{key:"data"+s},[e("td",[t._v(t._s(a.ID))]),e("td",[t._v(t._s(t.usDate(a.DATA)))]),e("td",[t._v(t._s(a.EMPRESA))]),e("td",[t._v(t._s(a.ESTADO))]),e("td",[t._v(t._s(a.PLACA))]),e("td",[t._v(t._s(a.AET))]),e("td",[t._v(t._s(a.STATUS))]),e("td",[t._v(t._s(a.CUSTOTAXA.replace(".","").replace(",",".")))]),e("td",[t._v(t._s(t.usDate(a.DATAPAGAMENTOTAXA)))]),e("td",[t._v(t._s(a.NUMBOLETO))]),e("td",[t._v(t._s(t.usDate(a.EMISSAOBOLETO)))]),e("td",[t._v(t._s(t.usDate(a.PAGAMENTOBOLETO)))]),e("td",[t._v(t._s(t.usDate(a.VENCIMENTOBOLETO)))]),e("td",[t._v(t._s(a.VALORCOBRADO.replace(".","").replace(",",".")))])])}))],2)],1)},v=[],x=a(594),y=a(2074),O=a(4105),b={name:"FinancialReportAdmin",components:{VueHtml2pdf:y.Z},data:()=>({company:"",state:"",plate:"",status:"",table:"",feePaymentDateFormatted:"",registerDateFormatted:"",reportName:"",showReport:!1,licences:null,totals:null,totalCost:null,totalProfit:null,totalRev:null,repeated:!1,loading:!1,loading2:!1,loading3:!1,sevenAgo:new Date((new Date).setDate(new Date(new Date).getDate()-7)).toISOString().substr(0,10),registerDateStart:new Date((new Date).getFullYear(),(new Date).getMonth(),1).toISOString().substr(0,10),registerDateEnd:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),feePaymentDateStart:new Date((new Date).getFullYear(),(new Date).getMonth(),1).toISOString().substr(0,10),feePaymentDateEnd:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),companies:[],plates:[],states:[{value:"",text:"Selecione"},{value:"FEDERAL",text:"FEDERAL"},{value:"BA",text:"Bahia"},{value:"GO",text:"Goiás"},{value:"MG",text:"Minas Gerais"},{value:"MS",text:"Mato Grosso do Sul"},{value:"PE",text:"Pernambuco"},{value:"PR",text:"Paraná"},{value:"RJ",text:"Rio de Janiero"},{value:"RS",text:"Rio Grande do Sul"},{value:"SC",text:"Santa Catarina"},{value:"SP",text:"São Paulo"},{value:"TO",text:"Tocantins"},{value:"AC",text:"Acre"},{value:"AL",text:"Alagoas"},{value:"AM",text:"Amazonas"},{value:"AP",text:"Amapá"},{value:"CE",text:"Ceará"},{value:"DF",text:"Distrito Federal"},{value:"ES",text:"Espirito Santo"},{value:"MA",text:"Maranhão"},{value:"MT",text:"Mato Grosso"},{value:"PA",text:"Pará"},{value:"PB",text:"Paraíba"},{value:"PI",text:"Piauí"},{value:"RN",text:"Rio Grande do Norte"},{value:"RO",text:"Rondônia"},{value:"RR",text:"Roraima"},{value:"SE",text:"Sergipe"}],headers:[{text:"ID",value:"ID"},{text:"Lançamento",value:"DATA"},{text:"Empresa",value:"EMPRESA"},{text:"UF",value:"ESTADO"},{text:"Placa",value:"PLACA"},{text:"Nº AET",value:"AET"},{text:"Status",value:"STATUS"},{text:"Custo",value:"CUSTOTAXA"},{text:"Pg. Taxa",value:"DATAPAGAMENTOTAXA"},{text:"Nº Boleto",value:"NUMBOLETO"},{text:"Emiss. Boleto",value:"EMISSAOBOLETO"},{text:"Pg. Boleto",value:"PAGAMENTOBOLETO"},{text:"Venc. Boleto",value:"VENCIMENTOBOLETO"},{text:"Val. Cobrado",value:"VALORCOBRADO"}],statuses:[{value:"A VENCER",text:"A Vencer"},{value:"TAXA PAGA",text:"Taxa Paga"},{value:"CONFERIR",text:"Conferir"},{value:"PAGO",text:"Pago"},{value:"A COBRAR",text:"A Cobrar"},{value:"VENCIDO",text:"Vencido"},{value:"RENEGOCIADO",text:"Renegociado"},{value:"NÃO COBRAR",text:"Não Cobrar"},{value:"A DEPOSITAR",text:"A Depositar"},{value:"ACERTO",text:"Acerto"}]}),computed:{computedRegisterDateFormattedStart(){return this.formatDate(this.registerDateStart)},computedRegisterDateFormattedEnd(){return this.formatDate(this.registerDateEnd)},computedFeePaymentDateFormattedStart(){return this.formatDate(this.feePaymentDateStart)},computedFeePaymentDateFormattedEnd(){return this.formatDate(this.feePaymentDateEnd)}},watch:{company(){let t=this.companies.filter((t=>t.EMPRESA===this.company));return this.plates=t,this.plates},registerDateStart(){this.registerDateFormatted=this.formatDate(this.registerDateStart)},registerDateEnd(){this.registerDateFormatted=this.formatDate(this.registerDateEnd)},feePaymentDateStart(){this.feePaymentDateFormatted=this.formatDate(this.feePaymentDateStart)},feePaymentDateEnd(){this.feePaymentDateFormatted=this.formatDate(this.feePaymentDateEnd)},licences(){return this.reportName="Relatório NVS "+this.registerDateEnd}},created(){this.fetchCompanies()},methods:{fetchCompanies(){return fetch("https://sheetdb.io/api/v1/afxq0nl1f0gvg").then((t=>t.json())).then((t=>{this.companies=t}))},formatDate(t){if(!t)return null;var[e,a,s]=t.split("-");return`${s.padStart(2,"0")}/${a.padStart(2,"0")}/${e}`},parseDate(t){if(!t)return null;const[e,a,s]=t.split("/");return`${s}${a.padStart(2,"0")}${e.padStart(2,"0")}`},usDate(t){if(!t)return null;const[e,a,s]=t.split("/");var r="00:00:28";return`${a.padStart(2,"0")}/${e.padStart(2,"0")}/${s} ${r}`},fetchLicences(){return x.Z.get("https://sheetdb.io/api/v1/afxq0nl1f0gvg")},generateReport(){this.fetchLicences().then((t=>{var e=t.data;this.$nextTick((()=>{var t="",a="",s="",r="",i="",n="",l="",o="",c="",A="",d="";t=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status)&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),a=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[0])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),s=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[1])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),r=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[2])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),i=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[3])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),n=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[4])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),n=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[4])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),l=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[5])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),o=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[6])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),c=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[7])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),A=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[8])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),d=e.filter((t=>t.EMPRESA.includes(this.company)&&t.PLACA.includes(this.plate)&&t.ESTADO.includes(this.state)&&t.STATUS.includes(this.status[9])&&this.parseDate(t.DATAPAGAMENTOTAXA)>=this.feePaymentDateStart.replace(/-/g,"")&&this.parseDate(t.DATAPAGAMENTOTAXA)<=this.feePaymentDateEnd.replace(/-/g,"")&&this.parseDate(t.DATA)>=this.registerDateStart.replace(/-/g,"")&&this.parseDate(t.DATA)<=this.registerDateEnd.replace(/-/g,""))),0===this.status.length?this.licences=t:this.licences=a.concat(s).concat(r).concat(i).concat(n).concat(l).concat(o).concat(c).concat(A).concat(d),this.showReport=!0,this.loading=!1}))}))},downloadPDF(){this.$refs.html2Pdf.generatePdf()},downloadXLSX(t,e,a){var s=this.$refs.exportableTable,r=O.P6.table_to_book(s,{sheet:"Relatório"});this.loading3=!0,setTimeout((()=>(this.loading3=!1,a?O.cW(r,{bookType:t,bookSTT:!0,type:"string"}):O.NC(r,e||this.reportName+"."+(t||"xlsx")))),100)}}},R=b,C=a(4252),_=(0,C.Z)(R,P,v,!1,null,null,null),M=_.exports}}]);
//# sourceMappingURL=views-FinancialReportAdmin.5689f67b.js.map