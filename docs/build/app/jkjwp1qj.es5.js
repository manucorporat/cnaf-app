/*! Built with http://stenciljs.com */
var __awaiter=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))(function(o,r){function a(e){try{l(i.next(e))}catch(e){r(e)}}function s(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(a,s)}l((i=i.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){var n,i,o,r,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,i=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===r[0]||2===r[0])){a=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){a.label=r[1];break}if(6===r[0]&&a.label<o[1]){a.label=o[1],o=r;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(r);break}o[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],i=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}};App.loadBundle("jkjwp1qj",["require","exports","./chunk-4e77d4c5.js","./chunk-2e99a289.js","./chunk-be7e2b23.js"],function(e,t,n,i,o){var r=window.App.h,a=function(){function e(){this._isOpen=!1,this.lastOnEnd=0,this.isAnimating=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeEnabled=!0,this.maxEdgeStart=50}return e.prototype.typeChanged=function(e,t){var n=this.contentEl;n&&t&&(n.classList.remove("menu-content-"+t),n.classList.add("menu-content-"+e),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},e.prototype.disabledChanged=function(e){this.updateState(),this.ionMenuChange.emit({disabled:e,open:this._isOpen})},e.prototype.sideChanged=function(){this.isEndSide=n.isEndSide(this.win,this.side)},e.prototype.swipeEnabledChanged=function(){this.updateState()},e.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return null==this.type&&(this.type="ios"===this.mode?"reveal":"overlay"),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return e=this,[4,this.lazyMenuCtrl.componentOnReady()];case 2:e.menuCtrl=t.sent(),t.label=3;case 3:return[2]}})})},e.prototype.componentDidLoad=function(){var e=this;if(!this.isServer){var t=this.el.parentNode,n=this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");if(n&&n.tagName){this.contentEl=n,n.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged();var i=!this.disabled;!0!==i&&void 0!==i||(i=!this.menuCtrl.getMenus().some(function(t){return t.side===e.side&&!t.disabled})),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),this.disabled=!i}else console.error('Menu: must have a "content" element to listen for drag events on.')}},e.prototype.componentDidUnload=function(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},e.prototype.onSplitPaneChanged=function(e){this.isPaneVisible=e.target.isPane(this.el),this.updateState()},e.prototype.onBackdropClick=function(e){var t=e.path;t&&!t.includes(this.menuInnerEl)&&this.lastOnEnd<e.timeStamp-100&&(e.preventDefault(),e.stopPropagation(),this.close())},e.prototype.isOpen=function(){return this._isOpen},e.prototype.open=function(e){return void 0===e&&(e=!0),this.setOpen(!0,e)},e.prototype.close=function(e){return void 0===e&&(e=!0),this.setOpen(!1,e)},e.prototype.toggle=function(e){return void 0===e&&(e=!0),this.setOpen(!this._isOpen,e)},e.prototype.setOpen=function(e,t){return void 0===t&&(t=!0),this.menuCtrl._setOpen(this,e,t)},e.prototype._setOpen=function(e,t){return void 0===t&&(t=!0),__awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return!this.isActive()||this.isAnimating||e===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(e,t)];case 2:return n.sent(),this.afterAnimation(e),[2,e]}})})},e.prototype.isActive=function(){return!this.disabled&&!this.isPaneVisible},e.prototype.getWidth=function(){return this.width},e.prototype.loadAnimation=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return(e=this.menuInnerEl.offsetWidth)===this.width&&void 0!==this.animation?[2]:(this.width=e,this.animation&&(this.animation.destroy(),this.animation=void 0),t=this,[4,this.menuCtrl.createAnimation(this.type,this)]);case 1:return t.animation=n.sent(),[2]}})})},e.prototype.startAnimation=function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!e),t?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},e.prototype.canSwipe=function(){return this.swipeEnabled&&!this.isAnimating&&this.isActive()},e.prototype.canStart=function(e){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&(t=this.win,n=e.currentX,i=this.isEndSide,o=this.maxEdgeStart,i?n>=t.innerWidth-o:n<=o));var t,n,i,o},e.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},e.prototype.onDragStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():n.assert(!1,"isAnimating has to be true")},e.prototype.onDragMove=function(e){if(this.isAnimating&&this.animation){var t=s(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(t)}else n.assert(!1,"isAnimating has to be true")},e.prototype.onDragEnd=function(e){var t=this;if(this.isAnimating&&this.animation){var i=this._isOpen,o=this.isEndSide,r=s(e.deltaX,i,o),a=this.width,l=r/a,u=e.velocityX,c=a/2,h=u>=0&&(u>.2||e.deltaX>c),d=u<=0&&(u<-.2||e.deltaX<-c),p=i?o?h:d:o?d:h,m=!i&&p;i&&!p&&(m=!0);var b=(p?1-l:l)*a,f=0;if(b>5){var g=b/Math.abs(u);f=Math.min(g,300)}this.lastOnEnd=e.timeStamp,this.animation.onFinish(function(){return t.afterAnimation(m)},{clearExistingCallacks:!0}).progressEnd(p,l,f)}else n.assert(!1,"isAnimating has to be true")},e.prototype.beforeAnimation=function(){n.assert(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(l),this.backdropEl&&this.backdropEl.classList.add(u),this.isAnimating=!0},e.prototype.afterAnimation=function(e){n.assert(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this.enableListener(this,"body:click",e),e?(this.contentEl&&this.contentEl.classList.add(c),this.ionOpen.emit()):(this.el.classList.remove(l),this.contentEl&&this.contentEl.classList.remove(c),this.backdropEl&&this.backdropEl.classList.remove(u),this.ionClose.emit())},e.prototype.updateState=function(){!this.isActive()&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),n.assert(!this.isAnimating,"can not be animating")},e.prototype.forceClosing=function(){n.assert(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)},e.prototype.hostData=function(){var e,t=this.isEndSide,n=this.type,i=this.disabled,o=this.isPaneVisible;return{role:"complementary",class:(e={},e["menu-type-"+n]=!0,e["menu-enabled"]=!i,e["menu-side-end"]=t,e["menu-side-start"]=!t,e["menu-pane-visible"]=o,e)}},e.prototype.render=function(){var e=this;return[r("div",{class:"menu-inner",ref:function(t){return e.menuInnerEl=t},onClick:this.onBackdropClick.bind(this)},r("slot",null)),r("ion-backdrop",{ref:function(t){return e.backdropEl=t},class:"menu-backdrop",tappable:!1,stopPropagation:!1}),r("ion-gesture",{canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:!this.isActive()||!this.swipeEnabled,gestureName:"menu-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"window",disableScroll:!0})]},Object.defineProperty(e,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},getWidth:{method:!0},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},setOpen:{method:!0},side:{type:String,attr:"side",watchCallbacks:["sideChanged"]},swipeEnabled:{type:Boolean,attr:"swipe-enabled",watchCallbacks:["swipeEnabledChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:304px;height:100%;contain:strict;background:var(--ion-background-color,#fff)}:host(.menu-side-start) .menu-inner{right:auto;left:0}:host(.menu-side-end) .menu-inner{right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}.menu-content-open .ion-pane,.menu-content-open .toolbar,.menu-content-open ion-content,.menu-content-open ion-pane{pointer-events:none}\@media (max-width:340px){.menu-inner{width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}:host(.menu-type-overlay){z-index:80}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:80}:host(.menu-type-push) .show-backdrop{display:block}.app-ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function s(e,t,n){return Math.max(0,t!==n?-e:e)}var l="show-menu",u="show-backdrop",c="menu-content-open",h=function(){function e(){}return e.prototype.hostData=function(){return{class:Object.assign({},i.createColorClasses(this.color))}},e.prototype.render=function(){return r("slot",null)},Object.defineProperty(e,"is",{get:function(){return"ion-note"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{color:var(--ion-color-base);--ion-color-base:var(--ion-text-color-step-650, #a6a6a6);font-family:var(--ion-font-family,inherit)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),d=function(){function e(){this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.disabled=!1,this.value=0}return e.prototype.debounceChanged=function(){this.ionChange=n.debounceEvent(this.ionChange,this.debounce)},e.prototype.disabledChanged=function(){this.emitStyle()},e.prototype.valueChanged=function(e){this.noUpdate||this.updateRatio(),this.ionChange.emit({value:e})},e.prototype.componentWillLoad=function(){this.ionStyle=n.deferEvent(this.ionStyle),this.updateRatio(),this.debounceChanged(),this.emitStyle()},e.prototype.keyChng=function(e){var t=this.step;t=t>0?t:1,t/=this.max-this.min,e.detail.isIncrease||(t*=-1),"A"===e.detail.knob?this.ratioA+=t:this.ratioB+=t},e.prototype.getValue=function(){var e=this.value||0;return this.dualKnobs?"object"==typeof e?e:{lower:0,upper:e}:"object"==typeof e?e.upper:e},e.prototype.emitStyle=function(){this.ionStyle.emit({"interactive-disabled":this.disabled})},e.prototype.fireBlur=function(){this.hasFocus&&(this.hasFocus=!1,this.ionBlur.emit(),this.emitStyle())},e.prototype.fireFocus=function(){this.hasFocus||(this.hasFocus=!0,this.ionFocus.emit(),this.emitStyle())},e.prototype.onDragStart=function(e){this.fireFocus();var t=this.rect=this.rangeSlider.getBoundingClientRect(),i=e.currentX,o=n.clamp(0,(i-t.left)/t.width,1);this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-o)<Math.abs(this.ratioB-o)?"A":"B",this.update(i)},e.prototype.onDragMove=function(e){this.update(e.currentX)},e.prototype.onDragEnd=function(e){this.update(e.currentX),this.pressedKnob=void 0,this.fireBlur()},e.prototype.update=function(e){var t=this.rect,i=n.clamp(0,(e-t.left)/t.width,1);this.snaps&&(i=m(p(i,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=i:this.ratioB=i,this.updateValue()},Object.defineProperty(e.prototype,"valA",{get:function(){return p(this.ratioA,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valB",{get:function(){return p(this.ratioB,this.min,this.max,this.step)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioLower",{get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"ratioUpper",{get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA},enumerable:!0,configurable:!0}),e.prototype.updateRatio=function(){var e=this.getValue(),t=this.min,n=this.max;this.dualKnobs?(this.ratioA=m(e.lower,t,n),this.ratioB=m(e.upper,t,n)):this.ratioA=m(e,t,n)},e.prototype.updateValue=function(){this.noUpdate=!0;var e=this.valA,t=this.valB;this.value=this.dualKnobs?{lower:Math.min(e,t),upper:Math.max(e,t)}:e,this.noUpdate=!1},e.prototype.hostData=function(){return{class:Object.assign({},i.createColorClasses(this.color),{"in-item":i.hostContext(".item",this.el),"range-disabled":this.disabled,"range-pressed":void 0!==this.pressedKnob,"range-has-pin":this.pin})}},e.prototype.render=function(){var e=this,t=this,n=t.min,i=t.max,o=t.step,a=t.ratioLower,s=t.ratioUpper,l=100*a+"%",u=100-100*s+"%",c=[];if(this.snaps)for(var h=n;h<=i;h+=o){var d=m(h,n,i);c.push({ratio:d,active:d>=a&&d<=s,left:100*d+"%"})}return[r("slot",{name:"start"}),r("ion-gesture",{disableScroll:!0,onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:this.disabled,gestureName:"range",gesturePriority:30,direction:"x",threshold:0},r("div",{class:"range-slider",ref:function(t){return e.rangeSlider=t}},c.map(function(e){return r("div",{style:{left:e.left},role:"presentation",class:{"range-tick":!0,"range-tick-active":e.active}})}),r("div",{class:"range-bar",role:"presentation"}),r("div",{class:"range-bar range-bar-active",role:"presentation",style:{left:l,right:u}}),r("ion-range-knob",{knob:"A",pressed:"A"===this.pressedKnob,value:this.valA,ratio:this.ratioA,pin:this.pin,min:n,max:i}),this.dualKnobs&&r("ion-range-knob",{knob:"B",pressed:"B"===this.pressedKnob,value:this.valB,ratio:this.ratioB,pin:this.pin,min:n,max:i}))),r("slot",{name:"end"})]},Object.defineProperty(e,"is",{get:function(){return"ion-range"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{color:{type:String,attr:"color"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},dualKnobs:{type:Boolean,attr:"dual-knobs"},el:{elementRef:!0},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},pin:{type:Boolean,attr:"pin"},pressedKnob:{state:!0},ratioA:{state:!0},ratioB:{state:!0},snaps:{type:Boolean,attr:"snaps"},step:{type:Number,attr:"step"},value:{type:"Any",attr:"value",mutable:!0,watchCallbacks:["valueChanged"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionIncrease",method:"keyChng"},{name:"ionDecrease",method:"keyChng"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{--ion-color-base:var(--ion-color-primary, #3880ff);--ion-color-contrast:var(--ion-color-primary-contrast, #fff);display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8px 16px;font-family:var(--ion-font-family,inherit)}::slotted(ion-label){-webkit-box-flex:initial;-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider,ion-gesture{position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;cursor:pointer}.range-knob-handle:active,.range-knob-handle:focus{outline:0}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host(.range-has-pin){padding-top:20px}.range-slider{height:42px}.range-bar{left:0;top:21px;border-radius:1px;position:absolute;width:100%;height:1px;background:var(--ion-background-color-step-250,#bfbfbf);pointer-events:none}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.range-pressed) .range-knob-handle{will-change:left}.range-bar-active{bottom:0;width:auto;background:var(--ion-color-base)}.range-knob-handle{left:0;top:21px;margin-left:-21px;margin-top:-21px;position:absolute;width:42px;height:42px;text-align:center}.range-knob{left:7px;top:7px;border-radius:50%;position:absolute;width:28px;height:28px;background:var(--ion-background-color,#fff);-webkit-box-shadow:0 3px 1px rgba(0,0,0,.1),0 4px 8px rgba(0,0,0,.13),0 0 0 1px rgba(0,0,0,.02);box-shadow:0 3px 1px rgba(0,0,0,.1),0 4px 8px rgba(0,0,0,.13),0 0 0 1px rgba(0,0,0,.02);pointer-events:none}.range-tick{margin-left:-.5px;border-radius:0;position:absolute;top:17.5px;width:1px;height:8px;background:var(--ion-background-color-step-250,#bfbfbf);pointer-events:none}.range-tick-active{background:var(--ion-color-base)}.range-pin{-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50px;-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform 120ms ease;transition:-webkit-transform 120ms ease;transition:transform 120ms ease;transition:transform 120ms ease,-webkit-transform 120ms ease;background:0 0;color:var(--ion-text-color,#000);font-size:12px;text-align:center}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,0,0) scale(1);transform:translate3d(0,0,0) scale(1)}:host(.range-disabled){opacity:.5}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function p(e,t,i,o){var r=(i-t)*e;return o>0&&(r=Math.round(r/o)*o+t),n.clamp(t,r,i)}function m(e,t,i){return n.clamp(0,(e-t)/(i-t),1)}var b=function(){return new Promise(function(t,n){e(["./ios.transition.js"],t,n)})},f=function(){return new Promise(function(t,n){e(["./md.transition.js"],t,n)})};function g(e,t){t?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function y(e,t){return __awaiter(this,void 0,void 0,function(){var n,i;return __generator(this,function(o){switch(o.label){case 0:return n=null!=e.deepWait?e.deepWait:t,i=n?[E(e.enteringEl),E(e.leavingEl)]:[C(e.enteringEl),C(e.leavingEl)],[4,Promise.all(i)];case 1:return o.sent(),[4,function(e,t){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(n){switch(n.label){case 0:return e?[4,e(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})}(e.viewIsReady,e.enteringEl)];case 2:return o.sent(),[2]}})})}function v(e,t,n){_(e,n,"ionViewWillLeave"),_(e,t,"ionViewWillEnter")}function w(e,t,n){_(e,t,"ionViewDidEnter"),_(e,n,"ionViewDidLeave")}function _(e,t,n){if(t){var i=new(0,e.CustomEvent)(n,{bubbles:!1,cancelable:!1});t.dispatchEvent(i)}}function C(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function E(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return(t=e)?t.componentOnReady?[4,t.componentOnReady()]:[3,2]:[3,4];case 1:if(n.sent())return[2];n.label=2;case 2:return[4,Promise.all(Array.from(t.children).map(E))];case 3:n.sent(),n.label=4;case 4:return[2]}})})}var A=function(){function e(){this.isTransitioning=!1}return e.prototype.componentWillLoad=function(){void 0===this.animated&&(this.animated=this.config.getBoolean("animate",!0)),this.ionNavWillLoad.emit()},e.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0},e.prototype.setRoot=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var i,r;return __generator(this,function(a){switch(a.label){case 0:return this.isTransitioning||this.activeComponent===e?[2,!1]:(this.activeComponent=e,[4,o.attachComponent(this.delegate,this.el,e,["ion-page","ion-page-invisible"],t)]);case 1:return i=a.sent(),r=this.activeEl,[4,this.commit(i,r,n)];case 2:return a.sent(),this.activeEl=i,o.detachComponent(this.delegate,r),[2,!0]}})})},e.prototype.commit=function(e,t,n){return __awaiter(this,void 0,void 0,function(){var i,o,r,a,s,l,u;return __generator(this,function(c){switch(c.label){case 0:return this.isTransitioning||t===e?[2,!1]:(this.isTransitioning=!0,this.ionNavWillChange.emit(),n=n||{},o=(i=this).mode,r=i.queue,a=i.animated,s=i.animationCtrl,l=i.win,u=i.el,[4,function(e){var t=this;return new Promise(function(n){e.queue.write(function(){return __awaiter(t,void 0,void 0,function(){var t,i;return __generator(this,function(o){switch(o.label){case 0:return function(e){var t=e.enteringEl,n=e.leavingEl;(function(e,t,n){e&&(e.style.zIndex="back"===n?"99":"101"),t&&(t.style.zIndex="100")})(t,n,e.direction),e.showGoBack?t.classList.add("can-go-back"):t.classList.remove("can-go-back"),g(t,!1),n&&g(n,!1)}(e),[4,function(e){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(n){switch(n.label){case 0:return e.leavingEl&&!1!==e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,b()]:[2,void 0];case 1:return t=n.sent().iosTransitionAnimation,[3,4];case 2:return[4,f()];case 3:t=n.sent().mdTransitionAnimation,n.label=4;case 4:return[2,t]}})})}(e)];case 1:return t=o.sent(),i=t?function(e,t){return __awaiter(this,void 0,void 0,function(){var n;return __generator(this,function(i){switch(i.label){case 0:return[4,y(t,!0)];case 1:return i.sent(),[4,t.animationCtrl.create(e,t.baseEl,t)];case 2:return n=i.sent(),v(t.window,t.enteringEl,t.leavingEl),[4,function(e,t){var n=t.progressCallback,i=new Promise(function(t){return e.onFinish(t)});return n?(e.progressStart(),n(e)):e.play(),i}(n,t)];case 3:return i.sent(),n.hasCompleted&&w(t.window,t.enteringEl,t.leavingEl),[2,n]}})})}(t,e):function(e){return __awaiter(this,void 0,void 0,function(){var t,n;return __generator(this,function(i){switch(i.label){case 0:return t=e.enteringEl,n=e.leavingEl,t&&t.classList.remove("ion-page-invisible"),n&&n.classList.remove("ion-page-invisible"),[4,y(e,!1)];case 1:return i.sent(),v(e.window,t,n),w(e.window,t,n),[2,null]}})})}(e),n(i),[2]}})})})})}(Object.assign({mode:o,queue:r,animated:a,animationCtrl:s,window:l,enteringEl:e,leavingEl:t,baseEl:u},n))]);case 1:return c.sent(),this.isTransitioning=!1,this.ionNavDidChange.emit(),[2,!0]}})})},e.prototype.setRouteId=function(e,t,n){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(i){switch(i.label){case 0:return[4,this.setRoot(e,t,{duration:0===n?0:void 0,direction:-1===n?"back":"forward"})];case 1:return[2,{changed:i.sent(),element:this.activeEl}]}})})},e.prototype.getRouteId=function(){var e=this.activeEl;return e?{id:e.tagName,element:e}:void 0},e.prototype.render=function(){return["ios"===this.mode&&r("div",{class:"nav-decor"}),r("slot",null)]},Object.defineProperty(e,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated",mutable:!0},animationBuilder:{type:"Any",attr:"animation-builder"},animationCtrl:{connect:"ion-animation-controller"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},queue:{context:"queue"},setRoot:{method:!0},setRouteId:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".nav-decor{display:none}:host(.show-decor) .nav-decor{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),e}();t.IonMenu=a,t.IonNote=h,t.IonRange=d,t.IonRouterOutlet=A,Object.defineProperty(t,"__esModule",{value:!0})});