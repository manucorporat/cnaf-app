/*! Built with http://stenciljs.com */
const{h:n}=window.App;function t(n,t){t.read(()=>{const e=n.innerWidth,o=n.innerWidth,c=n.document.elementFromPoint(e/2,o/2);if(!c)return;const i=c.closest("ion-content");i&&i.componentOnReady().then(()=>{t.write(()=>{i.getScrollElement().scrollToTop(300)})})})}export{t as startStatusTap};