/*! Built with http://stenciljs.com */

App.loadStyles("ion-searchbar_md","ion-searchbar{position:relative;display:flex;align-items:center;width:100%}.searchbar-icon{pointer-events:none}.searchbar-input-container{position:relative;display:block;flex-shrink:1;width:100%}.searchbar-input{-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;display:block;width:100%;border:0;font-family:inherit}.searchbar-clear-icon{margin:0;padding:0;display:none;min-height:0}.searchbar-has-value.searchbar-has-focus .searchbar-clear-icon{display:block}.searchbar-md{padding:8px;background:inherit}.searchbar-md .searchbar-search-icon{left:16px;top:11px;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='%235b5b5b'%20d='M337.509,305.372h-17.501l-6.571-5.486c20.791-25.232,33.922-57.054,33.922-93.257C347.358,127.632,283.896,64,205.135,64C127.452,64,64,127.632,64,206.629s63.452,142.628,142.225,142.628c35.011,0,67.831-13.167,92.991-34.008l6.561,5.487v17.551L415.18,448L448,415.086L337.509,305.372z%20M206.225,305.372c-54.702,0-98.463-43.887-98.463-98.743c0-54.858,43.761-98.742,98.463-98.742c54.7,0,98.462,43.884,98.462,98.742C304.687,261.485,260.925,305.372,206.225,305.372z'/></svg>\");width:21px;height:21px}.searchbar-md .searchbar-md-cancel{left:10px;top:0;margin:0;display:none;width:21px;height:100%}.searchbar-md .searchbar-md-cancel,.searchbar-md .searchbar-search-icon{position:absolute;background-repeat:no-repeat;background-size:20px}.searchbar-md .searchbar-md-cancel.activated,.searchbar-md .searchbar-search-icon.activated{background-color:transparent}.searchbar-md .searchbar-input{padding:6px 55px;border-radius:2px;background-position:left 8px center;height:auto;font-size:1.6rem;font-weight:400;line-height:3rem;color:#141414;background-color:#fff;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.searchbar-md .searchbar-input::-moz-placeholder{color:#aeaeae}.searchbar-md .searchbar-input:-ms-input-placeholder{color:#aeaeae}.searchbar-md .searchbar-input::-webkit-input-placeholder{text-indent:0;color:#aeaeae}.searchbar-md ion-button.searchbar-clear-icon{right:13px;top:0;background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='%235b5b5b'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");padding:0;background-position:center;position:absolute;width:22px;height:100%;background-repeat:no-repeat;background-size:22px}.searchbar-md ion-button.searchbar-clear-icon.activated{background-color:transparent}.searchbar-md.searchbar-has-focus.searchbar-show-cancel .searchbar-search-icon{display:none}.searchbar-md.searchbar-has-focus.searchbar-show-cancel .searchbar-md-cancel{display:inline-flex}.toolbar .searchbar-md{padding:3px}.toolbar .searchbar-md .searchbar-md-cancel{left:14px}.searchbar-md .searchbar-ios-cancel{display:none}\nion-searchbar.hydrated{visibility:inherit}");
App.loadComponents("nisooccy",function(t,e,i,o){"use strict";var s=function(t,e,i,o){var s,a=arguments.length,n=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,o);else for(var c=t.length-1;c>=0;c--)(s=t[c])&&(n=(a<3?s(n):a>3?s(e,i,n):s(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n};class a{constructor(){this._isCancelVisible=!1,this._shouldBlur=!0,this._shouldAlignLeft=!0,this.activated=!1,this.focused=!1,this.animated=!1,this.autocomplete="off",this.autocorrect="off",this.cancelButtonText="Cancel",this.debounce=250,this.placeholder="Search",this.showCancelButton=!1,this.spellcheck=!1,this.type="search"}componentDidLoad(){this.positionElements()}clearInput(t){this.ionClear.emit({event:t}),setTimeout(()=>{let e=this.value;void 0!==e&&""!==e&&(this.value="",this.ionInput.emit({event:t}))},64),this._shouldBlur=!1}cancelSearchbar(t){this.ionCancel.emit({event:t}),this.clearInput(t),this._shouldBlur=!0,this.activated=!1}inputChanged(t){this.value=t.target.value,this.ionInput.emit(t)}inputUpdated(){this.positionElements()}inputBlurred(){const t=this.el.querySelector(".searchbar-input");if(!1===this._shouldBlur)return t.focus(),this._shouldBlur=!0,this.ionBlur.emit({this:this}),void this.inputUpdated();this.focused=!1,this.positionElements()}inputFocused(){this.activated=!0,this.focused=!0,this.ionFocus.emit({this:this}),this.inputUpdated(),this.positionElements()}positionElements(){const t=this._shouldAlignLeft,e=!this.animated||this.value&&""!==this.value.toString().trim()||!0===this.focused;this._shouldAlignLeft=e,"ios"===this.mode&&(t!==e&&this.positionPlaceholder(),this.animated&&this.positionCancelButton())}positionPlaceholder(){const t="rtl"===document.dir,e=this.el.querySelector(".searchbar-input"),i=this.el.querySelector(".searchbar-search-icon");if(this._shouldAlignLeft)e.removeAttribute("style"),i.removeAttribute("style");else{var o=document.createElement("span");o.innerHTML=this.placeholder,document.body.appendChild(o);var s=o.offsetWidth;document.body.removeChild(o);var a="calc(50% - "+s/2+"px)",n="calc(50% - "+(s/2+30)+"px)";t?(e.style.paddingRight=a,i.style.marginRight=n):(e.style.paddingLeft=a,i.style.marginLeft=n)}}positionCancelButton(){const t="rtl"===document.dir,e=this.el.querySelector(".searchbar-ios-cancel"),i=this.focused;if(i!==this._isCancelVisible){var o=e.style;if(this._isCancelVisible=i,i)t?o.marginLeft="0":o.marginRight="0";else{var s=e.offsetWidth;s>0&&(t?o.marginLeft=-s+"px":o.marginRight=-s+"px")}}}hostData(){return{class:{"searchbar-active":this.activated,"searchbar-animated":this.animated,"searchbar-has-value":void 0!==this.value&&""!==this.value,"searchbar-show-cancel":this.showCancelButton,"searchbar-left-aligned":this._shouldAlignLeft,"searchbar-has-focus":this.focused}}}render(){return[e("div",{class:"searchbar-input-container"},e("ion-button",{onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),fill:"clear",color:"dark",class:"searchbar-md-cancel"},e("ion-icon",{name:"md-arrow-back"})),e("div",{class:"searchbar-search-icon"}),e("input",{class:"searchbar-input",onInput:this.inputChanged.bind(this),onBlur:this.inputBlurred.bind(this),onFocus:this.inputFocused.bind(this),placeholder:this.placeholder,type:this.type,value:this.value,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellCheck:this.spellcheck}),e("ion-button",{fill:"clear",class:"searchbar-clear-icon",onClick:this.clearInput.bind(this),onMouseDown:this.clearInput.bind(this)})),e("ion-button",{tabindex:this.activated?1:-1,fill:"clear",onClick:this.cancelSearchbar.bind(this),onMouseDown:this.cancelSearchbar.bind(this),class:"searchbar-ios-cancel"},this.cancelButtonText)]}}s([],a.prototype,"el",void 0),s([],a.prototype,"activated",void 0),s([],a.prototype,"focused",void 0),s([],a.prototype,"ionInput",void 0),s([],a.prototype,"ionCancel",void 0),s([],a.prototype,"ionClear",void 0),s([],a.prototype,"ionBlur",void 0),s([],a.prototype,"ionFocus",void 0),s([],a.prototype,"color",void 0),s([],a.prototype,"mode",void 0),s([],a.prototype,"animated",void 0),s([],a.prototype,"autocomplete",void 0),s([],a.prototype,"autocorrect",void 0),s([],a.prototype,"cancelButtonText",void 0),s([],a.prototype,"debounce",void 0),s([],a.prototype,"placeholder",void 0),s([],a.prototype,"showCancelButton",void 0),s([],a.prototype,"spellcheck",void 0),s([],a.prototype,"type",void 0),s([],a.prototype,"value",void 0),a=s([],a),t["ion-searchbar"]=a},["ion-searchbar",[["activated",5,0,1],["animated",2,1,3],["autocomplete",2,1,2],["autocorrect",2,1,2],["cancelButtonText",2,1,2],["color",1,1,2],["debounce",2,1,4],["el",7,0,1],["focused",5,0,1],["mode",1,1,1],["placeholder",2,1,2],["showCancelButton",2,1,3],["spellcheck",2,1,3],["type",2,1,2],["value",2,1,2]],{theme:"searchbar"},[["ionBlur"],["ionCancel"],["ionClear"],["ionFocus"],["ionInput"]]]);;