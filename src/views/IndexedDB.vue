<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { crud_indexeddb } from '../class/crud_indexeddb';

let arrX = ref<Item[]>([]);
let xnombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modoEditor = ref<boolean>(false);

interface Item {
  id?: number;
  nombre: string;
}

onMounted(() => {
  crud_indexeddb.getData('MiBaseDeDatos', 'MiAlmacen')
    .then((data: Item[]) => {
      arrX.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});

function actualizarDatos() {
  crud_indexeddb.getData('MiBaseDeDatos', 'MiAlmacen')
    .then((data: Item[]) => {
      arrX.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
  console.log('datos actualizados');
};

function agregarItem() {
  let item: Item = {
    nombre: xnombre.value
  };

  if (xnombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  // crud_localstorage.addDataItem(arrX.value, clave, item);
  crud_indexeddb.addDataItem('MiBaseDeDatos', 'MiAlmacen', item)
    .then(() => {
      actualizarDatos();
    })
    .catch((error) => {
      console.error('Error al agregar el item:', error);
    });

  xnombre.value = '';
}

function borrarItem(index: number) {
  let id = arrX.value[index].id;

  if (id !== undefined) {
    crud_indexeddb.remDataItem('MiBaseDeDatos', 'MiAlmacen', id)
      .then(() => {
        actualizarDatos();
      })
      .catch((error) => {
        console.error('Error al eliminar el item:', error);
      });
  } else {
    console.error('Error: El ID del item es undefined');
  }
};

function editarItem(index: number) {
  xnombre.value = arrX.value[index].nombre;
  xIndex.value = index;
  modoEditor.value = true;
};

function guardarItem() {

  if (xIndex.value !== null) {

    let id = arrX.value[xIndex.value].id;

    if (id !== undefined) {
      console.log(id, "este es el id")

      crud_indexeddb.updDataItem('MiBaseDeDatos', 'MiAlmacen', {
        nombre: xnombre.value,
        id: id
      })
        .then(() => {
          actualizarDatos();
        })
        .catch((error) => {
          console.error('Error al editar el item:', error);
        });
    } else {
      console.error('Error: El ID del item es undefined');
    }
  }

  modoEditor.value = false;
  xIndex.value = null;
  xnombre.value = '';
};

</script>

<template>
  <button @click="crud_indexeddb.getData('MiBaseDeDatos', 'MiAlmacen')" class="btn btn-success me-2">VER DATOS</button>

  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página IndexedDB</h1>
      <div class="card p-5">
        <div class="mb-3">
          <label for="inputTexto" class="form-label">Ingrese un nombre</label>
          <input v-model="xnombre" type="text" class="form-control" id="inputTexto" required>
        </div>
        <button v-if="!modoEditor" @click="agregarItem" class="btn btn-primary">Enviar</button>
        <button v-else @click="guardarItem" class="btn btn-secondary">Guardar</button>
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
            <td>{{ item.nombre }} {{ item.id }} </td>
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
