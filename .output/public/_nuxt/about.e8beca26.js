import{u as _}from"./composables.806a037d.js";import{a as c,r as b,w as v,o as B,b as x,e as a,f as g,h as s,t as d,u as l,F as k,i as w}from"./entry.5dde0aed.js";import{u as A}from"./fetch.451e7be7.js";import"./app.config.5a0b05e7.js";import"./asyncData.4d7a6dbd.js";const E=r=>Object.fromEntries(Object.entries(r).filter(([,t])=>t!==void 0)),u=(r,t)=>(n,e)=>(_(()=>r({...E(n),...e.attrs},e)),()=>{var i,o;return t?(o=(i=e.slots).default)==null?void 0:o.call(i):null}),m={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},N=c({name:"Title",inheritAttrs:!1,setup:u((r,{slots:t})=>{var e,i,o;return{title:((o=(i=(e=t.default)==null?void 0:e.call(t))==null?void 0:i[0])==null?void 0:o.children)||null}})}),q=c({name:"Meta",inheritAttrs:!1,props:{...m,charset:String,content:String,httpEquiv:String,name:String,body:Boolean,renderPriority:[String,Number]},setup:u(r=>{const t={...r};return t.httpEquiv&&(t["http-equiv"]=t.httpEquiv,delete t.httpEquiv),{meta:[t]}})}),H=c({name:"Style",inheritAttrs:!1,props:{...m,type:String,media:String,nonce:String,title:String,scoped:{type:Boolean,default:void 0},body:Boolean,renderPriority:[String,Number]},setup:u((r,{slots:t})=>{var i,o,p;const n={...r},e=(p=(o=(i=t.default)==null?void 0:i.call(t))==null?void 0:o[0])==null?void 0:p.children;return e&&(n.children=e),{style:[n]}})}),T=c({name:"Head",inheritAttrs:!1,setup:(r,t)=>()=>{var n,e;return(e=(n=t.slots).default)==null?void 0:e.call(n)}}),C=s("p",null,"This page will be displayed at the /about route.",-1),V={__name:"about",async setup(r){let t,n;const e=b("Hello World"),{data:i}=([t,n]=v(()=>A("/api/mountains/everest",{pick:["title","description"]},"$c6wy8KmN8o")),t=await t,n(),t);return(o,p)=>{const S=N,f=q,y=H,h=T;return B(),x(k,null,[a(h,null,{default:g(()=>[a(S,null,{default:g(()=>[w(d(l(e)),1)]),_:1}),a(f,{name:"description",content:l(e)},null,8,["content"]),a(y,{type:"text/css",children:"body { background-color: green; }"})]),_:1}),s("section",null,[C,s("h1",null,d(l(i).title),1),s("p",null,d(l(i).description),1)])],64)}}};export{V as default};