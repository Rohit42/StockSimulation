(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,a){e.exports=a(442)},222:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(212),c=a.n(i),l=(a(222),a(22)),s=a(23),o=a(25),m=a(24),u=a(26),d=a(446),h=a(447),f=a(228),p=a(230),E=a(444),g=a(8),b=Object(g.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/trade"},"Trade")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/",className:"btn btn-floating pink lighten-1"},e.profile.initials))))}),v=function(){return r.a.createElement("div",null,r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signup"},"Signup")),r.a.createElement("li",null,r.a.createElement(E.a,{to:"/signin"},"Login"))))},N=a(448),k=Object(N.a)(Object(g.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(b,{profile:a}):r.a.createElement(v,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{to:"/",className:"brand-logo left"},"Portfolio"),n))})),y=function(e){var t=e.name,a=e.quantity,n=e.stock_info,i=e.Timer,c="Quantity: "+a,l="Ticker: "+(n?n.ticker:null),s="Price: "+(n?n.price[i].toFixed(2):null);return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title "},t),r.a.createElement("p",{className:"grey-text"},l),r.a.createElement("p",{className:"grey-text"},c),r.a.createElement("p",{className:"grey-text"},s)))},O=function(e){var t=e.stocks,a=e.stock_data,n=e.Timer;return console.log(t),r.a.createElement("div",{className:"stock-list section"},t&&Object.keys(t).map(function(e,i){return r.a.createElement(p.a,{to:"/stock/"+e,key:e},r.a.createElement(y,{Timer:n,quantity:t[e],name:e,stock_info:a?a[e]:null}))}))},j=a(87),S=a.n(j),w=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"online-users"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"note-date grey-text"},S()(e.time.toDate()).fromNow()))})))))},C=function(e){var t=e.liquid,a=t,n=e.stocks,i=e.stock_data;for(var c in n)i&&(a+=i[c].price[e.Timer]*n[c]);return t=t?t.toFixed(2):t,a=a?a.toFixed(2):a,r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Current Portfolio"),r.a.createElement("p",null,"Liquid: ",t),r.a.createElement("p",null,"Total:  ",a))))},_=a(18),x=a(12),F=a(445),R=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stocks,a=e.auth,n=e.notifications,i=e.stock_data,c=e.total,l=e.liquid,s=e.Timer;return console.log("here"),a.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(O,{stocks:t,stock_data:i,Timer:s})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement("div",{className:"timer_box"},r.a.createElement("div",{className:"chip timer"},"Timer: ",s)),r.a.createElement(C,{liquid:l,total:c,stocks:t,stock_data:i,Timer:s}),r.a.createElement(w,{notifications:n})))):r.a.createElement(F.a,{to:"/signin"})}}]),t}(n.Component),T=Object(x.d)(Object(g.b)(function(e){var t=e.firebase.auth.uid,a=e.firestore.data.users,n=a?a[t]:null,r=n?n.stocks:null,i=n?n.liquid:null,c=n?n.total:null,l=e.firestore.data.stock_data;console.log(l);var s=l?l.Game.Timer:null;return{liquid:i,total:c,stocks:r,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,stock_data:l,Timer:s}}),Object(_.firestoreConnect)([{collection:"users"},{collection:"stock_data"},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(R),A=a(44),I=Object(x.d)(Object(g.b)(function(e,t){var a=t.name?1:0,n=t.name?t.name:t.match.params.id,r=e.firestore.data.stock_data,i=r?r[n]:null,c=r?r.Game.Timer:null;return{stock_info:i,auth:e.firebase.auth,Timer:c,trade_page:a}}),Object(_.firestoreConnect)([{collection:"stock_data"}]))(function(e){var t=e.auth,a=e.stock_info,n=e.Timer,i=e.trade_page;if(!t.uid)return r.a.createElement(F.a,{to:"/signin"});if(a){var c=Array.from(a.price.entries());return c=c.slice(0,n),r.a.createElement("div",{className:i?"":"container section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},a.name),r.a.createElement("span",{className:"card-title"},a.price[n].toFixed(2)),r.a.createElement("p",null,a.ticker)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",{className:"chart_box"},r.a.createElement(A.Chart,{data:[{label:a.name,data:c}]},r.a.createElement(A.Axis,{primary:!0,type:"time"}),r.a.createElement(A.Axis,{type:"linear"}),r.a.createElement(A.Series,{type:A.Line}))))))}return r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Stock..."))}),q=a(31),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"center red-text"},t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component),L=Object(g.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(U),G=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(F.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"white",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"center red-text"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),P=Object(g.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,i=n.getFirestore,c=r(),l=i();c.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return l.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0],total:1e5,liquid:1e5,stocks:{}}),e}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(G),D=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={id:"",name:"",quantity:""},a.handleChange=function(e){a.setState(Object(q.a)({},e.target.id,e.target.value)),a.setState({id:a.state.name})},a.handleSubmit=function(e){e.preventDefault(),a.props.tradeStock(a.state,a.props.stock_data,a.props.history)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.stocks,a=e.auth,n=e.notifications,i=e.stock_data,c=e.total,l=e.liquid,s=e.Timer;if(!a.uid)return r.a.createElement(F.a,{to:"/signin"});var o,m="Apple";if(i&&this.state.name)for(o=0;o<Object.keys(i).length;o++)this.state.name===Object.keys(i)[o]&&(m=this.state.name);return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement("form",{className:"white margin_top_short",onSubmit:this.handleSubmit},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Trade"),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",id:"name",list:"stocks_to_trade",onChange:this.handleChange}),r.a.createElement("datalist",{id:"stocks_to_trade"},r.a.createElement("option",{value:"Apple"}),r.a.createElement("option",{value:"Google"})),r.a.createElement("label",{htmlFor:"name"},"Stock")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"number",id:"quantity",onChange:this.handleChange}),r.a.createElement("label",{htmlFor:"quantity"},"Quantity")),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1"},"TRADE")))),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(C,{Timer:s,liquid:l,total:c,stocks:t,stock_data:i}),r.a.createElement(w,{notifications:n})),r.a.createElement("div",{className:"col s12 m12 "},r.a.createElement(I,{name:m}))))}}]),t}(n.Component),z=Object(x.d)(Object(g.b)(function(e){var t=e.firebase.auth.uid,a=e.firestore.data.users,n=a?a[t]:null,r=n?n.stocks:null,i=n?n.liquid:null,c=n?n.total:null,l=e.firestore.data.stock_data,s=l?l.Game.Timer:null;return{liquid:i,total:c,stocks:r,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications,stock_data:e.firestore.data.stock_data,Timer:s}},function(e){return{tradeStock:function(t,a,n){return e(function(e,t,a){return function(n,r,i){var c=(0,i.getFirestore)(),l=(r().firebase.profile,r().firebase.auth.uid),s=r().firebase.profile.stocks,o=r().firebase.profile.liquid,m=r().firebase.profile.total,u=t.Game.Timer;console.log(t[e.name].price),o-=parseFloat(""+t[e.name].price[u])*parseFloat(e.quantity+""),e.name in s?s[e.name]=parseFloat(s[e.name])+parseFloat(e.quantity+""):s[e.name]=parseFloat(e.quantity+""),c.collection("users").doc(l).update({stocks:s,liquid:o,total:m}).then(function(){a.push("/"),n({type:"TRADE_SUCCESS"})}).catch(function(e){n({type:"TRADE_ERROR"},e)})}}(t,a,n))}}}),Object(_.firestoreConnect)([{collection:"users"},{collection:"stock_data"},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(D),W=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{forceRefresh:!0},r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(h.a,null,r.a.createElement(f.a,{exact:!0,path:"/",component:T}),r.a.createElement(f.a,{path:"/stock/:id",component:I}),r.a.createElement(f.a,{path:"/signin",component:L}),r.a.createElement(f.a,{path:"/signup",component:P}),r.a.createElement(f.a,{path:"/trade",component:z}))))}}]),t}(n.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");B?(!function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):J(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):J(e)})}}function J(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Q=a(63),K={authError:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(Q.a)({},e,{authError:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(Q.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(Q.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(Q.a)({},e,{authError:t.err.message});default:return e}},V={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V;switch((arguments.length>1?arguments[1]:void 0).type){case"TRADE_SUCCESS":case"TRADE_ERROR":default:return e}},Z=a(62),$=Object(x.c)({auth:M,project:X,firestore:Z.firestoreReducer,firebase:_.firebaseReducer}),Y=a(216),ee=a(91),te=a.n(ee);a(435),a(439);te.a.initializeApp({apiKey:"AIzaSyDZ6ackH-HhVHkM4WeB3JLoX3tIALbFBIw",authDomain:"stocksim-7b0e3.firebaseapp.com",databaseURL:"https://stocksim-7b0e3.firebaseio.com",projectId:"stocksim-7b0e3",storageBucket:"",messagingSenderId:"97488453538"}),te.a.firestore().settings({timestampsInSnapshots:!0});var ae=te.a,ne=Object(x.e)($,Object(x.d)(Object(x.a)(Y.a.withExtraArgument({getFirebase:_.getFirebase,getFirestore:Z.getFirestore})),Object(_.reactReduxFirebase)(ae,{userProfile:"users",useFirestoreForProfile:!0,attachAuthIsReady:!0}),Object(Z.reduxFirestore)(ae)));ne.firebaseAuthIsReady.then(function(){c.a.render(r.a.createElement(g.a,{store:ne},r.a.createElement(W,null)),document.getElementById("root")),H()})}},[[217,2,1]]]);
//# sourceMappingURL=main.870ac87f.chunk.js.map