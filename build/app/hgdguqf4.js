/*! Built with http://stenciljs.com (es5) */

App.loadStyles("ion-spinner_md","ion-spinner{position:relative;display:inline-block;width:28px;height:28px}ion-spinner svg{left:0;top:0;position:absolute;width:100%;height:100%;transform:translateZ(0)}ion-spinner.spinner-paused svg{animation-play-state:paused}.spinner-lines line,.spinner-lines-sm line{stroke-width:4px;stroke-linecap:round}.spinner-lines svg,.spinner-lines-sm svg{animation:spinner-fade-out 1s linear infinite}.spinner-bubbles svg{animation:spinner-scale-out 1s linear infinite}.spinner-circles svg{animation:spinner-fade-out 1s linear infinite}.spinner-crescent circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px}.spinner-crescent svg{animation:spinner-rotate 1s linear infinite}.spinner-dots circle{stroke-width:0}.spinner-dots svg{transform-origin:center;animation:spinner-dots 1s linear infinite}\@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}\@keyframes spinner-scale-out{0%{transform:scale(1,1)}100%{transform:scale(0,0)}}\@keyframes spinner-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}\@keyframes spinner-dots{0%{opacity:.9;transform:scale(1,1)}50%{opacity:.3;transform:scale(.4,.4)}100%{opacity:.9;transform:scale(1,1)}}.spinner-lines-md line,.spinner-lines-sm-md line{stroke:#69717d}.spinner-bubbles-md circle{fill:#000}.spinner-circles-md circle{fill:#69717d}.spinner-crescent-md circle{stroke:#000}.spinner-dots-md circle{fill:#444}.spinner-md-primary.spinner-crescent circle,.spinner-md-primary.spinner-lines line,.spinner-md-primary.spinner-lines-sm line{stroke:#488aff}.spinner-md-primary.spinner-bubbles circle,.spinner-md-primary.spinner-circles circle,.spinner-md-primary.spinner-dots circle{fill:#488aff}.spinner-md-secondary.spinner-crescent circle,.spinner-md-secondary.spinner-lines line,.spinner-md-secondary.spinner-lines-sm line{stroke:#32db64}.spinner-md-secondary.spinner-bubbles circle,.spinner-md-secondary.spinner-circles circle,.spinner-md-secondary.spinner-dots circle{fill:#32db64}.spinner-md-danger.spinner-crescent circle,.spinner-md-danger.spinner-lines line,.spinner-md-danger.spinner-lines-sm line{stroke:#f53d3d}.spinner-md-danger.spinner-bubbles circle,.spinner-md-danger.spinner-circles circle,.spinner-md-danger.spinner-dots circle{fill:#f53d3d}.spinner-md-light.spinner-crescent circle,.spinner-md-light.spinner-lines line,.spinner-md-light.spinner-lines-sm line{stroke:#f4f4f4}.spinner-md-light.spinner-bubbles circle,.spinner-md-light.spinner-circles circle,.spinner-md-light.spinner-dots circle{fill:#f4f4f4}.spinner-md-dark.spinner-crescent circle,.spinner-md-dark.spinner-lines line,.spinner-md-dark.spinner-lines-sm line{stroke:#222}.spinner-md-dark.spinner-bubbles circle,.spinner-md-dark.spinner-circles circle,.spinner-md-dark.spinner-dots circle{fill:#222}\nion-spinner.hydrated{visibility:inherit}");
App.loadComponents("hgdguqf4",function(e,n,t,r){"use strict";function i(e,n,t){return t.split(" ").reduce(function(t,r){return t[r]=!0,e&&(t[r+"-"+e]=!0,n&&(t[r+"-"+n]=!0,t[r+"-"+e+"-"+n]=!0)),t},{})}function o(e,t,r,i){var o=e.fn(t,r,i);return o.style.animationDuration=t+"ms",n("svg",{viewBox:"0 0 64 64",style:o.style},n("circle",{transform:"translate(32,32)",r:o.r}))}function s(e,t,r,i){var o=e.fn(t,r,i);return o.style.animationDuration=t+"ms",n("svg",{viewBox:"0 0 64 64",style:o.style},n("line",{transform:"translate(32,32)",y1:o.y1,y2:o.y2}))}var a={lines:{dur:1e3,lines:12,fn:function(e,n,t){var r="rotate("+(30*n+(n<6?180:-180))+"deg)",i=-(e-e/t*n)+"ms";return{y1:17,y2:29,style:{transform:r,webkitTransform:r,animationDelay:i,webkitAnimationDelay:i}}}},"lines-sm":{dur:1e3,lines:12,fn:function(e,n,t){var r="rotate("+(30*n+(n<6?180:-180))+"deg)",i=-(e-e/t*n)+"ms";return{y1:12,y2:20,style:{transform:r,webkitTransform:r,animationDelay:i,webkitAnimationDelay:i}}}},bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r=-(e-e/t*n)+"ms";return{r:5,style:{top:9*Math.sin(2*Math.PI*n/t)+"px",left:9*Math.cos(2*Math.PI*n/t)+"px",animationDelay:r,webkitAnimationDelay:r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=-(e-e/t*n)+"ms";return{r:5,style:{top:9*Math.sin(2*Math.PI*n/t)+"px",left:9*Math.cos(2*Math.PI*n/t)+"px",animationDelay:r,webkitAnimationDelay:r}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){var t=-110*n+"ms";return{r:6,style:{left:9-9*n+"px",animationDelay:t,webkitAnimationDelay:t}}}}},l=function(e,n,t,r){var i,o=arguments.length,s=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(n,t,s):i(n,t))||s);return o>3&&s&&Object.defineProperty(n,t,s),s},c=function(){function e(){this.paused=!1}return e.prototype.getName=function(){var e=this.name||this.config.get("spinner");return e?("ios"===e?(console.warn('spinner "ios" has been renamed to "lines"'),e="lines"):"ios-small"===e&&(console.warn('spinner "ios-small" has been renamed to "lines-sm"'),e="lines-sm"),e):"md"===this.mode?"crescent":"lines"},e.prototype.hostData=function(){var e=i(this.mode,this.color,"spinner spinner-"+this.getName());return{class:Object.assign({},e,{"spinner-paused":this.paused})}},e.prototype.render=function(){var e=this.getName(),n=a[e]||a.lines,t="number"==typeof this.duration&&this.duration>10?this.duration:n.dur,r=[],i=0,l=0;if(n.circles)for(i=0,l=n.circles;i<l;i++)r.push(o(n,t,i,l));else if(n.lines)for(i=0,l=n.lines;i<l;i++)r.push(s(n,t,i,l));return r},e}();l([],c.prototype,"config",void 0),l([],c.prototype,"color",void 0),l([],c.prototype,"mode",void 0),l([],c.prototype,"duration",void 0),l([],c.prototype,"name",void 0),l([],c.prototype,"paused",void 0),c=l([],c),e["ion-spinner"]=c},["ion-spinner",[["color",1,1,2],["config",3,0,1,"config"],["duration",1,1,4],["mode",1,1,1],["name",1,1,2],["paused",1,1,3]],{theme:"spinner"}]);;