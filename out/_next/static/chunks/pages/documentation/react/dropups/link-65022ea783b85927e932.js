_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"+QRC":function(e,t,n){"use strict";var r=n("E9nw"),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,c,i,a,l,p,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),a=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var c=o[t.format]||o.default;window.clipboardData.setData(c,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(p),a.selectNodeContents(p),l.addRange(a),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),c=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(c,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(a):l.removeAllRanges()),p&&document.body.removeChild(p),i()}return u}},"7ItQ":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("nKUr"),o=(n("q1tI"),n("uUdh")),c=n("c2c2"),i=n("P5Jw"),a=["blue-gray","gray","brown","deep-orange","orange","amber","yellow","lime","light-green","green","teal","cyan","light-blue","blue","indigo","deep-purple","purple","pink","red"],l=["blueGray","gray","brown","deepOrange","orange","amber","yellow","lime","lightGreen","green","teal","cyan","lightBlue","blue","indigo","deepPurple","purple","pink","red"];function p(e){var t=e.children,n=e.activeColor,p=(e.activeFramework,e.onColorClick),u=(e.onFrameworkClick,e.onCopy),s=e.codeToShow,d=e.copyText;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"border border-solid border-gray-200 rounded my-4 p-4 relative",children:[n?Object(r.jsx)("div",{id:"colors",className:"flex flew-wrap justify-center items-center absolute w-full left-0 sm:left-auto",style:{width:"100%",bottom:"-14px"},children:Object(r.jsx)("div",{className:"flex flew-wrap justify-center items-center bg-white px-2",children:a.map((function(e,t){return Object(r.jsx)("span",{className:"cursor-pointer w-6 h-6 rounded last:mr-0 mr-2 bg-".concat(e).concat(n===l[t]?"".concat("yellow"===e?"-600":"-500"," shadow-md"):"-200"),onClick:function(){p(l[t]),u(!1)}},t)}))})}):null,t,Object(r.jsxs)("div",{className:"relative mt-4",children:[Object(r.jsx)(i.CopyToClipboard,{text:s,onCopy:function(){return u(!0)},children:Object(r.jsx)("button",{className:"text-gray-400 font-normal px-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-transparent absolute right-0 mt-1",type:"button",children:d})}),Object(r.jsx)(o.a,{language:"jsx",style:c.a11yDark,children:s})]})]})})}},E7Xt:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("nKUr");n("q1tI");function o(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{className:"font-serif font-medium text-xl mb-2 text-gray-900",children:e.title}),Object(r.jsx)("p",{className:"text-gray-700 mb-4 font-light",children:e.description})]})}},E9nw:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},Idvz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/documentation/react/dropups/link",function(){return n("J+fK")}])},"J+fK":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("nKUr"),o=n("q1tI"),c=n("wEh6"),i=n("Blfr"),a=n("uCv7"),l=n("zQxQ"),p=n("E7Xt"),u=n("pi5Z");function s(){var e=Object(o.useState)(null),t=e[0],n=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(c.a,{title:"React Dropups"}),Object(r.jsx)(a.a,{}),Object(r.jsxs)(i.a,{children:[Object(r.jsx)(l.a,{title:"React Dropups",description:"Toggle contextual overlays for displaying lists of links and more with the Material Tailwind dropup plugin."}),Object(r.jsx)(p.a,{title:"Dropup"}),Object(r.jsx)(u.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},buttonType:"link",placement:"top-end",size:"regular",rounded:!1,buttonText:"Dropup",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(r.jsx)("div",{className:"h-20",children:"\xa0"}),Object(r.jsx)(p.a,{title:"Rounded Dropup"}),Object(r.jsx)(u.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},buttonType:"link",placement:"top-end",size:"regular",rounded:!0,buttonText:"Rounded Dropup",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(r.jsx)("div",{className:"h-20",children:"\xa0"}),Object(r.jsx)(p.a,{title:"Small Dropup"}),Object(r.jsx)(u.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"top-end",buttonType:"link",size:"sm",rounded:!1,buttonText:"Small Dropup",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(r.jsx)("div",{className:"h-20",children:"\xa0"}),Object(r.jsx)(p.a,{title:"Regular Dropup"}),Object(r.jsx)(u.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"top-end",buttonType:"link",size:"regular",rounded:!1,buttonText:"Regular Dropup",rippleEffect:'ripple="dark"',ripple:"dark"}),Object(r.jsx)("div",{className:"h-20",children:"\xa0"}),Object(r.jsx)(p.a,{title:"Large Dropup"}),Object(r.jsx)(u.a,{copyText:"Buttons"===t?"Copied":"Copy",onCopy:function(e){return n(e?"Buttons":"")},placement:"top-end",buttonType:"link",size:"lg",rounded:!1,buttonText:"Large Dropup",rippleEffect:'ripple="dark"',ripple:"dark"})]})]})}},P5Jw:function(e,t,n){"use strict";var r=n("rHrb").CopyToClipboard;r.CopyToClipboard=r,e.exports=r},pi5Z:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("nKUr"),o=n("cpVT"),c=n("dhJC"),i=n("q1tI"),a=n("yhu3"),l=n("jgyP"),p=n("7ItQ");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){e.children;var t=e.copyText,n=e.onCopy,o=e.buttonType,u=e.size,d=e.rounded,f=e.placement,b=e.buttonText,y=e.rippleEffect,m=Object(c.a)(e,["children","copyText","onCopy","buttonType","size","rounded","placement","buttonText","rippleEffect"]),j=Object(i.useState)("lightBlue"),h=j[0],g=j[1],O=Object(i.useState)("react"),w=O[0],x=O[1],C='import React from "react";\nimport Dropdown from "@material-tailwind/react/Dropdown"\nimport DropdownItem from "@material-tailwind/react/DropdownItem"\n\nexport default function Dropdown() {\n  return (\n    <Dropdown\n      color="'.concat(h,'"\n      placement="').concat(f,'"\n      buttonText="').concat(b,'"\n      buttonType="').concat(o,'"\n      size="').concat(u,'"\n      rounded={').concat(d,"}\n      ").concat(y,'\n    >\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Action</DropdownItem>\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Another Action</DropdownItem>\n      <DropdownItem href="#" onClick={(e) => e.preventDefault()}>Something Else</DropdownItem>\n    </Dropdown>\n  )\n}');return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(p.a,{copyText:t,onCopy:n,activeColor:h,activeFramework:w,codeToShow:C,onColorClick:function(e){return g(e)},onFrameworkClick:function(e){return x(e)},children:Object(r.jsx)("div",{className:"flex justify-center",children:Object(r.jsxs)(a.a,s(s({},m),{},{color:h,placement:f,buttonText:b,buttonType:o,size:u,rounded:d,children:[Object(r.jsx)(l.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Action"}),Object(r.jsx)(l.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Another Action"}),Object(r.jsx)(l.a,{href:"#",onClick:function(e){return e.preventDefault()},children:"Something Else"})]}))})})})}},rHrb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(n("q1tI")),o=c(n("+QRC"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?f(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;p(this,t);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return y(f(n=s(this,(e=d(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,c=t.text,i=t.onCopy,a=t.children,l=t.options,p=r.default.Children.only(a),u=(0,o.default)(c,l);i&&i(c,u),p&&p.props&&"function"===typeof p.props.onClick&&p.props.onClick(e)})),n}var n,c,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,c),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})}},[["Idvz",0,1,2,3,4,5]]]);