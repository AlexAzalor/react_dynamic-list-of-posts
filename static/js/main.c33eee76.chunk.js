(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(6),c=n.n(r),s=n(4),a=n(3),o=(n(11),n(12),n(2)),u=n(1),i=n.n(u),p=(n(14),"https://bloggy-api.herokuapp.com"),l=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts"));case 2:return e=t.sent,t.abrupt("return",e.json());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts/").concat(e,"?_embed=comments"));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts/").concat(e),{method:"DELETE"});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({title:e,body:n})});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(i.a.mark((function t(e,n,r){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/posts/").concat(e),{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({title:n,body:r})});case 2:return c=t.sent,t.abrupt("return",c.json());case 4:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}(),d=n(0),h=function(t){var e=t.handleButtonDetails,n=t.postId,r=t.setPostId,c=Object(a.useState)([]),u=Object(s.a)(c,2),p=u[0],b=u[1],h=Object(a.useState)(""),x=Object(s.a)(h,2),O=x[0],v=x[1],y=Object(a.useState)(""),_=Object(s.a)(y,2),w=_[0],N=_[1],k=Object(a.useState)(0),C=Object(s.a)(k,2),g=C[0],P=C[1],S=function(){var t=Object(o.a)(i.a.mark((function t(){var e;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e=t.sent,b(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),D=function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:return t.next=4,S();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),I=function(){N(""),v("")},L=function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,m(w,O);case 3:return t.next=5,j(g,w,O);case 5:return t.next=7,S();case 7:I();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.next=3,j(g,w,O);case 3:return t.next=5,S();case 5:I();case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){S()}),[g]),Object(d.jsxs)("div",{className:"PostsList",children:[Object(d.jsx)("h2",{children:"Posts:"}),Object(d.jsxs)("form",{className:"NewCommentForm",onSubmit:L,children:[Object(d.jsx)("input",{type:"text",value:w,name:"title",onChange:function(t){return N(t.target.value)}}),Object(d.jsx)("textarea",{className:"NewCommentForm__input",name:"body",value:O,onChange:function(t){return v(t.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",onClick:L,children:"Add a post"})]}),Object(d.jsx)("ul",{className:"PostsList__list",children:p.map((function(t){return Object(d.jsxs)("li",{className:"PostsList__item",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:t.title}),Object(d.jsx)("p",{children:t.body})]}),Object(d.jsxs)("div",{className:"PostsList__form",children:[n===t.id?Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return e(0)},children:"Close details"}):Object(d.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return e(t.id)},children:"Open details"}),Object(d.jsxs)("form",{className:"NewCommentForm",onSubmit:E,children:[Object(d.jsx)("input",{type:"hidden",value:t.id,onChange:function(t){return r(+t.target.value)}}),Object(d.jsx)("input",{type:"text",placeholder:"Type title",value:w,onChange:function(t){return N(t.target.value)}}),Object(d.jsx)("textarea",{className:"NewCommentForm__input",placeholder:"Type text",value:O,onChange:function(t){return v(t.target.value)}}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",onClick:function(){return P(t.id)},children:"Update post"}),Object(d.jsx)("button",{type:"button",className:"PostsList__button PostsList__button--red button",onClick:function(){return D(t.id)},children:"Remove post"})]})]})]},t.id)}))})]})},x=(n(16),"https://bloggy-api.herokuapp.com"),O=function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/posts/").concat(e,"?_embed=comments"));case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=Object(o.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/comments/").concat(e,"?_embed=comments"),{method:"DELETE"});case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(o.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(x,"/comments"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({postId:e,body:n})});case 2:return r=t.sent,t.abrupt("return",r.json());case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),_=(n(17),function(t){var e=t.postId,n=t.getComments,r=Object(a.useState)(""),c=Object(s.a)(r,2),u=c[0],p=c[1],l=function(){var t=Object(o.a)(i.a.mark((function t(r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),t.next=3,y(e,u);case 3:return t.next=5,n();case 5:p("");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("form",{className:"NewCommentForm",onSubmit:l,children:[Object(d.jsx)("div",{className:"form-field",children:Object(d.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:u,onChange:function(t){return p(t.target.value)}})}),Object(d.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",onClick:l,children:"Add a comment"})]})}),w=function(t){var e=t.postId,n=Object(a.useState)(),r=Object(s.a)(n,2),c=r[0],u=r[1],p=Object(a.useState)([]),l=Object(s.a)(p,2),f=l[0],m=l[1],j=function(){var t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:n=t.sent,u(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:n=t.sent,m(n.comments);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=Object(o.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.next=4,h();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){h(),j()}),[e]),Object(d.jsxs)("div",{className:"PostDetails",children:[Object(d.jsx)("h2",{children:"Post details:"}),Object(d.jsx)("section",{className:"PostDetails__post",children:Object(d.jsx)("p",{children:null===c||void 0===c?void 0:c.title})}),Object(d.jsx)("section",{className:"PostDetails__comments",children:Object(d.jsx)("ul",{className:"PostDetails__list",children:f.map((function(t){return Object(d.jsxs)("li",{className:"PostDetails__list-item",children:[Object(d.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return x(t.id)},children:"X"}),Object(d.jsx)("p",{children:t.body})]},t.id)}))})}),Object(d.jsx)("section",{children:Object(d.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(d.jsx)(_,{postId:e,getComments:h})})})]})},N=function(){var t=Object(a.useState)(0),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("main",{className:"App__main",children:[Object(d.jsx)("div",{className:"App__sidebar",children:Object(d.jsx)(h,{handleButtonDetails:function(t){r(t)},postId:n,setPostId:r})}),Object(d.jsx)("div",{className:"App__content",children:n?Object(d.jsx)(w,{postId:n}):""})]})})};c.a.render(Object(d.jsx)(N,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.c33eee76.chunk.js.map