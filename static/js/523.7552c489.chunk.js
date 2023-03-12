"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[523],{8523:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i,o,s,c,u,p,l=t(5861),d=t(9439),f=t(4687),h=t.n(f),x=t(2791),v=t(7689),m=t(7596),g=t(9086),w=t(5500),y=t(4373),Z=t(168),j=t(1087),b=t(7402),_=(0,b.Z)(j.rU)(r||(r=(0,Z.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 12px;\n  height: 30px;\n  width: 130px;\n  text-decoration: none;\n  font-size: 20px;\n  font-weight: 400;\n  text-align: center;\n  background-color: navy;\n  color: yellow;\n  border-radius: 10px;\n  transition: color 250ms linear, background-color 250ms linear;\n  &:hover,\n  &:focus-visible {\n    background-color: yellow;\n    color: navy;\n  }\n"]))),k=b.Z.main(a||(a=(0,Z.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]))),C=b.Z.div(i||(i=(0,Z.Z)(["\n  max-width: 320px;\n  margin: 0 auto;\n  padding: 0 20px;\n\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 1280px;\n  }\n"]))),P=b.Z.div(o||(o=(0,Z.Z)(["\n  display: flex;\n  gap: 40px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n"]))),S=b.Z.img(s||(s=(0,Z.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  @media screen and (min-width: 768px) {\n    width: 250px;\n  }\n  @media screen and (min-width: 1280px) {\n    width: 300px;\n  }\n"]))),H=b.Z.nav(c||(c=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n"]))),I=b.Z.div(u||(u=(0,Z.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),M=b.Z.p(p||(p=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 30px;\n  background-color: navy;\n  color: yellow;\n  font-size: 18px;\n  border-radius: 5px;\n"]))),R=t(184);var T=function(n){var e,t,r,a=n.movie,i=a.title,o=a.poster_path,s=a.overview,c=a.genres,u=a.vote_average,p=a.release_date,l=(0,v.TH)(),d=l.state,f=l.pathname,h=(0,w.M)(o),x=u.toFixed(1),m=p.slice(0,4);return(0,R.jsx)(k,{children:(0,R.jsxs)(C,{children:[(0,R.jsxs)(_,{to:null!==(e=null===d||void 0===d?void 0:d.from)&&void 0!==e?e:"/",children:[(0,R.jsx)(y.PjY,{}),"Go back"]}),(0,R.jsxs)(P,{children:[(0,R.jsx)(S,{src:h,alt:i}),(0,R.jsxs)("div",{children:[(0,R.jsxs)(I,{children:[(0,R.jsxs)("h1",{children:[i," (",p?m:"xxxx",")"]}),0!==u&&(0,R.jsx)(M,{children:x})]}),(0,R.jsx)("h2",{children:"Overview"}),s?(0,R.jsx)("p",{children:s}):"Information is not available",(0,R.jsx)("h2",{children:"Genres"}),c?(0,R.jsx)("p",{children:c}):"Information is not available"]})]}),(0,R.jsxs)(H,{children:[(0,R.jsx)(_,{to:f.includes("cast")?"":"cast",state:{from:null!==(t=null===d||void 0===d?void 0:d.from)&&void 0!==t?t:"/"},children:f.includes("cast")?"Hide Cast":"Show Cast"}),(0,R.jsx)(_,{to:f.includes("reviews")?"":"reviews",state:{from:null!==(r=null===d||void 0===d?void 0:d.from)&&void 0!==r?r:"/"},children:f.includes("reviews")?"Hide Reviews":"Show Reviews"})]}),(0,R.jsx)(v.j3,{})]})})},z=t(8349);var A=function(){var n=(0,v.UO)().movieId,e=(0,x.useState)([]),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,x.useState)("idle"),o=(0,d.Z)(i,2),s=o[0],c=o[1],u=(0,x.useState)(""),p=(0,d.Z)(u,2),f=p[0],w=p[1];return(0,x.useEffect)((function(){if(n){var e=new AbortController;return function(){t.apply(this,arguments)}(),function(){e.abort()}}function t(){return(t=(0,l.Z)(h().mark((function t(){var r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c("pending"),t.prev=1,t.next=4,(0,g.TP)(n,e);case 4:r=t.sent,a(r),c("resolved"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),w(t.t0.message),c("rejected");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}}),[n]),(0,x.useEffect)((function(){"canceled"!==f&&f&&(m.Am.error(f),w(""))}),[f]),(0,R.jsxs)(R.Fragment,{children:["pending"===s&&(0,R.jsx)(z.Z,{}),"resolved"===s&&(0,R.jsx)(T,{movie:r})]})}},9086:function(n,e,t){t.d(e,{Df:function(){return u},M1:function(){return f},TP:function(){return l},Wf:function(){return m},tx:function(){return x}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),s="1196368753ba671380e452b9a1020481",c="https://api.themoviedb.rg/3/";function u(n,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"trending/movie/day?api_key=").concat(s,"&page=").concat(e),{signal:t.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),n.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e,t){var r,a,u,p,l,d,f,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(e,"?api_key=").concat(s),{signal:t.signal});case 2:return r=n.sent,a=r.data,u=a.title,p=a.poster_path,l=a.overview,d=a.genres,f=a.vote_average,h=a.release_date,n.abrupt("return",{title:u,poster_path:p,overview:l,genres:d.map((function(n){return n.name})).join(", "),vote_average:f,release_date:h});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(e,"/credits?api_key=").concat(s),{signal:t.signal});case 2:return r=n.sent,a=r.data.cast.map((function(n){return{id:n.id,name:n.name,profile_path:n.profile_path,character:n.character}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(e,"/reviews?api_key=").concat(s),{signal:t.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return g.apply(this,arguments)}function g(){return g=(0,r.Z)(i().mark((function n(e){var t,r,a,u,p=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2?p[2]:void 0,n.next=4,o.Z.get("".concat(c,"search/movie?api_key=").concat(s,"&query=").concat(e,"&page=").concat(t),{signal:r.signal});case 4:return a=n.sent,u=a.data.results.map((function(n){return{id:n.id,title:n.title,poster_path:n.poster_path}})),n.abrupt("return",{movies:u,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return n.stop()}}),n)}))),g.apply(this,arguments)}},5500:function(n,e,t){t.d(e,{M:function(){return a}});var r=t(5652);function a(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):r}},5652:function(n,e,t){n.exports=t.p+"static/media/no-image.48037438551d1abf8f13.jpg"}}]);
//# sourceMappingURL=523.7552c489.chunk.js.map