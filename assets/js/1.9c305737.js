(window.webpackJsonp=window.webpackJsonp||[]).push([[1,17,20,21,23,35,38,42,43,48],{325:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return r}));o(132);var n=o(0);function a(){const e=Object(n.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function r(){const e=Object(n.h)(!1);return Object(n.e)(()=>{e.value=!0}),Object(n.f)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},327:function(e,t,o){},333:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(18),r=o(61),s=o(325),i=Object(n.c)({components:{RecoIcon:r.b},props:{item:{required:!0}},setup(e,t){const o=Object(s.a)(),{item:r}=Object(n.i)(e),i=Object(n.a)(()=>Object(a.d)(r.value.link)),c=Object(n.a)(()=>o.$site.locales?Object.keys(o.$site.locales).some(e=>e===i.value):"/"===i.value);return{link:i,exact:c,isExternal:a.f,isMailto:a.g,isTel:a.h}}}),c=o(2),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("router-link",{staticClass:"nav-link",attrs:{to:e.link,exact:e.exact}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=l.exports},334:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),r=(o(335),o(2)),s=Object(r.a)(a,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=s.exports},335:function(e,t,o){"use strict";o(327)},336:function(e,t,o){},344:function(e,t,o){},345:function(e,t,o){},350:function(e,t,o){"use strict";o(336)},357:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function a(e){const t=document.querySelector(":root"),o=n[e],a="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(a),t.classList.add(e)}function r(e){if("auto"!==e)return void a(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&a("dark"),o&&a("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();a(e<6||e>=18?"dark":"light")}}},358:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(61),r=o(333),s=o(334),i=Object(n.c)({components:{NavLink:r.default,DropdownTransition:s.default,RecoIcon:a.b},props:{item:{required:!0}},setup(e,t){const o=Object(n.h)(!1);return{open:o,toggle:()=>{o.value=!o.value}}}}),c=(o(350),o(2)),l=Object(c.a)(i,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n      "+e._s(e.item.text)+"\n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(o,n){return t("li",{key:o.link||n,staticClass:"dropdown-item"},["links"===o.type?t("h4",[e._v(e._s(o.text))]):e._e(),e._v(" "),"links"===o.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(o.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:o}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=l.exports},361:function(e,t,o){"use strict";var n=TypeError;e.exports=function(e,t){if(e<t)throw new n("Not enough arguments");return e}},362:function(e,t,o){},363:function(e,t,o){},364:function(e,t,o){},365:function(e,t,o){"use strict";o(344)},366:function(e,t,o){"use strict";o(345)},367:function(e,t,o){},379:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(61),r=o(358),s=o(18),i=o(333),c=o(325),l=Object(n.c)({components:{NavLink:i.default,DropdownLink:r.default,RecoIcon:a.b},setup(e,t){const o=Object(c.a)(),a=Object(n.a)(()=>o.$themeLocaleConfig.nav||o.$themeConfig.nav||[]),r=Object(n.a)(()=>{const e=o.$site.locales||{};if(e&&Object.keys(e).length>1){const t=o.$page.path,n=o.$router.options.routes,r=o.$themeConfig.locales||{},s={text:o.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(a=>{const s=e[a],i=r[a]&&r[a].label||s.lang;let c;return s.lang===o.$lang?c=t:(c=t.replace(o.$localeConfig.path,a),n.some(e=>e.path===c)||(c=a)),{text:i,link:c}})};return[...a.value,s]}const t=o.$themeConfig.blogConfig||{},n=a.value.some(e=>!t.category||e.text===(t.category.text||"分类")),r=a.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!n&&Object.hasOwnProperty.call(t,"category")){const e=t.category,n=o.$categories;a.value.splice(parseInt(e.location||2)-1,0,{items:n.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||o.$recoLocales.category,type:"links",icon:"reco-category"})}if(!r&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;a.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||o.$recoLocales.tag,type:"links",icon:"reco-tag"})}return a.value}),i=Object(n.a)(()=>(o.nav||[]).map(e=>Object.assign(Object(s.j)(e),{items:(e.items||[]).map(s.j)}))),l=Object(n.a)(()=>{const{repo:e}=o.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),u=Object(n.a)(()=>{if(!o.repoLink)return"";if(o.$themeConfig.repoLabel)return o.$themeConfig.repoLabel;const e=o.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let o=0;o<t.length;o++){const n=t[o];if(new RegExp(n,"i").test(e))return n}return"Source"});return{userNav:a,nav:r,userLinks:i,repoLink:l,repoLabel:u}}}),u=(o(365),o(2)),d=Object(u.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=d.exports},381:function(e,t,o){"use strict";o.r(t);var n=o(357),a={name:"ModeOptions",data:()=>({modeOptions:[{mode:"dark",title:"dark"},{mode:"auto",title:"auto"},{mode:"light",title:"light"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),Object(n.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(n.a)(e),localStorage.setItem("mode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},r=(o(366),o(2)),s=Object(r.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("h4",{staticClass:"title"},[e._v("Choose mode")]),e._v(" "),t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,n){return t("li",{key:n,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null);t.default=s.exports},383:function(e,t,o){"use strict";var n=o(133),a=o(6),r=o(62),s=o(361),i=URLSearchParams,c=i.prototype,l=a(c.append),u=a(c.delete),d=a(c.forEach),f=a([].push),h=new i("a=1&a=2&b=3");h.delete("a",1),h.delete("b",void 0),h+""!="a=2"&&n(c,"delete",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return u(this,e);var n=[];d(this,(function(e,t){f(n,{key:t,value:e})})),s(t,1);for(var a,i=r(e),c=r(o),h=0,p=0,g=!1,v=n.length;h<v;)a=n[h++],g||a.key===i?(g=!0,u(this,a.key)):p++;for(;p<v;)(a=n[p++]).key===i&&a.value===c||l(this,a.key,a.value)}),{enumerable:!0,unsafe:!0})},384:function(e,t,o){"use strict";var n=o(133),a=o(6),r=o(62),s=o(361),i=URLSearchParams,c=i.prototype,l=a(c.getAll),u=a(c.has),d=new i("a=1");!d.has("a",2)&&d.has("a",void 0)||n(c,"has",(function(e){var t=arguments.length,o=t<2?void 0:arguments[1];if(t&&void 0===o)return u(this,e);var n=l(this,e);s(t,1);for(var a=r(o),i=0;i<n.length;)if(n[i++]===a)return!0;return!1}),{enumerable:!0,unsafe:!0})},385:function(e,t,o){"use strict";var n=o(8),a=o(6),r=o(386),s=URLSearchParams.prototype,i=a(s.forEach);n&&!("size"in s)&&r(s,"size",{get:function(){var e=0;return i(this,(function(){e++})),e},configurable:!0,enumerable:!0})},386:function(e,t,o){"use strict";var n=o(134),a=o(13);e.exports=function(e,t,o){return o.get&&n(o.get,t,{getter:!0}),o.set&&n(o.set,t,{setter:!0}),a.f(e,t,o)}},387:function(e,t,o){"use strict";o(362)},388:function(e,t,o){"use strict";o(363)},389:function(e,t,o){"use strict";o(364)},390:function(e,t){function o(e){return"function"==typeof e.value||(console.warn("[Vue-click-outside:] provided expression",e.expression,"is not a function."),!1)}function n(e){return void 0!==e.componentInstance&&e.componentInstance.$isServer}e.exports={bind:function(e,t,a){if(!o(t))return;function r(t){if(a.context){var o=t.path||t.composedPath&&t.composedPath();o&&o.length>0&&o.unshift(t.target),e.contains(t.target)||function(e,t){if(!e||!t)return!1;for(var o=0,n=t.length;o<n;o++)try{if(e.contains(t[o]))return!0;if(t[o].contains(e))return!1}catch(e){return!1}return!1}(a.context.popupItem,o)||e.__vueClickOutside__.callback(t)}}e.__vueClickOutside__={handler:r,callback:t.value};const s="ontouchstart"in document.documentElement?"touchstart":"click";!n(a)&&document.addEventListener(s,r)},update:function(e,t){o(t)&&(e.__vueClickOutside__.callback=t.value)},unbind:function(e,t,o){const a="ontouchstart"in document.documentElement?"touchstart":"click";!n(o)&&e.__vueClickOutside__&&document.removeEventListener(a,e.__vueClickOutside__.handler),delete e.__vueClickOutside__}}},391:function(e,t,o){"use strict";o(367)},400:function(e,t,o){},414:function(e,t,o){"use strict";o.r(t);o(383),o(384),o(385),o(17);var n=o(0),a=o(61),r=o(325),s=Object(n.c)({components:{RecoIcon:a.b},props:["options"],setup(e,t){const a=Object(r.a)(),s=Object(n.h)(void 0),i=(e,t)=>{Promise.all([Promise.all([o.e(0),o.e(13)]).then(o.t.bind(null,519,7)),Promise.all([o.e(0),o.e(13)]).then(o.t.bind(null,520,7))]).then(([o])=>{o=o.default;const{algoliaOptions:n={}}=e;o(Object.assign({},e,{inputSelector:"#algolia-search-input",algoliaOptions:Object.assign({facetFilters:["lang:"+t].concat(n.facetFilters||[])},n),handleSelected:(e,t,o)=>{const{pathname:n,hash:a}=new URL(o.url);this.$router.push(`${n}${a}`)}}))})};return Object(n.e)(()=>{i(e.options,a.$lang),s.value=a.$site.themeConfig.searchPlaceholder||""}),{placeholder:s,initialize:i,update:(e,t)=>{a.$el.innerHTML='<input id="algolia-search-input" class="search-query">',a.initialize(e,t)}}},watch:{$lang(e){this.update(this.options,e)},options(e){this.update(e,this.$lang)}}}),i=(o(387),o(2)),c=Object(i.a)(s,(function(){var e=this._self._c;this._self._setupProxy;return e("form",{staticClass:"algolia-search-wrapper search-box",attrs:{id:"search-form",role:"search"}},[e("reco-icon",{attrs:{icon:"reco-search"}}),this._v(" "),e("input",{staticClass:"search-query",attrs:{id:"algolia-search-input",placeholder:this.placeholder}})],1)}),[],!1,null,null,null);t.default=c.exports},415:function(e,t,o){"use strict";o.r(t);o(17);var n=o(0),a=o(61),r=o(325),s=Object(n.c)({components:{RecoIcon:a.b},setup(e,t){const o=Object(r.a)(),a=Object(n.g)({query:"",focused:!1,focusIndex:0,placeholder:void 0}),s=Object(n.a)(()=>a.focused&&c.value&&c.value.length),i=e=>{for(const t in o.$site.locales||{})if("/"!==t&&0===e.path.indexOf(t))return t;return"/"},c=Object(n.a)(()=>{const e=a.query.trim().toLowerCase();if(!e)return;const{pages:t}=o.$site,n=o.$site.themeConfig.searchMaxSuggestions,r=o.$localePath,s=t=>t&&t.title&&t.title.toLowerCase().indexOf(e)>-1,c=[];for(let e=0;e<t.length&&!(c.length>=n);e++){const o=t[e];if(i(o)===r)if(s(o))c.push(o);else if(o.headers)for(let e=0;e<o.headers.length&&!(c.length>=n);e++){const t=o.headers[e];s(t)&&c.push(Object.assign({},o,{path:o.path+"#"+t.slug,header:t}))}}return c}),l=Object(n.a)(()=>(o.$site.themeConfig.nav||[]).length+(o.$site.repo?1:0)<=2);return{showSuggestions:s,suggestions:c,alignRight:l,onUp:()=>{s.value&&(a.focusIndex>0?a.focusIndex--:a.focusIndex=c.value.length-1)},onDown:()=>{s.value&&(a.focusIndex<c.value.length-1?a.focusIndex++:a.focusIndex=0)},focus:e=>{a.focusIndex=e},unfocus:()=>{a.focusIndex=-1},go:e=>{s.value&&(o.$router.push(c.value[e].path),a.query="",a.focusIndex=0)},...Object(n.i)(a)}},mounted(){this.placeholder=this.$site.themeConfig.searchPlaceholder||""}}),i=(o(388),o(2)),c=Object(i.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"search-box"},[t("reco-icon",{attrs:{icon:"reco-search"}}),e._v(" "),t("input",{ref:"input",class:{focused:e.focused},attrs:{"aria-label":"Search",placeholder:e.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:e.query},on:{input:function(t){e.query=t.target.value},focus:function(t){e.focused=!0},blur:function(t){e.focused=!1},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.go(e.focusIndex)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.onUp.apply(null,arguments)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.onDown.apply(null,arguments)}]}}),e._v(" "),e.showSuggestions?t("ul",{staticClass:"suggestions",class:{"align-right":e.alignRight},on:{mouseleave:e.unfocus}},e._l(e.suggestions,(function(o,n){return t("li",{key:n,staticClass:"suggestion",class:{focused:n===e.focusIndex},on:{mousedown:function(t){return e.go(n)},mouseenter:function(t){return e.focus(n)}}},[t("a",{attrs:{href:o.path},on:{click:function(e){e.preventDefault()}}},[t("span",{staticClass:"page-title"},[e._v(e._s(o.title||o.path))]),e._v(" "),o.header?t("span",{staticClass:"header"},[e._v("> "+e._s(o.header.title))]):e._e()])])})),0):e._e()],1)}),[],!1,null,null,null);t.default=c.exports},416:function(e,t,o){"use strict";o.r(t);var n=o(61),a=o(390),r=o.n(a),s=o(381),i=o(357),c={name:"UserSettings",directives:{"click-outside":r.a},components:{ModePicker:s.default,RecoIcon:n.b,ModuleTransition:n.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(i.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(i.a)(e)})),Object(i.a)(e))},methods:{hideMenu(){this.showMenu=!1}}},l=(o(391),o(2)),u=Object(l.a)(c,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-color"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker")],1)])],1):e._e()}),[],!1,null,null,null);t.default=u.exports},423:function(e,t,o){"use strict";o.r(t);o(389);var n=o(2),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.default=a.exports},425:function(e,t,o){"use strict";o(400)},517:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(414),r=o(415),s=o(423),i=o(379),c=o(416),l=o(325),u=Object(n.c)({components:{SidebarButton:s.default,NavLinks:i.default,SearchBox:r.default,AlgoliaSearchBox:a.default,Mode:c.default},setup(e,t){const o=Object(l.a)(),a=Object(n.h)(null),r=Object(n.a)(()=>o.$themeLocaleConfig.algolia||o.$themeConfig.algolia||{}),s=Object(n.a)(()=>r.value&&r.value.apiKey&&r.value.indexName);function i(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}return Object(n.e)(()=>{const e=parseInt(i(o.$el,"paddingLeft"))+parseInt(i(o.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?a.value=null:a.value=o.$el.offsetWidth-e-(o.$refs.siteName&&o.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1)}),{linksWrapMaxWidth:a,algolia:r,isAlgoliaSearch:s,css:i}}}),d=(o(425),o(2)),f=Object(d.a)(u,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase(e.$themeConfig.logo),alt:e.$siteTitle}}):e._e(),e._v(" "),e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e()]),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("Mode"),e._v(" "),e.isAlgoliaSearch?t("AlgoliaSearchBox",{attrs:{options:e.algolia}}):!1!==e.$themeConfig.search&&!1!==e.$frontmatter.search?t("SearchBox"):e._e(),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);t.default=f.exports}}]);