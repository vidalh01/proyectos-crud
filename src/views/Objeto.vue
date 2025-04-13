<script setup lang="ts">
import MainComp from '../components/mainComp.vue';
import { Arr } from '../class/crud_array';
import { ref } from 'vue';

let title = "Objetos"

interface Item {
  nombre: string;
  id: string
}

let xArr = ref<Item[]>([]);
let xItem = ref<Item>({ nombre: '', id: '' });
let modeEdit = ref<boolean>(false);

function agregarItem(data: any) {
  const id = Math.random().toString(36).substring(2, 6);

  let item: Item = {
    nombre: data,
    id: id
  };

  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  Arr.addItem(xArr.value, item);
}

function borrarItem(item: any, index: number) {
  Arr.remItem(xArr.value, index);
};

function editarItem(item: Item) {
  xItem.value = item
  modeEdit.value = true;
};

function guardarItem(data: any) {
  xItem.value.nombre = data
  modeEdit.value = false;
};

function cancerGuardar() {
  modeEdit.value = false;
};

</script>

<template>

  <mainComp :title="title" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
    :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" @cancer-edit="cancerGuardar" />
</template>
