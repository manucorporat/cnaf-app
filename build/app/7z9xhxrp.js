/*! Built with http://stenciljs.com */

App.loadStyles("ion-checkbox_ios","ion-checkbox{position:relative;display:inline-block}ion-checkbox input{left:0;top:0;position:absolute;width:100%;height:100%;background:0 0;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.checkbox-ios .checkbox-icon{border-radius:50%;position:relative;width:21px;height:21px;border-width:1px;border-style:solid;border-color:#c8c7cc;background-color:#fff}.checkbox-ios .checkbox-checked{border-color:#488aff;background-color:#488aff}.checkbox-ios .checkbox-checked .checkbox-inner{left:7px;top:4px;position:absolute;width:4px;height:9px;border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:#fff;transform:rotate(45deg)}.checkbox-ios.checkbox-disabled,.item-ios.item-checkbox-disabled ion-label{opacity:.3;pointer-events:none}.checkbox-key .checkbox-icon::after{position:absolute;top:-9px;left:-9px;display:block;width:36px;height:36px;background:#86a8df;opacity:.3;border-radius:50%;content:''}.item.item-ios .checkbox-ios{margin:8px 16px 8px 2px;position:static;display:block}.item.item-ios .checkbox-ios[slot=end]{margin:10px 8px 9px 0}.checkbox-ios-primary .checkbox-checked{border-color:#488aff;background-color:#488aff}.checkbox-ios-primary .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-secondary .checkbox-checked{border-color:#32db64;background-color:#32db64}.checkbox-ios-secondary .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-danger .checkbox-checked{border-color:#f53d3d;background-color:#f53d3d}.checkbox-ios-danger .checkbox-checked .checkbox-inner{border-color:#fff}.checkbox-ios-light .checkbox-checked{border-color:#f4f4f4;background-color:#f4f4f4}.checkbox-ios-light .checkbox-checked .checkbox-inner{border-color:#000}.checkbox-ios-dark .checkbox-checked{border-color:#222;background-color:#222}.checkbox-ios-dark .checkbox-checked .checkbox-inner{border-color:#fff}\nion-checkbox.hydrated{visibility:inherit}");
App.loadComponents("7z9xhxrp",function(e,t,i,o){"use strict";var c=function(e,t,i,o){var c,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,o);else for(var h=e.length-1;h>=0;h--)(c=e[h])&&(s=(n<3?c(s):n>3?c(t,i,s):c(t,i))||s);return n>3&&s&&Object.defineProperty(t,i,s),s};class n{constructor(){this.checked=!1,this.disabled=!1}componentWillLoad(){this.inputId="ion-cb-"+s++,void 0===this.value&&(this.value=this.inputId),this.emitStyle()}componentDidLoad(){this.nativeInput.checked=this.checked,this.didLoad=!0;const e=this.nativeInput.closest("ion-item");if(e){const t=e.querySelector("ion-label");t&&(t.id=this.inputId+"-lbl",this.nativeInput.setAttribute("aria-labelledby",t.id))}}checkedChanged(e){this.nativeInput.checked!==e&&(this.nativeInput.checked=e),this.didLoad&&this.ionChange.emit({checked:e,value:this.value}),this.emitStyle()}disabledChanged(e){this.nativeInput.disabled=e,this.emitStyle()}emitStyle(){clearTimeout(this.styleTmr),this.styleTmr=setTimeout(()=>{this.ionStyle.emit({"checkbox-disabled":this.disabled,"checkbox-checked":this.checked})})}onChange(){this.checked=!this.checked}onKeyUp(){this.keyFocus=!0}onFocus(){this.ionFocus.emit()}onBlur(){this.keyFocus=!1,this.ionBlur.emit()}hostData(){return{class:{"checkbox-checked":this.checked,"checkbox-disabled":this.disabled,"checkbox-key":this.keyFocus}}}render(){const e={"checkbox-icon":!0,"checkbox-checked":this.checked};return[t("div",{class:e},t("div",{class:"checkbox-inner"})),t("input",{type:"checkbox",onChange:this.onChange.bind(this),onFocus:this.onFocus.bind(this),onBlur:this.onBlur.bind(this),onKeyUp:this.onKeyUp.bind(this),id:this.inputId,name:this.name,value:this.value,disabled:this.disabled,ref:e=>this.nativeInput=e})]}}c([],n.prototype,"keyFocus",void 0),c([],n.prototype,"color",void 0),c([],n.prototype,"mode",void 0),c([],n.prototype,"name",void 0),c([],n.prototype,"checked",void 0),c([],n.prototype,"disabled",void 0),c([],n.prototype,"value",void 0),c([],n.prototype,"ionChange",void 0),c([],n.prototype,"ionFocus",void 0),c([],n.prototype,"ionBlur",void 0),c([],n.prototype,"ionStyle",void 0),c([],n.prototype,"checkedChanged",null),c([],n.prototype,"disabledChanged",null),n=c([],n);let s=0;e["ion-checkbox"]=n},["ion-checkbox",[["checked",2,1,3],["color",1,1,2],["disabled",1,1,3],["keyFocus",5,0,1],["mode",1,1,1],["name",1,1,2],["value",2,1,2]],{theme:"checkbox"},[["ionBlur"],["ionChange"],["ionFocus"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"]]]);;