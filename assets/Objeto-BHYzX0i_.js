import{d as C,r as i,c as d,a as e,b as x,w as I,v as E,u as a,i as B,n as N,t as b,F as h,e as j,f as c}from"./index-DY73x1L2.js";import{c as v}from"./crud_array-Cx1UgOL5.js";const F={class:"d-flex justify-content-center align-items-center vh-100"},T={class:"card p-5"},V={class:"mb-3"},w={class:"table table-bordered my-3"},D=["disabled","onClick"],G=["disabled","onClick"],A=C({__name:"Objeto",setup(O){let o=i([]),t=i(""),u=i(null),n=i(!1);function f(){let s={nombre:t.value};if(t.value===""){alert("El campo no puede estar vacío");return}v.addItem(o.value,s),t.value=""}function p(s){v.remItem(o.value,s)}function y(s){t.value=o.value[s].nombre,u.value=s,n.value=!0}function _(){u.value!==null&&(o.value[u.value].nombre=t.value),n.value=!1,u.value=null}function g(){n.value=!1,t.value=""}return(s,l)=>(c(),d("div",F,[e("div",null,[l[4]||(l[4]=e("h1",{class:"text-center"},"Bienvenido a la página Objetos",-1)),e("div",T,[e("div",V,[l[2]||(l[2]=e("label",{for:"inputTexto",class:"form-label"},"Ingrese un nombre",-1)),I(e("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>B(t)?t.value=r:t=r),type:"text",class:"form-control",id:"inputTexto"},null,512),[[E,a(t)]])]),e("button",{onClick:l[1]||(l[1]=r=>a(n)?_():f()),class:N(["btn",a(n)?"btn-secondary":"btn-primary"])},b(a(n)?"Guardar":"Enviar"),3),a(n)?(c(),d("button",{key:0,onClick:g,class:"btn btn-danger my-1"},"Cancelar")):x("",!0)]),e("table",w,[l[3]||(l[3]=e("thead",null,[e("tr",null,[e("th",{scope:"col"},"Nombre"),e("th",{scope:"col"},"Funciones")])],-1)),e("tbody",null,[(c(!0),d(h,null,j(a(o),(r,m)=>(c(),d("tr",{key:m},[e("td",null,b(r.nombre),1),e("td",null,[e("button",{disabled:a(n),onClick:k=>y(m),class:"btn btn-success me-2"},"E",8,D),e("button",{disabled:a(n),onClick:k=>p(m),class:"btn btn-danger"},"X",8,G)])]))),128))])])])]))}});export{A as default};
