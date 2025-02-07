function t(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=globalThis,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;let r=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new r("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:c,defineProperty:h,getOwnPropertyDescriptor:d,getOwnPropertyNames:l,getOwnPropertySymbols:p,getPrototypeOf:u}=Object,m=globalThis,g=m.trustedTypes,f=g?g.emptyScript:"",y=m.reactiveElementPolyfillSupport,v=(t,e)=>t,$={toAttribute(t,e){switch(e){case Boolean:t=t?f:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},_=(t,e)=>!c(t,e),b={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=b){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&h(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=d(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const r=s?.call(this);n.call(this,e),this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??b}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const t=u(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const t=this.properties,e=[...l(t),...p(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{if(i)t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of s){const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:$;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??_)(this[t],e))return;this.P(t,e,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.P(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EC(t,this[t]))),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[v("elementProperties")]=new Map,A[v("finalized")]=new Map,y?.({ReactiveElement:A}),(m.reactiveElementVersions??=[]).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,C=w.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:t=>t}):void 0,x="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,O="?"+S,k=`<${O}>`,P=document,M=()=>P.createComment(""),U=t=>null===t||"object"!=typeof t&&"function"!=typeof t,j=Array.isArray,H="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,R=/>/g,z=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),L=/'/g,I=/"/g,B=/^(?:script|style|textarea|title)$/i,D=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),V=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),q=new WeakMap,F=P.createTreeWalker(P,129);function J(t,e){if(!j(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(e):e}const K=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":3===e?"<math>":"",o=T;for(let e=0;e<i;e++){const i=t[e];let a,c,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,c=o.exec(i),null!==c);)d=o.lastIndex,o===T?"!--"===c[1]?o=N:void 0!==c[1]?o=R:void 0!==c[2]?(B.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=z):void 0!==c[3]&&(o=z):o===z?">"===c[0]?(o=n??T,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,a=c[1],o=void 0===c[3]?z:'"'===c[3]?I:L):o===I||o===L?o=z:o===N||o===R?o=T:(o=z,n=void 0);const l=o===z&&t[e+1].startsWith("/>")?" ":"";r+=o===T?i+k:h>=0?(s.push(a),i.slice(0,h)+x+i.slice(h)+S+l):i+S+(-2===h?e:l)}return[J(t,r+(t[i]||"<?>")+(2===e?"</svg>":3===e?"</math>":"")),s]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[c,h]=K(t,e);if(this.el=X.createElement(c,i),F.currentNode=this.el.content,2===e||3===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=F.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(x)){const e=h[r++],i=s.getAttribute(t).split(S),o=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:o[2],strings:i,ctor:"."===o[1]?tt:"?"===o[1]?et:"@"===o[1]?it:Q}),s.removeAttribute(t)}else t.startsWith(S)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(B.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=C?C.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],M()),F.nextNode(),a.push({type:2,index:++n});s.append(t[e],M())}}}else if(8===s.nodeType)if(s.data===O)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function Y(t,e,i=t,s){if(e===V)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=U(e)?void 0:e._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Y(t,n._$AS(t,e.values),n,s)),e}class Z{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);F.currentNode=s;let n=F.nextNode(),r=0,o=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new G(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new st(n,this,t)),this._$AV.push(e),a=i[++o]}r!==a?.index&&(n=F.nextNode(),r++)}return F.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),U(t)?t===W||null==t||""===t?(this._$AH!==W&&this._$AR(),this._$AH=W):t!==this._$AH&&t!==V&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>j(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==W&&U(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=X.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.T(i),this._$AH=t}}_$AC(t){let e=q.get(t.strings);return void 0===e&&q.set(t.strings,e=new X(t)),e}k(t){j(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new G(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=Y(this,t,e,0),r=!U(t)||t!==this._$AH&&t!==V,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=Y(this,s[i+o],e,o),a===V&&(a=this._$AH[o]),r||=!U(a)||a!==this._$AH[o],a===W?t=W:t!==W&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class tt extends Q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}}class et extends Q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}}class it extends Q{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??W)===V)return;const i=this._$AH,s=t===W&&i!==W||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==W&&(i===W||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class st{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const nt=w.litHtmlPolyfillSupport;nt?.(X,G),(w.litHtmlVersions??=[]).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let rt=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new G(e.insertBefore(M(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};rt._$litElement$=!0,rt.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:rt});const ot=globalThis.litElementPolyfillSupport;ot?.({LitElement:rt}),(globalThis.litElementVersions??=[]).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at=t=>(e,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(t,e)})):customElements.define(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ct={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:_},ht=(t=ct,e,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),r.set(i.name,t),"accessor"===s){const{name:s}=i;return{set(i){const n=e.get.call(this);e.set.call(this,i),this.requestUpdate(s,n,t)},init(e){return void 0!==e&&this.P(s,void 0,t),e}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];e.call(this,i),this.requestUpdate(s,n,t)}}throw Error("Unsupported decorator location: "+s)};function dt(t){return(e,i)=>"object"==typeof i?ht(t,e,i):((t,e,i)=>{const s=e.hasOwnProperty(i);return e.constructor.createProperty(i,s?{...t,wrapped:!0}:t),s?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}const lt=(t,e,i,s)=>{s=s||{},i=null==i?{}:i;const n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n};class pt{static domain(t){return t.substring(0,t.indexOf("."))}static isActiveState(t){const e=t.state;switch(pt.domain(t.entity_id)){case"group":return["on","home","open","locked","problem"].includes(e);case"automation":case"fan":case"light":case"switch":return"on"==e;case"alarm_control_panel":return"disarmed"!=e;case"alert":return"idle"!=e;case"camera":return"streaming"==e;case"climate":return"off"!=e;case"cover":return"closed"!=e;case"device_tracker":case"person":return"not_home"!=e;case"lock":return"locked"!=e;case"media_player":return"standby"!=e;case"plant":return"problem"==e;case"timer":return"active"==e;case"vacuum":return!["idle","docked","paused"].includes(e);default:return!0}}static stateColor(t){const e=t.state;switch(pt.domain(t.entity_id)){case"automation":if(pt.isActiveState(t))return"var(--green-color)";break;case"climate":switch(e){case"auto":return"var(--amber-color)";case"heat":return"var(--red-color)";case"cool":return"var(--blue-color)";case"dry":return"var(--brown-color)";case"fan_only":return"var(--light-blue-color)"}break;case"cover":if(pt.isActiveState(t))return"var(--purple-color)";break;case"fan":if(pt.isActiveState(t))return"var(--cyan-color)";break;case"light":if(pt.isActiveState(t))return t.attributes.rgb_color?`rgb(${t.attributes.rgb_color.join(",")})`:"var(--amber-color)";break;case"switch":if(pt.isActiveState(t))return"var(--light-green-color)"}return"var(--state-icon-color)"}static showMoreInfo(t,e){lt(t,"hass-more-info",{entityId:e,view:"info"})}static toggleMenu(t){lt(t,"hass-toggle-menu")}static navigate(t){history.pushState(null,"",t),window.dispatchEvent(new CustomEvent("location-changed"))}}let ut=class extends rt{get title2(){var t,e,i;return(null===(t=this.config)||void 0===t?void 0:t.title)?this.config.title:(null===(e=this.config)||void 0===e?void 0:e.title_entity)?null===(i=this.hass)||void 0===i?void 0:i.states[this.config.title_entity].state:""}get subtitle(){var t,e,i;return(null===(t=this.config)||void 0===t?void 0:t.subtitle)?this.config.subtitle:(null===(e=this.config)||void 0===e?void 0:e.subtitle_entity)?null===(i=this.hass)||void 0===i?void 0:i.states[this.config.subtitle_entity].state:""}render(){return D`
      <ha-card>
        <div id="title">${this.title2}</div>
        <div id="subtitle">${this.subtitle}</div>
      </ha-card>
    `}showMoreInfo(t){pt.showMoreInfo(this,t)}setConfig(t){this.config=t}getCardSize(){return 2}getLayoutOptions(){return{grid_columns:"full",grid_rows:12,grid_max_rows:1.5}}static getStubConfig(){return{title:["Hello"],subtitle:["It's nice outside!"]}}static get styles(){return o`
      ha-card {
        height: 100% !important;
        padding: 2px 8px;
        background: none;
        box-shadow: none;
        border: none;
        cursor: default;
      }
      #title {
        margin: 20px 0px;
        font-weight: normal;
        font-size: xx-large;
      }
      #subtitle {
        margin: 8px 0px;
        font-weight: 500;
        font-size: large;
        color: var(--secondary-text-color);
      }
    `}};t([dt({type:Object})],ut.prototype,"hass",void 0),t([dt({type:Object})],ut.prototype,"config",void 0),ut=t([at("modern-header-card")],ut);const mt=[{name:"statusbar",type:"boolean"}];let gt=class extends rt{constructor(){super(...arguments),this.computeLabel=t=>"statusbar"===t.name?"Display as a statusbar":this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}render(){return this.hass&&this.config?D`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${mt}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `:W}valueChanged(t){lt(this,"config-changed",{config:t.detail.value})}setConfig(t){this.config=t}};t([dt({type:Object})],gt.prototype,"hass",void 0),t([dt({type:Object})],gt.prototype,"config",void 0),gt=t([at("modern-chip-card-editor")],gt);let ft=class extends rt{render(){return D`
      <ha-card>
        <div id="chips" ?statusbar=${this.config.statusbar}>
            ${this.config.chips.map((t=>this.renderChip(t)))}
        </div>
      </ha-card>
    `}renderChip(t){switch(t.type){case"message":return this.renderMessageChip(t);case"entity":return this.renderEntityChip(t);case"action":return this.renderActionChip(t);case"back":return this.renderBackChip();case"menu":return this.renderMenuChip();case"spacer":return this.renderSpacerChip();default:return D`<span class="chip not-found">?</span>`}}renderMessageChip(t){var e;const i=null===(e=this.hass)||void 0===e?void 0:e.states[t.entity];return i?D`
      <span class="chip" style="cursor: default">
        ${this.statusForEntity(i)}
      </span>
    `:D`<span class="chip not-found">${t.entity}</span>`}renderEntityChip(t){var e;const i=null===(e=this.hass)||void 0===e?void 0:e.states[t.entity];return i?D`
      <span class="chip" @click=${()=>this.onEntityChipClicked(t)}>
        <ha-state-icon
          class="icon"
          .state=${i}
          .stateObj=${i}
          .hass=${this.hass}
          ?data-domain=${pt.domain(i.entity_id)}
        ></ha-state-icon>
        <span class="label">${this.statusForEntity(i)}</span>
      </span>
    `:D`<span class="chip not-found">${t.entity}</span>`}renderActionChip(t){return D`
      <span class="chip" @click=${()=>this.onActionChipClicked(t)}>
        <ha-icon
          class="icon"
          icon=${t.icon||"mdi:star"}
        ></ha-icon>
      </span>
    `}renderBackChip(){return D`
      <span class="chip" @click=${()=>history.back()}>
        <ha-icon 
          class="icon"
          icon="mdi:arrow-left"
        ></ha-icon>
      </span>
    `}renderMenuChip(){return D`
      <span class="chip" @click=${()=>pt.toggleMenu(this)}>
        <ha-icon
          class="icon"
          icon="mdi:menu"
        ></ha-icon>
      </span>
    `}renderSpacerChip(){return D`
      <span class="chip spacer"></span>
    `}statusForEntity(t){return"scene"===pt.domain(t.entity_id)?t.attributes.friendly_name||t.entity_id:this.hass.formatEntityState(t)}onEntityChipClicked(t){if("scene"===pt.domain(t.entity))this.hass.callService("scene","turn_on",{entity_id:t.entity});else pt.showMoreInfo(this,t.entity)}onActionChipClicked(t){if("navigate"===t.action)t.url&&pt.navigate(t.url)}setConfig(t){this.config=t}getCardSize(){return 1}getLayoutOptions(){return{grid_columns:"full",grid_rows:1.5,grid_max_rows:1.5}}static async getConfigElement(){return document.createElement("modern-chip-card-editor")}static async getStubConfig(t){return{chips:[{type:"entity",entity:"sun.sun"}],statusbar:!1}}static get styles(){return o`
      ha-card {
        height: 100% !important;
        padding: 2px 0px;
        background: none;
        box-shadow: none;
        border: none;
      }
      #chips {
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: nowrap;
        cursor: default;
      }
      .chip {
        margin: 8px 8px;
        font-size: medium;
        font-weight: 600;
        white-space: nowrap;
        cursor: pointer;
      }
      #chips:not([statusbar]) .chip {
        font-size: large;
        border-radius: 3vw;
        background: var(--ha-card-background);
        box-shadow: var(--ha-card-box-shadow);
        padding: 16px 16px;
        margin: 0px 4px;
      }
      #chips:not([statusbar]) .chip:first-child {
        margin-left: 0px;
      }
      #chips:not([statusbar]) .chip:active {
        filter: invert(1);
        transition: none;
      }
      .chip .icon {
        --mdc-icon-size: 24px;
      }
      .chip .label {
        margin-left: 4px;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .spacer {
        flex-grow: 1;
      }
      .not-found {
        color: var(--disabled-text-color);
        cursor: default;
      }
    `}};t([dt({type:Object})],ft.prototype,"hass",void 0),t([dt({type:Object})],ft.prototype,"config",void 0),ft=t([at("modern-chip-card")],ft);class yt extends rt{get name(){return"Unnamed"}get status(){return"–"}get iconColor(){return"var(--state-icon-color)"}getCardSize(){return 2}getLayoutOptions(){return{grid_columns:2.5,grid_min_columns:1,grid_rows:4,grid_min_rows:3}}static get styles(){return o`
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      @keyframes hoverIn {
        0% {
          transform: translateY(-20px);
          opacity: 0;
        }
        100% {
          transform: translateX(0);
          opacity: 1;
        }
      }
      ha-card {
        height: 100% !important;
        padding: 16px;
        cursor: pointer;
        overflow: hidden;
        animation: 250ms ease-out 0s 1 hoverIn;
        border: none;
      }
      ha-card:active {
        filter: invert(1);
        transition: none;
      }
      #content {
        display: grid;
        height: 100%;
        grid-template:
          'icon icon'
          'name name'
          'status status';
        grid-template-columns: 1fr min-content;
        grid-template-rows: 1fr min-content min-content;
      }
      #icon {
        grid-area: icon;
        --mdc-icon-size: 48px;
      }
      ha-state-icon[rotating] {
        animation: spin 1s linear infinite;
        display: inline-flex;
      }
      #name {
        grid-area: name;
        font-size: x-large;
        font-weight: 500;
        padding: 8px 0px;
        border-top: 2px dotted var(--disabled-text-color);
        border-bottom: 2px dotted var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      #status {
        grid-area: status;
        font-size: large;
        line-height: large;
        font-weight: 400;
        padding-top: 8px;
        color: var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    `}}t([dt({type:Object})],yt.prototype,"hass",void 0);const vt=[{name:"area",selector:{area:{}}},{name:"path",selector:{navigation:{}}},{name:"temperature_sensor",selector:{entity:{domain:["sensor"],filter:{device_class:["temperature"]}}}},{name:"humidity_sensor",selector:{entity:{domain:["sensor"],filter:{device_class:["humidity"]}}}}];let $t=class extends rt{constructor(){super(...arguments),this.computeLabel=t=>{switch(t.name){case"area":return"Area";case"path":return"Navigation Path";case"temperature_sensor":return"Temperature Sensor";case"humidity_sensor":return"Humidity Sensor"}return this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}}render(){return this.hass&&this.config?D`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${vt}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `:W}valueChanged(t){lt(this,"config-changed",{config:t.detail.value})}setConfig(t){this.config=t}};t([dt({type:Object})],$t.prototype,"hass",void 0),t([dt({type:Object})],$t.prototype,"config",void 0),$t=t([at("modern-area-card-editor")],$t);let _t=class extends yt{get icon(){return this.hass.areas[this.config.area].icon||"mdi:texture-box"}get name(){return this.hass.areas[this.config.area].name||"?"}get status(){const t=[];if(this.config.temperature_sensor&&null!=this.hass.states[this.config.temperature_sensor]){const e=this.hass.states[this.config.temperature_sensor];e&&t.push(this.hass.formatEntityState(e))}if(this.config.humidity_sensor&&null!=this.hass.states[this.config.humidity_sensor]){const e=this.hass.states[this.config.humidity_sensor];e&&t.push(this.hass.formatEntityState(e))}return 0==t.length&&t.push("Area"),t.join(" • ")}onCardClicked(t){pt.navigate(this.config.path)}render(){return D`
      <ha-card @click=${this.onCardClicked}>
        <div id="content">
          <div id="icon">
            <ha-icon
              icon=${this.icon}
              style="color: ${this.iconColor};"
            ></ha-icon>
          </div>
          <div id="name">${this.name}</div>
          <div id="status">${this.status}</div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.area)throw new Error("No area defined");this.config=t}static async getConfigElement(){return document.createElement("modern-area-card-editor")}static async getStubConfig(t){return{area:"kitchen"}}};t([dt({type:Object})],_t.prototype,"config",void 0),_t=t([at("modern-area-card")],_t);const bt=[{name:"entity",selector:{entity:{}}}];let At=class extends rt{constructor(){super(...arguments),this.computeLabel=t=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}render(){return this.hass&&this.config?D`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${bt}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `:W}valueChanged(t){lt(this,"config-changed",{config:t.detail.value})}setConfig(t){this.config=t}};t([dt({type:Object})],At.prototype,"hass",void 0),t([dt({type:Object})],At.prototype,"config",void 0),At=t([at("modern-entity-card-editor")],At);let wt=class extends yt{get entity(){return this.hass.states[this.config.entity]}get domain(){return pt.domain(this.config.entity)}get name(){const t=this.entity.attributes.friendly_name;let e=null;if(t){const i=this.hass.entities[this.config.entity];if(i.area_id)e=i.area_id;else if(i.device_id){e=this.hass.devices[i.device_id].area_id}if(e){const i=this.hass.areas[e];if(i&&t!=i.name)return t.replace(i.name+" ","")}}return t||this.entity.entity_id}get status(){var t,e;const i=pt.isActiveState(this.entity);switch(this.domain){case"climate":if(i&&"fan_only"!=(null===(t=this.entity)||void 0===t?void 0:t.state))return`${this.hass.formatEntityState(this.entity)} • ${this.hass.formatEntityAttributeValue(this.entity,"temperature")}`;break;case"cover":if("open"==(null===(e=this.entity)||void 0===e?void 0:e.state))return`${this.hass.formatEntityState(this.entity)} • ${this.hass.formatEntityAttributeValue(this.entity,"current_position")}`;break;case"fan":if(i)return this.hass.formatEntityAttributeValue(this.entity,"percentage");break;case"light":if(i&&this.entity.attributes.brightness)return this.hass.formatEntityAttributeValue(this.entity,"brightness")}return this.hass.formatEntityState(this.entity)}get iconColor(){return pt.stateColor(this.entity)}get isRotating(){return"fan"==this.domain&&pt.isActiveState(this.entity)}onCardClicked(t){pt.showMoreInfo(this,this.config.entity)}onIconClicked(t){switch(this.domain){case"automation":case"cover":case"fan":case"light":case"switch":t.stopPropagation(),this.hass.callService("homeassistant","toggle",{entity_id:this.entity.entity_id})}}render(){return D`
      <ha-card @click=${this.onCardClicked}>
        <div id="content">
          <div id="icon">
            <ha-state-icon
              .state=${this.entity}
              .stateObj=${this.entity}
              .hass=${this.hass}
              ?data-domain=${this.domain}
              ?rotating=${this.isRotating}
              @click=${this.onIconClicked}
              style="color: ${this.iconColor};"
            ></ha-state-icon>
          </div>
          <div id="name">${this.name}</div>
          <div id="status">${this.status}</div>
        </div>
      </ha-card>
    `}setConfig(t){if(!t.entity)throw new Error("No entity defined");this.config=t}static async getConfigElement(){return document.createElement("modern-entity-card-editor")}static async getStubConfig(t){return{entity:"sun.sun"}}};t([dt({type:Object})],wt.prototype,"config",void 0),wt=t([at("modern-entity-card")],wt);const Ct=[{name:"entity",selector:{entity:{domain:["weather"]}}}];let Et=class extends rt{constructor(){super(...arguments),this.computeLabel=t=>this.hass.localize(`ui.panel.lovelace.editor.card.generic.${t.name}`)}render(){return this.hass&&this.config?D`
      <ha-form
        .hass=${this.hass}
        .data=${this.config}
        .schema=${Ct}
        .computeLabel=${this.computeLabel}
        @value-changed=${this.valueChanged}
      ></ha-form>
    `:W}valueChanged(t){lt(this,"config-changed",{config:t.detail.value})}setConfig(t){this.config=t}};t([dt({type:Object})],Et.prototype,"hass",void 0),t([dt({type:Object})],Et.prototype,"config",void 0),Et=t([at("modern-weather-card-editor")],Et);let xt=class extends yt{get entity(){return this.hass.states[this.config.entity]}get domain(){return pt.domain(this.config.entity)}get name(){return this.entity.attributes.friendly_name||this.entity.entity_id}get conditions(){return this.hass.formatEntityState(this.entity)}get temperature(){return this.hass.formatEntityAttributeValue(this.entity,"temperature")}get humidity(){return this.hass.formatEntityAttributeValue(this.entity,"humidity")}get windSpeed(){return this.hass.formatEntityAttributeValue(this.entity,"wind_speed")}get windBearing(){return this.hass.formatEntityAttributeValue(this.entity,"wind_bearing")}get pressure(){return this.hass.formatEntityAttributeValue(this.entity,"pressure")}onCardClicked(t){pt.showMoreInfo(this,this.config.entity)}render(){return D`
      <ha-card @click=${window.close}>
        <div id="content">
          <div id="icon">
            <!-- <ha-state-icon
              .state=${this.entity}
              .stateObj=${this.entity}
              .hass=${this.hass}
              ?data-domain=${this.domain}
              style="color: ${this.iconColor};"
            ></ha-state-icon> -->
          </div>
          <div id="conditions">${this.conditions}</div>
          <div id="name">${this.name}</div>
          <div>${this.temperature}</div>
          <div>${this.humidity}</div>
          <div>${this.windSpeed} ${this.windBearing}</div>
          <div>${this.pressure}</div>
        </div>
      </ha-card>
    `}getLayoutOptions(){return{grid_columns:4,grid_min_columns:4,grid_max_columns:4,grid_rows:4,grid_min_rows:4,grid_max_rows:4}}setConfig(t){if(!t.entity)throw new Error("No entity defined");this.config=t}static async getConfigElement(){return document.createElement("modern-weather-card-editor")}static async getStubConfig(t){return{entity:"weather.forecast_home"}}static get styles(){return o`
        @keyframes hoverIn {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        ha-card {
          height: 100% !important;
          padding: 16px;
          cursor: pointer;
          overflow: hidden;
          animation: 250ms ease-out 0s 1 hoverIn;
          border: none;
        }
        ha-card:active {
          filter: invert(1);
          transition: none;
        }
        #content {
          display: grid;
          height: 100%;
          grid-template:
            'icon icon'
            'name name'
            'conditions conditions';
          grid-template-columns: 1fr min-content;
          grid-template-rows: 1fr min-content min-content;
        }
        #icon {
          grid-area: icon;
          --mdc-icon-size: 32px;
        }
        #name {
        grid-area: name;
        font-size: x-large;
        font-weight: 500;
        padding: 8px 0px;
        border-top: 2px dotted var(--disabled-text-color);
        border-bottom: 2px dotted var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      #conditions {
        grid-area: conditions;
        font-size: large;
        line-height: large;
        font-weight: 400;
        padding-top: 8px;
        color: var(--disabled-text-color);
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      `}};t([dt({type:Object})],xt.prototype,"config",void 0),xt=t([at("modern-weather-card")],xt);console.log("Modern UI Cards v0.1.0 loaded.");const St=window;St.customCards=St.customCards||[],St.customCards.push({type:"modern-status-bar",name:"Modern Status Bar",preview:!0,description:"A modern status bar card"}),St.customCards.push({type:"modern-header-card",name:"Modern Header card",preview:!0,description:"A modern header card"}),St.customCards.push({type:"modern-chip-card",name:"Modern Chip Card",preview:!0,description:"A modern chip card"}),St.customCards.push({type:"modern-area-card",name:"Modern Area Card",preview:!0,description:"A modern area card"}),St.customCards.push({type:"modern-entity-card",name:"Modern Entity Card",preview:!0,description:"A modern entity card"}),St.customCards.push({type:"modern-weather-card",name:"Modern Weather Card",preview:!0,description:"A modern weather card"});export{_t as AreaCard,ft as ChipCard,wt as EntityCard,ut as HeaderCard,xt as WeatherCard};
