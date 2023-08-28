/*! For license information please see component---src-pages-index-js-ea4f3c83dffd4fb8b55c.js.LICENSE.txt */
(self.webpackChunkbradito_me_site=self.webpackChunkbradito_me_site||[]).push([[678],{4184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&e.push(a)}}else if("object"===l){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},6947:function(e,t,n){"use strict";var r=n(7294);t.Z=()=>r.createElement("footer",{id:"footer",className:"wrapper style1-alt"},r.createElement("div",{className:"inner"},r.createElement("ul",{className:"menu"},r.createElement("li",null,"© 2023. All rights reserved."),r.createElement("li",null,"Design template: ",r.createElement("a",{href:"http://html5up.net"},"HTML5 UP")))))},3049:function(e,t,n){"use strict";var r=n(7294),o=n(4854);t.Z=()=>r.createElement("header",{id:"header"},r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/"},"Main")),r.createElement("li",null,r.createElement(o.Link,{to:"/blog/"},"Blog")))))},8678:function(e,t,n){"use strict";var r=n(7294),o=n(4854);t.Z=e=>{let{children:t}=e;return r.createElement(o.StaticQuery,{query:"3649515864",render:e=>r.createElement(r.Fragment,null,r.createElement("html",{lang:"en"},r.createElement("body",null,r.createElement("div",null,t))))})}},133:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return v},default:function(){return y}});var r=n(7294),o=n(4854),l=n(8678),a=n(6947),i=n(4578),s=n(9986),c=n(7326),u=n(523),p=n.n(u);const f=e=>e.children;var m=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind((0,c.Z)(t)),t}(0,i.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){p().polyfill()},n.handleClick=function(e){e.preventDefault();let t=0,n=!0;const{type:r,element:o,offset:l,timeout:a}=this.props;if(r&&o)switch(r){case"class":t=document.getElementsByClassName(o)[0],n=!!t;break;case"id":t=document.getElementById(o),n=!!t}n?this.scrollTo(t,l,a):console.log("Element not found: "+o)},n.scrollTo=function(e,t,n){void 0===t&&(t=0),void 0===n&&(n=null);const r=e?e.getBoundingClientRect().top+window.pageYOffset:0;n?setTimeout((()=>{window.scroll({top:r+t,left:0,behavior:"smooth"})}),n):window.scroll({top:r+t,left:0,behavior:"smooth"})},n.render=function(){return r.createElement(f,null,"object"==typeof this.props.children?r.cloneElement(this.props.children,{onClick:this.handleClick}):r.createElement("span",{onClick:this.handleClick},this.props.children))},t}(r.Component);var d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={tabs:[{content:"Welcome",anchor:"intro"},{content:"Professional",anchor:"one"},{content:"Community",anchor:"two"}]},n}return(0,i.Z)(t,e),t.prototype.render=function(){const{tabs:e}=this.state;return r.createElement("section",{id:"sidebar"},r.createElement("div",{className:"inner"},r.createElement("nav",null,r.createElement(s.Z,{items:e.map((e=>e.href)),currentClassName:"active",offset:-300},e.map(((e,t)=>r.createElement("li",{key:e.anchor},r.createElement(m,{type:"id",element:e.anchor},r.createElement("a",{href:"#"+e.anchor},e.content)))))))))},t}(r.Component),h=n(3049);const v=()=>r.createElement(r.Fragment,null,r.createElement("title",null,"Brad Ito - personal site"),r.createElement("meta",{name:"keywords",content:"site, web, development, brad, ito, bradito, bradito.me"}),r.createElement("meta",{name:"description",content:"Brad Ito - personal site"}),r.createElement("meta",{name:"og:title",content:"Brad Ito - personal site"}),r.createElement("meta",{name:"og:url",content:"https://bradito.me"}),r.createElement("meta",{name:"og:type",content:"website"}));var y=()=>r.createElement(l.Z,null,r.createElement(h.Z,null),r.createElement(d,null),r.createElement("div",{id:"wrapper"},r.createElement("section",{id:"intro",className:"wrapper style1 fullscreen fade-up"},r.createElement("div",{className:"inner"},r.createElement("h1",null,"Brad Ito"),r.createElement("h2",null,r.createElement("ul",{className:"icons"},r.createElement("li",null,r.createElement("a",{href:"https://twitter.com/phlogisticfugu",className:"fa-twitter"},r.createElement("span",{className:"label"},"Twitter"))),r.createElement("li",null,r.createElement("a",{href:"https://github.com/phlogisticfugu/",className:"fa-github"},r.createElement("span",{className:"label"},"GitHub"))),r.createElement("li",null,r.createElement("a",{href:"https://www.linkedin.com/in/brad-ito/",className:"fa-linkedin"},r.createElement("span",{className:"label"},"LinkedIn"))))),r.createElement("div",null,r.createElement(m,{type:"id",element:"one"},r.createElement("a",{href:"#one",className:"button"},"Learn more")),"   ",r.createElement(o.Link,{to:"/blog/",className:"button"},"Blog")))),r.createElement("section",{id:"one",className:"wrapper style2 spotlights"},r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"Retina AI - CTO and Co-Founder"),r.createElement("p",null,"Lead engineering team for this venture-backed data science and machine learning ",r.createElement("a",{href:"https://retina.ai"},"company"),". Mutiple production web, dataops, big data, and data science products with a focus on predicting customer behavior."),r.createElement("p",null,"Tech: Javascript (Express.js, Vue.js, DevExtreme, Highcharts, Plotly), Python (Flask, FastAPI), R, Spark (Databricks), Serverless, Docker, Snowflake, Firebolt, AWS"),r.createElement("h4",null,"Technical Blog Posts"),r.createElement("ul",null,r.createElement("li",null,r.createElement(o.Link,{to:"/blog/llm-map/"},"Building a useful map of modern LLMs")),r.createElement("li",null,r.createElement("a",{href:"https://retina.ai/blog/marketing-data-checklist/"},"Marketing Data Checklist")),r.createElement("li",null,r.createElement("a",{href:"https://retina.ai/blog/7-ways-machine-learning-projects-fail/"},"7 Ways Machine Learning Projects Fail")),r.createElement("li",null,r.createElement("a",{href:"https://retina.ai/blog/dataops-principles/"},"DataOps Principles")),r.createElement("li",null,r.createElement("a",{href:"https://retina.ai/blog/serverless-principles/"},"Serverless Principles")))))),r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"Topaz Labs - Dir of Engineering"),r.createElement("p",null,r.createElement("a",{href:"https://www.topazlabs.com/"},"Topaz Labs")," uses AI to enhance images and video.  Led engineering team for this profitable, bootstrapped company."),r.createElement("p",null,"As featured by industry partners (Intel, AMD, NVIDIA, Microsoft, Apple), Topaz Labs is the leader in deep learning-based image and video enhancement for photographers. Topaz Labs products are used by tens of thousands of photographers and videographers around the world."),r.createElement("p",null,"Tech: C++ (Qt Framework), Python (Tensorflow, PyTorch, FastAPI), Javascript (React, Express), AWS")))),r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"ScaleFunder - Dir of Engineering"),r.createElement("p",null,"Led software engineering team for this crowdfunding platform for universities and non-profits.  PCI Compliant platform.  Hybrid onshore/offshore team."),r.createElement("p",null,"Company was successfully acquired by ",r.createElement("a",{href:"https://www.ruffalonl.com/"},"Ruffalo Noel Levitz"),"."),r.createElement("p",null,"Tech: Python (Pyramid, SQLAlchemy), Javascript (AngularJS), AWS")))),r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"Walla Media - VP of Technology"),r.createElement("p",null,"Architected innovative technology solutions and built/led combined onshore and offshore development team for this fast- moving profitable online marketing company with nearly $1M in monthly revenue and over 1M page visits a day. Enabled multiple business pivots with modular, reliable systems and platforms."),r.createElement("p",null,"Personally created domain-specific language / web framework to enable web designers to build hundreds of complex lead- generation websites using extensions of HTML 5. Included plug-in modules for external APIs, dynamic tracking of inbound calls, and implicit input validation and tracking."),r.createElement("p",null,"Tech: PHP (Symfony framework), JavaScript (Angular, React, Express)")))),r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"Griffith Park Media - CTO"),r.createElement("p",null,"Built technology and team for this email marketing SaaS company. Platform managed and delivered email marketing campaigns, with detailed tracking that fed into a geo-demographic targeting and segmentation using statistical techniques. Technology competitive with or ahead of competition at the time (e.g. MailChimp)"),r.createElement("p",null,"Tech: Java (J2EE), PHP, Javascript, MySQL")))),r.createElement("section",null,r.createElement("div",{className:"content"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"MIT TEAL Program - Research Assistant"),r.createElement("p",null,"MIT Technology Enabled Active Learning (TEAL) was a pilot program at the time, but is now the standard way that MIT teaches introductory physics. Developed novel simulations and visualizations of electromagnetic fields and waves for use in the TEAL classroom."),r.createElement("p",null,"Tech: Java, 3D Studio Max"))))),r.createElement("section",{id:"two",className:"wrapper style3 fade-up"},r.createElement("div",{className:"inner"},r.createElement("h2",null,"Developer Community Contributions"),r.createElement("div",{className:"features"},r.createElement("section",null,r.createElement("span",{className:"icon major fa-microphone"}),r.createElement("h3",null,"Public Speaking"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.youtube.com/watch?v=gdZH7Anh_6w"},"Intro to Vue.js - Javascript LA")),r.createElement("li",null,"DataOps for AI - ",r.createElement("a",{href:"https://www.meetup.com/dal-ai/events/262535888/"},"Dallas AI")))),r.createElement("section",null,r.createElement("span",{className:"icon major fa-code"}),r.createElement("h3",null,r.createElement("a",{href:"https://suf-stack.org/"},"SUF Stack")),r.createElement("p",null,"Creator of the ",r.createElement("a",{href:"https://suf-stack.org/"},"SUF Stack")," - Serverless, Universal, Full-stack web apps.  For improved developer and user performance and usability.")),r.createElement("section",null,r.createElement("span",{className:"icon major fa-certificate"}),r.createElement("h3",null,"MIT Club of Dallas-Fort Worth"),r.createElement("p",null,"VP of Programs"),r.createElement("p",null,"Prior board member of the MIT Club of Southern California")),r.createElement("section",null,r.createElement("span",{className:"icon major fa-github"}),r.createElement("h3",null,"Creator of open source packages:"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://www.npmjs.com/package/generator-suf-stack-aws-koa-nuxt"},"suf-stack-aws-koa-nuxt")),r.createElement("li",null,r.createElement("a",{href:"https://www.npmjs.com/package/gulp-indexify"},"gulp-indexify")),r.createElement("li",null,r.createElement("a",{href:"https://github.com/phlogisticfugu/squirt"},"squirt")))))))),r.createElement(a.Z,null))},9986:function(e,t,n){"use strict";var r=n(4836);t.Z=void 0;var o=r(n(434)),l=r(n(8416)),a=r(n(861)),i=r(n(6690)),s=r(n(4993)),c=r(n(3808)),u=r(n(6115)),p=r(n(9728)),f=r(n(1655)),m=r(n(5697)),d=r(n(7294)),h=r(n(4184)),v=r(n(2502));var y=function(e){function t(e){var n;return(0,i.default)(this,t),(n=(0,s.default)(this,(0,c.default)(t).call(this,e))).state={targetItems:[],inViewState:[],isScrolledPast:[]},n._handleSpy=n._handleSpy.bind((0,u.default)(n)),n}return(0,f.default)(t,e),(0,p.default)(t,null,[{key:"propTypes",get:function(){return{items:m.default.arrayOf(m.default.string).isRequired,currentClassName:m.default.string.isRequired,scrolledPastClassName:m.default.string,style:m.default.object,componentTag:m.default.oneOfType([m.default.string,m.default.elementType]),offset:m.default.number,rootEl:m.default.string,onUpdate:m.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,p.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map((function(e){return document.getElementById(e)}))}},{key:"_fillArray",value:function(e,t){for(var n=[],r=0,o=e.length;r<o;r++)n[r]=t;return n}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],n=[],r=[],o=e||this.state.targetItems,l=!1,i=0,s=o.length;i<s;i++){var c=o[i],u=!l&&this._isInView(c);u?(l=!0,t.push(c)):n.push(c);var p=i===s-1,f=this._isScrolled();this._isAtBottom()&&this._isInView(c)&&!u&&p&&f&&(n.pop(),n.push.apply(n,(0,a.default)(t)),t=[c],r=this._fillArray(r,!1),u=!0),r.push(u)}return{inView:t,outView:n,viewStatusList:r,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(r)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t,n=this.props,r=n.rootEl,o=n.offset;r&&(t=document.querySelector(r).getBoundingClientRect());var l=e.getBoundingClientRect(),a=r?t.height:window.innerHeight,i=this._getScrollDimension().scrollTop,s=i+a,c=r?l.top+i-t.top+o:l.top+i+o,u=c+e.offsetHeight;return c<s&&u>i}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),n=t.scrollTop,r=t.scrollHeight;return n+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=r}},{key:"_getScrolledPast",value:function(e){if(!e.some((function(e){return e})))return e;var t=!1;return e.map((function(e){return e&&!t?(t=!0,!1):!t}))}},{key:"_spy",value:function(e){var t=this,n=this._getElemsViewState(e),r=this.state.inViewState;this.setState({inViewState:n.viewStatusList,isScrolledPast:n.scrolledPast},(function(){t._update(r)}))}},{key:"_update",value:function(e){var t,n;(t=this.state.inViewState,n=e,t.length===n.length&&t.every((function(e,t){return e===n[t]})))||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,v.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"UNSAFE_componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,n=this.props,r=n.children,a=n.className,i=n.scrolledPastClassName,s=n.style,c=0,u=d.default.Children.map(r,(function(t,n){var r;if(!t)return null;var a=t.type,s=i&&e.state.isScrolledPast[n],u=(0,h.default)((r={},(0,l.default)(r,"".concat(t.props.className),t.props.className),(0,l.default)(r,"".concat(e.props.currentClassName),e.state.inViewState[n]),(0,l.default)(r,"".concat(e.props.scrolledPastClassName),s),r));return d.default.createElement(a,(0,o.default)({},t.props,{className:u,key:c++}),t.props.children)})),p=(0,h.default)((0,l.default)({},"".concat(a),a));return d.default.createElement(t,{className:p,style:s},u)}}]),t}(d.default.Component);t.Z=y},2502:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){var t,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){var o=+new Date;!!t&&o<t+r?(clearTimeout(n),n=setTimeout((function(){t=o,e()}),r)):(t=o,e())}};t.default=n},523:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o=468,l={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||s,scrollIntoView:r.prototype.scrollIntoView},a=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):l.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?l.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):l.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var n=function(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}(this),r=n.getBoundingClientRect(),o=this.getBoundingClientRect();n!==t.body?(d.call(this,n,n.scrollLeft+o.left-r.left,n.scrollTop+o.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else l.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function u(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function p(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=u(e,"Y")&&p(e,"Y"),n=u(e,"X")&&p(e,"X");return t||n}function m(t){var n,r,l,i,s=(a()-t.startTime)/o;i=s=s>1?1:s,n=.5*(1-Math.cos(Math.PI*i)),r=t.startX+(t.x-t.startX)*n,l=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,l),r===t.x&&l===t.y||e.requestAnimationFrame(m.bind(e,t))}function d(n,r,o){var i,c,u,p,f=a();n===t.body?(i=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=l.scroll):(i=n,c=n.scrollLeft,u=n.scrollTop,p=s),m({scrollable:i,method:p,startTime:f,startX:c,startY:u,x:r,y:o})}}}}()},3897:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.__esModule=!0,e.exports.default=e.exports},3405:function(e,t,n){var r=n(3897);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},6690:function(e){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},9728:function(e,t,n){var r=n(4062);function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}e.exports=function(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},8416:function(e,t,n){var r=n(4062);e.exports=function(e,t,n){return(t=r(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},434:function(e){function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(this,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},3808:function(e){function t(n){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},1655:function(e,t,n){var r=n(6015);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&r(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},9498:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},2281:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},4993:function(e,t,n){var r=n(8698).default,o=n(6115);e.exports=function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},861:function(e,t,n){var r=n(3405),o=n(9498),l=n(6116),a=n(2281);e.exports=function(e){return r(e)||o(e)||l(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},5036:function(e,t,n){var r=n(8698).default;e.exports=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},4062:function(e,t,n){var r=n(8698).default,o=n(5036);e.exports=function(e){var t=o(e,"string");return"symbol"===r(t)?t:String(t)},e.exports.__esModule=!0,e.exports.default=e.exports},8698:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},6116:function(e,t,n){var r=n(3897);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);
//# sourceMappingURL=component---src-pages-index-js-ea4f3c83dffd4fb8b55c.js.map