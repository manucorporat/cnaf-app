/*! Built with http://stenciljs.com */
const{h:t}=window.App;function e(t,e=!0,n=0){let o;return(o=t<1e3?t:t<1e6?t/1e3:t/1e6).toFixed(n)+(e?function(t){return t<1e3?"KHz":t<1e6?"MHz":"GHz"}(t):"")}function n(t,e,n){return function(t,e){const n=[];for(let r of t){const t=Math.log10(r.min),u=t*e,a=(Math.log10(r.max)-t)*e/4;for(var o=0;o<a;o++)n.push([u+4*o,1,1])}return n}(o(t,n),e)}function o(t,e){return e=e.toLowerCase(),t.filter(t=>t.text.toLowerCase().includes(e))}export{e as a,n as b,o as c};