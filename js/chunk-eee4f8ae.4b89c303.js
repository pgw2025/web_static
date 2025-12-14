(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-eee4f8ae"],{
/***/"98aa":
/***/function(t,i,a){
// extracted by mini-css-extract-plugin
/***/},
/***/bb0c:
/***/function(t,i,a){"use strict";
/* harmony import */a("98aa");
/* harmony import */},
/***/ef6a:
/***/function(t,i,a){"use strict";
// ESM COMPAT FLAG
a.r(i);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
a("a4d3"),a("e01a"),a("b0c0");
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var e=a("5530"),s=(a("14d9"),a("456a")),n=a("028b"),o=a("7424"),d=a("b775"),l=a("2f62"),u={name:"UserDisplayModelList",i18n:a("89fe"),data:function(){return{editIndex:0,isEditStatus:0,loading:!1,uploadDisPlayUrl:o.DISPLAYIMAGEUPLOAD,visible:!1,listIndex:-1,pagination:{hideOnSinglePage:!0,showQuickJumper:!0,pageSize:4},modelList:[]}},components:{ProjectLayout:n.a},computed:Object(e.a)({},Object(l.e)("setting",["isMobile"])),mounted:function(){},activated:function(){},created:function(){this.getModelList()},watch:{$route:function(){this.modelList=[],this.getModelList()}},methods:{GoToRun:function(t){this.$router.push("/AppRun/"+t)},getModelList:function(){this.modelList=[];var t=this,i={uuid:this.$route.params.uuid};this.loading=!0,Object(s.i)(i).then((function(i){if(null!=i.data.list)if(i.data.list.length>1)for(var a=0;a<i.data.list.length;a++){var e={};e.name=i.data.list[a].name,e.description=i.data.list[a].description,e.uuid=i.data.list[a].displayUid,""==i.data.list[a].DisplayImage?e.DisplayImage="":e.DisplayImage=i.data.list[a].DisplayImage,t.modelList.push(e),e={}}else 1==i.data.list.length&&(Object(d.h)({token:i.data.list[0].project_uuid},d.a.AUTH1),t.$router.push("/AppRun/"+i.data.list[0].displayUid));t.loading=!1}))}}},r=(a("bb0c"),a("2877")),c=Object(r.a)(u,(function(){var t=this,i=t._self._c;return i("project-layout",[i("div",{staticClass:"card-list"},[i("a-row",t._l(t.modelList,(function(a,e){return i("a-col",{key:e,attrs:{span:t.isMobile?24:6},on:{click:function(i){return t.GoToRun(a.uuid)}}},[i("a-card",{staticStyle:{width:"300px","border-radius":"2px 2px 0 0","margin-bottom":"20px"},attrs:{id:"displayCard",hoverable:""},scopedSlots:t._u([{key:"cover",fn:function(){return[i("img",{staticStyle:{width:"298px",height:"220px",cursor:"pointer"},attrs:{src:""==a.DisplayImage?"/static/images/pcDefaultCover.jpg":a.DisplayImage}})]},proxy:!0}],null,!0)},[i("a-card-meta",{attrs:{title:a.name,description:a.description}})],1)],1)})),1)],1)])}),[],!1,null,"275cdde0",null)
/* harmony default export */;i.default=c.exports}}]);