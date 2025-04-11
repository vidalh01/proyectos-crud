<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FTH } from '../class/lib_fetch';

let arrX = ref<any[]>([]);
let xnombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modoEditor = ref<boolean>(false);

let url = 'http://localhost:3000/usuarios'

onMounted(() => {
    // crear la base de datos
    FTH.get(url)
        .then((res) => {
            arrX.value = res;
            console.log(res)
        })
});

// actualizar los datos
function actualizarDatos() {
    FTH.get(url)
        .then((res) => {
            arrX.value = res;
        })
};
// agregar Item 
function agregarItem() {
    let item = {
        data: {
            nombre: xnombre.value
        }
    };

    if (xnombre.value === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    FTH.post(url, item)
        .then(() => {
            actualizarDatos();
        })

    xnombre.value = '';
}

// borrar Item
function borrarItem(index: number) {
    let id = arrX.value[index].id;

    if (id !== undefined) {
        FTH.del(`${url}/${id}`)
            .then(() => {
                actualizarDatos();
            })
    } else {
        console.error('Error: El ID del item es undefined');
    }
};

// editar Item
function editarItem(index: number) {
    xnombre.value = arrX.value[index].data.nombre;
    xIndex.value = index;
    modoEditor.value = true;
};

// guardar Item
function guardarItem() {
    if (xIndex.value !== null) {
        let id = arrX.value[xIndex.value].id;
        if (id !== undefined) {
            FTH.patch(`${url}/${id}`, {
                data: {
                    nombre: xnombre.value
                }
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

function cancerGuardar() {
    modoEditor.value = false;
};

</script>

<template>
    <div class="d-flex justify-content-center align-items-center vh-100">
        <div>
            <h1 class="text-center">Bienvenido a la página Fetch</h1>
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
                        <td>{{ item.data.nombre }} {{ item.id }}</td>
                        <td>
                            <button :disabled="modoEditor" @click="editarItem(index)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modoEditor" @click="borrarItem(index)" class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
