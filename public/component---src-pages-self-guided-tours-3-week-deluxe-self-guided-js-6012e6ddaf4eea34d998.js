(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"01Tx":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("q/TI"),c=a("zTJd"),i=r.a.selfGuided[3];t.default=function(){return l.a.createElement(c.a,{tour:i})}},RF6M:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),r=a("TSYQ"),c=a.n(r);function i(e){var t=e.tours,a=Object(n.useState)(t[0].title),r=a[0],c=a[1],i=t.find((function(e){return e.title===r}));return l.a.createElement("div",{className:"TourPreview"},l.a.createElement("div",{className:"is-flex"},t.length>1&&t.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement(m,Object.assign({},e,{active:r===e.title,showTourPreview:function(){return c(e.title)}})))}))),l.a.createElement("div",{className:"TourPreview__main-area columns is-vcentered"},l.a.createElement("div",{className:"column is-half has-text-centered"},l.a.createElement("img",{src:i.img,alt:""})),l.a.createElement("div",{className:"column is-half"},l.a.createElement("h2",null,i.title),l.a.createElement("h5",null,i.subtitle),l.a.createElement("h5",null,i.date),l.a.createElement("h5",null,i.route),l.a.createElement("br",null),l.a.createElement("p",null,i.brief))))}var m=function(e){var t=e.title,a=e.img,n=e.showTourPreview,r=e.active;return l.a.createElement("div",{onClick:function(){return n(t)},className:c()({"is-active":r},"TourSelector")},l.a.createElement("img",{src:a,alt:""}))}},zTJd:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("7oih"),c=a("RF6M"),i=new Intl.NumberFormat("en-US",{style:"currency",currency:"NZD",minimumFractionDigits:0});t.a=function(e){var t=e.tour;return l.a.createElement(r.a,null,l.a.createElement("main",{className:"container mt-4"},l.a.createElement("h1",{className:"has-text-centered"},t.title),l.a.createElement("br",null),l.a.createElement("div",{className:"mx-4"},l.a.createElement(c.a,{tours:[t]})),l.a.createElement("section",{className:"section"},l.a.createElement("h3",null,"Price"),l.a.createElement("br",null),l.a.createElement("div",{className:"columns"},t.price.packages.map((function(e){return l.a.createElement("div",{className:"column is-one-quarter"},l.a.createElement("div",{className:"card has-text-centered py-4",style:{height:"100%"}},l.a.createElement("div",null,e.type),l.a.createElement("div",{className:"is-size-3"},i.format(e.price)),e.similarModels&&l.a.createElement("div",null,l.a.createElement("div",null,"Or:"),e.similarModels.map((function(e){return l.a.createElement("div",null,e)})))))}))),t.price.extraPrices&&l.a.createElement(n.Fragment,null,l.a.createElement("h3",null,"Upgrade"),t.price.extraPrices.map((function(e){return l.a.createElement("div",null,e.type,": ",i.format(e.price))})),l.a.createElement("br",null)),t.price.tips&&l.a.createElement(l.a.Fragment,null,t.price.tips.map((function(e){return l.a.createElement("p",{className:"is-size-7"},"*",e)})))),l.a.createElement("section",{className:"section columns is-vcentered"},l.a.createElement("div",{className:"column mx-6"},l.a.createElement("div",{className:"columns"},t.plans.map((function(e){return l.a.createElement("div",{className:"column"},l.a.createElement("div",{className:"is-size-4"},e.title),l.a.createElement("br",null),e.locations.map((function(e){return l.a.createElement("div",null,e)})))}))),l.a.createElement("p",null,t.description)),l.a.createElement("div",{className:"column"},l.a.createElement("img",{src:t.mapImg,alt:""})))))}}}]);
//# sourceMappingURL=component---src-pages-self-guided-tours-3-week-deluxe-self-guided-js-6012e6ddaf4eea34d998.js.map