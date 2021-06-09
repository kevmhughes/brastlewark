(this.webpackJsonpbrastlewark=this.webpackJsonpbrastlewark||[]).push([[0],{39:function(e,t,n){},50:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(30),i=n.n(c),r=(n(39),n(13)),l=n(14),o=n(16),j=n(15),h=n(18),d=n(5),b=n(56),u=n(7),x=n(8),O=n(25),p=n.n(O),g=n(1),m=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("div",{children:Object(g.jsx)(u.a,{icon:x.f,style:{height:"50px",width:"50px",marginLeft:"10px",color:"lightgray"}})})})}}]),n}(a.a.Component),f=(n(50),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).readData=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Brastlewark;s.setState({loading:!1,elements:t})})).catch(console.log)},s.state={loading:!0,elements:[],input:""},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.readData(this.props.dataURL)}},{key:"componentDidUpdate",value:function(){Object(O.forceCheck)()}},{key:"onChangeHandler",value:function(e){this.setState({input:e.target.value})}},{key:"render",value:function(){var e=this,t=this.state.elements;return this.state.loading?Object(g.jsx)("div",{children:Object(g.jsx)(u.a,{icon:x.e,className:"fa-pulse"})}):(console.log(t),Object(g.jsxs)("div",{children:[Object(g.jsxs)("h1",{className:"main-title",children:[Object(g.jsx)(u.a,{icon:x.b,style:{marginRight:"10px"}}),"Brastlewark"]}),Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{className:"input-styling",value:this.state.input,type:"text",placeholder:"search",onChange:this.onChangeHandler.bind(this),"aria-label":"Search gnomes by name"}),Object(g.jsx)("div",{className:"main-div",children:t.filter((function(t){return""===e.state.input||t.name.toLowerCase().includes(e.state.input.toLowerCase())})).map((function(e){return Object(g.jsx)("div",{className:"gnome-list-card",children:Object(g.jsx)(h.b,{to:{pathname:"/users/".concat(e.id),state:{elements:e}},style:{textDecoration:"none"},children:Object(g.jsxs)(b.a,{style:{flexDirection:"row"},children:[Object(g.jsx)(p.a,{style:{margin:"auto"},once:!0,offset:600,placeholder:Object(g.jsx)(m,{}),children:Object(g.jsx)(b.a.Img,{variant:"top",src:e.thumbnail,className:"gnome-avatar",alt:"Avatar image"})}),Object(g.jsx)(b.a.Body,{children:Object(g.jsx)(b.a.Title,{style:{marginBottom:"0px"},children:Object(g.jsxs)("div",{children:[e.weight>=40?Object(g.jsx)(u.a,{icon:x.d,style:{color:"lightblue",marginRight:"5px",fontSize:"15px"}}):Object(g.jsx)(u.a,{icon:x.h,style:{color:"pink",marginRight:"5px",fontSize:"15px"}}),Object(g.jsxs)("span",{className:"gnome-list-title",children:["  ",e.name]}),Object(g.jsxs)("span",{className:"briefcase-icon",children:[Object(g.jsx)(u.a,{icon:x.a}),Object(g.jsx)("span",{style:{marginLeft:"5px"},children:e.professions.length})]})]})})})]})})},e.id)}))})]})]}))}}]),n}(a.a.Component)),v=n(55),y=n(32),k=(n(53),function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).readData=function(e){fetch(e).then((function(e){return e.json()})).then((function(e){var t=e.Brastlewark[s.props.id];s.setState({userData:t})})).catch(console.log)},s.state={userData:null},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.readData(this.props.dataURL)}},{key:"render",value:function(){var e=this.state.userData;return e?(console.log(e),Object(g.jsxs)("div",{style:{height:"100vh"},children:[Object(g.jsxs)(h.b,{to:{pathname:"/users"},className:"gnome-info-link",children:[Object(g.jsx)(u.a,{icon:x.c})," ","Brastlewark"]}),Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)(b.a,{className:"gnome-info-card",children:[Object(g.jsx)(b.a.Img,{className:"gnome-info-image",variant:"top",src:e.thumbnail}),Object(g.jsxs)(b.a.Body,{children:[Object(g.jsxs)(b.a.Title,{style:{display:"flex"},children:[Object(g.jsx)("div",{style:{width:"30px"},children:e.weight>=40?Object(g.jsx)(u.a,{icon:x.d,style:{color:"lightblue",marginLeft:"5px"}}):Object(g.jsx)(u.a,{icon:x.h,style:{color:"pink",marginLeft:"5px"}})}),Object(g.jsx)("span",{children:e.name})]}),Object(g.jsxs)(b.a.Text,{className:"gnome-info-text",children:[Object(g.jsxs)("strong",{children:["Age:"," ",Object(g.jsx)("span",{style:{fontWeight:"normal"},children:e.age})]}),Object(g.jsxs)("strong",{children:["Height:"," ",Object(g.jsxs)("span",{style:{fontWeight:"normal"},children:[Math.round(e.height)," ","cm"]})]}),Object(g.jsxs)("strong",{children:["Weight:"," ",Object(g.jsxs)("span",{style:{fontWeight:"normal"},children:[Math.round(e.weight)," ","kg"]})]}),Object(g.jsxs)("strong",{children:["Hair Colour:",Object(g.jsxs)("span",{style:{fontWeight:"normal"},children:[" ",e.hair_color]})]})]})]}),Object(g.jsxs)(v.a,{className:"list-group-flush",children:[Object(g.jsxs)(y.a,{style:{display:"flex"},children:[Object(g.jsx)("div",{style:{width:"30px"},children:Object(g.jsx)(u.a,{icon:x.g,style:{marginRight:"15px"}})}),e.friends.join(", "),e.friends.length>0?".":"This gnome is not very sociable."]}),Object(g.jsxs)(y.a,{style:{display:"flex"},children:[Object(g.jsx)("div",{style:{width:"30px"},children:Object(g.jsx)(u.a,{icon:x.a,style:{marginLeft:"2px",marginRight:"13px"}})}),e.professions.join(", "),e.professions.length>0?".":"This gnome has no useful skills."]})]})]})})]})):Object(g.jsx)("div",{children:Object(g.jsx)(u.a,{icon:x.e,className:"fa-pulse"})})}}]),n}(a.a.Component)),w=function(e){Object(o.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(r.a)(this,n),(s=t.call(this,e)).state={dataURL:"https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json"},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{children:Object(g.jsx)(h.a,{children:Object(g.jsx)("div",{children:Object(g.jsxs)(d.d,{children:[Object(g.jsx)(d.b,{exact:!0,path:"/users",render:function(){return Object(g.jsx)(f,{dataURL:e.state.dataURL})}}),Object(g.jsx)(d.b,{exact:!0,path:"/users/:id",render:function(t){var n=t.match;return Object(g.jsx)(k,{id:n.params.id,dataURL:e.state.dataURL})}}),Object(g.jsx)(d.b,{exact:!0,path:"/",children:Object(g.jsx)(d.a,{to:"/users"})}),Object(g.jsx)(d.b,{exact:!0,path:"/brastlewark",children:Object(g.jsx)(d.a,{to:"/users"})})]})})})})}}]),n}(s.Component),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(w,{})}),document.getElementById("root")),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.8fefa6b8.chunk.js.map