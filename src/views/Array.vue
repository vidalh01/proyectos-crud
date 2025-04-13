<script setup lang="ts">
import { Arr } from '../class/crud_array';
import { ref } from 'vue';
import mainComp from "../components/mainComp.vue";

let title = "Array"

let xArr = ref<string[]>([]);
let xNombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

function agregarItem(data: any) {
  // el data viene del hijo: mainComp
  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }
  Arr.addItem(xArr.value, data);
}

function borrarItem(item: any, index: number) {
  // el id viene del hijo: mainComp
  Arr.remItem(xArr.value, index);
};

function editarItem(item: any, index: number) {
  // el item viene del hijo: mainComp
  xNombre.value = xArr.value[index]
  xIndex.value = index
  modeEdit.value = true;
};

function guardarItem(data: any) {
  // el data viene del hijo: mainComp
  if (xIndex.value !== null) xArr.value[xIndex.value] = data;
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
