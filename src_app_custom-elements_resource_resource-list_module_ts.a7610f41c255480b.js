"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([["src_app_custom-elements_resource_resource-list_module_ts"],{4994:(k,u,c)=>{c.r(u),c.d(u,{ResourceListModule:()=>O});var a=c(4666),e=c(2560),g=c(635),m=c(4),C=c(5733),f=c(8987);const h=C.bL+"resources.json";let l=(()=>{class o{constructor(t){this.http=t,this.categories=this.getCategories()}getCategories(){const t=this.http.get(h).pipe((0,g.U)(s=>function v(o){return Object.keys(o).map(r=>{const t=o[r];return{id:n(r),title:r,order:t.order,subCategories:L(t.subCategories,r)}}).sort(p)}(s)),(0,m.C)());return t.connect(),t}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(f.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();function L(o,r){return Object.keys(o).map(t=>{const s=o[t];return{id:n(t),title:t,order:s.order,resources:b(s.resources,t,r)}}).sort(p)}function b(o,r,t){return Object.keys(o).map(s=>{const i=o[s];return i.category=t,i.subCategory=r,i.id=n(s),i}).sort(d)}function p(o,r){return o.order===r.order?d(o,r):o.order>r.order?1:-1}function d(o,r){return o.title.toUpperCase()>r.title.toUpperCase()?1:-1}function n(o){return o.toLowerCase().replace(/\s+/g,"-")}var y=c(5370);function Z(o,r){if(1&o){const t=e.EpF();e.TgZ(0,"button",5),e.NdJ("click",function(){const T=e.CHM(t).$implicit,S=e.oxw();return e.KtG(S.selectCategory(T.id))}),e._uU(1),e.qZA()}if(2&o){const t=r.$implicit,s=e.oxw();e.ekj("selected",t.id==s.selectedCategory.id),e.xp6(1),e.Oqu(t.title)}}function R(o,r){if(1&o&&(e.TgZ(0,"div")(1,"div",7)(2,"a",8)(3,"h3",9),e._uU(4),e.qZA(),e.TgZ(5,"h3",10),e._uU(6),e.qZA(),e.TgZ(7,"p",11),e._uU(8),e.qZA(),e.TgZ(9,"p",12),e._uU(10),e.qZA()()()()),2&o){const t=r.$implicit;e.xp6(2),e.Q6J("href",t.url,e.LSH),e.xp6(2),e.Oqu(t.titleCn||t.title),e.xp6(2),e.Oqu(t.title),e.xp6(2),e.Oqu(t.descCn||t.desc||"\u65e0\u63cf\u8ff0"),e.xp6(2),e.Oqu(t.desc||"No Description")}}function x(o,r){if(1&o&&(e.TgZ(0,"div")(1,"h2",6),e._uU(2),e.qZA(),e.YNc(3,R,11,5,"div",4),e.qZA()),2&o){const t=r.$implicit;e.xp6(1),e.s9C("id",t.id),e.xp6(1),e.Oqu(t.title),e.xp6(1),e.Q6J("ngForOf",t.resources)}}let F=(()=>{class o{constructor(t,s){this.resourceService=t,this.locationService=s}ngOnInit(){const t=this.locationService.search().category||"";this.resourceService.categories.subscribe(s=>{this.categories=s,this.selectCategory(t)})}selectCategory(t){t=t.toLowerCase(),this.selectedCategory=this.categories.find(s=>s.id.toLowerCase()===t)||this.categories[0],this.locationService.setSearch("",{category:this.selectedCategory.id})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(y.a))},o.\u0275cmp=e.Xpm({type:o,selectors:[["aio-resource-list"]],decls:5,vars:2,consts:[[1,"center-layout"],[1,"flex-center","group-buttons"],["class","button mat-button filter-button",3,"selected","click",4,"ngFor","ngForOf"],[1,"showcase"],[4,"ngFor","ngForOf"],[1,"button","mat-button","filter-button",3,"click"],[1,"subcategory-title",3,"id"],[1,"resource-item"],["rel","noopener","target","_blank",1,"resource-row-link",3,"href"],["translation-result","on",1,"resource-name"],["translation-origin","off",1,"resource-name"],["translation-result","on",1,"resource-description"],["translation-origin","off",1,"resource-description"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Z,2,3,"button",2),e.qZA(),e.TgZ(3,"div",3),e.YNc(4,x,4,3,"div",4),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngForOf",s.categories),e.xp6(2),e.Q6J("ngForOf",null==s.selectedCategory?null:s.selectedCategory.subCategories))},dependencies:[a.sg],encapsulation:2}),o})(),O=(()=>{class o{constructor(){this.customElementComponent=F}}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[l],imports:[a.ez]}),o})()}}]);
//# sourceMappingURL=src_app_custom-elements_resource_resource-list_module_ts.a7610f41c255480b.js.map