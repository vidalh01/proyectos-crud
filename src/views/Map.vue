<script setup lang="ts">
import MainComp from '../components/mainComp.vue';
import { ref } from 'vue';

interface Item {
  nombre: string;
  id: string
}

let xArr = ref<Map<string, Item>>(new Map());
let xID = ref<string>("");
let modeEdit = ref<boolean>(false);

function agregarItem(data: string) {
  const id = Math.random().toString(36).substring(2, 6);

  let item: Item = {
    nombre: data,
    id: id
  };

  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  console.log(item.nombre)

  xArr.value.set(item.id, item);
}

function borrarItem(item: Item, index: number) {
  xArr.value.delete(item.id);
};

function editarItem(item: Item, index: number) {
  xID.value = item.id;

  modeEdit.value = true;
};

function guardarItem(data: string) {
  let item: Item = {
    nombre: data,
    id: xID.value
  };

  xArr.value.set(xID.value, item)

  modeEdit.value = false;
};

function cancerGuardar() {
  modeEdit.value = false;
};

</script>

<template>
  <MainComp title="map" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
    :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" :cancer-guardar="cancerGuardar" />
</template>
