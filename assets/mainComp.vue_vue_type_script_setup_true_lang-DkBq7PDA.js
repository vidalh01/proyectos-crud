import{d as E,r as I,b as l,e as t,t as c,f as h,w as x,v as N,u as A,i as B,n as $,F as m,g,a as d}from"./index-kw-C2qQh.js";const F={class:"d-flex justify-content-center align-items-center",style:{height:"600px"}},V={class:"text-center"},w={class:"card p-5"},D={class:"mb-3"},G={class:"table table-bordered my-3"},M={key:0},T=["disabled","onClick"],X=["disabled","onClick"],j={key:1},z=["disabled","onClick"],L=["disabled","onClick"],S=E({__name:"mainComp",props:["title","modeEdit","xArr","borrarItem"],emits:["editarItem","agregarItem","guardarItem","cancerEdit"],setup(e,{emit:v}){const u=v;let a=I("");function b(s,o){a.value=typeof s=="string"?s:(s==null?void 0:s.nombre)??s.data.nombre,u("editarItem",s,o)}function f(){u("agregarItem",a.value),a.value=""}function k(){u("guardarItem",a.value),a.value=""}function y(){u("cancerEdit"),a.value=""}return(s,o)=>(d(),l("div",F,[t("div",null,[t("h1",V,"Bienvenido a la página "+c(e.title),1),t("div",w,[t("div",D,[o[2]||(o[2]=t("label",{for:"inputTexto",class:"form-label"},"Ingrese un nombre",-1)),x(t("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>B(a)?a.value=n:a=n),type:"text",class:"form-control",id:"inputNombre"},null,512),[[N,A(a)]])]),t("button",{onClick:o[1]||(o[1]=n=>e.modeEdit?k():f()),class:$(["btn",e.modeEdit?"btn-secondary":"btn-primary"])},c(e.modeEdit?"Guardar":"Enviar"),3),e.modeEdit?(d(),l("button",{key:0,onClick:y,class:"btn btn-danger my-1"},"Cancelar")):h("",!0)]),t("table",G,[o[3]||(o[3]=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"Nombre"),t("th",{scope:"col"},"Funciones")])],-1)),e.xArr.constructor.name=="Map"?(d(),l("tbody",M,[(d(!0),l(m,null,g(e.xArr,([n,r],i)=>(d(),l("tr",{key:i},[t("td",null,c(r.nombre)+" "+c(r==null?void 0:r.id),1),t("td",null,[t("button",{disabled:e.modeEdit,onClick:C=>b(r,i),class:"btn btn-success me-2"},"E",8,T),t("button",{disabled:e.modeEdit,onClick:C=>e.borrarItem(r,i),class:"btn btn-danger"},"X",8,X)])]))),128))])):(d(),l("tbody",j,[(d(!0),l(m,null,g(e.xArr,(n,r)=>(d(),l("tr",{key:r},[t("td",null,c(typeof n=="string"?n:n.nombre??n.data.nombre)+" "+c(n==null?void 0:n.id),1),t("td",null,[t("button",{disabled:e.modeEdit,onClick:i=>b(n,r),class:"btn btn-success me-2"},"E",8,z),t("button",{disabled:e.modeEdit,onClick:i=>e.borrarItem(n,r),class:"btn btn-danger"},"X",8,L)])]))),128))]))])])]))}});export{S as _};
