/*! Built with http://stenciljs.com */

App.loadStyles("ion-segment_ios","ion-segment{display:flex;flex:1;align-items:center;justify-content:center;width:100%}.segment-button{margin-left:0;margin-right:0;text-align:center;position:relative;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.segment-ios ion-segment-button{display:flex;flex:1;width:0}.segment-ios ion-segment-button:first-of-type .segment-button{border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px;margin-right:0}.segment-ios ion-segment-button:not(:first-of-type) .segment-button{border-left-width:0}.segment-ios ion-segment-button:last-of-type .segment-button{border-top-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:0;margin-left:0;border-left-width:0}.segment-ios .segment-button{flex:1;height:3.2rem;border-width:1px;border-style:solid;border-color:#488aff;font-size:1.3rem;line-height:2.8rem;color:#488aff;background-color:transparent}.segment-ios .segment-button ion-icon{font-size:2.6rem;line-height:2.8rem}.segment-ios .segment-button.segment-activated{color:#fff;background-color:#488aff;opacity:1;transition:.1s all linear}.segment-ios .segment-button:hover:not(.segment-activated){background-color:rgba(72,138,255,.1);transition:.1s all linear}.segment-ios .segment-button:active:not(.segment-activated){background-color:rgba(72,138,255,.16);transition:.1s all linear}[dir=rtl] .segment-ios ion-segment-button:first-of-type .segment-button{border-left-width:0}[dir=rtl] .segment-ios ion-segment-button:last-of-type .segment-button{border-left-width:1px}.segment-ios.segment-disabled{opacity:.4;pointer-events:none}.segment-ios .segment-button-disabled{color:rgba(72,138,255,.3);pointer-events:none}.toolbar-ios .segment-ios{left:0;right:0;top:0;bottom:0;position:absolute}.toolbar-ios ion-segment-button{max-width:100px}.toolbar-ios .segment-button{height:2.6rem;font-size:1.2rem;line-height:2.2rem}.toolbar-ios .segment-button ion-icon{font-size:2.2rem;line-height:2.4rem}.segment-ios-primary .segment-button{border-color:#488aff;color:#488aff}.segment-ios-primary .segment-button:hover:not(.segment-activated){background-color:rgba(72,138,255,.1)}.segment-ios-primary .segment-button:active:not(.segment-activated){background-color:rgba(72,138,255,.16)}.segment-ios-primary .segment-button.segment-activated{color:#fff;background-color:#488aff}.segment-ios-primary .segment-button-disabled{color:rgba(72,138,255,.3)}.toolbar-ios-primary .segment-ios .segment-button.segment-activated{color:#488aff}.segment-ios-secondary .segment-button{border-color:#32db64;color:#32db64}.segment-ios-secondary .segment-button:hover:not(.segment-activated){background-color:rgba(50,219,100,.1)}.segment-ios-secondary .segment-button:active:not(.segment-activated){background-color:rgba(50,219,100,.16)}.segment-ios-secondary .segment-button.segment-activated{color:#fff;background-color:#32db64}.segment-ios-secondary .segment-button-disabled{color:rgba(50,219,100,.3)}.toolbar-ios-secondary .segment-ios .segment-button.segment-activated{color:#32db64}.segment-ios-danger .segment-button{border-color:#f53d3d;color:#f53d3d}.segment-ios-danger .segment-button:hover:not(.segment-activated){background-color:rgba(245,61,61,.1)}.segment-ios-danger .segment-button:active:not(.segment-activated){background-color:rgba(245,61,61,.16)}.segment-ios-danger .segment-button.segment-activated{color:#fff;background-color:#f53d3d}.segment-ios-danger .segment-button-disabled{color:rgba(245,61,61,.3)}.toolbar-ios-danger .segment-ios .segment-button.segment-activated{color:#f53d3d}.segment-ios-light .segment-button{border-color:#f4f4f4;color:#f4f4f4}.segment-ios-light .segment-button:hover:not(.segment-activated){background-color:rgba(244,244,244,.1)}.segment-ios-light .segment-button:active:not(.segment-activated){background-color:rgba(244,244,244,.16)}.segment-ios-light .segment-button.segment-activated{color:#000;background-color:#f4f4f4}.segment-ios-light .segment-button-disabled{color:rgba(244,244,244,.3)}.toolbar-ios-light .segment-ios .segment-button.segment-activated{color:#f4f4f4}.segment-ios-dark .segment-button{border-color:#222;color:#222}.segment-ios-dark .segment-button:hover:not(.segment-activated){background-color:rgba(34,34,34,.1)}.segment-ios-dark .segment-button:active:not(.segment-activated){background-color:rgba(34,34,34,.16)}.segment-ios-dark .segment-button.segment-activated{color:#fff;background-color:#222}.segment-ios-dark .segment-button-disabled{color:rgba(34,34,34,.3)}.toolbar-ios-dark .segment-ios .segment-button.segment-activated{color:#222}\nion-segment.hydrated{visibility:inherit}","ion-segment-button_ios","\nion-segment-button.hydrated{visibility:inherit}");
App.loadComponents("rtdwiggs",function(t,e,o,i){"use strict";function n(t,e,o){return o.split(" ").reduce((o,i)=>(o[i]=!0,t&&(o[`${i}-${t}`]=!0,e&&(o[`${i}-${e}`]=!0,o[`${i}-${t}-${e}`]=!0)),o),{})}function s(t){let e={};for(var o=0;o<t.length;o++)e[t[o]]=!0;return e}var l=function(t,e,o,i){var n,s=arguments.length,l=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,o,l):n(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l};class r{constructor(){this.disabled=!1}valueChanged(t){this.selectButton(t)}componentDidLoad(){this.buttons=this.el.querySelectorAll("ion-segment-button");for(var t=0;t<this.buttons.length;t++){const e=this.buttons[t];e.activated=e.value===this.value,!this.value&&e.checked&&(e.activated=e.checked)}}segmentClick(t){let e=t.detail.segmentButton;this.value=e.value,this.selectButton(this.value),this.ionChange.emit({segment:this})}selectButton(t){for(var e=0;e<this.buttons.length;e++){const o=this.buttons[e];o.activated=o.value===t}return!0}hostData(){return{class:{"segment-disabled":this.disabled}}}render(){return e("slot",null)}}l([],r.prototype,"el",void 0),l([],r.prototype,"ionChange",void 0),l([],r.prototype,"color",void 0),l([],r.prototype,"mode",void 0),l([],r.prototype,"disabled",void 0),l([],r.prototype,"value",void 0),l([],r.prototype,"valueChanged",null),l([],r.prototype,"segmentClick",null),r=l([],r);var c=function(t,e,o,i){var n,s=arguments.length,l=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,o,l):n(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l};class a{constructor(){this.activated=!1,this.checked=!1,this.disabled=!1}segmentButtonClick(t){t.preventDefault(),t.stopPropagation(),console.log("in segment button click"),this.emitClick()}emitClick(){clearTimeout(this.styleTmr),this.styleTmr=setTimeout(()=>{this.ionClick.emit({segmentButton:this})})}getElementClassList(){return[].concat(this.disabled?"segment-button-disabled":[],this.activated?"segment-activated":[])}render(){const t=n(this.mode,this.color,"segment-button"),o=s(this.el.classList),i=[].concat(this.getElementClassList()).reduce((t,e)=>(t[e]=!0,t),{}),l=Object.assign({},t,o,i);return[e("button",{onClick:this.segmentButtonClick.bind(this),class:l,"aria-pressed":this.activated},e("slot",null))]}}c([],a.prototype,"el",void 0),c([],a.prototype,"ionClick",void 0),c([],a.prototype,"activated",void 0),c([],a.prototype,"color",void 0),c([],a.prototype,"mode",void 0),c([],a.prototype,"checked",void 0),c([],a.prototype,"disabled",void 0),c([],a.prototype,"value",void 0),a=c([],a),t["ion-segment"]=r,t["ion-segment-button"]=a},["ion-segment",[["color",1,1,2],["disabled",2,1,3],["el",7,0,1],["mode",1,1,1],["value",2,1,2]],{theme:"segment"},[["ionChange"]],0,[["value","valueChanged"]]],["ion-segment-button",[["activated",5,0,1],["checked",2,1,3],["color",1,1,2],["disabled",2,1,3],["el",7,0,1],["mode",1,1,1],["value",2,1,2]],0,[["ionClick"]]]);;