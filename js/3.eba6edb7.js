(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{attrs:{elevated:""}},[a("q-toolbar",[a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("q-toolbar-title",[e._v("\n        Accuweather Quasar App\n      ")])],1)],1),a("q-drawer",{attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}}),e._l(e.essentialLinks,(function(t){return a("EssentialLink",e._b({key:t.title},"EssentialLink",t,!1))}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},i=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-item",{attrs:{clickable:"",tag:"a",target:"_self",to:e.link}},[e.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:e.icon}})],1):e._e(),a("q-item-section",[a("q-item-label",[e._v(e._s(e.title))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n      "+e._s(e.caption)+"\n    ")])],1)],1)},l=[],o={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},s=o,c=a("2877"),u=a("66e5"),p=a("4074"),b=a("0016"),m=a("0170"),f=a("eebe"),d=a.n(f),k=Object(c["a"])(s,r,l,!1,null,null,null),w=k.exports;d()(k,"components",{QItem:u["a"],QItemSection:p["a"],QIcon:b["a"],QItemLabel:m["a"]});const q=[{title:"Home",caption:"Home",icon:"home",link:"/"},{title:"Otro",caption:"Otro",icon:"backup",link:"otro"},{title:"About",caption:"About",icon:"person",link:"about"}];var Q={name:"MainLayout",components:{EssentialLink:w},data(){return{leftDrawerOpen:!1,essentialLinks:q}}},v=Q,_=a("4d5a"),L=a("e359"),g=a("65c6"),y=a("9c40"),O=a("6ac5"),h=a("9404"),D=a("1c1c"),E=a("09e3"),I=Object(c["a"])(v,n,i,!1,null,null,null);t["default"]=I.exports;d()(I,"components",{QLayout:_["a"],QHeader:L["a"],QToolbar:g["a"],QBtn:y["a"],QToolbarTitle:O["a"],QDrawer:h["a"],QList:D["a"],QItemLabel:m["a"],QPageContainer:E["a"]})}}]);