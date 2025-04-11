<script setup lang="ts">
import { crud_array } from '../class/crud_array';
import { ref } from 'vue';

let xArr = ref<string[]>([]);
let xNombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

function agregarItem() {
  if (xNombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }
  crud_array.addItem(xArr.value, xNombre.value);
  xNombre.value = '';
}

function borrarItem(index: number) {
  crud_array.remItem(xArr.value, index);
};

function editarItem(index: number) {
  xNombre.value = xArr.value[index];
  xIndex.value = index;
  modeEdit.value = true;
};

function guardarItem() {
  if (xIndex.value !== null) xArr.value[xIndex.value] = xNombre.value;

  modeEdit.value = false;
  xIndex.value = null;
};

function cancerGuardar() {
  modeEdit.value = false;
  xNombre.value = ""
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página Array</h1>
      <div class="card p-5">
        <div class="mb-3">
          <label for="inputTexto" class="form-label">Ingrese un nombre</label>
          <input v-model="xNombre" type="text" class="form-control" id="inputTexto">
        </div>
        <button @click="modeEdit ? guardarItem() : agregarItem()" class="btn"
          :class="modeEdit ? 'btn-secondary' : 'btn-primary'">
          {{ modeEdit ? 'Guardar' : 'Enviar' }}
        </button>
        <button v-if="modeEdit" @click="cancerGuardar" class="btn btn-danger my-1">Cancelar</button>
      </div>

      <table class="table table-bordered my-3">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Funciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in xArr" :key="index">
            <td>{{ item }}</td>
            <td>
              <button :disabled="modeEdit" @click="editarItem(index)" class="btn btn-success me-2">E</button>
              <button :disabled="modeEdit" @click="borrarItem(index)" class="btn btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
