var MapboxUserMenu=function(e){"use strict";function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var m=function(){},i={},c=[],d=[];function f(e,t){var n,r,o,a,i=d;for(a=arguments.length;2<a--;)c.push(arguments[a]);for(t&&null!=t.children&&(c.length||c.push(t.children),delete t.children);c.length;)if((r=c.pop())&&void 0!==r.pop)for(a=r.length;a--;)c.push(r[a]);else"boolean"==typeof r&&(r=null),(o="function"!=typeof e)&&(null==r?r="":"number"==typeof r?r=String(r):"string"!=typeof r&&(o=!1)),o&&n?i[i.length-1]+=r:i===d?i=[r]:i.push(r),n=o;var s=new m;return s.nodeName=e,s.children=i,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,s}function N(e,t){for(var n in t)e[n]=t[n];return e}var t="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;var h=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,b=[];function g(e){!e._dirty&&(e._dirty=!0)&&1==b.push(e)&&t(w)}function w(){var e,t=b;for(b=[];e=t.pop();)e._dirty&&j(e)}function E(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function S(e){var t=N({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function M(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"===u(r)){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===h.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,x,i):e.removeEventListener(t,x,i),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e){try{e[t]=null==r?"":r}catch(e){}null!=r&&!1!==r||"spellcheck"==t||e.removeAttribute(t)}else{var s=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function x(e){return this._listeners[e.type](e)}var P=[],z=0,y=!1,k=!1;function B(){for(var e;e=P.pop();)e.componentDidMount&&e.componentDidMount()}function L(e,t,n,r,o,a){z++||(y=null!=o&&void 0!==o.ownerSVGElement,k=null!=e&&!("__preactattr_"in e));var i=T(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--z||(k=!1,a||B()),i}function T(e,t,n,r,o){var a=e,i=y;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),O(e,!0))),a.__preactattr_=!0,a;var s,u,l=t.nodeName;if("function"==typeof l)return function(e,t,n,r){var o=e&&e._component,a=o,i=e,s=o&&e._componentConstructor===t.nodeName,u=s,l=S(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(U(o,l,3,n,r),e=o.base):(a&&!s&&(R(a),e=i=null),o=D(t.nodeName,l,n),e&&!o.nextBase&&(o.nextBase=e,i=null),U(o,l,1,n,r),e=o.base,i&&e!==i&&(i._component=null,O(i,!1)));return e}(e,t,n,r);if(y="svg"===l||"foreignObject"!==l&&y,l=String(l),(!e||!E(e,l))&&(s=l,(u=y?document.createElementNS("http://www.w3.org/2000/svg",s):document.createElement(s)).normalizedNodeName=s,a=u,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),O(e,!0)}var p=a.firstChild,m=a.__preactattr_,c=t.children;if(null==m){m=a.__preactattr_={};for(var d=a.attributes,f=d.length;f--;)m[d[f].name]=d[f].value}return!k&&c&&1===c.length&&"string"==typeof c[0]&&null!=p&&void 0!==p.splitText&&null==p.nextSibling?p.nodeValue!=c[0]&&(p.nodeValue=c[0]):(c&&c.length||null!=p)&&function(e,t,n,r,o){var a,i,s,u,l,p=e.childNodes,m=[],c={},d=0,f=0,h=p.length,b=0,g=t?t.length:0;if(0!==h)for(var w=0;w<h;w++){var v=p[w],x=v.__preactattr_,y=g&&x?v._component?v._component.__key:x.key:null;null!=y?(d++,c[y]=v):(x||(void 0!==v.splitText?!o||v.nodeValue.trim():o))&&(m[b++]=v)}if(0!==g)for(var w=0;w<g;w++){u=t[w],l=null;var y=u.key;if(null!=y)d&&void 0!==c[y]&&(l=c[y],c[y]=void 0,d--);else if(f<b)for(a=f;a<b;a++)if(void 0!==m[a]&&(k=i=m[a],_=o,"string"==typeof(C=u)||"number"==typeof C?void 0!==k.splitText:"string"==typeof C.nodeName?!k._componentConstructor&&E(k,C.nodeName):_||k._componentConstructor===C.nodeName)){l=i,m[a]=void 0,a===b-1&&b--,a===f&&f++;break}l=T(l,u,n,r),s=p[w],l&&l!==e&&l!==s&&(null==s?e.appendChild(l):l===s.nextSibling?M(s):e.insertBefore(l,s))}var k,C,_;if(d)for(var w in c)void 0!==c[w]&&O(c[w],!1);for(;f<=b;)void 0!==(l=m[b--])&&O(l,!1)}(a,c,n,r,k||null!=m.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,y);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],y)}(a,t.attributes,m),y=i,a}function O(e,t){var n=e._component;n?R(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||M(e),C(e))}function C(e){for(e=e.lastChild;e;){var t=e.previousSibling;O(e,!0),e=t}}var _=[];function D(e,t,n){var r,o=_.length;for(e.prototype&&e.prototype.render?(r=new e(t,n),W.call(r,t,n)):((r=new W(t,n)).constructor=e,r.render=A);o--;)if(_[o].constructor===e)return r.nextBase=_[o].nextBase,_.splice(o,1),r;return r}function A(e,t,n){return this.constructor(e,n)}function U(e,t,n,r,o){e._disable||(e._disable=!0,e.__ref=t.ref,e.__key=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||o?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,r)),r&&r!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=r),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===i.syncComponentUpdates&&e.base?g(e):j(e,1,o)),e.__ref&&e.__ref(e))}function j(e,t,n,r){if(!e._disable){var o,a,i,s=e.props,u=e.state,l=e.context,p=e.prevProps||s,m=e.prevState||u,c=e.prevContext||l,d=e.base,f=e.nextBase,h=d||f,b=e._component,g=!1,w=c;if(e.constructor.getDerivedStateFromProps&&(u=N(N({},u),e.constructor.getDerivedStateFromProps(s,u)),e.state=u),d&&(e.props=p,e.state=m,e.context=c,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,u,l)?g=!0:e.componentWillUpdate&&e.componentWillUpdate(s,u,l),e.props=s,e.state=u,e.context=l),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!g){o=e.render(s,u,l),e.getChildContext&&(l=N(N({},l),e.getChildContext())),d&&e.getSnapshotBeforeUpdate&&(w=e.getSnapshotBeforeUpdate(p,m));var v,x,y=o&&o.nodeName;if("function"==typeof y){var k=S(o);(a=b)&&a.constructor===y&&k.key==a.__key?U(a,k,1,l,!1):(v=a,e._component=a=D(y,k,l),a.nextBase=a.nextBase||f,a._parentComponent=e,U(a,k,0,l,!1),j(a,1,n,!0)),x=a.base}else i=h,(v=b)&&(i=e._component=null),(h||1===t)&&(i&&(i._component=null),x=L(i,o,l,n||!d,h&&h.parentNode,!0));if(h&&x!==h&&a!==b){var C=h.parentNode;C&&x!==C&&(C.replaceChild(x,h),v||(h._component=null,O(h,!1)))}if(v&&R(v),(e.base=x)&&!r){for(var _=e,E=e;E=E._parentComponent;)(_=E).base=x;x._component=_,x._componentConstructor=_.constructor}}for(!d||n?P.unshift(e):g||e.componentDidUpdate&&e.componentDidUpdate(p,m,w);e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);z||r||B()}}function R(e){var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?R(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),M(e.nextBase=t),_.push(e),C(t)),e.__ref&&e.__ref(null)}function W(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{},this._renderCallbacks=[]}function H(e,t,n){return L(n,e,{},!1,t,!1)}N(W.prototype,{setState:function(e,t){this.prevState||(this.prevState=this.state),this.state=N(N({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this._renderCallbacks.push(t),g(this)},forceUpdate:function(e){e&&this._renderCallbacks.push(e),j(this,2)},render:function(){}});var V={h:f,createElement:f,cloneElement:function(e,t){return f(e.nodeName,N(N({},e.attributes),t),2<arguments.length?[].slice.call(arguments,2):e.children)},Component:W,render:H,rerender:w,options:i};!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.um-disable-text-size-adjust{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%}.um-triangle-wide{width:16px!important;height:16px!important;font-size:0!important;line-height:0!important}.um-triangle-wide--u{border-left:16px solid transparent!important;border-right:16px solid transparent!important;border-bottom:16px solid currentColor!important}.um-animated-menu,.um-animated-menu__pointer,.um-mobile-nav__backdrop{transition:opacity .25s,transform .25s,visibility .25s;transition:opacity .25s,transform .25s,visibility .25s,-webkit-transform .25s}.um-animated-menu__pointer{-webkit-transform:translateX(0%) translateY(0);transform:translateX(0%) translateY(0)}.um-animated-menu__pointer--visible{-webkit-transform:translateX(0%) translateY(-100%);transform:translateX(0%) translateY(-100%)}.um-animated-menu{opacity:0;pointer-events:none;-webkit-transform:translateY(0) scale(.95);transform:translateY(0) scale(.95);-webkit-transform-origin:50% 0;transform-origin:50% 0;visibility:hidden}.um-animated-menu--visible{opacity:1;pointer-events:auto;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1);visibility:visible}.um-wrapper div,.um-wrapper li,.um-wrapper span,.um-wrapper ul{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline}.um-wrapper *,.um-wrapper ::after,.um-wrapper ::before{box-sizing:border-box}.um-wrapper{color:#1f3349;font-size:15px!important;line-height:24px;font-family:'Open Sans',sans-serif;font-weight:400;-webkit-font-smoothing:antialiased}.um-wrapper ul{list-style:none}.um-wrapper button{background:0 0;border:0;color:inherit;font:inherit;margin:0;padding:0;width:auto;text-align:left;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.um-wrapper button::-moz-focus-inner{padding:0;border:0}.um-wrapper svg{display:inline-block}.um-wrapper a{color:inherit;text-decoration:none}@font-face{font-family:'Open Sans';font-weight:400;src:url(https://api.mapbox.com/mapbox-assembly/fonts/opensans-regular.v1.woff2) format('woff2'),url(https://api.mapbox.com/mapbox-assembly/fonts/opensans-regular.v1.woff) format('woff')}@font-face{font-family:'Open Sans';font-weight:700;src:url(https://api.mapbox.com/mapbox-assembly/fonts/opensans-bold.v1.woff2) format('woff2'),url(https://api.mapbox.com/mapbox-assembly/fonts/opensans-bold.v1.woff) format('woff')}.um-wrapper .um-icon{display:block;fill:currentColor;height:1em;width:1em}.um-wrapper .um-btn{display:inline-block;font-weight:700;background-color:#4264fb;color:#fff;border-radius:18px;padding:6px 12px;text-align:center;transition:background-color .125s,border-color .125s,color .125s}.um-wrapper .um-btn--stroke{background-color:transparent;box-shadow:inset 0 0 0 1px currentColor;color:#4264fb}.um-wrapper .um-btn--lighten25{background-color:rgba(255,255,255,.25)}.um-wrapper .um-btn:hover{background-color:#314ccd}.um-wrapper .um-btn--stroke:hover{background-color:transparent;color:#314ccd}.um-wrapper .um-btn--lighten25:hover{background-color:rgba(255,255,255,.5)}.um-wrapper .um-loading--dark::after,.um-wrapper .um-loading::after{content:'';display:block;margin:auto;height:36px;width:36px;-webkit-animation:spin .8s infinite cubic-bezier(.45,.05,.55,.95);animation:spin .8s infinite cubic-bezier(.45,.05,.55,.95)}.um-wrapper .um-loading--s::after{height:18px;width:18px}.um-wrapper .um-loading::after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 36 36'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23333;%7D.b%7Bopacity:0.1;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M5.2721,5.2721,7.3934,7.3934a15,15,0,0,1,21.2132,0l2.1213-2.1213A18,18,0,0,0,5.2721,5.2721Z'/%3E%3Cg class='b'%3E%3Cpath d='M28.6066,28.6066A15,15,0,0,1,7.3934,7.3934L5.2721,5.2721a18,18,0,1,0,25.4558,0L28.6066,7.3934A15,15,0,0,1,28.6066,28.6066Z'/%3E%3C/g%3E%3C/svg%3E\")}.um-wrapper .um-loading--s::after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='18' height='18' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bopacity:0.1;%7D.b%7Bfill:%23333;%7D%3C/style%3E%3C/defs%3E%3Cg class='a'%3E%3Cpath d='M13.2426,13.2426A6,6,0,0,1,4.7574,4.7574L2.636,2.636a9,9,0,1,0,12.7279,0L13.2426,4.7574A6,6,0,0,1,13.2426,13.2426Z'/%3E%3C/g%3E%3Cpath class='b' d='M2.636,2.636,4.7574,4.7574a6,6,0,0,1,8.4853,0L15.364,2.636A9,9,0,0,0,2.636,2.636Z'/%3E%3C/svg%3E\")}.um-wrapper .um-loading--dark::after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='36' height='36' viewBox='0 0 36 36'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23f7f7f7;%7D.b%7Bopacity:0.1;%7D.c%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M5.2721,5.2721,7.3934,7.3934a15,15,0,0,1,21.2132,0l2.1213-2.1213A18,18,0,0,0,5.2721,5.2721Z'/%3E%3Cg class='b'%3E%3Cpath class='c' d='M28.6066,28.6066A15,15,0,0,1,7.3934,7.3934L5.2721,5.2721a18,18,0,1,0,25.4558,0L28.6066,7.3934A15,15,0,0,1,28.6066,28.6066Z'/%3E%3C/g%3E%3C/svg%3E\")}.um-wrapper .um-loading--dark.um-loading--s::after{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='18' height='18' viewBox='0 0 18 18'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bopacity:0.1;%7D.b%7Bfill:%23fff;%7D.c%7Bfill:%23f7f7f7;%7D%3C/style%3E%3C/defs%3E%3Cg class='a'%3E%3Cpath class='b' d='M13.2426,13.2426A6,6,0,0,1,4.7574,4.7574L2.636,2.636a9,9,0,1,0,12.7279,0L13.2426,4.7574A6,6,0,0,1,13.2426,13.2426Z'/%3E%3C/g%3E%3Cpath class='c' d='M2.636,2.636,4.7574,4.7574a6,6,0,0,1,8.4853,0L15.364,2.636A9,9,0,0,0,2.636,2.636Z'/%3E%3C/svg%3E\")}.um-wrapper .um-absolute{position:absolute!important}.um-wrapper .um-relative{position:relative!important}.um-wrapper .um-fixed{position:fixed!important}.um-wrapper .um-scroll-hidden{overflow:hidden!important}.um-wrapper .um-block{display:block!important}.um-wrapper .um-z1{z-index:1!important}.um-wrapper .um-z2{z-index:2!important}.um-wrapper .um-z5{z-index:5!important}.um-wrapper .um-top{top:0!important}.um-wrapper .um-right{right:0!important}.um-wrapper .um-left{left:0!important}.um-wrapper .um-bottom{bottom:0!important}.um-wrapper .um-flex-parent{display:-webkit-flex!important;display:flex!important}.um-wrapper .um-flex-parent--center-cross{-webkit-align-items:center!important;align-items:center!important}.um-wrapper .um-flex-parent--end-main{-webkit-justify-content:flex-end!important;justify-content:flex-end!important}.um-wrapper .um-flex-child{display:block;max-width:100%}.um-wrapper .um-flex-child--no-shrink{-webkit-flex-shrink:0!important;flex-shrink:0!important}.um-wrapper .um-bg-white{background-color:#fff!important}.um-wrapper .um-bg-darken25{background-color:rgba(31,51,73,.25)!important}.um-wrapper .um-bg-darken50{background-color:rgba(31,51,73,.5)!important}.um-wrapper .um-txt-s{font-size:12px;line-height:18px}.um-wrapper .um-txt-bold{font-weight:700!important}.um-wrapper .um-link{cursor:pointer;color:#4264fb;transition:color .125s}.um-wrapper .um-link:hover{color:#314ccd}.um-wrapper .um-link--white{color:#fff}.um-wrapper .um-link--white:hover{color:rgba(255,255,255,.75)}.um-wrapper .um-mr3{margin-right:3px!important}.um-wrapper .um-mr-neg6{margin-right:-6px!important}.um-wrapper .um-mt6{margin-top:6px!important}.um-wrapper .um-mt24{margin-top:24px!important}.um-wrapper .um-mb6{margin-bottom:6px!important}.um-wrapper .um-mb12{margin-bottom:12px!important}.um-wrapper .um-pt24{padding-top:24px!important}.um-wrapper .um-px6{padding-right:6px!important;padding-left:6px!important}.um-wrapper .um-px24{padding-right:24px!important;padding-left:24px!important}.um-wrapper .um-py6{padding-top:6px!important;padding-bottom:6px!important}.um-wrapper .um-py30{padding-top:30px!important;padding-bottom:30px!important}.um-wrapper .um-round{border-radius:4px!important}.um-wrapper .um-round-full{border-radius:9999px!important}.um-wrapper .um-shadow-darken10-bold{box-shadow:0 0 30px 6px rgba(31,51,73,.1)!important}.um-wrapper .um-border--white{border-color:#fff!important}.um-wrapper .um-border--gray-light{border-color:#c6d2e1!important}.um-wrapper .um-border{border-style:solid;border-width:1px}.um-wrapper .um-border-t{border-style:solid;border-top-width:1px}.um-wrapper .um-border--2{border-width:2px!important}.um-wrapper .um-w-full{width:100%!important}.um-wrapper .um-color-white{color:#fff!important}.um-wrapper .um-color-gray{color:#607d9c!important}.um-wrapper .um-color-gray-dark{color:#273d56!important}.um-wrapper .um-color-blue-on-hover:hover{color:#4264fb!important}");var Y="https://www.mapbox.com",Z="https://122e4e-mapbox.global.ssl.fastly.net",I="https://studio.mapbox.com",X="https://dev-studio.tilestream.net",q="https://account.mapbox.com",F="https://dev-account.tilestream.net",G="https://account.mapbox.com/admin",$="https://dev-account.tilestream.net/admin";function J(e){var t=e.user,n={background:'url("'.concat(t.avatar,'") no-repeat center center'),backgroundSize:"cover",width:30,height:30};return V.h("div",{style:n,className:"um-border um-border--2 um-border--white um-round-full um-bg-darken25 um-scroll-hidden"})}function K(e){return e?Y:Z}var Q=function(e){function t(){return s(this,t),p(this,l(t).apply(this,arguments))}return o(t,W),n(t,[{key:"componentDidMount",value:function(){var e=window.document;this.wrapper=e.createElement("div"),this.wrapper.className="um-wrapper";var t=e.createElement("div");t.className="um-loading um-loading--dark um-fixed um-top um-left um-right um-bottom um-flex-parent um-bg-darken50",t.style.zIndex="9999",this.wrapper.appendChild(t),e.body.appendChild(this.wrapper)}},{key:"componentWillUnmount",value:function(){window.document.body.removeChild(this.wrapper)}},{key:"render",value:function(){return null}}]),t}(),ee=function(e){function i(){var e,t,r;s(this,i);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return p(r,(t=r=p(this,(e=l(i)).call.apply(e,[this].concat(o))),r.state={isSigningOut:!1},r.handleClick=function(){var e,t,n;r.setState({isSigningOut:!0}),e=K(r.props.isProduction),t=function(){window.analytics&&window.analytics.reset(),window.location.reload()},(n=new XMLHttpRequest).open("DELETE",e+"/api/logout"),n.withCredentials=!0,n.onload=function(){if(200!==n.status)throw new Error(n.statusText);t()},n.send()},t))}return o(i,W),n(i,[{key:"render",value:function(){var e=this.state;return V.h("button",{className:"um-color-gray-dark um-color-blue-on-hover um-txt-s um-txt-bold um-block um-w-full",onClick:this.handleClick},e.isSigningOut&&V.h(Q,null),V.h("div",{className:"um-flex-parent um-flex-parent--center-cross um-txt-bold"},V.h("svg",{className:"um-icon um-mr3 um-flex-child",viewBox:"0 0 18 18"},V.h("path",{d:"M4,4c0,0-1,0-1,1v8c0,1,1,1,1,1h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H5V6h3c0.6,0,1-0.4,1-1S8.6,4,8,4H4z M11,5 c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4L11.6,8H7C6.5,8,6,8.5,6,9s0.5,1,1,1h4.6l-1.3,1.3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0 l2.8-2.9c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.2-0.6-0.4-0.9l-2.8-2.9C11.5,5.1,11.3,5,11,5L11,5z"})),V.h("span",{className:"um-flex-child"},"Sign out")))}}]),i}();function te(e){return e?q:F}var ne="um-color-gray-dark um-color-blue-on-hover um-txt-s um-txt-bold um-block um-mb12";function re(e){var t,n,r=e.user.plan&&"staff"===e.user.plan.id;return V.h("div",null,V.h("a",{href:te(e.isProduction),className:ne,onClick:e.onSelect},"Account"),V.h("a",{href:(n=e.isProduction,n?I:X),className:ne,onClick:e.onSelect},"Studio"),r&&V.h("a",{href:(t=e.isProduction,t?G:$),className:ne,onClick:e.onSelect},"Admin"),V.h("a",{href:"https://docs.mapbox.com",className:ne,onClick:e.onSelect},"Documentation"),V.h("div",{className:"um-pt24 um-mt24 um-border-t um-border--gray-light"},V.h("div",{className:"um-txt-s um-color-gray um-mb6"},e.user.id),V.h(ee,{isProduction:e.isProduction})))}var oe="user-menu-".concat(Date.now().toString(36)),ae=function(e){function i(){var e,t,o;s(this,i);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return p(o,(t=o=p(this,(e=l(i)).call.apply(e,[this].concat(r))),o.state={isMenuExpanded:!1,menuRightPosition:-72},o.toggleMenu=function(){o.setState(function(e){return{isMenuExpanded:!e.isMenuExpanded}})},o.updateMenuBodyRightPosition=function(){var e=window.document,t=Math.min(e.documentElement.clientWidth,window.innerWidth||0),n=o.triggerNode.getBoundingClientRect(),r=n.right-n.width/2+105+10;t<r?o.setState({menuRightPosition:Math.min(10,r-t-72)}):o.setState({menuRightPosition:-72})},o.closeOnDocumentClick=function(e){o.state.isMenuExpanded&&e.target instanceof Node&&!o.node.contains(e.target)&&o.setState({isMenuExpanded:!1})},o.closeOnEscapeOrTabOut=function(e){o.state.isMenuExpanded&&(("Escape"===e.key||"Esc"===e.key||27===e.keyCode)&&o.setState({isMenuExpanded:!1}),("Tab"===e.key||9===e.keyCode)&&e.target instanceof Node&&!o.node.contains(e.target)&&o.setState({isMenuExpanded:!1}))},o.onSelect=function(){o.setState({isMenuExpanded:!1})},t))}return o(i,W),n(i,[{key:"componentDidMount",value:function(){var e=window.document;e.addEventListener("click",this.closeOnDocumentClick),e.addEventListener("keyup",this.closeOnEscapeOrTabOut),window.addEventListener("resize",this.updateMenuBodyRightPosition),this.updateMenuBodyRightPosition()}},{key:"componentWillUnmount",value:function(){var e=window.document;e.removeEventListener("click",this.closeOnDocumentClick),e.removeEventListener("keyup",this.closeOnEscapeOrTabOut),window.removeEventListener("resize",this.updateMenuBodyRightPosition)}},{key:"render",value:function(){var t=this,e=this.state,n=this.props,r="um-link";return n.dark||(r+=" um-link--white"),V.h("div",{className:"um-relative",ref:function(e){t.node=e}},V.h("nav",{className:"um-relative"},V.h("button",{"aria-label":"User menu","aria-controls":oe,"aria-expanded":e.isMenuExpanded,className:"".concat(r," um-w-full um-flex-parent um-flex-parent--center-cross um-flex-parent--end-main"),onClick:this.toggleMenu,ref:function(e){t.triggerNode=e}},V.h("div",{className:"um-flex-child um-flex-child--no-shrink"},V.h(J,{user:n.user})),V.h("div",{className:"um-flex-child um-flex-child--no-shrink um-mr-neg6"},V.h("svg",{viewBox:"0 0 18 18",style:{height:24,width:24},className:"um-icon"},V.h("path",{d:"M12,7L6,7l3,4L12,7z"})))),V.h("div",{id:oe,"aria-hidden":!e.isMenuExpanded,className:"".concat(e.isMenuExpanded?"um-animated-menu--visible":""," um-absolute um-z2 um-disable-text-size-adjust um-w-full um-animated-menu"),style:{right:0,top:"100%",marginTop:20}},V.h("div",{className:"".concat(e.isMenuExpanded?"um-animated-menu__pointer--visible":""," um-triangle-wide um-triangle-wide--u um-animated-menu__pointer um-color-white um-absolute um-z5"),style:{top:0,right:17}}),V.h("div",{className:"um-shadow-darken10-bold um-bg-white um-absolute um-py30 um-px24 um-round",style:{right:e.menuRightPosition,width:210}},V.h(re,{isVisible:e.isMenuExpanded,user:n.user,isProduction:n.isProduction,onSelect:this.onSelect})))))}}]),i}();function ie(e){var t=e.dark?"um-btn--stroke um-link":"um-btn--lighten25",n="";if(window&&window.location.search){var r=window.location.search.match(/(route-to=[^&]*)/);r&&(n="?".concat(r[1]))}var o="".concat(te(e.isProduction),"/auth/signin/").concat(n);return V.h("a",{className:"um-btn um-w-full um-px6 um-py6 um-round-full um-txt-s ".concat(t),href:o},"Sign in")}var se={callbacks:[],checking:!1,result:void 0};function ue(t){se.checking=!1,se.result=t,se.callbacks.forEach(function(e){return e(t)}),se.callbacks=[]}var le=function(e){function i(){var e,t,n;s(this,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return p(n,(t=n=p(this,(e=l(i)).call.apply(e,[this].concat(o))),n.state={hasCheckedSession:!1,hasTimeoutExpired:!1,user:!1},t))}return o(i,W),n(i,[{key:"componentDidMount",value:function(){var t=this,n=this.props,r=window.setTimeout(function(){t.setState({hasTimeoutExpired:!0})},1e3);!function(e,t){var n=(2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}).timeout,r=void 0===n?5e3:n;if(void 0===se.result){if(se.callbacks.push(t),!se.checking){se.checking=!0;var o=new XMLHttpRequest;o.open("GET",e+"/api/session"),o.timeout=r,o.setRequestHeader("Accept","application/json"),o.withCredentials=!0,o.onerror=function(){console.error("Unexpected error while checking session"),ue(!1)},o.ontimeout=function(){console.error("Timeout while checking session"),ue(!1)},o.onload=function(){var e;403===o.status?e=!1:200!==o.status?(console.log(o.statusText),e=!1):(e=JSON.parse(o.response),window.analytics&&window.analytics.identify(e.id,{username:e.id,email:e.email})),ue(e)},o.send()}}else t(se.result)}(K(n.isProduction),function(e){window.clearTimeout(r),t.setState({hasCheckedSession:!0,user:e}),n.userCallback(e)})}},{key:"render",value:function(){var e,t=this.props,n=this.state;if(n.hasCheckedSession||n.hasTimeoutExpired)if(!n.hasCheckedSession&&n.hasTimeoutExpired){var r="um-loading um-loading--s ".concat(t.dark?"":"um-loading--dark");e=V.h("div",{className:"um-mt6 ".concat(r)})}else e=n.user?V.h(ae,{user:n.user,dark:t.dark,isProduction:t.isProduction}):V.h(ie,{dark:t.dark,isProduction:t.isProduction});else e=null;return V.h("div",{"data-user-menu-wrapper":!0,className:"um-wrapper",style:{width:66}},e)}}]),i}();return le.defaultProps={userCallback:function(){}},e.initialize=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.isProduction,n=void 0===t||t,r=e.dark,o=void 0===r||r,a=e.elementId,i=void 0===a?"mbx-user-menu":a,s=e.userCallback,u=document.getElementById(i);u?H(V.h(le,{userCallback:s,dark:o,isProduction:n}),u,u.querySelector("[data-user-menu-wrapper]")||void 0):console.error('Unable to initialize User Menu because DOM node with ID "'.concat(i,'" does not exist.'))},e}({});