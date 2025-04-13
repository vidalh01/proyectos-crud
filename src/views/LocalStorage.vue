<script setup lang="ts">
import MainComp from '../components/mainComp.vue';
import { LCS } from '../class/lib_localstorage';
import { onMounted, ref } from 'vue';

let title = "LocalStorage"

let xArr = ref<Item[]>([]);
let clave = 'prueva';
let xItem = ref<Item>({ nombre: '' });
let modeEdit = ref<boolean>(false);

interface Item {
  nombre: string;
}

onMounted(() => {
  xArr.value = LCS.getData(clave);
});

function agregarItem(data: any) {
  let item: Item = {
    nombre: data
  };

  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  LCS.addDataItem(xArr.value, clave, item);
}

function borrarItem(item: any, index: number) {
  LCS.remDataItem(xArr.value, clave, index);
};

function editarItem(item: any, index: number) {
  item.nombre = xArr.value[index].nombre;
  xItem.value = item;
  modeEdit.value = true;
};

function guardarItem(data: any) {
  xItem.value.nombre = data;
  LCS.setData(xArr.value, clave)
  modeEdit.value = false;
};

function cancerGuardar() {
  modeEdit.value = false;
};

</script>

<template>

  <MainComp :title="title" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
    :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" :cancer-guardar="cancerGuardar" />

</template>
