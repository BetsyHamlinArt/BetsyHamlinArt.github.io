!function(e){function t(t){for(var r,o,l=t[0],u=t[1],d=t[2],f=0,c=[];f<l.length;f++)o=l[f],i[o]&&c.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);c.length;)c.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var u=n[l];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={3:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/js/";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var s=u;a.push([22,0,1]),n()}({1:function(e,t,n){"use strict";var r,i=(r=n(0))&&r.__esModule?r:{default:r};(0,i.default)("#js-menu-trigger,#js-menu-screen").on("click touchstart",function(e){(0,i.default)("#js-menu, #js-menu-screen").toggleClass("is-visible"),(0,i.default)("#js-menu-trigger").toggleClass("slide close"),e.preventDefault()}),(0,i.default)("#markdown-toc").prepend("<li><h6>Overview</h6></li>")},15:function(e,t){},21:function(e,t,n){"use strict";var r=u(n(0)),i=u(n(20)),a=u(n(19)),o=u(n(18)),l=u(n(17));function u(e){return e&&e.__esModule?e:{default:e}}n(16),n(14),n(11),n(1);var d,s=function(e,t,n){var i=(0,r.default)(n),a=function(e){e.preventDefault(),o(e.data.$links.index(this),(0,r.default)(e.target).closest(n))},o=function(n,i,a,o){if(i.length){var l,u=(0,r.default)(".pswp")[0],d=function(e){var t=[];return e.children().each(function(e,n){var i=(0,r.default)(n).find("a");if(i.length){var a=i.find("img"),o=i.data("size").split("x");t.push({src:i.attr("href"),msrc:a.attr("src"),pid:i.data("index"),title:i.data("title")||" ",desc:i.data("description"),w:parseInt(o[0],10),h:parseInt(o[1],10),el:n})}}),t}(i);if(l={galleryUID:i.data("pswp-uid"),galleryPIDs:!0,getThumbBoundsFn:function(e){var t=d[e].el.getElementsByTagName("img")[0],n=window.pageYOffset||document.documentElement.scrollTop,r=t.getBoundingClientRect();return{x:r.left,y:r.top+n,w:r.width}},addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML="<p>"+e.title+"</p>",e.desc&&(t.children[0].innerHTML+="<p>"+e.desc+"</p>"),!0):(t.children[0].innerText="",!1)}},o)if(l.galleryPIDs){for(var s=0;s<d.length;s++)if(d[s].pid===n){l.index=s;break}}else l.index=parseInt(n,10)-1;else l.index=parseInt(n,10);isNaN(l.index)||(a&&(l.showAnimationDuration=0),new e(u,t,d,l).init())}};i.each(function(e,t){var n=(0,r.default)(t);n.data("pswp-uid",e+1),n.on("click",".grid-item a",{$links:n.find(".grid-item a")},a)});var l=function(){var e=window.location.hash.substring(1),t={};if(e.length<5)return t;for(var n=e.split("&"),r=0;r<n.length;r++)if(n[r]){var i=n[r].split("=");i.length<2||(t[i[0]]=i[1])}return t.gid&&(t.gid=parseInt(t.gid,10)),t}();l.pid&&l.gid&&o(l.pid,(0,r.default)(i[l.gid-1]),!0,!0)};r.default.bridget("masonry",i.default,r.default),l.default.makeJQueryPlugin(r.default),r.default.fn.masonryImagesReveal=function(e,t){var n=this.data("masonry"),i=n.options.itemSelector;return e.hide(),this.append(e),t(),e.imagesLoaded().progress(function(e,t){var a=(0,r.default)(t.img).parents(i);a.show(),n.appended(a)}),this},(d=(0,r.default)(".grid").masonry({itemSelector:".grid-item",columnWidth:".grid-sizer",gutter:".gutter-sizer",percentPosition:!0})).length&&window.IMAGE_DATA&&(window.RANDOMIZE_SETTINGS&&(Math.seedrandom(Math.floor(Date.now()/864e5)),function(e){for(var t,n,r=e.length;r;t=Math.floor(Math.random()*r),n=e[--r],e[r]=e[t],e[t]=n);}(window.IMAGE_DATA),window.IMAGE_DATA=window.IMAGE_DATA.slice(-window.RANDOMIZE_SETTINGS.limit)),d.masonryImagesReveal((0,r.default)(window.IMAGE_DATA.join("")),function(){s(r.default,a.default,o.default)}),(0,r.default)("#jsonScript").remove())},22:function(e,t,n){e.exports=n(21)}});