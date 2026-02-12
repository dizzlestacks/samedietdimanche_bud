(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[77828],{

/***/ 979967:
function(_, __, __webpack_require__) {__webpack_require__.n_x = __webpack_require__.n;const __web_req__ = __webpack_require__;__web_req__(905716);globalThis._5f74ec40302898c5a55451c9fbd04240 = globalThis._5f74ec40302898c5a55451c9fbd04240 || {};(function(__c) {var Awc=async function(a,b,c){const d=zwc()();try{const e=__c.z(a.qm.context),f=d.r(await d.s(a.fetch(b.url,{signal:c})));if(!f.ok)throw Error(`Audio file fetch failed with ${f.status}`);const g=d.r(await d.s(f.arrayBuffer()));return new Promise((h,k)=>{e.decodeAudioData(g,h,k)})}finally{d.s()}},Cwc=function(a,b,c,d){if(d){var e=a.cache.get(b);e||(e={buffer:c,iPa:new Set},c.catch(Bwc.wrap(()=>{a.cache.delete(b)})),a.cache.set(b,e));e.iPa.add(d);d.addEventListener("abort",()=>{e?.iPa.delete(d);e&&
e.iPa.size===0&&a.cache.delete(b);e=void 0},{once:!0})}},Bwc=__webpack_require__(245307).Fm;var zwc=__webpack_require__(75402)._;var Dwc,Ewc;Dwc=(...a)=>fetch(...a);
Ewc=class{async Lc(a,b,c){const d=zwc()();try{__c.u(b.ga>=0&&b.J>=0);const l=__c.Ho(this.Xk,a);if(l){var e=this.cache.get(a)?.buffer||Awc(this,l,c);Cwc(this,a,e,c);var f=d.r(await d.s(e));if(b.ga===0&&Math.floor(b.J)>=Math.floor(f.duration*1E6))return f;var g=b.J/1E6*f.sampleRate;if(g<=0)return f;var h=new AudioBuffer({length:g,numberOfChannels:f.numberOfChannels,sampleRate:f.sampleRate}),k=Math.floor(f.sampleRate*b.ga/1E6);for(a=0;a<f.numberOfChannels;a++){const m=f.getChannelData(a).subarray(k,
k+g);h.copyToChannel(m,a)}return h}}finally{d.s()}}constructor(a,b,c=Dwc){this.qm=a;this.Xk=b;this.fetch=c;this.cache=new Map}};__c.Yxa={};__c.Yxa.Tnb=Ewc;
}).call(globalThis, globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/15114f487cd5b8e6.js.map