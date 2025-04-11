<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FB } from '../class/lib_firebase';

let arrX = ref<any[]>([]);
let xnombre = ref<string>('');
let userID = ref<number | null>(null);
let modoEditor = ref<boolean>(false);

const nameCollection: string = "items"

let url = 'http://localhost:3000/usuarios'

onMounted(() => {
    // crear la base de datos
    FB.getItems(nameCollection)
        .then((res) => {
            arrX.value = res;
        })
});

// actualizar los datos
function actualizarDatos() {
    FB.getItems(nameCollection)
        .then((res) => {
            arrX.value = res;
        })

};
// agregar Item 
function agregarItem() {
    let item = {
        nombre: xnombre.value
    };

    if (xnombre.value === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    FB.addItem(nameCollection, item)
        .then(() => {
            actualizarDatos();
        })

    xnombre.value = '';
}

// borrar Item
function borrarItem(userID: string) {
    FB.remItem(nameCollection, userID)
        .then(() => {
            actualizarDatos();
        })
};

// editar Item
function editarItem(item: any) {
    xnombre.value = item.data.nombre
    userID.value = item.id;
    modoEditor.value = true;
};

// guardar Item
function guardarItem() {
    FB.updateItem(nameCollection, userID.value, {
        nombre: xnombre.value
    })
        .then(() => {
            actualizarDatos();
        })

    modoEditor.value = false;
    userID.value = null;
    xnombre.value = '';
};

function cancerGuardar() {
    modoEditor.value = false;
};

</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div>
            <h1 class="text-center">Bienvenido a la página Firebase</h1>
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
                        <td>{{ item.data.nombre }}</td>
                        <td>
                            <button :disabled="modoEditor" @click="editarItem(item)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modoEditor" @click="borrarItem(item.id)"
                                class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
