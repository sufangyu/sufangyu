webpackJsonp([7],{884:function(module,exports,e){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var d=function(){function e(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,l,a){return l&&e(t.prototype,l),a&&e(t,a),t}}(),c=e(1),r=t(c),u=e(309),m=t(u);e(919);var f=function(e){function t(){var e,n,d,c;l(this,t);for(var r=arguments.length,u=Array(r),m=0;m<r;m++)u[m]=arguments[m];return n=d=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),d.onChange=function(e){},d.onChangeAccordion=function(e){},c=n,a(d,c)}return n(t,e),d(t,[{key:"render",value:function(){return r.default.createElement("div",{className:"page page__home"},r.default.createElement("div",{className:"page__header"},r.default.createElement("div",{className:"page__title"},"Accordion"),r.default.createElement("div",{className:"page__desc"},"手风琴")),r.default.createElement("div",{className:"page__body"},r.default.createElement("div",{className:"demo__preview"},r.default.createElement("div",{className:"demo__preview__title"},"基本"),r.default.createElement("div",{className:"demo__preview__content"},r.default.createElement(m.default,{onChange:this.onChange},r.default.createElement(m.default.Item,{label:"评价是怎么来的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。"))),r.default.createElement(m.default.Item,{label:"预订的价格是如何计算的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的预订总价取决于好几个因素。请注意，房东一旦接受您的预订申请（或者如果您使用闪订功能预订住宿），系统便会按此价格全额收取费用。"),r.default.createElement("p",null,"有些房东为支付其房源的清洁费用而收取的一次性费用额外房客费：有些房东为支付与使用他们的房源有关的其他费用而收取的一次性费用"))),r.default.createElement(m.default.Item,{label:"如何取消我的预订？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"您可以在旅程开始前或旅程期间随时取消预订。要取消预订，请按以下步骤操作："),r.default.createElement("p",null,"1.前往您的旅程; 2.在您要取消的预订旁边点击更改或取消; 3.选择取消预订")))))),r.default.createElement("div",{className:"demo__preview"},r.default.createElement("div",{className:"demo__preview__title"},"基本 - 默认展开第二个"),r.default.createElement("div",{className:"demo__preview__content"},r.default.createElement(m.default,{defaultActiveIndex:1},r.default.createElement(m.default.Item,{label:"评价是怎么来的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。"))),r.default.createElement(m.default.Item,{label:"预订的价格是如何计算的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的预订总价取决于好几个因素。请注意，房东一旦接受您的预订申请（或者如果您使用闪订功能预订住宿），系统便会按此价格全额收取费用。"),r.default.createElement("p",null,"有些房东为支付其房源的清洁费用而收取的一次性费用额外房客费：有些房东为支付与使用他们的房源有关的其他费用而收取的一次性费用"))),r.default.createElement(m.default.Item,{label:"如何取消我的预订？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"您可以在旅程开始前或旅程期间随时取消预订。要取消预订，请按以下步骤操作："),r.default.createElement("p",null,"1.前往您的旅程; 2.在您要取消的预订旁边点击更改或取消; 3.选择取消预订")))))),r.default.createElement("div",{className:"demo__preview"},r.default.createElement("div",{className:"demo__preview__title"},"手风琴模式"),r.default.createElement("div",{className:"demo__preview__content"},r.default.createElement(m.default,{accordion:!0,onChange:this.onChangeAccordion},r.default.createElement(m.default.Item,{label:"评价是怎么来的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。"))),r.default.createElement(m.default.Item,{label:"预订的价格是如何计算的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的预订总价取决于好几个因素。请注意，房东一旦接受您的预订申请（或者如果您使用闪订功能预订住宿），系统便会按此价格全额收取费用。"),r.default.createElement("p",null,"有些房东为支付其房源的清洁费用而收取的一次性费用额外房客费：有些房东为支付与使用他们的房源有关的其他费用而收取的一次性费用"))),r.default.createElement(m.default.Item,{label:"如何取消我的预订？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"您可以在旅程开始前或旅程期间随时取消预订。要取消预订，请按以下步骤操作："),r.default.createElement("p",null,"1.前往您的旅程; 2.在您要取消的预订旁边点击更改或取消; 3.选择取消预订"))))),r.default.createElement("div",{className:"demo__preview"},r.default.createElement("div",{className:"demo__preview__title"},"禁用不可展开或者关闭"),r.default.createElement("div",{className:"demo__preview__content"},r.default.createElement(m.default,{defaultActiveIndex:0},r.default.createElement(m.default.Item,{label:"不可关闭项",disabled:!0},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。"))),r.default.createElement(m.default.Item,{label:"预订的价格是如何计算的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的预订总价取决于好几个因素。请注意，房东一旦接受您的预订申请（或者如果您使用闪订功能预订住宿），系统便会按此价格全额收取费用。"),r.default.createElement("p",null,"有些房东为支付其房源的清洁费用而收取的一次性费用额外房客费：有些房东为支付与使用他们的房源有关的其他费用而收取的一次性费用"))),r.default.createElement(m.default.Item,{label:"如何取消我的预订？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"您可以在旅程开始前或旅程期间随时取消预订。要取消预订，请按以下步骤操作："),r.default.createElement("p",null,"1.前往您的旅程; 2.在您要取消的预订旁边点击更改或取消; 3.选择取消预订"))),r.default.createElement(m.default.Item,{label:"不可展开项",disabled:!0},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。")))))),r.default.createElement("div",{className:"demo__preview"},r.default.createElement("div",{className:"demo__preview__title"},"自定义样式"),r.default.createElement("div",{className:"demo__preview__content"},r.default.createElement(m.default,{className:"my-accordion"},r.default.createElement(m.default.Item,{label:"评价是怎么来的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的所有评价均由爱彼迎房东和旅行者所撰写。因此，您看到的评价都是基于房客在房东房源内完成的某次住宿。"),r.default.createElement("p",null,"退房后您有14天的时间为旅程撰写评价。"))),r.default.createElement(m.default.Item,{label:"预订的价格是如何计算的？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"爱彼迎上的预订总价取决于好几个因素。请注意，房东一旦接受您的预订申请（或者如果您使用闪订功能预订住宿），系统便会按此价格全额收取费用。"),r.default.createElement("p",null,"有些房东为支付其房源的清洁费用而收取的一次性费用额外房客费：有些房东为支付与使用他们的房源有关的其他费用而收取的一次性费用"))),r.default.createElement(m.default.Item,{label:"如何取消我的预订？"},r.default.createElement("div",{className:"text__content",style:{padding:"0.3rem"}},r.default.createElement("p",null,"您可以在旅程开始前或旅程期间随时取消预订。要取消预订，请按以下步骤操作："),r.default.createElement("p",null,"1.前往您的旅程; 2.在您要取消的预订旁边点击更改或取消; 3.选择取消预订")))))))))}}]),t}(r.default.Component);f.propTypes={},f.defaultProps={},exports.default=f},919:function(module,exports){}});