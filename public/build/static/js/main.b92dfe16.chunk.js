(this["webpackJsonprecipe-finder"]=this["webpackJsonprecipe-finder"]||[]).push([[0],{10:function(e,c,n){},12:function(e,c,n){"use strict";n.r(c);var t=n(1),r=n.n(t),i=n(4),a=n.n(i),s=(n(9),n(3)),o=(n(10),n(0));var l=function(){var e=Object(t.useRef)(null),c=Object(t.useState)([]),n=Object(s.a)(c,2),r=n[0],i=n[1],a=Object(t.useState)(!1),l=Object(s.a)(a,2),j=l[0],u=l[1],p=function(e){u(!0);var c="search?q=".concat(e,"&app_id=").concat("3ab69421","&app_key=").concat("4e4424bdcfbc0f52c47ae286eab753c3");fetch(c).then((function(e){return e.json()})).then((function(e){console.log(e),console.log(e.hits),i(e.hits),u(!1)})).catch((function(e){console.log("error",e),u(!1)}))};return Object(t.useEffect)((function(){p("chicken")}),[]),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("div",{class:"InputWrapper",children:[Object(o.jsx)("input",{ref:e,type:"text",placeholder:"Search for a recipe"}),Object(o.jsx)("button",{onClick:function(){p(e.current.value),e.current.value=""},children:"Search"})]}),j&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"Wrapper",children:r.map((function(e){return Object(o.jsxs)("div",{className:"Ingredient",children:[Object(o.jsx)("span",{children:e.recipe.label}),Object(o.jsx)("img",{src:e.recipe.image}),Object(o.jsx)("div",{className:"Steps",children:e.recipe.ingredientLines.map((function(e,c){return Object(o.jsx)("p",{children:e},c)}))})]},e.recipe.label)}))})]})})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,i=c.getLCP,a=c.getTTFB;n(e),t(e),r(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),j()},9:function(e,c,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.b92dfe16.chunk.js.map