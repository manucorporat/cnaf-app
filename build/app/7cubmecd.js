/*! Built with http://stenciljs.com */

App.loadStyles("ion-segment_md","ion-segment{display:flex;flex:1;align-items:center;justify-content:center;width:100%}.segment-button{margin-left:0;margin-right:0;text-align:center;position:relative;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.segment-md ion-segment-button{display:flex;flex:1}.segment-md .segment-button{padding:0 6px;flex:1;width:0;height:4.2rem;border-bottom-width:2px;border-bottom-style:solid;border-bottom-color:rgba(0,0,0,.1);font-size:1.2rem;font-weight:500;line-height:4rem;text-transform:uppercase;color:#488aff;background-color:transparent;opacity:.7;transition:.1s all linear}.segment-md .segment-button ion-icon{font-size:2.6rem;line-height:4rem}.segment-md .segment-button.activated,.segment-md .segment-button.segment-activated{border-color:#488aff;opacity:1}.segment-md .segment-button-disabled,.segment-md.segment-disabled{opacity:.3;pointer-events:none}.toolbar .segment-md{margin:0 auto}.toolbar .segment-md .segment-button.activated,.toolbar .segment-md .segment-button.segment-activated{opacity:1}.segment-md-primary .segment-button{color:#488aff}.segment-md-primary .segment-button.activated,.segment-md-primary .segment-button.segment-activated{border-color:#488aff;color:#488aff;opacity:1}.segment-md-secondary .segment-button{color:#32db64}.segment-md-secondary .segment-button.activated,.segment-md-secondary .segment-button.segment-activated{border-color:#32db64;color:#32db64;opacity:1}.segment-md-danger .segment-button{color:#f53d3d}.segment-md-danger .segment-button.activated,.segment-md-danger .segment-button.segment-activated{border-color:#f53d3d;color:#f53d3d;opacity:1}.segment-md-light .segment-button{color:#f4f4f4}.segment-md-light .segment-button.activated,.segment-md-light .segment-button.segment-activated{border-color:#f4f4f4;color:#f4f4f4;opacity:1}.segment-md-dark .segment-button{color:#222}.segment-md-dark .segment-button.activated,.segment-md-dark .segment-button.segment-activated{border-color:#222;color:#222;opacity:1}\nion-segment.hydrated{visibility:inherit}","ion-segment-button_md","\nion-segment-button.hydrated{visibility:inherit}");
App.loadComponents("7cubmecd",function(t,e,o,i){"use strict";function n(t,e,o){return o.split(" ").reduce((o,i)=>(o[i]=!0,t&&(o[`${i}-${t}`]=!0,e&&(o[`${i}-${e}`]=!0,o[`${i}-${t}-${e}`]=!0)),o),{})}function s(t){let e={};for(var o=0;o<t.length;o++)e[t[o]]=!0;return e}var l=function(t,e,o,i){var n,s=arguments.length,l=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,o,l):n(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l};class r{constructor(){this.disabled=!1}valueChanged(t){this.selectButton(t)}componentDidLoad(){this.buttons=this.el.querySelectorAll("ion-segment-button");for(var t=0;t<this.buttons.length;t++){const e=this.buttons[t];e.activated=e.value===this.value,!this.value&&e.checked&&(e.activated=e.checked)}}segmentClick(t){let e=t.detail.segmentButton;this.value=e.value,this.selectButton(this.value),this.ionChange.emit({segment:this})}selectButton(t){for(var e=0;e<this.buttons.length;e++){const o=this.buttons[e];o.activated=o.value===t}return!0}hostData(){return{class:{"segment-disabled":this.disabled}}}render(){return e("slot",null)}}l([],r.prototype,"el",void 0),l([],r.prototype,"ionChange",void 0),l([],r.prototype,"color",void 0),l([],r.prototype,"mode",void 0),l([],r.prototype,"disabled",void 0),l([],r.prototype,"value",void 0),l([],r.prototype,"valueChanged",null),l([],r.prototype,"segmentClick",null),r=l([],r);var c=function(t,e,o,i){var n,s=arguments.length,l=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,i);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(l=(s<3?n(l):s>3?n(e,o,l):n(e,o))||l);return s>3&&l&&Object.defineProperty(e,o,l),l};class a{constructor(){this.activated=!1,this.checked=!1,this.disabled=!1}segmentButtonClick(t){t.preventDefault(),t.stopPropagation(),console.log("in segment button click"),this.emitClick()}emitClick(){clearTimeout(this.styleTmr),this.styleTmr=setTimeout(()=>{this.ionClick.emit({segmentButton:this})})}getElementClassList(){return[].concat(this.disabled?"segment-button-disabled":[],this.activated?"segment-activated":[])}render(){const t=n(this.mode,this.color,"segment-button"),o=s(this.el.classList),i=[].concat(this.getElementClassList()).reduce((t,e)=>(t[e]=!0,t),{}),l=Object.assign({},t,o,i);return[e("button",{onClick:this.segmentButtonClick.bind(this),class:l,"aria-pressed":this.activated},e("slot",null))]}}c([],a.prototype,"el",void 0),c([],a.prototype,"ionClick",void 0),c([],a.prototype,"activated",void 0),c([],a.prototype,"color",void 0),c([],a.prototype,"mode",void 0),c([],a.prototype,"checked",void 0),c([],a.prototype,"disabled",void 0),c([],a.prototype,"value",void 0),a=c([],a),t["ion-segment"]=r,t["ion-segment-button"]=a},["ion-segment",[["color",1,1,2],["disabled",2,1,3],["el",7,0,1],["mode",1,1,1],["value",2,1,2]],{theme:"segment"},[["ionChange"]],0,[["value","valueChanged"]]],["ion-segment-button",[["activated",5,0,1],["checked",2,1,3],["color",1,1,2],["disabled",2,1,3],["el",7,0,1],["mode",1,1,1],["value",2,1,2]],0,[["ionClick"]]]);;