/*! Built with http://stenciljs.com (es5) */

App.loadComponents("7cqqke0u",function(e,t,n,o){"use strict";function r(e){return void 0!==e&&null!==e}function i(e){return"number"==typeof e}function a(e,t){e||console.error(t)}function s(e){return e.componentOnReady()}function u(){return document}function l(){return u().activeElement}function c(){var e=l();e&&e.blur&&e.blur()}function v(e){return!!(e&&e.didLoad&&e.willUnload)}function d(e,t,n,o){if(t){if(e.isPortal)return o===Ye&&p(t,e.zIndexOffset+Je),void Je++;(n=n||e.getPrevious(t))&&r(n.zIndex)?o===Qe?p(t,n.zIndex-1):p(t,n.zIndex+1):p(t,He+e.zIndexOffset)}}function p(e,t){t!==e.zIndex&&(e.zIndex=t,e.element.style.zIndex=""+t)}function f(e,t,n){t!==n&&(e.hidden=n)}function m(e){return!!e&&!!e.getPrevious()}function h(e){return e.registerTransitionStart=function(t){e.transitionStartFunction=t},e.start=function(){this.transitionStartFunction&&this.transitionStartFunction(),this.transitionStartFunction=null,g(e)},e.originalDestroy=e.destroy,e.destroy=function(){y(e)},e}function g(e){e.transitionStartFunction&&e.transitionStartFunction(),e.transitionStartFunction=null,e.parent&&e.parent.start()}function y(e){e.originalDestroy(),e.parent=e.enteringView=e.leavingView=e.transitionStartFunction=null}function w(e){for(e=e.parent;e;){var t=e.transitionId;if(r(t))return t;e=e.parent}return-1}function b(){return Xe++}function S(e){var t=Ze.get(e);t&&(t.destroy(),Ze.delete(e))}function T(e,t,n,o,r,i,a,s){var u=(t.get(e)||s)(o,r,i,a);return u.transitionId=n,Ze.has(n)?Ze.get(n).add(u):Ze.set(n,u),u}function V(e){return e.views&&e.views.length>0?e.views[0]:null}function C(e){return e.views?e.views:[]}function P(e){return e.views&&e.views.length>0?e.views[e.views.length-1]:null}function R(e,t){return t||(t=e.getActive()),e.views[e.views.indexOf(t)-1]}function I(){return Ke++}function E(e,t){return e.routes.find(function(e){return e.id===t})}function x(e){var t=P(e);if(!t)return null;var n=t.component,o=E(e,n);return o?{path:o.path,focusNode:t.element}:(console.error("cant reverse route by component",n),null)}function k(e){e.navInit.emit(e),e.root&&e.setRoot(e.root)}function q(e,t,n,o){return _(e).then(function(){return e.navController.push(e,t,n,o)})}function D(e,t){return _(e).then(function(){return e.navController.pop(e,t)})}function A(e,t,n,o){return _(e).then(function(){return e.navController.setRoot(e,t,n,o)})}function L(e,t,n,o,r){return _(e).then(function(){return e.navController.insert(e,t,n,o,r)})}function z(e,t,n,o){return _(e).then(function(){return e.navController.insertPages(e,t,n,o)})}function N(e,t){return _(e).then(function(){return e.navController.popToRoot(e,t)})}function O(e,t,n){return _(e).then(function(){return e.navController.popTo(e,t,n)})}function j(e,t,n,o){return _(e).then(function(){return e.navController.removeIndex(e,t,n,o)})}function B(e,t,n){return _(e).then(function(){return e.navController.removeView(e,t,n)})}function F(e,t,n){return _(e).then(function(){return e.navController.setPages(e,t,n)})}function _(e){return e.navController?Promise.resolve():(e.navController=document.querySelector("ion-nav-controller"),s(e.navController))}function W(e){return e.views&&e.views.length>0}function G(e,t){e.element!==t.target&&(t.detail.parent=e,e.childNavs||(e.childNavs=[]),e.childNavs.push(t.detail),t.stopPropagation())}function U(e,t,n,o,r){if(void 0===r&&(r={}),!e)return a(this._state===Me,"ViewController does not have a valid _nav"),Promise.resolve(!1);this.overlay&&!r.minClickBlockDuration&&(r.minClickBlockDuration=400),t.data=n,t.role=o;var i=Object.assign({},this._leavingOpts,r);return e.removeView(this,i).then(function(){return n})}function M(e,t){return a(e.state!==Me,"view state must be attached"),t?t.removeViewFromDom(e.nav,e):Promise.resolve().then(function(){e.id=e.data=e.element=e.instance=e.nav=e.dismissProxy=null,e.state=Me})}function H(e,t){e&&e[t]&&e[t]()}function Q(e,t){H(t.instance,"ionViewWillLeave"),e&&t.onWillDismiss&&(t.onWillDismiss(this.dismissProxy.data,this.dismissProxy.proxy),t.onWillDismiss=null)}function Y(e){H(e.instance,"ionViewDidLeave")}function X(e){a(e.state===Ue,"view state must be ATTACHED"),H(e.instance,"ionViewDidEnter")}function Z(e){a(e.state===Ge,"view state must be INITIALIZED"),H(e.instance,"ionViewWillLoad")}function J(e){H(e.instance,"ionViewWillUnLoad"),e.onDidDismiss&&e.onDidDismiss(e.dismissProxy.data,e.dismissProxy.role),e.onDidDismiss=e.dismissProxy=null}function K(e){a(e.state===Ue,"view state must be ATTACHED"),H(e.instance,"ionViewDidLoad")}function $(e,t){e.state=We,e.data=t||{}}function ee(e,t,n,o){e.enteringView=t,e.leavingView=n;var i="rtl"===document.dir,a=i?"-99.5%":"99.5%",s=i?"33%":"-33%";e.duration(r(o.duration)?o.duration:ot),e.easing(r(o.easing)?o.easing:rt),e.addElement(t.element),e.beforeRemoveClass("hide-page");var u="back"===o.direction;if(t){var l=e.create();l.addElement(t.element.querySelectorAll("ion-header > *:not(ion-navbar),ion-footer > *")),e.add(l),u?l.fromTo(st,s,ut,!0).fromTo(it,lt,1,!0):l.beforeClearStyles([it]).fromTo(st,a,ut,!0);var c=t.element.querySelector("ion-navbar");if(c){var v=e.create();v.addElement(c),e.add(v);var d=e.create();d.addElement(c.querySelector("ion-title"));var p=e.create();p.addElement(c.querySelectorAll("ion-buttons,[menuToggle]"));var f=e.create();f.addElement(c.querySelector(".toolbar-background"));var h=e.create();if(h.addElement(c.querySelector(".back-button")),v.add(d).add(p).add(f).add(h),d.fromTo(it,.01,1,!0),p.fromTo(it,.01,1,!0),u)d.fromTo(st,s,ut,!0),m(t.nav)&&h.beforeAddClass(ct).fromTo(it,.01,1,!0);else if(d.fromTo(st,a,ut,!0),f.beforeClearStyles([it]).fromTo(st,a,ut,!0),m(t.nav)){h.beforeAddClass(ct).fromTo(it,.01,1,!0);var g=e.create();g.addElement(c.querySelector(".back-button-text")),g.fromTo(st,i?"-100px":"100px","0px"),v.add(g)}else h.beforeRemoveClass(ct)}}if(n){var y=e.create();y.addElement(n.element),y.addElement(n.element.querySelectorAll("ion-header > *:not(ion-navbar),ion-footer > *")),e.add(y),u?y.beforeClearStyles([it]).fromTo(st,ut,i?"-100%":"100%"):y.fromTo(st,ut,s).fromTo(it,1,lt).afterClearStyles([at,it]);var w=n.element.querySelector("ion-navbar");if(w){var b=e.create();b.addElement(w);var S=e.create();S.addElement(w.querySelector("ion-title"));var T=e.create();T.addElement(w.querySelectorAll("ion-buttons,[menuToggle]"));var V=e.create();V.addElement(w.querySelector(".toolbar-background"));var C=e.create();if(C.addElement(w.querySelector(".back-button")),b.add(S).add(T).add(C).add(V),this.add(b),C.fromTo(it,.99,0),S.fromTo(it,.99,0),T.fromTo(it,.99,0),u){S.fromTo(st,ut,i?"-100%":"100%"),V.beforeClearStyles([it]).fromTo(st,ut,i?"-100%":"100%");var P=e.create();P.addElement(w.querySelector(".back-button-text")),P.fromTo(st,ut,(i?-300:300)+"px"),b.add(P)}else S.fromTo(st,ut,s).afterClearStyles([at]),C.afterClearStyles([it]),S.afterClearStyles([it]),T.afterClearStyles([it])}}return e}function te(e,t,n,o){e.enteringView=t,e.leavingView=n,e.addElement(t.element),e.beforeRemoveClass("hide-page");var i="back"===o.direction;if(t){i?e.duration(r(o.duration)?o.duration:200).easing("cubic-bezier(0.47,0,0.745,0.715)"):(e.duration(r(o.duration)?o.duration:280).easing("cubic-bezier(0.36,0.66,0.04,1)"),e.fromTo(vt,dt,pt,!0).fromTo("opacity",.01,1,!0));var a=t.element.querySelector("ion-navbar");if(a){var s=e.create();s.addElement(a),e.add(s);var u=e.create();u.addElement(a.querySelector(".back-button")),e.add(u),m(t.nav)?u.beforeAddClass(ft):u.beforeRemoveClass(ft)}}if(n&&i){e.duration(o.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=e.create();l.addElement(n.element),e.add(l.fromTo(vt,pt,dt).fromTo("opacity",1,0))}return e}function ne(e,t,n,o,r,i,a){return de({insertStart:-1,insertViews:[{page:o,params:r}],opts:i,nav:e,delegate:t,id:e.navId,animation:n},a)}function oe(e,t,n,o,r,i,a,s){return de({insertStart:o,insertViews:[{page:r,params:i}],opts:a,nav:e,delegate:t,id:e.navId,animation:n},s)}function re(e,t,n,o,r,i,a){return de({insertStart:o,insertViews:r,opts:i,nav:e,delegate:t,id:e.navId,animation:n},a)}function ie(e,t,n,o,r){return de({removeStart:-1,removeCount:1,opts:o,nav:e,delegate:t,id:e.navId,animation:n},r)}function ae(e,t,n,o,r){return de({removeStart:1,removeCount:-1,opts:o,nav:e,delegate:t,id:e.navId,animation:n},r)}function se(e,t,n,o,r,a){var s={removeStart:-1,removeCount:-1,opts:r,nav:e,delegate:t,id:e.navId,animation:n};return v(o)?(s.removeView=o,s.removeStart=1):i(o)&&(s.removeStart=o+1),de(s,a)}function ue(e,t,n,o,r,i,a){return void 0===r&&(r=1),de({removeStart:o,removeCount:r,opts:i,nav:e,delegate:t,id:e.navId,animation:n},a)}function le(e,t,n,o,r,i){return de({removeView:o,removeStart:0,removeCount:1,opts:r,nav:e,delegate:t,id:e.navId,animation:n},i)}function ce(e,t,n,o,r,i,a){return ve(e,t,n,[{page:o,params:r}],i,a)}function ve(e,t,n,o,i,a){return r(i)||(i={}),!0!==i.animate&&(i.animate=!1),de({insertStart:0,insertViews:o,removeStart:0,removeCount:-1,opts:i,nav:e,delegate:t,id:e.navId,animation:n},a)}function de(e,t){var n=new Promise(function(t,n){e.resolve=t,e.reject=n});return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),Le(e),pe(e.nav),n}function pe(e){if(e.transitioning)return Promise.resolve();var t=Oe(e.navId);if(!t)return Promise.resolve();var n,o;return Ve(e,t).then(function(r){var i=r[0],a=r[1];return n=i,o=a,Te(e,n,t.delegate)}).then(function(){return ge(e,n,o,t)}).then(function(n){return e.ionNavChanged.emit({isPop:!1}),fe(n,t)}).catch(function(e){return me(e,t)})}function fe(e,t){if(!ze(t.id))return he(new Error("Queue is null, the nav must have been destroyed"),t);t.nav.isViewInitialized=!0,t.nav.transitionId=null,t.nav.transitioning=!1,pe(t.nav),t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringName,e.leavingName,e.direction),t.resolve(e.hasCompleted)}function me(e,t){if(!ze(t.nav.navId))return he(new Error("Queue is null, the nav must have been destroyed"),t);t.nav.transitionId=null,Ne(t.nav.navId),t.nav.transitioning=!1,pe(t.nav),he(e,t)}function he(e,t){t.done&&t.done(!1,!1,e.message),t.reject&&!t.nav.destroyed?t.reject(e):t.resolve(!1)}function ge(e,t,n,o){if(!o.requiresTransition)return Promise.resolve({hasCompleted:!0,requiresTransition:!1});var r=null,i=w(e);e.transitionId=i>=0?i:b();var a={animation:o.opts.animation,direction:o.opts.direction,duration:!1===o.opts.animate?0:o.opts.duration,easing:o.opts.easing,isRTL:!1,ev:o.opts.event},s=h(o.animation);return r=T(a.animation,e.config,e.transitionId,s,t,n,a,je(e.config)),e.swipeToGoBackTransition&&(e.swipeToGoBackTransition.destroy(),e.swipeToGoBackTransition=null),r.isRoot()&&o.opts.progressAnimation&&(e.swipeToGoBackTransition=r),r.start(),ye(e,r,t,n,o.delegate,o.opts,o.nav.config.getBoolean("animate"))}function ye(e,t,n,o,r,i,s){a(e.transitioning,"must be transitioning"),e.transitionId=null,d(e,n,o,i.direction),n&&f(n.element,!0,!0),o&&f(o.element,!0,!0);var u=!e.isViewInitialized&&1===e.views.length&&!e.isPortal;(s||u)&&(i.animate=!1),!1===i.animate&&t.duration(0),t.beforeAddRead(function(){Se(n,o)});t.getDuration();var l=new Promise(function(e){t.onFinish(e)});return t.isRoot()&&(i.progressAnimation?t.progressStart():t.play()),l.then(function(){return we(e,t,r,i)})}function we(e,t,n,o){var r=null;return t.hasCompleted?(t.enteringView&&t.enteringView.didEnter(),t.leavingView&&t.leavingView.didLeave(),r=be(e,n,t.enteringView)):r=be(e,n,t.leavingView),r.then(function(){return t.isRoot()&&(S(t.transitionId),e.transitioning=!1,!1!==o.keyboardClose&&c()),{hasCompleted:t.hasCompleted,requiresTransition:!0,direction:o.direction}})}function be(e,t,n){if(e.destroyed)return Promise.resolve();for(var o=e.views.indexOf(n),r=[],i=e.views.length-1;i>=0;i--){var a=e.views[i];i>o?(a.willUnload(),r.push(Pe(e,t,a))):i<o&&!e.isPortal&&f(a.element,!0,!1)}return Promise.all(r)}function Se(e,t){t&&t.willLeave(!e),e&&e.willEnter()}function Te(e,t,n){return t&&t.state===We?n.attachViewToDom(e,t).then(function(){t.state=Ue}):Promise.resolve()}function Ve(e,t){var n=null,o=null;return ke(t).then(function(){var r=Ae(e,t);return t.insertViews=r,n=t.nav.getActive(),o=qe(t,t.nav,n),n||o?(t.requiresTransition=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&o!==n,Ee(o,n,t)):Promise.reject(new Error("No views in the stack to remove"))}).then(function(){return Ce(o,n,t)}).then(function(){return[o,n]})}function Ce(e,t,n){return Promise.resolve().then(function(){a(!(!t&&!e),"Both leavingView and enteringView are null"),a(!!n.resolve,"resolve must be valid"),a(!!n.reject,"reject must be valid");var o=[];if(n.opts=n.opts||{},r(n.removeStart)){a(n.removeStart>=0,"removeStart can not be negative"),a(n.removeStart>=0,"removeCount can not be negative");for(s=0;s<n.removeCount;s++)(u=n.nav.views[s+n.removeStart])&&u!==e&&u!==t&&o.push(u);n.opts.direction=n.opts.direction||Qe}var i=n.nav.views.length+(n.insertViews?n.insertViews.length:0)-(n.removeCount?n.removeCount:0);if(a(i>=0,"final balance can not be negative"),0===i&&!n.nav.isPortal)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times."),new Error("Navigation stack needs at least one root page");if(n.insertViews){r(n.opts.id)&&(e.id=n.opts.id);for(s=0;s<n.insertViews.length;s++)Ie(n.nav,n.insertViews[s],n.insertStart+s);n.enteringRequiresTransition&&(n.opts.direction=n.opts.direction||Ye)}if(o&&o.length){for(var s=0;s<o.length;s++){var u=o[s];u.willLeave(!0),u.didLeave(),u.willUnload()}for(var l=[],c=0,v=o;c<v.length;c++){var d=v[c];l.push(Pe(n.nav,n.delegate,d))}return Promise.all(l)}return null}).then(function(){n.requiresTransition&&!n.opts.animation&&(r(n.removeStart)?n.opts.animation=(t||e).getTransitionName(n.opts.direction):n.opts.animation=(e||t).getTransitionName(n.opts.direction))})}function Pe(e,t,n){return n.destroy(t).then(function(){return Re(e,n)})}function Re(e,t){a(t.state===Ue||t.state===Me,"view state should be loaded or destroyed");var n=e.views.indexOf(t);a(n>-1,"view must be part of the stack"),n>=0&&e.views.splice(n,1)}function Ie(e,t,n){var o=e.views.indexOf(t);o>-1?(a(t.nav===e,"view is not part of the nav"),e.views.splice(n,0,e.views.splice(o,1)[0])):(a(!t.nav||e.isPortal&&t.nav===e,"nav is used"),t.nav=e,ht++,t.id||(t.id=e.navId+"-"+ht),e.views.splice(n,0,t))}function Ee(e,t,n){if(!n.requiresTransition)return Promise.resolve();var o=[];return t&&o.push(xe(t,"Leave")),e&&o.push(xe(e,"Enter")),0===o.length?Promise.resolve():Promise.all(o).then(function(e){if(e.some(function(e){return!1===e}))throw n.reject=null,new Error("canEnter/Leave returned false")})}function xe(e,t){var n="ionViewCan"+t;if(e.instance&&e.instance[n])try{var o=e.instance[n];return o instanceof Promise?o:Promise.resolve(!1!==o)}catch(e){return Promise.reject(new Error("Unexpected error when calling "+n+": "+e.message))}return Promise.resolve(!0)}function ke(e){var t=e.nav.views?e.nav.views.length:0;if(r(e.removeView)){a(r(e.removeStart),"removeView needs removeStart"),a(r(e.removeCount),"removeView needs removeCount");var n=e.nav.views.indexOf(e.removeView());if(n<0)return Promise.reject(new Error("The removeView was not found"));e.removeStart+=n}return r(e.removeStart)&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),r(e.insertViews)&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t),e.nav.transitioning=!0,Promise.resolve()}function qe(e,t,n){if(e.insertViews&&e.insertViews.length)return e.insertViews[e.insertViews.length-1];if(r(e.removeStart))for(var o=e.removeStart+e.removeCount,i=t.views.length-1;i>=0;i--)if((i<e.removeStart||i>=o)&&t.views[i]!==n)return t.views[i];return null}function De(e){return e.map(function(e){return e?v(e)?e:new nt(e.page,e.params):null}).filter(function(e){return!!e})}function Ae(e,t){if(t.insertViews){a(t.insertViews.length>0,"length can not be zero");var n=De(t.insertViews);if(a(t.insertViews.length===n.length,"lengths does not match"),0===n.length)throw new Error("No views to insert");for(var o=0,r=n;o<r.length;o++){var i=r[o];if(i.nav&&i.nav.navId!==t.id)throw new Error("The view has already inserted into a different nav");if(i.state===Me)throw new Error("The view has already been destroyed");if(e.useRouter&&!E(e,i.component))throw new Error("Route not specified for "+i.component)}return n}return[]}function Le(e){var t=mt.get(e.id)||[];t.push(e),mt.set(e.id,t)}function ze(e){return mt.get(e)||[]}function Ne(e){mt.set(e,[])}function Oe(e){var t=ze(e);if(!t.length)return null;var n=t.concat(),o=n.shift();return mt.set(e,n),o}function je(e){return"md"===e.get("mode")?te:ee}function Be(e){return Promise.all([Fe(e),_e(e.animationCtrl)])}function Fe(e){return e.delegate?Promise.resolve(e.delegate):(yt=new tt,Promise.resolve(yt))}function _e(e){return e.create()}var We=1,Ge=2,Ue=3,Me=4,He=100,Qe="back",Ye="forward",Xe=0,Ze=new Map,Je=9999,Ke=1e3,$e=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},et=function(){function e(){this.init=!1,this.routes=[],this.views=[],this.navId=I()}return e.prototype.routeAdded=function(e){this.addRoute(e.detail)},e.prototype.routeRemoved=function(e){this.removeRoute(e.detail)},e.prototype.componentWillLoad=function(){this.useRouter=this.config.getBoolean("useRouter",!1)},e.prototype.componentDidLoad=function(){this.init||(this.init=!0,this.useRouter||k(this))},e.prototype.getViews=function(){return C(this)},e.prototype.push=function(e,t,n){return q(this,e,t,n)},e.prototype.pop=function(e){return D(this,e)},e.prototype.setRoot=function(e,t,n){return A(this,e,t,n)},e.prototype.insert=function(e,t,n,o){return L(this,e,t,n,o)},e.prototype.insertPages=function(e,t,n){return z(this,e,t,n)},e.prototype.popToRoot=function(e){return N(this,e)},e.prototype.popTo=function(e,t){return O(this,e,t)},e.prototype.removeIndex=function(e,t,n){return j(this,e,t,n)},e.prototype.removeView=function(e,t){return B(this,e,t)},e.prototype.setPages=function(e,t){return F(this,e,t)},e.prototype.getActive=function(){return P(this)},e.prototype.getPrevious=function(e){return R(this,e)},e.prototype.canGoBack=function(){return W(this)},e.prototype.canSwipeBack=function(){return!0},e.prototype.getFirstView=function(){return V(this)},e.prototype.resize=function(){console.log("resize content")},e.prototype.navInitialized=function(e){G(this,e)},e.prototype.addRoute=function(e){this.routes.push(e)},e.prototype.removeRoute=function(e){throw"not implemented"},e.prototype.getState=function(){return a(this.useRouter,"routing is disabled"),x(this)},e.prototype.setRouteId=function(e,t){void 0===t&&(t={}),a(this.useRouter,"routing is disabled");var n=this.getActive();return n&&n.component===e?Promise.resolve():this.setRoot(e)},e.prototype.getRoutes=function(){return a(this.useRouter,"routing is disabled"),this.routes},e.prototype.render=function(){return t("slot",null)},e}();$e([],et.prototype,"element",void 0),$e([],et.prototype,"navInit",void 0),$e([],et.prototype,"ionNavChanged",void 0),$e([],et.prototype,"mode",void 0),$e([],et.prototype,"root",void 0),$e([],et.prototype,"delegate",void 0),$e([],et.prototype,"config",void 0),$e([],et.prototype,"routeAdded",null),$e([],et.prototype,"routeRemoved",null),$e([],et.prototype,"push",null),$e([],et.prototype,"pop",null),$e([],et.prototype,"setRoot",null),$e([],et.prototype,"insert",null),$e([],et.prototype,"insertPages",null),$e([],et.prototype,"popToRoot",null),$e([],et.prototype,"popTo",null),$e([],et.prototype,"removeIndex",null),$e([],et.prototype,"removeView",null),$e([],et.prototype,"setPages",null),$e([],et.prototype,"getActive",null),$e([],et.prototype,"getPrevious",null),$e([],et.prototype,"canGoBack",null),$e([],et.prototype,"canSwipeBack",null),$e([],et.prototype,"getFirstView",null),$e([],et.prototype,"resize",null),$e([],et.prototype,"navInitialized",null),$e([],et.prototype,"addRoute",null),$e([],et.prototype,"removeRoute",null),$e([],et.prototype,"getState",null),$e([],et.prototype,"setRouteId",null),$e([],et.prototype,"getRoutes",null),et=$e([],et);var tt=function(){function e(){}return e.prototype.attachViewToDom=function(e,t){return new Promise(function(n){var o=document.createElement(t.component);o.classList.add("ion-page"),t.element=o,e.element.appendChild(o),n()})},e.prototype.removeViewFromDom=function(e,t){return e.element.removeChild(t.element),Promise.resolve()},e}(),nt=function(){function e(e,t){this.component=e,$(this,t)}return e.prototype.dismiss=function(e,t,n){return void 0===n&&(n={}),this.dismissProxy={},U(this.nav,this.dismissProxy,e,t,n)},e.prototype.willLeave=function(e){Q(e,this)},e.prototype.didLeave=function(){Y(this)},e.prototype.willEnter=function(){H(this.instance,"ionViewWillEnter")},e.prototype.didEnter=function(){X(this)},e.prototype.willLoad=function(){Z(this)},e.prototype.didLoad=function(){K(this)},e.prototype.willUnload=function(){J(this)},e.prototype.destroy=function(e){return M(this,e)},e.prototype.getTransitionName=function(e){return""},e}(),ot=500,rt="cubic-bezier(0.36,0.66,0.04,1)",it="opacity",at="transform",st="translateX",ut="0%",lt=.8,ct="show-back-button",vt="translateY",dt="40px",pt="0px",ft="show-back-button",mt=new Map,ht=2e3,gt=function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yt=null,wt=function(){function e(){}return e.prototype.push=function(e,t,n,o){return Be(this).then(function(r){var i=r[0],a=r[1];return ne(e,i,a,t,n,o)})},e.prototype.pop=function(e,t){return Be(this).then(function(n){var o=n[0],r=n[1];return ie(e,o,r,t)})},e.prototype.setRoot=function(e,t,n,o){return Be(this).then(function(r){var i=r[0],a=r[1];return ce(e,i,a,t,n,o)})},e.prototype.insert=function(e,t,n,o,r){return Be(this).then(function(i){var a=i[0],s=i[1];return oe(e,a,s,t,n,o,r)})},e.prototype.insertPages=function(e,t,n,o){return Be(this).then(function(r){var i=r[0],a=r[1];return re(e,i,a,t,n,o)})},e.prototype.popToRoot=function(e,t){return Be(this).then(function(n){var o=n[0],r=n[1];return ae(e,o,r,t)})},e.prototype.popTo=function(e,t,n){return Be(this).then(function(o){var r=o[0],i=o[1];return se(e,r,i,t,n)})},e.prototype.removeIndex=function(e,t,n,o){return Be(this).then(function(r){var i=r[0],a=r[1];return ue(e,i,a,t,n,o)})},e.prototype.removeView=function(e,t,n){return Be(this).then(function(o){var r=o[0],i=o[1];return le(e,r,i,t,n)})},e.prototype.setPages=function(e,t,n){return Be(this).then(function(o){var r=o[0],i=o[1];return ve(e,r,i,t,n)})},e.prototype.render=function(){return t("slot",null)},e}();gt([],wt.prototype,"element",void 0),gt([],wt.prototype,"delegate",void 0),gt([],wt.prototype,"animationCtrl",void 0),gt([],wt.prototype,"push",null),gt([],wt.prototype,"pop",null),gt([],wt.prototype,"setRoot",null),gt([],wt.prototype,"insert",null),gt([],wt.prototype,"insertPages",null),gt([],wt.prototype,"popToRoot",null),gt([],wt.prototype,"popTo",null),gt([],wt.prototype,"removeIndex",null),gt([],wt.prototype,"removeView",null),gt([],wt.prototype,"setPages",null),wt=gt([],wt),e["ion-nav"]=et,e["ion-nav-controller"]=wt},["ion-nav",[["addRoute",6,0,1],["canGoBack",6,0,1],["canSwipeBack",6,0,1],["config",3,0,1,"config"],["delegate",1,1,1],["element",7,0,1],["getActive",6,0,1],["getFirstView",6,0,1],["getPrevious",6,0,1],["getRoutes",6,0,1],["getState",6,0,1],["insert",6,0,1],["insertPages",6,0,1],["mode",1,1,2],["pop",6,0,1],["popTo",6,0,1],["popToRoot",6,0,1],["push",6,0,1],["removeIndex",6,0,1],["removeRoute",6,0,1],["removeView",6,0,1],["resize",6,0,1],["root",1,1,1],["setPages",6,0,1],["setRoot",6,0,1],["setRouteId",6,0,1]],0,[["ionNavChanged"],["navInit"]]],["ion-nav-controller",[["animationCtrl",4,0,1,"ion-animation-controller"],["delegate",1,1,1],["element",7,0,1],["insert",6,0,1],["insertPages",6,0,1],["pop",6,0,1],["popTo",6,0,1],["popToRoot",6,0,1],["push",6,0,1],["removeIndex",6,0,1],["removeView",6,0,1],["setPages",6,0,1],["setRoot",6,0,1]]]);;