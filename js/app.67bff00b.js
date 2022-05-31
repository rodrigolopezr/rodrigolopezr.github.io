(function(){"use strict";var t={3748:function(t,e,a){var r=a(8935),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("home-view")],1)},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-app-bar",{attrs:{absolute:"",color:"#00669E",dark:"","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[r("v-toolbar-title",[t._v("Rodrigo López - Resume")]),r("v-spacer")],1)],1),r("v-row",[r("video-background",{staticStyle:{height:"50vh",left:"0px !important"},attrs:{overlay:"linear-gradient(45deg,#2a4ae430,#fb949e6b)",poster:a(3839),src:a(567)}},[r("v-container",{staticClass:"containerDev fill-height mt-10 text-center"},[r("v-row",{attrs:{align:"center"}},[r("v-col",[r("v-card",{staticClass:"cardDev"},[r("v-card-title",{staticClass:"justify-center"},[r("div",{staticClass:"text-center"},[r("div",[r("v-avatar",{staticClass:"text-center",attrs:{size:t.$vuetify.breakpoint.smAndDown?90:110}},[r("img",{attrs:{src:a(976)}})])],1),r("div",[r("span",{staticClass:"black--text font-weight-bold text-center text-lg-h4 text-sm-h5"},[t._v(" Developer, Tech Lead ")])])])]),r("v-card-text",[r("vue-typer",{attrs:{"caret-animation":"blink","erase-delay":250,"erase-on-complete":!1,"erase-style":"select-all","initial-action":"typing","pre-erase-delay":2e3,"pre-type-delay":70,repeat:1/0,shuffle:!1,text:["require node from nodeJS","import vue from VueJS","require_once(LUMEN)","require(LARAVEL)","import Mobile from ReactNative","const value = Javascript"],"type-delay":70}})],1)],1)],1)],1)],1)],1)],1),r("div",{ref:"#about",staticClass:"mt-10"},[r("v-container",{staticClass:"containerCards"},[r("v-card",[r("v-card-title",{staticClass:"justify-center"},[r("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" About Me ")])]),r("v-card-text",[r("p",{staticClass:"text-h6 text-justify"},[t._v(" I am a Systems Engineer graduated in 2019 from the Universidad de la Salle Bajío, since then I have worked as a software developer, thus having an experience of more than 13 years working in different languages and frameworks. ")]),r("p",{staticClass:"text-h6 text-justify"},[t._v(" In addition to my work as a developer, I have taught development courses such as .NET, VueJS, Excel, among others. ")]),r("p",{staticClass:"text-h6 text-justify"},[t._v(" I have a high sense of urgency, I have worked for companies where it is necessary to solve an issue in minutes, this has led me to have a great experience with errors or problems in production. ")]),r("p",{staticClass:"text-center"},[r("v-btn",{staticClass:"white--text",attrs:{color:"red"},on:{click:function(e){return t.redirect("EnCurriculumRodrigoLopezREn.pdf")}}},[t._v(" Download Full Resume "),r("v-icon",{attrs:{color:"white",dark:"",right:"",size:"30"}},[t._v(" mdi-file-pdf-box ")])],1)],1)])],1)],1)],1),r("div",{ref:"experience"},[r("v-container",{staticClass:"containerCards"},[r("v-card",[r("v-card-title",{staticClass:"justify-center"},[r("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Experience ")])]),r("v-card-text",[r("v-timeline",t._l(t.years,(function(e,a){return r("v-timeline-item",{key:a,attrs:{color:e.color,small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[r("span",{class:"headline font-weight-bold "+e.color+"--text",domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[r("div",{staticClass:"py-4"},[r("h2",{class:"headline font-weight-light mb-4 "+e.color+"--text"},[t._v(" "+t._s(e.title)+" ")]),r("div",[t._v(" "+t._s(e.text)+" ")])])])})),1)],1)],1)],1)],1),r("div",{ref:"languages",staticClass:"mt-10"},[r("v-container",{staticClass:"containerCards"},[r("v-card",[r("v-card-title",{staticClass:"justify-center"},[r("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Languages and Frameworks ")])]),r("v-card-text",[r("div",{staticClass:"justify-center text-center"},[r("span",{staticClass:"text-h6"},[t._v("These are the languages and frameworks I've worked")]),r("v-progress-linear",{attrs:{color:"blue",height:"25",value:"90"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"white--text"},[t._v(".NET (8) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"purple",height:"25",value:"90"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"white--text"},[t._v("PHP (8) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"cyan",height:"25",value:"70"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"white--text"},[t._v("Javascript (6) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"red lighten-2",height:"25",value:"60"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"white--text"},[t._v("VueJS (3) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"grey lighten-2",height:"25",value:"40"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"black--text"},[t._v("ReactJS (2) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"green lighten-2",height:"25",value:"60"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"white--text"},[t._v("Lumen/Laravel (3) years")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"pink",height:"25",value:"10"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"black--text"},[t._v("React Native (1) year")])]},proxy:!0}])}),r("v-progress-linear",{attrs:{color:"yellow",height:"25",value:"30"},scopedSlots:t._u([{key:"default",fn:function(){return[r("strong",{staticClass:"black--text"},[t._v("NodeJS (2) years")])]},proxy:!0}])})],1)])],1)],1)],1),r("div",{ref:"portfolio"},[r("v-container",{staticClass:"containerCards"},[r("v-card",{attrs:{elevation:"0"}},[r("v-card-title",{staticClass:"justify-center"},[r("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Portfolio ")])]),r("v-card-text",{staticClass:"justify-center"}),r("v-row",t._l(t.cards,(function(e){return r("v-col",{key:e.title,attrs:{md:e.flex,sm:"2"}},[r("v-card",[r("v-img",{staticClass:"align-end white--text",attrs:{gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px",src:e.src}},[r("v-card-title",{domProps:{textContent:t._s(e.title)}})],1),r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{attrs:{icon:""},on:{click:function(a){return t.redirect(e.to)}}},[r("v-icon",[t._v("mdi-web")])],1)],1)],1)],1)})),1)],1)],1)],1),r("div",{ref:"contact"},[r("v-container",{staticClass:"containerCards"},[r("v-card",[r("v-card-title",{staticClass:"justify-center"},[r("span",{staticClass:"font-weight-bold primary--text text-center text-lg-h3 text-md-h5"},[t._v(" Contact Me ")])]),r("v-card-text",{staticClass:"justify-center"},[r("div",{staticClass:"justify-center text-center"},[r("p",{staticClass:"text-center text-h6"},[t._v(" Do you like my profile? Conctact Me, I can help you with your project ")]),r("v-icon",{staticClass:"text-center"},[t._v(" mdi-gmail ")]),t._v(" "),r("span",{staticClass:"text-body-2 text-center"},[t._v("rodrigo.lopez.r87@gmail.com")]),t._v(" "),r("v-spacer"),r("v-icon",{staticClass:"text-center"},[t._v(" mdi-whatsapp ")]),t._v(" "),r("span",{staticClass:"text-body-2 text-center"},[t._v("52+ (477) 154-23-12")]),r("p"),r("p",{staticClass:"justify-center text-center text-lg-h4 text-md-h5"},[t._v(" If you want you cand send me a direct Message by whatsapp ")]),r("v-btn",{staticClass:"justify-center mx-auto",attrs:{color:"teal",dark:"",fab:""},on:{click:function(e){return t.redirect("https://api.whatsapp.com/send?phone=+524771542312")}}},[r("v-icon",[t._v("mdi-whatsapp"),r("v-icon")],1)],1)],1)])],1)],1)],1),r("div",[r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"indigo lighten-1 text-center white--text",staticStyle:{width:"100% !important"},attrs:{flat:"",tile:""}},[r("v-card-text",t._l(t.icons,(function(e){return r("v-btn",{key:e.icon,staticClass:"mx-4 white--text",attrs:{icon:""},on:{click:function(a){return t.redirect(e.to)}}},[r("v-icon",{attrs:{size:"24px"}},[t._v(" "+t._s(e.icon)+" ")])],1)})),1),r("v-card-text",{staticClass:"pt-0 white--text"},[t._v(" This page was totally made by me, I'm using vuetify and VueJs ")]),r("v-divider"),r("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("Rodrigo López")])])],1)],1)],1)],1)},s=[],l={name:"HomeView",components:{},data:()=>({years:[{color:"cyan",year:"Oct 2020 - Now",title:"(M6 Connect USA) Tech Developer, Developer Lead",text:"Developing in Node Js, Laravel, Lumen, VueJS, Javascript, control of the development team to reach the goal of delivering in a timely manner"},{color:"green",year:"(Instituto Lux México) Oct 2014 - Oct 2020",title:"Developer Lead",text:"Development Web Application for Register of new members(made With VueJS + Larave + REACT) https://lux.org.mx/admisiones/#/ • Develoment Web Application to Instituto Lux College for Child delivery (intranet) made with VueJs + Laravel + REACT  • Development of the current page (php-mysql, responsive) with panel administration. • Development of help desk for tickets support (php-mysql) • Development of application for rating capture BADyG’s evaluation (C# MCV) • Improvement and administration of the schools web and office control system • Improvement and administration of the institutes cash control system. • Administration of domain and mail of the institute (platform google)"},{color:"red",year:"(Siemens México) Apr 2014 - Oct-2014",title:"Sr. Developer.",text:"Web application development for the administration of computer equipment (Register, Low, Reservation, Assignment of equipment) developed in C #, SQL Server 2008, WCF)"},{color:"grey",year:"(Fábricas de Calzado Andrea México) Aug. 2012 – Apr. 2014",title:"Sr. Developer.",text:"Development of WCF Services for sending e-mail to Andrea System Customers. • Development of WCF Services for billing through a Suppliers DLL (MySuite). • Development and improvements to the sales system."},{color:"blue",year:"(Poder Judicial del Estado de Guanajuato) Mar. 2009 – Aug.2012",title:"Webmaster",text:"Updating of the page design of www.poderjudicial-gto.gob.mx (Years of update: 2009, 2011, 2012)"}],icons:[{icon:"mdi-linkedin",to:"https://www.linkedin.com/in/rodrigolopezr"},{icon:"mdi-github",to:"https://github.com/rodrigolopezr/"}],cards:[{title:"App Junta 360",src:a(4642),flex:3,to:"https://play.google.com/store/apps/details?id=com.misjuntas&hl=es_MX"},{title:"Sistema de pedidos",src:a(5529),flex:3,to:"http://pedidos.vabadus.mx/login"},{title:"Instituto Lux Landing page",src:a(5319),to:"https://institutolux.edu.mx",flex:3},{title:"Rigel Lógistica",src:a(6687),to:"http://rigel-scm.com/",flex:3},{title:"Alfatextiles",src:a(5476),to:"http://alfatextiles.mx/",flex:3},{title:"Biblioteca Virtual",src:a(3597),to:"https://github.com/rodrigolopezr/library",flex:3}]}),methods:{scrollMeTo(t){const e=this.$refs[t],a=e.offsetTop;window.scrollTo(0,a)},messageSendHandler(){},redirect(t){window.location.href=t}}},c=l,d=a(1001),u=(0,d.Z)(c,i,s,!1,null,"c6a82f08",null),p=u.exports,v={name:"App",components:{HomeView:p}},f=v,h=(0,d.Z)(f,o,n,!1,null,null,null),g=h.exports,x=a(8209),m=a.n(x);a(243);r["default"].use(m());const y={};var A=new(m())(y),b=a(3205),C=a.n(b),w=a(6676),k=a.n(w);r["default"].use(b.Plugin),r["default"].component("VideoBackground",C()),r["default"].config.productionTip=!1,r["default"].use(A),r["default"].use(k()),new r["default"]({vuetify:A,Plugin:b.Plugin,VueTyperPlugin:k(),render:t=>t(g)}).$mount("#app")},5476:function(t,e,a){t.exports=a.p+"img/alfatextiles.99b7aff0.png"},3839:function(t,e,a){t.exports=a.p+"img/bg-1.67750213.jpg"},3597:function(t,e,a){t.exports=a.p+"img/biblioteca.8c79c0d4.png"},4642:function(t,e,a){t.exports=a.p+"img/junta360.fd82bd5d.png"},5319:function(t,e,a){t.exports=a.p+"img/lux.214bf61b.png"},5529:function(t,e,a){t.exports=a.p+"img/pedidos.17e713b8.png"},6687:function(t,e,a){t.exports=a.p+"img/rigel.aa88e10c.png"},976:function(t){t.exports="data:image/jpeg;base64,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"},567:function(t,e,a){t.exports=a.p+"media/video.e6d1c005.mp4"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={exports:{}};return t[r].call(n.exports,n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],n=t[d][2];for(var s=!0,l=0;l<r.length;l++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[l])}))?r.splice(l--,1):(s=!1,n<i&&(i=n));if(s){t.splice(d--,1);var c=o();void 0!==c&&(e=c)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(l)var d=l(a)}for(e&&e(r);c<i.length;c++)n=i[c],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkrodrigocv"]=self["webpackChunkrodrigocv"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(3748)}));r=a.O(r)})();
//# sourceMappingURL=app.67bff00b.js.map