webpackJsonp([0],{880:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=e(1),u=t(l),i=e(22),c=t(i),s=e(908),f=t(s),d=function(e){function t(e){r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={selectedTab:"friendTab",hidden:!1},a}return a(t,e),o(t,[{key:"renderContent",value:function(e){var t=this;return u.default.createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},u.default.createElement("div",{style:{paddingTop:60}},"你已点击 “",e,"” tab， 当前展示 “",e,"” 信息"),u.default.createElement("a",{role:"button",tabIndex:"0",style:{display:"block",marginTop:"2rem",marginBottom:"6rem"},onClick:function(e){e.preventDefault(),t.setState({hidden:!t.state.hidden})}},"点击切换 tab-bar 显示/隐藏"))}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:"page"},u.default.createElement("div",{className:"page__header"},u.default.createElement("div",{className:"page__title"},"TabBar"),u.default.createElement("div",{className:"page__desc"},"标签栏")),u.default.createElement("div",{className:"page__body"},u.default.createElement(f.default,{className:"my-tabbar",hidden:this.state.hidden},u.default.createElement(f.default.Item,{title:"首页",key:"首页",badge:1,selected:"homeTab"===this.state.selectedTab,icon:u.default.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat"}}),selectedIcon:u.default.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat"}}),onClick:function(){e.setState({selectedTab:"homeTab"})}},this.renderContent("首页")),u.default.createElement(f.default.Item,{title:"消息",key:"消息",dot:!0,selected:"messageTab"===this.state.selectedTab,icon:u.default.createElement(c.default,{type:"message"}),selectedIcon:u.default.createElement(c.default,{type:"message-fill"}),onClick:function(){e.setState({selectedTab:"messageTab"})}},this.renderContent("消息")),u.default.createElement(f.default.Item,{title:"朋友",key:"朋友",badge:"new",selected:"friendTab"===this.state.selectedTab,icon:u.default.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat"}}),selectedIcon:u.default.createElement("div",{style:{width:"0.44rem",height:"0.44rem",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat"}}),onClick:function(){e.setState({selectedTab:"friendTab"})}},this.renderContent("朋友")),u.default.createElement(f.default.Item,{title:"我",key:"我",selected:"meTab"===this.state.selectedTab,icon:u.default.createElement(c.default,{type:"me"}),selectedIcon:u.default.createElement(c.default,{type:"me-fill"}),onClick:function(){e.setState({selectedTab:"meTab"})}},this.renderContent("我")))))}}]),t}(u.default.Component);d.propTypes={},d.defaultProps={},exports.default=d},894:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var r=e(895);Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return t(r).default}})},895:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=e(1),i=t(u),c=e(2),s=t(c),f=e(6),d=t(f),p=e(102),b=t(p);e(896);var m=function(e){function t(){var e,o,l,u;n(this,t);for(var c=arguments.length,s=Array(c),f=0;f<c;f++)s[f]=arguments[f];return o=l=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),l.renderBadgeSup=function(){var e,t=l.props,n=t.prefixClassName,a=t.style,o=t.text,u=t.overflowCount,c=t.showZero,s=t.dot,f="number"==typeof o&&o>u?u+"+":o,p=s;p&&(f="");var b="0"===f||0===f,m=null===f||void 0===f||""===f,y=(m||b&&!c)&&!p,h=(0,d.default)((e={},r(e,n+"__dot",p),r(e,n+"__text",!p),e));return y?null:i.default.createElement("sup",{className:h,"data-show":!y,style:a},f)},u=o,a(l,u)}return o(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.prefixClassName,n=e.className,a=e.children,o=e.dot,l=(0,d.default)(t,n,r({},t+"--not-wrapper",!a));return i.default.createElement("span",{className:l},a,i.default.createElement(b.default,{component:"",showProp:"data-show",transitionName:a&&o?t+"--zoom":"",transitionAppear:!0},this.renderBadgeSup()))}}]),t}(i.default.Component);m.propTypes={prefixClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),style:s.default.object,children:s.default.any,text:s.default.oneOfType([s.default.number,s.default.string]),overflowCount:s.default.number,showZero:s.default.bool,dot:s.default.bool},m.defaultProps={prefixClassName:"badge",overflowCount:99,dot:!1},exports.default=m},896:function(module,exports){},900:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),l=e(1),u=t(l),i=e(2),c=t(i),s=e(6),f=t(s),d=e(894),p=t(d),b=function(e){function t(){var e,a,o,l;r(this,t);for(var i=arguments.length,c=Array(i),s=0;s<i;s++)c[s]=arguments[s];return a=o=n(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),o.renderIcon=function(){var e=o.props,t=e.prefixClassName,r=e.title,n=e.selected,a=e.icon,l=e.selectedIcon,i=n?l:a;if(!i)return null;var c=u.default.isValidElement(i)?i:u.default.createElement("img",{className:t+"__image",src:i.uri||i,alt:r});return u.default.createElement("div",{className:t+"__icon"},c)},o.renderTitle=function(){var e=o.props,t=e.prefixClassName,r=e.title,n=e.selected,a=e.textColor,l=e.selectedTextColor,i={color:n?l:a};return r?u.default.createElement("p",{className:t+"__title",style:i},r):null},o.renderItem=function(){var e=o.props,t=e.prefixClassName,r=e.badge,n=e.dot;return r?u.default.createElement("div",{className:t+"__wrapper"},u.default.createElement(p.default,{text:r,className:t+"__badge"},o.renderIcon(),o.renderTitle())):n?u.default.createElement("div",{className:t+"__wrapper"},u.default.createElement(p.default,{dot:!0,className:t+"__dot"},o.renderIcon(),o.renderTitle())):u.default.createElement("div",{className:t+"__wrapper"},o.renderIcon(),o.renderTitle())},l=a,n(o,l)}return a(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.prefixClassName,r=e.className,n=e.selected,a=e.textColor,o=e.selectedTextColor,l=e.onClick,i=(0,f.default)(t,r),c={color:n?o:a};return u.default.createElement("div",{className:i,style:c,onClick:l,role:"tab",tabIndex:"0"},this.renderItem())}}]),t}(u.default.Component);b.propTypes={prefixClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),title:c.default.string,selected:c.default.bool,textColor:c.default.string,selectedTextColor:c.default.string,icon:c.default.any,selectedIcon:c.default.any,badge:c.default.oneOfType([c.default.number,c.default.string]),dot:c.default.bool,onClick:c.default.func},b.defaultProps={prefixClassName:"tabbar__list__item",selected:!1,dot:!1,onClick:function(){}},exports.default=b},908:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.TabBarItem=void 0;var r=e(909),n=t(r),a=e(900),o=t(a);n.default.Item=o.default,exports.default=n.default,exports.TabBarItem=o.default},909:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=e(1),c=t(i),s=e(2),f=t(s),d=e(6),p=t(d),b=e(900),m=t(b),y=e(910),h=t(y);e(911);var v=function(e){function t(){var e,o,u,i;n(this,t);for(var s=arguments.length,f=Array(s),d=0;d<s;d++)f[d]=arguments[d];return o=u=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(f))),u.renderTabBarContents=function(){var e=u.props,t=e.prefixClassName,r=e.children,n=(0,p.default)(t+"__contents",t+"__contents--no-animated"),a=r.map(function(e){var r=Object.assign({},e.props,{prefixClassName:t+"__content"});return c.default.createElement(h.default,l({key:e.key},r))});return c.default.createElement("div",{className:n},a)},u.renderTabBarLists=function(){var e=u.props,t=e.prefixClassName,n=e.textColor,a=e.selectedTextColor,o=e.children,i=e.hidden,s=(0,p.default)(t+"__list",r({},t+"__list--hidden",i)),f=o.map(function(e){return c.default.createElement(m.default,l({key:e.key,textColor:n,selectedTextColor:a},e.props))});return c.default.createElement("div",{className:s},f)},i=o,a(u,i)}return o(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.prefixClassName,r=e.className,n=e.backgroundColor,a={backgroundColor:n},o=(0,p.default)(t,r);return c.default.createElement("div",{className:o,style:a},this.renderTabBarContents(),this.renderTabBarLists())}}]),t}(c.default.Component);v.propTypes={prefixClassName:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),children:f.default.any,backgroundColor:f.default.string,textColor:f.default.string,selectedTextColor:f.default.string,hidden:f.default.bool},v.defaultProps={prefixClassName:"tabbar",backgroundColor:"white",textColor:"#888",selectedTextColor:"#007fff",hidden:!1},exports.default=v},910:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=e(1),i=t(u),c=e(2),s=t(c),f=e(6),d=t(f),p=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e,t=this.props,n=t.prefixClassName,a=t.className,o=t.selected,l=t.children,u=(0,d.default)(n,a,(e={},r(e,n+"--active",o),r(e,n+"--inactive",!o),e));return i.default.createElement("div",{className:u},l)}}]),t}(i.default.Component);p.propTypes={prefixClassName:s.default.string,className:s.default.oneOfType([s.default.string,s.default.object]),children:s.default.any,selected:s.default.bool},p.defaultProps={prefixClassName:"tabbar__content",selected:!1},exports.default=p},911:function(module,exports){}});