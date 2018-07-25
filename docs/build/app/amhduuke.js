/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{a as e,b as n,c as i}from"./chunk-c6be03a7.js";import{a as o}from"./chunk-12dfa9dd.js";class s{constructor(){this.searchByName="page-home"}getNav(){return this.el.querySelector("ion-nav")}setPage(t){this.searchByName!==t&&(this.getNav().setRoot(t),this.searchByName=t)}setByName(){this.setPage("page-home")}setByFreq(){this.setPage("page-range")}render(){return t("ion-app",null,t("ion-router",{useHash:!0},t("ion-route-redirect",{from:"/",to:"by_name"}),t("ion-route",{url:"by_name",component:"page-home"}),t("ion-route",{url:"by_freq",component:"page-range"})),",",t("ion-split-pane",null,t("ion-menu",null,t("ion-header",null,t("ion-toolbar",{color:"dark"},t("ion-title",null,"CNAF app"))),t("ion-content",null,t("ion-list",null,t("ion-item",{href:"by_name"},"Buscar por nombre"),t("ion-item",{href:"by_freq"},"Buscar por banda")))),t("ion-router-outlet",{main:!0})))}static get is(){return"my-app"}static get properties(){return{el:{elementRef:!0}}}}function r(t){return function(t,e,n=!1){return t.matchMedia?t.matchMedia("(any-pointer:coarse)").matches:n}(t)}class a{componentDidLoad(){!async function(t,e){e.getBoolean("inputShims",function(t){return function(t){return function(t,e){return/iPad|iPhone|iPod/i.test(t.navigator.userAgent)}(t)}(t)&&r(t)}(t))&&(await import("./input-shims.js")).startInputShims(t.document,e)}(this.win,this.config),async function(t,e,n){e.getBoolean("isDevice",r(t))&&(await import("./status-tap.js")).startStatusTap(t,n)}(this.win,this.config,this.queue)}hostData(){const t=function(t){const e=t;return!!(e.cordova||e.phonegap||e.PhoneGap)}(e=this.win)||function(t){const n=e.Capacitor;return!(!n||!n.isNative)}();var e;return{class:{"statusbar-padding":this.config.getBoolean("statusbarPadding",t)}}}render(){return[t("ion-tap-click",null),t("slot",null)]}static get is(){return"ion-app"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return".ion-page,ion-app,ion-nav,ion-router-outlet,ion-tab,ion-tabs{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.ion-page,ion-app{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.ion-page-invisible{opacity:0}.ion-page-hidden{display:none!important}ion-action-sheet-controller,ion-alert-controller,ion-animation-controller,ion-loading-controller,ion-menu-controller,ion-modal-controller,ion-nav-controller,ion-picker-controller,ion-route,ion-route-redirect,ion-router,ion-tap-click,ion-toast-controller{display:none}"}}function c(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}const l=8;function h(t,e,n){let i,o;const s=n.width+l;n.isEndSide?(i=s+"px",o="0px"):(i=-s+"px",o="0px");const r=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,o),a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.3);return c(t).then(t=>t.add(r).add(a))}function u(t,e,n){let i,o;const s=n.width;n.isEndSide?(i=-s+"px",o=s+"px"):(i=s+"px",o=-s+"px");const r=(new t).addElement(n.menuInnerEl).fromTo("translateX",o,"0px"),a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),l=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.2);return c(t).then(t=>t.add(r).add(l).add(a))}function d(t,e,n){const i=n.width*(n.isEndSide?-1:1)+"px",o=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return c(t).then(t=>t.add(o))}class m{constructor(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",d),this.registerAnimation("push",u),this.registerAnimation("overlay",h)}open(t){const e=this.get(t);return e?e.open():Promise.resolve(!1)}close(t){const e=t?this.get(t):this.getOpen();return e?e.close():Promise.resolve(!1)}toggle(t){const e=this.get(t);return e?e.toggle():Promise.resolve(!1)}enable(t,e){const n=this.get(e);return n&&(n.disabled=!t),n}swipeEnable(t,e){const n=this.get(e);return n&&(n.swipeEnabled=t),n}isOpen(t){if(t){const e=this.get(t);return e&&e.isOpen()||!1}return!!this.getOpen()}isEnabled(t){const e=this.get(t);return!!e&&!e.disabled}get(t){if("left"===t)return console.error('menu.side=left is deprecated, use "start" instead'),null;if("right"===t)return console.error('menu.side=right is deprecated, use "end" instead'),null;if("start"===t||"end"===t){return this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t)||null}if(t)return this.find(e=>e.menuId===t)||null;return this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:null)}getOpen(){return this.find(t=>t.isOpen())}getMenus(){return this.menus.map(t=>t.el)}isAnimating(){return this.menus.some(t=>t.isAnimating)}_register(t){this.menus.indexOf(t)<0&&this.menus.push(t)}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(n=>n.side===e&&n!==t).forEach(t=>t.disabled=!0)}_setOpen(t,e,n){if(this.isAnimating())return Promise.resolve(!1);if(e){const e=this.getOpen();e&&t.el!==e&&e.setOpen(!1,!1)}return t._setOpen(e,n)}createAnimation(t,e){const n=this.menuAnimations.get(t);return n?this.animationCtrl.create(n,null,e):Promise.reject("animation not registered")}registerAnimation(t,e){this.menuAnimations.set(t,e)}find(t){const e=this.menus.find(t);return e?e.el:null}static get is(){return"ion-menu-controller"}static get properties(){return{_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},createAnimation:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeEnable:{method:!0},toggle:{method:!0}}}}class p{constructor(){this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],i=e?Object.keys(e):[];if(n.length===i.length)for(let i=0;i<n.length;i++){const o=n[i];if(t[o]!==e[o])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get is(){return"ion-route"}static get properties(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}}static get events(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]}}class f{constructor(){this.from=""}componentDidLoad(){this.ionRouteRedirectChanged.emit()}componentDidUnload(){this.ionRouteRedirectChanged.emit()}componentDidUpdate(){this.ionRouteRedirectChanged.emit()}static get is(){return"ion-route-redirect"}static get properties(){return{from:{type:String,attr:"from"},to:{type:String,attr:"to"}}}static get events(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]}}function g(t){return"/"+t.filter(t=>t.length>0).join("/")}function b(t){if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e}const v=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function w(t){if(!t)return;if(t.matches(v))return t;return t.querySelector(v)||void 0}function y(t,e){return e.find(e=>(function(t,e){const{from:n,to:i}=e;if(void 0===i)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const i=n[e];if("*"===i)return!0;if(i!==t[e])return!1}return n.length===t.length})(t,e))}function C(t,e){const n=Math.min(t.length,e.length);let i=0;for(;i<n&&t[i].toLowerCase()===e[i].id;i++);return i}function R(t,e){const n=new S(t);let i=!1,o=void 0;for(let t=0;t<e.length;t++){const s=e[t].path;if(""===s[0])i=!0;else{for(const e of s){const i=n.next();if(":"===e[0]){if(""===i)return null;((o=o||[])[t]||(o[t]={}))[e.slice(1)]=i}else if(i!==e)return null}i=!1}}return i&&i!==(""===n.next())?null:o?e.map((t,e)=>({id:t.id,path:t.path,params:E(t.params,o[e])})):e}function E(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function D(t){let e=1,n=1;for(const i of t)for(const t of i.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e}class S{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}function A(t){return Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=x(t,"to");return{from:b(x(t,"from")),to:null==e?void 0:b(e)}})}function P(t){return function(t){const e=[];for(const n of t)L([],e,n);return e}(function t(e,n=e){return Array.from(n.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(n=>{const i=x(n,"component");if(!i)throw new Error("component missing in ion-route");return{path:b(x(n,"url")),id:i.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function x(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function L(t,e,n){const i=t.slice();if(i.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const t of n.children)L(i,e,t);else e.push(i)}class T{constructor(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){var t;await(t=this.win,w(t.document.body)?Promise.resolve():new Promise(e=>{t.addEventListener("ionNavWillLoad",e,{once:!0})})),await this.onRoutesChanged(),this.win.addEventListener("ionRouteRedirectChanged",e(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",e(this.onRoutesChanged.bind(this),100)),this.onRedirectChanged()}onPopState(){const t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)}push(t,e="forward"){const n=b(t),i=O[e];return this.setPath(n,i),this.writeNavStateRoot(n,i)}printDebug(){this.getPath(),this.previousPath,function(t){console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);g(t),n.join(", ")}console.groupEnd()}(P(this.el)),function(t){console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&(g(e.from),g(e.to));console.groupEnd()}(A(this.el))}async navChanged(t){if(this.busy)return!1;const{ids:e,outlet:n}=function(t){const e=[];let n,i=t;for(;n=w(i);){const t=n.getRouteId();if(!t)break;i=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}}(this.win.document.body),i=function(t,e){let n=null,i=0;const o=t.map(t=>t.id);for(const t of e){const e=C(o,t);e>i&&(n=t,i=e)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:E(e.params,t[n]&&t[n].params)})):null}(e,P(this.el));if(!i)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const o=function(t){const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const i=n.params&&n.params[t.slice(1)];if(!i)return null;e.push(i)}else""!==t&&e.push(t);return e}(i);return o?(this.setPath(o,t),await this.writeNavState(n,i,0,o,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&y(t,A(this.el))&&this.writeNavStateRoot(t,0)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),0)}historyDirection(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));const t=this.win.history.state,e=this.lastState;return this.lastState=t,t>e?1:t<e?-1:0}async writeNavStateRoot(t,e){if(this.busy)return!1;if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=y(t,A(this.el));let i=null;n&&(this.setPath(n.to,e),i=n.from,t=n.to);const o=function(t,e){let n=null,i=0;for(const o of e){const e=R(t,o);if(null!==e){const t=D(e);t>i&&(i=t,n=e)}}return n}(t,P(this.el));return o?this.writeNavState(this.win.document.body,o,e,t,i):(console.error("[ion-router] the path does not match any route"),!1)}async writeNavState(t,e,n,i,o,s=0){if(this.busy)return!1;this.busy=!0;const r=this.routeChangeEvent(i,o);r&&this.ionRouteWillChange.emit(r);const a=await async function t(e,n,i,o,s=!1){try{const r=w(e);if(o>=n.length||!r)return s;await r.componentOnReady();const a=n[o],c=await r.setRouteId(a.id,a.params,i);return c.changed&&(i=0,s=!0),s=await t(c.element,n,i,o+1,s),c.markVisible&&await c.markVisible(),s}catch(t){return console.error(t),!1}}(t,e,n,s);return this.busy=!1,r&&this.ionRouteDidChange.emit(r),a}setPath(t,e){this.state++,function(t,e,n,i,o,s){let r=g([...b(e),...i]);n&&(r="#"+r),1===o?t.pushState(s,"",r):t.replaceState(s,"",r)}(this.win.history,this.root,this.useHash,t,e,this.state)}getPath(){return function(t,e,n){let i=t.pathname;if(n){const e=t.hash;i="#"===e[0]?e.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(b(e),b(i))}(this.win.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,i=g(t);return this.previousPath=i,i===n?null:{from:n,redirectedFrom:e?g(e):null,to:i}}static get is(){return"ion-router"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}}static get events(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:popstate",method:"onPopState"}]}}const O={back:-1,root:0,forward:1},k="split-pane-main",N="split-pane-side",M={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};class U{constructor(){this.visible=!1,this.disabled=!1,this.when=M.md}visibleChanged(t){const e={visible:t};this.ionChange.emit(e),this.ionSplitPaneVisible.emit(e)}componentDidLoad(){this._styleChildren(),this.whenChanged()}componentDidUnload(){this.rmL&&this.rmL(),this.rmL=null}whenChanged(){if(this.isServer)return;if(this.rmL&&this.rmL(),this.rmL=null,this.disabled)return void(this.visible=!1);const t=this.when;if("boolean"==typeof t)return void(this.visible=t);const e=M[t]||t;if(!e||0===e.length)return void(this.visible=!1);const n=t=>this.visible=t.matches,i=this.win.matchMedia(e);i.addListener(n),this.rmL=(()=>i.removeListener(n)),this.visible=i.matches}isVisible(){return this.visible}isPane(t){return!!this.visible&&t.parentElement===this.el&&t.classList.contains(N)}_styleChildren(){if(this.isServer)return;const t=this.el.children,e=this.el.childElementCount;let n=!1;for(let i=0;i<e;i++){const e=t[i],o=e.hasAttribute("main");if(o){if(n)return void console.warn("split pane can not have more than one main node");n=!0}I(e,o)}n||console.warn("split pane could not found any main node")}hostData(){return{class:Object.assign({},o(this.mode,"split-pane"),{"split-pane-visible":this.visible})}}static get is(){return"ion-split-pane"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},isPane:{method:!0},isServer:{context:"isServer"},isVisible:{method:!0},visible:{state:!0,watchCallbacks:["visibleChanged"]},when:{type:"Any",attr:"when",watchCallbacks:["whenChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionSplitPaneVisible",method:"ionSplitPaneVisible",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".split-pane{left:0;right:0;top:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side[side=start]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-visible>.split-pane-side[side=left]{-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=right]{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13);border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=right]{border-right:0;border-left:1px solid rgba(var(--ion-item-border-color-rgb,0,0,0),.13)}"}static get styleMode(){return"md"}}function I(t,e){let n,i;e?(n=k,i=N):(n=N,i=k);const o=t.classList;o.add(n),o.remove(i)}class _{constructor(){this.lastTouch=10*-V,this.lastActivated=0,this.cancelled=!1,this.clearDefers=new WeakMap}onBodyClick(t){this.cancelled&&(t.preventDefault(),t.stopPropagation())}onTouchStart(t){this.lastTouch=n(t),this.pointerDown(t)}onTouchEnd(t){this.lastTouch=n(t),this.pointerUp(t)}onMouseDown(t){const e=n(t)-V;this.lastTouch<e&&this.pointerDown(t)}onMouseUp(t){const e=n(t)-V;this.lastTouch<e&&this.pointerUp(t)}cancelActive(){clearTimeout(this.activeDefer),this.activatableEle&&(this.removeActivated(!1),this.activatableEle=void 0),this.cancelled=!0}pointerDown(t){this.activatableEle||(this.cancelled=!1,this.setActivatedElement(t.target.closest(":not([tappable]) > a, :not([tappable]) > button, [tappable]"),t))}pointerUp(t){this.setActivatedElement(void 0,t),this.cancelled&&t.cancelable&&t.preventDefault()}setActivatedElement(t,e){const n=this.activatableEle;if(t&&t===n)return;clearTimeout(this.activeDefer),this.activeDefer=void 0;const{x:o,y:s}=i(e);if(n){if(this.clearDefers.has(n))throw new Error("internal error");n.classList.contains(B)||this.addActivated(n,o,s),this.removeActivated(!0)}if(t){const e=this.clearDefers.get(t);e&&(clearTimeout(e),this.clearDefers.delete(t)),t.classList.remove(B),this.activeDefer=setTimeout(()=>{this.addActivated(t,o,s),this.activeDefer=void 0},j)}this.activatableEle=t}addActivated(t,e,n){this.lastActivated=Date.now(),t.classList.add(B);const i=new CustomEvent("ionActivated",{bubbles:!1,detail:{x:e,y:n}});t.dispatchEvent(i)}removeActivated(t){const e=this.activatableEle;if(!e)return;const n=q-Date.now()+this.lastActivated;if(t&&n>0){const t=setTimeout(()=>{e.classList.remove(B),this.clearDefers.delete(e)},q);this.clearDefers.set(e,t)}else e.classList.remove(B)}static get is(){return"ion-tap-click"}static get properties(){return{el:{elementRef:!0},enableListener:{context:"enableListener"},isServer:{context:"isServer"}}}static get listeners(){return[{name:"body:click",method:"onBodyClick",capture:!0},{name:"document:touchstart",method:"onTouchStart",capture:!0,passive:!0},{name:"document:touchcancel",method:"onTouchEnd",capture:!0},{name:"document:touchend",method:"onTouchEnd",capture:!0},{name:"document:mousedown",method:"onMouseDown",capture:!0,passive:!0},{name:"document:mouseup",method:"onMouseUp",capture:!0},{name:"body:ionScrollStart",method:"cancelActive"},{name:"body:ionGestureCaptured",method:"cancelActive"}]}}const B="activated",j=200,q=200,V=2500;export{s as MyApp,a as IonApp,m as IonMenuController,p as IonRoute,f as IonRouteRedirect,T as IonRouter,U as IonSplitPane,_ as IonTapClick};