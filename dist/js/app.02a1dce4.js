(function(t){function e(e){for(var r,a,o=e[0],i=e[1],u=e[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},s={app:0},c=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/gitogram/dist/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05d4":function(t,e,n){},"11de":function(t,e,n){"use strict";n("c480")},"1f50":function(t,e,n){"use strict";n("3498")},"297e":function(t,e,n){},"2b7d":function(t,e,n){},3240:function(t,e,n){"use strict";n("4d22")},"32d4":function(t,e,n){"use strict";n("d32e")},3498:function(t,e,n){},"3cef":function(t,e,n){},"400c":function(t,e,n){"use strict";n("cb71")},"4be9":function(t,e,n){"use strict";n("8546")},"4d22":function(t,e,n){},"4ebe":function(t,e,n){"use strict";n("297e")},"56c8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"home",(function(){return bt})),n.d(r,"triangle",(function(){return ht})),n.d(r,"forks",(function(){return Vt})),n.d(r,"exit",(function(){return zt})),n.d(r,"star",(function(){return $t}));var s={};n.r(s),n.d(s,"getTrendings",(function(){return Ge}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,r,s,a){var o=Object(c["q"])("feeds");return Object(c["l"])(),Object(c["c"])(o)}n("b0c0"),n("a4d3"),n("e01a");var o={class:"topline"},i={class:"c-menu mb-45"},u={class:"stories"},l={class:"posts-container mt-8"},d={class:"posts__list"};function p(t,e,n,r,s,a){var p=Object(c["q"])("header-menu"),b=Object(c["q"])("story-user-item"),f=Object(c["q"])("topline"),O=Object(c["q"])("card"),v=Object(c["q"])("post"),j=Object(c["q"])("baseline");return Object(c["l"])(),Object(c["e"])("div",o,[Object(c["i"])(f,null,{headline:Object(c["t"])((function(){return[Object(c["f"])("div",i,[Object(c["i"])(p)])]})),content:Object(c["t"])((function(){return[Object(c["f"])("ul",u,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["o"])(s.items,(function(e){return Object(c["l"])(),Object(c["e"])("li",{key:e.id,class:"stories-item"},[Object(c["i"])(b,{avatar:e.owner.avatar_url,username:e.owner.login,onOnPress:function(n){return t.handlePress(e.id)}},null,8,["avatar","username","onOnPress"])])})),128))])]})),_:1}),Object(c["i"])(j,null,{posts:Object(c["t"])((function(){return[Object(c["f"])("div",l,[Object(c["f"])("ul",d,[(Object(c["l"])(!0),Object(c["e"])(c["a"],null,Object(c["o"])(s.items,(function(t){return Object(c["l"])(),Object(c["e"])("li",{key:t.id,class:"posts__item"},[Object(c["i"])(v,{"avatar-url":t.owner.avatar_url,username:t.owner.login},{card:Object(c["t"])((function(){return[Object(c["i"])(O,{title:t.name,text:t.description,stars:t.stargazers_count,forks:t.forks_count},null,8,["title","text","stars","forks"])]})),_:2},1032,["avatar-url","username"])])})),128))])])]})),_:1})])}var b=n("1da1"),f=(n("96cf"),{class:"c-topline"}),O={class:"x-container"},v={class:"headline"},j={key:0,class:"content"};function C(t,e){return Object(c["l"])(),Object(c["e"])("div",f,[Object(c["f"])("div",O,[Object(c["f"])("div",v,[Object(c["p"])(t.$slots,"headline",{},void 0,!0)]),t.$slots.content?(Object(c["l"])(),Object(c["e"])("div",j,[Object(c["p"])(t.$slots,"content",{},void 0,!0)])):Object(c["d"])("",!0)])])}n("8bd0");var m=n("6b0d"),h=n.n(m);const g={},_=h()(g,[["render",C],["__scopeId","data-v-317d90da"]]);var w=_,y={class:"c-baseline mt-8"},L={class:"content"};function x(t,e){return Object(c["l"])(),Object(c["e"])("div",y,[Object(c["f"])("div",L,[Object(c["p"])(t.$slots,"posts",{},void 0,!0)])])}n("c190");const V={},H=h()(V,[["render",x],["__scopeId","data-v-0cefbd9e"]]);var M=H,S={class:"avatar_story"},q={class:"username"};function k(t,e,n,r,s,a){var o=Object(c["q"])("avatar");return Object(c["l"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("button",{class:"c-story-user-item",onClick:e[0]||(e[0]=function(e){return t.$emit("onPress")})}),Object(c["f"])("div",S,[Object(c["i"])(o,{avatar:n.avatar,size:n.size},null,8,["avatar","size"])]),Object(c["f"])("div",q,Object(c["s"])(n.username),1)],64)}var Z=["src"];function z(t,e,n,r,s,a){return Object(c["l"])(),Object(c["e"])("div",{class:"avatar",style:Object(c["k"])(r.avatarStyle)},[Object(c["f"])("img",{src:n.avatar,class:"img",alt:"username avatar"},null,8,Z)],4)}var D={props:{avatar:{type:String,required:!0},size:{type:String,default:"s"}},setup:function(t){var e={xs:{width:"37px",height:"37px"},s:{width:"44px",height:"44px"},m:{width:"72px",height:"72px"},l:{width:"90px",height:"90px"}},n=e[t.size];return{avatarStyle:n}}};n("3240");const P=h()(D,[["render",z]]);var J=P,I={components:{avatar:J},props:{avatar:{type:String,default:"https://picsum.photos/200/300",required:!0},username:{type:String,required:!0},size:{type:String,default:"l"}}};n("6023");const T=h()(I,[["render",k],["__scopeId","data-v-0c593abe"]]);var U=T,$={class:"post"},B={class:"post__user mb-16 mt-16"},R={class:"post__card mb-16"},A={class:"c-feed"},N={key:0,class:"comments"},F={class:"post__comment comment__list"},Y=Object(c["f"])("div",{class:"c-date"},[Object(c["f"])("span",null,"15 MAY")],-1);function E(t,e,n,r,s,a){var o=Object(c["q"])("user"),i=Object(c["q"])("toggler"),u=Object(c["q"])("comment");return Object(c["l"])(),Object(c["e"])("div",$,[Object(c["f"])("div",B,[Object(c["i"])(o,{src:n.avatarUrl,name:n.username},null,8,["src","name"])]),Object(c["f"])("div",R,[Object(c["p"])(t.$slots,"card")]),Object(c["f"])("div",A,[Object(c["i"])(i,{class:"mb-10",onOnToggle:a.toggle},null,8,["onOnToggle"]),s.shown?(Object(c["l"])(),Object(c["e"])("div",N,[Object(c["f"])("ul",F,[(Object(c["l"])(),Object(c["e"])(c["a"],null,Object(c["o"])(5,(function(t){return Object(c["f"])("li",{class:"comment__item mb-6",key:t},[Object(c["i"])(u,{text:"Some text",username:"User 1"})])})),64))])])):Object(c["d"])("",!0)]),Y])}var G={class:"user"},K={class:"user__name"},Q={key:0,class:"user__type"};function W(t,e,n,r,s,a){var o=Object(c["q"])("avatar");return Object(c["l"])(),Object(c["e"])("div",G,[Object(c["i"])(o,{class:"user__avatar mr-14",avatar:n.src,size:n.size},null,8,["avatar","size"]),Object(c["f"])("div",null,[Object(c["f"])("div",K,Object(c["s"])(n.name),1),n.type?(Object(c["l"])(),Object(c["e"])("div",Q,Object(c["s"])(n.type),1)):Object(c["d"])("",!0)])])}var X={components:{avatar:J},props:{src:{type:String,default:"https://picsum.photos/200/300"},name:{type:String,default:"John Doe"},type:{type:String,default:""},size:{type:String,default:"s"}}};n("c20f");const tt=h()(X,[["render",W]]);var et=tt,nt={class:"text"},rt={class:"icon"};function st(t,e,n,r,s,a){var o=Object(c["q"])("icon");return Object(c["l"])(),Object(c["e"])("button",{class:Object(c["j"])(["button",{active:s.isOpened}]),onClick:e[0]||(e[0]=function(){return a.toggle&&a.toggle.apply(a,arguments)})},[Object(c["f"])("span",nt,Object(c["s"])(s.isOpened?"Hide":"Show")+" issues",1),Object(c["f"])("span",rt,[Object(c["i"])(o,{name:"triangle"})])],2)}function ct(t,e,n,r,s,a){return Object(c["l"])(),Object(c["c"])(Object(c["r"])(n.name))}var at=n("5530"),ot=(n("caad"),n("2532"),n("b64b"),{preserveAspectRatio:"none",viewBox:"0 0 24 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}),it=Object(c["f"])("path",{d:"M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z",fill:"currentColor"},null,-1),ut=[it];function lt(t,e){return Object(c["l"])(),Object(c["e"])("svg",ot,ut)}const dt={},pt=h()(dt,[["render",lt]]);var bt=pt,ft={width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Ot=Object(c["f"])("path",{d:"M9.79959 5.26034C9.51774 5.56387 9.04319 5.58144 8.73966 5.29959L5 1.77348L1.26033 5.29959C0.956802 5.58144 0.482254 5.56387 0.200401 5.26034C-0.0814505 4.9568 -0.0638752 4.48225 0.239658 4.2004L4.48966 0.200402C4.77742 -0.0668049 5.22257 -0.0668049 5.51033 0.200402L9.76034 4.2004C10.0639 4.48225 10.0814 4.9568 9.79959 5.26034Z",fill:"#212121"},null,-1),vt=[Ot];function jt(t,e){return Object(c["l"])(),Object(c["e"])("svg",ft,vt)}const Ct={},mt=h()(Ct,[["render",jt]]);var ht=mt,gt={width:"12",height:"15",viewBox:"0 0 12 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_t=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 2.25001C3 2.44892 2.92099 2.63969 2.78033 2.78034C2.63968 2.92099 2.44892 3.00001 2.25 3.00001C2.05109 3.00001 1.86033 2.92099 1.71967 2.78034C1.57902 2.63969 1.5 2.44892 1.5 2.25001C1.5 2.05109 1.57902 1.86033 1.71967 1.71968C1.86033 1.57902 2.05109 1.50001 2.25 1.50001C2.44892 1.50001 2.63968 1.57902 2.78033 1.71968C2.92099 1.86033 3 2.05109 3 2.25001ZM3 4.37201C3.50042 4.19509 3.92217 3.84696 4.19073 3.38915C4.45929 2.93134 4.55735 2.39333 4.4676 1.87021C4.37785 1.34709 4.10605 0.87253 3.70025 0.53043C3.29445 0.18832 2.78077 0.00069046 2.25 0.00069046C1.71924 0.00069046 1.20556 0.18832 0.799762 0.53043C0.393962 0.87253 0.122161 1.34709 0.0324114 1.87021C-0.0573486 2.39333 0.0407214 2.93134 0.309281 3.38915C0.577841 3.84696 0.999591 4.19509 1.5 4.37201V5.25001C1.5 5.84674 1.73706 6.41904 2.15901 6.841C2.58097 7.26295 3.15327 7.50001 3.75 7.50001H5.25V9.628C4.74932 9.8049 4.3273 10.1532 4.05855 10.6112C3.78981 11.0692 3.69164 11.6075 3.78139 12.1309C3.87115 12.6543 4.14306 13.1291 4.54905 13.4714C4.95504 13.8136 5.46897 14.0014 6 14.0014C6.53104 14.0014 7.04497 13.8136 7.45096 13.4714C7.85695 13.1291 8.1289 12.6543 8.2186 12.1309C8.3084 11.6075 8.2102 11.0692 7.94146 10.6112C7.67271 10.1532 7.25069 9.8049 6.75 9.628V7.50001H8.25C8.8467 7.50001 9.419 7.26295 9.841 6.841C10.263 6.41904 10.5 5.84674 10.5 5.25001V4.37201C11.0004 4.19509 11.4222 3.84696 11.6907 3.38915C11.9593 2.93134 12.0574 2.39333 11.9676 1.87021C11.8778 1.34709 11.6061 0.87253 11.2002 0.53043C10.7944 0.18832 10.2808 0.00069046 9.75 0.00069046C9.2192 0.00069046 8.7056 0.18832 8.2998 0.53043C7.89396 0.87253 7.62216 1.34709 7.53241 1.87021C7.44265 2.39333 7.54072 2.93134 7.80928 3.38915C8.0778 3.84696 8.4996 4.19509 9 4.37201V5.25001C9 5.44892 8.921 5.63969 8.7803 5.78034C8.6397 5.92099 8.4489 6.00001 8.25 6.00001H3.75C3.55109 6.00001 3.36033 5.92099 3.21967 5.78034C3.07902 5.63969 3 5.44892 3 5.25001V4.37201ZM6.75 11.75C6.75 11.9489 6.67099 12.1397 6.53033 12.2803C6.38968 12.421 6.19892 12.5 6 12.5C5.80109 12.5 5.61033 12.421 5.46967 12.2803C5.32902 12.1397 5.25 11.9489 5.25 11.75C5.25 11.5511 5.32902 11.3603 5.46967 11.2197C5.61033 11.079 5.80109 11 6 11C6.19892 11 6.38968 11.079 6.53033 11.2197C6.67099 11.3603 6.75 11.5511 6.75 11.75ZM9.75 3.00001C9.9489 3.00001 10.1397 2.92099 10.2803 2.78034C10.421 2.63969 10.5 2.44892 10.5 2.25001C10.5 2.05109 10.421 1.86033 10.2803 1.71968C10.1397 1.57902 9.9489 1.50001 9.75 1.50001C9.5511 1.50001 9.3603 1.57902 9.2197 1.71968C9.079 1.86033 9 2.05109 9 2.25001C9 2.44892 9.079 2.63969 9.2197 2.78034C9.3603 2.92099 9.5511 3.00001 9.75 3.00001Z",fill:"#586069"},null,-1),wt=[_t];function yt(t,e){return Object(c["l"])(),Object(c["e"])("svg",gt,wt)}const Lt={},xt=h()(Lt,[["render",yt]]);var Vt=xt,Ht={width:"26",height:"21",viewBox:"0 0 26 21",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Mt=Object(c["f"])("path",{d:"M13 0.942731V8.625L13.0007 9.25621L22.3025 9.25501L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4814 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z",fill:"#262626"},null,-1),St=[Mt];function qt(t,e){return Object(c["l"])(),Object(c["e"])("svg",Ht,St)}const kt={},Zt=h()(kt,[["render",qt]]);var zt=Zt,Dt={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Pt=Object(c["f"])("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.00004 0.25C8.14006 0.24991 8.2773 0.289014 8.39624 0.362887C8.51518 0.43676 8.61106 0.542452 8.67304 0.668L10.555 4.483L14.765 5.095C14.9035 5.11511 15.0336 5.17355 15.1405 5.26372C15.2475 5.35388 15.3272 5.47218 15.3704 5.60523C15.4137 5.73829 15.4189 5.8808 15.3854 6.01665C15.352 6.1525 15.2812 6.27628 15.181 6.374L12.135 9.344L12.854 13.536C12.8777 13.6739 12.8624 13.8157 12.8097 13.9454C12.757 14.0751 12.6691 14.1874 12.5559 14.2697C12.4427 14.352 12.3087 14.401 12.1691 14.4111C12.0295 14.4212 11.8899 14.3921 11.766 14.327L8.00004 12.347L4.23404 14.327C4.11023 14.392 3.97071 14.4211 3.83123 14.411C3.69176 14.4009 3.55788 14.352 3.44472 14.2699C3.33157 14.1877 3.24363 14.0755 3.19086 13.946C3.13808 13.8165 3.12255 13.6749 3.14604 13.537L3.86604 9.343L0.818042 6.374C0.717608 6.27632 0.646541 6.15247 0.612894 6.01647C0.579246 5.88047 0.584364 5.73777 0.627666 5.60453C0.670969 5.47129 0.750725 5.35284 0.857898 5.26261C0.96507 5.17238 1.09537 5.11397 1.23404 5.094L5.44404 4.483L7.32704 0.668C7.38902 0.542452 7.48491 0.43676 7.60385 0.362887C7.72279 0.289014 7.86003 0.24991 8.00004 0.25ZM8.00004 2.695L6.61504 5.5C6.56126 5.6089 6.48183 5.70311 6.38359 5.77453C6.28534 5.84595 6.17122 5.89244 6.05104 5.91L2.95404 6.36L5.19404 8.544C5.28119 8.62886 5.3464 8.73365 5.38403 8.84933C5.42166 8.96501 5.43059 9.0881 5.41004 9.208L4.88204 12.292L7.65104 10.836C7.75867 10.7794 7.87845 10.7499 8.00004 10.7499C8.12164 10.7499 8.24141 10.7794 8.34904 10.836L11.119 12.292L10.589 9.208C10.5685 9.0881 10.5774 8.96501 10.615 8.84933C10.6527 8.73365 10.7179 8.62886 10.805 8.544L13.045 6.361L9.94904 5.911C9.82886 5.89344 9.71474 5.84695 9.6165 5.77553C9.51825 5.70411 9.43883 5.6099 9.38504 5.501L8.00004 2.694V2.695Z",fill:"#586069"},null,-1),Jt=[Pt];function It(t,e){return Object(c["l"])(),Object(c["e"])("svg",Dt,Jt)}const Tt={},Ut=h()(Tt,[["render",It]]);var $t=Ut,Bt={name:"Icon",components:Object(at["a"])({},r),props:{name:{type:String,required:!0,validator:function(t){return Object.keys(r).includes(t)}}}};const Rt=h()(Bt,[["render",ct]]);var At=Rt,Nt={components:{icon:At},data:function(){return{isOpened:!1}},methods:{toggle:function(){this.isOpened=!this.isOpened,this.$emit("onToggle",this.isOpened)}}};n("32d4");const Ft=h()(Nt,[["render",st],["__scopeId","data-v-52ee5cf4"]]);var Yt=Ft,Et={class:"c-comment"},Gt={class:"username"};function Kt(t,e,n,r,s,a){return Object(c["l"])(),Object(c["e"])("div",Et,[Object(c["f"])("p",null,[Object(c["f"])("span",Gt,Object(c["s"])(n.username),1),Object(c["h"])(" "+Object(c["s"])(n.text),1)])])}var Qt={name:"Comment",props:{username:{type:String,required:!0},text:{type:String,required:!0}}};n("4be9");const Wt=h()(Qt,[["render",Kt]]);var Xt=Wt,te={components:{user:et,toggler:Yt,comment:Xt},props:{avatarUrl:{type:String,default:"https://picsum.photos/300/300"},username:{type:String,default:"User Loft"}},data:function(){return{shown:!1}},methods:{toggle:function(t){this.shown=t}}};n("1f50");const ee=h()(te,[["render",E]]);var ne=ee,re={class:"card"},se={class:"card__title_wrap mb-16"},ce={class:"card__title mb-16"},ae={class:"card__desc mb-32"},oe={class:"card__stats"};function ie(t,e,n,r,s,a){var o=Object(c["q"])("stats");return Object(c["l"])(),Object(c["e"])("div",re,[Object(c["f"])("div",se,[Object(c["f"])("h2",ce,Object(c["s"])(n.title),1)]),Object(c["f"])("div",ae,Object(c["s"])(n.text),1),Object(c["f"])("div",oe,[Object(c["i"])(o,{stars:n.stars,forks:n.forks},null,8,["stars","forks"])])])}var ue={class:"stats"},le={class:"stats__border stats__right"},de={class:"stats__icon mr-4"},pe=Object(c["f"])("span",null,"Star",-1),be={class:"stats__border"},fe={class:"stats__border"},Oe={class:"stats__icon mr-4"},ve=Object(c["f"])("span",null,"Forks",-1),je={class:"stats__border stats__left"};function Ce(t,e,n,r,s,a){var o=Object(c["q"])("icon");return Object(c["l"])(),Object(c["e"])("div",ue,[Object(c["f"])("div",le,[Object(c["f"])("div",de,[Object(c["i"])(o,{name:"star"})]),pe]),Object(c["f"])("div",be,Object(c["s"])(n.stars),1),Object(c["f"])("div",fe,[Object(c["f"])("div",Oe,[Object(c["i"])(o,{name:"forks"})]),ve]),Object(c["f"])("div",je,Object(c["s"])(n.forks),1)])}n("a9e3");var me={components:{icon:At},props:{stars:{type:Number,required:!0},forks:{type:Number,required:!0}},setup:function(){return{}}};n("afb8");const he=h()(me,[["render",Ce]]);var ge=he,_e={components:{stats:ge},props:{title:{type:String,default:"Ttiel"},text:{type:String,default:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad totam undevoluptatem sunt fugiat labore amet perspiciatis! Dignissimos error reprehenderit officia repudiandae vero illum itaque ex eius maiores. Autem, fugit?"},stars:{type:String,default:"10"},forks:{type:String,default:"5"}}};n("4ebe");const we=h()(_e,[["render",ie]]);var ye=we,Le={class:"menu"};function xe(t,e,n,r,s,a){var o=Object(c["q"])("logo"),i=Object(c["q"])("menu-icons");return Object(c["l"])(),Object(c["e"])("div",Le,[Object(c["i"])(o),Object(c["i"])(i)])}var Ve={class:"menu__icons"},He={class:"icon"},Me={class:"icon"};function Se(t,e,n,r,s,a){var o=Object(c["q"])("icon"),i=Object(c["q"])("avatar");return Object(c["l"])(),Object(c["e"])("div",Ve,[Object(c["f"])("div",He,[Object(c["i"])(o,{name:"home"})]),Object(c["i"])(i,{class:"user__avatar",avatar:n.src,size:n.size},null,8,["avatar","size"]),Object(c["f"])("div",Me,[Object(c["i"])(o,{name:"exit"})])])}var qe={components:{icon:At,avatar:J},props:{src:{type:String,default:"https://picsum.photos/200/300"},size:{type:String,default:"xs"}}};n("9af2");const ke=h()(qe,[["render",Se]]);var Ze=ke,ze={width:"175",height:"37",viewBox:"0 0 175 37",fill:"none",xmlns:"http://www.w3.org/2000/svg"},De=Object(c["g"])('<path d="M18.6664 10.4756H24.3009C23.5838 5.28933 19.0122 1.63971 13.0832 1.63971C6.15528 1.63971 0.815308 6.63393 0.815308 15.1369C0.815308 23.435 5.80953 28.5829 13.1984 28.5829C19.819 28.5829 24.5443 24.3954 24.5443 17.4931V14.1893H13.5698V18.3639H19.2043C19.1274 21.6166 16.9121 23.6783 13.224 23.6783C9.06217 23.6783 6.43701 20.5665 6.43701 15.0857C6.43701 9.63046 9.16462 6.54429 13.1728 6.54429C16.0285 6.54429 17.9621 8.01694 18.6664 10.4756Z" fill="#292929"></path><path d="M28.5773 28.2243H34.0325V8.55478H28.5773V28.2243ZM31.3177 6.01925C32.944 6.01925 34.2758 4.7771 34.2758 3.25322C34.2758 1.74215 32.944 0.5 31.3177 0.5C29.7042 0.5 28.3724 1.74215 28.3724 3.25322C28.3724 4.7771 29.7042 6.01925 31.3177 6.01925Z" fill="#292929"></path><path d="M47.6026 8.55478H43.9017V3.84229H38.4465V8.55478H35.7573V12.6526H38.4465V22.8972C38.4209 26.7517 41.046 28.6597 45.003 28.4932C46.4116 28.442 47.4105 28.1603 47.9611 27.981L47.1031 23.9216C46.8342 23.9728 46.258 24.1009 45.7457 24.1009C44.6572 24.1009 43.9017 23.6911 43.9017 22.18V12.6526H47.6026V8.55478Z" fill="#292929"></path><path d="M58.5699 28.6085C64.5373 28.6085 68.251 24.5235 68.251 18.4664C68.251 12.3709 64.5373 8.29867 58.5699 8.29867C52.6024 8.29867 48.8888 12.3709 48.8888 18.4664C48.8888 24.5235 52.6024 28.6085 58.5699 28.6085ZM58.5955 24.3826C55.8422 24.3826 54.4336 21.8599 54.4336 18.428C54.4336 14.996 55.8422 12.4605 58.5955 12.4605C61.2975 12.4605 62.7061 14.996 62.7061 18.428C62.7061 21.8599 61.2975 24.3826 58.5955 24.3826Z" fill="#292929"></path><path d="M79.3975 36.0102C85.0192 36.0102 89.0146 33.449 89.0146 28.4164V8.55478H83.5978V11.8586H83.3929C82.663 10.2579 81.0623 8.29867 77.7712 8.29867C73.4557 8.29867 69.8061 11.6538 69.8061 18.3511C69.8061 24.8948 73.3533 27.9426 77.784 27.9426C80.9214 27.9426 82.6758 26.3675 83.3929 24.7412H83.6234V28.3396C83.6234 31.0416 81.8947 32.0916 79.5256 32.0916C77.1181 32.0916 75.9016 31.0416 75.4534 29.8506L70.4079 30.5293C71.061 33.6283 74.096 36.0102 79.3975 36.0102ZM79.5128 23.8448C76.8364 23.8448 75.3766 21.719 75.3766 18.3255C75.3766 14.9832 76.8108 12.6398 79.5128 12.6398C82.1636 12.6398 83.649 14.8808 83.649 18.3255C83.649 21.7959 82.138 23.8448 79.5128 23.8448Z" fill="#292929"></path><path d="M92.0936 28.2243H97.5488V17.0962C97.5488 14.6759 99.316 13.0112 101.723 13.0112C102.479 13.0112 103.516 13.1392 104.029 13.3057V8.46514C103.542 8.34989 102.863 8.27305 102.313 8.27305C100.11 8.27305 98.3044 9.55362 97.5873 11.9867H97.3824V8.55478H92.0936V28.2243Z" fill="#292929"></path><path d="M110.632 28.5957C113.539 28.5957 115.422 27.3279 116.382 25.4967H116.536V28.2243H121.709V14.9576C121.709 10.2707 117.739 8.29867 113.36 8.29867C108.647 8.29867 105.548 10.5525 104.793 14.1381L109.838 14.5478C110.21 13.2417 111.375 12.2812 113.334 12.2812C115.191 12.2812 116.254 13.2161 116.254 14.8296V14.9064C116.254 16.1742 114.909 16.3406 111.49 16.6736C107.597 17.0321 104.101 18.3383 104.101 22.7307C104.101 26.6236 106.88 28.5957 110.632 28.5957ZM112.195 24.8308C110.517 24.8308 109.313 24.0497 109.313 22.5514C109.313 21.0147 110.581 20.2592 112.502 19.9903C113.693 19.8238 115.639 19.5421 116.292 19.1067V21.194C116.292 23.2557 114.589 24.8308 112.195 24.8308Z" fill="#292929"></path><path d="M124.679 28.2243H130.135V16.4175C130.135 14.2405 131.518 12.7935 133.336 12.7935C135.129 12.7935 136.333 14.0228 136.333 15.9565V28.2243H141.621V16.2126C141.621 14.1765 142.787 12.7935 144.771 12.7935C146.513 12.7935 147.819 13.8819 147.819 16.0717V28.2243H153.262V14.996C153.262 10.7317 150.726 8.29867 147.064 8.29867C144.182 8.29867 141.941 9.77132 141.135 12.0251H140.93C140.302 9.74571 138.292 8.29867 135.59 8.29867C132.939 8.29867 130.929 9.70729 130.109 12.0251H129.878V8.55478H124.679V28.2243Z" fill="#292929"></path><path d="M174.815 0.768919H170.116L161.664 32.1685H166.364L174.815 0.768919Z" fill="#292929"></path>',9),Pe=[De];function Je(t,e){return Object(c["l"])(),Object(c["e"])("svg",ze,Pe)}const Ie={},Te=h()(Ie,[["render",Je]]);var Ue=Te,$e={name:"headerMenu",components:{menuIcons:Ze,logo:Ue}};n("a970");const Be=h()($e,[["render",xe]]);var Re=Be,Ae=n("7714"),Ne=(n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("a15b"),n("99af"),n("bc3a")),Fe="https://api.github.com",Ye=function(t){var e=t.url,n=t.method,r=void 0===n?"get":n,s=t.data,c=void 0===s?{}:s,a=t.headers,o=void 0===a?{}:a,i=t.baseURL,u=void 0===i?Fe:i;return Ne({url:e,method:r,data:c,headers:o,baseURL:u})},Ee=function(t){return t<10?"0".concat(t):t},Ge=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"javascript",e=new URLSearchParams,n=6048e5,r=new Date(Date.now()-n),s=[r.getFullYear(),Ee(r.getMonth()+1),Ee(r.getDate())].join("-");return e.append("order","desc"),e.append("sort","stars"),e.append("per_page",10),e.append("q","language:".concat(t," created:>").concat(s)),Ye({url:"/search/repositories?".concat(e)})},Ke={name:"feeds",components:{topline:w,storyUserItem:U,post:ne,card:ye,headerMenu:Re,baseline:M},data:function(){return{stories:Ae,shown:!1,posts:[],items:[]}},methods:{toggle:function(t){this.shown=t}},created:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.getTrendings();case 3:n=e.sent,r=n.data,t.items=r.items,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:t.posts=Ae;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()}};n("400c");const Qe=h()(Ke,[["render",p],["__scopeId","data-v-94f484ea"]]);var We=Qe,Xe={name:"App",components:{feeds:We}};n("11de");const tn=h()(Xe,[["render",a]]);var en=tn;Object(c["b"])(en).mount("#app")},6023:function(t,e,n){"use strict";n("3cef")},7714:function(t){t.exports=JSON.parse('[{"id":"0","avatar":"https://picsum.photos/200/300","username":"John Doe"},{"id":"1","avatar":"https://picsum.photos/200/300","username":"Joahn Doe"},{"id":"2","avatar":"https://picsum.photos/200/300","username":"Maybe Doe"},{"id":"3","avatar":"https://picsum.photos/200/300","username":"Nobody Doe"},{"id":"4","avatar":"https://picsum.photos/200/300","username":"John Doe"},{"id":"5","avatar":"https://picsum.photos/200/300","username":"Joahn Doe"},{"id":"6","avatar":"https://picsum.photos/200/300","username":"Maybe Doe"},{"id":"7","avatar":"https://picsum.photos/200/300","username":"Nobody Doe"},{"id":"8","avatar":"https://picsum.photos/200/300","username":"John Doe"},{"id":"9","avatar":"https://picsum.photos/200/300","username":"Joahn Doe"}]')},8546:function(t,e,n){},"8bd0":function(t,e,n){"use strict";n("f255")},"9af2":function(t,e,n){"use strict";n("56c8")},a377:function(t,e,n){},a970:function(t,e,n){"use strict";n("a377")},afb8:function(t,e,n){"use strict";n("cfb5")},c190:function(t,e,n){"use strict";n("05d4")},c20f:function(t,e,n){"use strict";n("2b7d")},c480:function(t,e,n){},cb71:function(t,e,n){},cfb5:function(t,e,n){},d32e:function(t,e,n){},f255:function(t,e,n){}});
//# sourceMappingURL=app.02a1dce4.js.map