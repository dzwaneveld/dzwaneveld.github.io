(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{303:function(t,a,e){},329:function(t,a,e){"use strict";var i=e(303);e.n(i).a},362:function(t,a,e){"use strict";var i={name:"Home",components:{NavLink:e(318).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(e(329),e(43)),s=Object(n.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,i){return e("div",{key:i,staticClass:"feature"},[e("img",{attrs:{src:t.$withBase(a.image)}}),t._v(" "),e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))]),t._v(" "),e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:{link:a.actionLink,text:a.actionText}}})],1)])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);a.a=s.exports}}]);