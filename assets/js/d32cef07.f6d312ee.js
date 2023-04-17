"use strict";(self.webpackChunkdev_website=self.webpackChunkdev_website||[]).push([[365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),d=r,f=h["".concat(c,".").concat(d)]||h[d]||p[d]||i;return n?a.createElement(f,o(o({ref:t},l),{},{components:n})):a.createElement(f,o({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Authentication",s={unversionedId:"Basics/authentication",id:"Basics/authentication",title:"Authentication",description:"First party authentication",source:"@site/docs/Basics/authentication.md",sourceDirName:"Basics",slug:"/Basics/authentication",permalink:"/docs/Basics/authentication",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Access Token",permalink:"/docs/Basics/access-token"},next:{title:"Authorization",permalink:"/docs/Basics/authorization"}},c={},u=[{value:"First party authentication",id:"first-party-authentication",level:2},{value:"Authentication process",id:"authentication-process",level:3},{value:"1) Create a secure authentication page",id:"1-create-a-secure-authentication-page",level:4},{value:"2) Exchange user credentials for a valid access token",id:"2-exchange-user-credentials-for-a-valid-access-token",level:4},{value:"3) Save the refresh token",id:"3-save-the-refresh-token",level:4},{value:"4) Send the access token with every request",id:"4-send-the-access-token-with-every-request",level:4}],l={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"authentication"},"Authentication"),(0,r.kt)("h2",{id:"first-party-authentication"},"First party authentication"),(0,r.kt)("p",null,"With this release, developers with direct contact with the company can use direct password authentication. No more authorisation needed! Just create your login page and start using the authentication api."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"First party API keys can only be generated from the company. For third party authentication with tokens generated from the developer console go ",(0,r.kt)("a",{parentName:"p",href:"#third-party-authentication"},"here"))),(0,r.kt)("h3",{id:"authentication-process"},"Authentication process"),(0,r.kt)("h4",{id:"1-create-a-secure-authentication-page"},"1) Create a secure authentication page"),(0,r.kt)("p",null,"Your application needs a secure login page that can send a POST request through HTTPS to the QuattroApp API."),(0,r.kt)("h4",{id:"2-exchange-user-credentials-for-a-valid-access-token"},"2) Exchange user credentials for a valid access token"),(0,r.kt)("p",null,"Once the user has inserted the email and password combination you will send a POST request to /oauth/token to validate the user and retrieve an ",(0,r.kt)("a",{parentName:"p",href:"access-token"},"access token"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"User accounts can be disabled, be sure to catch this error and display an informative message to the user.")),(0,r.kt)("h4",{id:"3-save-the-refresh-token"},"3) Save the refresh token"),(0,r.kt)("p",null,"As we issue short-term access rokens, you will need to refresh it via the refresh token that you've received with the authentication request."),(0,r.kt)("h4",{id:"4-send-the-access-token-with-every-request"},"4) Send the access token with every request"),(0,r.kt)("p",null,"In our API every request must be authenticated via header authentication: just send the access token with every request to enable authentication and authorization."))}p.isMDXComponent=!0}}]);