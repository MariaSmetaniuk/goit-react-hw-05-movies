"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[156],{9245:function(n,t,e){e.d(t,{a:function(){return d}});var r,i,a,o=e(168),s=e(3853),c=e(6444),u=(0,c.F4)(r||(r=(0,o.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),f=c.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),p=(0,c.ZP)(s.dAq)(a||(a=(0,o.Z)(["\n  fill: ",";\n  width: 100px;\n  height: 100px;\n  animation: "," 1500ms linear infinite;\n"])),(function(n){return n.theme.colors.text}),u),h=e(184),d=function(){return(0,h.jsx)(f,{children:(0,h.jsx)(p,{})})}},5115:function(n,t,e){e.d(t,{O:function(){return g}});var r,i,a,o,s=e(4834),c=e(470),u=e(168),f=e(6444),p=e(6731),h=(0,f.ZP)(p.rU)(r||(r=(0,u.Z)(["\n  text-decoration: none;\n"]))),d=f.ZP.li(i||(i=(0,u.Z)(["\n  width: calc((100% - 3 * 32px) / 4);\n  background-color: ",";\n  box-shadow: ",";\n  transition: transform 200ms linear;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.secondary})),l=f.ZP.img(a||(a=(0,u.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),m=f.ZP.p(o||(o=(0,u.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 ","px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  text-transform: uppercase;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text})),x=e(184),v=function(n){var t=n.movie,e=t.id,r=t.title,i=t.poster_path,a=(0,c.TH)();return(0,x.jsx)(d,{children:(0,x.jsxs)(h,{to:"/movies/".concat(e),state:{from:a},children:[(0,x.jsx)(s.x,{height:"350px",children:(0,x.jsx)(l,{src:"https://image.tmdb.org/t/p/w400/".concat(i),alt:"film poster"})}),(0,x.jsx)(s.x,{display:"flex",alingItems:"center",justifyContent:"center",height:"75px",children:(0,x.jsx)(m,{children:r})})]})})},g=function(n){var t=n.movies;return(0,x.jsx)(s.x,{display:"flex",gridGap:5,flexWrap:"wrap",as:"ul",children:null===t||void 0===t?void 0:t.map((function(n){return(0,x.jsx)(v,{movie:n},n.id)}))})}},156:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,i=e(5861),a=e(885),o=e(7757),s=e.n(o),c=e(2791),u=e(409),f=e(9245),p=e(5115),h=e(168),d=e(6444).ZP.h1(r||(r=(0,h.Z)(["\n  margin-bottom: ","px;\n\n  font-weight: ",";\n  font-size: 40px;\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.05rem;\n  text-shadow: ",";\n  color: ",";\n"])),(function(n){return n.theme.space[5]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.shadows.text}),(function(n){return n.theme.colors.accent})),l=e(184),m=function(){var n=(0,c.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],o=(0,c.useState)(!1),h=(0,a.Z)(o,2),m=h[0],x=h[1],v=(0,c.useState)(null),g=(0,a.Z)(v,2),w=g[0],Z=g[1];return(0,c.useEffect)((function(){var n=function(){var n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),n.next=4,(0,u.Df)();case 4:t=n.sent,r(t.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),Z("Something went wrong. We can't find trending movies. Please, try again later!");case 11:return n.prev=11,x(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,l.jsxs)("main",{children:[m&&(0,l.jsx)(f.a,{}),w&&(0,l.jsx)("p",{children:w}),e.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{children:"Trending today"}),(0,l.jsx)(p.O,{movies:e})]})]})}},409:function(n,t,e){e.d(t,{Df:function(){return f},Jh:function(){return h},TP:function(){return p},V0:function(){return l},_r:function(){return d}});var r=e(5861),i=e(7757),a=e.n(i),o=e(1044),s=e(2007),c=e.n(s),u=o.ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"84c663b0d9ed75aa92613d5f25b42077"}}),f=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("trending/movie/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.get("/search/movie",{params:{query:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();p.propTypes={movieId:c().string.isRequired},h.propTypes={movieId:c().string.isRequired},d.propTypes={movieId:c().string.isRequired},l.propTypes={query:c().string.isRequired}}}]);
//# sourceMappingURL=156.7786d502.chunk.js.map