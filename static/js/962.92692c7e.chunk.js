"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[962],{9613:function(e,r,n){n.d(r,{Z:function(){return c}});var t=n.p+"static/media/error.42292aa12b6bc303ce99.gif",a=n(184),c=function(){return(0,a.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"Error"})}},8122:function(e,r,n){n.r(r),n.d(r,{default:function(){return T}});var t=n(9439),a=n(5671),c=n(3144),s=n(136),i=n(7277),o=n(2791),l=n(9613),u=n(184),h=function(e){(0,s.Z)(n,e);var r=(0,i.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var t=arguments.length,c=new Array(t),s=0;s<t;s++)c[s]=arguments[s];return(e=r.call.apply(r,[this].concat(c))).state={error:!1},e}return(0,c.Z)(n,[{key:"componentDidCatch",value:function(e,r){this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,u.jsx)(l.Z,{}):this.props.children}}]),n}(o.Component),d=h,m=n(6557),p=n(3440),f=function(e){var r=e.data,n=r.name,t=r.description,a=r.thumbnail,c=r.homepage,s=r.wiki,i=r.comics,o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(o={objectFit:"unset"}),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:a,alt:n,style:o}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:n}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:t}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comicses with this character",i.map((function(e,r){if(!(r>9))return(0,u.jsx)("li",{className:"char__comics-item",children:e.name},r)}))]})]})},x=function(e){var r=(0,o.useState)(null),n=(0,t.Z)(r,2),a=n[0],c=n[1];(0,o.useEffect)((function(){_()}),[e.charId]);var s=(0,m.Z)(),i=s.getCharacter,l=s.clearError,h=s.process,d=s.setProcess,x=function(e){c(e)},_=function(){var r=e.charId;r&&(l(),x(),i(r).then(x).then((function(){return d("confirmed")})))};return(0,u.jsx)("div",{className:"char__info",children:(0,p.Z)(h,f,a)})},_=n(4165),v=n(3433),j=n(5861),b=n(6983),g=n(5660),N=n(3394),Z=function(e){var r,n=(0,o.useState)([]),a=(0,t.Z)(n,2),c=a[0],s=a[1],i=(0,o.useState)(!1),h=(0,t.Z)(i,2),d=h[0],p=h[1],f=(0,o.useState)(210),x=(0,t.Z)(f,2),Z=x[0],k=x[1],w=(0,o.useState)(!1),y=(0,t.Z)(w,2),C=y[0],E=y[1],S=(0,m.Z)(),F=S.getAllCharacters,P=S.process,T=S.setProcess;(0,o.useEffect)((function(){I(Z,!0)}),[]);var I=function(e,r){p(!r),F(e).then(q).then((function(){return T("confirmed")}))},q=function(e){return(r=r||(0,j.Z)((0,_.Z)().mark((function e(r){var n;return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=!1,r.length<9&&(n=!0),s([].concat((0,v.Z)(c),(0,v.Z)(r))),p(!1),k(Z+9),E(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},A=(0,o.useRef)([]),B=function(e){A.current.forEach((function(e){return e.classList.remove("char__item_selected")})),A.current[e].classList.add("char__item_selected"),A.current[e].focus()};var R=(0,o.useMemo)((function(){return function(e,r,n){switch(e){case"waiting":return(0,u.jsx)(N.Z,{});case"loading":return n?(0,u.jsx)(r,{}):(0,u.jsx)(N.Z,{});case"confirmed":return(0,u.jsx)(r,{});case"error":return(0,u.jsx)(l.Z,{});default:throw new Error("Unexpected process state")}}(P,(function(){return function(r){var n=r.map((function(r,n){var t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r.thumbnail&&(t={objectFit:"unset"}),(0,u.jsx)(b.Z,{timeout:500,classNames:"char__item",children:(0,u.jsxs)("li",{className:"char__item",tabIndex:0,ref:function(e){return A.current[n]=e},onClick:function(){e.onCharSelected(r.id),B(n)},onKeyPress:function(t){" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(r.id),B(n))},children:[(0,u.jsx)("img",{src:r.thumbnail,alt:r.name,style:t}),(0,u.jsx)("div",{className:"char__name",children:r.name})]})},r.id)}));return(0,u.jsx)("ul",{className:"char__grid",children:(0,u.jsx)(g.Z,{component:null,children:n})})}(c)}),d)}),[P]);return(0,u.jsxs)("div",{className:"char__list",children:[R,(0,u.jsx)("button",{disabled:d,style:{display:C?"none":"block"},className:"button button__main button__long",onClick:function(){return I(Z)},children:(0,u.jsx)("div",{className:"inner",children:"load more"})})]})},k=n.p+"static/media/mjolnir.61f31e1809f12183a524.png",w=function(e){var r=e.data,n=r.name,t=r.description,a=r.thumbnail,c=r.homepage,s=r.wiki,i="randomchar__img";return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a&&(i+=" not__found"),(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:a,alt:"Random character",className:i}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:n}),(0,u.jsx)("p",{className:"randomchar__descr",children:t?t.length>200?t.substring(0,200).trim()+"...":t:"Description is not found"}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:c,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},y=function(e){var r=(0,o.useState)({}),n=(0,t.Z)(r,2),a=n[0],c=n[1],s=(0,m.Z)(),i=s.getCharacter,l=s.clearError,h=s.process,d=s.setProcess;(0,o.useEffect)((function(){x();var e=setInterval(x,6e3);return function(){clearInterval(e)}}),[]);var f=function(e){c(e)},x=function(){l();var e=Math.floor(400*Math.random()+1011e3);i(e).then(f).then((function(){return d("confirmed")}))};return(0,u.jsxs)("div",{className:"randomchar",children:[(0,p.Z)(h,w,a),(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{className:"button button__main",onClick:x,children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:k,alt:"mjolnir",className:"randomchar__decoration"})]})]})},C=n(5705),E=n(7670),S=n(1087),F=function(){var e=(0,o.useState)(null),r=(0,t.Z)(e,2),n=r[0],a=r[1],c=(0,m.Z)(),s=c.getCharacterByName,i=c.clearError,h=c.process,d=c.setProcess,p=function(e){a(e)},f="error"===h?(0,u.jsx)("div",{className:"char__search-critical-error",children:(0,u.jsx)(l.Z,{})}):null,x=n?n.length>0?(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsxs)("div",{className:"char__search-success",children:["There is! Visit ",n[0].name," page?"]}),(0,u.jsx)(S.rU,{to:"/characters/".concat(n[0].id),className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"To page"})})]}):(0,u.jsx)("div",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,u.jsxs)("div",{className:"char__search-form",children:[(0,u.jsx)(C.J9,{initialValues:{charName:""},validationSchema:E.Ry({charName:E.Z_().required("This field is required")}),onSubmit:function(e){var r,n=e.charName;r=n,i(),s(r).then(p).then((function(){return d("confirmed")}))},children:(0,u.jsxs)(C.l0,{children:[(0,u.jsx)("label",{className:"char__search-label",htmlFor:"charName",children:"Or find a character by name:"}),(0,u.jsxs)("div",{className:"char__search-wrapper",children:[(0,u.jsx)(C.gN,{id:"charName",name:"charName",type:"text",placeholder:"Enter name"}),(0,u.jsx)("button",{type:"submit",className:"button button__main",disabled:"loading"===h,children:(0,u.jsx)("div",{className:"inner",children:"find"})})]}),(0,u.jsx)(C.Bc,{component:"div",className:"char__search-error",name:"charName"})]})}),x,f]})},P=n.p+"static/media/vision.067d4ae1936d64a577ce.png",T=function(){var e=(0,o.useState)(null),r=(0,t.Z)(e,2),n=r[0],a=r[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d,{children:(0,u.jsx)(y,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(d,{children:(0,u.jsx)(Z,{onCharSelected:function(e){a(e)}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{children:(0,u.jsx)(x,{charId:n})}),(0,u.jsx)(d,{children:(0,u.jsx)(F,{})})]})]}),(0,u.jsx)("img",{className:"bg-decoration",src:P,alt:"vision"})]})}},6557:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(4165),a=n(5861),c=n(9439),s=n(2791),i=function(){var e,r,n,i,o,l=function(){var e,r=(0,s.useState)("waiting"),n=(0,c.Z)(r,2),i=n[0],o=n[1],l=(0,s.useCallback)((function(r){return(e=e||(0,a.Z)((0,t.Z)().mark((function e(r){var n,a,c,s,i,l=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"GET",a=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},o("loading"),e.prev=4,e.next=7,fetch(r,{method:n,body:a,headers:c});case 7:if((s=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(r,", status: ").concat(s.status));case 10:return e.next=12,s.json();case 12:return i=e.sent,e.abrupt("return",i);case 16:throw e.prev=16,e.t0=e.catch(4),o("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}),[]);return{request:l,clearError:(0,s.useCallback)((function(){o("loading")}),[]),process:i,setProcess:o}}(),u=l.request,h=l.clearError,d=l.process,m=l.setProcess,p="https://gateway.marvel.com:443/v1/public/",f="apikey=c5d6fc8b83116d92ed468ce36bac6c62",x=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},_=function(e){var r;return{id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,language:(null===(r=e.textObjects[0])||void 0===r?void 0:r.language)||"en-us",price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"not available"}};return{clearError:h,getAllCharacters:function(){return(e=e||(0,a.Z)((0,t.Z)().mark((function e(){var r,n,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,e.next=3,u("".concat(p,"characters?limit=9&offset=").concat(r,"&").concat(f));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getCharacterByName:function(e){return(r=r||(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("".concat(p,"characters?name=").concat(r,"&").concat(f));case 2:return n=e.sent,e.abrupt("return",n.data.results.map(x));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getCharacter:function(e){return(n=n||(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("".concat(p,"characters/").concat(r,"?").concat(f));case 2:return n=e.sent,e.abrupt("return",x(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getAllComics:function(){return(i=i||(0,a.Z)((0,t.Z)().mark((function e(){var r,n,a=arguments;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,e.next=3,u("".concat(p,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(f));case 3:return n=e.sent,e.abrupt("return",n.data.results.map(_));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)},getComic:function(e){return(o=o||(0,a.Z)((0,t.Z)().mark((function e(r){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u("".concat(p,"comics/").concat(r,"?").concat(f));case 2:return n=e.sent,e.abrupt("return",_(n.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},process:d,setProcess:m}}},3440:function(e,r,n){n.d(r,{Z:function(){return i}});var t=n(3394),a=n(9613),c=n(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]})},i=function(e,r,n){switch(e){case"waiting":return(0,c.jsx)(s,{});case"loading":return(0,c.jsx)(t.Z,{});case"confirmed":return(0,c.jsx)(r,{data:n});case"error":return(0,c.jsx)(a.Z,{});default:throw new Error("Unexpected process state")}}}}]);
//# sourceMappingURL=962.92692c7e.chunk.js.map