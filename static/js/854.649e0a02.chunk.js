"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[854],{4854:function(t,n,e){e.r(n),e.d(n,{default:function(){return A}});var r,a,c,i,o,s=e(5861),u=e(9439),p=e(4687),l=e.n(p),d=e(2791),f=e(7689),h=e(7596),g=e(9086),v=e(8349),x=e(5500),m=e(168),w=e(7402),Z=w.Z.li(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  list-style: none;\n  height: auto;\n  width: calc((100% - 20px) / 2);\n  border-radius: 10px;\n  background-color: navy;\n  @media screen and (min-width: 768px) {\n    width: calc((100% - 60px) / 4);\n  }\n  @media screen and (min-width: 1280px) {\n    width: calc((100% - 100px) / 6);\n  }\n"]))),y=w.Z.img(a||(a=(0,m.Z)(["\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: 10px;\n"]))),_=w.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 10px;\n"]))),b=w.Z.p(i||(i=(0,m.Z)(["\n  margin: 0;\n  color: yellow;\n  font-size: 16px;\n"]))),k=w.Z.span(o||(o=(0,m.Z)(["\n    font-weight: 700;\n"]))),j=e(184);var C,M=function(t){var n=t.actor,e=n.name,r=n.profile_path,a=n.character,c=(0,x.M)(r);return(0,j.jsxs)(Z,{children:[(0,j.jsx)(y,{src:c,alt:e}),(0,j.jsxs)(_,{children:[(0,j.jsxs)(b,{children:[(0,j.jsx)(k,{children:"Name:"})," ",e]}),(0,j.jsxs)(b,{children:[(0,j.jsx)(k,{children:"Character:"})," ",a]})]})]})},P=w.Z.ul(C||(C=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 30px;\n  padding: 0;\n"])));var S=function(t){var n=t.actors;return(0,j.jsx)(P,{children:n.map((function(t){return(0,j.jsx)(M,{actor:t},t.id)}))})};var A=function(){var t=(0,f.UO)().movieId,n=(0,d.useState)([]),e=(0,u.Z)(n,2),r=e[0],a=e[1],c=(0,d.useState)("idle"),i=(0,u.Z)(c,2),o=i[0],p=i[1],x=(0,d.useState)(""),m=(0,u.Z)(x,2),w=m[0],Z=m[1];return(0,d.useEffect)((function(){if(t){var n=new AbortController;return function(){e.apply(this,arguments)}(t,n),function(){n.abort()}}function e(){return(e=(0,s.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p("pending"),e.prev=1,e.next=4,(0,g.M1)(t,n);case 4:r=e.sent,a(r),p("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),Z(e.t0.message),p("rejected");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}}),[t]),(0,d.useEffect)((function(){"canceled"!==w&&w&&(h.Am.error(w),Z(""))}),[w]),(0,j.jsxs)(j.Fragment,{children:["pending"===o&&(0,j.jsx)(v.Z,{}),"resolved"===o&&0!==r.length&&(0,j.jsx)(S,{actors:r})]})}},9086:function(t,n,e){e.d(n,{Df:function(){return u},M1:function(){return f},TP:function(){return l},Wf:function(){return x},tx:function(){return g}});var r=e(5861),a=e(4687),c=e.n(a),i=e(1243),o="1196368753ba671380e452b9a1020481",s="https://api.themoviedb.org/3/";function u(t,n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o,"&page=").concat(n),{signal:e.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n,e){var r,a,u,p,l,d,f,h;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data,u=a.title,p=a.poster_path,l=a.overview,d=a.genres,f=a.vote_average,h=a.release_date,t.abrupt("return",{title:u,poster_path:p,overview:l,genres:d.map((function(t){return t.name})).join(", "),vote_average:f,release_date:h});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/credits?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data.cast.map((function(t){return{id:t.id,name:t.name,profile_path:t.profile_path,character:t.character}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/movie/").concat(n,"/reviews?api_key=").concat(o),{signal:e.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return m=(0,r.Z)(c().mark((function t(n){var e,r,a,u,p=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2?p[2]:void 0,t.next=4,i.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(n,"&page=").concat(e),{signal:r.signal});case 4:return a=t.sent,u=a.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",{movies:u,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return t.stop()}}),t)}))),m.apply(this,arguments)}},5500:function(t,n,e){e.d(n,{M:function(){return a}});var r=e(5652);function a(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):r}},5652:function(t,n,e){t.exports=e.p+"static/media/no-image.48037438551d1abf8f13.jpg"}}]);
//# sourceMappingURL=854.649e0a02.chunk.js.map