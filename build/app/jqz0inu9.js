/*! Built with http://stenciljs.com */

App.loadComponents("jqz0inu9",function(t,e,s,i){"use strict";function r(t,e){t||console.error(e)}function o(t,e){let s=0,i=0;if(t){var r=t.changedTouches;if(r&&r.length>0){var o=r[0];s=o.clientX,i=o.clientY}else void 0!==t.pageX&&(s=t.pageX,i=t.pageY)}e.currentX=s,e.currentY=i}function a(t,e){return"child"===e?t.firstElementChild:"parent"===e?h(t)||t:"body"===e?t.ownerDocument.body:"document"===e?t.ownerDocument:"window"===e?t.ownerDocument.defaultView:t}function h(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}function n(t,e){const s=Object.keys(e);if(t)for(var i=0;i<s.length;i++)t.style[s[i]]=e[s[i]]}function l(t){return t.timeStamp||Date.now()}class c{constructor(){this.gestureId=0,this.requestedStart={},this.disabledGestures={},this.disabledScroll=new Set,this.capturedId=null}createGesture(t,e,s){return new d(this,this.newID(),t,e,s)}createBlocker(t={}){return new u(this.newID(),this,t.disable,!!t.disableScroll)}newID(){return this.gestureId++}start(t,e,s){return this.canStart(t)?(this.requestedStart[e]=s,!0):(delete this.requestedStart[e],!1)}capture(t,e,s){if(!this.start(t,e,s))return!1;let i=this.requestedStart,r=-1e4;for(let t in i)r=Math.max(r,i[t]);return r===s?(this.capturedId=e,this.requestedStart={},!0):(delete i[e],!1)}release(t){delete this.requestedStart[t],this.capturedId&&t===this.capturedId&&(this.capturedId=null)}disableGesture(t,e){let s=this.disabledGestures[t];s||(s=new Set,this.disabledGestures[t]=s),s.add(e)}enableGesture(t,e){let s=this.disabledGestures[t];s&&s.delete(e)}disableScroll(t){this.disabledScroll.add(t)}enableScroll(t){this.disabledScroll.delete(t)}canStart(t){return!this.capturedId&&!this.isDisabled(t)}isCaptured(){return!!this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){let e=this.disabledGestures[t];return!!(e&&e.size>0)}}c=function(t,e,s,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(a=(o<3?r(a):o>3?r(e,s,a):r(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a}([],c);class d{constructor(t,e,s,i,r){this.ctrl=t,this.gestureDelegateId=e,this.name=s,this.priority=i,this.disableScroll=r}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.gestureDelegateId,this.priority)}capture(){if(!this.ctrl)return!1;let t=this.ctrl.capture(this.name,this.gestureDelegateId,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.gestureDelegateId),t}release(){this.ctrl&&(this.ctrl.release(this.gestureDelegateId),this.disableScroll&&this.ctrl.enableScroll(this.gestureDelegateId))}destroy(){this.release(),this.ctrl=null}}class u{constructor(t,e,s,i){this.blockerDelegateId=t,this.controller=e,this.disable=s,this.disableScroll=i,this.blocked=!1}block(){this.controller&&(this.disable&&this.disable.forEach(t=>{this.controller.disableGesture(t,this.blockerDelegateId)}),this.disableScroll&&this.controller.disableScroll(this.blockerDelegateId),this.blocked=!0)}unblock(){this.controller&&(this.disable&&this.disable.forEach(t=>{this.controller.enableGesture(t,this.blockerDelegateId)}),this.disableScroll&&this.controller.enableScroll(this.blockerDelegateId),this.blocked=!1)}destroy(){this.unblock(),this.controller=null}}const p={disable:["menu-swipe","goback-swipe"],disableScroll:!0};class b{constructor(t,e,s){this.dirty=!1,this.angle=0,this.isPan=0;const i=s*(Math.PI/180);this.isDirX="x"===t,this.maxCosine=Math.cos(i),this.threshold=e*e}start(t,e){this.startX=t,this.startY=e,this.angle=0,this.isPan=0,this.dirty=!0}detect(t,e){if(!this.dirty)return!1;const s=t-this.startX,i=e-this.startY,r=s*s+i*i;if(r<this.threshold)return!1;const o=Math.sqrt(r),a=(this.isDirX?s:i)/o;return a>this.maxCosine?this.isPan=1:a<-this.maxCosine?this.isPan=-1:this.isPan=0,this.dirty=!1,!0}isGesture(){return 0!==this.isPan}getDirection(){return this.isPan}}var S=function(t,e,s,i){var r,o=arguments.length,a=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var h=t.length-1;h>=0;h--)(r=t[h])&&(a=(o<3?r(a):o>3?r(e,s,a):r(e,s))||a);return o>3&&a&&Object.defineProperty(e,s,a),a};class g{constructor(){this.detail={},this.positions=[],this.lastTouch=0,this.hasCapturedPan=!1,this.hasPress=!1,this.hasStartedPan=!1,this.hasFiredStart=!0,this.isMoveQueued=!1,this.enabled=!0,this.attachTo="child",this.autoBlockAll=!1,this.block=null,this.disableScroll=!1,this.direction="x",this.gestureName="",this.gesturePriority=0,this.maxAngle=40,this.threshold=10,this.type="pan"}componentDidLoad(){this.ctrl=s.gesture=s.gesture||new c,this.gesture=this.ctrl.createGesture(this.gestureName,this.gesturePriority,this.disableScroll);const t=this.type.replace(/\s/g,"").toLowerCase().split(",");t.indexOf("pan")>-1&&(this.pan=new b(this.direction,this.threshold,this.maxAngle)),this.hasPress=t.indexOf("press")>-1,this.enabledChanged(this.enabled),(this.pan||this.hasPress)&&s.dom.write(()=>{n(a(this.el,this.attachTo),y)}),this.autoBlockAll&&(this.blocker=this.ctrl.createBlocker(p),this.blocker.block())}enabledChanged(t){(this.pan||this.hasPress)&&(s.enableListener(this,"touchstart",t,this.attachTo),s.enableListener(this,"mousedown",t,this.attachTo),t||this.abortGesture())}blockChanged(t){this.blocker&&this.blocker.destroy(),t&&(this.blocker=this.ctrl.createBlocker({disable:t.split(",")}))}onTouchStart(t){this.lastTouch=l(t),this.pointerDown(t,this.lastTouch)?(this.enableMouse(!1),this.enableTouch(!0)):this.abortGesture()}onMouseDown(t){const e=l(t);(0===this.lastTouch||this.lastTouch+v<e)&&(this.pointerDown(t,e)?(this.enableMouse(!0),this.enableTouch(!1)):this.abortGesture())}pointerDown(t,e){if(!this.gesture||this.hasStartedPan||!this.hasFiredStart)return!1;const s=this.detail;if(o(t,s),s.startX=s.currentX,s.startY=s.currentY,s.startTimeStamp=s.timeStamp=e,s.velocityX=s.velocityY=s.deltaX=s.deltaY=0,s.event=t,this.positions.length=0,r(this.hasFiredStart,"fired start must be false"),r(!this.hasStartedPan,"pan can be started at this point"),r(!this.hasCapturedPan,"pan can be started at this point"),r(!this.isMoveQueued,"some move is still queued"),r(0===this.positions.length,"positions must be emprty"),this.canStart&&!1===this.canStart(s))return!1;if(this.gesture.release(),!this.gesture.start())return!1;if(this.positions.push(s.currentX,s.currentY,e),this.pan){if(this.hasStartedPan=!0,0===this.threshold)return this.tryToCapturePan();this.pan.start(s.startX,s.startY)}return!0}onTouchMove(t){this.lastTouch=this.detail.timeStamp=l(t),this.pointerMove(t)}onMoveMove(t){const e=l(t);(0===this.lastTouch||this.lastTouch+v<e)&&(this.detail.timeStamp=e,this.pointerMove(t))}pointerMove(t){if(r(!!this.pan,"pan must be non null"),this.hasCapturedPan)return void(!this.isMoveQueued&&this.hasFiredStart&&(this.isMoveQueued=!0,this.calcGestureData(t),s.dom.write(this.fireOnMove.bind(this))));const e=this.detail;this.calcGestureData(t),this.pan.detect(e.currentX,e.currentY)&&this.pan.isGesture()&&(this.tryToCapturePan()||this.abortGesture())}fireOnMove(){if(!this.hasCapturedPan)return;const t=this.detail;this.isMoveQueued=!1,this.onMove?this.onMove(t):this.ionGestureMove.emit(t)}calcGestureData(t){const e=this.detail;o(t,e);const s=e.currentX,i=e.currentY,r=e.timeStamp;e.deltaX=s-e.startX,e.deltaY=i-e.startY,e.event=t;const a=r-100,h=this.positions;let n=h.length-1;for(;n>0&&h[n]>a;n-=3);if(n>1){var l=1/(h[n]-r),c=h[n-1]-i,d=h[n-2]-s;e.velocityX=d*l,e.velocityY=c*l}else e.velocityX=0,e.velocityY=0;h.push(s,i,r)}tryToCapturePan(){if(this.gesture&&!this.gesture.capture())return!1;this.hasCapturedPan=!0,this.hasFiredStart=!1;const t=this.detail;return t.startX=t.currentX,t.startY=t.currentY,t.startTimeStamp=t.timeStamp,this.onWillStart?this.onWillStart(this.detail).then(this.fireOnStart.bind(this)):this.fireOnStart(),!0}fireOnStart(){r(!this.hasFiredStart,"has fired must be false"),this.onStart?this.onStart(this.detail):this.ionGestureStart.emit(this.detail),this.hasFiredStart=!0}abortGesture(){this.reset(),this.enable(!1),this.notCaptured&&this.notCaptured(this.detail)}reset(){this.hasCapturedPan=!1,this.hasStartedPan=!1,this.isMoveQueued=!1,this.hasFiredStart=!0,this.gesture&&this.gesture.release()}onTouchCancel(t){this.lastTouch=this.detail.timeStamp=l(t),this.pointerUp(t),this.enableTouch(!1)}onTouchEnd(t){this.lastTouch=this.detail.timeStamp=l(t),this.pointerUp(t),this.enableTouch(!1)}onMouseUp(t){const e=l(t);(0===this.lastTouch||this.lastTouch+v<e)&&(this.detail.timeStamp=e,this.pointerUp(t),this.enableMouse(!1))}pointerUp(t){const e=this.hasCapturedPan,s=this.hasFiredStart;if(this.reset(),!s)return;const i=this.detail;if(this.calcGestureData(t),e)return i.type="pan",void(this.onEnd?this.onEnd(i):this.ionGestureEnd.emit(i));this.hasPress&&this.detectPress()||(this.notCaptured?this.notCaptured(i):this.ionGestureNotCaptured.emit(i))}detectPress(){const t=this.detail,e=t.deltaX,s=t.deltaY;return e*e+s*s<100&&(t.type="press",this.onPress?this.onPress(t):this.ionPress.emit(t),!0)}enableMouse(t){this.pan&&s.enableListener(this,"document:mousemove",t),s.enableListener(this,"document:mouseup",t)}enableTouch(t){this.pan&&s.enableListener(this,"touchmove",t,this.attachTo),s.enableListener(this,"touchcancel",t,this.attachTo),s.enableListener(this,"touchend",t,this.attachTo)}enable(t){this.enableMouse(t),this.enableTouch(t)}componentDidUnload(){this.blocker&&(this.blocker.destroy(),this.blocker=null),this.gesture&&this.gesture.destroy(),this.ctrl=this.gesture=this.pan=this.detail=this.detail.event=null}}S([],g.prototype,"el",void 0),S([],g.prototype,"enabled",void 0),S([],g.prototype,"attachTo",void 0),S([],g.prototype,"autoBlockAll",void 0),S([],g.prototype,"block",void 0),S([],g.prototype,"disableScroll",void 0),S([],g.prototype,"direction",void 0),S([],g.prototype,"gestureName",void 0),S([],g.prototype,"gesturePriority",void 0),S([],g.prototype,"maxAngle",void 0),S([],g.prototype,"threshold",void 0),S([],g.prototype,"type",void 0),S([],g.prototype,"canStart",void 0),S([],g.prototype,"onWillStart",void 0),S([],g.prototype,"onStart",void 0),S([],g.prototype,"onMove",void 0),S([],g.prototype,"onEnd",void 0),S([],g.prototype,"onPress",void 0),S([],g.prototype,"notCaptured",void 0),S([],g.prototype,"ionGestureMove",void 0),S([],g.prototype,"ionGestureStart",void 0),S([],g.prototype,"ionGestureEnd",void 0),S([],g.prototype,"ionGestureNotCaptured",void 0),S([],g.prototype,"ionPress",void 0),S([],g.prototype,"enabledChanged",null),S([],g.prototype,"blockChanged",null),S([],g.prototype,"onTouchStart",null),S([],g.prototype,"onMouseDown",null),S([],g.prototype,"onTouchMove",null),S([],g.prototype,"onMoveMove",null),S([],g.prototype,"onTouchCancel",null),S([],g.prototype,"onTouchEnd",null),S([],g.prototype,"onMouseUp",null),g=S([],g);const y={"touch-action":"none","user-select":"none","-webkit-user-drag":"none","-webkit-tap-highlight-color":"rgba(0,0,0,0)"},v=2500;t["ion-gesture"]=g},["ion-gesture",[["attachTo",1,1,1],["autoBlockAll",1,1,3],["block",1,1,2],["canStart",1,1,1],["direction",1,1,2],["disableScroll",1,1,3],["el",7,0,1],["enabled",1,1,3],["gestureName",1,1,2],["gesturePriority",1,1,4],["maxAngle",1,1,4],["notCaptured",1,1,1],["onEnd",1,1,1],["onMove",1,1,1],["onPress",1,1,1],["onStart",1,1,1],["onWillStart",1,1,1],["threshold",1,1,4],["type",1,1,2]],0,[["ionGestureEnd"],["ionGestureMove"],["ionGestureNotCaptured"],["ionGestureStart"],["ionPress"]],0,[["enabled","enabledChanged"],["block","blockChanged"]]]);;