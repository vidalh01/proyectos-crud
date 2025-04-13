<script setup lang="ts">
import MainComp from '../components/mainComp.vue';
import { ref } from 'vue';

const xArr = ref<Set<string>>(new Set())
let xItem = ref<any>();
let modeEdit = ref<boolean>(false);

function agregarItem(data: string) {
  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  xArr.value.add(data)
}

function borrarItem(item: any, index: number) {
  xArr.value.delete(item);
};

function editarItem(item: any, index: number) {
  xItem.value = item;
  modeEdit.value = true;
};

function guardarItem(data: string) {
  xArr.value.delete(xItem.value);
  xArr.value.add(data)

  modeEdit.value = false;
};

function cancerGuardar(data: string) {
  modeEdit.value = false;
};

</script>

<template>
  <MainComp title="Set" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
    @cancer-edit="cancerGuardar" :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem"
    :cancer-guardar="cancerGuardar" />


</template>
