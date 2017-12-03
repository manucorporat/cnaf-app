/*! Built with http://stenciljs.com */

App.loadStyles("ion-modal_ios","ion-modal{left:0;top:0;position:absolute;display:block;width:100%;height:100%;contain:strict}ion-modal-controller{display:none}.modal-backdrop{left:0;top:0;position:absolute;z-index:2;display:block;width:100%;height:100%;background-color:#000;opacity:.01;transform:translateZ(0)}\@media not all and (min-width:768px) and (min-height:600px){.modal-backdrop{visibility:hidden}}.modal-backdrop.backdrop-no-tappable{cursor:auto}.modal-backdrop.hide-backdrop{visibility:hidden}.modal-wrapper{z-index:10;height:100%;contain:strict}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (500px/2));position:absolute;width:600px;height:500px}}\@media only screen and (min-width:768px) and (min-height:768px){.modal-wrapper{left:calc(50% - (600px/2));top:calc(50% - (600px/2));position:absolute;width:600px;height:600px}}.modal-wrapper-ios{transform:translate3d(0,100%,0)}\@media only screen and (min-width:768px) and (min-height:600px){.modal-wrapper-ios{border-radius:10px;overflow:hidden}}\nion-modal.hydrated{visibility:inherit}","ion-modal-controller_ios","\nion-modal-controller.hydrated{visibility:inherit}");
App.loadComponents("8np9cduk",function(o,e,t,i){"use strict";function n(o){return new Promise(e=>{o.onFinish(o=>{e(o)}),o.play()})}function s(o,e){return new Promise(t=>{o(()=>{e(),t()})})}function a(o,e,t){return t.split(" ").reduce((t,i)=>(t[i]=!0,o&&(t[`${i}-${o}`]=!0,e&&(t[`${i}-${e}`]=!0,t[`${i}-${o}-${e}`]=!0)),t),{})}function d(o,e){const t=new o,i=new o;i.addElement(e.querySelector(".modal-backdrop"));const n=new o;return n.addElement(e.querySelector(".modal-wrapper")),n.beforeStyles({opacity:1}).fromTo("translateY","100%","0%"),i.fromTo("opacity",.01,.4),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").add(i).add(n)}function r(o,e){const t=new o,i=new o;i.addElement(e.querySelector(".modal-backdrop"));const n=new o,s=e.querySelector(".modal-wrapper");n.addElement(s);const a=s.getBoundingClientRect();return n.beforeStyles({opacity:1}).fromTo("translateY","0%",`${window.innerHeight-a.top}px`),i.fromTo("opacity",.4,0),t.addElement(e).easing("ease-out").duration(250).add(i).add(n)}function l(o,e){const t=new o,i=new o;i.addElement(e.querySelector(".modal-backdrop"));const n=new o;return n.addElement(e.querySelector(".modal-wrapper")),n.fromTo("opacity",.01,1).fromTo("translateY","40px","0px"),i.fromTo("opacity",.01,.4),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").add(i).add(n)}function p(o,e){const t=new o,i=new o;i.addElement(e.querySelector(".modal-backdrop"));const n=new o,s=e.querySelector(".modal-wrapper");return n.addElement(s),n.fromTo("opacity",.99,0).fromTo("translateY","0px","40px"),i.fromTo("opacity",.4,0),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).add(i).add(n)}var c=function(o,e,t,i){var n,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(a=(s<3?n(a):s>3?n(e,t,a):n(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};class m{constructor(){this.componentProps={},this.enableBackdropDismiss=!0,this.showBackdrop=!0}present(){this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillPresent.emit();const o=this.enterAnimation||this.config.get("modalEnter","ios"===this.mode?d:l);return this.animationCtrl.create(o,this.el).then(o=>(this.animation=o,this.animate||(this.animation=o.duration(0)),n(o))).then(o=>{o.destroy(),this.ionModalDidPresent.emit()})}dismiss(o,e){this.animation&&(this.animation.destroy(),this.animation=null),this.ionModalWillDismiss.emit({data:o,role:e});const i=this.leaveAnimation||this.config.get("modalLeave","ios"===this.mode?r:p);return this.animationCtrl.create(i,this.el).then(o=>(this.animation=o,n(o))).then(o=>(o.destroy(),s(t.dom.write,()=>{this.el.parentNode.removeChild(this.el)}))).then(()=>{this.ionModalDidDismiss.emit({data:o,role:e})})}onDismiss(o){o.stopPropagation(),o.preventDefault(),this.dismiss()}componentDidLoad(){this.ionModalDidLoad.emit()}componentDidUnload(){this.ionModalDidUnload.emit()}backdropClick(){this.enableBackdropDismiss&&this.dismiss()}render(){const o=this.component;let t="ion-page";this.cssClass&&(t+=` ${this.cssClass}`);const i=a(this.mode,this.color,"modal-wrapper");return[e("div",{onClick:this.backdropClick.bind(this),class:{"modal-backdrop":!0,"hide-backdrop":!this.showBackdrop}}),e("div",{role:"dialog",class:i},e(o,Object.assign({},this.componentProps,{class:t})))]}}c([],m.prototype,"el",void 0),c([],m.prototype,"ionModalDidLoad",void 0),c([],m.prototype,"ionModalDidPresent",void 0),c([],m.prototype,"ionModalWillPresent",void 0),c([],m.prototype,"ionModalWillDismiss",void 0),c([],m.prototype,"ionModalDidDismiss",void 0),c([],m.prototype,"ionModalDidUnload",void 0),c([],m.prototype,"animationCtrl",void 0),c([],m.prototype,"config",void 0),c([],m.prototype,"mode",void 0),c([],m.prototype,"color",void 0),c([],m.prototype,"component",void 0),c([],m.prototype,"componentProps",void 0),c([],m.prototype,"cssClass",void 0),c([],m.prototype,"enableBackdropDismiss",void 0),c([],m.prototype,"modalId",void 0),c([],m.prototype,"showBackdrop",void 0),c([],m.prototype,"enterAnimation",void 0),c([],m.prototype,"leaveAnimation",void 0),c([],m.prototype,"animate",void 0),c([],m.prototype,"present",null),c([],m.prototype,"dismiss",null),c([],m.prototype,"onDismiss",null),m=c([],m);var h=function(o,e,t,i){var n,s=arguments.length,a=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,t):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(o,e,t,i);else for(var d=o.length-1;d>=0;d--)(n=o[d])&&(a=(s<3?n(a):s>3?n(e,t,a):n(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};class u{constructor(){this.ids=0,this.modalResolves={},this.modals=[]}create(o){const e=document.createElement("ion-modal"),t=this.ids++;return e.modalId=`modal-${t}`,e.style.zIndex=(1e4+t).toString(),Object.assign(e,o),(document.querySelector("ion-app")||document.body).appendChild(e),new Promise(o=>{this.modalResolves[e.modalId]=o})}modalDidLoad(o){const e=o.target,t=this.modalResolves[e.modalId];t&&(t(e),delete this.modalResolves[e.modalId])}modalWillPresent(o){this.modals.push(o.target)}modalWillDismiss(o){const e=this.modals.indexOf(o.target);e>-1&&this.modals.splice(e,1)}escapeKeyUp(){const o=this.modals[this.modals.length-1];o&&o.dismiss()}}h([],u.prototype,"create",null),h([],u.prototype,"modalDidLoad",null),h([],u.prototype,"modalWillPresent",null),h([],u.prototype,"modalWillDismiss",null),h([],u.prototype,"escapeKeyUp",null),u=h([],u),o["ion-modal"]=m,o["ion-modal-controller"]=u},["ion-modal",[["animate",1,1,3],["animationCtrl",4,0,1,"ion-animation-controller"],["color",1,1,2],["component",1,1,2],["componentProps",1,1,1],["config",3,0,1,"config"],["cssClass",1,1,2],["dismiss",6,0,1],["el",7,0,1],["enableBackdropDismiss",1,1,3],["enterAnimation",1,1,1],["leaveAnimation",1,1,1],["modalId",1,1,2],["mode",1,1,2],["present",6,0,1],["showBackdrop",1,1,3]],{theme:"modal"},[["ionModalDidDismiss"],["ionModalDidLoad"],["ionModalDidPresent"],["ionModalDidUnload"],["ionModalWillDismiss"],["ionModalWillPresent"]]],["ion-modal-controller",[["create",6,0,1]]]);;