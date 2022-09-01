(()=>{"use strict";var e,t={823:(e,t,r)=>{const o=Vue;var n={class:"px-3 py-3"},c=(0,o.createElementVNode)("h1",{class:"text-center text-3xl text-gray-500 font-light"}," Latest Dev News ",-1),s={key:0},l={class:"text-center text-gray-500"},a={key:1,class:"divide-y list-disc list-inside space-y-2"},i={class:"ml-2 border-l-2"},m={class:"font-semibold inline"},d={class:"block text-xs"};const p={props:["card"],mounted:function(){}};const u=(0,r(744).Z)(p,[["render",function(e,t,r,p,u,v){var f=(0,o.resolveComponent)("Card",!0);return(0,o.openBlock)(),(0,o.createBlock)(f,{class:"flex flex-col items-center justify-center"},{default:(0,o.withCtx)((function(){return[(0,o.createElementVNode)("div",n,[c,r.card.commits.error?((0,o.openBlock)(),(0,o.createElementBlock)("div",s,[(0,o.createElementVNode)("p",l,(0,o.toDisplayString)(r.card.commits.error),1)])):(0,o.createCommentVNode)("",!0),r.card.commits.error?(0,o.createCommentVNode)("",!0):((0,o.openBlock)(),(0,o.createElementBlock)("ul",a,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(r.card.commits.splice(0,r.card.limit),(function(e){return(0,o.openBlock)(),(0,o.createElementBlock)("li",i,[(0,o.createElementVNode)("h3",m,(0,o.toDisplayString)(e.message),1),(0,o.createElementVNode)("p",d,(0,o.toDisplayString)(e.date)+" - by "+(0,o.toDisplayString)(e.author.raw),1)])})),256))]))])]})),_:1})}]]);Nova.booting((function(e,t){e.component("nova4-bitbucket-news-commits",u)}))},962:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,o]of t)r[e]=o;return r}}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var c=r[e]={exports:{}};return t[e](c,c.exports,o),c.exports}o.m=t,e=[],o.O=(t,r,n,c)=>{if(!r){var s=1/0;for(m=0;m<e.length;m++){for(var[r,n,c]=e[m],l=!0,a=0;a<r.length;a++)(!1&c||s>=c)&&Object.keys(o.O).every((e=>o.O[e](r[a])))?r.splice(a--,1):(l=!1,c<s&&(s=c));if(l){e.splice(m--,1);var i=n();void 0!==i&&(t=i)}}return t}c=c||0;for(var m=e.length;m>0&&e[m-1][2]>c;m--)e[m]=e[m-1];e[m]=[r,n,c]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={440:0,458:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,c,[s,l,a]=r,i=0;if(s.some((t=>0!==e[t]))){for(n in l)o.o(l,n)&&(o.m[n]=l[n]);if(a)var m=a(o)}for(t&&t(r);i<s.length;i++)c=s[i],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(m)},r=self.webpackChunkmurdercode_nova4_bitbucket_news_commits=self.webpackChunkmurdercode_nova4_bitbucket_news_commits||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[458],(()=>o(823)));var n=o.O(void 0,[458],(()=>o(962)));n=o.O(n)})();