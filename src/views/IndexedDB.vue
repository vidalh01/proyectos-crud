<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IDB } from '../class/lib_indexeddb';
import MainComp from '../components/mainComp.vue';

let title = "IndexedDB"

let xArr = ref<Item[]>([]);
let xNombre = ref<string>('');
let xItem = ref<Item>({ nombre: '', id: -1 });
let modeEdit = ref<boolean>(false);

const idb = new IDB('MiBaseDeDatos', 'MiAlmacen');

interface Item {
  id?: number;
  nombre: string;
}

onMounted(() => {
  // crear la base de datos
  idb.getData()
    .then((data) => {
      xArr.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
});

// actualizar los datos
function getDataItems() {
  idb.getData()
    .then((data) => {
      xArr.value = data;
    })
    .catch((error) => {
      console.error('Error al obtener los datos:', error);
    });
};
// agregar Item
function agregarItem(data: string) {
  console.log(data)

  let item: Item = {
    nombre: data
  };

  if (data === '') {
    alert('El campo no puede estar vacío');
    return;
  }

  idb.addDataItem(item)
    .then(() => {
      getDataItems();
    })
    .catch((error) => {
      console.error('Error al agregar el item:', error);
    });

}

// borrar Item
function borrarItem(item: any, index: number) {
  let id = xArr.value[index].id;

  if (id !== undefined) {
    idb.remDataItem(id)
      .then(() => {
        getDataItems();
      })
      .catch((error) => {
        console.error('Error al eliminar el item:', error);
      });
  } else {
    console.error('Error: El ID del item es undefined');
  }
};

// editar Item
function editarItem(item: any, index: number) {
  xNombre.value = xArr.value[index].nombre;
  xItem.value = item;
  modeEdit.value = true;
};

// guardar Item
function guardarItem(data: string) {

  let id = xItem.value.id;

  idb.updDataItem({
    nombre: data,
    id: id
  })
    .then(() => {
      getDataItems();
    })
    .catch((error) => {
      console.error('Error al editar el item:', error);
    });

  modeEdit.value = false;
};

function cancerGuardar() {
  modeEdit.value = false;
};

</script>



<template>

  <MainComp :title="title" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
    :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" :cancer-guardar="cancerGuardar" />

</template>
