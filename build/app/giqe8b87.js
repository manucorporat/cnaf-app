/*! Built with http://stenciljs.com */

App.loadStyles("page-details","page-details my-heatmap{margin-bottom:0}page-details ion-list{margin-top:2rem!important}.freq .input-wrapper{font-size:1.4rem;text-transform:lowercase}.freq ion-note{font-size:1.2rem;width:8rem}\npage-details.hydrated{visibility:inherit}");
App.loadComponents("giqe8b87",function(t,e,i,a){"use strict";function n(t,i,a,n){return e("my-heatmap",{title:i,width:a,data:n,onClick:function(e){const i=e.target.closest("my-heatmap").title;t.openDetailPage(i)}})}function o(t,e,i){return r(h(t,i),e)}function h(t,e){return e=e.toLowerCase(),t.filter(t=>t.text.toLowerCase().includes(e))}function r(t,e){const i=[];for(let n of t){const t=Math.log10(n.min),o=t*e,h=(Math.log10(n.max)-t)*e/4;for(var a=0;a<h;a++)i.push([o+4*a,1,1])}return i}function s(t,e=!0,i=0){let a;return(a=t<1e3?t:t<1e6?t/1e3:t/1e6).toFixed(i)+(e?l(t):"")}function l(t){return t<1e3?"KHz":t<1e6?"MHz":"GHz"}var d=function(t,e,i,a){var n,o=arguments.length,h=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(e,i,h):n(e,i))||h);return o>3&&h&&Object.defineProperty(e,i,h),h},c=function(t,e,i,a){return new(i||(i=Promise))(function(n,o){function h(t){try{s(a.next(t))}catch(t){o(t)}}function r(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(h,r)}s((a=a.apply(t,e||[])).next())})};class u{constructor(){this.maps=[],this.count=0}onInput(t){if(this.data){const e=t.target.value;this.scheduleSearch(e)}}onInputEnter(){this.addHeapMap()}componentDidLoad(){return c(this,void 0,void 0,function*(){const t=yield fetch("assets/data/data.json");this.data=yield t.json(),this.maxValue=Math.log10(this.data[this.data.length-1].max),this.width=this.el.offsetWidth,this.addHeapMap()})}getText(){return this.el.querySelector("input").value}addHeapMap(){const t=this.getHeapMap();t&&(t.title=this.getText()),this.maps.push({data:this.search(this.getText()),width:this.width}),this.update()}scheduleSearch(t){clearInterval(this.tr),this.tr=setTimeout(()=>this.setData(this.search(t)),100)}getHeapMap(){return this.maps[this.maps.length-1]}setData(t){this.getHeapMap().data=t,this.update()}search(t){return o(this.data,this.width/this.maxValue,t)}openDetailPage(t){t&&this.modalCtrl.create({component:"page-details",componentProps:{title:t,data:this.data}}).then(t=>t.present())}update(){this.count=this.count+1}render(){const t=this.maps;return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-title",null,"Busqueda por nombre"))),e("ion-content",null,e("ion-searchbar",null),e("div",null,t.map(t=>n(this,t.title,t.width,t.data)).reverse()))]}}d([],u.prototype,"count",void 0),d([],u.prototype,"el",void 0),d([],u.prototype,"modalCtrl",void 0),d([],u.prototype,"onInput",null),d([],u.prototype,"onInputEnter",null),u=d([],u);var p=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(t){function e(t){if(!(this instanceof e))return new e(t);this._canvas=t="string"==typeof t?document.getElementById(t):t,this._ctx=t.getContext("2d"),this._width=t.width,this._height=t.height,this._max=1,this._data=[]}t.exports=e,e.prototype={defaultRadius:25,defaultGradient:{.4:"blue",.6:"cyan",.7:"lime",.8:"yellow",1:"red"},data:function(t){return this._data=t,this},max:function(t){return this._max=t,this},add:function(t){return this._data.push(t),this},clear:function(){return this._data=[],this},radius:function(t,e){e=void 0===e?15:e;var i=this._circle=this._createCanvas(),a=i.getContext("2d"),n=this._r=t+e;return i.width=i.height=2*n,a.shadowOffsetX=a.shadowOffsetY=2*n,a.shadowBlur=e,a.shadowColor="black",a.beginPath(),a.arc(-n,-n,t,0,2*Math.PI,!0),a.closePath(),a.fill(),this},resize:function(){this._width=this._canvas.width,this._height=this._canvas.height},gradient:function(t){var e=this._createCanvas(),i=e.getContext("2d"),a=i.createLinearGradient(0,0,0,256);e.width=1,e.height=256;for(var n in t)a.addColorStop(+n,t[n]);return i.fillStyle=a,i.fillRect(0,0,1,256),this._grad=i.getImageData(0,0,1,256).data,this},draw:function(t){this._circle||this.radius(this.defaultRadius),this._grad||this.gradient(this.defaultGradient);var e=this._ctx;e.clearRect(0,0,this._width,this._height);for(var i,a=0,n=this._data.length;a<n;a++)i=this._data[a],e.globalAlpha=Math.max(i[2]/this._max,void 0===t?.05:t),e.drawImage(this._circle,i[0]-this._r,i[1]-this._r);var o=e.getImageData(0,0,this._width,this._height);return this._colorize(o.data,this._grad),e.putImageData(o,0,0),this},_colorize:function(t,e){for(var i,a=0,n=t.length;a<n;a+=4)(i=4*t[a+3])&&(t[a]=e[i],t[a+1]=e[i+1],t[a+2]=e[i+2])},_createCanvas:function(){return"undefined"!=typeof document?document.createElement("canvas"):new this._canvas.constructor}}}),f=function(t,e,i,a){var n,o=arguments.length,h=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(e,i,h):n(e,i))||h);return o>3&&h&&Object.defineProperty(e,i,h),h},g=function(t,e,i,a){return new(i||(i=Promise))(function(n,o){function h(t){try{s(a.next(t))}catch(t){o(t)}}function r(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(h,r)}s((a=a.apply(t,e||[])).next())})};class v{constructor(){this.legends=[],this.min=1,this.max=275e6,this.heatMax=40,this.heatSize=4,this.heatBlur=0,this.height=100,this.width=300;const t=Math.log10(this.min),e=(Math.log10(this.max)-t)/10;let i=t;for(let t=0;t<10;t++){let t=Math.pow(10,i);this.legends.push(s(t)),i+=e}}componentDidLoad(){return g(this,void 0,void 0,function*(){const t=this.el.querySelector("canvas");this.heat=p(t),this.updateHeap()})}updateHeap(){this.heat&&this.data&&(this.heat.clear(),this.heat.data(this.data),this.heat.max(40),this.heat.radius(8,4),this.heat.draw())}render(){i.dom.raf(()=>{this.updateHeap()});const t=[];return this.title&&this.title.length>0&&t.push(e("h3",null,this.title)),t.push(e("div",{style:{width:`${this.width}px`,height:`${this.height}px`}},e("canvas",{width:this.width,style:{transform:`scaleY(${this.height/2})`},height:2}))),t.push(e("div",{class:"legend"},this.legends.map(t=>e("div",null,t)))),t}}f([],v.prototype,"el",void 0),f([],v.prototype,"min",void 0),f([],v.prototype,"max",void 0),f([],v.prototype,"heatMax",void 0),f([],v.prototype,"heatSize",void 0),f([],v.prototype,"heatBlur",void 0),f([],v.prototype,"height",void 0),f([],v.prototype,"width",void 0),f([],v.prototype,"data",void 0),f([],v.prototype,"title",void 0),v=f([],v);var m=function(t,e,i,a){var n,o=arguments.length,h=o<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(t,e,i,a);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(h=(o<3?n(h):o>3?n(e,i,h):n(e,i))||h);return o>3&&h&&Object.defineProperty(e,i,h),h},y=function(t,e,i,a){return new(i||(i=Promise))(function(n,o){function h(t){try{s(a.next(t))}catch(t){o(t)}}function r(t){try{s(a.throw(t))}catch(t){o(t)}}function s(t){t.done?n(t.value):new i(function(e){e(t.value)}).then(h,r)}s((a=a.apply(t,e||[])).next())})};class w{componentDidLoad(){return y(this,void 0,void 0,function*(){this.width=this.el.offsetWidth,this.results=h(this.data,this.title)})}render(){return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-title",null,this.title))),e("ion-content",null,e("ion-list",null,this.results&&this.results.map(t=>e("ion-item",{class:"freq"},e("ion-note",{slot:"start"},s(t.min,!1)," - ",s(t.max)),t.text))))]}}m([],w.prototype,"el",void 0),m([],w.prototype,"results",void 0),m([],w.prototype,"width",void 0),m([],w.prototype,"heatData",void 0),m([],w.prototype,"title",void 0),m([],w.prototype,"data",void 0),w=m([],w),t["page-details"]=w},["page-details",[["data",1,1,1],["el",7,0,1],["heatData",5,0,1],["results",5,0,1],["title",1,1,2],["width",5,0,1]],{}]);;