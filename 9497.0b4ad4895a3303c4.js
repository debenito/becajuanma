"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9497],{9497:(P,c,t)=>{t.r(c),t.d(c,{TabsPageModule:()=>T});var d=t(5035),m=t(6895),n=t(433),a=t(1407),u=t(7749),r=t(7942),l=t(8256);const g=[{path:"tabs",component:r.D,children:[{path:"home",loadChildren:()=>t.e(5549).then(t.bind(t,5549)).then(o=>o.HomeModule)},{path:"",redirectTo:"tabs/home",pathMatch:"full"}]},{path:"admin",component:r.D,canActivateChild:[u.N],data:{roles:["Admin"]},children:[{path:"registro",loadChildren:()=>t.e(9560).then(t.bind(t,9560)).then(o=>o.RegistroPageModule)}]},{path:"",redirectTo:"/tabs/home",pathMatch:"full"}];let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[a.Bz.forChild(g)]}),o})(),T=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[d.Pc,m.ez,n.u5,h]}),o})()},7942:(P,c,t)=>{t.d(c,{D:()=>T});var d=t(655),m=t(7326),n=t(8256),a=t(5035),u=t(7749),r=t(6895);function l(o,i){1&o&&(n.TgZ(0,"ion-item",14),n._uU(1,"Registro usuarios"),n.qZA())}const g=function(o,i){return{activar:o,ocultar:i}},h=function(o,i){return{activarTab:o,ocultarTab:i}};let T=(()=>{class o{constructor(e,s){this.modalCtrl=e,this.service=s,this.message="This modal example uses the modalController to present and dismiss modals.",this.scroll=!1,this.tabs=!1,this.roleAdmin=!1}ngOnInit(){this.roleAdmin=this.service.isRoleAdmin()}openModal(){return(0,d.mG)(this,void 0,void 0,function*(){const e=yield this.modalCtrl.create({component:m.d});e.present();const{data:s,role:f}=yield e.onWillDismiss();"confirm"===f&&(this.message=`Hello, ${s}!`)})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(a.IN),n.Y36(u.N))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-tabs"]],decls:28,vars:9,consts:[["contentId","main-content"],[1,"ion-padding"],["href","/tabs/home"],["href","/admin/registro",4,"ngIf"],["id","main-content",1,"ion-page"],[3,"ngClass"],["slot","start"],["slot","end"],["id","open-modal","expand","block",3,"click"],["name","person-outline"],[1,"ion-text-center"],["slot","bottom",3,"ngClass"],["tab","home"],["name","triangle"],["href","/admin/registro"]],template:function(e,s){1&e&&(n.TgZ(0,"ion-menu",0)(1,"ion-header")(2,"ion-toolbar")(3,"ion-title"),n._uU(4,"Menu"),n.qZA()()(),n.TgZ(5,"ion-content",1)(6,"ion-list")(7,"ion-item",2),n._uU(8,"Beca de Juanma"),n.qZA(),n.YNc(9,l,2,0,"ion-item",3),n.qZA()()(),n.TgZ(10,"div",4)(11,"ion-header",5)(12,"ion-toolbar")(13,"ion-buttons",6),n._UZ(14,"ion-menu-button"),n.qZA(),n.TgZ(15,"ion-buttons",7)(16,"ion-button",8),n.NdJ("click",function(){return s.openModal()}),n._UZ(17,"ion-icon",9),n._uU(18,"Acceder "),n.qZA()(),n.TgZ(19,"ion-title",10),n._uU(20,"Beca Juanma "),n.qZA(),n._UZ(21,"ion-icon"),n.qZA()(),n.TgZ(22,"ion-tabs")(23,"ion-tab-bar",11)(24,"ion-tab-button",12),n._UZ(25,"ion-icon",13),n.TgZ(26,"ion-label"),n._uU(27,"Home"),n.qZA()()()()()),2&e&&(n.xp6(9),n.Q6J("ngIf",s.roleAdmin),n.xp6(2),n.Q6J("ngClass",n.WLB(3,g,!s.scroll,s.scroll)),n.xp6(12),n.Q6J("ngClass",n.WLB(6,h,!s.tabs,s.tabs)))},dependencies:[a.YG,a.Sm,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.z0,a.fG,a.yq,a.ZU,a.wd,a.sr,a.UN,r.mk,r.O5],styles:[".ocultar[_ngcontent-%COMP%]{z-index:0}.activar[_ngcontent-%COMP%]{z-index:10}.ocultarTab[_ngcontent-%COMP%]{display:none}.activarTab[_ngcontent-%COMP%]{display:inherit}"]}),o})()}}]);