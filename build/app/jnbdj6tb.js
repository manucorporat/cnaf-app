/*! Built with http://stenciljs.com */

App.loadStyles("ion-input_ios","ion-input,ion-textarea{position:relative;display:block;flex:1;width:100%}.item-input ion-input,.item-input ion-textarea{position:static}.item.item-textarea{align-items:stretch}.text-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;border-radius:0;display:inline-block;flex:1;width:92%;width:calc(100% - 10px);border:0;background:0 0}.text-input::-moz-placeholder{color:#999}.text-input:-ms-input-placeholder{color:#999}.text-input::-webkit-input-placeholder{text-indent:0;color:#999}textarea.text-input{display:block}.text-input[disabled]{opacity:.4}input.text-input:-webkit-autofill{background-color:transparent}.platform-mobile textarea.text-input{resize:none}.input-cover{left:0;top:0;position:absolute;width:100%;height:100%}.input[disabled] .input-cover{pointer-events:none}.item-input-has-focus .input-cover{display:none}.item-input-has-focus{pointer-events:none}.item-input-has-focus a,.item-input-has-focus button,.item-input-has-focus input,.item-input-has-focus textarea{pointer-events:auto}[next-input]{padding:0;position:absolute;bottom:20px;width:1px;height:1px;border:0;background:0 0;pointer-events:none}.text-input-clear-icon{margin:0;padding:0;background-position:center;position:absolute;top:0;display:none;height:100%;background-repeat:no-repeat}.item-input-has-focus.item-input-has-value .text-input-clear-icon{display:block}.text-input-ios{margin:11px 8px 11px 0;padding:0;width:calc(100% - 8px)}.input-ios .inset-input{padding:5.5px 8px;margin:5.5px 16px 5.5px 0}.item-ios.item-label-floating .text-input,.item-ios.item-label-stacked .text-input{margin-left:0;margin-top:8px;margin-bottom:8px;width:calc(100% - 8px)}.item-ios.item-label-floating .label-ios+.input+.cloned-input,.item-ios.item-label-stacked .label-ios+.input+.cloned-input{margin-left:0}.item-label-floating .select-ios,.item-label-stacked .select-ios{padding-left:0;padding-top:8px;padding-bottom:8px}.input-ios[clearInput]{position:relative}.input-ios[clearInput] .text-input{padding-right:30px}.input-ios .text-input-clear-icon{right:8px;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='rgba(0,0,0,0.5)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;background-color:transparent;background-size:18px}\nion-input.hydrated{visibility:inherit}","ion-textarea_ios","\nion-textarea.hydrated{visibility:inherit}");
App.loadComponents("jnbdj6tb",function(t,e,i,o){"use strict";function s(t,e,i){return i.split(" ").reduce((i,o)=>(i[o]=!0,t&&(i[`${o}-${t}`]=!0,e&&(i[`${o}-${e}`]=!0,i[`${o}-${t}-${e}`]=!0)),i),{})}var l=function(t,e,i,o){var s,l=arguments.length,a=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(a=(l<3?s(a):l>3?s(e,i,a):s(e,i))||a);return l>3&&a&&Object.defineProperty(e,i,a),a};class a{constructor(){this.autocapitalize="none",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.checked=!1,this.clearInput=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text"}checkedChanged(){this.emitStyle()}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.el.querySelector("input");t.value!==this.value&&(t.value=this.value)}componentDidLoad(){this.emitStyle(),"password"===this.type&&!1!==this.clearOnEdit&&(this.clearOnEdit=!0)}emitStyle(){clearTimeout(this.styleTmr);let t={input:!0,"input-checked":this.checked,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()};this.styleTmr=setTimeout(()=>{this.ionStyle.emit(t)})}inputBlurred(t){this.ionBlur.emit(t),this.focusChange(this.hasFocus()),this.emitStyle()}inputChanged(t){this.value=t.target&&t.target.value,this.emitStyle()}inputFocused(t){this.ionFocus.emit(t),this.focusChange(this.hasFocus()),this.emitStyle()}focusChange(t){this.clearOnEdit&&!t&&this.hasValue()&&(this.didBlurAfterEdit=!0)}inputKeydown(){this.checkClearOnEdit()}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}clearTextInput(){this.value=""}hasFocus(){return this.el&&this.el.querySelector(":focus")===this.el.querySelector("input")}hasValue(){return null!==this.value&&void 0!==this.value&&""!==this.value}render(){const t=s(this.mode,this.color,"text-input");return[e("input",{"aria-disabled":!!this.disabled&&"true",accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,checked:this.checked,disabled:this.disabled,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder,results:this.results,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:this.value,class:t,onBlur:this.inputBlurred.bind(this),onInput:this.inputChanged.bind(this),onFocus:this.inputFocused.bind(this),onKeyDown:this.inputKeydown.bind(this)}),e("button",{hidden:!0!==this.clearInput,class:"text-input-clear-icon",onClick:this.clearTextInput.bind(this),onMouseDown:this.clearTextInput.bind(this)})]}}l([],a.prototype,"el",void 0),l([],a.prototype,"ionStyle",void 0),l([],a.prototype,"ionBlur",void 0),l([],a.prototype,"ionFocus",void 0),l([],a.prototype,"accept",void 0),l([],a.prototype,"autocapitalize",void 0),l([],a.prototype,"autocomplete",void 0),l([],a.prototype,"autocorrect",void 0),l([],a.prototype,"autofocus",void 0),l([],a.prototype,"checked",void 0),l([],a.prototype,"checkedChanged",null),l([],a.prototype,"clearInput",void 0),l([],a.prototype,"clearOnEdit",void 0),l([],a.prototype,"disabled",void 0),l([],a.prototype,"disabledChanged",null),l([],a.prototype,"inputmode",void 0),l([],a.prototype,"max",void 0),l([],a.prototype,"maxlength",void 0),l([],a.prototype,"min",void 0),l([],a.prototype,"minlength",void 0),l([],a.prototype,"multiple",void 0),l([],a.prototype,"name",void 0),l([],a.prototype,"pattern",void 0),l([],a.prototype,"placeholder",void 0),l([],a.prototype,"readonly",void 0),l([],a.prototype,"required",void 0),l([],a.prototype,"results",void 0),l([],a.prototype,"spellcheck",void 0),l([],a.prototype,"step",void 0),l([],a.prototype,"size",void 0),l([],a.prototype,"type",void 0),l([],a.prototype,"value",void 0),l([],a.prototype,"valueChanged",null),a=l([],a);var h=function(t,e,i,o){var s,l=arguments.length,a=l<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,o);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(a=(l<3?s(a):l>3?s(e,i,a):s(e,i))||a);return l>3&&a&&Object.defineProperty(e,i,a),a};class r{constructor(){this.autocapitalize="none",this.autocomplete="off",this.autofocus=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.spellcheck=!1}disabledChanged(){this.emitStyle()}valueChanged(){const t=this.el.querySelector("textarea");t.value!==this.value&&(t.value=this.value)}componentDidLoad(){this.emitStyle()}emitStyle(){clearTimeout(this.styleTmr);let t={textarea:!0,input:!0,"input-disabled":this.disabled,"input-has-value":this.hasValue(),"input-has-focus":this.hasFocus()};this.styleTmr=setTimeout(()=>{this.ionStyle.emit(t)})}clearTextInput(){this.value=""}inputBlurred(t){this.ionBlur.emit(t),this.focusChange(this.hasFocus()),this.emitStyle()}inputChanged(t){this.value=t.target&&t.target.value,this.emitStyle()}inputFocused(t){this.ionFocus.emit(t),this.focusChange(this.hasFocus()),this.emitStyle()}inputKeydown(){this.checkClearOnEdit()}checkClearOnEdit(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)}focusChange(t){this.clearOnEdit&&!t&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasFocus(){return this.el&&this.el.querySelector(":focus")===this.el.querySelector("textarea")}hasValue(){return null!==this.value&&void 0!==this.value&&""!==this.value}render(){const t=s(this.mode,this.color,"text-input");return e("textarea",{autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,class:t,onBlur:this.inputBlurred.bind(this),onInput:this.inputChanged.bind(this),onFocus:this.inputFocused.bind(this),onKeyDown:this.inputKeydown.bind(this)},this.value)}}h([],r.prototype,"el",void 0),h([],r.prototype,"ionStyle",void 0),h([],r.prototype,"ionBlur",void 0),h([],r.prototype,"ionFocus",void 0),h([],r.prototype,"autocapitalize",void 0),h([],r.prototype,"autocomplete",void 0),h([],r.prototype,"autofocus",void 0),h([],r.prototype,"clearOnEdit",void 0),h([],r.prototype,"disabled",void 0),h([],r.prototype,"disabledChanged",null),h([],r.prototype,"maxlength",void 0),h([],r.prototype,"minlength",void 0),h([],r.prototype,"name",void 0),h([],r.prototype,"placeholder",void 0),h([],r.prototype,"readonly",void 0),h([],r.prototype,"required",void 0),h([],r.prototype,"spellcheck",void 0),h([],r.prototype,"cols",void 0),h([],r.prototype,"rows",void 0),h([],r.prototype,"wrap",void 0),h([],r.prototype,"value",void 0),h([],r.prototype,"valueChanged",null),r=h([],r),t["ion-input"]=a,t["ion-textarea"]=r},["ion-input",[["accept",1,1,2],["autocapitalize",1,1,2],["autocomplete",1,1,2],["autocorrect",1,1,2],["autofocus",1,1,3],["checked",1,1,3],["clearInput",1,1,3],["clearOnEdit",2,1,3],["disabled",1,1,3],["el",7,0,1],["inputmode",1,1,2],["max",1,1,2],["maxlength",1,1,4],["min",1,1,2],["minlength",1,1,4],["multiple",1,1,3],["name",1,1,2],["pattern",1,1,2],["placeholder",1,1,2],["readonly",1,1,3],["required",1,1,3],["results",1,1,4],["size",1,1,4],["spellcheck",1,1,3],["step",1,1,2],["type",1,1,2],["value",2,1,2]],{theme:"input"},[["ionBlur"],["ionFocus"],["ionStyle"]],0,[["checked","checkedChanged"],["disabled","disabledChanged"],["value","valueChanged"]]],["ion-textarea",[["autocapitalize",1,1,2],["autocomplete",1,1,2],["autofocus",1,1,3],["clearOnEdit",2,1,3],["cols",1,1,4],["disabled",1,1,3],["el",7,0,1],["maxlength",1,1,4],["minlength",1,1,4],["name",1,1,2],["placeholder",1,1,2],["readonly",1,1,3],["required",1,1,3],["rows",1,1,4],["spellcheck",1,1,3],["value",2,1,2],["wrap",1,1,2]],{theme:"input"},[["ionBlur"],["ionFocus"],["ionStyle"]],0,[["disabled","disabledChanged"],["value","valueChanged"]]]);;