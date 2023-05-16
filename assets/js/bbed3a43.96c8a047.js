"use strict";(self.webpackChunkdev_website=self.webpackChunkdev_website||[]).push([[4293],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7228:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={},i="Models",o={unversionedId:"Modules/return-orders/models",id:"Modules/return-orders/models",title:"Models",description:"Return Order",source:"@site/docs/Modules/return-orders/models.md",sourceDirName:"Modules/return-orders",slug:"/Modules/return-orders/models",permalink:"/docs/Modules/return-orders/models",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/Modules/return-orders/intro"},next:{title:"Permissions and roles",permalink:"/docs/Modules/return-orders/permissions-roles"}},d={},u=[{value:"Return Order",id:"return-order",level:2},{value:"Return Order Line",id:"return-order-line",level:2}],p={toc:u},m="wrapper";function s(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"models"},"Models"),(0,a.kt)("h2",{id:"return-order"},"Return Order"),(0,a.kt)("p",null,"The container of the details of the return order, it contains one-or-more Return Order Line and is it used to collect\nall the needed information to manage the warehouse movements."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Other"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned big int"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"year"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"order_date"),(0,a.kt)("td",{parentName:"tr",align:null},"date"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"notes"),(0,a.kt)("td",{parentName:"tr",align:null},"long text"),(0,a.kt)("td",{parentName:"tr",align:null},"nullable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"customer_id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:null},"foreign_key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"destination_warehouse_id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned big int"),(0,a.kt)("td",{parentName:"tr",align:null},"foreign_key")))),(0,a.kt)("h2",{id:"return-order-line"},"Return Order Line"),(0,a.kt)("p",null,"The unit of the return order, it is connected to a Shipment Line, to a Product and a Production Lot, it has a quantity\nfield that is used to define how much of the product has been returned by the customer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Other"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned big int"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"qty"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned float"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"product_id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:null},"foreign_key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"production_lot_id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned int"),(0,a.kt)("td",{parentName:"tr",align:null},"foreign_key")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkable_id"),(0,a.kt)("td",{parentName:"tr",align:null},"unsigned big int"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linkable_type"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null})))))}s.isMDXComponent=!0}}]);