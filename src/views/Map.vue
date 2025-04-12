<script setup lang="ts">
import { ref } from 'vue';

interface Item {
  nombre: string;
  id: string
}

let xArr = ref<Map<string, Item>>(new Map());
let xNombre = ref<string>('');
let xID = ref<string>("");
let modeEdit = ref<boolean>(false);

function agregarItem() {
  const id = Math.random().toString(36).substring(2, 6);

  let item: Item = {
    nombre: xNombre.value,
    id: id
  };

  if (xNombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  xArr.value.set(item.id, item);
  xNombre.value = '';
}

function borrarItem(item: Item) {
  xArr.value.delete(item.id);
};

function editarItem(item: Item) {
  xNombre.value = item.nombre;
  xID.value = item.id;

  modeEdit.value = true;

};

function guardarItem() {

  let item: Item = {
    nombre: xNombre.value,
    id: xID.value
  };

  xArr.value.set(xID.value, item)

  modeEdit.value = false;
  xNombre.value = "";
};

function cancerGuardar() {
  modeEdit.value = false;
  xNombre.value = "";
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página Map</h1>
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
          <tr v-for="[key, item] in xArr" :key="key">
            <td>{{ item.nombre }} </td>
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
