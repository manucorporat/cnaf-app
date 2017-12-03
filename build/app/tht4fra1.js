/*! Built with http://stenciljs.com */

App.loadStyles("ion-split-pane_md",".split-pane{left:0;right:0;top:0;bottom:0;position:absolute;display:flex;flex-direction:row;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;z-index:0;flex:1;box-shadow:none!important}.split-pane-visible>.split-pane-side{flex-shrink:0;order:-1}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{display:flex}.split-pane-visible>ion-menu.menu-enabled>.menu-inner{left:0;right:0;width:auto;box-shadow:none!important;transform:none!important}.split-pane-visible>ion-menu.menu-enabled>.ion-backdrop{display:hidden!important}.split-pane-visible>.split-pane-side[side=start]{order:-1}.split-pane-visible>.split-pane-side[side=end]{order:1}.split-pane-visible>.split-pane-side[side=left]{order:-1}.split-pane-visible>.split-pane-side[side=right]{order:1}.split-pane-md.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:1px solid #dedede;border-left:0}.split-pane-md.split-pane-visible>.split-pane-side[side=right]{border-right:0;border-left:1px solid #dedede}\nion-split-pane.hydrated{visibility:inherit}");
App.loadComponents("tht4fra1",function(e,i,t,n){"use strict";function s(e,i){let t,n;i?(t=l,n=h):(t=h,n=l);const s=e.classList;s.add(t),s.remove(n)}var o=function(e,i,t,n){var s,o=arguments.length,l=o<3?i:null===n?n=Object.getOwnPropertyDescriptor(i,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,i,t,n);else for(var h=e.length-1;h>=0;h--)(s=e[h])&&(l=(o<3?s(l):o>3?s(i,t,l):s(i,t))||l);return o>3&&l&&Object.defineProperty(i,t,l),l};const l="split-pane-main",h="split-pane-side",r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""};class a{constructor(){this.visible=!1,this.enabled=!0,this.when=r.md}componentDidLoad(){this._styleChildren(),this.whenChanged()}componentDidUnload(){this.rmL&&this.rmL(),this.rmL=null}_styleChildren(){const e=this.el.children,i=this.el.childElementCount;let t=!1;for(var n=0;n<i;n++){var o=e[n],l=o.hasAttribute("main");if(l){if(t)return void console.warn("split pane can not have more than one main node");t=!0}s(o,l)}t||console.warn("split pane could not found any main node")}whenChanged(){if(this.rmL&&this.rmL(),this.rmL=null,!this.enabled)return void this._setVisible(!1);const e=this.when;if("boolean"==typeof e)return void this._setVisible(e);const i=r[e],t=i||e;if(!t||0===t.length)return void this._setVisible(!1);const n=e=>this._setVisible(e.matches),s=window.matchMedia(t);s.addListener(n),this.rmL=(()=>s.removeListener(n)),this._setVisible(s.matches)}_setVisible(e){if(this.visible!==e){this.visible=e;const i={splitPane:this};this.ionChange.emit(i),this.ionSplitPaneDidChange.emit(i)}}isVisible(){return this.visible}isPane(e){return!!this.visible&&(e.parentElement===this.el&&e.classList.contains(h))}hostData(){return{class:{"split-pane-visible":this.visible}}}render(){return i("slot",null)}}o([],a.prototype,"el",void 0),o([],a.prototype,"visible",void 0),o([],a.prototype,"enabled",void 0),o([],a.prototype,"when",void 0),o([],a.prototype,"ionSplitPaneDidChange",void 0),o([],a.prototype,"ionChange",void 0),o([],a.prototype,"whenChanged",null),o([],a.prototype,"isVisible",null),a=o([],a),e["ion-split-pane"]=a},["ion-split-pane",[["el",7,0,1],["enabled",1,1,3],["isVisible",6,0,1],["visible",5,0,1],["when",1,1,1]],{theme:"split-pane"},[["ionChange"],["ionSplitPaneDidChange"]],0,[["when","whenChanged"]]]);;