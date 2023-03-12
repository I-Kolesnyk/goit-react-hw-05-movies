"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[349,273],{7706:function(n,t,e){e.d(t,{Z:function(){return v}});var r,a,i,o=e(1087),c=e(7689),s=e(5500),u=e(168),p=e(7402),l=p.Z.li(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  height: auto;\n  width: 240px;\n  background-color: navy;\n  text-align: center;\n  border-radius: 10px;\n  transform: scale(1);\n  transition: transform 250ms linear;\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),d=p.Z.img(a||(a=(0,u.Z)(["\n  display: block;\n  height: 360px;\n  width: 100%;\n  border-radius: 10px;\n"]))),f=p.Z.p(i||(i=(0,u.Z)(["\n  margin: 0;\n  padding: 10px;\n  color: yellow;\n  font-size: 18px;\n"]))),g=e(184);var x,h=function(n){var t=n.movie,e=t.id,r=t.title,a=t.poster_path,i=(0,c.TH)(),u=(0,s.M)(a);return(0,g.jsx)(l,{children:(0,g.jsxs)(o.rU,{to:"/movies/".concat(e),state:{from:i},children:[(0,g.jsx)(d,{src:u,alt:r}),(0,g.jsx)(f,{children:r})]})})},m=p.Z.ul(x||(x=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 0;\n"])));var v=function(n){var t=n.movies;return(0,g.jsx)(m,{children:t.map((function(n){return(0,g.jsx)(h,{movie:n},n.id)}))})}},9593:function(n,t,e){e.d(t,{Z:function(){return l}});var r,a=e(168),i=e(7402),o=e(6048),c=e.n(o),s=(0,i.Z)(c())(r||(r=(0,a.Z)(["\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n  list-style-type: none;\n  padding: 0;\n\n  li a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 40px;\n    width: 40px;\n    border-radius: 7px;\n    border: navy 2px solid;\n    text-decoration: none;\n    font-size: 14px;\n    color: navy;\n    cursor: pointer;\n  }\n   li.active a {\n    background-color: navy;\n    border-color: transparent;\n    color: yellow;\n  }\n  li.disabled a {\n    color: grey;\n  }\n  li.disable,\n  li.disabled a {\n    cursor: default;\n  }\n"]))),u=e(860),p=e(184);var l=function(n){var t=n.page,e=n.totalPages,r=n.changePage;return(0,p.jsx)(s,{previousLabel:(0,p.jsx)(u.UFP,{}),nextLabel:(0,p.jsx)(u.f9l,{}),breakLabel:"...",pageCount:e,pageRangeDisplayed:3,marginPagesDisplayed:2,onPageChange:function(n){r(n.selected+1)},activeClassName:"active",hrefBuilder:function(n,t){return n>=1&&n<=t?"/page/".concat(n):"#"},forcePage:t-1})}},349:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,i=e(5861),o=e(9439),c=e(4687),s=e.n(c),u=e(2791),p=e(7689),l=e(9086),d=e(7706),f=e(9593),g=e(8349),x=e(2273),h=e(168),m=e(7402),v=m.Z.h1(r||(r=(0,h.Z)(["\n    color: navy;\n"]))),y=m.Z.div(a||(a=(0,h.Z)(["\nmax-width: 320px;\n  margin: 0 auto;\n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 1280px;\n  }\n"]))),b=e(184);var w=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,u.useState)("idle"),c=(0,o.Z)(a,2),h=c[0],m=c[1],w=(0,u.useState)(1),Z=(0,o.Z)(w,2),j=Z[0],_=Z[1],k=(0,u.useState)(0),P=(0,o.Z)(k,2),C=P[0],S=P[1],T=(0,u.useState)(""),D=(0,o.Z)(T,2),L=D[0],E=D[1],M=(0,p.s0)(),N=(0,p.UO)();return(0,u.useEffect)((function(){var n=new AbortController;function t(){return(t=(0,i.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m("pending"),t.prev=1,t.next=4,(0,l.Df)(j,n);case 4:e=t.sent,r(e.movies),S(e.totalPages),m("resolved"),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),E(t.t0.message),m("rejected");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.abort()}}),[j]),(0,u.useEffect)((function(){N.page?_(N.page):_(1)}),[N.page]),(0,b.jsx)("main",{children:(0,b.jsxs)(y,{children:["pending"===h&&(0,b.jsx)(g.Z,{}),"resolved"===h&&(0,b.jsx)(v,{children:"Trending today"}),"resolved"===h&&(0,b.jsx)(d.Z,{movies:e}),"resolved"===h&&(0,b.jsx)(f.Z,{page:j,totalPages:C,changePage:function(n){M("/".concat(n)),_(n)}}),"rejected"===h&&"Network Error"===L&&(0,b.jsx)(x.default,{})]})})}},2273:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(1087),a=e(1683),i=e(184);var o=function(){return(0,i.jsxs)("main",{children:[(0,i.jsx)("p",{children:"There are some problems! Try again later."}),(0,i.jsx)("img",{scr:a,alt:"404 page not found"}),(0,i.jsx)(r.OL,{to:"/",text:"Go Home"})]})}},9086:function(n,t,e){e.d(t,{Df:function(){return u},M1:function(){return f},TP:function(){return l},Wf:function(){return m},tx:function(){return x}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1243),c="1196368753ba671380e452b9a1020481",s="https://api.themoviedb.rg/3/";function u(n,t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"trending/movie/day?api_key=").concat(c,"&page=").concat(t),{signal:e.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),n.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(t,e){var r,a,u,p,l,d,f,g;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data,u=a.title,p=a.poster_path,l=a.overview,d=a.genres,f=a.vote_average,g=a.release_date,n.abrupt("return",{title:u,poster_path:p,overview:l,genres:d.map((function(n){return n.name})).join(", "),vote_average:f,release_date:g});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/credits?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data.cast.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t,e){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(c),{signal:e.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return v=(0,r.Z)(i().mark((function n(t){var e,r,a,u,p=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2?p[2]:void 0,n.next=4,o.Z.get("".concat(s,"search/movie?api_key=").concat(c,"&query=").concat(t,"&page=").concat(e),{signal:r.signal});case 4:return a=n.sent,u=a.data.results.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),n.abrupt("return",{movies:u,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return n.stop()}}),n)}))),v.apply(this,arguments)}},5500:function(n,t,e){e.d(t,{M:function(){return a}});var r=e(5652);function a(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):r}},5652:function(n,t,e){n.exports=e.p+"static/media/no-image.48037438551d1abf8f13.jpg"},1683:function(n,t,e){n.exports=e.p+"static/media/pageNotFound.40e01b8b2b041b3dcb6f.jpg"}}]);
//# sourceMappingURL=349.9f5e77e0.chunk.js.map