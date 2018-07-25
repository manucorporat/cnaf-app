/*! Built with http://stenciljs.com */
const{h:t}=window.App;import{b as e,c as o,d as s,a as i}from"./chunk-12dfa9dd.js";import{b as l}from"./chunk-c6be03a7.js";class n{constructor(){this.cTop=-1,this.cBottom=-1,this.dirty=!1,this.fullscreen=!1,this.scrollEnabled=!0,this.scrollEvents=!1}onNavChanged(){this.resize()}componentDidLoad(){this.resize()}componentDidUnload(){this.scrollEl=void 0}getScrollElement(){return this.scrollEl}resize(){this.scrollEl&&(this.fullscreen?this.queue.read(()=>{this.queue.read(this.readDimensions.bind(this)),this.queue.write(this.writeDimensions.bind(this))}):(this.cTop=this.cBottom=-1,this.queue.write(()=>this.scrollEl&&this.scrollEl.removeAttribute("style"))))}readDimensions(){const t=function(t){const e=t.closest("ion-tabs");if(e)return e;const o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);this.dirty=e!==this.cTop||o!==this.cBottom,this.cTop=e,this.cBottom=o}writeDimensions(){if(this.dirty&&this.scrollEl){const t=this.scrollEl.style;t.paddingTop=this.cTop+"px",t.paddingBottom=this.cBottom+"px",t.top=-this.cTop+"px",t.bottom=-this.cBottom+"px",this.dirty=!1}}hostData(){return{class:e(this.color)}}render(){this.resize();const e=t("div",{class:"scroll-inner"},t("slot",null));return[this.scrollEnabled?t("ion-scroll",{ref:t=>this.scrollEl=t,mode:this.mode,scrollEvents:this.scrollEvents,forceOverscroll:this.forceOverscroll},e):e,t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll"},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollEnabled:{type:Boolean,attr:"scroll-enabled"},scrollEvents:{type:Boolean,attr:"scroll-events"}}}static get listeners(){return[{name:"body:ionNavDidChange",method:"onNavChanged"}]}static get style(){return"[data-ion-content-ios-host]{--ion-color-base:var(--ion-background-color, #fff);--ion-color-contrast:var(--ion-text-color, #000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;background-color:var(--ion-color-base);color:var(--ion-color-contrast);contain:layout size style;font-family:var(--ion-font-family,inherit)}.ion-color-outer[data-ion-content-ios-host], .outer-content[data-ion-content-ios-host]{--ion-color-base:var(--ion-background-color-step-50, #f2f2f2)}.scroll-inner[data-ion-content-ios]{padding:var(--padding-top) var(--padding-end) calc(var(--padding-bottom) + var(--keyboard-offset)) var(--padding-start);-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;min-height:100%;-webkit-margin-collapse:discard}[data-ion-content-ios-slot] > hr{height:.55px;background-color:rgba(var(--ion-text-color-rgb,0,0,0),.12)}"}static get styleMode(){return"ios"}}class r{constructor(){this.itemStyles={},this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,s=Object.keys(t.detail),i={},l=this.itemStyles[e]||{};let n=!1;for(const t of s){const e=`item-${t}`,s=o[t];s!==l[e]&&(n=!0),i[e]=s}n&&(this.itemStyles[e]=i,this.el.forceUpdate())}componentDidLoad(){const t=this.el.querySelectorAll("ion-button");for(let e=0;e<t.length;e++)t[e].size||(t[e].size="small")}isClickable(){return!!(this.href||this.el.onclick||this.button)}hostData(){const t={};for(const e in this.itemStyles)Object.assign(t,this.itemStyles[e]);return{tappable:this.isClickable(),class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:!!this.lines,"item-disabled":this.disabled,"in-list":o("ion-list",this.el),item:!0})}}render(){const{href:e,detail:o,mode:i,win:l,state:n,detailIcon:r,el:a,routerDirection:c,type:h}=this,d=this.isClickable(),u=d?e?"a":"button":"div",p="button"===u?{type:h}:{href:e},m=null!=o?o:"ios"===i&&d;return t(u,Object.assign({},p,{class:"item-native",onClick:t=>s(l,e,t,c)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),m&&t("ion-icon",{icon:r,class:"item-detail-icon"})),n&&t("div",{class:"item-state"}),d&&"md"===i&&t("ion-ripple-effect",{tapClick:!0,parent:a}))}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},routerDirection:{type:String,attr:"router-direction"},state:{type:String,attr:"state"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return"[data-ion-item-ios-host]{--min-height:44px;--background:var(--ion-color-base);--background-active:var(--ion-color-tint);--color:var(--ion-color-contrast);--detail-push-color:var(--ion-color-shade);--border-radius:0;--border-width:0;--border-style:solid;--border-color:var(--ion-color-shade);--inner-border-width:0;--padding-top:0;--padding-bottom:0;--padding-end:0;--padding-start:0;--inner-padding-top:0;--inner-padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--box-shadow:none;--inner-box-shadow:none;--highlight-color-focus:var(--ion-color-primary, #3880ff);--highlight-color-valid:var(--ion-color-success, #10dc60);--highlight-color-invalid:var(--ion-color-danger, #f04141);--highlight-height:2px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;color:var(--ion-color-contrast);text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.activated[data-ion-item-ios-host]{--background:var(--background-active);--transition:none}.item-disabled[data-ion-item-ios-host]{cursor:default;opacity:.3;pointer-events:none}.item-native[data-ion-item-ios]{padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);border-radius:var(--border-radius);margin:0;text-align:initial;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:0;background-color:var(--background);color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;text-decoration:inherit;text-transform:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-state[data-ion-item-ios]{left:0;right:0;bottom:0;position:absolute;height:var(--highlight-height)}.item-inner[data-ion-item-ios]{margin:0;padding:var(--inner-padding-top) var(--inner-padding-end) var(--inner-padding-bottom) var(--inner-padding-start);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.input-wrapper[data-ion-item-ios]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:inherit;-webkit-box-direction:inherit;-ms-flex-direction:inherit;flex-direction:inherit;-webkit-box-align:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-input[data-ion-item-ios-host], [vertical-align-top][data-ion-item-ios-host]{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}[data-ion-item-ios-slot] > ion-icon{font-size:1.6em}[data-ion-item-ios-slot] > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.item-label-floating[data-ion-item-ios-host]   .input-wrapper[data-ion-item-ios], .item-label-stacked[data-ion-item-ios-host]   .input-wrapper[data-ion-item-ios]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}[data-ion-item-ios-host].item-label-floating[data-ion-item-ios-slot] > ion-select, [data-ion-item-ios-host].item-label-stacked[data-ion-item-ios-slot] > ion-select{-ms-flex-item-align:stretch;align-self:stretch;max-width:100%}.item-textarea[data-ion-item-ios-host]{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}[data-ion-item-ios-host].item-multiple-inputs [data-ion-item-ios-slot] > ion-select{position:relative}[data-ion-item-ios-host].item-label-floating [data-ion-item-ios-slot] > ion-select, [data-ion-item-ios-host].item-label-stacked [data-ion-item-ios-slot] > ion-select{max-width:100%}[data-ion-item-ios-slot] > ion-reorder[slot]{margin-top:0;margin-bottom:0}[data-ion-item-ios-host]{--ion-color-base:var(--ion-item-background, transparent);--ion-color-contrast:var(--ion-item-text-color, var(--ion-text-color, #000));--ion-color-tint:var(--ion-item-background-color-active, #d9d9d9);--ion-color-shade:var(--ion-item-border-color, #c8c7cc);--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0 0 0.55px 0;font-family:var(--ion-font-family,inherit);font-size:17px}\@media screen and (orientation:landscape){.item-inner[data-ion-item-ios]{padding-left:calc(constant(safe-area-inset-left) + var(--inner-padding-start));padding-right:calc(constant(safe-area-inset-right) + var(--inner-padding-end));padding-left:calc(env(safe-area-inset-left) + var(--inner-padding-start));padding-right:calc(env(safe-area-inset-right) + var(--inner-padding-end))}}.item-lines-full[data-ion-item-ios-host]{--border-width:0 0 0.55px 0}.item-lines-inset[data-ion-item-ios-host]{--inner-border-width:0 0 0.55px 0}.item-lines-inset[data-ion-item-ios-host], .item-lines-none[data-ion-item-ios-host]{--border-width:0}.item-lines-full[data-ion-item-ios-host], .item-lines-none[data-ion-item-ios-host]{--inner-border-width:0}[data-ion-item-ios-slot] > :not(.interactive)[slot=start]{margin:2px 16px 2px 0}[data-ion-item-ios-slot] > :not(.interactive)[slot=end]{margin-left:8px;margin-right:8px}[data-ion-item-ios-slot] > ion-icon[slot=end], [data-ion-item-ios-slot] > ion-icon[slot=start]{margin-left:0;margin-top:7px;margin-bottom:7px}[data-ion-item-ios-host].item-label-floating [data-ion-item-ios-slot] > [slot=end], [data-ion-item-ios-host].item-label-stacked [data-ion-item-ios-slot] > [slot=end]{margin-top:7px;margin-bottom:7px}[data-ion-item-ios-slot] > .button-small{--padding-top:0;--padding-bottom:0;--padding-start:.5em;--padding-end:.5em;--height:24px;font-size:13px}[data-ion-item-ios-slot] > ion-avatar{width:36px;height:36px}[data-ion-item-ios-slot] > ion-thumbnail{width:56px;height:56px}[data-ion-item-ios-slot] > ion-avatar[slot=end], [data-ion-item-ios-slot] > ion-thumbnail[slot=end]{margin:8px}.item-detail-icon[data-ion-item-ios]{color:var(--detail-push-color);font-size:20px}[data-ion-item-ios-host].item-radio [data-ion-item-ios-slot] > ion-label, [data-ion-item-ios-host].item-toggle [data-ion-item-ios-slot] > ion-label{margin-left:0}[data-ion-item-ios-host].item-label-floating [data-ion-item-ios-slot] > ion-input, [data-ion-item-ios-host].item-label-floating [data-ion-item-ios-slot] > ion-textarea, [data-ion-item-ios-host].item-label-stacked [data-ion-item-ios-slot] > ion-input, [data-ion-item-ios-host].item-label-stacked [data-ion-item-ios-slot] > ion-textarea{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"}static get styleMode(){return"ios"}}class a{constructor(){this.autoHide=!0}hostData(){return{class:{button:!0}}}render(){const e=this.config.get("menuIcon","menu");return t("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},t("button",null,t("slot",null,t("ion-icon",{icon:e,mode:this.mode,color:this.color,lazy:!1}))))}static get is(){return"ion-menu-button"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}}static get style(){return"[data-ion-menu-button-ios-host]{pointer-events:all;color:var(--ion-color-base);--ion-color-base:var(--ion-color-primary, #3880ff)}button[data-ion-menu-button-ios]{margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;color:inherit;line-height:1;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-font-kerning:none;font-kerning:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 5px}ion-icon[data-ion-menu-button-ios]{margin:0;padding:0;pointer-events:none;font-size:31px}"}static get styleMode(){return"ios"}}class c{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){this.updateVisibility()}async onClick(){const t=await h(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return t.toggle(this.menu)}return!1}async updateVisibility(){const t=await h(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){const t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}}render(){return t("slot",null)}static get is(){return"ion-menu-toggle"}static get encapsulation(){return"shadow"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return".menu-toggle-hidden[data-ion-menu-toggle-host]{display:none}"}}function h(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}class d{constructor(){this.lastClick=-1e4,this.parent="parent",this.tapClick=!1}tapClickChanged(t){this.enableListener(this,"ionActivated",t,this.parent),this.enableListener(this,"touchstart",!t),this.enableListener(this,"mousedown",!t)}ionActivated(t){this.addRipple(t.detail.x,t.detail.y)}touchStart(t){this.lastClick=l(t);const e=t.touches[0];this.addRipple(e.clientX,e.clientY)}mouseDown(t){const e=l(t);this.lastClick<e-1e3&&this.addRipple(t.pageX,t.pageY)}componentDidLoad(){this.tapClickChanged(this.tapClick)}addRipple(t,e){let o,s,i;this.queue.read(()=>{const l=this.el.getBoundingClientRect(),n=l.width,r=l.height;i=Math.min(2*Math.sqrt(n*n+r*r),m),o=t-l.left-i/2,s=e-l.top-i/2}),this.queue.write(()=>{const t=this.doc.createElement("div");t.classList.add("ripple-effect");const e=t.style,l=Math.max(u*Math.sqrt(i),p);e.top=s+"px",e.left=o+"px",e.width=i+"px",e.height=i+"px",e.animationDuration=l+"ms",(this.el.shadowRoot||this.el).appendChild(t),setTimeout(()=>t.remove(),l+50)})}render(){return null}static get is(){return"ion-ripple-effect"}static get encapsulation(){return"shadow"}static get properties(){return{addRipple:{method:!0},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},parent:{type:String,attr:"parent"},queue:{context:"queue"},tapClick:{type:Boolean,attr:"tap-click",watchCallbacks:["tapClickChanged"]}}}static get listeners(){return[{name:"ionActivated",method:"ionActivated",disabled:!0},{name:"touchstart",method:"touchStart",disabled:!0,passive:!0},{name:"mousedown",method:"mouseDown",disabled:!0,passive:!0}]}static get style(){return"[data-ion-ripple-effect-host]{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict}.ripple-effect[data-ion-ripple-effect]{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation-name:rippleAnimation;animation-name:rippleAnimation;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;will-change:transform,opacity;pointer-events:none}\@-webkit-keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}\@keyframes rippleAnimation{0%{-webkit-transform:scale(.1);transform:scale(.1);opacity:.2}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}"}}const u=35,p=260,m=550;class g{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.scrollEvents=!1,this.detail={positions:[],scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0}}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&"ontouchstart"in this.win)}componentDidUnload(){this.watchDog&&clearInterval(this.watchDog)}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(e=>{this.queued=!1,this.detail.event=t,function(t,e,o,s){const i=e.scrollTop,l=e.scrollLeft,n=t.positions;s&&(t.startTimeStamp=o,t.startY=i,t.startX=l,n.length=0),t.timeStamp=o,t.currentY=t.scrollTop=i,t.currentX=t.scrollLeft=l,t.deltaY=i-t.startY,t.deltaX=l-t.startX,n.push(i,l,o);const r=o-100;let a=n.length-1;for(;a>0&&n[a]>r;)a-=3;if(a>3){const e=1/(n[a]-o),s=n[a-1]-l,r=n[a-2]-i;t.velocityX=s*e,t.velocityY=r*e}else t.velocityX=0,t.velocityY=0}(this.detail,this.el,e,o),this.ionScroll.emit(this.detail)}))}scrollToTop(t){return this.scrollToPoint(0,0,t)}scrollToBottom(t){const e=this.el?this.el.scrollHeight-this.el.clientHeight:0;return this.scrollToPoint(0,e,t)}scrollByPoint(t,e,o,s){return this.scrollToPoint(t+this.el.scrollLeft,e+this.el.scrollTop,o,s)}scrollToPoint(t,e,o,s){let i;const l=new Promise(t=>{i=t}).then(()=>s&&s()),n=this,r=n.el;if(!r)return i(),l;if(o<32)return r.scrollTop=e,r.scrollLeft=t,i(),l;const a=r.scrollTop,c=r.scrollLeft,h=o/16+100;let d,u=0,p=!1;function m(s){if(u++,!n.el||p||u>h)return n.isScrolling=!1,r.style.transform=r.style.webkitTransform="",void i();let l=Math.min(1,(s-d)/o);const g=--l*l*l+1;a!==e&&(r.scrollTop=g*(e-a)+a),c!==t&&(r.scrollLeft=Math.floor(g*(t-c)+c)),g<1?n.queue.read(m):(p=!0,n.isScrolling=!1,r.style.transform=r.style.webkitTransform="",i())}return n.isScrolling=!0,this.queue.write(()=>{this.queue.write(t=>{d=t,m(t)})}),l}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1})}hostData(){return{class:Object.assign({},i(this.mode,"scroll"),{overscroll:this.forceOverscroll})}}render(){return t("slot",null)}static get is(){return"ion-scroll"}static get encapsulation(){return"shadow"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"scroll",method:"onScroll",passive:!0}]}static get style(){return"[data-ion-scroll-host]{left:0;right:0;top:0;bottom:0;display:block;position:absolute;contain:size style layout;z-index:1;overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:scroll-position}.overscroll[data-ion-scroll-host]::after, .overscroll[data-ion-scroll-host]::before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll[data-ion-scroll-host]::before{bottom:-1px}.overscroll[data-ion-scroll-host]::after{top:-1px}"}}class y{render(){return[t("div",{class:"toolbar-title"},t("slot",null))]}static get is(){return"ion-title"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},mode:{type:String,attr:"mode"}}}static get style(){return"[data-ion-title-host]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.toolbar-title[data-ion-title]{display:block;width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;pointer-events:auto}"}}class f{constructor(){this.translucent=!1}hostData(){return{class:Object.assign({},e(this.color),{"toolbar-translucent":this.translucent})}}render(){return[t("div",{class:"toolbar-background"}),t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"})]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"[data-ion-toolbar-ios-host]{--border-width:0;--border-style:solid;--background:var(--ion-color-base);--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:100%;color:var(--ion-color-contrast);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter);--ion-color-base:var(--ion-toolbar-background-color, #f8f8f8);--ion-color-contrast:var(--ion-toolbar-text-color, var(--ion-text-color, #000));--border-color:rgba(var(--ion-toolbar-border-color-rgb, 0, 0, 0), 0.2);--translucent-filter:saturate(180%) blur(20px);padding:4px;min-height:44px;font-family:var(--ion-font-family,inherit)}.toolbar-translucent[data-ion-toolbar-ios-host]{--backdrop-filter:var(--translucent-filter);--opacity:.8}.toolbar-background[data-ion-toolbar-ios]{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-content[data-ion-toolbar-ios]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4;min-width:0}[data-ion-toolbar-ios-slot] > ion-title{left:0;top:0;padding:0 90px;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:17px;font-weight:600;letter-spacing:-.03em;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}"}static get styleMode(){return"ios"}}export{n as IonContent,r as IonItem,a as IonMenuButton,c as IonMenuToggle,d as IonRippleEffect,g as IonScroll,y as IonTitle,f as IonToolbar};