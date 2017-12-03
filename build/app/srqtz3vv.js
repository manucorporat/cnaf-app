/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-toast_md","ion-toast{left:0;top:0;position:absolute;z-index:1000;display:block;width:100%;height:100%;pointer-events:none;contain:strict}.toast-container{display:flex;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{flex:1}.toast-md .toast-wrapper{left:0;right:0;margin:auto;position:absolute;z-index:10;display:block;width:100%;max-width:700px;background:#333}.toast-md .toast-wrapper.toast-top{transform:translate3d(0,-100%,0);top:0}.toast-md .toast-wrapper.toast-bottom{transform:translate3d(0,100%,0);bottom:0}.toast-md .toast-wrapper.toast-middle{opacity:.01}.toast-md .toast-message{padding:19px 16px 17px;font-size:1.5rem;color:#fff}\nion-toast.hydrated{visibility:inherit}","ion-toast-controller_md","\nion-toast-controller.hydrated{visibility:inherit}");
App.loadComponents("srqtz3vv",function(t,o,e,i){"use strict";function n(t){return new Promise(function(o){t.onFinish(function(t){o(t)}),t.play()})}function s(t,o){return new Promise(function(e){t(function(){o(),e()})})}function r(t,o,e){return e.split(" ").reduce(function(e,i){return e[i]=!0,t&&(e[i+"-"+t]=!0,o&&(e[i+"-"+o]=!0,e[i+"-"+t+"-"+o]=!0)),e},{})}function a(t,o,e){var i=new t,n=new t,s=o.querySelector(".toast-wrapper");switch(n.addElement(s),e){case"top":n.fromTo("translateY","-100%","10px");break;case"middle":var r=Math.floor(o.clientHeight/2-s.clientHeight/2);s.style.top=r+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("translateY","100%","-10px")}return i.addElement(o).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(n)}function l(t,o,e){var i=new t,n=new t,s=o.querySelector(".toast-wrapper");switch(n.addElement(s),e){case"top":n.fromTo("translateY","10px","-100%");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("translateY","-10px","100%")}return i.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n)}function p(t,o,e){var i=new t,n=new t,s=o.querySelector(".toast-wrapper");switch(n.addElement(s),e){case"top":n.fromTo("translateY","-100%","0%");break;case"middle":var r=Math.floor(o.clientHeight/2-s.clientHeight/2);s.style.top=r+"px",n.fromTo("opacity",.01,1);break;default:n.fromTo("translateY","100%","0%")}return i.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(n)}function d(t,o,e){var i=new t,n=new t,s=o.querySelector(".toast-wrapper");switch(n.addElement(s),e){case"top":n.fromTo("translateY","0px","-100%");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("translateY","0px","100%")}return i.addElement(o).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(n)}var c=function(t,o,e,i){var n,s=arguments.length,r=s<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(o,e,r):n(o,e))||r);return s>3&&r&&Object.defineProperty(o,e,r),r},u=function(){function t(){this.translucent=!1}return t.prototype.present=function(){var t=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionToastWillPresent.emit();var o=this.enterAnimation||this.config.get("toastEnter","ios"===this.mode?a:p);return this.animationCtrl.create(o,this.el).then(function(o){return t.animation=o,t.animate||(t.animation=o.duration(0)),n(o)}).then(function(o){o.destroy(),t.componentDidEnter()})},t.prototype.dismiss=function(t,o){var i=this;this.animation&&(this.animation.destroy(),this.animation=null),this.ionToastWillDismiss.emit({data:t,role:o});var r=this.leaveAnimation||this.config.get("toastLeave","ios"===this.mode?l:d);return this.animationCtrl.create(r,this.el).then(function(t){return i.animation=t,n(t)}).then(function(t){return t.destroy(),s(e.dom.write,function(){i.el.parentNode.removeChild(i.el)})}).then(function(){i.ionToastDidDismiss.emit({data:t,role:o})})},t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidEnter=function(){var t=this;this.ionToastDidPresent.emit(),this.duration&&setTimeout(function(){t.dismiss()},this.duration)},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.wrapperClass=function(){return(this.position?["toast-wrapper","toast-"+this.position]:["toast-wrapper","toast-bottom"]).reduce(function(t,o){return t[o]=!0,t},{})},t.prototype.hostData=function(){var t=this.translucent?r(this.mode,this.color,"toast-translucent"):{};return{class:Object.assign({},t)}},t.prototype.render=function(){var t=this;return o("div",{class:this.wrapperClass()},o("div",{class:"toast-container"},this.message?o("div",{class:"toast-message"},this.message):null,this.showCloseButton?o("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:function(){return t.dismiss()}},this.closeButtonText||"Close"):null))},t}();c([],u.prototype,"el",void 0),c([],u.prototype,"ionToastDidLoad",void 0),c([],u.prototype,"ionToastDidPresent",void 0),c([],u.prototype,"ionToastWillPresent",void 0),c([],u.prototype,"ionToastWillDismiss",void 0),c([],u.prototype,"ionToastDidDismiss",void 0),c([],u.prototype,"ionToastDidUnload",void 0),c([],u.prototype,"animationCtrl",void 0),c([],u.prototype,"config",void 0),c([],u.prototype,"message",void 0),c([],u.prototype,"cssClass",void 0),c([],u.prototype,"duration",void 0),c([],u.prototype,"showCloseButton",void 0),c([],u.prototype,"closeButtonText",void 0),c([],u.prototype,"dismissOnPageChange",void 0),c([],u.prototype,"position",void 0),c([],u.prototype,"translucent",void 0),c([],u.prototype,"toastId",void 0),c([],u.prototype,"animate",void 0),c([],u.prototype,"enterAnimation",void 0),c([],u.prototype,"leaveAnimation",void 0),c([],u.prototype,"present",null),c([],u.prototype,"dismiss",null),c([],u.prototype,"onDismiss",null),u=c([],u);var m=function(t,o,e,i){var n,s=arguments.length,r=s<3?o:null===i?i=Object.getOwnPropertyDescriptor(o,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,o,e,i);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(s<3?n(r):s>3?n(o,e,r):n(o,e))||r);return s>3&&r&&Object.defineProperty(o,e,r),r},f=function(){function t(){this.ids=0,this.toastResolves={},this.toasts=[]}return t.prototype.create=function(t){var o=this,e=document.createElement("ion-toast"),i=this.ids++;return e.toastId="toast-"+i,e.style.zIndex=(1e4+i).toString(),Object.assign(e,t),(document.querySelector("ion-app")||document.body).appendChild(e),new Promise(function(t){o.toastResolves[e.toastId]=t})},t.prototype.didLoad=function(t){var o=t.target,e=this.toastResolves[o.toastId];e&&(e(o),delete this.toastResolves[o.toastId])},t.prototype.willPresent=function(t){this.toasts.push(t.target)},t.prototype.willDismiss=function(t){var o=this.toasts.indexOf(t.target);o>-1&&this.toasts.splice(o,1)},t.prototype.escapeKeyUp=function(){var t=this.toasts[this.toasts.length-1];t&&t.dismiss()},t}();m([],f.prototype,"create",null),m([],f.prototype,"didLoad",null),m([],f.prototype,"willPresent",null),m([],f.prototype,"willDismiss",null),m([],f.prototype,"escapeKeyUp",null),f=m([],f),t["ion-toast"]=u,t["ion-toast-controller"]=f},["ion-toast",[["animate",1,1,3],["animationCtrl",4,0,1,"ion-animation-controller"],["closeButtonText",1,1,2],["config",3,0,1,"config"],["cssClass",1,1,2],["dismiss",6,0,1],["dismissOnPageChange",1,1,3],["duration",1,1,4],["el",7,0,1],["enterAnimation",1,1,1],["leaveAnimation",1,1,1],["message",1,1,2],["position",1,1,2],["present",6,0,1],["showCloseButton",1,1,3],["toastId",1,1,2],["translucent",1,1,3]],{theme:"toast"},[["ionToastDidDismiss"],["ionToastDidLoad"],["ionToastDidPresent"],["ionToastDidUnload"],["ionToastWillDismiss"],["ionToastWillPresent"]]],["ion-toast-controller",[["create",6,0,1]]]);;