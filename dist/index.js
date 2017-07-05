!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("moment"),require("moment-timezone"),require("react")):"function"==typeof define&&define.amd?define(["moment","moment-timezone","react"],t):"object"==typeof exports?exports["react-moment"]=t(require("moment"),require("moment-timezone"),require("react")):e["react-moment"]=t(e.moment,e["moment-timezone"],e.react)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(12),s=r(l),p=n(9),d=r(p),y=n(10),m=r(y);n(11);var v=function(t){function n(e){a(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={content:""},t}return u(n,t),f(n,[{key:"componentWillMount",value:function(){this.generateContent(this.props)}},{key:"componentDidMount",value:function(){var t=this;this.interval=e.setInterval(function(){t.generateContent(t.props)},6e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"componentWillReceiveProps",value:function(e){this.generateContent(e)}},{key:"generateContent",value:function(e){var t=e.format,r=e.fromNow,o=e.from,a=e.toNow,i=e.to,u=e.calendar,c=e.ago,f=n.getDatetime(e),l="";l=t?f.format(t):o?f.from(o,c):r?f.fromNow(c):i?f.to(i,c):a?f.toNow(c):u?f.calendar():f.toString(),this.setState({content:l})}},{key:"render",value:function(){var e=this.props,t=(e.as,e.date,e.parse,e.format,e.fromNow,e.from,e.toNow,e.to,e.calendar,e.ago,e.utc,e.unix,e.tz,e.locale,o(e,["as","date","parse","format","fromNow","from","toNow","to","calendar","ago","utc","unix","tz","locale"])),r=this.state.content;return s["default"].createElement(this.props.as,c({dateTime:n.getDatetime(this.props)},t),r)}}],[{key:"getDatetime",value:function(e){var t=e.date,n=e.locale,r=e.parse,o=e.utc,a=e.unix,i=e.tz;t=t||e.children;var u=null;return n=n?n:m["default"].locale(),u=o?m["default"].utc(t,r,n):a?(0,m["default"])(1e3*t,r,n):(0,m["default"])(t,r,n),i&&(u=u.tz(i)),u}}]),n}(s["default"].Component);t["default"]=v;var h=[d["default"].string,d["default"].number,d["default"].array,d["default"].object],b=[d["default"].string,d["default"].array];v.propTypes={as:d["default"].string,date:d["default"].oneOfType(h),parse:d["default"].oneOfType(b),format:d["default"].string,ago:d["default"].bool,fromNow:d["default"].bool,from:d["default"].oneOfType(h),toNow:d["default"].bool,to:d["default"].oneOfType(h),calendar:d["default"].bool,unix:d["default"].bool,utc:d["default"].bool,tz:d["default"].string,locale:d["default"].string},v.defaultProps={as:"time",fromNow:!1,toNow:!1,calendar:!1,ago:!1,unix:!1,utc:!1}}).call(t,function(){return this}())},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(s===clearTimeout)return clearTimeout(e);if((s===r||!s)&&clearTimeout)return s=clearTimeout,clearTimeout(e);try{return s(e)}catch(t){try{return s.call(null,e)}catch(t){return s.call(this,e)}}}function i(){m&&d&&(m=!1,d.length?y=d.concat(y):v=-1,y.length&&u())}function u(){if(!m){var e=o(i);m=!0;for(var t=y.length;t;){for(d=y,y=[];++v<t;)d&&d[v].run();v=-1,t=y.length}d=null,m=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,s,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{s="function"==typeof clearTimeout?clearTimeout:r}catch(e){s=r}}();var d,y=[],m=!1,v=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];y.push(new c(e,t)),1!==y.length||m||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t){"use strict";function n(e){return function(){return e}}var r=function(){};r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},function(e,t,n){(function(t){"use strict";function n(e,t,n,o,a,i,u,c){if(r(t),!e){var f;if(void 0===t)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,o,a,i,u,c],s=0;f=new Error(t.replace(/%s/g,function(){return l[s++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var r=function(e){};"production"!==t.env.NODE_ENV&&(r=function(e){if(void 0===e)throw new Error("invariant requires an error message argument")}),e.exports=n}).call(t,n(1))},function(e,t){"use strict";var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";e.exports=n},function(e,t,n){(function(t){"use strict";var r=n(2),o=r;"production"!==t.env.NODE_ENV&&!function(){var e=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,a="Warning: "+e.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(a);try{throw new Error(a)}catch(i){}};o=function(t,n){if(void 0===n)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==n.indexOf("Failed Composite propType: ")&&!t){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];e.apply(void 0,[n].concat(o))}}}(),e.exports=o}).call(t,n(1))},function(e,t,n){(function(t){"use strict";function r(e,n,r,c,f){if("production"!==t.env.NODE_ENV)for(var l in e)if(e.hasOwnProperty(l)){var s;try{o("function"==typeof e[l],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",c||"React class",r,l),s=e[l](n,l,c,r,null,i)}catch(p){s=p}if(a(!s||s instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,l,typeof s),s instanceof Error&&!(s.message in u)){u[s.message]=!0;var d=f?f():"";a(!1,"Failed %s type: %s%s",r,s.message,null!=d?d:"")}}}if("production"!==t.env.NODE_ENV)var o=n(3),a=n(5),i=n(4),u={};e.exports=r}).call(t,n(1))},function(e,t,n){"use strict";var r=n(2),o=n(3),a=n(4);e.exports=function(){function e(e,t,n,r,i,u){u!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){(function(t){"use strict";var r=n(2),o=n(3),a=n(5),i=n(4),u=n(6);e.exports=function(e,n){function c(e){var t=e&&(_&&e[_]||e[R]);if("function"==typeof t)return t}function f(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function l(e){this.message=e,this.stack=""}function s(e){function r(r,f,s,p,d,y,m){if(p=p||k,y=y||s,m!==i)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==t.env.NODE_ENV&&"undefined"!=typeof console){var v=p+":"+s;!u[v]&&c<3&&(a(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),u[v]=!0,c++)}return null==f[s]?r?new l(null===f[s]?"The "+d+" `"+y+"` is marked as required "+("in `"+p+"`, but its value is `null`."):"The "+d+" `"+y+"` is marked as required in "+("`"+p+"`, but its value is `undefined`.")):null:e(f,s,p,d,y)}if("production"!==t.env.NODE_ENV)var u={},c=0;var f=r.bind(null,!1);return f.isRequired=r.bind(null,!0),f}function p(e){function t(t,n,r,o,a,i){var u=t[n],c=E(u);if(c!==e){var f=N(u);return new l("Invalid "+o+" `"+a+"` of type "+("`"+f+"` supplied to `"+r+"`, expected ")+("`"+e+"`."))}return null}return s(t)}function d(){return s(r.thatReturnsNull)}function y(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=t[n];if(!Array.isArray(u)){var c=E(u);return new l("Invalid "+o+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an array."))}for(var f=0;f<u.length;f++){var s=e(u,f,r,o,a+"["+f+"]",i);if(s instanceof Error)return s}return null}return s(t)}function m(){function t(t,n,r,o,a){var i=t[n];if(!e(i)){var u=E(i);return new l("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected a single ReactElement."))}return null}return s(t)}function v(e){function t(t,n,r,o,a){if(!(t[n]instanceof e)){var i=e.name||k,u=P(t[n]);return new l("Invalid "+o+" `"+a+"` of type "+("`"+u+"` supplied to `"+r+"`, expected ")+("instance of `"+i+"`."))}return null}return s(t)}function h(e){function n(t,n,r,o,a){for(var i=t[n],u=0;u<e.length;u++)if(f(i,e[u]))return null;var c=JSON.stringify(e);return new l("Invalid "+o+" `"+a+"` of value `"+i+"` "+("supplied to `"+r+"`, expected one of "+c+"."))}return Array.isArray(e)?s(n):("production"!==t.env.NODE_ENV?a(!1,"Invalid argument supplied to oneOf, expected an instance of array."):void 0,r.thatReturnsNull)}function b(e){function t(t,n,r,o,a){if("function"!=typeof e)return new l("Property `"+a+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=t[n],c=E(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type "+("`"+c+"` supplied to `"+r+"`, expected an object."));for(var f in u)if(u.hasOwnProperty(f)){var s=e(u,f,r,o,a+"."+f,i);if(s instanceof Error)return s}return null}return s(t)}function g(e){function n(t,n,r,o,a){for(var u=0;u<e.length;u++){var c=e[u];if(null==c(t,n,r,o,a,i))return null}return new l("Invalid "+o+" `"+a+"` supplied to "+("`"+r+"`."))}if(!Array.isArray(e))return"production"!==t.env.NODE_ENV?a(!1,"Invalid argument supplied to oneOfType, expected an instance of array."):void 0,r.thatReturnsNull;for(var o=0;o<e.length;o++){var u=e[o];if("function"!=typeof u)return a(!1,"Invalid argument supplid to oneOfType. Expected an array of check functions, but received %s at index %s.",j(u),o),r.thatReturnsNull}return s(n)}function w(){function e(e,t,n,r,o){return T(e[t])?null:new l("Invalid "+r+" `"+o+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return s(e)}function O(e){function t(t,n,r,o,a){var u=t[n],c=E(u);if("object"!==c)return new l("Invalid "+o+" `"+a+"` of type `"+c+"` "+("supplied to `"+r+"`, expected `object`."));for(var f in e){var s=e[f];if(s){var p=s(u,f,r,o,a+"."+f,i);if(p)return p}}return null}return s(t)}function T(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(T);if(null===t||e(t))return!0;var n=c(t);if(!n)return!1;var r,o=n.call(t);if(n!==t.entries){for(;!(r=o.next()).done;)if(!T(r.value))return!1}else for(;!(r=o.next()).done;){var a=r.value;if(a&&!T(a[1]))return!1}return!0;default:return!1}}function x(e,t){return"symbol"===e||("Symbol"===t["@@toStringTag"]||"function"==typeof Symbol&&t instanceof Symbol)}function E(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":x(t,e)?"symbol":t}function N(e){if("undefined"==typeof e||null===e)return""+e;var t=E(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=N(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}function P(e){return e.constructor&&e.constructor.name?e.constructor.name:k}var _="function"==typeof Symbol&&Symbol.iterator,R="@@iterator",k="<<anonymous>>",I={array:p("array"),bool:p("boolean"),func:p("function"),number:p("number"),object:p("object"),string:p("string"),symbol:p("symbol"),any:d(),arrayOf:y,element:m(),instanceOf:v,node:w(),objectOf:b,oneOf:h,oneOfType:g,shape:O};return l.prototype=Error.prototype,I.checkPropTypes=u,I.PropTypes=I,I}}).call(t,n(1))},function(e,t,n){(function(t){if("production"!==t.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103,o=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},a=!0;e.exports=n(8)(o,a)}else e.exports=n(7)()}).call(t,n(1))},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});