<script setup lang="ts">
import { LCS } from '../class/lib_localstorage';
import { onMounted, ref } from 'vue';

let arrX = ref<Item[]>([]);
let xnombre = ref<string>('');
let clave = 'prueva';
let xIndex = ref<number | null>(null);
let modoEditor = ref<boolean>(false);

interface Item {
  nombre: string;
}

onMounted(() => {
  arrX.value = LCS.getData(clave);
});

function agregarItem() {
  let item: Item = {
    nombre: xnombre.value
  };

  if (xnombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  LCS.addDataItem(arrX.value, clave, item);
  xnombre.value = '';
}

function borrarItem(index: number) {
  LCS.remDataItem(arrX.value, clave, index);
};

function editarItem(index: number) {
  xnombre.value = arrX.value[index].nombre;
  xIndex.value = index;
  modoEditor.value = true;
};

function guardarItem() {
  if (xIndex.value !== null) {
    arrX.value[xIndex.value].nombre = xnombre.value;
    LCS.setData(arrX.value, clave)
  }
  modoEditor.value = false;
  xIndex.value = null;
};

function cancerGuardar() {
  modoEditor.value = false;
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página LocalStorage</h1>
      <div class="card p-5">
        <div class="mb-3">
          <label for="inputTexto" class="form-label">Ingrese un nombre</label>
          <input v-model="xnombre" type="text" class="form-control" id="inputTexto" required>
        </div>
        <button v-if="!modoEditor" @click="agregarItem" class="btn btn-primary">Enviar</button>
        <button v-if="modoEditor" @click="guardarItem" class="btn btn-secondary">Guardar</button>
        <button v-if="modoEditor" @click="cancerGuardar" class="btn btn-danger my-1">Cancelar</button>
      </div>

      <table class="table table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Funciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in arrX" :key="index">
            <td>{{ item.nombre }}</td>
            <td>
              <button :disabled="modoEditor" @click="editarItem(index)" class="btn btn-success me-2">E</button>
              <button :disabled="modoEditor" @click="borrarItem(index)" class="btn btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
