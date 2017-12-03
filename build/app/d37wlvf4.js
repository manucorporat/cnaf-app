/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-item-option_ios","\nion-item-option.hydrated{visibility:inherit}","ion-item-options_ios","\nion-item-options.hydrated{visibility:inherit}","ion-item-sliding_ios","ion-item-sliding{position:relative;display:block;overflow:hidden;width:100%}ion-item-options{position:absolute;z-index:1;display:none;height:100%;font-size:14px;visibility:hidden;top:0;right:0;justify-content:flex-end}ion-item-options[side=left]{right:auto;left:0;justify-content:flex-start}ion-item-option{padding:0 .7em;position:relative;display:flex;align-items:center;min-width:6rem}.item-option-button{left:0;right:0;top:0;bottom:0;margin:0;padding:0;border-radius:0;position:absolute;border:0;background:0 0}ion-item-options:not([icon-start]) ion-item-option:not([icon-only]) .button-inner{flex-direction:column}ion-item-sliding.active-slide ion-item,ion-item-sliding.active-slide ion-item.activated{position:relative;z-index:2;opacity:1;transition:transform .5s cubic-bezier(.36,.66,.04,1);pointer-events:none;will-change:transform}ion-item-sliding.active-slide ion-item-options{display:flex}ion-item-sliding.active-slide.active-options-left ion-item-options[side=left],ion-item-sliding.active-slide.active-options-right ion-item-options:not([side=left]){width:100%;visibility:visible}ion-item-option[expandable]{flex-shrink:0;transition-duration:0;transition-property:none;transition-timing-function:cubic-bezier(.65,.05,.36,1)}ion-item-sliding.active-swipe-right ion-item-option[expandable]{transition-duration:.6s;transition-property:padding-left;padding-left:90%;order:1}ion-item-sliding.active-swipe-left ion-item-option[expandable]{transition-duration:.6s;transition-property:padding-right;padding-right:90%;order:-1}.list-ios ion-item-sliding{background-color:#fff}.list-ios ion-item-options{border-bottom:.55px solid #c8c7cc}.list-ios .item-options-right ion-item-option:last-child{padding-right:calc(constant(safe-area-inset-right) + .7em);padding-right:calc(env(safe-area-inset-right) + .7em)}.list-ios .item-options-left ion-item-option:first-child{padding-left:calc(constant(safe-area-inset-left) + .7em);padding-left:calc(env(safe-area-inset-left) + .7em)}.item-option-ios{font-size:1.6rem;color:#fff;background-color:#488aff}.item-option-ios .icon{fill:#fff}.list-ios[no-lines] ion-item-options{border-width:0}.item-option-ios-primary{color:#fff;background-color:#488aff}.item-option-ios-primary .icon{fill:#fff}.item-option-ios-secondary{color:#fff;background-color:#32db64}.item-option-ios-secondary .icon{fill:#fff}.item-option-ios-danger{color:#fff;background-color:#f53d3d}.item-option-ios-danger .icon{fill:#fff}.item-option-ios-light{color:#000;background-color:#f4f4f4}.item-option-ios-light .icon{fill:#000}.item-option-ios-dark{color:#fff;background-color:#222}.item-option-ios-dark .icon{fill:#fff}\nion-item-sliding.hydrated{visibility:inherit}");
App.loadComponents("d37wlvf4",function(t,i,e,o){"use strict";function n(t,i){void 0===i&&(i=!1);var e="rtl"===document.dir;switch(t){case"right":return!0;case"left":return!1;case"end":return!e;case"start":return e;default:return i?!e:e}}function s(t,i,e){return!i&&e||t&&i}var r=function(t,i,e,o){var n,s=arguments.length,r=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,o);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(r=(s<3?n(r):s>3?n(i,e,r):n(i,e))||r);return s>3&&r&&Object.defineProperty(i,e,r),r},p=function(){function t(){this.disabled=!1}return t.prototype.notCaptured=function(){},t.prototype.clickedOptionButton=function(t){return!!t.target.closest("ion-item-option")},t.prototype.render=function(){var t=this.href?"a":"button";return[i(t,{class:"item-option-button",onClick:this.clickedOptionButton.bind(this),disabled:this.disabled}),i("span",{class:"button-inner"},i("slot",null))]},t}();r([],p.prototype,"color",void 0),r([],p.prototype,"mode",void 0),r([],p.prototype,"href",void 0),r([],p.prototype,"disabled",void 0),p=r([],p);var h=function(t,i,e,o){var n,s=arguments.length,r=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,o);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(r=(s<3?n(r):s>3?n(i,e,r):n(i,e))||r);return s>3&&r&&Object.defineProperty(i,e,r),r},l=function(){function t(){this.side="right"}return t.prototype.isRightSide=function(){return n(this.side,!0)},t.prototype.width=function(){return this.el.offsetWidth},t.prototype.fireSwipeEvent=function(t){this.ionSwipe.emit(t)},t.prototype.hostData=function(){return{class:{"item-options-left":!this.isRightSide(),"item-options-right":this.isRightSide()}}},t.prototype.render=function(){return i("slot",null)},t}();h([],l.prototype,"el",void 0),h([],l.prototype,"side",void 0),h([],l.prototype,"ionSwipe",void 0),h([],l.prototype,"isRightSide",null),h([],l.prototype,"width",null),h([],l.prototype,"fireSwipeEvent",null),l=h([],l);var a=function(t,i,e,o){var n,s=arguments.length,r=s<3?i:null===o?o=Object.getOwnPropertyDescriptor(i,e):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,i,e,o);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(r=(s<3?n(r):s>3?n(i,e,r):n(i,e))||r);return s>3&&r&&Object.defineProperty(i,e,r),r},d=function(){function t(){this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.tmr=null,this.optsDirty=!0,this.state=2,this.gestureOptions={canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"item-swipe",gesturePriority:-10,type:"pan",direction:"x",maxAngle:20,threshold:5,attachTo:"parent"}}return t.prototype.componentDidLoad=function(){this.item=this.el.querySelector("ion-item"),this.list=this.el.closest("ion-list"),this.updateOptions()},t.prototype.componentDidUnload=function(){this.item=this.list=this.leftOptions=this.rightOptions=null},t.prototype.getOpenAmount=function(){return this.openAmount},t.prototype.getSlidingPercent=function(){var t=this.openAmount;return t>0?t/this.optsWidthRightSide:t<0?t/this.optsWidthLeftSide:0},t.prototype.close=function(){this.setOpenAmount(0,!0)},t.prototype.closeOpened=function(){return this.list&&this.list.closeSlidingItems()},t.prototype.updateOptions=function(){var t=this.el.querySelectorAll("ion-item-options"),i=0;this.leftOptions=this.rightOptions=null;for(var e=0;e<t.length;e++){var o=t.item(e);o.isRightSide()?(this.rightOptions=o,i|=2):(this.leftOptions=o,i|=1)}this.optsDirty=!0,this.sides=i},t.prototype.canStart=function(){var t=this.list&&this.list.getOpenedItem();return!t||t===this||(this.closeOpened(),!1)},t.prototype.onDragStart=function(){this.list&&this.list.setOpenedItem(this),this.tmr&&(clearTimeout(this.tmr),this.tmr=null),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item.style.transition="none"},t.prototype.onDragMove=function(t){this.optsDirty&&this.calculateOptsWidth();var i=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:i=Math.max(0,i);break;case 1:i=Math.min(0,i);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}var e;i>this.optsWidthRightSide?i=(e=this.optsWidthRightSide)+.55*(i-e):i<-this.optsWidthLeftSide&&(i=(e=-this.optsWidthLeftSide)+.55*(i-e)),this.setOpenAmount(i,!1)},t.prototype.onDragEnd=function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;s(this.openAmount>0==!(i<0),Math.abs(i)>.3,Math.abs(this.openAmount)<Math.abs(e/2))&&(e=0),this.setOpenAmount(e,!0),32&this.state?this.rightOptions.fireSwipeEvent(this):64&this.state&&this.leftOptions.fireSwipeEvent(this)},t.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.width()),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.width()),this.optsDirty=!1},t.prototype.setOpenAmount=function(t,i){var e=this;this.tmr&&(clearTimeout(this.tmr),this.tmr=null);var o=this.item.style;if(this.openAmount=t,i?o.transition="":t>0?this.state=t>=this.optsWidthRightSide+30?40:8:t<0&&(this.state=t<=-this.optsWidthLeftSide-30?80:16),0===t)return this.tmr=setTimeout(function(){e.state=2,e.tmr=null},600),this.list&&this.list.setOpenedItem(null),void(o.transform="");o.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit(this)},t.prototype.hostData=function(){return{class:{"item-wrapper":!0,"active-slide":2!==this.state,"active-options-right":!!(8&this.state),"active-options-left":!!(16&this.state),"active-swipe-right":!!(32&this.state),"active-swipe-left":!!(64&this.state)}}},t.prototype.render=function(){return i("ion-gesture",Object.assign({},this.gestureOptions),i("slot",null))},t}();a([],d.prototype,"el",void 0),a([],d.prototype,"state",void 0),a([],d.prototype,"ionDrag",void 0),a([],d.prototype,"getOpenAmount",null),a([],d.prototype,"getSlidingPercent",null),a([],d.prototype,"close",null),a([],d.prototype,"closeOpened",null),d=a([],d),t["ion-item-option"]=p,t["ion-item-options"]=l,t["ion-item-sliding"]=d},["ion-item-option",[["color",1,1,2],["disabled",1,1,3],["href",1,1,2],["mode",1,1,1]],{theme:"item-option"}],["ion-item-options",[["el",7,0,1],["fireSwipeEvent",6,0,1],["isRightSide",6,0,1],["side",1,1,1],["width",6,0,1]],0,[["ionSwipe"]]],["ion-item-sliding",[["close",6,0,1],["closeOpened",6,0,1],["el",7,0,1],["getOpenAmount",6,0,1],["getSlidingPercent",6,0,1],["state",5,0,1]],0,[["ionDrag"]]]);;