/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-tab_ios","\nion-tab.hydrated{visibility:inherit}","ion-tab-button_ios","\nion-tab-button.hydrated{visibility:inherit}","ion-tab-highlight_ios","\nion-tab-highlight.hydrated{visibility:inherit}","ion-tabbar_ios","\nion-tabbar.hydrated{visibility:inherit}","ion-tabs_ios","ion-tabs{display:flex;flex-direction:column}.tabs-inner{position:relative;flex:1;contain:layout size style}ion-tab{left:0;top:0;position:absolute;z-index:-1;display:none;width:100%;height:100%;contain:layout size style}ion-tab.show-tab{z-index:0;display:block}ion-tabbar{position:relative;z-index:10;display:flex;justify-content:center;order:1;width:100%}ion-tabbar.tabbar-hidden{display:none}ion-tabbar.placement-top{order:-1}ion-tab-button{margin:0;text-align:center;border-radius:0;position:relative;z-index:0;display:flex;overflow:hidden;flex:1;flex-direction:column;align-items:center;justify-content:space-between;border:0;text-decoration:none;background:0 0;cursor:pointer;user-select:none}.tab-disabled{pointer-events:none}.tab-disabled>*{opacity:.4}.tab-button-icon,.tab-button-text{display:none;overflow:hidden;align-self:center;min-width:26px;max-width:100%;text-overflow:ellipsis;white-space:nowrap}.has-icon .tab-button-icon,.has-title .tab-button-text{display:block}.has-title-only .tab-button-text{white-space:normal}.layout-icon-start ion-tab-button{flex-direction:row}.layout-icon-end ion-tab-button{flex-direction:row-reverse}.layout-icon-bottom ion-tab-button{flex-direction:column-reverse}.layout-icon-end ion-tab-button,.layout-icon-hide ion-tab-button,.layout-icon-start ion-tab-button,.layout-title-hide ion-tab-button{justify-content:center}.layout-icon-hide .tab-button-icon,.layout-title-hide .tab-button-text,.tab-hidden{display:none}.tab-badge{right:4%;top:6%;right:calc(50% - 50px);padding:1px 6px;position:absolute;height:auto;font-size:12px;line-height:16px}.has-icon .tab-badge{right:calc(50% - 30px)}.layout-icon-bottom .tab-badge,.layout-icon-end .tab-badge,.layout-icon-start .tab-badge{right:calc(50% - 50px)}ion-tab-highlight{left:0;bottom:0;transform-origin:0 0;position:absolute;display:block;width:1px;height:2px;transform:translateZ(0)}ion-tab-highlight.animated{transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);will-change:transform}.placement-top>ion-tab-highlight{bottom:0}.placement-bottom>ion-tab-highlight{top:0}.tabbar-ios{justify-content:center;height:50px;border-top:.55px solid rgba(0,0,0,.2);background:#f8f8f8;contain:strict}.tabbar-ios.placement-top{border-top:0;border-bottom:.55px solid rgba(0,0,0,.2)}.tabbar-ios>ion-tab-highlight{background:#488aff}.tabbar-ios>ion-tab-button{padding:0 2px;max-width:240px;min-height:100%;font-size:10px;color:#8c8c8c;fill:#8c8c8c}.tabbar-ios .tab-selected,.tabbar-ios ion-tab-button:hover:not(.disable-hover){color:#488aff;fill:#488aff}.tabbar-ios .tab-button-text{margin-top:0;margin-bottom:1px;min-height:11px}.tabbar-ios .has-title-only .tab-button-text{font-size:12px}.tabbar-ios .tab-button-icon{margin-top:4px;margin-bottom:1px;min-width:35px;height:30px;font-size:30px}.tabbar-ios .tab-button-icon::before{vertical-align:top}.tabbar-ios .has-title-only .tab-button-text,.tabbar-ios.layout-icon-end .tab-button-text,.tabbar-ios.layout-icon-hide .tab-button-text,.tabbar-ios.layout-icon-start .tab-button-text{margin:2px 0;font-size:1.4rem;line-height:1.1}.tabbar-ios.layout-icon-end ion-icon,.tabbar-ios.layout-icon-start ion-icon{margin-top:2px;margin-bottom:1px;min-width:24px;height:26px;font-size:24px}.tabbar-ios.layout-title-hide ion-icon{margin:0}.tabbar-translucent-ios{background-color:rgba(248,248,248,.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}.tabbar-ios-primary{border-color:#1569ff;color:rgba(255,255,255,.7);background-color:#488aff;fill:rgba(255,255,255,.7)}.tabbar-ios-primary .tab-selected{color:#fff;fill:#fff}.tabbar-translucent-ios-primary{background-color:rgba(72,138,255,.8)}.tabbar-ios-secondary{border-color:#21b94e;color:rgba(255,255,255,.7);background-color:#32db64;fill:rgba(255,255,255,.7)}.tabbar-ios-secondary .tab-selected{color:#fff;fill:#fff}.tabbar-translucent-ios-secondary{background-color:rgba(50,219,100,.8)}.tabbar-ios-danger{border-color:#f30d0d;color:rgba(255,255,255,.7);background-color:#f53d3d;fill:rgba(255,255,255,.7)}.tabbar-ios-danger .tab-selected{color:#fff;fill:#fff}.tabbar-translucent-ios-danger{background-color:rgba(245,61,61,.8)}.tabbar-ios-light{border-color:#dbdbdb;color:rgba(0,0,0,.7);background-color:#f4f4f4;fill:rgba(0,0,0,.7)}.tabbar-ios-light .tab-selected{color:#000;fill:#000}.tabbar-translucent-ios-light{background-color:rgba(244,244,244,.8)}.tabbar-ios-dark{border-color:#090909;color:rgba(255,255,255,.7);background-color:#222;fill:rgba(255,255,255,.7)}.tabbar-ios-dark .tab-selected{color:#fff;fill:#fff}.tabbar-translucent-ios-dark{background-color:rgba(34,34,34,.8)}\nion-tabs.hydrated{visibility:inherit}");
App.loadComponents("kwg9unfw",function(t,e,o,n){"use strict";function i(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}function r(t,e,o){return o.split(" ").reduce(function(o,n){return o[n]=!0,t&&(o[n+"-"+t]=!0,e&&(o[n+"-"+e]=!0,o[n+"-"+t+"-"+e]=!0)),o},{})}var a=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},s=function(){function t(){var t=this;this.init=!1,this.active=!1,this.badgeStyle="default",this.enabled=!0,this.show=!0,this.tabsHideOnSubPages=!1,this.selected=!1,this.nav=new Promise(function(e){return t.resolveNav=e})}return t.prototype.selectedChanged=function(t){t&&this.ionSelect.emit(this.el)},t.prototype.componentDidUpdate=function(){if(this.init&&this.resolveNav){var t=this.el.querySelector("ion-nav");t?t.componentOnReady(this.resolveNav):this.resolveNav(null),this.resolveNav=null}},t.prototype._setActive=function(t){return this.active===t?Promise.resolve():(this.active=t,this.selected=t,Promise.resolve())},t.prototype.goToRoot=function(t){return void 0===t&&(t={}),this.nav.then(function(e){return e&&e.setRoot(e.root,null,t)})},t.prototype.getActive=function(){return this.nav.then(function(t){return t&&t.getActive()})},t.prototype.getNav=function(){return this.nav},t.prototype.hostData=function(){return{"aria-hidden":this.active&&this.selected?null:"true","aria-labelledby":this.btnId,role:"tabpanel",class:{"show-tab":this.active}}},t}();a([],s.prototype,"el",void 0),a([],s.prototype,"init",void 0),a([],s.prototype,"active",void 0),a([],s.prototype,"btnId",void 0),a([],s.prototype,"path",void 0),a([],s.prototype,"title",void 0),a([],s.prototype,"icon",void 0),a([],s.prototype,"badge",void 0),a([],s.prototype,"badgeStyle",void 0),a([],s.prototype,"enabled",void 0),a([],s.prototype,"show",void 0),a([],s.prototype,"tabsHideOnSubPages",void 0),a([],s.prototype,"selected",void 0),a([],s.prototype,"selectedChanged",null),a([],s.prototype,"ionSelect",void 0),a([],s.prototype,"_setActive",null),a([],s.prototype,"goToRoot",null),a([],s.prototype,"getActive",null),a([],s.prototype,"getNav",null),s=a([],s);var l=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},p=function(){function t(){this.selected=!1}return t.prototype.onClick=function(t){this.ionTabbarClick.emit(this.tab),t.stopPropagation()},t.prototype.hostData=function(){var t=this.selected,e=this.tab,o=!!e.title,n=!!e.icon,i=o&&!n,r=n&&!o,a=!!e.badge;return{role:"tab",id:e.btnId,"aria-selected":t,class:{"tab-selected":t,"has-title":o,"has-icon":n,"has-title-only":i,"has-icon-only":r,"has-badge":a,"tab-disabled":!e.enabled,"tab-hidden":e.hidden}}},t.prototype.render=function(){var t=[],o=this.tab;return o.icon&&t.push(e("ion-icon",{class:"tab-button-icon",name:o.icon})),o.title&&t.push(e("span",{class:"tab-button-text"},o.title)),o.badge&&t.push(e("ion-badge",{class:"tab-badge",color:o.badgeStyle},o.badge)),t.push(e("div",{class:"button-effect"})),t},t}();l([],p.prototype,"selected",void 0),l([],p.prototype,"tab",void 0),l([],p.prototype,"ionTabbarClick",void 0),l([],p.prototype,"onClick",null),p=l([],p);var c=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},d=function(){function t(){this.animated=!1,this.transform=""}return t.prototype.selectedTabChanged=function(){this.updateTransform()},t.prototype.onResize=function(){this.updateTransform()},t.prototype.componentDidLoad=function(){this.updateTransform()},t.prototype.updateTransform=function(){var t=this;o.dom.read(function(){var e=t.getSelectedButton();t.transform=e?"translate3d("+e.offsetLeft+"px,0,0) scaleX("+e.offsetWidth+")":"",t.animated||setTimeout(function(){return t.animated=!0},80)})},t.prototype.getSelectedButton=function(){var t=i(this.el);return t?Array.from(t.querySelectorAll("ion-tab-button")).find(function(t){return t.selected}):null},t.prototype.hostData=function(){return{style:{transform:this.transform},class:{animated:this.animated}}},t}();c([],d.prototype,"el",void 0),c([],d.prototype,"animated",void 0),c([],d.prototype,"transform",void 0),c([],d.prototype,"selectedTab",void 0),c([],d.prototype,"selectedTabChanged",null),c([],d.prototype,"onResize",null),d=c([],d);var u=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},h=function(){function t(){this.hidden=!1,this.placement="bottom",this.layout="icon-top",this.highlight=!1,this.translucent=!1}return t.prototype.onKeyboardWillHide=function(){var t=this;setTimeout(function(){return t.hidden=!1},50)},t.prototype.onKeyboardWillShow=function(){"bottom"===this.placement&&(this.hidden=!0)},t.prototype.hostData=function(){var t=this.translucent?r(this.mode,this.color,"tabbar-translucent"):{},e="layout-"+this.layout,o="placement-"+this.placement;return{role:"tablist",class:Object.assign({},t,(n={"tabbar-hidden":this.hidden},n[e]=!0,n[o]=!0,n))};var n},t.prototype.render=function(){var t=this.selectedTab,o=this.tabs.map(function(o){return e("ion-tab-button",{tab:o,selected:t===o})});return this.highlight&&o.push(e("ion-tab-highlight",{selectedTab:t})),o},t}();u([],h.prototype,"hidden",void 0),u([],h.prototype,"placement",void 0),u([],h.prototype,"tabs",void 0),u([],h.prototype,"selectedTab",void 0),u([],h.prototype,"layout",void 0),u([],h.prototype,"highlight",void 0),u([],h.prototype,"translucent",void 0),u([],h.prototype,"onKeyboardWillHide",null),u([],h.prototype,"onKeyboardWillShow",null),h=u([],h);var b=function(t,e,o,n){var i,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(a=(r<3?i(a):r>3?i(e,o,a):i(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a},f=function(){function t(){this.ids=-1,this.tabsId=++y,this.tabs=[],this.tabbarHidden=!1,this.translucent=!1}return t.prototype.componentDidLoad=function(){this.loadConfig("tabsPlacement","bottom"),this.loadConfig("tabsLayout","icon-top"),this.loadConfig("tabsHighlight",!0),this.initTabs(),this.config.getBoolean("useRouter",!1)||this.initSelect()},t.prototype.componentDidUnload=function(){this.tabs=this.selectedTab=null},t.prototype.tabChange=function(t){var e=t.detail;this.select(e)},t.prototype.select=function(t){var e=this,o="number"==typeof t?this.getByIndex(t):t;if(!o)return Promise.resolve();for(var n=0,i=this.tabs;n<i.length;n++){var r=i[n];o!==r&&(r.selected=!1)}if(o.selected=!0,this.selectedTab===o)return o.goToRoot();var a=this.selectedTab;this.selectedTab=o;var s=o._setActive(!0);return a&&(s=s.then(function(){return a._setActive(!1)})),s.then(function(){e.ionChange.emit(o),e.ionNavChanged.emit({isPop:!1})})},t.prototype.getByIndex=function(t){return this.tabs[t]},t.prototype.getSelected=function(){return this.tabs.find(function(t){return t.selected})},t.prototype.getIndex=function(t){return this.tabs.indexOf(t)},t.prototype.getTabs=function(){return this.tabs},t.prototype.getState=function(){var t=this.getSelected();return t?{path:t.path,focusNode:t}:null},t.prototype.getRoutes=function(){return this.tabs.map(function(t){return{path:t.path,id:t}})},t.prototype.setRouteId=function(t,e){return void 0===e&&(e={}),this.selectedTab===t?Promise.resolve():this.select(t)},t.prototype.initTabs=function(){for(var t=0,e=this.tabs=Array.from(this.el.querySelectorAll("ion-tab"));t<e.length;t++){var o=e[t],n="t-"+this.tabsId+"-"+ ++this.ids;o.btnId="tab-"+n,o.id="tabpanel-"+n}},t.prototype.initSelect=function(){for(var t=this.tabs.find(function(t){return t.selected}),e=0,o=this.tabs;e<o.length;e++)o[e].selected=!1;t||(t=this.tabs.find(function(t){return t.show&&t.enabled})),t._setActive(!0),this.selectedTab=t},t.prototype.loadConfig=function(t,e){void 0===this[t]&&(this[t]=this.config.get(t,e))},t.prototype.render=function(){var t=[e("div",{class:"tabs-inner"},e("slot",null))];return this.tabbarHidden||t.push(e("ion-tabbar",{tabs:this.tabs,selectedTab:this.selectedTab,highlight:this.tabbarHighlight,placement:this.tabbarPlacement,layout:this.tabbarLayout,translucent:this.translucent})),t},t}();b([],f.prototype,"el",void 0),b([],f.prototype,"tabs",void 0),b([],f.prototype,"selectedTab",void 0),b([],f.prototype,"config",void 0),b([],f.prototype,"name",void 0),b([],f.prototype,"tabbarHidden",void 0),b([],f.prototype,"tabbarLayout",void 0),b([],f.prototype,"tabbarPlacement",void 0),b([],f.prototype,"tabbarHighlight",void 0),b([],f.prototype,"translucent",void 0),b([],f.prototype,"ionChange",void 0),b([],f.prototype,"ionNavChanged",void 0),b([Listen("ionSelect")],f.prototype,"tabChange",null),b([],f.prototype,"select",null),b([],f.prototype,"getByIndex",null),b([],f.prototype,"getSelected",null),b([],f.prototype,"getIndex",null),b([],f.prototype,"getTabs",null),b([],f.prototype,"getState",null),b([],f.prototype,"getRoutes",null),b([],f.prototype,"setRouteId",null),f=b([],f);var y=-1;t["ion-tab"]=s,t["ion-tab-button"]=p,t["ion-tab-highlight"]=d,t["ion-tabbar"]=h,t["ion-tabs"]=f},["ion-tab",[["_setActive",6,0,1],["active",5,0,1],["badge",1,1,2],["badgeStyle",1,1,2],["btnId",1,1,2],["el",7,0,1],["enabled",1,1,3],["getActive",6,0,1],["getNav",6,0,1],["goToRoot",6,0,1],["icon",1,1,2],["init",5,0,1],["path",1,1,2],["selected",2,1,3],["show",1,1,3],["tabsHideOnSubPages",1,1,3],["title",1,1,2]],0,[["ionSelect"]],0,[["selected","selectedChanged"]]],["ion-tab-button",[["selected",1,1,3],["tab",1,1,1]],0,[["ionTabbarClick"]]],["ion-tab-highlight",[["animated",5,0,1],["el",7,0,1],["selectedTab",1,1,1],["transform",5,0,1]],0,0,0,[["selectedTab","selectedTabChanged"]]],["ion-tabbar",[["hidden",5,0,1],["highlight",1,1,3],["layout",1,1,2],["placement",1,1,2],["selectedTab",1,1,1],["tabs",1,1,1],["translucent",1,1,3]],{theme:"tabbar"}],["ion-tabs",[["config",3,0,1,"config"],["el",7,0,1],["getByIndex",6,0,1],["getIndex",6,0,1],["getRoutes",6,0,1],["getSelected",6,0,1],["getState",6,0,1],["getTabs",6,0,1],["name",1,1,2],["select",6,0,1],["selectedTab",5,0,1],["setRouteId",6,0,1],["tabbarHidden",1,1,3],["tabbarHighlight",2,1,3],["tabbarLayout",2,1,2],["tabbarPlacement",2,1,2],["tabs",5,0,1],["translucent",1,1,3]],0,[["ionChange"],["ionNavChanged"]]]);;