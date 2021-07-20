!function(){"use strict";var e,t={4600:function(e,t,r){var n=r(2541),o=r(1254);(0,n.X)("page-recommended",o.RecommendedMediaPage)},824:function(e,t,r){r.r(t),r.d(t,{LazyLoadItemListAsync:function(){return y}}),r(2070),r(2004),r(8407),r(6394),r(8288),r(5677),r(2129),r(4655),r(288),r(4458),r(3675),r(4517),r(9751),r(8833),r(815),r(5090),r(9174);var n=r(5466),o=r(8578),i=r(2546),a=r(8982),c=r(2832),u=r(3632),l=r(8986);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t,r,a=(t=(0,i.useItemListLazyLoad)(e),r=13,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,i=[],a=!0,c=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=a[0],f=a[1],d=a[2],y=a[3],g=a[4],b=a[5],v=a[6],h=a[7],O=a[8],w=a[9],P=a[10],j=a[11],_=a[12];return(0,n.useEffect)((function(){return y(new l.g(e.pageItems,e.maxItems,e.firstItemRequestUrl,e.requestUrl,b,v)),o.PageStore.on("window_scroll",h),o.PageStore.on("document_visibility_change",O),h(),function(){o.PageStore.removeListener("window_scroll",h),o.PageStore.removeListener("document_visibility_change",O),d&&(d.cancelAll(),y(null))}}),[]),f?s.length?n.createElement("div",{className:g.listOuter},j(),n.createElement("div",{ref:w,className:"items-list-wrap"},n.createElement("div",{ref:P,className:g.list},s.map((function(t,r){return n.createElement(u.H,m({key:r},(0,u.j)(e,t,r)))})))),_()):null:n.createElement(c.K,{className:g.listOuter})}y.propTypes=f({},a.ItemListAsync.propTypes),y.defaultProps=f(f({},a.ItemListAsync.defaultProps),{},{pageItems:2})},1254:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.RecommendedMediaPage=void 0;var o=n(r(5466)),i=r(3613),a=r(8578),c=r(5910),u=r(824),l=r(7637);t.RecommendedMediaPage=function(e){var t=e.id,r=void 0===t?"recommended-media":t,n=e.title,s=void 0===n?a.PageStore.get("config-enabled").pages.recommended.title:n;return o.default.createElement(l.Page,{id:r},o.default.createElement(i.ApiUrlConsumer,null,(function(e){return o.default.createElement(c.MediaListWrapper,{title:s,className:"items-list-ver"},o.default.createElement(u.LazyLoadItemListAsync,{requestUrl:e.recommended,hideViews:!a.PageStore.get("config-media-item").displayViews,hideAuthor:!a.PageStore.get("config-media-item").displayAuthor,hideDate:!a.PageStore.get("config-media-item").displayPublishDate}))})))}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.m=t,e=[],n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));c&&(e.splice(l--,1),t=o())}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.j=696,function(){var e={696:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],u=r[2],l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var s=u(n);for(t&&t(r);l<a.length;l++)i=a[l],n.o(e,i)&&e[i]&&e[i][0](),e[a[l]]=0;return n.O(s)},r=self.webpackChunkmediacms_web_client_demo=self.webpackChunkmediacms_web_client_demo||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var o=n.O(void 0,[431],(function(){return n(4600)}));o=n.O(o)}();