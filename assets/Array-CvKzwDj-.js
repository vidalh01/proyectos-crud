import{A as u}from"./crud_array-D3KkDY6o.js";import{_ as p}from"./mainComp.vue_vue_type_script_setup_true_lang-DkBq7PDA.js";import{d as _,r as l,c as I,u as o,a as x}from"./index-kw-C2qQh.js";const k=_({__name:"Array",setup(A){let m="Array",r=l([]),i=l(""),n=l(null),t=l(!1);function c(e){if(e===""){alert("El campo no puede estar vacío");return}u.addItem(r.value,e)}function f(e,a){u.remItem(r.value,a)}function d(e,a){i.value=r.value[a],n.value=a,t.value=!0}function s(e){n.value!==null&&(r.value[n.value]=e),t.value=!1}function v(){t.value=!1}return(e,a)=>(x(),I(p,{title:o(m),onEditarItem:d,onAgregarItem:c,onGuardarItem:s,"mode-edit":o(t),"x-arr":o(r),"borrar-item":f,onCancerEdit:v},null,8,["title","mode-edit","x-arr"]))}});export{k as default};
