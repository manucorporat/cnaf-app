/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-checkbox_ios","ion-checkbox{position:relative;display:inline-block}ion-checkbox input{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-ios .checkbox-icon{border-radius:50%;position:relative;width:21px;height:21px;border-width:1px;border-style:solid;border-color:#c8c7cc;background-color:#fff}.checkbox-ios .checkbox-checked{border-color:#488aff;background-color:#488aff}.checkbox-ios .checkbox-checked .checkbox-inner{left:7px;top:4px;position:absolute;width:4px;height:9px;border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:#fff;transform:rotate(45deg)}.checkbox-ios.checkbox-disabled,.item-ios.item-checkbox-disabled ion-label{opacity:.3;pointer-events:none}.checkbox-key .checkbox-icon::after{position:absolute;top:-9px;left:-9px;display:block;width:36px;height:36px;background:#86a8df;opacity:.3;border-radius:50%;content:''}.item.item-ios .checkbox-ios{margin:8px 16px 8px 2px;position:static;display:block}.item.item-ios .checkbox-ios[slot=end]{margin:10px 8px 9px 0}.checkbox-ios-primary .checkbox-checked{border-color:#488aff;background-color:#488aff}.checkbox-ios-primary .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-secondary .checkbox-checked{border-color:#32db64;background-color:#32db64}.checkbox-ios-secondary .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-danger .checkbox-checked{border-color:#f53d3d;background-color:#f53d3d}.checkbox-ios-danger .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-light .checkbox-checked{border-color:#f4f4f4;background-color:#f4f4f4}.checkbox-ios-light .checkbox-checked .checkbox-inner{border-color:#000}.checkbox-ios-dark .checkbox-checked{border-color:#222;background-color:#222}.checkbox-ios-dark .checkbox-checked .checkbox-inner{border-color:#fff}\nion-checkbox.hydrated{visibility:inherit}");
App.loadComponents("zgln3ekb",function(e,t,o,i){"use strict";var n=function(e,t,o,i){var n,c=arguments.length,d=c<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)d=Reflect.decorate(e,t,o,i);else for(var h=e.length-1;h>=0;h--)(n=e[h])&&(d=(c<3?n(d):c>3?n(t,o,d):n(t,o))||d);return c>3&&d&&Object.defineProperty(t,o,d),d},c=function(){function e(){this.checked=!1,this.disabled=!1}return e.prototype.componentWillLoad=function(){this.inputId="ion-cb-"+d++,void 0===this.value&&(this.value=this.inputId),this.emitStyle()},e.prototype.componentDidLoad=function(){this.nativeInput.checked=this.checked,this.didLoad=!0;var e=this.nativeInput.closest("ion-item");if(e){var t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}},e.prototype.checkedChanged=function(e){this.nativeInput.checked!==e&&(this.nativeInput.checked=e),this.didLoad&&this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()},e.prototype.disabledChanged=function(e){this.nativeInput.disabled=e,this.emitStyle()},e.prototype.emitStyle=function(){var e=this;clearTimeout(this.styleTmr),this.styleTmr=setTimeout(function(){e.ionStyle.emit({"checkbox-disabled":e.disabled,"checkbox-checked":e.checked})})},e.prototype.onChange=function(){this.checked=!this.checked},e.prototype.onKeyUp=function(){this.keyFocus=!0},e.prototype.onFocus=function(){this.ionFocus.emit()},e.prototype.onBlur=function(){this.keyFocus=!1,this.ionBlur.emit()},e.prototype.hostData=function(){return{class:{"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus}}},e.prototype.render=function(){var e=this,o={"checkbox-icon":!0,"checkbox-checked":this.checked};return[t("div",{class:o},t("div",{class:"checkbox-inner"})),t("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:function(t){return e.nativeInput=t}})]},e}();n([],c.prototype,"keyFocus",void 0),n([],c.prototype,"color",void 0),n([],c.prototype,"mode",void 0),n([],c.prototype,"name",void 0),n([],c.prototype,"checked",void 0),n([],c.prototype,"disabled",void 0),n([],c.prototype,"value",void 0),n([],c.prototype,"ionChange",void 0),n([],c.prototype,"ionFocus",void 0),n([],c.prototype,"ionBlur",void 0),n([],c.prototype,"ionStyle",void 0),n([],c.prototype,"checkedChanged",null),n([],c.prototype,"disabledChanged",null),c=n([],c);var d=0;e["ion-checkbox"]=c},["ion-checkbox",[["checked",2,1,3],["color",1,1,2],["disabled",1,1,3],["keyFocus",5,0,1],["mode",1,1,1],["name",1,1,2],["value",2,1,2]],{theme:"checkbox"},[["ionBlur"],["ionChange"],["ionFocus"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"]]]);;