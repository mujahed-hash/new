(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{PCNd:function(t,e,n){"use strict";n.r(e),n.d(e,"SharedModule",(function(){return F}));var o=n("ofXK"),i=n("3Pt+"),r=n("tk/3"),c=n("tyNb"),s=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-about"]],decls:4,vars:0,consts:[["routerLink","/home"]],template:function(t,e){1&t&&(s.Ob(0,"div"),s.lc(1,"we have nothing to show yet"),s.Nb(),s.Ob(2,"button",0),s.lc(3,"go home"),s.Nb())},directives:[c.b],styles:[""]}),t})(),l=(()=>{class t{constructor(t){this.http=t,this.url="http://localhost:3000/api"}getwform(t){return this.http.get(`${this.url}/${t}`)}createPost(t){return this.http.post(this.url+"/fsubmit",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),b=(()=>{class t{constructor(t,e){this.http=t,this.webService=e}getwebForms(){return this.webService.getwform("fdata")}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.a),s.Sb(l))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function m(t,e){if(1&t&&(s.Ob(0,"div",4),s.Ob(1,"div",5),s.Ob(2,"h3"),s.Ob(3,"span"),s.lc(4,"Full Name "),s.Nb(),s.lc(5),s.Nb(),s.Ob(6,"h4"),s.Ob(7,"span"),s.lc(8,"Number "),s.Nb(),s.lc(9),s.Nb(),s.Ob(10,"h4"),s.Ob(11,"span"),s.lc(12,"Email "),s.Nb(),s.lc(13),s.Nb(),s.Ob(14,"h4"),s.Ob(15,"span"),s.lc(16,"Business "),s.Nb(),s.lc(17),s.Nb(),s.Ob(18,"h4"),s.Ob(19,"span"),s.lc(20,"Description "),s.Nb(),s.lc(21),s.Nb(),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.zb(5),s.nc(": ",t.fullname,""),s.zb(4),s.nc(": ",t.number,""),s.zb(4),s.nc(": ",t.email,""),s.zb(4),s.nc(": ",t.business,""),s.zb(4),s.nc(": ",t.description,"")}}function u(t,e){if(1&t&&(s.Ob(0,"tr"),s.Ob(1,"td"),s.lc(2),s.Nb(),s.Ob(3,"td"),s.lc(4),s.Nb(),s.Ob(5,"td"),s.lc(6),s.Nb(),s.Ob(7,"td"),s.lc(8),s.Nb(),s.Nb()),2&t){const t=e.$implicit;s.zb(2),s.mc(t.id),s.zb(2),s.mc(t.firstname),s.zb(2),s.mc(t.email),s.zb(2),s.mc(t.mobile)}}let d=(()=>{class t{constructor(t,e){this.http=t,this.webService=e,this.wforms=[],this.data=[]}ngOnInit(){this.webService.getwebForms().subscribe(t=>{this.wforms=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(r.a),s.Jb(b))},t.\u0275cmp=s.Db({type:t,selectors:[["app-alldata"]],decls:20,vars:2,consts:[["routerLink","/"],["class","cDetails",4,"ngFor","ngForOf"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"cDetails"],[1,"cus"]],template:function(t,e){1&t&&(s.lc(0,"\nCustomer Requirement And Deatils\n"),s.Ob(1,"button",0),s.lc(2,"home"),s.Nb(),s.Kb(3,"br"),s.kc(4,m,22,5,"div",1),s.Ob(5,"table",2),s.Ob(6,"thead"),s.Ob(7,"tr"),s.Ob(8,"th"),s.lc(9,"ID"),s.Nb(),s.Ob(10,"th"),s.lc(11,"Name"),s.Nb(),s.Ob(12,"th"),s.lc(13,"Email"),s.Nb(),s.Ob(14,"th"),s.lc(15,"Phone"),s.Nb(),s.Ob(16,"th"),s.lc(17,"Actions"),s.Nb(),s.Nb(),s.Nb(),s.Ob(18,"tbody"),s.kc(19,u,9,4,"tr",3),s.Nb(),s.Nb()),2&t&&(s.zb(4),s.cc("ngForOf",e.wforms.reverse()),s.zb(15),s.cc("ngForOf",e.data[0]))},directives:[c.b,o.s],styles:[".cDetails[_ngcontent-%COMP%]{display:inline-block;width:22rem}.cDetails[_ngcontent-%COMP%], .cus[_ngcontent-%COMP%]{height:-webkit-max-content;height:max-content}.cus[_ngcontent-%COMP%]{display:inline-grid;margin:2rem;width:20rem;background-color:#1a508b;color:#fff;padding:8px;border-radius:8px}.cus[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .cus[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{width:100%;overflow:hidden;overflow-x:scroll}.cus[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background-color:#fff;padding:5px;border-radius:8px;color:#0d335d;margin-right:4px}"]}),t})();class g{}let h=(()=>{class t{constructor(t){this.http=t,this.baseUrl="http://localhost:8000/customers"}getCustomer(t){return this.http.get(`${this.baseUrl}/${t}`)}createCustomer(t){return this.http.post(this.baseUrl+"/",t)}updateCustomer(t,e){return this.http.put(`${this.baseUrl}/${t}`,e)}deleteCustomer(t){return this.http.delete(`${this.baseUrl}/${t}`)}getCustomersList(){return this.http.get(this.baseUrl+"/")}getCustomersByAge(t){return this.http.get(`${this.baseUrl}/age/${t}/`)}deleteAll(){return this.http.delete(this.baseUrl+"/")}}return t.\u0275fac=function(e){return new(e||t)(s.Sb(r.a))},t.\u0275prov=s.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),f=(()=>{class t{constructor(t){this.customerService=t,this.customer=new g,this.submitted=!1}ngOnInit(){}newCustomer(){this.submitted=!1,this.customer=new g}save(){this.customerService.createCustomer(this.customer).subscribe(t=>{console.log(t),this.submitted=!0},t=>console.log(t)),this.customer=new g}onSubmit(){this.save()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(h))},t.\u0275cmp=s.Db({type:t,selectors:[["app-creat-customer"]],decls:19,vars:4,consts:[[2,"width","300px",3,"hidden"],[3,"ngSubmit"],[1,"form-group"],["for","name"],["type","text","id","name","required","","name","name",1,"form-control",3,"ngModel","ngModelChange"],["for","age"],["type","text","id","age","required","","name","age",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"btn","btn-success"],[3,"hidden"],[1,"btn","btn-success",3,"click"]],template:function(t,e){1&t&&(s.Ob(0,"h3"),s.lc(1,"Create Customer"),s.Nb(),s.Ob(2,"div",0),s.Ob(3,"form",1),s.Vb("ngSubmit",(function(){return e.onSubmit()})),s.Ob(4,"div",2),s.Ob(5,"label",3),s.lc(6,"Name"),s.Nb(),s.Ob(7,"input",4),s.Vb("ngModelChange",(function(t){return e.customer.name=t})),s.Nb(),s.Nb(),s.Ob(8,"div",2),s.Ob(9,"label",5),s.lc(10,"Age"),s.Nb(),s.Ob(11,"input",6),s.Vb("ngModelChange",(function(t){return e.customer.age=t})),s.Nb(),s.Nb(),s.Ob(12,"button",7),s.lc(13,"Submit"),s.Nb(),s.Nb(),s.Nb(),s.Ob(14,"div",8),s.Ob(15,"h4"),s.lc(16,"You submitted successfully!"),s.Nb(),s.Ob(17,"button",9),s.Vb("click",(function(){return e.newCustomer()})),s.lc(18,"Add"),s.Nb(),s.Nb()),2&t&&(s.zb(2),s.cc("hidden",e.submitted),s.zb(5),s.cc("ngModel",e.customer.name),s.zb(4),s.cc("ngModel",e.customer.age),s.zb(3),s.cc("hidden",!e.submitted))},directives:[i.F,i.q,i.r,i.c,i.A,i.p,i.s],styles:[""]}),t})();function p(t,e){if(1&t&&(s.Ob(0,"div",2),s.Kb(1,"customer-details",3),s.Nb()),2&t){const t=e.$implicit;s.zb(1),s.cc("customer",t)}}let O=(()=>{class t{constructor(t){this.customerService=t}ngOnInit(){this.reloadData()}deleteCustomers(){this.customerService.deleteAll().subscribe(t=>{console.log(t),this.reloadData()},t=>console.log("ERROR: "+t))}reloadData(){this.customers=this.customerService.getCustomersList()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(h))},t.\u0275cmp=s.Db({type:t,selectors:[["app-customer-list"]],decls:7,vars:3,consts:[["style","width: 300px;",4,"ngFor","ngForOf"],["type","button",1,"button","btn-danger",3,"click"],[2,"width","300px"],[3,"customer"]],template:function(t,e){1&t&&(s.Ob(0,"h1"),s.lc(1,"Customers"),s.Nb(),s.kc(2,p,2,1,"div",0),s.Yb(3,"async"),s.Ob(4,"div"),s.Ob(5,"button",1),s.Vb("click",(function(){return e.deleteCustomers()})),s.lc(6,"Delete All"),s.Nb(),s.Nb()),2&t&&(s.zb(2),s.cc("ngForOf",s.Zb(3,1,e.customers)))},styles:[""]}),t})(),w=(()=>{class t{constructor(t){this.dataService=t}ngOnInit(){this.age=0}searchCustomers(){this.customers=[],this.dataService.getCustomersByAge(this.age).subscribe(t=>this.customers=t)}onSubmit(){this.searchCustomers()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(h))},t.\u0275cmp=s.Db({type:t,selectors:[["search-customers"]],decls:0,vars:0,template:function(t,e){},styles:[""]}),t})();function C(t,e){1&t&&(s.Ob(0,"div",13),s.Ob(1,"h2"),s.lc(2,"Your Response Has been Submitted Successfully, Please bear with us We will contact you soon."),s.Nb(),s.Nb())}let M=(()=>{class t{constructor(t,e,n,o,i){this.webService=t,this.profileService=e,this.formBuilder=n,this.router=o,this.http=i,this.submitted=!1,this.formPost={fullname:"",email:"",number:"",business:"",description:""},this.formList=[]}get f(){return this.registerForm.controls}ngOnInit(){this.registerForm=this.formBuilder.group({name:["",i.D.required],phone:["",i.D.required],email:["",[i.D.required,i.D.email]]}),this.form=new i.j({fullname:new i.g(null,i.D.required),email:new i.g(null),number:new i.g(null),business:new i.g(null),description:new i.g(null)})}onFormSubmit(t){this.profileService.createPost({fullname:this.formPost.fullname,email:this.formPost.email,number:this.formPost.number,business:this.formPost.business,description:this.formPost.description}).subscribe(t=>{this.formList.push(t),this.submitted=!this.submitted},t=>console.log(t)),this.formPost={fullname:"",email:"",number:"",business:"",description:""},this.form.reset()}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(b),s.Jb(l),s.Jb(i.f),s.Jb(c.a),s.Jb(r.a))},t.\u0275cmp=s.Db({type:t,selectors:[["app-webform"]],decls:20,vars:6,consts:[[1,"logo"],["routerLink","/home","src","../../../assets/clogo.png","alt",""],["class","response",4,"ngIf"],[1,"form"],[1,"mform",3,"submit"],["postForm","ngForm"],[1,"heading"],["name","fullname","type","text","placeholder","Full Name","required","",3,"ngModel","ngModelChange"],["name","number","type","text","placeholder","number","required","",3,"ngModel","ngModelChange"],["name","email","type","email","placeholder","email","required","",3,"ngModel","ngModelChange"],["name","business","type","text","placeholder","Business Name","required","",3,"ngModel","ngModelChange"],["name","description","placeholder","Description","id","","cols","87","rows","15",3,"ngModel","ngModelChange"],["type","submit",3,"disabled"],[1,"response"]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Kb(1,"img",1),s.Nb(),s.kc(2,C,3,0,"div",2),s.Kb(3,"br"),s.Ob(4,"div",3),s.Ob(5,"form",4,5),s.Vb("submit",(function(){return e.onFormSubmit(e.f)})),s.Ob(7,"h2",6),s.lc(8,"PLEASE FILL THE DETAIL BELOW, WE WILL REACH YOU BACK SHORTLY FOR YOUR QUERIES. "),s.Nb(),s.Kb(9,"br"),s.Ob(10,"input",7),s.Vb("ngModelChange",(function(t){return e.formPost.fullname=t})),s.Nb(),s.Ob(11,"input",8),s.Vb("ngModelChange",(function(t){return e.formPost.number=t})),s.Nb(),s.Kb(12,"br"),s.Ob(13,"input",9),s.Vb("ngModelChange",(function(t){return e.formPost.email=t})),s.Nb(),s.Ob(14,"input",10),s.Vb("ngModelChange",(function(t){return e.formPost.business=t})),s.Nb(),s.Kb(15,"br"),s.Ob(16,"textarea",11),s.Vb("ngModelChange",(function(t){return e.formPost.description=t})),s.Nb(),s.Kb(17,"br"),s.Ob(18,"button",12),s.lc(19,"Submit"),s.Nb(),s.Nb(),s.Nb()),2&t&&(s.zb(2),s.cc("ngIf",e.submitted),s.zb(8),s.cc("ngModel",e.formPost.fullname),s.zb(1),s.cc("ngModel",e.formPost.number),s.zb(2),s.cc("ngModel",e.formPost.email),s.zb(1),s.cc("ngModel",e.formPost.business),s.zb(2),s.cc("ngModel",e.formPost.description))},directives:[c.b,o.t,i.F,i.q,i.r,i.c,i.A,i.p,i.s],styles:["body[_ngcontent-%COMP%]{margin:0}.response[_ngcontent-%COMP%]{position:relative;top:-4rem;text-align:center;color:green;padding:10px;box-shadow:2px grey}.form[_ngcontent-%COMP%]{display:flex;justify-content:center;top:-7rem;width:100%;height:-webkit-max-content;height:max-content}.heading[_ngcontent-%COMP%]{color:#000}.top[_ngcontent-%COMP%]{position:relative;text-align:center;top:10rem}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:5px;width:19.5rem;height:3rem;margin:4px}.form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{padding:5px;margin:4.6px;border-radius:4px;left:10%}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:none;position:relative}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:5px;background-color:#fff;color:#000;padding:8px;width:14rem;height:2.4rem;left:34%;top:4%;margin:5px 5px 2rem;display:block;justify-content:center}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{box-shadow:0 5px 15px rgba(0,0,0,.35);background-color:#00f;color:#fff;transition:.5s}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20rem;height:13rem;position:relative;top:-2.3rem;left:5%}.logo[_ngcontent-%COMP%]{width:-webkit-max-content;width:max-content}.mform[_ngcontent-%COMP%]{box-shadow:0 20px 30px -10px #202020;color:#fff;padding:2rem;display:inline-block;justify-content:center;background-color:#ebecf0}.mform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;color:grey;border-radius:8px;position:relative;left:10%}@media (orientation:Portrait){.mform[_ngcontent-%COMP%]{width:20rem}.mform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{position:relative;margin-left:-2rem;width:19rem;padding:4px}.mform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:-.7rem;background-color:#00f;color:#fff;width:7rem}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:15rem}}@media screen and (max-width:360px){.form[_ngcontent-%COMP%]{position:relative;width:11rem;display:block;justify-content:center}.mform[_ngcontent-%COMP%]{margin-left:1.2rem}.mform[_ngcontent-%COMP%], .mform[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:16rem}}"]}),t})();var P=n("Wp6s");let y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["app-whyus"]],decls:38,vars:0,consts:[["lang","en"],["charset","UTF-8"],["http-equiv","X-UA-Compatible","content","IE=edge"],["name","viewport","content","width=device-width, initial-scale=1.0"],["routerLink","/home",1,"material-icons","x"],[1,"Main"],[1,"tech"],[1,"tStuff"],[1,"tm"],["src","../../../assets/ang.png","alt",""],["src","../../../assets/Nodejs.jpg","alt",""],["src","../../../assets/ex.jpg","alt",""],["src","../../../assets/mongo2.jpg","alt",""],["src","../../../assets/li2.png","alt",""],["src","https://img.icons8.com/color/48/000000/javascript.png"],["src","https://img.icons8.com/color/48/000000/adobe-photoshop.png"],["src","https://img.icons8.com/color/50/ffffff/html-5.png"],["src","https://img.icons8.com/color/48/ffffff/css3.png"],[1,"why"]],template:function(t,e){1&t&&(s.Ob(0,"html",0),s.Ob(1,"head"),s.Kb(2,"meta",1),s.Kb(3,"meta",2),s.Kb(4,"meta",3),s.Ob(5,"title"),s.lc(6,"Document"),s.Nb(),s.Nb(),s.Ob(7,"body"),s.Ob(8,"span",4),s.lc(9," close "),s.Nb(),s.Ob(10,"mat-card",5),s.Ob(11,"div",6),s.Ob(12,"h1"),s.lc(13,"Techonlogies Used"),s.Nb(),s.Ob(14,"mat-card",7),s.Ob(15,"div",8),s.Kb(16,"img",9),s.Kb(17,"img",10),s.Kb(18,"img",11),s.Kb(19,"img",12),s.Kb(20,"img",13),s.Kb(21,"img",14),s.Kb(22,"img",15),s.Kb(23,"img",16),s.Kb(24,"img",17),s.Nb(),s.Nb(),s.Nb(),s.Ob(25,"div",18),s.Ob(26,"h1"),s.lc(27,"Why us?"),s.Nb(),s.Ob(28,"p"),s.lc(29," Cyber force builds most highly scalable web apps using the Most popular and latest web technologies for instance angular Framework used for frontend, developed by Google and also used in building popular websites like "),s.Kb(30,"br"),s.lc(31," Netflix, Flipkart, Google itself, YouTube, and so on. "),s.Kb(32,"br"),s.lc(33," So one thing is clear adopting the technologies used in the world\u2019s highest traffic consuming websites/ web apps on the Internet is a wise choice to give greater flexibility to your web apps/ website. "),s.Kb(34,"br"),s.lc(35," Not just this, For the backend we use nodejs it is the library of Javascript that uses the MongoDB database, If you go further and search about this, you will find how swiftly this database manages shit ton data with no errors caused. "),s.Kb(36,"br"),s.lc(37," So, In the combination of these technologies, a strong website/web app is formed with tough security. However, These are not the only things we are limited to, we have a lot to serve you with quite a few more services, just let us know your requirement by clicking on the service(s) you need, available in the service section, fill out the form correctly according to your need And we will get in touch with you."),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb())},directives:[c.b,P.a],styles:['@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap");body[_ngcontent-%COMP%]{z-index:0;height:-webkit-max-content;height:max-content}.x[_ngcontent-%COMP%]{position:fixed;color:red;background-color:rgba(0,0,0,.8);padding:.4rem;border-radius:100%;cursor:pointer;font-weight:bolder;margin-left:2rem;margin-top:2rem;z-index:1}.Main[_ngcontent-%COMP%]{width:100%;box-shadow:none;border:none;background-image:url(work.e30728f492af495f0213.jpg);display:flex;height:100%;background-size:cover}.Main[_ngcontent-%COMP%], .why[_ngcontent-%COMP%]{margin:0;justify-content:center}.why[_ngcontent-%COMP%]{font-family:Titillium Web,sans-serif;color:#fff;text-align:center;display:block;float:right;width:40%;height:-webkit-max-content;height:max-content;padding:.8rem 1.8rem .8rem .8rem;background-color:rgba(0,0,0,.8);left:-4%}.why[_ngcontent-%COMP%], .why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative}.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:123%;line-height:2rem;font-family:Staatliches,cursive;left:2%}.why[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Black Ops One,cursive;padding:1.4rem;font-size:2rem;-webkit-text-decoration:underline red;text-decoration:underline red;text-underline-offset:.4rem}.tech[_ngcontent-%COMP%]{width:48%}.tech[_ngcontent-%COMP%], .tStuff[_ngcontent-%COMP%]{position:relative}.tStuff[_ngcontent-%COMP%]{background-color:#000;height:-webkit-max-content;height:max-content;width:45%;top:20%;left:8%;border-radius:100%;background-image:none;justify-content:center;z-index:0;overflow-x:hidden;box-shadow:0 0 17px #000;animation:pulsate 2s ease-in-out infinite;padding:0}.tech[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#fff;position:relative;top:15%;left:12%}@keyframes pulsate{0%{box-shadow:0 0 0 0 rgba(0,0,0,.7),0 0 0 0 rgba(17,15,15,.7)}40%{box-shadow:0 0 0 30px rgba(255,0,64,0),0 0 0 0 rgba(39,32,34,.7)}80%{box-shadow:0 0 0 30px rgba(255,0,64,0),0 0 0 30px rgba(255,0,64,0)}to{box-shadow:0 0 0 0 rgba(255,0,64,0),0 0 0 30px rgba(255,0,64,0)}}.tm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{position:relative;display:inline-block;width:3rem;height:3rem;background-color:#fff;margin:1rem;transition:.4s ease-in;left:2%;animation:slide 28s linear infinite;transition:.5s linear;padding:5px}.tm[_ngcontent-%COMP%], .tm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:100%;overflow:hidden}.tm[_ngcontent-%COMP%]{z-index:-1;width:100%}@keyframes slide{0%{transform:translateX(0)}50%{transform:translateX(calc(-50px * 1))}90%{transform:translateX(calc(65px *1))}to{transform:none;transition:31s ease-in-out}}@media (orientation:portrait){.Main[_ngcontent-%COMP%]{display:block}.Main[_ngcontent-%COMP%], .tStuff[_ngcontent-%COMP%]{height:-webkit-max-content;height:max-content}.tStuff[_ngcontent-%COMP%]{width:93%;left:5%;margin-bottom:1rem}.why[_ngcontent-%COMP%]{width:100%;left:3.4%;text-align:center;display:grid;justify-items:center}.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%}.tech[_ngcontent-%COMP%]{width:25rem;display:grid;justify-items:center}.tm[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block}}@media screen and (max-width:1024px){.Main[_ngcontent-%COMP%]{display:grid;text-align:center;justify-items:center}.tStuff[_ngcontent-%COMP%]{height:-webkit-max-content;height:max-content;left:16%;margin-bottom:10rem;width:61%}.tech[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .why[_ngcontent-%COMP%]{left:0}.why[_ngcontent-%COMP%]{overflow-y:hidden}.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{position:relative;left:-2%}}@media screen and (max-width:896px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:1%}.tStuff[_ngcontent-%COMP%]{width:65%}}@media screen and (max-width:834px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:-1%}.tStuff[_ngcontent-%COMP%]{width:75%;left:0}}@media screen and (max-width:846px){.tStuff[_ngcontent-%COMP%]{width:75%}}@media screen and (max-width:812px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:1%}.tStuff[_ngcontent-%COMP%]{width:75%;left:5%}}@media screen and (max-width:768px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:-1%}.tStuff[_ngcontent-%COMP%]{width:80%;left:5%}}@media screen and (max-width:736px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{left:1.8%}.tStuff[_ngcontent-%COMP%]{width:85%;left:5%}}@media screen and (max-width:667px){.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:100%;left:2%}}@media screen and (max-width:414px){.tech[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .tStuff[_ngcontent-%COMP%]{left:-1rem}.tStuff[_ngcontent-%COMP%]{width:72%}.why[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{width:90%;left:-.6rem}}@media screen and (max-width:384px){.tStuff[_ngcontent-%COMP%]{width:70%}}@media screen and (max-width:320px){.tStuff[_ngcontent-%COMP%]{width:80%}}']}),t})();const _=[{path:"webdev/req",component:M},{path:"c/w",component:d},{path:"about",component:a},{path:"customer",component:O},{path:"add",component:f},{path:"findbyage",component:w},{path:"whyus",component:y}];let x=(()=>{class t{}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(_)],c.e]}),t})();function v(t,e){if(1&t){const t=s.Pb();s.Ob(0,"span",3),s.Vb("click",(function(){return s.ec(t),s.Xb(2).updateActive(!1)})),s.lc(1,"Inactive"),s.Nb()}}function N(t,e){if(1&t){const t=s.Pb();s.Ob(0,"span",3),s.Vb("click",(function(){return s.ec(t),s.Xb(2).updateActive(!0)})),s.lc(1,"Active"),s.Nb()}}function k(t,e){if(1&t){const t=s.Pb();s.Ob(0,"div"),s.Ob(1,"div"),s.Ob(2,"label"),s.lc(3,"Name: "),s.Nb(),s.lc(4),s.Nb(),s.Ob(5,"div"),s.Ob(6,"label"),s.lc(7,"Age: "),s.Nb(),s.lc(8),s.Nb(),s.Ob(9,"div"),s.Ob(10,"label"),s.lc(11,"Active: "),s.Nb(),s.lc(12),s.Nb(),s.kc(13,v,2,0,"span",1),s.kc(14,N,2,0,"span",1),s.Ob(15,"span",2),s.Vb("click",(function(){return s.ec(t),s.Xb().deleteCustomer()})),s.lc(16,"Delete"),s.Nb(),s.Kb(17,"hr"),s.Nb()}if(2&t){const t=s.Xb();s.zb(4),s.nc(" ",t.customer.name," "),s.zb(4),s.nc(" ",t.customer.age," "),s.zb(4),s.nc(" ",t.customer.active," "),s.zb(1),s.cc("ngIf",t.customer.active),s.zb(1),s.cc("ngIf",!t.customer.active)}}let S=(()=>{class t{constructor(t,e){this.customerService=t,this.listComponent=e}ngOnInit(){}updateActive(t){this.customerService.updateCustomer(this.customer.id,{name:this.customer.name,age:this.customer.age,active:t}).subscribe(t=>{console.log(t),this.customer=t},t=>console.log(t))}deleteCustomer(){this.customerService.deleteCustomer(this.customer.id).subscribe(t=>{console.log(t),this.listComponent.reloadData()},t=>console.log(t))}}return t.\u0275fac=function(e){return new(e||t)(s.Jb(h),s.Jb(O))},t.\u0275cmp=s.Db({type:t,selectors:[["customer-details"]],inputs:{customer:"customer"},decls:1,vars:1,consts:[[4,"ngIf"],["class","button is-small btn-primary",3,"click",4,"ngIf"],[1,"button","is-small","btn-danger",3,"click"],[1,"button","is-small","btn-primary",3,"click"]],template:function(t,e){1&t&&s.kc(0,k,18,5,"div",0),2&t&&s.cc("ngIf",e.customer)},directives:[o.t],styles:[""]}),t})();var z=n("cH1L");let F=(()=>{class t{constructor(){console.log("form module works")}}return t.\u0275mod=s.Hb({type:t}),t.\u0275inj=s.Gb({factory:function(e){return new(e||t)},imports:[[o.c,x,r.b,i.m,i.z,P.j]]}),t})();s.gc(O,[o.q,o.r,o.s,o.t,o.A,o.w,o.x,o.y,o.z,o.u,o.v,c.f,c.b,c.d,c.c,c.g,i.F,i.u,i.E,i.c,i.v,i.y,i.a,i.B,i.C,i.x,i.p,i.q,i.A,i.o,i.n,i.w,i.b,i.d,i.s,i.t,i.r,i.h,i.k,i.i,i.l,i.e,P.a,P.f,P.n,P.d,P.m,P.l,P.b,P.e,P.k,P.i,P.h,P.g,P.o,P.c,z.b,M,d,a,f,S,O,w,y],[o.b,o.G,o.p,o.k,o.E,o.g,o.C,o.F,o.d,o.f,o.i,o.j,o.l])}}]);