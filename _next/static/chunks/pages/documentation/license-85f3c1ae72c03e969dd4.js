(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{84166:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(26265),o=r(85893),a=r(38347);r(67294);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={white:"text-gray-200",blueGray:"text-blue-gray-700",gray:"text-gray-700",brown:"text-brown-700",deepOrange:"text-deep-orange-700",orange:"text-orange-700",amber:"text-amber-700",yellow:"text-yellow-600",lime:"text-lime-700",lightGreen:"text-light-green-700",green:"text-green-700",teal:"text-teal-700",cyan:"text-cyan-700",lightBlue:"text-light-blue-700",blue:"text-blue-700",indigo:"text-indigo-700",deepPurple:"text-deep-purple-700",purple:"text-purple-700",pink:"text-pink-700",red:"text-red-700"};function s(e){var t=e.children,r=e.color,n=(0,a.Z)(e,["children","color"]);return(0,o.jsx)("p",c(c({},n),{},{className:"".concat(u[r]," text-lg font-light leading-relaxed mt-6 mb-4"),children:t}))}s.defaultProps={color:"blueGray"}},93367:function(e,t,r){"use strict";var n;t.__esModule=!0,t.AmpStateContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.AmpStateContext=o},7845:function(e,t,r){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var n,o=(n=r(67294))&&n.__esModule?n:{default:n},a=r(93367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,r=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,i=void 0!==a&&a;return r||o&&i}},74287:function(e,t,r){"use strict";var n;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext({});t.HeadManagerContext=o},57947:function(e,t,r){"use strict";var n=r(61682);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.default=void 0;var a,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=e[o]}r.default=e,t&&t.set(e,r);return r}(r(67294)),c=(a=r(60617))&&a.__esModule?a:{default:a},u=r(93367),s=r(74287),f=r(7845);function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function y(e,t){return e.reduce((function(e,t){var r=i.default.Children.toArray(t.props.children);return e.concat(r)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,r=new Set,n={};return function(o){var a=!0,i=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){i=!0;var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?a=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,s=h.length;u<s;u++){var f=h[u];if(o.props.hasOwnProperty(f))if("charSet"===f)r.has(f)?a=!1:r.add(f);else{var l=o.props[f],p=n[f]||new Set;"name"===f&&i||!p.has(l)?(p.add(l),n[f]=p):a=!1}}}return a}}()).reverse().map((function(e,r){var a=e.key||r;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.props||{});return c["data-href"]=c.href,c.href=void 0,i.default.cloneElement(e,c)}return i.default.cloneElement(e,{key:a})}))}function O(e){var t=e.children,r=(0,i.useContext)(u.AmpStateContext),n=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(c.default,{reduceComponentsToState:y,headManager:n,inAmpMode:(0,f.isInAmpMode)(r)},t)}O.rewind=function(){};var m=O;t.default=m},60617:function(e,t,r){"use strict";var n=r(83115),o=r(2553),a=r(62012),i=(r(50450),r(9807)),c=r(27690),u=r(99828);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=u(e);if(t){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return c(this,r)}}t.__esModule=!0,t.default=void 0;var f=r(67294),l=function(e){i(r,e);var t=s(r);function r(e){var a;return o(this,r),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(r,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),r}(f.Component);t.default=l},47874:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(85893),o=(r(67294),r(29041)),a=r(82830),i=r(68286),c=r(5981),u=r(84166);function s(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{title:"License"}),(0,n.jsx)(i.Z,{}),(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(c.Z,{title:"License",description:"Learn more about the Material Tailwind license."}),(0,n.jsx)(u.Z,{color:"gray",children:"MIT License"}),(0,n.jsxs)(u.Z,{color:"gray",children:["Copyright \xa9 2021 Material Tailwind by"," ",(0,n.jsx)("a",{className:"text-light-blue-500",href:"https://creative-tim.com?ref=material-tailwind",children:"Creative Tim"})]}),(0,n.jsx)("p",{className:"text-gray-700 font-light mb-5 mt-6",children:"Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \u201cSoftware\u201d), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:"}),(0,n.jsx)("p",{className:"text-gray-700 font-light mb-5",children:"The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software."}),(0,n.jsx)("p",{className:"text-gray-700 font-light",children:"THE SOFTWARE IS PROVIDED \u201cAS IS\u201d, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."})]})]})}},79841:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/license",function(){return r(47874)}])},9008:function(e,t,r){e.exports=r(57947)},38164:function(e,t,r){var n=r(54360);e.exports=function(e){if(Array.isArray(e))return n(e)}},50450:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},61682:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},99828:function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t},9807:function(e,t,r){var n=r(21914);e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},27381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},95725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},27690:function(e,t,r){var n=r(87917),o=r(50450);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},83115:function(e,t,r){var n=r(38164),o=r(27381),a=r(73585),i=r(95725);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},11163:function(e,t,r){e.exports=r(72441)}},function(e){e.O(0,[9774,4597,6706,6583,5592],(function(){return t=79841,e(e.s=t);var t}));var t=e.O();_N_E=t}]);