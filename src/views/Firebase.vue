<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FB } from '../class/lib_firebase';
import MainComp from '../components/mainComp.vue';

let title = "Firebase"

const fb = new FB('items');

let xArr = ref<any[]>([]);
let xNombre = ref<string>('');
let userID = ref<number | null>(null);
let modeEdit = ref<boolean>(false);


let url = 'http://localhost:3000/usuarios'

onMounted(async () => {
    // crear la base de datos
    await fb.getItems().then(res => xArr.value = res)

});

// actualizar los datos
function actualizarDatos() {
    fb.getItems().then(res => xArr.value = res)

};

// agregar Item 
async function agregarItem(data: string) {
    let item = {
        nombre: data
    };

    if (data === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    await fb.addItem(item).then(() => actualizarDatos())

}

// borrar Item
async function borrarItem(item: any, index: number) {
    await fb.remItem(item.id).then(() => actualizarDatos())
};

// editar Item
function editarItem(item: any, index: number) {
    userID.value = item.id;
    modeEdit.value = true;
};

// guardar Item
async function guardarItem(data: string) {
    await fb.updateItem(userID.value, {
        nombre: data
    }).then(() => actualizarDatos())

    modeEdit.value = false;
    userID.value = null;
};

function cancerGuardar() {
    modeEdit.value = false;
};

</script>

<template>
    <MainComp :title="title" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
        :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" @cancer-edit="cancerGuardar" />
</template>
