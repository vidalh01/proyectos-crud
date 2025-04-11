<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FB } from '../class/lib_firebase';

const fb = new FB('items');

let xArr = ref<any[]>([]);
let xNombre = ref<string>('');
let userID = ref<number | null>(null);
let modeEdit = ref<boolean>(false);


let url = 'http://localhost:3000/usuarios'

onMounted(() => {
    // crear la base de datos
    fb.getItems().then(res => xArr.value = res)

});

// actualizar los datos
function actualizarDatos() {
    fb.getItems().then(res => xArr.value = res)

};
// agregar Item 
function agregarItem() {
    let item = {
        nombre: xNombre.value
    };

    if (xNombre.value === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    fb.addItem(item).then(() => actualizarDatos())

    xNombre.value = '';
}

// borrar Item
function borrarItem(userID: string) {
    fb.remItem(userID).then(() => actualizarDatos())
};

// editar Item
function editarItem(item: any) {
    xNombre.value = item.data.nombre
    userID.value = item.id;
    modeEdit.value = true;
};

// guardar Item
function guardarItem() {
    fb.updateItem(userID.value, {
        nombre: xNombre.value
    }).then(() => actualizarDatos())

    modeEdit.value = false;
    userID.value = null;
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
            <h1 class="text-center">Bienvenido a la página Firebase</h1>
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
                        <td>{{ item.data.nombre }}</td>
                        <td>
                            <button :disabled="modeEdit" @click="editarItem(item)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modeEdit" @click="borrarItem(item.id)" class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
