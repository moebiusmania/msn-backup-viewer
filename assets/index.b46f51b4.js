var v=Object.defineProperty,F=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var b=(t,e,r)=>e in t?v(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,y=(t,e)=>{for(var r in e||(e={}))D.call(e,r)&&b(t,r,e[r]);if(p)for(var r of p(e))N.call(e,r)&&b(t,r,e[r]);return t},T=(t,e)=>F(t,L(e));import{j as k,a as w,l as m,b as h,S as C}from"./vendor.d234a703.js";const S=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=r(s);fetch(s.href,n)}};S();function g(t){var e={};if(t.nodeType==1){if(t.attributes.length>0){e["@attributes"]={};for(var r=0;r<t.attributes.length;r++){var i=t.attributes.item(r);e["@attributes"][i.nodeName]=i.nodeValue}}}else t.nodeType==3&&(e=t.nodeValue);var s=[].slice.call(t.childNodes).filter(function(d){return d.nodeType===3});if(t.hasChildNodes()&&t.childNodes.length===s.length)e=[].slice.call(t.childNodes).reduce(function(d,M){return d+M.nodeValue},"");else if(t.hasChildNodes())for(var n=0;n<t.childNodes.length;n++){var o=t.childNodes.item(n),l=o.nodeName;if(typeof e[l]=="undefined")e[l]=g(o);else{if(typeof e[l].push=="undefined"){var u=e[l];e[l]=[],e[l].push(u)}e[l].push(g(o))}}return e}const x=`<?xml version="1.0"?><?xml-stylesheet type='text/xsl' href='MessageLog.xsl'?>`,U=`${x}<Log></Log>`,I=`${x}
<Log>
  <Message Date="14/09/2007" Time="18.32.07" DateTime="2007-09-14T16:32:07.883Z" >
    <From>
      <User FriendlyName="John Doe"/>
    </From>
    <Text>ahhh good old MSN messenger!</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.34.07" DateTime="2007-09-14T16:34:07.883Z" >
    <From>
      <User FriendlyName="Mr Smith"/>
    </From>
    <Text>it never gets old</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.35.07" DateTime="2007-09-14T16:35:07.883Z" >
    <From>
      <User FriendlyName="John Doe"/>
    </From>
    <Text>so true!</Text>
  </Message>
  <Message Date="14/09/2007" Time="18.36.07" DateTime="2007-09-14T16:36:07.883Z" >
    <From>
      <User FriendlyName="Mr Smith"/>
    </From>
    <Text>see you later mate...</Text>
  </Message>
</Log>
`,a=k,c=w,O=t=>{const[e,r]=m(""),i=({currentTarget:o})=>r(o.value),s=o=>{o.preventDefault(),t.getXML(e)},n=o=>{o.preventDefault(),t.getXML(I)};return c("form",{children:[a("textarea",{placeholder:"Paste XML content here!",class:"textarea h-40 w-full textarea-bordered",value:e,onChange:i}),c("div",{children:[a("button",{class:"btn btn-block btn-secondary text-white mt-3",onClick:n,children:"Sample data"}),a("button",{class:"btn btn-block btn-primary text-white mt-3",onClick:s,children:"Convert"})]})]})},j=t=>a("div",{class:"card lg:w-1/2 md:shadow-lg bg-base-100 mx-auto mb-6",children:a("div",{class:"card-body",children:t.children})}),f={"@attributes":{Date:"",Time:""},Text:"",From:{User:{"@attributes":{FriendlyName:""}}}},P=t=>{const e=t.item||f,r=s=>s?"badge-primary text-base-100 block":"inline-block bg-gray-500 border-gray-500";return c("li",{class:(s=>s?"my-2":"text-right my-2")(e.left),children:[a("span",{class:"text-sm font-bold block",children:e.From.User["@attributes"].FriendlyName}),a("span",{class:"badge my-1 whitespace-normal break-words rounded h-auto "+r(e.left),children:e.Text}),c("span",{class:"text-xs italic block",children:[e["@attributes"].Date," ",e["@attributes"].Time]})]})},X=t=>{const e=t.data||[f,f],r="From.User.@attributes.FriendlyName";let i=!0;const s=e.filter(n=>h(n,r)).map((n,o,l)=>{const u=o!==0?o-1:0;return h(n,r)!==h(l[u],r)&&(i=!i),T(y({},n),{left:i})});return a("ul",{class:"list-unstyled",children:s.map((n,o)=>a(P,{item:n},o))})},Z=()=>{const[t,e]=m(!0),[r,i]=m({Log:{Message:[]}}),s=(n=U)=>{const o=new DOMParser().parseFromString(n,"text/xml"),l=g(o);l.Log&&(i(l),e(!1))};return a("main",{class:"container md:py-4 lg:py-12",children:c(j,{children:[a("header",{class:"prose",children:a("h1",{class:"text-3xl",children:"MSN Messenger viewer"})}),t?a(O,{getXML:s}):a(X,{data:r.Log.Message})]})})};C(a(Z,{}),document.getElementById("app"));
