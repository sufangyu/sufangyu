webpackJsonp([6],{882:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),d=e(1),o=t(d),u=e(894),f=t(u),c=e(22),s=t(c),m=e(24),i=t(m),p=e(21),g=t(p);e(912);var E=function(e){function t(){var e,r,n,d;a(this,t);for(var o=arguments.length,u=Array(o),f=0;f<o;f++)u[f]=arguments[f];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.state={show:!0},d=r,l(n,d)}return r(t,e),n(t,[{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:"page page__home"},o.default.createElement("div",{className:"page__header"},o.default.createElement("div",{className:"page__title"},"Badge"),o.default.createElement("div",{className:"page__desc"},"徽标数")),o.default.createElement("div",{className:"page__body"},o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"基本"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement(f.default,{className:"my-badge",text:5},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",text:0,showZero:!0},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",text:0},o.default.createElement("span",{className:"head-example"})),o.default.createElement(g.default,{size:"lg"}),o.default.createElement("p",{style:{padding:"0.3rem 0 0 0",lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"简单的徽章展示，当 count 为 0 时，默认不显示，但是可以使用 showZero 修改为显示。")),o.default.createElement(g.default,{size:"lg"}))),o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"封顶数字"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement(f.default,{className:"my-badge",text:99},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",text:100,showZero:!0},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",text:99,overflowCount:10},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",text:1e3,overflowCount:999},o.default.createElement("span",{className:"head-example"})),o.default.createElement(g.default,{size:"lg"}),o.default.createElement("p",{style:{lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"超过 overflowCount 的会显示为 overflowCount +，默认的 overflowCount 为 99。")),o.default.createElement(g.default,{size:"lg"}))),o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"可点击"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement("a",{href:"javascript:;",style:{display:"inline-block"},onClick:function(){alert("我被点击了")}},o.default.createElement(f.default,{className:"my-badge",text:5},o.default.createElement("span",{className:"head-example"}))),o.default.createElement(g.default,{size:"xl"}),o.default.createElement("p",{style:{lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"用 a 标签进行包裹即可。"),o.default.createElement(g.default,{size:"lg"})))),o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"独立使用"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement(f.default,{className:"my-badge",text:25}),o.default.createElement(f.default,{className:"my-badge",text:250,style:{backgroundColor:"#fff",color:"#999",boxShadow:"0 0 0 1px #d9d9d9 inset"}}),o.default.createElement(f.default,{className:"my-badge",text:109,style:{backgroundColor:"#87d068"}}),o.default.createElement(g.default,{size:"lg"}),o.default.createElement(f.default,{className:"my-badge",text:"减",hot:!0,style:{marginRight:"0.15rem"}}),o.default.createElement(f.default,{className:"my-badge",text:"惠",hot:!0,style:{marginRight:"0.15rem"}}),o.default.createElement(f.default,{className:"my-badge",text:"免",hot:!0,style:{marginRight:"0.15rem"}}),o.default.createElement(f.default,{className:"my-badge",text:"反",hot:!0,style:{marginRight:"0.15rem"}}),o.default.createElement(f.default,{className:"my-badge",text:"HOT",hot:!0,style:{marginRight:"0.15rem"}}),o.default.createElement(g.default,{size:"lg"}),o.default.createElement(f.default,{className:"my-badge",text:"券",style:{marginRight:"0.15rem",padding:"0 0.06rem",backgroundColor:"#f19736",borderRadius:2}}),o.default.createElement(f.default,{className:"my-badge",text:"NEW",style:{marginRight:"0.15rem",padding:"0 0.06rem",backgroundColor:"#21b68a",borderRadius:2}}),o.default.createElement(f.default,{className:"my-badge",text:"自动缴费",style:{marginRight:"0.15rem",padding:"0 0.06rem",backgroundColor:"#fff",borderRadius:2,color:"#f19736",border:"1px solid #f19736"}}),o.default.createElement(g.default,{size:"xl"}),o.default.createElement("p",{style:{lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"不包裹任何元素，可自定义样式展示。")),o.default.createElement(g.default,{size:"lg"}))),o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"恶心的小红点"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement(f.default,{className:"my-badge",dot:!0},o.default.createElement("span",{className:"head-example"})),o.default.createElement(f.default,{className:"my-badge",dot:!0},o.default.createElement(s.default,{type:"comments",size:"md",style:{color:"#007fff"}})),o.default.createElement(f.default,{className:"my-badge",dot:!0},o.default.createElement("a",{href:"javascript:;"},"这是一个链接")),o.default.createElement(g.default,{size:"xl"}),o.default.createElement("p",{style:{lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"没有具体的数字。")),o.default.createElement(g.default,{size:"lg"}))),o.default.createElement("div",{className:"demo__preview"},o.default.createElement("div",{className:"demo__preview__title"},"动态效果"),o.default.createElement("div",{className:"demo__preview__content demo__preview__content--bg"},o.default.createElement(g.default,{size:"lg"}),o.default.createElement(i.default,{size:"lg"},o.default.createElement(f.default,{className:"my-badge",dot:this.state.show},o.default.createElement("span",{className:"head-example"})),o.default.createElement("a",{href:"javascript:;",onClick:function(){e.setState({show:!e.state.show})}},this.state.show?"点击隐藏":"点击显示"),o.default.createElement(g.default,{size:"xl"}),o.default.createElement("p",{style:{lineHeight:"1.5",fontSize:"0.28rem",opacity:"0.8"}},"展示动态变化的效果。")),o.default.createElement(g.default,{size:"lg"})))))}}]),t}(o.default.Component);exports.default=E},894:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0});var a=e(895);Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return t(a).default}})},895:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function a(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var d=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),o=e(1),u=t(o),f=e(2),c=t(f),s=e(6),m=t(s),i=e(102),p=t(i);e(896);var g=function(e){function t(){var e,n,d,o;l(this,t);for(var f=arguments.length,c=Array(f),s=0;s<f;s++)c[s]=arguments[s];return n=d=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),d.renderBadgeSup=function(){var e,t=d.props,l=t.prefixClassName,r=t.style,n=t.text,o=t.overflowCount,f=t.showZero,c=t.dot,s="number"==typeof n&&n>o?o+"+":n,i=c;i&&(s="");var p="0"===s||0===s,g=null===s||void 0===s||""===s,E=(g||p&&!f)&&!i,y=(0,m.default)((e={},a(e,l+"__dot",i),a(e,l+"__text",!i),e));return E?null:u.default.createElement("sup",{className:y,"data-show":!E,style:r},s)},o=n,r(d,o)}return n(t,e),d(t,[{key:"render",value:function(){var e=this.props,t=e.prefixClassName,l=e.className,r=e.children,n=e.dot,d=(0,m.default)(t,l,a({},t+"--not-wrapper",!r));return u.default.createElement("span",{className:d},r,u.default.createElement(p.default,{component:"",showProp:"data-show",transitionName:r&&n?t+"--zoom":"",transitionAppear:!0},this.renderBadgeSup()))}}]),t}(u.default.Component);g.propTypes={prefixClassName:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,children:c.default.any,text:c.default.oneOfType([c.default.number,c.default.string]),overflowCount:c.default.number,showZero:c.default.bool,dot:c.default.bool},g.defaultProps={prefixClassName:"badge",overflowCount:99,dot:!1},exports.default=g},896:function(module,exports){},912:function(module,exports){}});