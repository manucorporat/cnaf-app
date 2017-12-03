/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-toggle_ios","ion-toggle{display:inline-block;contain:content}ion-toggle ion-gesture{display:block;width:100%;height:100%;visibility:inherit}.toggle-cover{left:0;position:absolute;top:0;width:100%;height:100%;border:0;outline:0;font-family:inherit;font-style:inherit;font-variant:inherit;line-height:1;text-transform:none;background:0 0;cursor:pointer}ion-toggle input{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer;pointer-events:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.toggle-key input{border:2px solid #5e9ed6}.toggle-ios{position:relative;width:51px;height:32px;box-sizing:content-box;contain:strict}.toggle-ios .toggle-icon{border-radius:16px;position:relative;display:block;width:100%;height:100%;background-color:#e6e6e6;transition:background-color .3s;pointer-events:none}.toggle-ios .toggle-icon::before{left:2px;right:2px;top:2px;bottom:2px;border-radius:16px;position:absolute;background-color:#fff;content:\"\";transform:scale3d(1,1,1);transition:transform .3s}.toggle-ios .toggle-inner{left:2px;top:2px;border-radius:14px;position:absolute;width:28px;height:28px;background-color:#fff;box-shadow:0 3px 12px rgba(0,0,0,.16),0 3px 1px rgba(0,0,0,.1);transition:transform .3s,width 120ms ease-in-out 80ms,left 110ms ease-in-out 80ms,right 110ms ease-in-out 80ms;will-change:transform;contain:strict}.toggle-ios.toggle-checked .toggle-icon{background-color:#488aff}.toggle-ios.toggle-activated .toggle-icon::before,.toggle-ios.toggle-checked .toggle-icon::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-checked .toggle-inner{transform:translate3d(19px,0,0)}.toggle-ios.toggle-activated.toggle-checked .toggle-inner::before{transform:scale3d(0,0,0)}.toggle-ios.toggle-activated .toggle-inner{width:34px}.toggle-ios.toggle-activated.toggle-checked .toggle-inner{left:-4px}.item-ios.item-toggle-disabled ion-label,.toggle-ios.toggle-disabled{opacity:.3;pointer-events:none}.item-ios .toggle-ios[slot]{margin:0;padding:6px 8px 5px 16px}.item-ios .toggle-ios[slot=start]{padding:6px 16px 5px 0}.toggle-ios-primary.toggle-checked .toggle-icon{background-color:#488aff}.toggle-ios-secondary.toggle-checked .toggle-icon{background-color:#32db64}.toggle-ios-danger.toggle-checked .toggle-icon{background-color:#f53d3d}.toggle-ios-light.toggle-checked .toggle-icon{background-color:#f4f4f4}.toggle-ios-dark.toggle-checked .toggle-icon{background-color:#222}\nion-toggle.hydrated{visibility:inherit}");
App.loadComponents("jgizsj3q",function(t,e,i,o){"use strict";function n(){d&&d.selection()}function c(t,e,i){var o="rtl"===document.dir;return t?!o&&i>e||o&&-i<e:!o&&-i<e||o&&i>e}var d=window.TapticEngine,s=function(t,e,i,o){var n,c=arguments.length,d=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(t,e,i,o);else for(var s=t.length-1;s>=0;s--)(n=t[s])&&(d=(c<3?n(d):c>3?n(e,i,d):n(e,i))||d);return c>3&&d&&Object.defineProperty(e,i,d),d},h=function(){function t(){this.activated=!1,this.checked=!1,this.disabled=!1,this.gestureConfig={onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"toggle",gesturePriority:30,type:"pan",direction:"x",threshold:0,attachTo:"parent"}}return t.prototype.componentWillLoad=function(){this.inputId="ion-tg-"+a++,void 0===this.value&&(this.value=this.inputId),this.emitStyle()},t.prototype.componentDidLoad=function(){this.nativeInput.checked=this.checked,this.didLoad=!0;var t=this.nativeInput.closest("ion-item");if(t){var e=t.querySelector("ion-label");e&&(e.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",e.id))}},t.prototype.checkedChanged=function(t){this.nativeInput.checked!==t&&(this.nativeInput.checked=t),this.didLoad&&this.ionChange.emit({checked:t,value:this.value}),this.emitStyle()},t.prototype.disabledChanged=function(t){this.nativeInput.disabled=t,this.emitStyle()},t.prototype.emitStyle=function(){var t=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){t.ionStyle.emit({"toggle-disabled":t.disabled,"toggle-checked":t.checked,"toggle-activated":t.activated})})},t.prototype.onDragStart=function(t){this.pivotX=t.currentX,this.activated=!0},t.prototype.onDragMove=function(t){var e=t.currentX;c(this.checked,e-this.pivotX,-15)&&(this.checked=!this.checked,this.pivotX=e,n())},t.prototype.onDragEnd=function(t){var e=t.currentX-this.pivotX;c(this.checked,e,4)&&(this.checked=!this.checked,n()),this.activated=!1,this.nativeInput.focus()},t.prototype.onChange=function(){this.checked=!this.checked},t.prototype.onKeyUp=function(){this.keyFocus=!0},t.prototype.onFocus=function(){this.ionFocus.emit()},t.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},t.prototype.hostData=function(){return{class:{"toggle-activated":this.activated,"toggle-checked":this.checked,"toggle-disabled":this.disabled,"toggle-key":this.keyFocus}}},t.prototype.render=function(){var t=this;return[e("ion-gesture",Object.assign({},this.gestureConfig,{enabled:!this.disabled,tabIndex:-1}),e("div",{class:"toggle-icon"},e("div",{class:"toggle-inner"})),e("div",{class:"toggle-cover"})),e("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(e){return t.nativeInput=e}})]},t}();s([],h.prototype,"activated",void 0),s([],h.prototype,"keyFocus",void 0),s([],h.prototype,"color",void 0),s([],h.prototype,"mode",void 0),s([],h.prototype,"name",void 0),s([],h.prototype,"checked",void 0),s([],h.prototype,"disabled",void 0),s([],h.prototype,"value",void 0),s([],h.prototype,"ionChange",void 0),s([],h.prototype,"ionFocus",void 0),s([],h.prototype,"ionBlur",void 0),s([],h.prototype,"ionStyle",void 0),s([],h.prototype,"checkedChanged",null),s([],h.prototype,"disabledChanged",null),h=s([],h);var a=0;t["ion-toggle"]=h},["ion-toggle",[["activated",5,0,1],["checked",2,1,3],["color",1,1,2],["disabled",2,1,3],["keyFocus",5,0,1],["mode",1,1,1],["name",1,1,2],["value",2,1,2]],{theme:"toggle"},[["ionBlur"],["ionChange"],["ionFocus"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"]]]);;