(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{c5d2:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("q-page",{},e._l(e.categories,(function(t){return r("q-card",{key:t.id,attrs:{square:"",flat:""}},[r("q-img",{attrs:{src:t.relative_image_path,basic:""},on:{click:function(r){return e.getCategoryDishes(t)}}},[r("div",{staticClass:"absolute-bottom text-h5 text-center"},[e._v("\n        "+e._s(t.title)+"\n      ")])])],1)})),1)},a=[],c=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("967e")),s=r.n(c),o=(r("96cf"),r("fa84")),i=r.n(o),u=r("c47a"),g=r.n(u),f=r("2f62");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){g()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={name:"Categories",components:{},computed:b({},Object(f["c"])("categories",["categories","category"])),methods:b(b(b({},Object(f["b"])("categories",["getCategories","setCategory"])),Object(f["b"])("dishes",["getDishes","setDishes"])),{},{getCategoryDishes:function(e){var t=this;return i()(s.a.mark((function r(){return s.a.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t.category.id&&t.category.id===e.id){r.next=5;break}return t.setCategory(e),t.setDishes([]),r.next=5,t.getDishes({category:t.category.id});case 5:return r.next=7,t.$router.push({path:"dishes"});case 7:case"end":return r.stop()}}),r)})))()}}),mounted:function(){var e=this;return i()(s.a.mark((function t(){return s.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.categories.length){t.next=3;break}return t.next=3,e.getCategories();case 3:case"end":return t.stop()}}),t)})))()}},d=h,l=r("2877"),y=r("eebe"),O=r.n(y),w=r("9989"),m=r("f09f"),j=r("068f"),v=Object(l["a"])(d,n,a,!1,null,"b05bd39c",null);t["default"]=v.exports;O()(v,"components",{QPage:w["a"],QCard:m["a"],QImg:j["a"]})}}]);