!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("vue-easy-slider",[],e):"object"==typeof exports?exports["vue-easy-slider"]=e():t["vue-easy-slider"]=e()}(this,function(){return function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={exports:{},id:r,loaded:!1};return t[r].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.SliderItem=e.Slider=void 0;var n=i(1),s=r(n),o=i(8),a=r(o);e.Slider=s["default"],e.SliderItem=a["default"]},function(t,e,i){var r,n;i(2),r=i(6),n=i(7),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var r=i(3);"string"==typeof r&&(r=[[t.id,r,""]]);i(5)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slider[_v-ecc22c56]{position:relative;overflow:hidden}.slider-content[_v-ecc22c56]{position:relative;height:100%}.slider-indicators[_v-ecc22c56]{position:absolute;bottom:0;z-index:99;padding:1rem}.slider-center[_v-ecc22c56]{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.slider-left[_v-ecc22c56]{left:0}.slider-right[_v-ecc22c56]{right:0}.slider-indicator-icon[_v-ecc22c56]{display:inline-block;width:10px;height:10px;margin:0 .1rem;cursor:pointer;border-radius:50%;background-color:rgba(0,0,0,.2)}.slider-indicator-active[_v-ecc22c56]{background-color:hsla(0,0%,100%,.2)}.slider-btn[_v-ecc22c56]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;background-color:#000;-webkit-transition:opacity .3s;transition:opacity .3s;opacity:.3}.slider-btn[_v-ecc22c56]:hover{opacity:.5}.slider-left-btn[_v-ecc22c56]{left:0;padding:1rem .5rem .75rem .8rem}.slider-right-btn[_v-ecc22c56]{right:0;padding:1rem .8rem .75rem .5rem}.slider-icon[_v-ecc22c56]{display:inline-block;width:20px;height:20px;border-left:2px solid #fff;border-bottom:2px solid #fff}.slider-icon-left[_v-ecc22c56]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.slider-icon-right[_v-ecc22c56]{-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},n=0;n<this.length;n++){var s=this[n][0];"number"==typeof s&&(r[s]=!0)}for(n=0;n<e.length;n++){var o=e[n];"number"==typeof o[0]&&r[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){function r(t,e){for(var i=0;i<t.length;i++){var r=t[i],n=p[r.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](r.parts[s]);for(;s<r.parts.length;s++)n.parts.push(l(r.parts[s],e))}else{for(var o=[],s=0;s<r.parts.length;s++)o.push(l(r.parts[s],e));p[r.id]={id:r.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},r=0;r<t.length;r++){var n=t[r],s=n[0],o=n[1],a=n[2],l=n[3],c={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(c):e.push(i[s]={id:s,parts:[c]})}return e}function s(t,e){var i=f(),r=m[m.length-1];if("top"===t.insertAt)r?r.nextSibling?i.insertBefore(e,r.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),m.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=m.indexOf(t);e>=0&&m.splice(e,1)}function a(t){var e=document.createElement("style");return e.type="text/css",s(t,e),e}function l(t,e){var i,r,n;if(e.singleton){var s=g++;i=v||(v=a(e)),r=c.bind(null,i,s,!1),n=c.bind(null,i,s,!0)}else i=a(e),r=d.bind(null,i),n=function(){o(i)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else n()}}function c(t,e,i,r){var n=i?"":r.css;if(t.styleSheet)t.styleSheet.cssText=x(e,n);else{var s=document.createTextNode(n),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function d(t,e){var i=e.css,r=e.media,n=e.sourceMap;if(r&&t.setAttribute("media",r),n&&(i+="\n/*# sourceURL="+n.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var p={},u=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,g=0,m=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=h()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=n(t);return r(i,e),function(t){for(var s=[],o=0;o<i.length;o++){var a=i[o],l=p[a.id];l.refs--,s.push(l)}if(t){var c=n(t);r(c,e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete p[l.id]}}}};var x=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{posFlag:0,parentWidth:"",childrenArr:[],childrenLength:0}},props:{width:{type:String,"default":"auto"},height:{type:String,"default":"300px"},interval:{type:Number,"default":3e3},speed:{type:Number,"default":500},auto:{type:Boolean,"default":!0},indicators:{"default":"center"},controlBtn:{type:Boolean,"default":!0},animation:{type:String,"default":"default"}},computed:{thisSpeed:function(){var t=this.speed/1e3;return t.toFixed(2)},thisWidth:function(){return"auto"===this.width?this.parentWidth:parseInt(this.width)},indicatorClass:function(){if(this.indicators)return"slider-"+this.indicators}},methods:{scaleWidth:function(){this.parentWidth=this.$el.parentElement.clientWidth;var t=this.$children,e=this.thisWidth+"px";t.forEach(function(t){t.$el.style.width=e})},animate:function(){},autoplay:function(){function t(){return setInterval(function(){r.posFlag<r.$children.length-1?r.posFlag++:r.posFlag=0,i.style.marginLeft=r.posFlag*-r.thisWidth+"px"},r.interval)}var e=void 0,i=this.$els.content,r=this;return function(){e?(clearInterval(e),e=t()):r.auto&&r.$children.length>1&&(e=t())}},next:function(){var t=this.$els.content;this.posFlag<this.$children.length-1?t.style.marginLeft=++this.posFlag*-this.thisWidth+"px":(t.style.marginLeft=0,this.posFlag=0),this.autoplay()},preview:function(){var t=this.$els.content;this.posFlag>0?t.style.marginLeft=--this.posFlag*-this.thisWidth+"px":(t.style.marginLeft=(this.$children.length-1)*-this.thisWidth+"px",this.posFlag=this.$children.length-1),this.autoplay()},jump2:function(t){var e=this.$els.content;e.style.marginLeft=t*-this.thisWidth+"px",this.posFlag=t,this.autoplay()}},events:{addChildrenLength:function(){this.childrenLength++,this.childrenArr.push(this.childrenArr.length),this.scaleWidth(),this.autoplay()}},ready:function(){this.scaleWidth(),this.autoplay=this.autoplay(),this.autoplay()}}},function(t,e){t.exports=' <div class=slider :style="{ width: width, height: height }" _v-ecc22c56=""> <div class=slider-content :style="{ width: childrenLength * thisWidth + \'px\', transition: \'margin \' + thisSpeed + \'s\' }" v-el:content="" _v-ecc22c56=""> <slot _v-ecc22c56=""></slot> </div> <div class="slider-btn slider-left-btn" @click.stop=preview v-if=controlBtn _v-ecc22c56=""> <i class="slider-icon slider-icon-left" _v-ecc22c56=""></i> </div> <div class="slider-btn slider-right-btn" @click.stop=next v-if=controlBtn _v-ecc22c56=""> <i class="slider-icon slider-icon-right" _v-ecc22c56=""></i> </div> <div class=slider-indicators v-if="indicators !== false" :class=indicatorClass @click.stop="" _v-ecc22c56=""> <i class=slider-indicator-icon :class="{ \'slider-indicator-active\': posFlag === $index }" v-for="i in childrenArr" @click="jump2( $index )" _v-ecc22c56=""></i> </div> </div> '},function(t,e,i){var r,n;i(9),r=i(11),n=i(12),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var r=i(10);"string"==typeof r&&(r=[[t.id,r,""]]);i(5)(r,{});r.locals&&(t.exports=r.locals)},function(t,e,i){e=t.exports=i(4)(),e.push([t.id,".slider-item[_v-7780938a]{float:left;width:100%;height:100%}",""])},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={ready:function(){this.$dispatch("addChildrenLength")}}},function(t,e){t.exports=' <div class=slider-item _v-7780938a=""> <slot _v-7780938a=""></slot> </div> '}])});