"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[180],{7706:function(n,e,t){t.d(e,{Z:function(){return x}});var r,a,i,o=t(1087),s=t(7689),c=t(168),u=t(7402),p=u.Z.li(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  list-style: none;\n  height: auto;\n  width: 240px;\n  background-color: navy;\n  text-align: center;\n  border-radius: 10px;\n  transform: scale(1);\n  transition: transform 250ms linear;\n  &:hover {\n    transform: scale(1.04);\n  }\n"]))),l=u.Z.img(a||(a=(0,c.Z)(["\n  display: block;\n  height: 360px;\n  width: 100%;\n  border-radius: 10px;\n"]))),d=u.Z.p(i||(i=(0,c.Z)(["\n  margin: 0;\n  padding: 10px;\n  color: yellow;\n  font-size: 18px;\n"]))),f=t(184);var g,h=function(n){var e=n.movie,t=e.id,r=e.title,a=e.posterPath,i=(0,s.TH)();return(0,f.jsx)(p,{children:(0,f.jsxs)(o.rU,{to:"/movies/".concat(t),state:{from:i},children:[(0,f.jsx)(l,{src:a,alt:r}),(0,f.jsx)(d,{children:r})]})})},m=u.Z.ul(g||(g=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 15px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 0;\n"])));var x=function(n){var e=n.movies;return(0,f.jsx)(m,{children:e.map((function(n){return(0,f.jsx)(h,{movie:n},n.id)}))})}},9593:function(n,e,t){t.d(e,{Z:function(){return l}});var r,a=t(168),i=t(7402),o=t(6048),s=t.n(o),c=(0,i.Z)(s())(r||(r=(0,a.Z)(["\n  margin-top: 50px;\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  gap: 10px;\n  list-style-type: none;\n  padding: 0;\n\n  li a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 40px;\n    width: 40px;\n    border-radius: 7px;\n    border: navy 2px solid;\n    text-decoration: none;\n    font-size: 14px;\n    color: navy;\n    cursor: pointer;\n  }\n   li.active a {\n    background-color: navy;\n    border-color: transparent;\n    color: yellow;\n  }\n  li.disabled a {\n    color: grey;\n  }\n  li.disable,\n  li.disabled a {\n    cursor: default;\n  }\n"]))),u=t(860),p=t(184);var l=function(n){var e=n.page,t=n.totalPages,r=n.changePage;return(0,p.jsx)(c,{previousLabel:(0,p.jsx)(u.UFP,{}),nextLabel:(0,p.jsx)(u.f9l,{}),breakLabel:"...",pageCount:t,pageRangeDisplayed:3,marginPagesDisplayed:2,onPageChange:function(n){r(n.selected+1)},activeClassName:"active",hrefBuilder:function(n,e){return n>=1&&n<=e?"/page/".concat(n):"#"},forcePage:e-1})}},2180:function(n,e,t){t.r(e),t.d(e,{default:function(){return D}});var r,a,i,o,s=t(5861),c=t(9439),u=t(4687),p=t.n(u),l=t(2791),d=t(1087),f=t(7596),g=t(1293),h=t(5705),m=t(168),x=t(7402),v=t(9126),y=x.Z.form(r||(r=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  border: 3px solid navy;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 10px;\n  border-radius: 10px;\n"]))),b=x.Z.input(a||(a=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 50px;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-radius: 10px;\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),Z=x.Z.button(i||(i=(0,m.Z)(["\n  width: 60px;\n  height: 50px;\n  background-color: navy;\n  border-radius: 10px;\n  cursor: pointer;\n  border: 0;\n  transition: background-color 250ms linear;\n  :hover,\n  :focus-visible {\n    background-color: yellow;\n  }\n"]))),w=(0,x.Z)(v.dVI)(o||(o=(0,m.Z)(["\n  width: 30px;\n  height: 30px;\n  fill: yellow;\n  transition: fill 250ms linear;\n  :hover,\n  :focus-visible {\n    fill: navy;\n  }\n"]))),k=t(184);var j,P,_=function(n){var e=n.onSubmit,t=(0,h.TA)({initialValues:{value:""},onSubmit:function(n){e(n.value),t.resetForm()}}),r=t.handleSubmit,a=t.handleChange,i=t.values;return(0,k.jsxs)(y,{onSubmit:r,children:[(0,k.jsx)(b,{type:"text",name:"value",onChange:a,value:i.value,placeholder:"Search movies"}),(0,k.jsx)(Z,{type:"submit",children:(0,k.jsx)(w,{})})]})},S=t(7706),q=t(9593),C=t(8349),z=x.Z.div(j||(j=(0,m.Z)(["\n  max-width: 320px;  \n  margin: 0 auto;\n  padding: 0 20px;\n  @media screen and (min-width: 768px) {\n    max-width: 768px;\n    padding: 0 32px;\n  }\n  @media screen and (min-width: 1280px) {\n    max-width: 1280px;\n  }\n"]))),A=x.Z.main(P||(P=(0,m.Z)(["\n  flex-grow: 1;\n"])));var D=function(){var n=(0,d.lr)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,l.useState)(t.get("query")),i=(0,c.Z)(a,2),o=i[0],u=i[1],h=(0,l.useState)([]),m=(0,c.Z)(h,2),x=m[0],v=m[1],y=(0,l.useState)("idle"),b=(0,c.Z)(y,2),Z=b[0],w=b[1],j=(0,l.useState)(t.get("page")),P=(0,c.Z)(j,2),D=P[0],F=P[1],L=(0,l.useState)(0),R=(0,c.Z)(L,2),T=R[0],E=R[1],U=(0,l.useState)({type:"",message:""}),V=(0,c.Z)(U,2),W=V[0],B=V[1];return(0,l.useEffect)((function(){if(o){var n=new AbortController;return function(){e.apply(this,arguments)}(),function(){n.abort()}}function e(){return(e=(0,s.Z)(p().mark((function e(){var t,r,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w("pending"),e.prev=1,e.next=4,(0,g.Wf)(o,D,n);case 4:t=e.sent,r=t.movies,a=t.totalPages,0===t.totalResults&&(B({type:"error",message:"Sorry, there are no movies matching your search query. Please try again."}),v([]),u(null)),v(r),E(a),w("resolved"),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),B({type:"error",message:e.t0.message}),w("rejected");case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}}),[D,o]),(0,l.useEffect)((function(){if(W){!function(){var n=W.type,e=W.message;"canceled"!==W.message&&("info"===n&&(f.Am.info(e),B({type:"",message:""})),"error"===n&&(f.Am.error(e),B({type:"",message:""})))}()}}),[W]),(0,k.jsx)(A,{children:(0,k.jsxs)(z,{children:[(0,k.jsx)(_,{onSubmit:function(n){n?n!==o?(u(n),F(1),r({query:n,page:1}),B({type:"",message:""}),w("idle")):B({type:"info",message:"You are seeing the images by this query. Please, change your query."}):B({type:"info",message:"Please enter your search query!"})}}),"pending"===Z&&(0,k.jsx)(C.Z,{}),"resolved"===Z&&(0,k.jsx)(S.Z,{movies:x}),"resolved"===Z&&T>1&&(0,k.jsx)(q.Z,{page:D,totalPages:T,changePage:function(n){r({query:o,page:n}),F(n)},query:o})]})})}},1293:function(n,e,t){t.d(e,{M1:function(){return h},TP:function(){return f},tx:function(){return x},Wf:function(){return y},Df:function(){return l}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),s=t(5652);function c(n){return n?"https://image.tmdb.org/t/p/w500/".concat(n):s}var u="1196368753ba671380e452b9a1020481",p="https://api.themoviedb.org/3/";function l(n,e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"trending/movie/day?api_key=").concat(u,"&page=").concat(e),{signal:t.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,title:n.title,posterPath:c(n.poster_path)}})),n.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(e,t){var r,a,s,l,d,f,g,h;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(e,"?api_key=").concat(u),{signal:t.signal});case 2:return r=n.sent,a=r.data,s=a.title,l=a.poster_path,d=a.overview,f=a.genres,g=a.vote_average,h=a.release_date,n.abrupt("return",{title:s,posterPath:c(l),overview:d,genres:f.map((function(n){return n.name})).join(", "),vote:g.toFixed(1),year:h.slice(0,4)});case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(e,"/credits?api_key=").concat(u),{signal:t.signal});case 2:return r=n.sent,a=r.data.cast.map((function(n){var e=n.id,t=n.name,r=n.profile_path,a=n.character;return{id:e,name:t,profilePath:c(r),character:a}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n,e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e,t){var r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(p,"/movie/").concat(e,"/reviews?api_key=").concat(u),{signal:t.signal});case 2:return r=n.sent,a=r.data.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return b.apply(this,arguments)}function b(){return b=(0,r.Z)(i().mark((function n(e){var t,r,a,s,l=arguments;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=l.length>1&&void 0!==l[1]?l[1]:1,r=l.length>2?l[2]:void 0,n.next=4,o.Z.get("".concat(p,"search/movie?api_key=").concat(u,"&query=").concat(e,"&page=").concat(t),{signal:r.signal});case 4:return a=n.sent,s=a.data.results.map((function(n){return{id:n.id,title:n.title,posterPath:c(n.poster_path)}})),n.abrupt("return",{movies:s,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return n.stop()}}),n)}))),b.apply(this,arguments)}},5652:function(n,e,t){n.exports=t.p+"static/media/no-image.48037438551d1abf8f13.jpg"}}]);
//# sourceMappingURL=180.d10da429.chunk.js.map