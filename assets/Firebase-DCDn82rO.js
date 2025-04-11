import{d as Gl,r as Kn,o as Wl,c as ve,a as pt,b as ls,w as Ql,v as Xl,u as le,i as Yl,F as Jl,e as Zl,f as Ie,t as tc}from"./index-RFc8bzEk.js";const ec=()=>{};var Io={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},nc=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],u=n[e++],c=n[e++],h=((s&7)<<18|(o&63)<<12|(u&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],u=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|u&63)}}return t.join("")},Va={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],u=s+1<n.length,c=u?n[s+1]:0,h=s+2<n.length,f=h?n[s+2]:0,g=o>>2,v=(o&3)<<4|c>>4;let R=(c&15)<<2|f>>6,P=f&63;h||(P=64,u||(R=64)),r.push(e[g],e[v],e[R],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(ba(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):nc(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||c==null||f==null||v==null)throw new rc;const R=o<<2|c>>4;if(r.push(R),f!==64){const P=c<<4&240|f>>2;if(r.push(P),v!==64){const V=f<<6&192|v;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class rc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sc=function(n){const t=ba(n);return Va.encodeByteArray(t,!0)},or=function(n){return sc(n).replace(/\./g,"")},ic=function(n){try{return Va.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=()=>oc().__FIREBASE_DEFAULTS__,uc=()=>{if(typeof process>"u"||typeof Io>"u")return;const n=Io.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},lc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&ic(n[1]);return t&&JSON.parse(t)},js=()=>{try{return ec()||ac()||uc()||lc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cc=n=>{var t,e;return(e=(t=js())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},hc=n=>{const t=cc(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Da=()=>{var n;return(n=js())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[or(JSON.stringify(e)),or(JSON.stringify(u)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pc(){var n;const t=(n=js())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gc(){return!pc()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _c(){try{return typeof indexedDB=="object"}catch{return!1}}function yc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="FirebaseError";class Oe extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Ec,Object.setPrototypeOf(this,Oe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ka.prototype.create)}}class ka{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],u=o?Tc(o,r):"Error",c=`${this.serviceName}: ${u} (${s}).`;return new Oe(s,c,r)}}function Tc(n,t){return n.replace(vc,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const vc=/\{\$([^}]+)}/g;function ar(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],u=t[s];if(wo(o)&&wo(u)){if(!ar(o,u))return!1}else if(o!==u)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function wo(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){return n&&n._delegate?n._delegate:n}class mn{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new dc;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ac(t))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ce){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ce){return this.instances.has(t)}getOptions(t=ce){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,u]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&u.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const u=this.instances.get(s);return u&&t(u,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wc(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ce){return this.component?this.component.multipleInstances?t:ce:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wc(n){return n===ce?void 0:n}function Ac(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ic(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(q||(q={}));const Cc={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Pc=q.INFO,Sc={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},bc=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Sc[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Na{constructor(t){this.name=t,this._logLevel=Pc,this._logHandler=bc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Cc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}}const Vc=(n,t)=>t.some(e=>n instanceof e);let Ao,Ro;function Dc(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kc(){return Ro||(Ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xa=new WeakMap,ys=new WeakMap,Ma=new WeakMap,cs=new WeakMap,qs=new WeakMap;function Nc(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",u)},o=()=>{e(Ht(n.result)),s()},u=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",u)});return t.then(e=>{e instanceof IDBCursor&&xa.set(e,n)}).catch(()=>{}),qs.set(t,n),t}function xc(n){if(ys.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",u),n.removeEventListener("abort",u)},o=()=>{e(),s()},u=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",u),n.addEventListener("abort",u)});ys.set(n,t)}let Es={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ys.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ma.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Ht(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Mc(n){Es=n(Es)}function Oc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(hs(this),t,...e);return Ma.set(r,t.sort?t.sort():[t]),Ht(r)}:kc().includes(n)?function(...t){return n.apply(hs(this),t),Ht(xa.get(this))}:function(...t){return Ht(n.apply(hs(this),t))}}function Lc(n){return typeof n=="function"?Oc(n):(n instanceof IDBTransaction&&xc(n),Vc(n,Dc())?new Proxy(n,Es):n)}function Ht(n){if(n instanceof IDBRequest)return Nc(n);if(cs.has(n))return cs.get(n);const t=Lc(n);return t!==n&&(cs.set(n,t),qs.set(t,n)),t}const hs=n=>qs.get(n);function Fc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const u=indexedDB.open(n,t),c=Ht(u);return r&&u.addEventListener("upgradeneeded",h=>{r(Ht(u.result),h.oldVersion,h.newVersion,Ht(u.transaction),h)}),e&&u.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),c.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const Uc=["get","getKey","getAll","getAllKeys","count"],Bc=["put","add","delete","clear"],ds=new Map;function Co(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ds.get(t))return ds.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Bc.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uc.includes(e)))return;const o=async function(u,...c){const h=this.transaction(u,s?"readwrite":"readonly");let f=h.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&h.done]))[0]};return ds.set(t,o),o}Mc(n=>({...n,get:(t,e,r)=>Co(t,e)||n.get(t,e,r),has:(t,e)=>!!Co(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(qc(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function qc(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ts="@firebase/app",Po="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt=new Na("@firebase/app"),$c="@firebase/app-compat",zc="@firebase/analytics-compat",Hc="@firebase/analytics",Kc="@firebase/app-check-compat",Gc="@firebase/app-check",Wc="@firebase/auth",Qc="@firebase/auth-compat",Xc="@firebase/database",Yc="@firebase/data-connect",Jc="@firebase/database-compat",Zc="@firebase/functions",th="@firebase/functions-compat",eh="@firebase/installations",nh="@firebase/installations-compat",rh="@firebase/messaging",sh="@firebase/messaging-compat",ih="@firebase/performance",oh="@firebase/performance-compat",ah="@firebase/remote-config",uh="@firebase/remote-config-compat",lh="@firebase/storage",ch="@firebase/storage-compat",hh="@firebase/firestore",dh="@firebase/vertexai",fh="@firebase/firestore-compat",mh="firebase",ph="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs="[DEFAULT]",gh={[Ts]:"fire-core",[$c]:"fire-core-compat",[Hc]:"fire-analytics",[zc]:"fire-analytics-compat",[Gc]:"fire-app-check",[Kc]:"fire-app-check-compat",[Wc]:"fire-auth",[Qc]:"fire-auth-compat",[Xc]:"fire-rtdb",[Yc]:"fire-data-connect",[Jc]:"fire-rtdb-compat",[Zc]:"fire-fn",[th]:"fire-fn-compat",[eh]:"fire-iid",[nh]:"fire-iid-compat",[rh]:"fire-fcm",[sh]:"fire-fcm-compat",[ih]:"fire-perf",[oh]:"fire-perf-compat",[ah]:"fire-rc",[uh]:"fire-rc-compat",[lh]:"fire-gcs",[ch]:"fire-gcs-compat",[hh]:"fire-fst",[fh]:"fire-fst-compat",[dh]:"fire-vertex","fire-js":"fire-js",[mh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,_h=new Map,Is=new Map;function So(n,t){try{n.container.addComponent(t)}catch(e){Lt.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function lr(n){const t=n.name;if(Is.has(t))return Lt.debug(`There were multiple attempts to register component ${t}.`),!1;Is.set(t,n);for(const e of ur.values())So(e,n);for(const e of _h.values())So(e,n);return!0}function yh(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Eh(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Kt=new ka("app","Firebase",Th);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=ph;function Oa(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vs,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Kt.create("bad-app-name",{appName:String(s)});if(e||(e=Da()),!e)throw Kt.create("no-options");const o=ur.get(s);if(o){if(ar(e,o.options)&&ar(r,o.config))return o;throw Kt.create("duplicate-app",{appName:s})}const u=new Rc(s);for(const h of Is.values())u.addComponent(h);const c=new vh(e,r,u);return ur.set(s,c),c}function wh(n=vs){const t=ur.get(n);if(!t&&n===vs&&Da())return Oa();if(!t)throw Kt.create("no-app",{appName:n});return t}function Pe(n,t,e){var r;let s=(r=gh[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&c.push("and"),u&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Lt.warn(c.join(" "));return}lr(new mn(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="firebase-heartbeat-database",Rh=1,pn="firebase-heartbeat-store";let fs=null;function La(){return fs||(fs=Fc(Ah,Rh,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(pn)}catch(e){console.warn(e)}}}}).catch(n=>{throw Kt.create("idb-open",{originalErrorMessage:n.message})})),fs}async function Ch(n){try{const e=(await La()).transaction(pn),r=await e.objectStore(pn).get(Fa(n));return await e.done,r}catch(t){if(t instanceof Oe)Lt.warn(t.message);else{const e=Kt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Lt.warn(e.message)}}}async function bo(n,t){try{const r=(await La()).transaction(pn,"readwrite");await r.objectStore(pn).put(t,Fa(n)),await r.done}catch(e){if(e instanceof Oe)Lt.warn(e.message);else{const r=Kt.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Lt.warn(r.message)}}}function Fa(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=1024,Sh=30;class bh{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dh(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Vo();if(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(u=>u.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Sh){const u=kh(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Lt.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Vo(),{heartbeatsToSend:r,unsentEntries:s}=Vh(this._heartbeatsCache.heartbeats),o=or(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Lt.warn(e),""}}}function Vo(){return new Date().toISOString().substring(0,10)}function Vh(n,t=Ph){const e=[];let r=n.slice();for(const s of n){const o=e.find(u=>u.agent===s.agent);if(o){if(o.dates.push(s.date),Do(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Do(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _c()?yc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Ch(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return bo(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Do(n){return or(JSON.stringify({version:2,heartbeats:n})).length}function kh(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){lr(new mn("platform-logger",t=>new jc(t),"PRIVATE")),lr(new mn("heartbeat",t=>new bh(t),"PRIVATE")),Pe(Ts,Po,n),Pe(Ts,Po,"esm2017"),Pe("fire-js","")}Nh("");var xh="firebase",Mh="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(xh,Mh,"app");var ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gt,Ua;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,m){function _(){}_.prototype=m.prototype,T.D=m.prototype,T.prototype=new _,T.prototype.constructor=T,T.C=function(y,E,w){for(var p=Array(arguments.length-2),xt=2;xt<arguments.length;xt++)p[xt-2]=arguments[xt];return m.prototype[E].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var E=0;16>E;++E)y[E]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(E=0;16>E;++E)y[E]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=T.g[0],_=T.g[1],E=T.g[2];var w=T.g[3],p=m+(w^_&(E^w))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[1]+3905402710&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[2]+606105819&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[5]+1200080426&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[6]+2821735955&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[9]+2336552879&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[10]+4294925233&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(w^_&(E^w))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=w+(E^m&(_^E))+y[13]+4254626195&4294967295,w=m+(p<<12&4294967295|p>>>20),p=E+(_^w&(m^_))+y[14]+2792965006&4294967295,E=w+(p<<17&4294967295|p>>>15),p=_+(m^E&(w^m))+y[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=m+(E^w&(_^E))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[6]+3225465664&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[11]+643717713&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[10]+38016083&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[15]+3634488961&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[14]+3275163606&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[3]+4107603335&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(E^w&(_^E))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=w+(_^E&(m^_))+y[2]+4243563512&4294967295,w=m+(p<<9&4294967295|p>>>23),p=E+(m^_&(w^m))+y[7]+1735328473&4294967295,E=w+(p<<14&4294967295|p>>>18),p=_+(w^m&(E^w))+y[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=m+(_^E^w)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[8]+2272392833&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[11]+1839030562&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[4]+1272893353&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[7]+4139469664&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[0]+3936430074&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[3]+3572445317&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(_^E^w)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=w+(m^_^E)+y[12]+3873151461&4294967295,w=m+(p<<11&4294967295|p>>>21),p=E+(w^m^_)+y[15]+530742520&4294967295,E=w+(p<<16&4294967295|p>>>16),p=_+(E^w^m)+y[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=m+(E^(_|~w))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[7]+1126891415&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[14]+2878612391&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[3]+2399980690&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[10]+4293915773&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[15]+4264355552&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[6]+2734768916&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=m+(E^(_|~w))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=w+(_^(m|~E))+y[11]+3174756917&4294967295,w=m+(p<<10&4294967295|p>>>22),p=E+(m^(w|~_))+y[2]+718787259&4294967295,E=w+(p<<15&4294967295|p>>>17),p=_+(w^(E|~m))+y[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+w&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var _=m-this.blockSize,y=this.B,E=this.h,w=0;w<m;){if(E==0)for(;w<=_;)s(this,T,w),w+=this.blockSize;if(typeof T=="string"){for(;w<m;)if(y[E++]=T.charCodeAt(w++),E==this.blockSize){s(this,y),E=0;break}}else for(;w<m;)if(y[E++]=T[w++],E==this.blockSize){s(this,y),E=0;break}}this.h=E,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var _=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=_&255,_/=256;for(this.u(T),T=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)T[_++]=this.g[m]>>>y&255;return T};function o(T,m){var _=c;return Object.prototype.hasOwnProperty.call(_,T)?_[T]:_[T]=m(T)}function u(T,m){this.h=m;for(var _=[],y=!0,E=T.length-1;0<=E;E--){var w=T[E]|0;y&&w==m||(_[E]=w,y=!1)}this.g=_}var c={};function h(T){return-128<=T&&128>T?o(T,function(m){return new u([m|0],0>m?-1:0)}):new u([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return v;if(0>T)return D(f(-T));for(var m=[],_=1,y=0;T>=_;y++)m[y]=T/_|0,_*=4294967296;return new u(m,0)}function g(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return D(g(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=v,E=0;E<T.length;E+=8){var w=Math.min(8,T.length-E),p=parseInt(T.substring(E,E+w),m);8>w?(w=f(Math.pow(m,w)),y=y.j(w).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var v=h(0),R=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(N(this))return-D(this).m();for(var T=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);T+=(0<=y?y:4294967296+y)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(V(this))return"0";if(N(this))return"-"+D(this).toString(T);for(var m=f(Math.pow(T,6)),_=this,y="";;){var E=st(_,m).g;_=K(_,E.j(m));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(T);if(_=E,V(_))return w+y;for(;6>w.length;)w="0"+w;y=w+y}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function V(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=K(this,T),N(T)?-1:V(T)?0:1};function D(T){for(var m=T.g.length,_=[],y=0;y<m;y++)_[y]=~T.g[y];return new u(_,~T.h).add(R)}n.abs=function(){return N(this)?D(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0,E=0;E<=m;E++){var w=y+(this.i(E)&65535)+(T.i(E)&65535),p=(w>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);y=p>>>16,w&=65535,p&=65535,_[E]=p<<16|w}return new u(_,_[_.length-1]&-2147483648?-1:0)};function K(T,m){return T.add(D(m))}n.j=function(T){if(V(this)||V(T))return v;if(N(this))return N(T)?D(this).j(D(T)):D(D(this).j(T));if(N(T))return D(this.j(D(T)));if(0>this.l(P)&&0>T.l(P))return f(this.m()*T.m());for(var m=this.g.length+T.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<T.g.length;E++){var w=this.i(y)>>>16,p=this.i(y)&65535,xt=T.i(E)>>>16,je=T.i(E)&65535;_[2*y+2*E]+=p*je,H(_,2*y+2*E),_[2*y+2*E+1]+=w*je,H(_,2*y+2*E+1),_[2*y+2*E+1]+=p*xt,H(_,2*y+2*E+1),_[2*y+2*E+2]+=w*xt,H(_,2*y+2*E+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function H(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function G(T,m){this.g=T,this.h=m}function st(T,m){if(V(m))throw Error("division by zero");if(V(T))return new G(v,v);if(N(T))return m=st(D(T),m),new G(D(m.g),D(m.h));if(N(m))return m=st(T,D(m)),new G(D(m.g),m.h);if(30<T.g.length){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(T);)_=Nt(_),y=Nt(y);var E=ot(_,1),w=ot(y,1);for(y=ot(y,2),_=ot(_,2);!V(y);){var p=w.add(y);0>=p.l(T)&&(E=E.add(_),w=p),y=ot(y,1),_=ot(_,1)}return m=K(T,E.j(m)),new G(E,m)}for(E=v;0<=T.l(m);){for(_=Math.max(1,Math.floor(T.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),w=f(_),p=w.j(m);N(p)||0<p.l(T);)_-=y,w=f(_),p=w.j(m);V(w)&&(w=R),E=E.add(w),T=K(T,p)}return new G(E,T)}n.A=function(T){return st(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&T.i(y);return new u(_,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|T.i(y);return new u(_,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^T.i(y);return new u(_,this.h^T.h)};function Nt(T){for(var m=T.g.length+1,_=[],y=0;y<m;y++)_[y]=T.i(y)<<1|T.i(y-1)>>>31;return new u(_,T.h)}function ot(T,m){var _=m>>5;m%=32;for(var y=T.g.length-_,E=[],w=0;w<y;w++)E[w]=0<m?T.i(w+_)>>>m|T.i(w+_+1)<<32-m:T.i(w+_);return new u(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Ua=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,Gt=u}).apply(typeof ko<"u"?ko:typeof self<"u"?self:typeof window<"u"?window:{});var Gn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ba,an,ja,tr,ws,qa,$a,za;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gn=="object"&&Gn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var I=i[d];if(!(I in l))break t;l=l[I]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,I={next:function(){if(!d&&l<i.length){var A=l++;return{value:a(A,i[A]),done:!1}}return d=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function g(i,a,l){return i.call.apply(i.bind,arguments)}function v(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,d),i.apply(a,I)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,R.apply(null,arguments)}function P(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function V(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,I,A){for(var b=Array(arguments.length-2),W=2;W<arguments.length;W++)b[W-2]=arguments[W];return a.prototype[I].apply(d,b)}}function N(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const I=i.length||0,A=d.length||0;i.length=I+A;for(let b=0;b<A;b++)i[I+b]=d[b]}else i.push(d)}}class K{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function H(i){return/^[\s\xa0]*$/.test(i)}function G(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function st(i){return st[" "](i),i}st[" "]=function(){};var Nt=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ot(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function T(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let I=1;I<arguments.length;I++){d=arguments[I];for(l in d)i[l]=d[l];for(let A=0;A<_.length;A++)l=_[A],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function E(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function w(i){c.setTimeout(()=>{throw i},0)}function p(){var i=Ur;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class xt{constructor(){this.h=this.g=null}add(a,l){const d=je.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var je=new K(()=>new dl,i=>i.reset());class dl{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,$e=!1,Ur=new xt,vi=()=>{const i=c.Promise.resolve(void 0);qe=()=>{i.then(fl)}};var fl=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){w(l)}var a=je;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}$e=!1};function Bt(){this.s=this.s,this.C=this.C}Bt.prototype.s=!1,Bt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Bt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ht(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var ml=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function ze(i,a){if(ht.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(Nt){t:{try{st(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:pl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ze.aa.h.call(this)}}V(ze,ht);var pl={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Pn="closure_listenable_"+(1e6*Math.random()|0),gl=0;function _l(i,a,l,d,I){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=I,this.key=++gl,this.da=this.fa=!1}function Sn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function bn(i){this.src=i,this.g={},this.h=0}bn.prototype.add=function(i,a,l,d,I){var A=i.toString();i=this.g[A],i||(i=this.g[A]=[],this.h++);var b=jr(i,a,d,I);return-1<b?(a=i[b],l||(a.fa=!1)):(a=new _l(a,this.src,A,!!d,I),a.fa=l,i.push(a)),a};function Br(i,a){var l=a.type;if(l in i.g){var d=i.g[l],I=Array.prototype.indexOf.call(d,a,void 0),A;(A=0<=I)&&Array.prototype.splice.call(d,I,1),A&&(Sn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function jr(i,a,l,d){for(var I=0;I<i.length;++I){var A=i[I];if(!A.da&&A.listener==a&&A.capture==!!l&&A.ha==d)return I}return-1}var qr="closure_lm_"+(1e6*Math.random()|0),$r={};function Ii(i,a,l,d,I){if(Array.isArray(a)){for(var A=0;A<a.length;A++)Ii(i,a[A],l,d,I);return null}return l=Ri(l),i&&i[Pn]?i.K(a,l,f(d)?!!d.capture:!1,I):yl(i,a,l,!1,d,I)}function yl(i,a,l,d,I,A){if(!a)throw Error("Invalid event type");var b=f(I)?!!I.capture:!!I,W=Hr(i);if(W||(i[qr]=W=new bn(i)),l=W.add(a,l,d,b,A),l.proxy)return l;if(d=El(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)ml||(I=b),I===void 0&&(I=!1),i.addEventListener(a.toString(),d,I);else if(i.attachEvent)i.attachEvent(Ai(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function El(){function i(l){return a.call(i.src,i.listener,l)}const a=Tl;return i}function wi(i,a,l,d,I){if(Array.isArray(a))for(var A=0;A<a.length;A++)wi(i,a[A],l,d,I);else d=f(d)?!!d.capture:!!d,l=Ri(l),i&&i[Pn]?(i=i.i,a=String(a).toString(),a in i.g&&(A=i.g[a],l=jr(A,l,d,I),-1<l&&(Sn(A[l]),Array.prototype.splice.call(A,l,1),A.length==0&&(delete i.g[a],i.h--)))):i&&(i=Hr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=jr(a,l,d,I)),(l=-1<i?a[i]:null)&&zr(l))}function zr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[Pn])Br(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(Ai(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=Hr(a))?(Br(l,i),l.h==0&&(l.src=null,a[qr]=null)):Sn(i)}}}function Ai(i){return i in $r?$r[i]:$r[i]="on"+i}function Tl(i,a){if(i.da)i=!0;else{a=new ze(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&zr(i),i=l.call(d,a)}return i}function Hr(i){return i=i[qr],i instanceof bn?i:null}var Kr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ri(i){return typeof i=="function"?i:(i[Kr]||(i[Kr]=function(a){return i.handleEvent(a)}),i[Kr])}function dt(){Bt.call(this),this.i=new bn(this),this.M=this,this.F=null}V(dt,Bt),dt.prototype[Pn]=!0,dt.prototype.removeEventListener=function(i,a,l,d){wi(this,i,a,l,d)};function Et(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new ht(a,i);else if(a instanceof ht)a.target=a.target||i;else{var I=a;a=new ht(d,i),y(a,I)}if(I=!0,l)for(var A=l.length-1;0<=A;A--){var b=a.g=l[A];I=Vn(b,d,!0,a)&&I}if(b=a.g=i,I=Vn(b,d,!0,a)&&I,I=Vn(b,d,!1,a)&&I,l)for(A=0;A<l.length;A++)b=a.g=l[A],I=Vn(b,d,!1,a)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)Sn(l[d]);delete i.g[a],i.h--}}this.F=null},dt.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},dt.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function Vn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,A=0;A<a.length;++A){var b=a[A];if(b&&!b.da&&b.capture==l){var W=b.listener,at=b.ha||b.src;b.fa&&Br(i.i,b),I=W.call(at,d)!==!1&&I}}return I&&!d.defaultPrevented}function Ci(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function Pi(i){i.g=Ci(()=>{i.g=null,i.i&&(i.i=!1,Pi(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class vl extends Bt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:Pi(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function He(i){Bt.call(this),this.h=i,this.g={}}V(He,Bt);var Si=[];function bi(i){ot(i.g,function(a,l){this.g.hasOwnProperty(l)&&zr(a)},i),i.g={}}He.prototype.N=function(){He.aa.N.call(this),bi(this)},He.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Gr=c.JSON.stringify,Il=c.JSON.parse,wl=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Wr(){}Wr.prototype.h=null;function Vi(i){return i.h||(i.h=i.i())}function Di(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Qr(){ht.call(this,"d")}V(Qr,ht);function Xr(){ht.call(this,"c")}V(Xr,ht);var ie={},ki=null;function Dn(){return ki=ki||new dt}ie.La="serverreachability";function Ni(i){ht.call(this,ie.La,i)}V(Ni,ht);function Ge(i){const a=Dn();Et(a,new Ni(a))}ie.STAT_EVENT="statevent";function xi(i,a){ht.call(this,ie.STAT_EVENT,i),this.stat=a}V(xi,ht);function Tt(i){const a=Dn();Et(a,new xi(a,i))}ie.Ma="timingevent";function Mi(i,a){ht.call(this,ie.Ma,i),this.size=a}V(Mi,ht);function We(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function Qe(){this.g=!0}Qe.prototype.xa=function(){this.g=!1};function Al(i,a,l,d,I,A){i.info(function(){if(i.g)if(A)for(var b="",W=A.split("&"),at=0;at<W.length;at++){var $=W[at].split("=");if(1<$.length){var ft=$[0];$=$[1];var mt=ft.split("_");b=2<=mt.length&&mt[1]=="type"?b+(ft+"="+$+"&"):b+(ft+"=redacted&")}}else b=null;else b=A;return"XMLHTTP REQ ("+d+") [attempt "+I+"]: "+a+`
`+l+`
`+b})}function Rl(i,a,l,d,I,A,b){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+I+"]: "+a+`
`+l+`
`+A+" "+b})}function _e(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+Pl(i,l)+(d?" "+d:"")})}function Cl(i,a){i.info(function(){return"TIMEOUT: "+a})}Qe.prototype.info=function(){};function Pl(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var I=d[1];if(Array.isArray(I)&&!(1>I.length)){var A=I[0];if(A!="noop"&&A!="stop"&&A!="close")for(var b=1;b<I.length;b++)I[b]=""}}}}return Gr(l)}catch{return a}}var kn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Oi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Yr;function Nn(){}V(Nn,Wr),Nn.prototype.g=function(){return new XMLHttpRequest},Nn.prototype.i=function(){return{}},Yr=new Nn;function jt(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new He(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Li}function Li(){this.i=null,this.g="",this.h=!1}var Fi={},Jr={};function Zr(i,a,l){i.L=1,i.v=Ln(Mt(a)),i.m=l,i.P=!0,Ui(i,null)}function Ui(i,a){i.F=Date.now(),xn(i),i.A=Mt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),Zi(l.i,"t",d),i.C=0,l=i.j.J,i.h=new Li,i.g=yo(i.j,l?a:null,!i.m),0<i.O&&(i.M=new vl(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var I="readystatechange";Array.isArray(I)||(I&&(Si[0]=I.toString()),I=Si);for(var A=0;A<I.length;A++){var b=Ii(l,I[A],d||a.handleEvent,!1,a.h||a);if(!b)break;a.g[b.key]=b}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ge(),Al(i.i,i.u,i.A,i.l,i.R,i.m)}jt.prototype.ca=function(i){i=i.target;const a=this.M;a&&Ot(i)==3?a.j():this.Y(i)},jt.prototype.Y=function(i){try{if(i==this.g)t:{const mt=Ot(this.g);var a=this.g.Ba();const Te=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||oo(this.g)))){this.J||mt!=4||a==7||(a==8||0>=Te?Ge(3):Ge(2)),ts(this);var l=this.g.Z();this.X=l;e:if(Bi(this)){var d=oo(this.g);i="";var I=d.length,A=Ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Xe(this);var b="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(A&&a==I-1)});d.length=0,this.h.g+=i,this.C=0,b=this.h.g}else b=this.g.oa();if(this.o=l==200,Rl(this.i,this.u,this.A,this.l,this.R,mt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,at=this.g;if((W=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!H(W)){var $=W;break e}}$=null}if(l=$)_e(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,es(this,l);else{this.o=!1,this.s=3,Tt(12),oe(this),Xe(this);break t}}if(this.P){l=!0;let Ct;for(;!this.J&&this.C<b.length;)if(Ct=Sl(this,b),Ct==Jr){mt==4&&(this.s=4,Tt(14),l=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Ct==Fi){this.s=4,Tt(15),_e(this.i,this.l,b,"[Invalid Chunk]"),l=!1;break}else _e(this.i,this.l,Ct,null),es(this,Ct);if(Bi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||b.length!=0||this.h.h||(this.s=1,Tt(16),l=!1),this.o=this.o&&l,!l)_e(this.i,this.l,b,"[Invalid Chunked Response]"),oe(this),Xe(this);else if(0<b.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+b.length),as(ft),ft.M=!0,Tt(11))}}else _e(this.i,this.l,b,null),es(this,b);mt==4&&oe(this),this.o&&!this.J&&(mt==4?mo(this.j,this):(this.o=!1,xn(this)))}else Hl(this.g),l==400&&0<b.indexOf("Unknown SID")?(this.s=3,Tt(12)):(this.s=0,Tt(13)),oe(this),Xe(this)}}}catch{}finally{}};function Bi(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Sl(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Jr:(l=Number(a.substring(l,d)),isNaN(l)?Fi:(d+=1,d+l>a.length?Jr:(a=a.slice(d,d+l),i.C=d+l,a)))}jt.prototype.cancel=function(){this.J=!0,oe(this)};function xn(i){i.S=Date.now()+i.I,ji(i,i.I)}function ji(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=We(R(i.ba,i),a)}function ts(i){i.B&&(c.clearTimeout(i.B),i.B=null)}jt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Cl(this.i,this.A),this.L!=2&&(Ge(),Tt(17)),oe(this),this.s=2,Xe(this)):ji(this,this.S-i)};function Xe(i){i.j.G==0||i.J||mo(i.j,i)}function oe(i){ts(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,bi(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function es(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||ns(l.h,i))){if(!i.K&&ns(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var I=d;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)$n(l),jn(l);else break t;os(l),Tt(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=We(R(l.Za,l),6e3));if(1>=zi(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ue(l,11)}else if((i.K||l.g==i)&&$n(l),!H(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let $=I[a];if(l.T=$[0],$=$[1],l.G==2)if($[0]=="c"){l.K=$[1],l.ia=$[2];const ft=$[3];ft!=null&&(l.la=ft,l.j.info("VER="+l.la));const mt=$[4];mt!=null&&(l.Aa=mt,l.j.info("SVER="+l.Aa));const Te=$[5];Te!=null&&typeof Te=="number"&&0<Te&&(d=1.5*Te,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Ct=i.g;if(Ct){const Hn=Ct.g?Ct.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hn){var A=d.h;A.g||Hn.indexOf("spdy")==-1&&Hn.indexOf("quic")==-1&&Hn.indexOf("h2")==-1||(A.j=A.l,A.g=new Set,A.h&&(rs(A,A.h),A.h=null))}if(d.D){const us=Ct.g?Ct.g.getResponseHeader("X-HTTP-Session-Id"):null;us&&(d.ya=us,Q(d.I,d.D,us))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var b=i;if(d.qa=_o(d,d.J?d.ia:null,d.W),b.K){Hi(d.h,b);var W=b,at=d.L;at&&(W.I=at),W.B&&(ts(W),xn(W)),d.g=b}else ho(d);0<l.i.length&&qn(l)}else $[0]!="stop"&&$[0]!="close"||ue(l,7);else l.G==3&&($[0]=="stop"||$[0]=="close"?$[0]=="stop"?ue(l,7):is(l):$[0]!="noop"&&l.l&&l.l.ta($),l.v=0)}}Ge(4)}catch{}}var bl=class{constructor(i,a){this.g=i,this.map=a}};function qi(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $i(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function zi(i){return i.h?1:i.g?i.g.size:0}function ns(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function rs(i,a){i.g?i.g.add(a):i.h=a}function Hi(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}qi.prototype.cancel=function(){if(this.i=Ki(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ki(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return N(i.i)}function Vl(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function Dl(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function Gi(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=Dl(i),d=Vl(i),I=d.length,A=0;A<I;A++)a.call(void 0,d[A],l&&l[A],i)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kl(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),I=null;if(0<=d){var A=i[l].substring(0,d);I=i[l].substring(d+1)}else A=i[l];a(A,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ae(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof ae){this.h=i.h,Mn(this,i.j),this.o=i.o,this.g=i.g,On(this,i.s),this.l=i.l;var a=i.i,l=new Ze;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Qi(this,l),this.m=i.m}else i&&(a=String(i).match(Wi))?(this.h=!1,Mn(this,a[1]||"",!0),this.o=Ye(a[2]||""),this.g=Ye(a[3]||"",!0),On(this,a[4]),this.l=Ye(a[5]||"",!0),Qi(this,a[6]||"",!0),this.m=Ye(a[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}ae.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Je(a,Xi,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Je(a,Xi,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Je(l,l.charAt(0)=="/"?Ml:xl,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Je(l,Ll)),i.join("")};function Mt(i){return new ae(i)}function Mn(i,a,l){i.j=l?Ye(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function On(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Qi(i,a,l){a instanceof Ze?(i.i=a,Fl(i.i,i.h)):(l||(a=Je(a,Ol)),i.i=new Ze(a,i.h))}function Q(i,a,l){i.i.set(a,l)}function Ln(i){return Q(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Ye(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Je(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Nl),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Nl(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Xi=/[#\/\?@]/g,xl=/[#\?:]/g,Ml=/[#\?]/g,Ol=/[#\?@]/g,Ll=/#/g;function Ze(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function qt(i){i.g||(i.g=new Map,i.h=0,i.i&&kl(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Ze.prototype,n.add=function(i,a){qt(this),this.i=null,i=ye(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Yi(i,a){qt(i),a=ye(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function Ji(i,a){return qt(i),a=ye(i,a),i.g.has(a)}n.forEach=function(i,a){qt(this),this.g.forEach(function(l,d){l.forEach(function(I){i.call(a,I,d,this)},this)},this)},n.na=function(){qt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const I=i[d];for(let A=0;A<I.length;A++)l.push(a[d])}return l},n.V=function(i){qt(this);let a=[];if(typeof i=="string")Ji(this,i)&&(a=a.concat(this.g.get(ye(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return qt(this),this.i=null,i=ye(this,i),Ji(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function Zi(i,a,l){Yi(i,a),0<l.length&&(i.i=null,i.g.set(ye(i,a),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const A=encodeURIComponent(String(d)),b=this.V(d);for(d=0;d<b.length;d++){var I=A;b[d]!==""&&(I+="="+encodeURIComponent(String(b[d]))),i.push(I)}}return this.i=i.join("&")};function ye(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Fl(i,a){a&&!i.j&&(qt(i),i.i=null,i.g.forEach(function(l,d){var I=d.toLowerCase();d!=I&&(Yi(this,d),Zi(this,I,l))},i)),i.j=a}function Ul(i,a){const l=new Qe;if(c.Image){const d=new Image;d.onload=P($t,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P($t,l,"TestLoadImage: error",!1,a,d),d.onabort=P($t,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P($t,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Bl(i,a){const l=new Qe,d=new AbortController,I=setTimeout(()=>{d.abort(),$t(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(A=>{clearTimeout(I),A.ok?$t(l,"TestPingServer: ok",!0,a):$t(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),$t(l,"TestPingServer: error",!1,a)})}function $t(i,a,l,d,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),d(l)}catch{}}function jl(){this.g=new wl}function ql(i,a,l){const d=l||"";try{Gi(i,function(I,A){let b=I;f(I)&&(b=Gr(I)),a.push(d+A+"="+encodeURIComponent(b))})}catch(I){throw a.push(d+"type="+encodeURIComponent("_badmap")),I}}function Fn(i){this.l=i.Ub||null,this.j=i.eb||!1}V(Fn,Wr),Fn.prototype.g=function(){return new Un(this.l,this.j)},Fn.prototype.i=function(i){return function(){return i}}({});function Un(i,a){dt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Un,dt),n=Un.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,en(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;to(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function to(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?tn(this):en(this),this.readyState==3&&to(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,tn(this))},n.Qa=function(i){this.g&&(this.response=i,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,en(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function en(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Un.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function eo(i){let a="";return ot(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function ss(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=eo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):Q(i,a,l))}function J(i){dt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(J,dt);var $l=/^https?$/i,zl=["POST","PUT"];n=J.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Yr.g(),this.v=this.o?Vi(this.o):Vi(Yr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(A){no(this,A);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var I in d)l.set(I,d[I]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const A of d.keys())l.set(A,d.get(A));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(A=>A.toLowerCase()=="content-type"),I=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(zl,a,void 0))||d||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[A,b]of l)this.g.setRequestHeader(A,b);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{io(this),this.u=!0,this.g.send(i),this.u=!1}catch(A){no(this,A)}};function no(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,ro(i),Bn(i)}function ro(i){i.A||(i.A=!0,Et(i,"complete"),Et(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Et(this,"complete"),Et(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),J.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},n.bb=function(){so(this)};function so(i){if(i.h&&typeof u<"u"&&(!i.v[1]||Ot(i)!=4||i.Z()!=2)){if(i.u&&Ot(i)==4)Ci(i.Ea,0,i);else if(Et(i,"readystatechange"),Ot(i)==4){i.h=!1;try{const b=i.Z();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=b===0){var I=String(i.D).match(Wi)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),d=!$l.test(I?I.toLowerCase():"")}l=d}if(l)Et(i,"complete"),Et(i,"success");else{i.m=6;try{var A=2<Ot(i)?i.g.statusText:""}catch{A=""}i.l=A+" ["+i.Z()+"]",ro(i)}}finally{Bn(i)}}}}function Bn(i,a){if(i.g){io(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||Et(i,"ready");try{l.onreadystatechange=d}catch{}}}function io(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ot(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ot(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Il(a)}};function oo(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Hl(i){const a={};i=(i.g&&2<=Ot(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if(H(i[d]))continue;var l=E(i[d]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const A=a[I]||[];a[I]=A,A.push(l)}T(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function ao(i){this.Aa=0,this.i=[],this.j=new Qe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,i),this.cb=nn("retryDelaySeedMs",1e4,i),this.Wa=nn("forwardChannelMaxRetries",2,i),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new qi(i&&i.concurrentRequestLimit),this.Da=new jl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ao.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){Tt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=_o(this,null,this.W),qn(this)};function is(i){if(uo(i),i.G==3){var a=i.U++,l=Mt(i.I);if(Q(l,"SID",i.K),Q(l,"RID",a),Q(l,"TYPE","terminate"),rn(i,l),a=new jt(i,i.j,a),a.L=2,a.v=Ln(Mt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=yo(a.j,null),a.g.ea(a.v)),a.F=Date.now(),xn(a)}go(i)}function jn(i){i.g&&(as(i),i.g.cancel(),i.g=null)}function uo(i){jn(i),i.u&&(c.clearTimeout(i.u),i.u=null),$n(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function qn(i){if(!$i(i.h)&&!i.s){i.s=!0;var a=i.Ga;qe||vi(),$e||(qe(),$e=!0),Ur.add(a,i),i.B=0}}function Kl(i,a){return zi(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=We(R(i.Ga,i,a),po(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const I=new jt(this,this.j,i);let A=this.o;if(this.S&&(A?(A=m(A),y(A,this.S)):A=this.S),this.m!==null||this.O||(I.H=A,A=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=co(this,I,a),l=Mt(this.I),Q(l,"RID",i),Q(l,"CVER",22),this.D&&Q(l,"X-HTTP-Session-Id",this.D),rn(this,l),A&&(this.O?a="headers="+encodeURIComponent(String(eo(A)))+"&"+a:this.m&&ss(l,this.m,A)),rs(this.h,I),this.Ua&&Q(l,"TYPE","init"),this.P?(Q(l,"$req",a),Q(l,"SID","null"),I.T=!0,Zr(I,l,null)):Zr(I,l,a),this.G=2}}else this.G==3&&(i?lo(this,i):this.i.length==0||$i(this.h)||lo(this))};function lo(i,a){var l;a?l=a.l:l=i.U++;const d=Mt(i.I);Q(d,"SID",i.K),Q(d,"RID",l),Q(d,"AID",i.T),rn(i,d),i.m&&i.o&&ss(d,i.m,i.o),l=new jt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=co(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),rs(i.h,l),Zr(l,d,a)}function rn(i,a){i.H&&ot(i.H,function(l,d){Q(a,d,l)}),i.l&&Gi({},function(l,d){Q(a,d,l)})}function co(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var I=i.i;let A=-1;for(;;){const b=["count="+l];A==-1?0<l?(A=I[0].g,b.push("ofs="+A)):A=0:b.push("ofs="+A);let W=!0;for(let at=0;at<l;at++){let $=I[at].g;const ft=I[at].map;if($-=A,0>$)A=Math.max(0,I[at].g-100),W=!1;else try{ql(ft,b,"req"+$+"_")}catch{d&&d(ft)}}if(W){d=b.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function ho(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;qe||vi(),$e||(qe(),$e=!0),Ur.add(a,i),i.v=0}}function os(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=We(R(i.Fa,i),po(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,fo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=We(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Tt(10),jn(this),fo(this))};function as(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function fo(i){i.g=new jt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Mt(i.qa);Q(a,"RID","rpc"),Q(a,"SID",i.K),Q(a,"AID",i.T),Q(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&Q(a,"TO",i.ja),Q(a,"TYPE","xmlhttp"),rn(i,a),i.m&&i.o&&ss(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Ln(Mt(a)),l.m=null,l.P=!0,Ui(l,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),os(this),Tt(19))};function $n(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function mo(i,a){var l=null;if(i.g==a){$n(i),as(i),i.g=null;var d=2}else if(ns(i.h,a))l=a.D,Hi(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=i.B;d=Dn(),Et(d,new Mi(d,l)),qn(i)}else ho(i);else if(I=a.s,I==3||I==0&&0<a.X||!(d==1&&Kl(i,a)||d==2&&os(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),I){case 1:ue(i,5);break;case 4:ue(i,10);break;case 3:ue(i,6);break;default:ue(i,2)}}}function po(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ue(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const I=!d;d=new ae(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Mn(d,"https"),Ln(d),I?Ul(d.toString(),l):Bl(d.toString(),l)}else Tt(2);i.G=0,i.l&&i.l.sa(a),go(i),uo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function go(i){if(i.G=0,i.ka=[],i.l){const a=Ki(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function _o(i,a,l){var d=l instanceof ae?Mt(l):new ae(l);if(d.g!="")a&&(d.g=a+"."+d.g),On(d,d.s);else{var I=c.location;d=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var A=new ae(null);d&&Mn(A,d),a&&(A.g=a),I&&On(A,I),l&&(A.l=l),d=A}return l=i.D,a=i.ya,l&&a&&Q(d,l,a),Q(d,"VER",i.la),rn(i,d),d}function yo(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new J(new Fn({eb:l})):new J(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eo(){}n=Eo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zn(){}zn.prototype.g=function(i,a){return new wt(i,a)};function wt(i,a){dt.call(this),this.g=new ao(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!H(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!H(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new Ee(this)}V(wt,dt),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){is(this.g)},wt.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Gr(i),i=l);a.i.push(new bl(a.Ya++,i)),a.G==3&&qn(a)},wt.prototype.N=function(){this.g.l=null,delete this.j,is(this.g),delete this.g,wt.aa.N.call(this)};function To(i){Qr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}V(To,Qr);function vo(){Xr.call(this),this.status=1}V(vo,Xr);function Ee(i){this.g=i}V(Ee,Eo),Ee.prototype.ua=function(){Et(this.g,"a")},Ee.prototype.ta=function(i){Et(this.g,new To(i))},Ee.prototype.sa=function(i){Et(this.g,new vo)},Ee.prototype.ra=function(){Et(this.g,"b")},zn.prototype.createWebChannel=zn.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,za=function(){return new zn},$a=function(){return Dn()},qa=ie,ws={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kn.NO_ERROR=0,kn.TIMEOUT=8,kn.HTTP_ERROR=6,tr=kn,Oi.COMPLETE="complete",ja=Oi,Di.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",dt.prototype.listen=dt.prototype.K,an=Di,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,Ba=J}).apply(typeof Gn<"u"?Gn:typeof self<"u"?self:typeof window<"u"?window:{});const No="@firebase/firestore",xo="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Le="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const de=new Na("@firebase/firestore");function we(){return de.logLevel}function k(n,...t){if(de.logLevel<=q.DEBUG){const e=t.map($s);de.debug(`Firestore (${Le}): ${n}`,...e)}}function Ft(n,...t){if(de.logLevel<=q.ERROR){const e=t.map($s);de.error(`Firestore (${Le}): ${n}`,...e)}}function be(n,...t){if(de.logLevel<=q.WARN){const e=t.map($s);de.warn(`Firestore (${Le}): ${n}`,...e)}}function $s(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(n="Unexpected state"){const t=`FIRESTORE (${Le}) INTERNAL ASSERTION FAILED: `+n;throw Ft(t),new Error(t)}function z(n,t){n||O()}function F(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Oe{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Oh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_t.UNAUTHENTICATED))}shutdown(){}}class Lh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Fh{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){z(this.o===void 0);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new Ha(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return z(t===null||typeof t=="string"),new _t(t)}}class Uh{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.T.set("Authorization",t),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Bh{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Uh(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jh{constructor(t,e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Eh(t)&&t.settings.appCheckToken&&(this.V=t.settings.appCheckToken)}start(t,e){z(this.o===void 0);const r=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new Mo(this.V));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(z(typeof e.token=="string"),this.R=e.token,new Mo(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qh(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qh(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function U(n,t){return n<t?-1:n>t?1:0}function As(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=n.codePointAt(e),s=t.codePointAt(e);if(r!==s){if(r<128&&s<128)return U(r,s);{const o=Ka(),u=$h(o.encode(Oo(n,e)),o.encode(Oo(t,e)));return u!==0?u:U(r,s)}}e+=r>65535?2:1}return U(n.length,t.length)}function Oo(n,t){return n.codePointAt(t)>65535?n.substring(t,t+2):n.substring(t,t+1)}function $h(n,t){for(let e=0;e<n.length&&e<t.length;++e)if(n[e]!==t[e])return U(n[e],t[e]);return U(n.length,t.length)}function Ve(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=-62135596800,Fo=1e6;class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(t){return nt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Fo);return new nt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Lo)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Fo}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds-Lo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static fromTimestamp(t){return new L(t)}static min(){return new L(new nt(0,0))}static max(){return new L(new nt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="__name__";class St{constructor(t,e,r){e===void 0?e=0:e>t.length&&O(),r===void 0?r=t.length-e:r>t.length-e&&O(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return St.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof St?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=St.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const r=St.isNumericId(t),s=St.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?St.extractNumericId(t).compare(St.extractNumericId(e)):As(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Gt.fromString(t.substring(4,t.length-2))}}class X extends St{construct(t,e,r){return new X(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new X(e)}static emptyPath(){return new X([])}}const zh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends St{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return zh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Uo}static keyField(){return new lt([Uo])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(X.fromString(t))}static fromName(t){return new M(X.fromString(t).popFirst(5))}static empty(){return new M(X.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&X.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return X.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new X(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=-1;function Hh(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new nt(e+1,0):new nt(e,r));return new Yt(s,M.empty(),t)}function Kh(n){return new Yt(n.readTime,n.key,gn)}class Yt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Yt(L.min(),M.empty(),gn)}static max(){return new Yt(L.max(),M.empty(),gn)}}function Gh(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=M.comparator(n.documentKey,t.documentKey),e!==0?e:U(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fe(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Wh)throw n;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>r(h))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++c,c===o&&r(u)},g=>s(g))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Xh(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Ue(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.oe(r),this._e=r=>e.writeSequenceNumber(r))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}Ir.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=-1;function wr(n){return n==null}function cr(n){return n===0&&1/n==-1/0}function Yh(n){return typeof n=="number"&&Number.isInteger(n)&&!cr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="";function Jh(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Bo(t)),t=Zh(n.get(e),t);return Bo(t)}function Zh(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case Wa:e+="";break;default:e+=o}}return e}function Bo(n){return n+Wa+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function re(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Qa(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new qo(this.data.getIterator())}getIteratorFrom(t){return new qo(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof rt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new rt(this.comparator);return e.data=t,e}}class qo{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new At([])}unionWith(t){let e=new rt(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new At(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Xa("Invalid base64 string: "+o):o}}(t);return new ct(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new ct(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const td=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jt(n){if(z(!!n),typeof n=="string"){let t=0;const e=td.exec(n);if(z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Z(n.seconds),nanos:Z(n.nanos)}}function Z(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Zt(n){return typeof n=="string"?ct.fromBase64String(n):ct.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya="server_timestamp",Ja="__type__",Za="__previous_value__",tu="__local_write_time__";function Hs(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[Ja])===null||e===void 0?void 0:e.stringValue)===Ya}function Ar(n){const t=n.mapValue.fields[Za];return Hs(t)?Ar(t):t}function _n(n){const t=Jt(n.mapValue.fields[tu].timestampValue);return new nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(t,e,r,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}const hr="(default)";class yn{constructor(t,e){this.projectId=t,this.database=e||hr}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database===hr}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="__type__",nd="__max__",Qn={mapValue:{}},nu="__vector__",dr="value";function te(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hs(n)?4:sd(n)?9007199254740991:rd(n)?10:11:O()}function Dt(n,t){if(n===t)return!0;const e=te(n);if(e!==te(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=Jt(s.timestampValue),c=Jt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Zt(s.bytesValue).isEqual(Zt(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Z(s.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(s.geoPointValue.longitude)===Z(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Z(s.integerValue)===Z(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=Z(s.doubleValue),c=Z(o.doubleValue);return u===c?cr(u)===cr(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return Ve(n.arrayValue.values||[],t.arrayValue.values||[],Dt);case 10:case 11:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(jo(u)!==jo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Dt(u[h],c[h])))return!1;return!0}(n,t);default:return O()}}function En(n,t){return(n.values||[]).find(e=>Dt(e,t))!==void 0}function De(n,t){if(n===t)return 0;const e=te(n),r=te(t);if(e!==r)return U(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=Z(o.integerValue||o.doubleValue),h=Z(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return $o(n.timestampValue,t.timestampValue);case 4:return $o(_n(n),_n(t));case 5:return As(n.stringValue,t.stringValue);case 6:return function(o,u){const c=Zt(o),h=Zt(u);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const g=U(c[f],h[f]);if(g!==0)return g}return U(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=U(Z(o.latitude),Z(u.latitude));return c!==0?c:U(Z(o.longitude),Z(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return zo(n.arrayValue,t.arrayValue);case 10:return function(o,u){var c,h,f,g;const v=o.fields||{},R=u.fields||{},P=(c=v[dr])===null||c===void 0?void 0:c.arrayValue,V=(h=R[dr])===null||h===void 0?void 0:h.arrayValue,N=U(((f=P==null?void 0:P.values)===null||f===void 0?void 0:f.length)||0,((g=V==null?void 0:V.values)===null||g===void 0?void 0:g.length)||0);return N!==0?N:zo(P,V)}(n.mapValue,t.mapValue);case 11:return function(o,u){if(o===Qn.mapValue&&u===Qn.mapValue)return 0;if(o===Qn.mapValue)return 1;if(u===Qn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let v=0;v<h.length&&v<g.length;++v){const R=As(h[v],g[v]);if(R!==0)return R;const P=De(c[h[v]],f[g[v]]);if(P!==0)return P}return U(h.length,g.length)}(n.mapValue,t.mapValue);default:throw O()}}function $o(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return U(n,t);const e=Jt(n),r=Jt(t),s=U(e.seconds,r.seconds);return s!==0?s:U(e.nanos,r.nanos)}function zo(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=De(e[s],r[s]);if(o)return o}return U(e.length,r.length)}function ke(n){return Rs(n)}function Rs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Jt(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Zt(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return M.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Rs(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${Rs(e.fields[u])}`;return s+"}"}(n.mapValue):O()}function er(n){switch(te(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ar(n);return t?16+er(t):16;case 5:return 2*n.stringValue.length;case 6:return Zt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+er(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return re(r.fields,(o,u)=>{s+=o.length+er(u)}),s}(n.mapValue);default:throw O()}}function Cs(n){return!!n&&"integerValue"in n}function Ks(n){return!!n&&"arrayValue"in n}function Ho(n){return!!n&&"nullValue"in n}function Ko(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function nr(n){return!!n&&"mapValue"in n}function rd(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{})[eu])===null||e===void 0?void 0:e.stringValue)===nu}function cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return re(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function sd(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===nd}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!nr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=cn(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());nr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Dt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){re(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new It(cn(this.value))}}function ru(n){const t=[];return re(n.fields,(e,r)=>{const s=new lt([e]);if(nr(r)){const o=ru(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new At(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,L.min(),L.min(),L.min(),It.empty(),0)}static newFoundDocument(t,e,r,s){return new yt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new yt(t,2,e,L.min(),L.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,L.min(),L.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(t,e){this.position=t,this.inclusive=e}}function Go(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=M.comparator(M.fromName(u.referenceValue),e.key):r=De(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Dt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function id(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{}class et extends su{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ad(t,e,r):e==="array-contains"?new cd(t,r):e==="in"?new hd(t,r):e==="not-in"?new dd(t,r):e==="array-contains-any"?new fd(t,r):new et(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ud(t,r):new ld(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(De(e,this.value)):e!==null&&te(this.value)===te(e)&&this.matchesComparison(De(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kt extends su{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new kt(t,e)}matches(t){return iu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function iu(n){return n.op==="and"}function ou(n){return od(n)&&iu(n)}function od(n){for(const t of n.filters)if(t instanceof kt)return!1;return!0}function Ps(n){if(n instanceof et)return n.field.canonicalString()+n.op.toString()+ke(n.value);if(ou(n))return n.filters.map(t=>Ps(t)).join(",");{const t=n.filters.map(e=>Ps(e)).join(",");return`${n.op}(${t})`}}function au(n,t){return n instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&Dt(r.value,s.value)}(n,t):n instanceof kt?function(r,s){return s instanceof kt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,c)=>o&&au(u,s.filters[c]),!0):!1}(n,t):void O()}function uu(n){return n instanceof et?function(e){return`${e.field.canonicalString()} ${e.op} ${ke(e.value)}`}(n):n instanceof kt?function(e){return e.op.toString()+" {"+e.getFilters().map(uu).join(" ,")+"}"}(n):"Filter"}class ad extends et{constructor(t,e,r){super(t,e,r),this.key=M.fromName(r.referenceValue)}matches(t){const e=M.comparator(t.key,this.key);return this.matchesComparison(e)}}class ud extends et{constructor(t,e){super(t,"in",e),this.keys=lu("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class ld extends et{constructor(t,e){super(t,"not-in",e),this.keys=lu("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function lu(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>M.fromName(r.referenceValue))}class cd extends et{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Ks(e)&&En(e.arrayValue,this.value)}}class hd extends et{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&En(this.value.arrayValue,e)}}class dd extends et{constructor(t,e){super(t,"not-in",e)}matches(t){if(En(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!En(this.value.arrayValue,e)}}class fd extends et{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Ks(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>En(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.le=null}}function Qo(n,t=null,e=[],r=[],s=null,o=null,u=null){return new md(n,t,e,r,s,o,u)}function Gs(n){const t=F(n);if(t.le===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ps(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),wr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ke(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ke(r)).join(",")),t.le=e}return t.le}function Ws(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!id(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!au(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Wo(n.startAt,t.startAt)&&Wo(n.endAt,t.endAt)}function Ss(n){return M.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function pd(n,t,e,r,s,o,u,c){return new Rr(n,t,e,r,s,o,u,c)}function cu(n){return new Rr(n)}function Xo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function gd(n){return n.collectionGroup!==null}function hn(n){const t=F(n);if(t.he===null){t.he=[];const e=new Set;for(const o of t.explicitOrderBy)t.he.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new rt(lt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.he.push(new mr(o,r))}),e.has(lt.keyField().canonicalString())||t.he.push(new mr(lt.keyField(),r))}return t.he}function bt(n){const t=F(n);return t.Pe||(t.Pe=_d(t,hn(n))),t.Pe}function _d(n,t){if(n.limitType==="F")return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new mr(s.field,o)});const e=n.endAt?new fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new fr(n.startAt.position,n.startAt.inclusive):null;return Qo(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function bs(n,t,e){return new Rr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Cr(n,t){return Ws(bt(n),bt(t))&&n.limitType===t.limitType}function hu(n){return`${Gs(bt(n))}|lt:${n.limitType}`}function Ae(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>uu(s)).join(", ")}]`),wr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>ke(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>ke(s)).join(",")),`Target(${r})`}(bt(n))}; limitType=${n.limitType})`}function Pr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):M.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of hn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,c,h){const f=Go(u,c,h);return u.inclusive?f<=0:f<0}(r.startAt,hn(r),s)||r.endAt&&!function(u,c,h){const f=Go(u,c,h);return u.inclusive?f>=0:f>0}(r.endAt,hn(r),s))}(n,t)}function yd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function du(n){return(t,e)=>{let r=!1;for(const s of hn(n)){const o=Ed(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Ed(n,t,e){const r=n.field.isKeyField()?M.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?De(h,f):O()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){re(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Qa(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td=new Y(M.comparator);function Ut(){return Td}const fu=new Y(M.comparator);function un(...n){let t=fu;for(const e of n)t=t.insert(e.key,e);return t}function mu(n){let t=fu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function he(){return dn()}function pu(){return dn()}function dn(){return new pe(n=>n.toString(),(n,t)=>n.isEqual(t))}const vd=new Y(M.comparator),Id=new rt(M.comparator);function B(...n){let t=Id;for(const e of n)t=t.add(e);return t}const wd=new rt(U);function Ad(){return wd}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cr(t)?"-0":t}}function gu(n){return{integerValue:""+n}}function Rd(n,t){return Yh(t)?gu(t):Qs(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(){this._=void 0}}function Cd(n,t,e){return n instanceof pr?function(s,o){const u={fields:{[Ja]:{stringValue:Ya},[tu]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Hs(o)&&(o=Ar(o)),o&&(u.fields[Za]=o),{mapValue:u}}(e,t):n instanceof Tn?yu(n,t):n instanceof vn?Eu(n,t):function(s,o){const u=_u(s,o),c=Yo(u)+Yo(s.Ie);return Cs(u)&&Cs(s.Ie)?gu(c):Qs(s.serializer,c)}(n,t)}function Pd(n,t,e){return n instanceof Tn?yu(n,t):n instanceof vn?Eu(n,t):e}function _u(n,t){return n instanceof gr?function(r){return Cs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class pr extends Sr{}class Tn extends Sr{constructor(t){super(),this.elements=t}}function yu(n,t){const e=Tu(t);for(const r of n.elements)e.some(s=>Dt(s,r))||e.push(r);return{arrayValue:{values:e}}}class vn extends Sr{constructor(t){super(),this.elements=t}}function Eu(n,t){let e=Tu(t);for(const r of n.elements)e=e.filter(s=>!Dt(s,r));return{arrayValue:{values:e}}}class gr extends Sr{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Yo(n){return Z(n.integerValue||n.doubleValue)}function Tu(n){return Ks(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Sd(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Tn&&s instanceof Tn||r instanceof vn&&s instanceof vn?Ve(r.elements,s.elements,Dt):r instanceof gr&&s instanceof gr?Dt(r.Ie,s.Ie):r instanceof pr&&s instanceof pr}(n.transform,t.transform)}class bd{constructor(t,e){this.version=t,this.transformResults=e}}class Pt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Pt}static exists(t){return new Pt(void 0,t)}static updateTime(t){return new Pt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function rr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class br{}function vu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Xs(n.key,Pt.none()):new In(n.key,n.data,Pt.none());{const e=n.data,r=It.empty();let s=new rt(lt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new se(n.key,r,new At(s.toArray()),Pt.none())}}function Vd(n,t,e){n instanceof In?function(s,o,u){const c=s.value.clone(),h=Zo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof se?function(s,o,u){if(!rr(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Zo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Iu(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function fn(n,t,e,r){return n instanceof In?function(o,u,c,h){if(!rr(o.precondition,u))return c;const f=o.value.clone(),g=ta(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof se?function(o,u,c,h){if(!rr(o.precondition,u))return c;const f=ta(o.fieldTransforms,h,u),g=u.data;return g.setAll(Iu(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,u,c){return rr(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function Dd(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=_u(r.transform,s||null);o!=null&&(e===null&&(e=It.empty()),e.set(r.field,o))}return e||null}function Jo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ve(r,s,(o,u)=>Sd(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class In extends br{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends br{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Iu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Zo(n,t,e){const r=new Map;z(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Pd(u,c,e[s]))}return r}function ta(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Cd(o,u,t))}return r}class Xs extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class kd extends br{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Vd(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=fn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=pu();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=vu(u,c);h!==null&&r.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),B())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,(e,r)=>Jo(e,r))&&Ve(this.baseMutations,t.baseMutations,(e,r)=>Jo(e,r))}}class Ys{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){z(t.mutations.length===r.length);let s=function(){return vd}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new Ys(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,j;function Od(n){switch(n){case S.OK:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return O()}}function wu(n){if(n===void 0)return Ft("GRPC error has no .code"),S.UNKNOWN;switch(n){case tt.OK:return S.OK;case tt.CANCELLED:return S.CANCELLED;case tt.UNKNOWN:return S.UNKNOWN;case tt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case tt.INTERNAL:return S.INTERNAL;case tt.UNAVAILABLE:return S.UNAVAILABLE;case tt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case tt.NOT_FOUND:return S.NOT_FOUND;case tt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case tt.ABORTED:return S.ABORTED;case tt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case tt.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(j=tt||(tt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=new Gt([4294967295,4294967295],0);function ea(n){const t=Ka().encode(n),e=new Ua;return e.update(t),new Uint8Array(e.digest())}function na(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Gt([e,r],0),new Gt([s,o],0)]}class Js{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(r<0)throw new ln(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.Ee=8*t.length-e,this.de=Gt.fromNumber(this.Ee)}Ae(t,e,r){let s=t.add(e.multiply(Gt.fromNumber(r)));return s.compare(Ld)===1&&(s=new Gt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.Ee===0)return!1;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,s,o);if(!this.Re(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new Js(o,s,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ee===0)return;const e=ea(t),[r,s]=na(e);for(let o=0;o<this.hashCount;o++){const u=this.Ae(r,s,o);this.Ve(u)}}Ve(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,wn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vr(L.min(),s,new Y(U),Ut(),B())}}class wn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new wn(r,e,B(),B(),B())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r,s){this.me=t,this.removedTargetIds=e,this.key=r,this.fe=s}}class Au{constructor(t,e){this.targetId=t,this.ge=e}}class Ru{constructor(t,e,r=ct.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class ra{constructor(){this.pe=0,this.ye=sa(),this.we=ct.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(t){t.approximateByteSize()>0&&(this.be=!0,this.we=t)}Fe(){let t=B(),e=B(),r=B();return this.ye.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:O()}}),new wn(this.we,this.Se,t,e,r)}Me(){this.be=!1,this.ye=sa()}xe(t,e){this.be=!0,this.ye=this.ye.insert(t,e)}Oe(t){this.be=!0,this.ye=this.ye.remove(t)}Ne(){this.pe+=1}Be(){this.pe-=1,z(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class Fd{constructor(t){this.ke=t,this.qe=new Map,this.Qe=Ut(),this.$e=Xn(),this.Ue=Xn(),this.Ke=new Y(U)}We(t){for(const e of t.me)t.fe&&t.fe.isFoundDocument()?this.Ge(e,t.fe):this.ze(e,t.key,t.fe);for(const e of t.removedTargetIds)this.ze(e,t.key,t.fe)}je(t){this.forEachTarget(t,e=>{const r=this.He(e);switch(t.state){case 0:this.Je(e)&&r.Ce(t.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(t.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(e);break;case 3:this.Je(e)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),r.Ce(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.qe.forEach((r,s)=>{this.Je(s)&&e(s)})}Ze(t){const e=t.targetId,r=t.ge.count,s=this.Xe(e);if(s){const o=s.target;if(Ss(o))if(r===0){const u=new M(o.path);this.ze(e,u,yt.newNoDocument(u,L.min()))}else z(r===1);else{const u=this.et(e);if(u!==r){const c=this.tt(t),h=c?this.nt(c,t,u):1;if(h!==0){this.Ye(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,f)}}}}}tt(t){const e=t.ge.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=Zt(r).toUint8Array()}catch(h){if(h instanceof Xa)return be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new Js(u,s,o)}catch(h){return be(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ee===0?null:c}nt(t,e,r){return e.ge.count===r-this.st(t,e.targetId)?0:2}st(t,e){const r=this.ke.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.ke.it(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.ze(e,o,null),s++)}),s}ot(t){const e=new Map;this.qe.forEach((o,u)=>{const c=this.Xe(u);if(c){if(o.current&&Ss(c.target)){const h=new M(c.target.path);this._t(h).has(u)||this.ut(u,h)||this.ze(u,h,yt.newNoDocument(h,t))}o.ve&&(e.set(u,o.Fe()),o.Me())}});let r=B();this.Ue.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Xe(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.Qe.forEach((o,u)=>u.setReadTime(t));const s=new Vr(t,e,this.Ke,this.Qe,r);return this.Qe=Ut(),this.$e=Xn(),this.Ue=Xn(),this.Ke=new Y(U),s}Ge(t,e){if(!this.Je(t))return;const r=this.ut(t,e.key)?2:0;this.He(t).xe(e.key,r),this.Qe=this.Qe.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t)),this.Ue=this.Ue.insert(e.key,this.ct(e.key).add(t))}ze(t,e,r){if(!this.Je(t))return;const s=this.He(t);this.ut(t,e)?s.xe(e,1):s.Oe(e),this.Ue=this.Ue.insert(e,this.ct(e).delete(t)),this.Ue=this.Ue.insert(e,this.ct(e).add(t)),r&&(this.Qe=this.Qe.insert(e,r))}removeTarget(t){this.qe.delete(t)}et(t){const e=this.He(t).Fe();return this.ke.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ne(t){this.He(t).Ne()}He(t){let e=this.qe.get(t);return e||(e=new ra,this.qe.set(t,e)),e}ct(t){let e=this.Ue.get(t);return e||(e=new rt(U),this.Ue=this.Ue.insert(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new rt(U),this.$e=this.$e.insert(t,e)),e}Je(t){const e=this.Xe(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.qe.get(t);return e&&e.De?null:this.ke.lt(t)}Ye(t){this.qe.set(t,new ra),this.ke.getRemoteKeysForTarget(t).forEach(e=>{this.ze(t,e,null)})}ut(t,e){return this.ke.getRemoteKeysForTarget(t).has(e)}}function Xn(){return new Y(M.comparator)}function sa(){return new Y(M.comparator)}const Ud={asc:"ASCENDING",desc:"DESCENDING"},Bd={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},jd={and:"AND",or:"OR"};class qd{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vs(n,t){return n.useProto3Json||wr(t)?t:{value:t}}function _r(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Cu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function $d(n,t){return _r(n,t.toTimestamp())}function Vt(n){return z(!!n),L.fromTimestamp(function(e){const r=Jt(e);return new nt(r.seconds,r.nanos)}(n))}function Zs(n,t){return Ds(n,t).canonicalString()}function Ds(n,t){const e=function(s){return new X(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Pu(n){const t=X.fromString(n);return z(ku(t)),t}function ks(n,t){return Zs(n.databaseId,t.path)}function ms(n,t){const e=Pu(t);if(e.get(1)!==n.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new M(bu(e))}function Su(n,t){return Zs(n.databaseId,t)}function zd(n){const t=Pu(n);return t.length===4?X.emptyPath():bu(t)}function Ns(n){return new X(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function bu(n){return z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function ia(n,t,e){return{name:ks(n,t),fields:e.value.mapValue.fields}}function Hd(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(z(g===void 0||typeof g=="string"),ct.fromBase64String(g||"")):(z(g===void 0||g instanceof Buffer||g instanceof Uint8Array),ct.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const g=f.code===void 0?S.UNKNOWN:wu(f.code);return new x(g,f.message||"")}(u);e=new Ru(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=ms(n,r.document.name),o=Vt(r.document.updateTime),u=r.document.createTime?Vt(r.document.createTime):L.min(),c=new It({mapValue:{fields:r.document.fields}}),h=yt.newFoundDocument(s,o,u,c),f=r.targetIds||[],g=r.removedTargetIds||[];e=new sr(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=ms(n,r.document),o=r.readTime?Vt(r.readTime):L.min(),u=yt.newNoDocument(s,o),c=r.removedTargetIds||[];e=new sr([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=ms(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,s,null)}else{if(!("filter"in t))return O();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new Md(s,o),c=r.targetId;e=new Au(c,u)}}return e}function Kd(n,t){let e;if(t instanceof In)e={update:ia(n,t.key,t.value)};else if(t instanceof Xs)e={delete:ks(n,t.key)};else if(t instanceof se)e={update:ia(n,t.key,t.data),updateMask:ef(t.fieldMask)};else{if(!(t instanceof kd))return O();e={verify:ks(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const c=u.transform;if(c instanceof pr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Tn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof vn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof gr)return{fieldPath:u.field.canonicalString(),increment:c.Ie};throw O()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:$d(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:O()}(n,t.precondition)),e}function Gd(n,t){return n&&n.length>0?(z(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?Vt(s.updateTime):Vt(o);return u.isEqual(L.min())&&(u=Vt(o)),new bd(u,s.transformResults||[])}(e,t))):[]}function Wd(n,t){return{documents:[Su(n,t.path)]}}function Qd(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Su(n,s);const o=function(f){if(f.length!==0)return Du(kt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:Re(R.field),direction:Jd(R.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=Vs(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{ht:e,parent:s}}function Xd(n){let t=zd(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){z(r===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(v){const R=Vu(v);return R instanceof kt&&ou(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(v){return v.map(R=>function(V){return new mr(Ce(V.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(v){let R;return R=typeof v=="object"?v.value:v,wr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(v){const R=!!v.before,P=v.values||[];return new fr(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(v){const R=!v.before,P=v.values||[];return new fr(P,R)}(e.endAt)),pd(t,s,u,o,c,"F",h,f)}function Yd(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ce(e.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ce(e.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return et.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ce(e.unaryFilter.field);return et.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(n):n.fieldFilter!==void 0?function(e){return et.create(Ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return kt.create(e.compositeFilter.filters.map(r=>Vu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(n):O()}function Jd(n){return Ud[n]}function Zd(n){return Bd[n]}function tf(n){return jd[n]}function Re(n){return{fieldPath:n.canonicalString()}}function Ce(n){return lt.fromServerFormat(n.fieldPath)}function Du(n){return n instanceof et?function(e){if(e.op==="=="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ko(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NAN"}};if(Ho(e.value))return{unaryFilter:{field:Re(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Re(e.field),op:Zd(e.op),value:e.value}}}(n):n instanceof kt?function(e){const r=e.getFilters().map(s=>Du(s));return r.length===1?r[0]:{compositeFilter:{op:tf(e.op),filters:r}}}(n):O()}function ef(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ku(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,e,r,s,o=L.min(),u=L.min(),c=ct.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(t){this.Tt=t}}function rf(n){const t=Xd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bs(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.Tn=new of}addToCollectionParentIndex(t,e){return this.Tn.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this.Tn.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Yt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Yt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class of{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new rt(X.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new rt(X.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Nu=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Nu,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.$n=t}next(){return this.$n+=2,this.$n}static Un(){return new Ne(0)}static Kn(){return new Ne(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa="LruGarbageCollector",af=1048576;function ua([n,t],[e,r]){const s=U(n,e);return s===0?U(t,r):s}class uf{constructor(t){this.Hn=t,this.buffer=new rt(ua),this.Jn=0}Yn(){return++this.Jn}Zn(t){const e=[t,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();ua(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class lf{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(t){k(aa,`Garbage collection scheduled in ${t}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Ue(e)?k(aa,"Ignoring IndexedDB error during garbage collection: ",e):await Fe(e)}await this.er(3e5)})}}class cf{constructor(t,e){this.tr=t,this.params=e}calculateTargetCount(t,e){return this.tr.nr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return C.resolve(Ir.ae);const r=new uf(e);return this.tr.forEachTarget(t,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(t,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.tr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.tr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),C.resolve(oa)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),oa):this.ir(t,e))}getCacheSize(t){return this.tr.getCacheSize(t)}ir(t,e){let r,s,o,u,c,h,f;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),s=this.params.maximumSequenceNumbersToCollect):s=v,u=Date.now(),this.nthSequenceNumber(t,s))).next(v=>(r=v,c=Date.now(),this.removeTargets(t,r,e))).next(v=>(o=v,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(v=>(f=Date.now(),we()<=q.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${s} in `+(c-u)+`ms
	Removed ${o} targets in `+(h-c)+`ms
	Removed ${v} documents in `+(f-h)+`ms
Total Duration: ${f-g}ms`),C.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:v})))}}function hf(n,t){return new cf(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(){this.changes=new pe(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&fn(r.mutation,s,At.empty(),nt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,B()).next(()=>r))}getLocalViewOfDocuments(t,e,r=B()){const s=he();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=un();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=he();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,B()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,s){let o=Ut();const u=dn(),c=function(){return dn()}();return e.forEach((h,f)=>{const g=r.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof se)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),fn(g.mutation,f,g.mutation.getFieldMask(),nt.now())):u.set(f.key,At.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var v;return c.set(f,new ff(g,(v=u.get(f))!==null&&v!==void 0?v:null))}),c))}recalculateAndSaveOverlays(t,e){const r=dn();let s=new Y((u,c)=>u-c),o=B();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||At.empty();g=c.applyToLocalView(f,g),r.set(h,g);const v=(s.get(c.batchId)||B()).add(h);s=s.insert(c.batchId,v)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,g=h.value,v=pu();g.forEach(R=>{if(!o.has(R)){const P=vu(e.get(R),r.get(R));P!==null&&v.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,v))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return M.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):gd(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(he());let c=gn,h=o;return u.next(f=>C.forEach(f,(g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,B())).next(g=>({batchId:c,changes:mu(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new M(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=un();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const f=function(v,R){return new Rr(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(g=>{g.forEach((v,R)=>{u=u.insert(v,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,yt.newInvalidDocument(g)))});let c=un();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&fn(g.mutation,f,At.empty(),nt.now()),Pr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(t){this.serializer=t,this.dr=new Map,this.Ar=new Map}getBundleMetadata(t,e){return C.resolve(this.dr.get(e))}saveBundleMetadata(t,e){return this.dr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Vt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.Ar.get(e))}saveNamedQuery(t,e){return this.Ar.set(e.name,function(s){return{name:s.name,query:rf(s.bundledQuery),readTime:Vt(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(){this.overlays=new Y(M.comparator),this.Rr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=he();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.Et(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Rr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=he(),o=e.length+1,u=new M(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Y((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=he(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=he(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>c.set(f,g)),!(c.size()>=s)););return C.resolve(c)}Et(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new xd(e,r));let o=this.Rr.get(e);o===void 0&&(o=B(),this.Rr.set(e,o)),this.Rr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.sessionToken=ct.EMPTY_BYTE_STRING}getSessionToken(t){return C.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.Vr=new rt(it.mr),this.gr=new rt(it.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(t,e){const r=new it(t,e);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.wr(new it(t,e))}Sr(t,e){t.forEach(r=>this.removeReference(r,e))}br(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1),o=[];return this.gr.forEachInRange([r,s],u=>{this.wr(u),o.push(u.key)}),o}Dr(){this.Vr.forEach(t=>this.wr(t))}wr(t){this.Vr=this.Vr.delete(t),this.gr=this.gr.delete(t)}vr(t){const e=new M(new X([])),r=new it(e,t),s=new it(e,t+1);let o=B();return this.gr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new it(t,0),r=this.Vr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class it{constructor(t,e){this.key=t,this.Cr=e}static mr(t,e){return M.comparator(t.key,e.key)||U(t.Cr,e.Cr)}static pr(t,e){return U(t.Cr,e.Cr)||M.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Fr=1,this.Mr=new rt(it.mr)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Nd(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.Mr=this.Mr.add(new it(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Or(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Nr(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?zs:this.Fr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new it(e,0),s=new it(e,Number.POSITIVE_INFINITY),o=[];return this.Mr.forEachInRange([r,s],u=>{const c=this.Or(u.Cr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new rt(U);return e.forEach(s=>{const o=new it(s,0),u=new it(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([o,u],c=>{r=r.add(c.Cr)})}),C.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;M.isDocumentKey(o)||(o=o.child(""));const u=new it(new M(o),0);let c=new rt(U);return this.Mr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.Cr)),!0)},u),C.resolve(this.Br(c))}Br(t){const e=[];return t.forEach(r=>{const s=this.Or(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){z(this.Lr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return C.forEach(e.mutations,s=>{const o=new it(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Mr=r})}qn(t){}containsKey(t,e){const r=new it(e,0),s=this.Mr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Lr(t,e){return this.Nr(t)}Nr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Or(t){const e=this.Nr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(t){this.kr=t,this.docs=function(){return new Y(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.kr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let r=Ut();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():yt.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Ut();const u=e.path,c=new M(u.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||Gh(Kh(g),r)<=0||(s.has(g.key)||Pr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){O()}qr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Tf(this)}getSize(t){return C.resolve(this.size)}}class Tf extends df{constructor(t){super(),this.Ir=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Ir.addEntry(t,s)):this.Ir.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.Ir.getEntry(t,e)}getAllFromCache(t,e){return this.Ir.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t){this.persistence=t,this.Qr=new pe(e=>Gs(e),Ws),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.$r=0,this.Ur=new ti,this.targetCount=0,this.Kr=Ne.Un()}forEachTarget(t,e){return this.Qr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.$r)}allocateTargetId(t){return this.highestTargetId=this.Kr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.$r&&(this.$r=e),C.resolve()}zn(t){this.Qr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Kr=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.$r&&(this.$r=t.sequenceNumber)}addTargetData(t,e){return this.zn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.zn(e),C.resolve()}removeTargetData(t,e){return this.Qr.delete(e.target),this.Ur.br(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Qr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Qr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Qr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Ur.yr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Ur.Sr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Ur.br(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Ur.vr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Ur.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(t,e){this.Wr={},this.overlays={},this.Gr=new Ir(0),this.zr=!1,this.zr=!0,this.jr=new _f,this.referenceDelegate=t(this),this.Hr=new vf(this),this.indexManager=new sf,this.remoteDocumentCache=function(s){return new Ef(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new nf(e),this.Yr=new pf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new gf,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Wr[t.toKey()];return r||(r=new yf(e,this.referenceDelegate),this.Wr[t.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(t,e,r){k("MemoryPersistence","Starting transaction:",t);const s=new If(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(o=>this.referenceDelegate.Xr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}ei(t,e){return C.or(Object.values(this.Wr).map(r=>()=>r.containsKey(t,e)))}}class If extends Qh{constructor(t){super(),this.currentSequenceNumber=t}}class ei{constructor(t){this.persistence=t,this.ti=new ti,this.ni=null}static ri(t){return new ei(t)}get ii(){if(this.ni)return this.ni;throw O()}addReference(t,e,r){return this.ti.addReference(r,e),this.ii.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.ti.removeReference(r,e),this.ii.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.ii.add(e.toString()),C.resolve()}removeTarget(t,e){this.ti.br(e.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.ii.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Zr(){this.ni=new Set}Xr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.ii,r=>{const s=M.fromPath(r);return this.si(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.ni=null,e.apply(t)))}updateLimboDocument(t,e){return this.si(t,e).next(r=>{r?this.ii.delete(e.toString()):this.ii.add(e.toString())})}Jr(t){return 0}si(t,e){return C.or([()=>C.resolve(this.ti.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.ei(t,e)])}}class yr{constructor(t,e){this.persistence=t,this.oi=new pe(r=>Jh(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=hf(this,e)}static ri(t,e){return new yr(t,e)}Zr(){}Xr(t){return C.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}nr(t){const e=this.sr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}sr(t){let e=0;return this.rr(t,r=>{e++}).next(()=>e)}rr(t,e){return C.forEach(this.oi,(r,s)=>this.ar(t,r,s).next(o=>o?C.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.qr(t,u=>this.ar(t,u,e).next(c=>{c||(r++,o.removeEntry(u,L.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}removeReference(t,e,r){return this.oi.set(r,t.currentSequenceNumber),C.resolve()}updateLimboDocument(t,e){return this.oi.set(e,t.currentSequenceNumber),C.resolve()}Jr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=er(t.data.value)),e}ar(t,e,r){return C.or([()=>this.persistence.ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.oi.get(e);return C.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Hi=r,this.Ji=s}static Yi(t,e){let r=B(),s=B();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ni(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Af{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return gc()?8:Xh(mc())>0?6:4}()}initialize(t,e){this.ns=t,this.indexManager=e,this.Zi=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.rs(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.ss(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new wf;return this._s(t,e,u).next(c=>{if(o.result=c,this.Xi)return this.us(t,e,u,c.size)})}).next(()=>o.result)}us(t,e,r,s){return r.documentReadCount<this.es?(we()<=q.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ae(e),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),C.resolve()):(we()<=q.DEBUG&&k("QueryEngine","Query:",Ae(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(we()<=q.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ae(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):C.resolve())}rs(t,e){if(Xo(e))return C.resolve(null);let r=bt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=bs(e,null,"F"),r=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=B(...o);return this.ns.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.cs(e,c);return this.ls(e,f,u,h.readTime)?this.rs(t,bs(e,null,"F")):this.hs(t,f,e,h)}))})))}ss(t,e,r,s){return Xo(e)||s.isEqual(L.min())?C.resolve(null):this.ns.getDocuments(t,r).next(o=>{const u=this.cs(e,o);return this.ls(e,u,r,s)?C.resolve(null):(we()<=q.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ae(e)),this.hs(t,u,e,Hh(s,gn)).next(c=>c))})}cs(t,e){let r=new rt(du(t));return e.forEach((s,o)=>{Pr(t,o)&&(r=r.add(o))}),r}ls(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}_s(t,e,r){return we()<=q.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ae(e)),this.ns.getDocumentsMatchingQuery(t,e,Yt.min(),r)}hs(t,e,r,s){return this.ns.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="LocalStore",Rf=3e8;class Cf{constructor(t,e,r,s){this.persistence=t,this.Ps=e,this.serializer=s,this.Ts=new Y(U),this.Is=new pe(o=>Gs(o),Ws),this.Es=new Map,this.ds=t.getRemoteDocumentCache(),this.Hr=t.getTargetCache(),this.Yr=t.getBundleCache(),this.As(r)}As(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mf(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Ts))}}function Pf(n,t,e,r){return new Cf(n,t,e,r)}async function Mu(n,t){const e=F(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.As(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let h=B();for(const f of s){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({Rs:f,removedBatchIds:u,addedBatchIds:c}))})})}function Sf(n,t){const e=F(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.ds.newChangeBuffer({trackRemovals:!0});return function(c,h,f,g){const v=f.batch,R=v.keys();let P=C.resolve();return R.forEach(V=>{P=P.next(()=>g.getEntry(h,V)).next(N=>{const D=f.docVersions.get(V);z(D!==null),N.version.compareTo(D)<0&&(v.applyToRemoteDocument(N,f),N.isValidDocument()&&(N.setReadTime(f.commitVersion),g.addEntry(N)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=B();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Ou(n){const t=F(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Hr.getLastRemoteSnapshotVersion(e))}function bf(n,t){const e=F(n),r=t.snapshotVersion;let s=e.Ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.ds.newChangeBuffer({trackRemovals:!0});s=e.Ts;const c=[];t.targetChanges.forEach((g,v)=>{const R=s.get(v);if(!R)return;c.push(e.Hr.removeMatchingKeys(o,g.removedDocuments,v).next(()=>e.Hr.addMatchingKeys(o,g.addedDocuments,v)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?P=P.withResumeToken(ct.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),s=s.insert(v,P),function(N,D,K){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=Rf?!0:K.addedDocuments.size+K.modifiedDocuments.size+K.removedDocuments.size>0}(R,P,g)&&c.push(e.Hr.updateTargetData(o,P))});let h=Ut(),f=B();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(Vf(o,u,t.documentUpdates).next(g=>{h=g.Vs,f=g.fs})),!r.isEqual(L.min())){const g=e.Hr.getLastRemoteSnapshotVersion(o).next(v=>e.Hr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.Ts=s,o))}function Vf(n,t,e){let r=B(),s=B();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=Ut();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):k(ri,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{Vs:u,fs:s}})}function Df(n,t){const e=F(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=zs),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function kf(n,t){const e=F(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Hr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Hr.allocateTargetId(r).next(u=>(s=new zt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.Ts=e.Ts.insert(r.targetId,r),e.Is.set(t,r.targetId)),r})}async function xs(n,t,e){const r=F(n),s=r.Ts.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!Ue(u))throw u;k(ri,`Failed to update sequence numbers for target ${t}: ${u}`)}r.Ts=r.Ts.remove(t),r.Is.delete(s.target)}function la(n,t,e){const r=F(n);let s=L.min(),o=B();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const v=F(h),R=v.Is.get(g);return R!==void 0?C.resolve(v.Ts.get(R)):v.Hr.getTargetData(f,g)}(r,u,bt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>r.Ps.getDocumentsMatchingQuery(u,t,e?s:L.min(),e?o:B())).next(c=>(Nf(r,yd(t),c),{documents:c,gs:o})))}function Nf(n,t,e){let r=n.Es.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Es.set(t,r)}class ca{constructor(){this.activeTargetIds=Ad()}Ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}vs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}bs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xf{constructor(){this.ho=new ca,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.ho.Ds(t),this.Po[t]||"not-current"}updateQueryState(t,e,r){this.Po[t]=e}removeLocalQueryTarget(t){this.ho.vs(t)}isLocalQueryTarget(t){return this.ho.activeTargetIds.has(t)}clearQueryState(t){delete this.Po[t]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(t){return this.ho.activeTargetIds.has(t)}start(){return this.ho=new ca,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{To(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha="ConnectivityMonitor";class da{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(t){this.Vo.push(t)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){k(ha,"Network connectivity changed: AVAILABLE");for(const t of this.Vo)t(0)}Ro(){k(ha,"Network connectivity changed: UNAVAILABLE");for(const t of this.Vo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yn=null;function Ms(){return Yn===null?Yn=function(){return 268435456+Math.round(2147483648*Math.random())}():Yn++,"0x"+Yn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="RestConnection",Of={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Lf{get fo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=e+"://"+t.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===hr?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(t,e,r,s,o){const u=Ms(),c=this.bo(t,e.toUriEncodedString());k(ps,`Sending RPC '${t}' ${u}:`,c,r);const h={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(h,s,o),this.vo(t,c,h,r).then(f=>(k(ps,`Received RPC '${t}' ${u}: `,f),f),f=>{throw be(ps,`RPC '${t}' ${u} failed with error: `,f,"url: ",c,"request:",r),f})}Co(t,e,r,s,o,u){return this.So(t,e,r,s,o)}Do(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Le}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}bo(t,e){const r=Of[t];return`${this.po}/v1/${e}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t){this.Fo=t.Fo,this.Mo=t.Mo}xo(t){this.Oo=t}No(t){this.Bo=t}Lo(t){this.ko=t}onMessage(t){this.qo=t}close(){this.Mo()}send(t){this.Fo(t)}Qo(){this.Oo()}$o(){this.Bo()}Uo(t){this.ko(t)}Ko(t){this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class Uf extends Lf{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}vo(t,e,r,s){const o=Ms();return new Promise((u,c)=>{const h=new Ba;h.setWithCredentials(!0),h.listenOnce(ja.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case tr.NO_ERROR:const g=h.getResponseJson();k(gt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case tr.TIMEOUT:k(gt,`RPC '${t}' ${o} timed out`),c(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case tr.HTTP_ERROR:const v=h.getStatus();if(k(gt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const V=function(D){const K=D.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN}(P.status);c(new x(V,P.message))}else c(new x(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{k(gt,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);k(gt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Wo(t,e,r){const s=Ms(),o=[this.po,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=za(),c=$a(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.useFetchStreams=!0),this.Do(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");k(gt,`Creating RPC '${t}' stream ${s}: ${g}`,h);const v=u.createWebChannel(g,h);let R=!1,P=!1;const V=new Ff({Fo:D=>{P?k(gt,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(k(gt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),R=!0),k(gt,`RPC '${t}' stream ${s} sending:`,D),v.send(D))},Mo:()=>v.close()}),N=(D,K,H)=>{D.listen(K,G=>{try{H(G)}catch(st){setTimeout(()=>{throw st},0)}})};return N(v,an.EventType.OPEN,()=>{P||(k(gt,`RPC '${t}' stream ${s} transport opened.`),V.Qo())}),N(v,an.EventType.CLOSE,()=>{P||(P=!0,k(gt,`RPC '${t}' stream ${s} transport closed`),V.Uo())}),N(v,an.EventType.ERROR,D=>{P||(P=!0,be(gt,`RPC '${t}' stream ${s} transport errored:`,D),V.Uo(new x(S.UNAVAILABLE,"The operation could not be completed")))}),N(v,an.EventType.MESSAGE,D=>{var K;if(!P){const H=D.data[0];z(!!H);const G=H,st=(G==null?void 0:G.error)||((K=G[0])===null||K===void 0?void 0:K.error);if(st){k(gt,`RPC '${t}' stream ${s} received error:`,st);const Nt=st.status;let ot=function(_){const y=tt[_];if(y!==void 0)return wu(y)}(Nt),T=st.message;ot===void 0&&(ot=S.INTERNAL,T="Unknown error status: "+Nt+" with message "+st.message),P=!0,V.Uo(new x(ot,T)),v.close()}else k(gt,`RPC '${t}' stream ${s} received:`,H),V.Ko(H)}}),N(c,qa.STAT_EVENT,D=>{D.stat===ws.PROXY?k(gt,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===ws.NOPROXY&&k(gt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{V.$o()},0),V}}function gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(n){return new qd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ti=t,this.timerId=e,this.Go=r,this.zo=s,this.jo=o,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(t){this.cancel();const e=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,e-r);s>0&&k("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),t())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa="PersistentStream";class Fu{constructor(t,e,r,s,o,u,c,h){this.Ti=t,this.n_=r,this.r_=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Lu(t,e)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(t){this.E_(),this.stream.send(t)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(t,e){this.E_(),this.d_(),this.a_.cancel(),this.i_++,t!==4?this.a_.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Ft(e.toString()),Ft("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Lo(e)}A_(){}auth(){this.state=1;const t=this.R_(this.i_),e=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===e&&this.V_(r,s)},r=>{t(()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(t,e){const r=this.R_(this.i_);this.stream=this.f_(t,e),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(t){return k(fa,`close with error: ${t}`),this.stream=null,this.close(4,t)}R_(t){return e=>{this.Ti.enqueueAndForget(()=>this.i_===t?e():(k(fa,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Bf extends Fu{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}f_(t,e){return this.connection.Wo("Listen",t,e)}g_(t){return this.onNext(t)}onNext(t){this.a_.reset();const e=Hd(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?L.min():u.readTime?Vt(u.readTime):L.min()}(t);return this.listener.p_(e,r)}y_(t){const e={};e.database=Ns(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=Ss(h)?{documents:Wd(o,h)}:{query:Qd(o,h).ht},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Cu(o,u.resumeToken);const f=Vs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(L.min())>0){c.readTime=_r(o,u.snapshotVersion.toTimestamp());const f=Vs(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=Yd(this.serializer,t);r&&(e.labels=r),this.I_(e)}w_(t){const e={};e.database=Ns(this.serializer),e.removeTarget=t,this.I_(e)}}class jf extends Fu{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(t,e){return this.connection.Wo("Write",t,e)}g_(t){return z(!!t.streamToken),this.lastStreamToken=t.streamToken,z(!t.writeResults||t.writeResults.length===0),this.listener.D_()}onNext(t){z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.a_.reset();const e=Gd(t.writeResults,t.commitTime),r=Vt(t.commitTime);return this.listener.v_(r,e)}C_(){const t={};t.database=Ns(this.serializer),this.I_(t)}b_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Kd(this.serializer,r))};this.I_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{}class $f extends qf{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,e,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.So(t,Ds(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(S.UNKNOWN,o.toString())})}Co(t,e,r,s,o){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.Co(t,Ds(e,r),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(S.UNKNOWN,u.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class zf{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(t){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.L_("Offline")))}set(t){this.Q_(),this.x_=0,t==="Online"&&(this.N_=!1),this.L_(t)}L_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}k_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ft(e),this.N_=!1):k("OnlineStateTracker",e)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe="RemoteStore";class Hf{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=o,this.z_.To(u=>{r.enqueueAndForget(async()=>{ge(this)&&(k(fe,"Restarting streams for network reachability change."),await async function(h){const f=F(h);f.W_.add(4),await An(f),f.j_.set("Unknown"),f.W_.delete(4),await kr(f)}(this))})}),this.j_=new zf(r,s)}}async function kr(n){if(ge(n))for(const t of n.G_)await t(!0)}async function An(n){for(const t of n.G_)await t(!1)}function Uu(n,t){const e=F(n);e.K_.has(t.targetId)||(e.K_.set(t.targetId,t),ai(e)?oi(e):Be(e).c_()&&ii(e,t))}function si(n,t){const e=F(n),r=Be(e);e.K_.delete(t),r.c_()&&Bu(e,t),e.K_.size===0&&(r.c_()?r.P_():ge(e)&&e.j_.set("Unknown"))}function ii(n,t){if(n.H_.Ne(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Be(n).y_(t)}function Bu(n,t){n.H_.Ne(t),Be(n).w_(t)}function oi(n){n.H_=new Fd({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>n.K_.get(t)||null,it:()=>n.datastore.serializer.databaseId}),Be(n).start(),n.j_.B_()}function ai(n){return ge(n)&&!Be(n).u_()&&n.K_.size>0}function ge(n){return F(n).W_.size===0}function ju(n){n.H_=void 0}async function Kf(n){n.j_.set("Online")}async function Gf(n){n.K_.forEach((t,e)=>{ii(n,t)})}async function Wf(n,t){ju(n),ai(n)?(n.j_.q_(t),oi(n)):n.j_.set("Unknown")}async function Qf(n,t,e){if(n.j_.set("Online"),t instanceof Ru&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.K_.delete(c),s.H_.removeTarget(c))}(n,t)}catch(r){k(fe,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Er(n,r)}else if(t instanceof sr?n.H_.We(t):t instanceof Au?n.H_.Ze(t):n.H_.je(t),!e.isEqual(L.min()))try{const r=await Ou(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.H_.ot(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.K_.get(f);g&&o.K_.set(f,g.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const g=o.K_.get(h);if(!g)return;o.K_.set(h,g.withResumeToken(ct.EMPTY_BYTE_STRING,g.snapshotVersion)),Bu(o,h);const v=new zt(g.target,h,f,g.sequenceNumber);ii(o,v)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){k(fe,"Failed to raise snapshot:",r),await Er(n,r)}}async function Er(n,t,e){if(!Ue(t))throw t;n.W_.add(1),await An(n),n.j_.set("Offline"),e||(e=()=>Ou(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{k(fe,"Retrying IndexedDB access"),await e(),n.W_.delete(1),await kr(n)})}function qu(n,t){return t().catch(e=>Er(n,e,t))}async function Nr(n){const t=F(n),e=ee(t);let r=t.U_.length>0?t.U_[t.U_.length-1].batchId:zs;for(;Xf(t);)try{const s=await Df(t.localStore,r);if(s===null){t.U_.length===0&&e.P_();break}r=s.batchId,Yf(t,s)}catch(s){await Er(t,s)}$u(t)&&zu(t)}function Xf(n){return ge(n)&&n.U_.length<10}function Yf(n,t){n.U_.push(t);const e=ee(n);e.c_()&&e.S_&&e.b_(t.mutations)}function $u(n){return ge(n)&&!ee(n).u_()&&n.U_.length>0}function zu(n){ee(n).start()}async function Jf(n){ee(n).C_()}async function Zf(n){const t=ee(n);for(const e of n.U_)t.b_(e.mutations)}async function tm(n,t,e){const r=n.U_.shift(),s=Ys.from(r,t,e);await qu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Nr(n)}async function em(n,t){t&&ee(n).S_&&await async function(r,s){if(function(u){return Od(u)&&u!==S.ABORTED}(s.code)){const o=r.U_.shift();ee(r).h_(),await qu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Nr(r)}}(n,t),$u(n)&&zu(n)}async function ma(n,t){const e=F(n);e.asyncQueue.verifyOperationInProgress(),k(fe,"RemoteStore received new credentials");const r=ge(e);e.W_.add(3),await An(e),r&&e.j_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.W_.delete(3),await kr(e)}async function nm(n,t){const e=F(n);t?(e.W_.delete(2),await kr(e)):t||(e.W_.add(2),await An(e),e.j_.set("Unknown"))}function Be(n){return n.J_||(n.J_=function(e,r,s){const o=F(e);return o.M_(),new Bf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:Kf.bind(null,n),No:Gf.bind(null,n),Lo:Wf.bind(null,n),p_:Qf.bind(null,n)}),n.G_.push(async t=>{t?(n.J_.h_(),ai(n)?oi(n):n.j_.set("Unknown")):(await n.J_.stop(),ju(n))})),n.J_}function ee(n){return n.Y_||(n.Y_=function(e,r,s){const o=F(e);return o.M_(),new jf(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:Jf.bind(null,n),Lo:em.bind(null,n),D_:Zf.bind(null,n),v_:tm.bind(null,n)}),n.G_.push(async t=>{t?(n.Y_.h_(),await Nr(n)):(await n.Y_.stop(),n.U_.length>0&&(k(fe,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new ui(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function li(n,t){if(Ft("AsyncQueue",`${t}: ${n}`),Ue(n))return new x(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{static emptySet(t){return new Se(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||M.comparator(e.key,r.key):(e,r)=>M.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(){this.Z_=new Y(M.comparator)}track(t){const e=t.doc.key,r=this.Z_.get(e);r?t.type!==0&&r.type===3?this.Z_=this.Z_.insert(e,t):t.type===3&&r.type!==1?this.Z_=this.Z_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.Z_=this.Z_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.Z_=this.Z_.remove(e):t.type===1&&r.type===2?this.Z_=this.Z_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.Z_=this.Z_.insert(e,{type:2,doc:t.doc}):O():this.Z_=this.Z_.insert(e,t)}X_(){const t=[];return this.Z_.inorderTraversal((e,r)=>{t.push(r)}),t}}class xe{constructor(t,e,r,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new xe(t,e,Se.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Cr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(t=>t.ra())}}class sm{constructor(){this.queries=ga(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(e,r){const s=F(e),o=s.queries;s.queries=ga(),o.forEach((u,c)=>{for(const h of c.ta)h.onError(r)})})(this,new x(S.ABORTED,"Firestore shutting down"))}}function ga(){return new pe(n=>hu(n),Cr)}async function im(n,t){const e=F(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.na()&&t.ra()&&(r=2):(o=new rm,r=t.ra()?0:1);try{switch(r){case 0:o.ea=await e.onListen(s,!0);break;case 1:o.ea=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=li(u,`Initialization of query '${Ae(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.ta.push(t),t.sa(e.onlineState),o.ea&&t.oa(o.ea)&&ci(e)}async function om(n,t){const e=F(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.ta.indexOf(t);u>=0&&(o.ta.splice(u,1),o.ta.length===0?s=t.ra()?0:1:!o.na()&&t.ra()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function am(n,t){const e=F(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.ta)c.oa(s)&&(r=!0);u.ea=s}}r&&ci(e)}function um(n,t,e){const r=F(n),s=r.queries.get(t);if(s)for(const o of s.ta)o.onError(e);r.queries.delete(t)}function ci(n){n.ia.forEach(t=>{t.next()})}var Os,_a;(_a=Os||(Os={}))._a="default",_a.Cache="cache";class lm{constructor(t,e,r){this.query=t,this.aa=e,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new xe(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ua?this.la(t)&&(this.aa.next(t),e=!0):this.ha(t,this.onlineState)&&(this.Pa(t),e=!0),this.ca=t,e}onError(t){this.aa.error(t)}sa(t){this.onlineState=t;let e=!1;return this.ca&&!this.ua&&this.ha(this.ca,t)&&(this.Pa(this.ca),e=!0),e}ha(t,e){if(!t.fromCache||!this.ra())return!0;const r=e!=="Offline";return(!this.options.Ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}la(t){if(t.docChanges.length>0)return!0;const e=this.ca&&this.ca.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}Pa(t){t=xe.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ua=!0,this.aa.next(t)}ra(){return this.options.source!==Os.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(t){this.key=t}}class Ku{constructor(t){this.key=t}}class cm{constructor(t,e){this.query=t,this.fa=e,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=B(),this.mutatedKeys=B(),this.ya=du(t),this.wa=new Se(this.ya)}get Sa(){return this.fa}ba(t,e){const r=e?e.Da:new pa,s=e?e.wa:this.wa;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,v)=>{const R=s.get(g),P=Pr(this.query,v)?v:null,V=!!R&&this.mutatedKeys.has(R.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;R&&P?R.data.isEqual(P.data)?V!==N&&(r.track({type:3,doc:P}),D=!0):this.va(R,P)||(r.track({type:2,doc:P}),D=!0,(h&&this.ya(P,h)>0||f&&this.ya(P,f)<0)&&(c=!0)):!R&&P?(r.track({type:0,doc:P}),D=!0):R&&!P&&(r.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(P?(u=u.add(P),o=N?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{wa:u,Da:r,ls:c,mutatedKeys:o}}va(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.wa;this.wa=t.wa,this.mutatedKeys=t.mutatedKeys;const u=t.Da.X_();u.sort((g,v)=>function(P,V){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(P)-N(V)}(g.type,v.type)||this.ya(g.doc,v.doc)),this.Ca(r),s=s!=null&&s;const c=e&&!s?this.Fa():[],h=this.pa.size===0&&this.current&&!s?1:0,f=h!==this.ga;return this.ga=h,u.length!==0||f?{snapshot:new xe(this.query,t.wa,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new pa,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(t){return!this.fa.has(t)&&!!this.wa.has(t)&&!this.wa.get(t).hasLocalMutations}Ca(t){t&&(t.addedDocuments.forEach(e=>this.fa=this.fa.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.fa=this.fa.delete(e)),this.current=t.current)}Fa(){if(!this.current)return[];const t=this.pa;this.pa=B(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const e=[];return t.forEach(r=>{this.pa.has(r)||e.push(new Ku(r))}),this.pa.forEach(r=>{t.has(r)||e.push(new Hu(r))}),e}Oa(t){this.fa=t.gs,this.pa=B();const e=this.ba(t.documents);return this.applyChanges(e,!0)}Na(){return xe.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const hi="SyncEngine";class hm{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class dm{constructor(t){this.key=t,this.Ba=!1}}class fm{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.La={},this.ka=new pe(c=>hu(c),Cr),this.qa=new Map,this.Qa=new Set,this.$a=new Y(M.comparator),this.Ua=new Map,this.Ka=new ti,this.Wa={},this.Ga=new Map,this.za=Ne.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function mm(n,t,e=!0){const r=Ju(n);let s;const o=r.ka.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.Na()):s=await Gu(r,t,e,!0),s}async function pm(n,t){const e=Ju(n);await Gu(e,t,!0,!1)}async function Gu(n,t,e,r){const s=await kf(n.localStore,bt(t)),o=s.targetId,u=n.sharedClientState.addLocalQueryTarget(o,e);let c;return r&&(c=await gm(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Uu(n.remoteStore,s),c}async function gm(n,t,e,r,s){n.Ha=(v,R,P)=>async function(N,D,K,H){let G=D.view.ba(K);G.ls&&(G=await la(N.localStore,D.query,!1).then(({documents:T})=>D.view.ba(T,G)));const st=H&&H.targetChanges.get(D.targetId),Nt=H&&H.targetMismatches.get(D.targetId)!=null,ot=D.view.applyChanges(G,N.isPrimaryClient,st,Nt);return Ea(N,D.targetId,ot.Ma),ot.snapshot}(n,v,R,P);const o=await la(n.localStore,t,!0),u=new cm(t,o.gs),c=u.ba(o.documents),h=wn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(c,n.isPrimaryClient,h);Ea(n,e,f.Ma);const g=new hm(t,e,u);return n.ka.set(t,g),n.qa.has(e)?n.qa.get(e).push(t):n.qa.set(e,[t]),f.snapshot}async function _m(n,t,e){const r=F(n),s=r.ka.get(t),o=r.qa.get(s.targetId);if(o.length>1)return r.qa.set(s.targetId,o.filter(u=>!Cr(u,t))),void r.ka.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await xs(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&si(r.remoteStore,s.targetId),Ls(r,s.targetId)}).catch(Fe)):(Ls(r,s.targetId),await xs(r.localStore,s.targetId,!0))}async function ym(n,t){const e=F(n),r=e.ka.get(t),s=e.qa.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),si(e.remoteStore,r.targetId))}async function Em(n,t,e){const r=Cm(n);try{const s=await function(u,c){const h=F(u),f=nt.now(),g=c.reduce((P,V)=>P.add(V.key),B());let v,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let V=Ut(),N=B();return h.ds.getEntries(P,g).next(D=>{V=D,V.forEach((K,H)=>{H.isValidDocument()||(N=N.add(K))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,V)).next(D=>{v=D;const K=[];for(const H of c){const G=Dd(H,v.get(H.key).overlayedDocument);G!=null&&K.push(new se(H.key,G,ru(G.value.mapValue),Pt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,K,c)}).next(D=>{R=D;const K=D.applyToLocalDocumentSet(v,N);return h.documentOverlayCache.saveOverlays(P,D.batchId,K)})}).then(()=>({batchId:R.batchId,changes:mu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.Wa[u.currentUser.toKey()];f||(f=new Y(U)),f=f.insert(c,h),u.Wa[u.currentUser.toKey()]=f}(r,s.batchId,e),await Rn(r,s.changes),await Nr(r.remoteStore)}catch(s){const o=li(s,"Failed to persist write");e.reject(o)}}async function Wu(n,t){const e=F(n);try{const r=await bf(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Ua.get(o);u&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.Ba=!0:s.modifiedDocuments.size>0?z(u.Ba):s.removedDocuments.size>0&&(z(u.Ba),u.Ba=!1))}),await Rn(e,r,t)}catch(r){await Fe(r)}}function ya(n,t,e){const r=F(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ka.forEach((o,u)=>{const c=u.view.sa(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=F(u);h.onlineState=c;let f=!1;h.queries.forEach((g,v)=>{for(const R of v.ta)R.sa(c)&&(f=!0)}),f&&ci(h)}(r.eventManager,t),s.length&&r.La.p_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Tm(n,t,e){const r=F(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Ua.get(t),o=s&&s.key;if(o){let u=new Y(M.comparator);u=u.insert(o,yt.newNoDocument(o,L.min()));const c=B().add(o),h=new Vr(L.min(),new Map,new Y(U),u,c);await Wu(r,h),r.$a=r.$a.remove(o),r.Ua.delete(t),di(r)}else await xs(r.localStore,t,!1).then(()=>Ls(r,t,e)).catch(Fe)}async function vm(n,t){const e=F(n),r=t.batch.batchId;try{const s=await Sf(e.localStore,t);Xu(e,r,null),Qu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Rn(e,s)}catch(s){await Fe(s)}}async function Im(n,t,e){const r=F(n);try{const s=await function(u,c){const h=F(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,c).next(v=>(z(v!==null),g=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);Xu(r,t,e),Qu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Rn(r,s)}catch(s){await Fe(s)}}function Qu(n,t){(n.Ga.get(t)||[]).forEach(e=>{e.resolve()}),n.Ga.delete(t)}function Xu(n,t,e){const r=F(n);let s=r.Wa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.Wa[r.currentUser.toKey()]=s}}function Ls(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.qa.get(t))n.ka.delete(r),e&&n.La.Ja(r,e);n.qa.delete(t),n.isPrimaryClient&&n.Ka.br(t).forEach(r=>{n.Ka.containsKey(r)||Yu(n,r)})}function Yu(n,t){n.Qa.delete(t.path.canonicalString());const e=n.$a.get(t);e!==null&&(si(n.remoteStore,e),n.$a=n.$a.remove(t),n.Ua.delete(e),di(n))}function Ea(n,t,e){for(const r of e)r instanceof Hu?(n.Ka.addReference(r.key,t),wm(n,r)):r instanceof Ku?(k(hi,"Document no longer in limbo: "+r.key),n.Ka.removeReference(r.key,t),n.Ka.containsKey(r.key)||Yu(n,r.key)):O()}function wm(n,t){const e=t.key,r=e.path.canonicalString();n.$a.get(e)||n.Qa.has(r)||(k(hi,"New document in limbo: "+e),n.Qa.add(r),di(n))}function di(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const t=n.Qa.values().next().value;n.Qa.delete(t);const e=new M(X.fromString(t)),r=n.za.next();n.Ua.set(r,new dm(e)),n.$a=n.$a.insert(e,r),Uu(n.remoteStore,new zt(bt(cu(e.path)),r,"TargetPurposeLimboResolution",Ir.ae))}}async function Rn(n,t,e){const r=F(n),s=[],o=[],u=[];r.ka.isEmpty()||(r.ka.forEach((c,h)=>{u.push(r.Ha(h,t,e).then(f=>{var g;if((f||e)&&r.isPrimaryClient){const v=f?!f.fromCache:(g=e==null?void 0:e.targetChanges.get(h.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(h.targetId,v?"current":"not-current")}if(f){s.push(f);const v=ni.Yi(h.targetId,f);o.push(v)}}))}),await Promise.all(u),r.La.p_(s),await async function(h,f){const g=F(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>C.forEach(f,R=>C.forEach(R.Hi,P=>g.persistence.referenceDelegate.addReference(v,R.targetId,P)).next(()=>C.forEach(R.Ji,P=>g.persistence.referenceDelegate.removeReference(v,R.targetId,P)))))}catch(v){if(!Ue(v))throw v;k(ri,"Failed to update sequence numbers: "+v)}for(const v of f){const R=v.targetId;if(!v.fromCache){const P=g.Ts.get(R),V=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(V);g.Ts=g.Ts.insert(R,N)}}}(r.localStore,o))}async function Am(n,t){const e=F(n);if(!e.currentUser.isEqual(t)){k(hi,"User change. New user:",t.toKey());const r=await Mu(e.localStore,t);e.currentUser=t,function(o,u){o.Ga.forEach(c=>{c.forEach(h=>{h.reject(new x(S.CANCELLED,u))})}),o.Ga.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Rn(e,r.Rs)}}function Rm(n,t){const e=F(n),r=e.Ua.get(t);if(r&&r.Ba)return B().add(r.key);{let s=B();const o=e.qa.get(t);if(!o)return s;for(const u of o){const c=e.ka.get(u);s=s.unionWith(c.view.Sa)}return s}}function Ju(n){const t=F(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rm.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Tm.bind(null,t),t.La.p_=am.bind(null,t.eventManager),t.La.Ja=um.bind(null,t.eventManager),t}function Cm(n){const t=F(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=vm.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Im.bind(null,t),t}class Tr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Dr(t.databaseInfo.databaseId),this.sharedClientState=this.Za(t),this.persistence=this.Xa(t),await this.persistence.start(),this.localStore=this.eu(t),this.gcScheduler=this.tu(t,this.localStore),this.indexBackfillerScheduler=this.nu(t,this.localStore)}tu(t,e){return null}nu(t,e){return null}eu(t){return Pf(this.persistence,new Af,t.initialUser,this.serializer)}Xa(t){return new xu(ei.ri,this.serializer)}Za(t){return new xf}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Tr.provider={build:()=>new Tr};class Pm extends Tr{constructor(t){super(),this.cacheSizeBytes=t}tu(t,e){z(this.persistence.referenceDelegate instanceof yr);const r=this.persistence.referenceDelegate.garbageCollector;return new lf(r,t.asyncQueue,e)}Xa(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new xu(r=>yr.ri(r,e),this.serializer)}}class Fs{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ya(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Am.bind(null,this.syncEngine),await nm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sm}()}createDatastore(t){const e=Dr(t.databaseInfo.databaseId),r=function(o){return new Uf(o)}(t.databaseInfo);return function(o,u,c,h){return new $f(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,c){return new Hf(r,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>ya(this.syncEngine,e,0),function(){return da.D()?new da:new Mf}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,g){const v=new fm(s,o,u,c,h,f);return g&&(v.ja=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=F(s);k(fe,"RemoteStore shutting down."),o.W_.add(5),await An(o),o.z_.shutdown(),o.j_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Fs.provider={build:()=>new Fs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.iu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.iu(this.observer.error,t):Ft("Uncaught Error in snapshot listener:",t.toString()))}su(){this.muted=!0}iu(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne="FirestoreClient";class bm{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=Ga.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async u=>{k(ne,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u}),this.appCheckCredentials.start(r,u=>(k(ne,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=li(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function _s(n,t){n.asyncQueue.verifyOperationInProgress(),k(ne,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Mu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ta(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Vm(n);k(ne,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>ma(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>ma(t.remoteStore,s)),n._onlineComponents=t}async function Vm(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){k(ne,"Using user provided OfflineComponentProvider");try{await _s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;be("Error using user provided cache. Falling back to memory cache: "+e),await _s(n,new Tr)}}else k(ne,"Using default OfflineComponentProvider"),await _s(n,new Pm(void 0));return n._offlineComponents}async function Zu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(k(ne,"Using user provided OnlineComponentProvider"),await Ta(n,n._uninitializedComponentsProvider._online)):(k(ne,"Using default OnlineComponentProvider"),await Ta(n,new Fs))),n._onlineComponents}function Dm(n){return Zu(n).then(t=>t.syncEngine)}async function km(n){const t=await Zu(n),e=t.eventManager;return e.onListen=mm.bind(null,t.syncEngine),e.onUnlisten=_m.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=pm.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ym.bind(null,t.syncEngine),e}function Nm(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,u,c,h,f){const g=new Sm({next:R=>{g.su(),u.enqueueAndForget(()=>om(o,v)),R.fromCache&&h.source==="server"?f.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(R)},error:R=>f.reject(R)}),v=new lm(c,g,{includeMetadataChanges:!0,Ta:!0});return im(o,v)}(await km(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function xm(n,t,e,r){if(t===!0&&r===!0)throw new x(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ia(n){if(!M.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wa(n){if(M.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function fi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":O()}function me(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=fi(n);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="firestore.googleapis.com",Aa=!0;class Ra{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=nl,this.ssl=Aa}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Aa;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Nu;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<af)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}xm("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ra({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ra(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Oh;switch(r.type){case"firstParty":return new Bh(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=va.get(e);r&&(k("ComponentProvider","Removing Datastore"),va.delete(e),r.terminate())}(this),Promise.resolve()}}function Mm(n,t,e,r={}){var s;const o=(n=me(n,xr))._getSettings(),u=Object.assign(Object.assign({},o),{emulatorOptions:n._getEmulatorOptions()}),c=`${t}:${e}`;o.host!==nl&&o.host!==c&&be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:c,ssl:!1,emulatorOptions:r});if(!ar(h,u)&&(n._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=_t.MOCK_USER;else{f=fc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const v=r.mockUserToken.sub||r.mockUserToken.user_id;if(!v)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new _t(v)}n._authCredentials=new Lh(new Ha(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Mr(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class Qt extends Mr{constructor(t,e,r){super(t,e,cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new M(t))}withConverter(t){return new Qt(this.firestore,t,this._path)}}function Ca(n,t,...e){if(n=Xt(n),el("collection","path",t),n instanceof xr){const r=X.fromString(t,...e);return wa(r),new Qt(n,null,r)}{if(!(n instanceof Rt||n instanceof Qt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return wa(r),new Qt(n.firestore,null,r)}}function Us(n,t,...e){if(n=Xt(n),arguments.length===1&&(t=Ga.newId()),el("doc","path",t),n instanceof xr){const r=X.fromString(t,...e);return Ia(r),new Rt(n,null,new M(r))}{if(!(n instanceof Rt||n instanceof Qt))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(X.fromString(t,...e));return Ia(r),new Rt(n.firestore,n instanceof Qt?n.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa="AsyncQueue";class Sa{constructor(t=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Lu(this,"async_queue_retry"),this.Su=()=>{const r=gs();r&&k(Pa,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=t;const e=gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Du(),this.vu(t)}enterRestrictedMode(t){if(!this.mu){this.mu=!0,this.yu=t||!1;const e=gs();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Su)}}enqueue(t){if(this.Du(),this.mu)return new Promise(()=>{});const e=new Wt;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Vu.push(t),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(t){if(!Ue(t))throw t;k(Pa,"Operation failed with retryable error: "+t)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(t){const e=this.bu.then(()=>(this.pu=!0,t().catch(r=>{this.gu=r,this.pu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw Ft("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=e,e}enqueueAfterDelay(t,e,r){this.Du(),this.wu.indexOf(t)>-1&&(e=0);const s=ui.createAndSchedule(this,t,e,r,o=>this.Fu(o));return this.fu.push(s),s}Du(){this.gu&&O()}verifyOperationInProgress(){}async Mu(){let t;do t=this.bu,await t;while(t!==this.bu)}xu(t){for(const e of this.fu)if(e.timerId===t)return!0;return!1}Ou(t){return this.Mu().then(()=>{this.fu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.fu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Mu()})}Nu(t){this.wu.push(t)}Fu(t){const e=this.fu.indexOf(t);this.fu.splice(e,1)}}class Cn extends xr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Sa,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Sa(t),this._firestoreClient=void 0,await t}}}function Om(n,t){const e=typeof n=="object"?n:wh(),r=typeof n=="string"?n:hr,s=yh(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=hc("firestore");o&&Mm(s,...o)}return s}function rl(n){if(n._terminated)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Lm(n),n._firestoreClient}function Lm(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,g){return new ed(c,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,tl(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new bm(n._authCredentials,n._appCheckCredentials,n._queue,o,n._componentsProvider&&function(c){const h=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Me(ct.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Me(ct.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=/^__.*__$/;class Um{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new In(t,this.data,e,this.fieldTransforms)}}class sl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function il(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class _i{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.Bu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(t){return new _i(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.$u(t),s}Uu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(t){return this.ku({path:void 0,Qu:!0})}Wu(t){return vr(t,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Bu(){if(this.path)for(let t=0;t<this.path.length;t++)this.$u(this.path.get(t))}$u(t){if(t.length===0)throw this.Wu("Document fields must not be empty");if(il(this.Lu)&&Fm.test(t))throw this.Wu('Document fields cannot begin and end with "__"')}}class Bm{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Dr(t)}ju(t,e,r,s=!1){return new _i({Lu:t,methodName:e,zu:r,path:lt.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ol(n){const t=n._freezeSettings(),e=Dr(n._databaseId);return new Bm(n._databaseId,!!t.ignoreUndefinedProperties,e)}function jm(n,t,e,r,s,o={}){const u=n.ju(o.merge||o.mergeFields?2:0,t,e,s);yi("Data must be an object, but it was:",u,r);const c=al(r,u);let h,f;if(o.merge)h=new At(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const v of o.mergeFields){const R=Bs(t,v,e);if(!u.contains(R))throw new x(S.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);ll(g,R)||g.push(R)}h=new At(g),f=u.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,f=u.fieldTransforms;return new Um(new It(c),h,f)}class Lr extends mi{_toFieldTransform(t){if(t.Lu!==2)throw t.Lu===1?t.Wu(`${this._methodName}() can only appear at the top level of your update data`):t.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Lr}}function qm(n,t,e,r){const s=n.ju(1,t,e);yi("Data must be an object, but it was:",s,r);const o=[],u=It.empty();re(r,(h,f)=>{const g=Ei(t,h,e);f=Xt(f);const v=s.Uu(g);if(f instanceof Lr)o.push(g);else{const R=Fr(f,v);R!=null&&(o.push(g),u.set(g,R))}});const c=new At(o);return new sl(u,c,s.fieldTransforms)}function $m(n,t,e,r,s,o){const u=n.ju(1,t,e),c=[Bs(t,r,e)],h=[s];if(o.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(Bs(t,o[R])),h.push(o[R+1]);const f=[],g=It.empty();for(let R=c.length-1;R>=0;--R)if(!ll(f,c[R])){const P=c[R];let V=h[R];V=Xt(V);const N=u.Uu(P);if(V instanceof Lr)f.push(P);else{const D=Fr(V,N);D!=null&&(f.push(P),g.set(P,D))}}const v=new At(f);return new sl(g,v,u.fieldTransforms)}function Fr(n,t){if(ul(n=Xt(n)))return yi("Unsupported field value:",t,n),al(n,t);if(n instanceof mi)return function(r,s){if(!il(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.Qu&&t.Lu!==4)throw t.Wu("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const c of r){let h=Fr(c,s.Ku(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Xt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Rd(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=nt.fromDate(r);return{timestampValue:_r(s.serializer,o)}}if(r instanceof nt){const o=new nt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_r(s.serializer,o)}}if(r instanceof pi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Me)return{bytesValue:Cu(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Wu(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Zs(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof gi)return function(u,c){return{mapValue:{fields:{[eu]:{stringValue:nu},[dr]:{arrayValue:{values:u.toArray().map(f=>{if(typeof f!="number")throw c.Wu("VectorValues must only contain numeric values.");return Qs(c.serializer,f)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${fi(r)}`)}(n,t)}function al(n,t){const e={};return Qa(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):re(n,(r,s)=>{const o=Fr(s,t.qu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function ul(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof nt||n instanceof pi||n instanceof Me||n instanceof Rt||n instanceof mi||n instanceof gi)}function yi(n,t,e){if(!ul(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=fi(e);throw r==="an object"?t.Wu(n+" a custom object"):t.Wu(n+" "+r)}}function Bs(n,t,e){if((t=Xt(t))instanceof Or)return t._internalPath;if(typeof t=="string")return Ei(n,t);throw vr("Field path arguments must be of type string or ",n,!1,void 0,e)}const zm=new RegExp("[~\\*/\\[\\]]");function Ei(n,t,e){if(t.search(zm)>=0)throw vr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Or(...t.split("."))._internalPath}catch{throw vr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${s}`),h+=")"),new x(S.INVALID_ARGUMENT,c+n+h)}function ll(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Hm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(hl("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Hm extends cl{data(){return super.data()}}function hl(n,t){return typeof t=="string"?Ei(n,t):t instanceof Or?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Km(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gm{convertValue(t,e="none"){switch(te(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Zt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return re(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var e,r,s;const o=(s=(r=(e=t.fields)===null||e===void 0?void 0:e[dr].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(u=>Z(u.doubleValue));return new gi(o)}convertGeoPoint(t){return new pi(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ar(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=Jt(t);return new nt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=X.fromString(t);z(ku(r));const s=new yn(r.get(1),r.get(3)),o=new M(r.popFirst(5));return s.isEqual(e)||Ft(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,t,e){let r;return r=n?n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qm extends cl{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ir(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(hl("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class ir extends Qm{data(t={}){return super.data(t)}}class Xm{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Jn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ir(this._firestore,this._userDataWriter,r.key,r,new Jn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Jn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new ir(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Jn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),g=u.indexOf(c.doc.key)),{type:Ym(c.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Ym(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}class Jm extends Gm{constructor(t){super(),this.firestore=t}convertBytes(t){return new Me(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function Zm(n){n=me(n,Mr);const t=me(n.firestore,Cn),e=rl(t),r=new Jm(t);return Km(n._query),Nm(e,n._query).then(s=>new Xm(t,r,n,s))}function tp(n,t,e,...r){n=me(n,Rt);const s=me(n.firestore,Cn),o=ol(s);let u;return u=typeof(t=Xt(t))=="string"||t instanceof Or?$m(o,"updateDoc",n._key,t,e,r):qm(o,"updateDoc",n._key,t),Ti(s,[u.toMutation(n._key,Pt.exists(!0))])}function ep(n){return Ti(me(n.firestore,Cn),[new Xs(n._key,Pt.none())])}function np(n,t){const e=me(n.firestore,Cn),r=Us(n),s=Wm(n.converter,t);return Ti(e,[jm(ol(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Pt.exists(!1))]).then(()=>r)}function Ti(n,t){return function(r,s){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>Em(await Dm(r),s,o)),o.promise}(rl(n),t)}(function(t,e=!0){(function(s){Le=s})(Ih),lr(new mn("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Cn(new Fh(r.getProvider("auth-internal")),new jh(u,r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(f.options.projectId,g)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),Pe(No,xo,t),Pe(No,xo,"esm2017")})();const rp={apiKey:"AIzaSyCDnLKagpCn0FkSo47sbFkzJjoMa6iQggc",authDomain:"escuela-944d0.firebaseapp.com",projectId:"escuela-944d0",storageBucket:"escuela-944d0.firebasestorage.app",messagingSenderId:"381881184935",appId:"1:381881184935:web:edbfd666bab40df00a6182",measurementId:"G-XNJNQ560JK"},sp=Oa(rp),Zn=Om(sp);class sn{static async getItems(t){try{const e=Ca(Zn,t);return(await Zm(e)).docs.map(o=>({id:o.id,data:o.data()}))}catch(e){console.error("Error getting documents: ",e)}}static async addItem(t,e){try{const r=Ca(Zn,t),s=await np(r,e);console.log("documento agregado con ID: ",s.id,e)}catch(r){console.error("Error adding document: ",r)}}static async updateItem(t,e,r){try{const s=Us(Zn,t,e);await tp(s,r),console.log("documento actualizado con ID: ",e,r)}catch(s){console.error("Error updating document: ",s)}}static async remItem(t,e){try{const r=Us(Zn,t,e);await ep(r),console.log("documento eliminado con éxito")}catch(r){console.error("Error al eliminar documento: ",r)}}}const ip={class:"d-flex justify-content-center align-items-center vh-100"},op={class:"card p-5"},ap={class:"mb-3"},up={class:"table table-bordered my-3"},lp=["disabled","onClick"],cp=["disabled","onClick"],on="items",fp=Gl({__name:"Firebase",setup(n){let t=Kn([]),e=Kn(""),r=Kn(null),s=Kn(!1);Wl(()=>{sn.getItems(on).then(v=>{t.value=v})});function o(){sn.getItems(on).then(v=>{t.value=v})}function u(){let v={nombre:e.value};if(e.value===""){alert("El campo no puede estar vacío");return}sn.addItem(on,v).then(()=>{o()}),e.value=""}function c(v){sn.remItem(on,v).then(()=>{o()})}function h(v){e.value=v.data.nombre,r.value=v.id,s.value=!0}function f(){sn.updateItem(on,r.value,{nombre:e.value}).then(()=>{o()}),s.value=!1,r.value=null,e.value=""}function g(){s.value=!1}return(v,R)=>(Ie(),ve("div",ip,[pt("div",null,[R[3]||(R[3]=pt("h1",{class:"text-center"},"Bienvenido a la página Firebase",-1)),pt("div",op,[pt("div",ap,[R[1]||(R[1]=pt("label",{for:"inputTexto",class:"form-label"},"Ingrese un nombre",-1)),Ql(pt("input",{"onUpdate:modelValue":R[0]||(R[0]=P=>Yl(e)?e.value=P:e=P),type:"text",class:"form-control",id:"inputTexto",required:""},null,512),[[Xl,le(e)]])]),le(s)?ls("",!0):(Ie(),ve("button",{key:0,onClick:u,class:"btn btn-primary"},"Enviar")),le(s)?(Ie(),ve("button",{key:1,onClick:f,class:"btn btn-secondary"},"Guardar")):ls("",!0),le(s)?(Ie(),ve("button",{key:2,onClick:g,class:"btn btn-danger my-1"},"Cancelar")):ls("",!0)]),pt("table",up,[R[2]||(R[2]=pt("thead",null,[pt("tr",null,[pt("th",{scope:"col"},"Nombre"),pt("th",{scope:"col"},"Funciones")])],-1)),pt("tbody",null,[(Ie(!0),ve(Jl,null,Zl(le(t),(P,V)=>(Ie(),ve("tr",{key:V},[pt("td",null,tc(P.data.nombre),1),pt("td",null,[pt("button",{disabled:le(s),onClick:N=>h(P),class:"btn btn-success me-2"},"E",8,lp),pt("button",{disabled:le(s),onClick:N=>c(P.id),class:"btn btn-danger"},"X",8,cp)])]))),128))])])])]))}});export{fp as default};
