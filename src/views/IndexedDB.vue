<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IDB } from '../class/lib_indexeddb';

let xArr = ref<Item[]>([]);
let xNombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

const idb = new IDB('MiBaseDeDatos', 'MiAlmacen');

interface Item {
  id?: number;
  nombre: string;
}

onMounted(() => {
  // crear la base de datos
  idb.getData()
    .then((data: Item[]) => {
      xArr.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});

// actualizar los datos
function actualizarDatos() {
  idb.getData()
    .then((data: Item[]) => {
      xArr.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
};
// agregar Item
function agregarItem() {
  let item: Item = {
    nombre: xNombre.value
  };

  if (xNombre.value === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  idb.addDataItem(item)
    .then(() => {
      actualizarDatos();
    })
    .catch((error) => {
      console.error('Error al agregar el item:', error);
    });

  xNombre.value = '';
}

// borrar Item
function borrarItem(index: number) {
  let id = xArr.value[index].id;

  if (id !== undefined) {
    idb.remDataItem(id)
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

// editar Item
function editarItem(index: number) {
  xNombre.value = xArr.value[index].nombre;
  xIndex.value = index;
  modeEdit.value = true;
};

// guardar Item
function guardarItem() {
  if (xIndex.value !== null) {
    let id = xArr.value[xIndex.value].id;
    if (id !== undefined) {
      idb.updDataItem({
        nombre: xNombre.value,
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

  modeEdit.value = false;
  xIndex.value = null;
  xNombre.value = '';
};

function cancerGuardar() {
  modeEdit.value = false;
  xNombre.value = ""
};

</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div>
      <h1 class="text-center">Bienvenido a la página IndexedDB</h1>
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
            <td>{{ item.nombre }} {{ item.id }}</td>
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
