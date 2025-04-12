<script setup lang="ts">
import { ref } from 'vue';

const xArr = ref<Set<string>>(new Set())
let xNombre = ref<string>('');
let xItem = ref<any>();
let modeEdit = ref<boolean>(false);

function agregarItem() {
  if (xNombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  xArr.value.add(xNombre.value)
  xNombre.value = '';
}

function borrarItem(item: any) {
  xArr.value.delete(item);
};

function editarItem(item: any) {
  xNombre.value = item;
  xItem.value = item;
  modeEdit.value = true;
};

function guardarItem() {
  xArr.value.delete(xItem.value);
  xArr.value.add(xNombre.value)

  modeEdit.value = false;
  xNombre.value = '';
};

function cancerGuardar() {
  modeEdit.value = false;
  xNombre.value = "";
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página Set</h1>
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
              <button :disabled="modeEdit" @click="editarItem(item)" class="btn btn-success me-2">E</button>
              <button :disabled="modeEdit" @click="borrarItem(item)" class="btn btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
