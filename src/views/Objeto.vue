<script setup lang="ts">
import { Arr } from '../class/crud_array';
import { ref } from 'vue';

interface Item {
  nombre: string;
  id: string
}

let xArr = ref<Item[]>([]);
let xNombre = ref<string>('');
let xItem = ref<Item>({ nombre: '', id: '' });
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

  Arr.addItem(xArr.value, item);
  xNombre.value = '';
}

function borrarItem(index: number) {
  Arr.remItem(xArr.value, index);
};

function editarItem(item: Item) {

  xNombre.value = item.nombre;
  xItem.value = item;

  modeEdit.value = true;

};

function guardarItem() {
  xItem.value.nombre = xNombre.value;

  modeEdit.value = false;
};

function cancerGuardar() {
  modeEdit.value = false;
  xNombre.value = "";
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página Objetos</h1>
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
            <td>{{ item.nombre }} {{ item.id }} </td>
            <td>
              <button :disabled="modeEdit" @click="editarItem(item)" class="btn btn-success me-2">E</button>
              <button :disabled="modeEdit" @click="borrarItem(index)" class="btn btn-danger">X</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
