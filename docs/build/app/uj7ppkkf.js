/*! Built with http://stenciljs.com */
const{h:e}=window.App;import{a as t}from"./chunk-63d140c8.js";class a{constructor(){this.scale=1e3,this.results=[],this.count=0,this.freqA=0,this.freqB=0}onInput(e){const t=e.detail;this.freqA=Math.pow(10,t.value.lower/this.scale),this.freqB=Math.pow(10,t.value.upper/this.scale),this.scheduleSearch()}async componentDidLoad(){const e=await fetch("assets/data/data.json");this.data=await e.json(),this.maxValue=Math.log10(this.data[this.data.length-1].max)*this.scale}scheduleSearch(){clearInterval(this.tr),this.tr=setTimeout(()=>this.search(),100)}search(){if(!this.data)return;const e=this.freqA,t=this.freqB,a=[];for(let s of this.data)s.min>=e&&s.max<t&&a.push(s.text.split("?"));const s=[];[].concat.apply([],a).forEach(function(e){e=e.toLowerCase().trim(),-1===s.indexOf(e)&&s.push(e)}),this.results=s.sort()}render(){return[e("ion-header",null,e("ion-toolbar",{color:"dark"},e("ion-buttons",{slot:"start"},e("ion-menu-button",null)),e("ion-title",null,"Busqueda por frecuencia"))),e("div",{class:"range-header"},e("h2",null,"desde ",t(this.freqA,!0,2)," hasta ",t(this.freqB,!0,2)),e("ion-list",null,e("ion-item",null,e("ion-label",null,"Rango de frecuencias"),e("ion-range",{dualKnobs:!0,min:0,step:.001,max:this.maxValue})))),e("ion-content",null,e("ion-list",null,this.results.map(t=>e("ion-item",null,t))))]}static get is(){return"page-range"}static get properties(){return{count:{state:!0},el:{elementRef:!0},freqA:{state:!0},freqB:{state:!0},results:{state:!0}}}static get listeners(){return[{name:"ionChange",method:"onInput"}]}static get style(){return".range-header h2{text-align:center}"}}class s{handleKeyBoard(e){const t=e.keyCode;t===n||t===o?(this.ionDecrease.emit({isIncrease:!1,knob:this.knob}),e.preventDefault(),e.stopPropagation()):t!==i&&t!==r||(this.ionIncrease.emit({isIncrease:!0,knob:this.knob}),e.preventDefault(),e.stopPropagation())}hostData(){const{value:e,min:t,max:a}=this,s=100*this.ratio;return{class:{"range-knob-handle":!0,"range-knob-pressed":this.pressed,"range-knob-min":e===t,"range-knob-max":e===a},style:{left:`${s}%`},role:"slider",tabindex:this.disabled?-1:0,"aria-valuemin":t,"aria-valuemax":a,"aria-disabled":this.disabled,"aria-labelledby":this.labelId,"aria-valuenow":e}}render(){return this.pin?[e("div",{class:"range-pin",role:"presentation"},Math.round(this.value)),e("div",{class:"range-knob",role:"presentation"})]:e("div",{class:"range-knob",role:"presentation"})}static get is(){return"ion-range-knob"}static get properties(){return{disabled:{type:Boolean,attr:"disabled"},knob:{type:String,attr:"knob"},labelId:{type:String,attr:"label-id"},max:{type:Number,attr:"max"},min:{type:Number,attr:"min"},pin:{type:Boolean,attr:"pin"},pressed:{type:Boolean,attr:"pressed"},ratio:{type:Number,attr:"ratio"},value:{type:Number,attr:"value"}}}static get events(){return[{name:"ionIncrease",method:"ionIncrease",bubbles:!0,cancelable:!0,composed:!0},{name:"ionDecrease",method:"ionDecrease",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"keydown",method:"handleKeyBoard"}]}}const n=37,r=38,i=39,o=40;export{a as PageRange,s as IonRangeKnob};