webpackJsonp([1],{"+DV5":function(t,a){},"/+Mm":function(t,a){},"/yRs":function(t,a,e){"use strict";function n(t){e("pZIy")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("diQi"),i=e.n(s),r=e("ZL+S"),o=e("VU/8"),c=n,l=o(i.a,r.a,!1,c,null,null);a.default=l.exports},"0fRH":function(t,a,e){t.exports=e.p+"static/img/tech2.10700b2.png"},"1dQr":function(t,a,e){"use strict";function n(t){e("knXB")}var s=e("3TpW"),i=e("wjsw"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-089aae70",null);a.a=c.exports},"280g":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"searchbar"},[e("b-field",{attrs:{type:"is-primary",position:"is-centered"}},[e("b-input",{attrs:{type:"search",icon:"search",placeholder:"Search a country, a city, a type of organisation...",expanded:""},model:{value:t.searched,callback:function(a){t.searched=a},expression:"searched"}})],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},"2iVe":function(t,a,e){"use strict";function n(t){e("3erz")}var s=e("mflC"),i=e("tMks"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-2feaadbf",null);a.a=c.exports},"3TpW":function(t,a,e){"use strict";a.a={props:{organisations:Array,small:{type:Boolean,default:!1}},data:function(){return{center:{lat:3.319292,lng:4.4218547},userPosition:null,zoom:4}}}},"3erz":function(t,a){},"4MY7":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.error?e("b-notification",{staticClass:"errormsg",attrs:{type:"is-danger","has-icon":""}},[t._v("\n    "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),e("form",{on:{submit:function(a){a.preventDefault(),t.login(a)}}},[e("div",{staticClass:"modal-card"},[e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),t._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1)],1),t._v(" "),t._m(0)])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"modal-card-foot is-centered"},[e("button",{staticClass:"button is-primary"},[t._v("Login")])])}],i={render:n,staticRenderFns:s};a.a=i},"4Oe6":function(t,a){},"4Qjt":function(t,a){},"5R80":function(t,a){},"5ZbH":function(t,a,e){"use strict";function n(t){e("+DV5")}Object.defineProperty(a,"__esModule",{value:!0});var s=e("kXiA"),i=e.n(s),r=e("aqdv"),o=e("VU/8"),c=n,l=o(i.a,r.a,!1,c,null,null);a.default=l.exports},"5cLx":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("Vj7G"),s=e.n(n),i=e("yFXX"),r=e("VU/8"),o=r(s.a,i.a,!1,null,null,null);a.default=o.exports},"6b7v":function(t,a,e){"use strict";function n(t){e("gZgQ")}var s=e("rAdw"),i=e("p9e5"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-b0096900",null);a.a=c.exports},"7n3G":function(t,a,e){"use strict";function n(t){e("4Oe6")}var s=e("fYk6"),i=e("dPcg"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-e80d26b4",null);a.a=c.exports},"8hUo":function(t,a,e){"use strict";function n(){return d.get("/").then(function(t){return t.data})}function s(t){return d.get(t).then(function(t){return t.data})}function i(t){return d.delete(t).then(function(){})}function r(t){return d.get("/",{params:{ownerId:t}}).then(function(t){return t.data})}function o(t){return d.post("/",t).then(function(t){return t.data})}function c(t,a){return d.patch(t,a).then(function(t){return t.data})}a.d=n,a.c=s,a.f=i,a.e=r,a.a=o,a.b=c;var l=e("mtWM"),u=e.n(l),d=u.a.create({baseURL:"/api/organisations"})},B9Ob:function(t,a,e){"use strict";var n=e("8hUo"),s=e("eocx");a.a={components:{OrganisationsList:s.a},data:function(){return{organisations:[],errors:[]}},created:function(){var t=this;Object(n.e)(this.$root.user._id).then(function(a){t.organisations=a})}}},BAIw:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{class:{small:t.small}},t._l(t.organisations,function(a){return e("organisation-card",{key:a._id,attrs:{organisation:a,editable:t.editable}})}))},s=[],i={render:n,staticRenderFns:s};a.a=i},BRs0:function(t,a,e){"use strict";a.a={props:{organisation:Object,editable:Boolean,smallcard:{type:Boolean,default:!0},smallimg:{type:Boolean,default:!0},smallcontent:{type:Boolean,default:!0}}}},"BW/5":function(t,a,e){"use strict";function n(t){e("hk8N")}var s=e("XCQD"),i=e("280g"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,null,null);a.a=c.exports},LEIt:function(t,a,e){"use strict";var n=e("8hUo");a.a={data:function(){return{activeTab:0,isCardModalActive:!1,organisation:null}},created:function(){var t=this;Object(n.c)(this.$route.params.id).then(function(a){t.organisation=a})}}},LF4d:function(t,a){},M93x:function(t,a,e){"use strict";function n(t){e("/+Mm")}var s=e("xJD8"),i=e("QDwF"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,null,null);a.a=c.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s=e("M93x"),i=e("YaEn"),r=e("MMSg"),o=e.n(r),c=e("sA6N"),l=(e.n(c),e("OjAt")),u=e.n(l),d=e("doPI");e.n(d);n.a.use(c,{load:{key:"AIzaSyDuBacGwzcYTG2tpXRlcTc2d6mYk2MZF0c",libraries:"places"}}),n.a.use(o.a,{defaultIconPack:"fa"}),n.a.use(u.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:i.a,data:{user:null},template:"<App/>",components:{App:s.a}})},O9BZ:function(t,a,e){t.exports=e.p+"static/img/sn.9644ad8.png"},Pfph:function(t,a,e){"use strict";function n(t){var a=t.token,e=t.user;d.a.defaults.headers.common.Authorization="Bearer "+a,localStorage.setItem("token",a),localStorage.setItem("user",l()(e))}function s(t){var a=localStorage.getItem("token"),e=localStorage.getItem("user");if(a&&e){var s=JSON.parse(e);n({token:a,user:s}),t.user=s}}function i(t,a,e){return v.post("/login",{email:t,password:a}).then(function(t){return n(t.data),e.user=t.data.user,t.data})}function r(t){localStorage.removeItem("token"),t.user=null,delete d.a.defaults.headers.common.Authorization}function o(t){return v.post("/signup",t).then(function(t){return t.data})}a.a=s,a.b=i,a.c=r,a.d=o;var c=e("mvHQ"),l=e.n(c),u=e("mtWM"),d=e.n(u),v=d.a.create({baseURL:"/api"})},Q0UG:function(t,a,e){"use strict";a.a={props:{displayInputLocation:{type:Boolean,default:!1}},data:function(){return{organisation:{name:"",description:"",contact:"",address:"",country:"",city:"",category:"",needs:[]}}}}},QDwF:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("nav",{staticClass:"navbar is-primary is-transparent"},[e("div",{staticClass:"navbar-brand"},[t._m(0),t._v(" "),e("div",{staticClass:"navbar-burger burger",class:{"is-active":t.active},attrs:{"data-target":"navDropping"}},[e("span"),t._v(" "),e("span"),t._v(" "),e("span")])]),t._v(" "),e("div",{staticClass:"navbar-menu",class:{"is-active":t.active},attrs:{id:"navDropping"}},[e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[t.$root.user?t._e():e("router-link",{staticClass:"navbar-link",attrs:{to:"login"}},[t._v("\n                Login\n              ")]),t._v(" "),t.$root.user?t._e():e("router-link",{staticClass:"navbar-link",attrs:{to:"signup"}},[t._v("\n                Signup\n              ")]),t._v(" "),t.$root.user?e("router-link",{staticClass:"navbar-link",attrs:{to:"/"}},[t._v("\n               All organisations\n              ")]):t._e(),t._v(" "),t.$root.user?e("router-link",{staticClass:"navbar-link",attrs:{to:"/user/profile"}},[t._v("\n               My organisations\n              ")]):t._e(),t._v(" "),t.$root.user?e("router-link",{staticClass:"navbar-link",attrs:{to:"/organisations/add"}},[t._v("\n               Add an organisation\n              ")]):t._e(),t._v(" "),t.$root.user?e("a",{staticClass:"navbar-link",attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.logout(a)}}},[t._v("Logout")]):t._e(),t._v(" "),t.$root.user?e("b-dropdown",{attrs:{position:"is-bottom-left"},model:{value:t.navigation,callback:function(a){t.navigation=a},expression:"navigation"}},[e("a",{staticClass:"navbar-item",attrs:{slot:"trigger"},slot:"trigger"},[e("b-icon",{staticClass:"profile",attrs:{icon:"address-card"}}),t._v(" "),e("span",{staticClass:"profile"},[t._v("My profile")])],1),t._v(" "),e("b-dropdown-item",{attrs:{custom:""}},[e("b-icon",{attrs:{icon:"person"}}),t._v("\n                    Logged as "),e("b",[t._v(t._s(t.$root.user.name))])],1),t._v(" "),e("hr",{staticClass:"dropdown-divider"}),t._v(" "),t.$root.user.isAdmin?e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"home"}}),t._v(" "),e("a",{attrs:{href:"/user/profile/admin"}},[t._v("All organisations")])],1):e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"home"}}),t._v(" "),e("a",{attrs:{href:"/"}},[t._v("All organisations")])],1),t._v(" "),e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"check"}}),t._v(" "),e("a",{attrs:{href:"/user/profile"}},[t._v("My organisations")])],1),t._v(" "),e("b-dropdown-item",{attrs:{value:"home"}},[e("b-icon",{attrs:{icon:"plus"}}),t._v(" "),e("router-link",{attrs:{to:"/organisations/add"}},[t._v("Add an organisation")])],1),t._v(" "),e("b-dropdown-item",{attrs:{value:"logout"}},[e("b-icon",{attrs:{icon:"sign-out"}}),t._v(" "),e("a",{attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.logout(a)}}},[t._v("Logout")])],1)],1):t._e()],1)])])]),t._v(" "),e("section",[e("div",{staticClass:"container",class:{smallcontainer:"/overview"===t.$route.path}},[e("router-view")],1),t._v(" "),t._m(1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("h1",{staticClass:"titlelogo"},[t._v(" NELƎNE")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mainfooter"},[t._v("\n    Made with "),e("i",{staticClass:"em em-smile"}),t._v(" by Elodie WANANG // Ironhack Final Project \n  ")])}],i={render:n,staticRenderFns:s};a.a=i},"Qm/T":function(t,a,e){t.exports=e.p+"static/img/ln.8888faa.png"},R0Mb:function(t,a,e){"use strict";function n(t){e("LF4d")}var s=e("B9Ob"),i=e("e/mw"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-751a956b",null);a.a=c.exports},SQEb:function(t,a,e){"use strict";function n(t){e("nNsB")}var s=e("xkJr"),i=e("4MY7"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-0f2f8304",null);a.a=c.exports},"TW/u":function(t,a,e){"use strict";function n(t){e("xtaZ")}var s=e("BRs0"),i=e("bU4I"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-d516862c",null);a.a=c.exports},Vi44:function(t,a,e){"use strict";var n=e("TW/u");a.a={components:{OrganisationCard:n.a},props:{organisations:Array,editable:{type:Boolean,default:!1},small:{type:Boolean,default:!1}}}},WPE0:function(t,a){},XCQD:function(t,a,e){"use strict";a.a={props:{organisations:Array},data:function(){return{searched:""}},methods:{filter:function(){this.$emit("filter",this.filterBy(this.organisations,this.searched)).then}},watch:{searched:function(){this.filter()}}}},Y2EH:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t.error?e("b-notification",{staticClass:"errormsg",attrs:{type:"is-danger","has-icon":""}},[t._v("\n      "+t._s(t.error)+"\n  ")]):t._e(),t._v(" "),e("form",{on:{submit:function(a){a.preventDefault(),t.signup(a)}}},[e("div",{staticClass:"modal-card",staticStyle:{width:"500px"}},[e("section",{staticClass:"modal-card-body"},[e("b-field",{attrs:{label:"Email"}},[e("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),t._v(" "),e("b-field",{attrs:{label:"Name"}},[e("b-input",{attrs:{type:"name",placeholder:"Your name",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}})],1),t._v(" "),e("b-field",{attrs:{label:"Password"}},[e("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),t._v(" "),e("b-checkbox",[t._v("Remember me")])],1),t._v(" "),t._m(0)])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button is-primary"},[t._v("Sign up")])])}],i={render:n,staticRenderFns:s};a.a=i},YI6p:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("jIen"),s=e.n(n),i=e("yMA3"),r=e("VU/8"),o=r(s.a,i.a,!1,null,null,null);a.default=o.exports},YaEn:function(t,a,e){"use strict";var n=e("7+uW"),s=e("/ocq"),i=(e("ys7F"),e("SQEb")),r=e("oHKm"),o=e("2iVe"),c=e("naRr"),l=e("usXg"),u=e("R0Mb"),d=e("bDn/"),v=e("7n3G"),f=e("6b7v"),p=e("Pfph");n.a.use(s.a);var m=new s.a({mode:"history",routes:[{path:"/",component:o.a,meta:{requiresNonAuth:!0}},{path:"/login",component:i.a,meta:{requiresNonAuth:!0}},{path:"/signup",component:r.a,meta:{requiresNonAuth:!0}},{path:"/organisations/add",component:c.a,meta:{requiresAuth:!0}},{path:"/organisations/edit/:id",component:d.a,meta:{requiresAuth:!0}},{path:"/organisations/view/:id",component:l.a,meta:{requiresNonAuth:!0}},{path:"/profile",component:u.a,meta:{requiresNonAuth:!0}},{path:"/admin",component:v.a,meta:{requiresAuth:!0,isAdmin:!0}},{path:"/overview",component:f.a,meta:{requiresNonAuth:!0}}]});m.beforeEach(function(t,a,e){if(t.meta.requiresAuth&&(Object(p.a)(m.app.$root),!m.app.$root.user))return e({path:"/login",query:{redirect:encodeURIComponent(t.fullPath)}});e()}),a.a=m},Ygbr:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("section",[e("form",{on:{submit:function(a){a.preventDefault(),t.editOrganisation(a)}}},[e("b-field",{attrs:{label:"Profile Picture"}}),t._v(" "),t._m(0),t._v(" "),e("b-field",{attrs:{label:"Name"}},[e("b-input",{attrs:{value:"organisation.name"},model:{value:t.organisation.name,callback:function(a){t.$set(t.organisation,"name",a)},expression:"organisation.name"}})],1),t._v(" "),e("b-field",{attrs:{label:"Description"}},[e("b-input",{attrs:{type:"textarea"},model:{value:t.organisation.description,callback:function(a){t.$set(t.organisation,"description",a)},expression:"organisation.description"}},[t._v("\n            "+t._s(t.organisation.description)+"\n          ")])],1),t._v(" "),e("b-field",{attrs:{label:"Contact"}},[e("b-input",{attrs:{type:"Email"},model:{value:t.organisation.contact,callback:function(a){t.$set(t.organisation,"contact",a)},expression:"organisation.contact"}},[t._v("\n            "+t._s(t.organisation.contact)+"\n          ")])],1),t._v(" "),e("b-field",{attrs:{grouped:""}},[e("b-field",{attrs:{label:" Address"}},[e("b-input",{model:{value:t.organisation.address,callback:function(a){t.$set(t.organisation,"address",a)},expression:"organisation.address"}})],1),t._v(" "),e("b-field",{attrs:{label:" Country",expanded:""}},[e("b-input",{model:{value:t.organisation.country,callback:function(a){t.$set(t.organisation,"country",a)},expression:"organisation.country"}},[t._v("\n            "+t._s(t.organisation.country)+"\n          ")])],1),t._v(" "),e("b-field",{attrs:{label:" City",expanded:""}},[e("b-input",{model:{value:t.organisation.city,callback:function(a){t.$set(t.organisation,"city",a)},expression:"organisation.city"}},[t._v("\n            "+t._s(t.organisation.city)+"\n          ")])],1)],1),t._v(" "),e("b-field",{attrs:{label:" Category"}},[e("b-select",{attrs:{placeholder:"organisation.category",icon:"person"},model:{value:t.organisation.category,callback:function(a){t.$set(t.organisation,"category",a)},expression:"organisation.category"}},[e("option",{attrs:{value:"startup"}},[t._v("Start-Up")]),t._v(" "),e("option",{attrs:{value:"incubator"}},[t._v("Incubator")]),t._v(" "),e("option",{attrs:{value:"investment"}},[t._v("Investment Fund")])])],1),t._v(" "),e("b-field",{attrs:{label:"Type of needs"}},[e("b-select",{attrs:{multiple:"","native-size":"3",placeholder:"organisation.category"},model:{value:t.organisation.needs,callback:function(a){t.$set(t.organisation,"needs",a)},expression:"organisation.needs"}},[e("option",{attrs:{value:"recruitment"}},[t._v("recruitment")]),t._v(" "),e("option",{attrs:{value:"location"}},[t._v("location")]),t._v(" "),e("option",{attrs:{value:"seed funding"}},[t._v("seed funding")])])],1),t._v(" "),e("button",{staticClass:"button is-primary"},[t._v("Submit information")])],1)])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"field"},[e("div",{staticClass:"file is-warning is-boxed is-centered"},[e("label",{staticClass:"file-label"},[e("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"}}),t._v(" "),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fa fa-cloud-upload"})]),t._v(" "),e("span",{staticClass:"file-label"},[t._v("\n                  Upload your file \n                ")])])])])])}],i={render:n,staticRenderFns:s};a.a=i},"ZL+S":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue-street-view-pano-container"},[e("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),t._v(" "),t._t("default")],2)},s=[],i={render:n,staticRenderFns:s};a.a=i},ZqTD:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{on:{submit:function(a){a.preventDefault(),t.addNewOrganisation(a)}}},[e("b-field",{attrs:{label:"Profile Picture"}}),t._v(" "),t._m(0),t._v(" "),e("b-field",{attrs:{label:"Name"}},[e("b-input",{model:{value:t.organisation.name,callback:function(a){t.$set(t.organisation,"name",a)},expression:"organisation.name"}})],1),t._v(" "),e("b-field",{attrs:{label:"Description"}},[e("b-input",{attrs:{type:"textarea"},model:{value:t.organisation.description,callback:function(a){t.$set(t.organisation,"description",a)},expression:"organisation.description"}})],1),t._v(" "),e("b-field",{attrs:{label:"Contact"}},[e("b-input",{attrs:{type:"Email",value:"Email"},model:{value:t.organisation.contact,callback:function(a){t.$set(t.organisation,"contact",a)},expression:"organisation.contact"}})],1),t._v(" "),e("b-field",{attrs:{grouped:""}},[e("b-field",{attrs:{label:" Address"}},[e("b-input",{attrs:{placeholder:"Address"},model:{value:t.organisation.address,callback:function(a){t.$set(t.organisation,"address",a)},expression:"organisation.address"}})],1),t._v(" "),e("b-field",{attrs:{label:" Country",expanded:""}},[e("b-input",{attrs:{placeholder:"Sénégal, Cameroun..."},model:{value:t.organisation.country,callback:function(a){t.$set(t.organisation,"country",a)},expression:"organisation.country"}})],1),t._v(" "),e("b-field",{attrs:{label:" City",expanded:""}},[e("b-input",{attrs:{placeholder:"Dakar, Yaoundé..."},model:{value:t.organisation.city,callback:function(a){t.$set(t.organisation,"city",a)},expression:"organisation.city"}})],1)],1),t._v(" "),e("b-field",{attrs:{label:" Category"}},[e("b-select",{attrs:{placeholder:"Select a category",icon:"person"},model:{value:t.organisation.category,callback:function(a){t.$set(t.organisation,"category",a)},expression:"organisation.category"}},[e("option",{attrs:{value:"startup"}},[t._v("Start-Up")]),t._v(" "),e("option",{attrs:{value:"incubator"}},[t._v("Incubator")]),t._v(" "),e("option",{attrs:{value:"investment"}},[t._v("Investment Fund")])])],1),t._v(" "),e("b-field",{attrs:{label:"Type of needs"}},[e("b-select",{attrs:{multiple:"","native-size":"3"},model:{value:t.organisation.needs,callback:function(a){t.$set(t.organisation,"needs",a)},expression:"organisation.needs"}},[e("option",{attrs:{value:"recruitment"}},[t._v("recruitment")]),t._v(" "),e("option",{attrs:{value:"location"}},[t._v("location")]),t._v(" "),e("option",{attrs:{value:"seed funding"}},[t._v("seed funding")])])],1),t._v(" "),e("b-field",{attrs:{label:"Type of activity"}},[e("b-select",{attrs:{placeholder:"Select the type of activity your are focused on"},model:{value:t.organisation.type,callback:function(a){t.$set(t.organisation,"type",a)},expression:"organisation.type"}},[e("option",{attrs:{value:"tech"}},[t._v("tech")]),t._v(" "),e("option",{attrs:{value:"social business"}},[t._v("social business")])])],1),t._v(" "),e("b-field",[e("button",{staticClass:"button is-primary"},[t._v("Submit information")])])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"field"},[e("div",{staticClass:"file is-warning is-boxed is-centered"},[e("label",{staticClass:"file-label"},[e("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"}}),t._v(" "),e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fa fa-cloud-upload"})]),t._v(" "),e("span",{staticClass:"file-label"},[t._v("\n                          Upload your file \n                          ")])])])])])}],i={render:n,staticRenderFns:s};a.a=i},aqdv:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"vue-map-container"},[e("div",{ref:"vue-map",staticClass:"vue-map"}),t._v(" "),e("div",{staticClass:"vue-map-hidden"},[t._t("default")],2),t._v(" "),t._t("visible")],2)},s=[],i={render:n,staticRenderFns:s};a.a=i},"bDn/":function(t,a,e){"use strict";var n=e("ywiG"),s=e("Ygbr"),i=e("VU/8"),r=i(n.a,s.a,!1,null,null,null);a.a=r.exports},bU4I:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("li",[n("div",{staticClass:"card",class:{smallcard:t.smallcard}},[n("div",{staticClass:"card-image"},["social business"===t.organisation.type?n("figure",{staticClass:"image is-3by2",class:{smallimg:t.smallimg}},[n("img",{attrs:{src:e("mx4n"),alt:"Placeholder image"}})]):t._e(),t._v(" "),"tech"===t.organisation.type?n("figure",{staticClass:"image is-3by2",class:{smallimg:t.smallimg}},[n("img",{attrs:{src:e("0fRH"),alt:"Placeholder image"}})]):t._e()]),t._v(" "),n("div",{staticClass:"card-content"},[n("div",{staticClass:"media"},[t._m(0),t._v(" "),n("div",{staticClass:"media-content",class:{smallcontent:t.smallcontent}},[n("p",{staticClass:"title is-5"},[t._v(t._s(t.organisation.name))]),t._v(" "),n("p",{staticClass:"subtitle is-7"},[t._v(t._s(t.organisation.author))])])]),t._v(" "),n("div",{staticClass:"content",class:{smallcontent:t.smallcontent}},[n("p",[t._v(t._s(t.organisation.description))]),t._v(" "),n("router-link",{staticClass:"button is-primary is-outlined is-small",attrs:{to:"/organisations/view/"+t.organisation._id}},[t._v("\n                    Let's know more\n                ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),t.smallcard?n("div",[n("b-tag",{attrs:{rounded:"",type:"is-danger is-small"}},[t._v(t._s(t.organisation.category))]),t._v(" "),n("b-tag",{attrs:{rounded:"",type:"is-warning is-small"}},[t._v(t._s(t.organisation.type))]),t._v(" "),n("b-tag",{attrs:{rounded:"",type:"is-info is-small"}},[t._v(t._s(t.organisation.country))])],1):n("div",[n("b-tag",{attrs:{rounded:"",type:"is-danger is-medium"}},[t._v(t._s(t.organisation.category))]),t._v(" "),n("b-tag",{attrs:{rounded:"",type:"is-warning is-medium"}},[t._v(t._s(t.organisation.type))]),t._v(" "),n("b-tag",{attrs:{rounded:"",type:"is-info is-medium"}},[t._v(t._s(t.organisation.country))])],1)],1)]),t._v(" "),t.editable?n("div",{staticClass:"card-footer"},[n("router-link",{staticClass:"button card-footer-item is-warning is-medium",attrs:{to:"/organisations/edit/"+t.organisation._id}},[t._v("Edit")]),t._v(" "),n("button",{staticClass:"button card-footer-item is-danger is-medium",on:{click:function(a){t.deleteOrganisation(t.organisation._id)}}},[t._v("Delete")])],1):t._e()])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"media-left"},[e("figure",{staticClass:"image is-48x48"},[e("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],i={render:n,staticRenderFns:s};a.a=i},clGp:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;return(t._self._c||a)("input",{ref:"input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value}})},s=[],i={render:n,staticRenderFns:s};a.a=i},dP0F:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("h1",{staticClass:"title"},[t._v(t._s(t.msg))]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"homecategory"},[e("div",{staticClass:"cat"},[e("a",{attrs:{href:"https://nelene.herokuapp.com/"}},[e("h1",[t._v("At a glance")])])]),t._v(" "),e("div",{staticClass:"cat"},[e("a",{attrs:{href:""}},[e("h1",[t._v("Customized")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],i={render:n,staticRenderFns:s};a.a=i},dPcg:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{attrs:{position:"is-centered"}},[t._v("Let's do some cleanup ! ")]),t._v(" "),e("organisations-list",{attrs:{organisations:t.organisations,editable:!0}},[e("organisation-card")],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},doPI:function(t,a){},"e/mw":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("organisations-list",{attrs:{organisations:t.organisations}},[e("organisation-card")],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},eocx:function(t,a,e){"use strict";function n(t){e("mrPs")}var s=e("Vi44"),i=e("BAIw"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-bc8d5232",null);a.a=c.exports},fQ3V:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"card"},[e("organisation-form"),t._v(" "),e("section")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("h1",{staticClass:"title"},[t._v("Let's create a new organisation !")]),t._v(" "),e("div",{staticClass:"trait"}),t._v(" "),e("p",[t._v("In order for the organisation page to be useful, please enter as many details as possible  ")])])}],i={render:n,staticRenderFns:s};a.a=i},fYk6:function(t,a,e){"use strict";var n=e("8hUo"),s=e("eocx");a.a={components:{OrganisationsList:s.a},data:function(){return{organisations:[],errors:[],selected:null,name:""}},methods:{deleteOrganisation:function(t){var a=this;Object(n.f)(t).then(function(){var e=a.organisations.findIndex(function(a){return a._id===t});a.organisations.splice(e,1)})}},created:function(){var t=this;Object(n.d)().then(function(a){t.organisations=a})}}},gZgQ:function(t,a){},h337:function(t,a,e){"use strict";var n=e("Pfph");a.a={data:function(){return{email:"",password:"",name:"",error:null}},methods:{signup:function(){var t=this;this.error=null,Object(n.d)({email:this.email,name:this.name,password:this.password}).then(function(){t.$router.push("/login")}).catch(function(a){t.error="Error happened during sign-up",console.error("Signup err",a)})}}}},hk8N:function(t,a){},kWpI:function(t,a,e){"use strict";a.a={data:function(){return{msg:"Let's take a look at african tech ecosystem !"}}}},knXB:function(t,a){},ktZ2:function(t,a,e){"use strict";var n=e("8hUo"),s=e("vuRK");a.a={components:{OrganisationForm:s.a},data:function(){return{errors:[],selectedOptions:[]}},methods:{addNewOrganisation:function(){var t=this;Object(n.a)(this.organisation).then(function(a){console.log("Organisation created: ",a),t.$router.push("/")})}}}},mflC:function(t,a,e){"use strict";var n=e("8hUo"),s=e("eocx"),i=e("BW/5");a.a={components:{OrganisationsList:s.a,FilterBar:i.a},props:{searched:""},data:function(){return{organisations:[],filteredOrganisations:[],errors:[],selected:null}},methods:{filter:function(){this.$emit("filter",this.filterBy(this.organisations,this.searched))}},created:function(){var t=this;Object(n.d)().then(function(a){t.organisations=a,t.filteredOrganisations=a})}}},mrPs:function(t,a){},mx4n:function(t,a,e){t.exports=e.p+"static/img/social.be26ee3.png"},nKGu:function(t,a){},nNsB:function(t,a){},naRr:function(t,a,e){"use strict";function n(t){e("WPE0")}var s=e("ktZ2"),i=e("fQ3V"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-7a938dbe",null);a.a=c.exports},oHKm:function(t,a,e){"use strict";function n(t){e("nKGu")}var s=e("h337"),i=e("Y2EH"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-a6c7e35e",null);a.a=c.exports},p9e5:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{smallcontainer:""}},[e("div",{staticClass:"splitex"},[e("div",{staticClass:"filter"},[e("filter-bar",{attrs:{organisations:t.organisations},on:{filter:function(a){t.filteredOrganisations=a}}})],1),t._v(" "),e("div",{staticClass:"left"},[e("div",{staticClass:"result"},[e("h1",[e("span",[t._v(" "+t._s(t.filteredOrganisations.length))]),t._v(" results ")])]),t._v(" "),e("organisations-list",{attrs:{organisations:t.filteredOrganisations,small:""}},[e("organisation-card",{attrs:{smallimg:"",smallcontent:""}})],1)],1),t._v(" "),e("div",{staticClass:"right"},[e("map-org",{attrs:{organisations:t.filteredOrganisations,small:""}})],1)])])},s=[],i={render:n,staticRenderFns:s};a.a=i},pZIy:function(t,a){},preG:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("osty"),s=e.n(n),i=e("clGp"),r=e("VU/8"),o=r(s.a,i.a,!1,null,null,null);a.default=o.exports},rAdw:function(t,a,e){"use strict";var n=e("8hUo"),s=e("1dQr"),i=e("BW/5"),r=e("eocx");a.a={components:{MapOrg:s.a,FilterBar:i.a,OrganisationsList:r.a},data:function(){return{center:{lat:3.319292,lng:4.4218547},searched:"",userPosition:null,zoom:4,organisations:[],filteredOrganisations:[]}},created:function(){var t=this;Object(n.d)().then(function(a){t.organisations=a,t.filteredOrganisations=a})}}},t3DY:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.organisation?n("section",[n("div",{staticClass:"banner"},[t._v("\n        "+t._s(t.organisation.name)+"\n    ")]),t._v(" "),n("div",{staticClass:"card"},[n("p",{staticClass:"title"},[t._v("Activity")]),t._v(" "),n("div",{staticClass:"trait"}),t._v(" "),n("p",{staticClass:"subtitle"},[t._v(t._s(t.organisation.description))]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"title"},[t._v("Needs")]),t._v(" "),n("div",{staticClass:"trait"}),t._v(" "),n("div",{staticClass:"card-content centered"},t._l(t.organisation.needs,function(a){return n("div",{key:a,staticClass:"need"},["recruitment"===a?n("figure",{staticClass:"image is-150x150"},[n("img",{attrs:{src:e("tai1")}})]):t._e(),t._v(" "),"location"===a?n("figure",{staticClass:"image is-150x150"},[n("img",{attrs:{src:e("Qm/T")}})]):t._e(),t._v(" "),"seed funding"===a?n("figure",{staticClass:"image is-150x150"},[n("img",{attrs:{src:e("O9BZ")}})]):t._e(),t._v(" "),n("b-tag",{staticClass:"subtitle",attrs:{rounded:"",type:"is-warning is-medium"}},[t._v("\n                        "+t._s(a)+"\n                    ")])],1)})),t._v(" "),n("br"),t._v(" "),n("button",{staticClass:"button is-primary is-medium",attrs:{"position:":"is-centered"},on:{click:function(a){t.isCardModalActive=!0}}},[t._v(" I want to help ! \n                ")]),t._v(" "),n("b-modal",{attrs:{active:t.isCardModalActive,width:640},on:{"update:active":function(a){t.isCardModalActive=a}}},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content centered"},[n("p",{staticClass:"title"},[t._v("GREAT ! ")]),t._v(" "),n("p",{staticClass:"subtitle",staticStyle:{"margin-top":"3px"}},[t._v("For that, you just need to send a message to "),n("a",{attrs:{href:"mailto:"}}),t._v(t._s(t.organisation.contact))])])])])])],1)]):t._e()},s=[],i={render:n,staticRenderFns:s};a.a=i},tMks:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"searchbar"},[e("filter-bar",{attrs:{organisations:t.organisations},on:{filter:function(a){t.filteredOrganisations=a}}})],1),t._v(" "),e("organisations-list",{attrs:{organisations:t.filteredOrganisations}},[e("organisation-card")],1),t._v(" "),e("footer",[t.$root.user?t._e():e("router-link",{staticClass:"button is-primary is-outlined is-large is-focused",attrs:{to:"/login"}},[t._v("Want to add organisations ? Let's login")]),t._v(" "),t.$root.user?e("router-link",{staticClass:"button is-primary is-outlined is-large is-focused",attrs:{to:"/organisations/add"}},[t._v("I want to add an organisation !")]):t._e()],1)],1)},s=[],i={render:n,staticRenderFns:s};a.a=i},tai1:function(t,a,e){t.exports=e.p+"static/img/rn.48918e6.png"},usXg:function(t,a,e){"use strict";function n(t){e("v0Ff")}var s=e("LEIt"),i=e("t3DY"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-275f4aac",null);a.a=c.exports},v0Ff:function(t,a){},vuRK:function(t,a,e){"use strict";function n(t){e("4Qjt")}var s=e("Q0UG"),i=e("ZqTD"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,null,null);a.a=c.exports},wjsw:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("gmap-map",{class:{map:!0,small:t.small},attrs:{center:t.center,zoom:t.zoom}},t._l(t.organisations,function(a){return a.location&&a.location.coordinates&&2===a.location.coordinates.length?e("gmap-marker",{key:a._id,attrs:{position:{lat:a.location.coordinates[1],lng:a.location.coordinates[0]}}}):t._e()}))},s=[],i={render:n,staticRenderFns:s};a.a=i},xJD8:function(t,a,e){"use strict";var n=e("Pfph");a.a={name:"app",data:function(){return{email:"",password:"",name:"",active:!1,organisations:[],isAdmin:!1,navigation:null}},created:function(){Object(n.a)(this.$root)},methods:{logout:function(){Object(n.c)(this.$root),this.$router.push("/")}}},document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var a=t.dataset.target,e=document.getElementById(a);t.classList.toggle("is-active"),e.classList.toggle("is-active")})})})},xkJr:function(t,a,e){"use strict";var n=e("Pfph");a.a={data:function(){return{email:"",password:"",name:"",error:null}},methods:{login:function(){var t=this;this.error=null,Object(n.b)(this.email,this.password,this.$root).then(function(a){a?t.$router.push("/"):t.error="Seems like you entered a wrong username/password. Try again."}).catch(function(a){t.error="Error happened during Log-in",console.error("Login error ",a)})}}}},xtaZ:function(t,a){},yFXX:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{ref:"flyaway"},[t._t("default")],2)])},s=[],i={render:n,staticRenderFns:s};a.a=i},yMA3:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("label",[e("span",{domProps:{textContent:t._s(t.label)}}),t._v(" "),e("input",{ref:"input",class:t.className,attrs:{type:"text",placeholder:t.placeholder}})])},s=[],i={render:n,staticRenderFns:s};a.a=i},ys7F:function(t,a,e){"use strict";function n(t){e("5R80")}var s=e("kWpI"),i=e("dP0F"),r=e("VU/8"),o=n,c=r(s.a,i.a,!1,o,"data-v-76d0ebca",null);c.exports},ywiG:function(t,a,e){"use strict";var n=e("8hUo");a.a={data:function(){return{organisation:{name:"",description:"",contact:"",address:"",country:"",city:"",category:"",needs:[]},errors:[],selectedOptions:[]}},methods:{editOrganisation:function(){var t=this;Object(n.b)(this.$route.params.id,this.organisation).then(function(a){t.$router.push("/organisations")})}},created:function(){var t=this;Object(n.c)(this.$route.params.id).then(function(a){t.organisation=a})}}}},["NHnr"]);
//# sourceMappingURL=app.c44a7fb1f81ab317ee4d.js.map