"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[877],{6877:function(t,e,n){n.r(e),n.d(e,{default:function(){return P}});var r,a,i,c=n(5861),o=n(9439),s=n(4687),u=n.n(s),p=n(2791),l=n(7689),f=n(7596),d=n(9086),h=n(8349),v=n(168),g=n(7402),m=g.Z.ul(r||(r=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  gap: 15px;\n  padding: 0;\n"]))),x=g.Z.li(a||(a=(0,v.Z)(["\n  padding: 15px;\n  list-style: none;\n  border: 3px solid navy;\n  border-radius: 10px;\n"]))),Z=g.Z.h2(i||(i=(0,v.Z)(["\n    color: navy;\n"]))),_=n(184);var w,y,k=function(t){var e=t.reviews;return(0,_.jsx)(m,{children:e.map((function(t){var e=t.id,n=t.author,r=t.content;return(0,_.jsxs)(x,{children:[(0,_.jsx)(Z,{children:n}),(0,_.jsx)("p",{children:r})]},e)}))})},b=g.Z.div(w||(w=(0,v.Z)(["\n  margin-top: 30px;\n  text-align: center;\n"]))),j=g.Z.p(y||(y=(0,v.Z)(["\n    font-size: 20px;\n"])));var C=function(){return(0,_.jsx)(b,{children:(0,_.jsx)(j,{children:"There are no reviews for this movie."})})};var P=function(){var t=(0,l.UO)().movieId,e=(0,p.useState)([]),n=(0,o.Z)(e,2),r=n[0],a=n[1],i=(0,p.useState)("idle"),s=(0,o.Z)(i,2),v=s[0],g=s[1],m=(0,p.useState)(""),x=(0,o.Z)(m,2),Z=x[0],w=x[1];return(0,p.useEffect)((function(){if(t){var e=new AbortController;return function(){n.apply(this,arguments)}(t,e),function(){e.abort()}}function n(){return(n=(0,c.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g("pending"),n.prev=1,n.next=4,(0,d.tx)(t,e);case 4:r=n.sent,a(r),g("resolved"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),w(n.t0.message),g("rejected");case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}}),[t]),(0,p.useEffect)((function(){"canceled"!==Z&&Z&&(f.Am.error(Z),w(""))}),[Z]),(0,_.jsxs)(_.Fragment,{children:["pending"===v&&(0,_.jsx)(h.Z,{}),"resolved"===v&&0!==r.length?(0,_.jsx)(k,{reviews:r}):(0,_.jsx)(C,{})]})}},9086:function(t,e,n){n.d(e,{Df:function(){return u},M1:function(){return d},TP:function(){return l},Wf:function(){return m},tx:function(){return v}});var r=n(5861),a=n(4687),i=n.n(a),c=n(1243),o="1196368753ba671380e452b9a1020481",s="https://api.themoviedb.org/3/";function u(t,e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"trending/movie/day?api_key=").concat(o,"&page=").concat(e),{signal:n.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",{movies:a,totalPages:r.data.total_pages});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function t(e,n){var r,a,u,p,l,f,d,h;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(o),{signal:n.signal});case 2:return r=t.sent,a=r.data,u=a.title,p=a.poster_path,l=a.overview,f=a.genres,d=a.vote_average,h=a.release_date,t.abrupt("return",{title:u,poster_path:p,overview:l,genres:f.map((function(t){return t.name})).join(", "),vote_average:d,release_date:h});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(o),{signal:n.signal});case 2:return r=t.sent,a=r.data.cast.map((function(t){return{id:t.id,name:t.name,profile_path:t.profile_path,character:t.character}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function t(e,n){var r,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(o),{signal:n.signal});case 2:return r=t.sent,a=r.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content}})),t.abrupt("return",a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return x=(0,r.Z)(i().mark((function t(e){var n,r,a,u,p=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=p.length>1&&void 0!==p[1]?p[1]:1,r=p.length>2?p[2]:void 0,t.next=4,c.Z.get("".concat(s,"search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(n),{signal:r.signal});case 4:return a=t.sent,u=a.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",{movies:u,totalPages:a.data.total_pages,totalResults:a.data.total_results});case 7:case"end":return t.stop()}}),t)}))),x.apply(this,arguments)}}}]);
//# sourceMappingURL=877.fded762c.chunk.js.map