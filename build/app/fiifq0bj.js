/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-reorder","\nion-reorder.hydrated{visibility:inherit}","ion-reorder-group","ion-reorder-group>ion-gesture{display:block}.reorder-list-active ion-gesture>*{transition:transform .3s;will-change:transform}.reorder-selected{position:relative;z-index:100;box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;transition:none!important}ion-reorder.no-hide{display:block;visibility:normal}ion-reorder:not(.no-hide){display:none;pointer-events:all!important;touch-action:manipulation}.reorder-enabled ion-reorder{display:block;cursor:grab;cursor:-webkit-grab}.reorder-selected,.reorder-selected ion-reorder{cursor:grabbing;cursor:-webkit-grabbing}ion-reorder[slot]{line-height:0;margin-top:auto!important;margin-bottom:auto!important}ion-reorder[slot=start]{order:-1}.reorder-icon{transform:translate3d(160%,0,0);font-size:1.3em;transition:transform 140ms ease-in}.item-ios .reorder-icon{font-size:2em;opacity:.3}ion-reorder[slot=start] .reorder-icon{transform:translate3d(-160%,0,0)}.reorder-visible ion-reorder .reorder-icon{transform:translate3d(0,0,0)}\nion-reorder-group.hydrated{visibility:inherit}");
App.loadComponents("fiifq0bj",function(t,e,o,n){"use strict";function r(t,e,o){return Math.max(t,Math.min(e,o))}function i(){p&&p.gestureSelectionStart()}function s(){p&&p.gestureSelectionChanged()}function l(){p&&p.gestureSelectionEnd()}function a(t){return t.$ionIndex}function c(t,e){for(var o,n=0;t&&n<6;){if((o=t.parentNode)===e)return t;t=o,n++}return null}var d=function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},h=function(){function t(){this.hasContent=null}return t.prototype.componentDidLoad=function(){this.hasContent=this.el.childElementCount>0},t.prototype.render=function(){return!0===this.hasContent?e("slot",null):!1===this.hasContent?e("ion-icon",{class:"reorder-icon",name:"reorder"}):void 0},t}();d([],h.prototype,"hasContent",void 0),d([],h.prototype,"el",void 0),h=d([],h);var p=window.TapticEngine,u=function(t){var e,o={},n=["webkitTransform","-webkit-transform","webkit-transform","transform"];for(e=0;e<n.length;e++)if(void 0!==t.style[n[e]]){o.transformProp=n[e];break}for(n=["webkitTransition","transition"],e=0;e<n.length;e++)if(void 0!==t.style[n[e]]){o.transitionProp=n[e];break}var r=o.transitionProp.indexOf("webkit")>-1?"-webkit-":"";return o.transitionDurationProp=r+"transition-duration",o.transitionTimingFnProp=r+"transition-timing-function",o}(document.documentElement),f=function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},v=function(){function t(){this.selectedItemEl=null,this.cachedHeights=[],this._enabled=!1,this._iconVisible=!1,this._actived=!1,this.enabled=!1}return t.prototype.enabledChanged=function(t){var e=this;t?(this._enabled=!0,o.dom.raf(function(){e._iconVisible=!0})):(this._iconVisible=!1,setTimeout(function(){return e._enabled=!1},400))},t.prototype.componentDidLoad=function(){this.containerEl=this.el.querySelector("ion-gesture"),this.scrollEl=this.el.closest("ion-scroll")},t.prototype.componentDidUnload=function(){this.onDragEnd()},t.prototype.canStart=function(t){if(this.selectedItemEl)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var o=c(e,this.containerEl);return o?(t.data=o,!0):(console.error("reorder node not found"),!1)},t.prototype.onDragStart=function(t){t.event&&(t.event.preventDefault(),t.event.stopPropagation());var e=this.selectedItemEl=t.data,o=this.cachedHeights;o.length=0;var n=this.containerEl.children;if(n&&0!==n.length){for(var r=0,s=0,l=n.length;s<l;s++){var c=n[s];r+=c.offsetHeight,o.push(r),c.$ionIndex=s}var d=this.containerEl.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+60,this.scrollElBottom=h.bottom-60}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this._actived=!0,e.classList.add("reorder-selected"),i()}},t.prototype.onDragMove=function(t){var e=this.selectedItemEl;if(e){var o=this.autoscroll(t.currentY),n=this.containerTop-o,i=this.containerBottom-o,l=r(n,t.currentY,i),c=o+l-t.startY,d=l-n,h=this.itemIndexForTop(d);if(void 0!==h&&h!==this.lastToIndex){var p=a(e);this.lastToIndex=h,s(),this._reorderMove(p,h)}e.style[u.transformProp]="translateY("+c+"px)"}},t.prototype.onDragEnd=function(){var t=this;this._actived=!1;var e=this.selectedItemEl;if(e){var o=this.containerEl.children,n=this.lastToIndex,r=a(e),i=r<n?o[n+1]:o[n];this.containerEl.insertBefore(this.selectedItemEl,i);for(var s=o.length,c=u.transformProp,d=0;d<s;d++)o[d].style[c]="";var h=function(){t.selectedItemEl.style.transition="",t.selectedItemEl.classList.remove("reorder-selected"),t.selectedItemEl=null};n===r?(e.style.transition="transform 200ms ease-in-out",setTimeout(h,200)):h(),l()}},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,o=0;for(o=0;o<e.length&&!(e[o]>t);o++);return o},t.prototype._reorderMove=function(t,e){for(var o=this.selectedItemHeight,n=this.containerEl.children,r=u.transformProp,i=0;i<n.length;i++){var s=n[i].style,l="";i>t&&i<=e?l="translateY("+-o+"px)":i<t&&i>=e&&(l="translateY("+o+"px)"),s[r]=l}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-10:t>this.scrollElBottom&&(e=10),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){return{class:{"reorder-enabled":this._enabled,"reorder-list-active":this._actived,"reorder-visible":this._iconVisible}}},t.prototype.render=function(){return e("ion-gesture",Object.assign({},{disableScroll:!0,canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),enabled:this.enabled,gestureName:"reorder",gesturePriority:30,type:"pan",direction:"y",threshold:0,attachTo:"body"}),e("slot",null))},t}();f([],v.prototype,"_enabled",void 0),f([],v.prototype,"_iconVisible",void 0),f([],v.prototype,"_actived",void 0),f([],v.prototype,"el",void 0),f([],v.prototype,"enabled",void 0),f([],v.prototype,"enabledChanged",null),v=f([],v),t["ion-reorder"]=h,t["ion-reorder-group"]=v},["ion-reorder",[["el",7,0,1],["hasContent",5,0,1]]],["ion-reorder-group",[["_actived",5,0,1],["_enabled",5,0,1],["_iconVisible",5,0,1],["el",7,0,1],["enabled",1,1,3]],0,0,0,[["enabled","enabledChanged"]]]);;