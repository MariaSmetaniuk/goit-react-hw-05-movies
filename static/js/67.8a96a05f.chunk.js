"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{9245:function(n,e,t){t.d(e,{a:function(){return d}});var r,i,o,a=t(168),u=t(3853),c=t(6444),s=(0,c.F4)(r||(r=(0,a.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),p=c.ZP.div(i||(i=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.2);\n"]))),f=(0,c.ZP)(u.dAq)(o||(o=(0,a.Z)(["\n  fill: ",";\n  width: 100px;\n  height: 100px;\n  animation: "," 1500ms linear infinite;\n"])),(function(n){return n.theme.colors.text}),s),l=t(184),d=function(){return(0,l.jsx)(p,{children:(0,l.jsx)(f,{})})}},5115:function(n,e,t){t.d(e,{O:function(){return g}});var r,i,o,a,u=t(4834),c=t(470),s=t(168),p=t(6444),f=t(6731),l=(0,p.ZP)(f.rU)(r||(r=(0,s.Z)(["\n  text-decoration: none;\n"]))),d=p.ZP.li(i||(i=(0,s.Z)(["\n  width: calc((100% - 3 * 32px) / 4);\n  background-color: ",";\n  box-shadow: ",";\n  transition: transform 200ms linear;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.secondary})),h=p.ZP.img(o||(o=(0,s.Z)(["\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n"]))),m=p.ZP.p(a||(a=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 ","px;\n  font-weight: ",";\n  font-size: ",";\n  line-height: 1.33;\n  text-transform: uppercase;\n  text-align: center;\n  color: ",";\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.fontWeights.bold}),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text})),x=t(184),v=function(n){var e=n.movie,t=e.id,r=e.title,i=e.poster_path,o=(0,c.TH)();return(0,x.jsx)(d,{children:(0,x.jsxs)(l,{to:"/movies/".concat(t),state:{from:o},children:[(0,x.jsx)(u.x,{height:"350px",children:(0,x.jsx)(h,{src:"https://image.tmdb.org/t/p/w400/".concat(i),alt:"film poster"})}),(0,x.jsx)(u.x,{display:"flex",alingItems:"center",justifyContent:"center",height:"75px",children:(0,x.jsx)(m,{children:r})})]})})},g=function(n){var e=n.movies;return(0,x.jsx)(u.x,{display:"flex",gridGap:5,flexWrap:"wrap",as:"ul",children:null===e||void 0===e?void 0:e.map((function(n){return(0,x.jsx)(v,{movie:n},n.id)}))})}},7067:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,o,a,u=t(5861),c=t(885),s=t(7757),p=t.n(s),f=t(2791),l=t(6731),d=t(409),h=t(9245),m=t(6355),x=t(168),v=t(6444),g=v.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 450px;\n  background-color: ",";\n  overflow: hidden;\n  box-shadow: ",";\n"])),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.shadows.secondary})),w=v.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 48px;\n  font-size: ",";\n  color: ",";\n  background-color: ",";\n  border: none;\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n"])),(function(n){return n.theme.fontSizes.m}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.muted}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[2]})),b=v.ZP.button(o||(o=(0,x.Z)(["\n  display: inline-block;\n  width: 60px;\n  height: 48px;\n  border: none;\n  opacity: 0.6;\n  background-color: ",";\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n    opacity: 1;\n  }\n"])),(function(n){return n.theme.colors.line})),y=v.ZP.span(a||(a=(0,x.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n"]))),Z=t(184),j=function(n){var e,t=n.onSubmit,r=(0,l.lr)(),i=(0,c.Z)(r,2),o=i[0],a=i[1],u=null!==(e=o.get("query"))&&void 0!==e?e:"";return(0,Z.jsxs)(g,{onSubmit:function(n){n.preventDefault();var e=u.trim();""!==e&&t(e)},children:[(0,Z.jsx)(w,{type:"text",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",value:u,onChange:function(n){var e=n.currentTarget.value;a(""!==e?{query:e}:{})}}),(0,Z.jsxs)(b,{type:"submit",children:[(0,Z.jsx)(m.U41,{}),(0,Z.jsx)(y,{children:"Search"})]})]})},k=t(5115),P=t(4834),S=function(){var n=(0,f.useState)(""),e=(0,c.Z)(n,2),t=e[0],r=e[1],i=(0,f.useState)([]),o=(0,c.Z)(i,2),a=o[0],s=o[1],m=(0,f.useState)(!1),x=(0,c.Z)(m,2),v=x[0],g=x[1],w=(0,f.useState)(null),b=(0,c.Z)(w,2),y=b[0],S=b[1],q=(0,l.lr)(),T=(0,c.Z)(q,1)[0],_=(0,f.useRef)(!1);(0,f.useEffect)((function(){var n;if(_.current)_.current=!0;else{var e=null!==(n=T.get("query"))&&void 0!==n?n:"";r(e)}}),[T]),(0,f.useEffect)((function(){if(""!==t){var n=function(){var n=(0,u.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,g(!0),n.next=4,(0,d.V0)(t);case 4:if(0!==(e=n.sent).results.length){n.next=9;break}return S("Sorry, there are no movies matching ".concat(t,". Please try again!")),s([]),n.abrupt("return");case 9:s(e.results),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),S("Something went wrong. Please, try again later!");case 15:return n.prev=15,g(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]);return(0,Z.jsxs)("main",{children:[v&&(0,Z.jsx)(h.a,{}),(0,Z.jsx)(j,{onSubmit:function(n){r(n),S(null)}}),(0,Z.jsxs)(P.x,{mt:5,children:[y&&(0,Z.jsx)("p",{children:y}),a.length>0&&(0,Z.jsx)(k.O,{movies:a})]})]})}},409:function(n,e,t){t.d(e,{Df:function(){return p},Jh:function(){return l},TP:function(){return f},V0:function(){return h},_r:function(){return d}});var r=t(5861),i=t(7757),o=t.n(i),a=t(1044),u=t(2007),c=t.n(u),s=a.ZP.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"84c663b0d9ed75aa92613d5f25b42077"}}),p=function(){var n=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("trending/movie/day");case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e,"/credits"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("movie/".concat(e,"/reviews"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(o().mark((function n(e){var t,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie",{params:{query:e}});case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();f.propTypes={movieId:c().string.isRequired},l.propTypes={movieId:c().string.isRequired},d.propTypes={movieId:c().string.isRequired},h.propTypes={query:c().string.isRequired}}}]);
//# sourceMappingURL=67.8a96a05f.chunk.js.map