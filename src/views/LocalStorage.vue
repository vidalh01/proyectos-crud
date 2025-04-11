<script setup lang="ts">
import { LCS } from '../class/lib_localstorage';
import { onMounted, ref } from 'vue';

let xArr = ref<Item[]>([]);
let xNombre = ref<string>('');
let clave = 'prueva';
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

interface Item {
  nombre: string;
}

onMounted(() => {
  xArr.value = LCS.getData(clave);
});

function agregarItem() {
  let item: Item = {
    nombre: xNombre.value
  };

  if (xNombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  LCS.addDataItem(xArr.value, clave, item);
  xNombre.value = '';
}

function borrarItem(index: number) {
  LCS.remDataItem(xArr.value, clave, index);
};

function editarItem(index: number) {
  xNombre.value = xArr.value[index].nombre;
  xIndex.value = index;
  modeEdit.value = true;
};

function guardarItem() {
  if (xIndex.value !== null) {
    xArr.value[xIndex.value].nombre = xNombre.value;
    LCS.setData(xArr.value, clave)
  }
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
      <h1 class="text-center">Bienvenido a la página LocalStorage</h1>
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
            <td>{{ item.nombre }}</td>
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
