<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FTH } from '../class/lib_fetch';

let xArr = ref<any[]>([]);
let xNombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

let url = 'http://localhost:3000/usuarios'

onMounted(() => {
    // crear la base de datos
    FTH.get(url)
        .then((res) => {
            xArr.value = res;
            console.log(res)
        })
});

// actualizar los datos
function actualizarDatos() {
    FTH.get(url)
        .then((res) => {
            xArr.value = res;
        })
};
// agregar Item 
function agregarItem() {
    let item = {
        data: {
            nombre: xNombre.value
        }
    };

    if (xNombre.value === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    FTH.post(url, item)
        .then(() => {
            actualizarDatos();
        })

    xNombre.value = '';
}

// borrar Item
function borrarItem(index: number) {
    let id = xArr.value[index].id;

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
    xNombre.value = xArr.value[index].data.nombre;
    xIndex.value = index;
    modeEdit.value = true;
};

// guardar Item
function guardarItem() {
    if (xIndex.value !== null) {
        let id = xArr.value[xIndex.value].id;
        if (id !== undefined) {
            FTH.patch(`${url}/${id}`, {
                data: {
                    nombre: xNombre.value
                }
            })
                .then(() => {
                    actualizarDatos();
                })
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
            <h1 class="text-center">Bienvenido a la página Fetch</h1>
            <div class="card p-5">
                <div class="mb-3">
                    <label for="inputTexto" class="form-label">Ingrese un nombre</label>
                    <input v-model="xNombre" type="text" class="form-control" id="inputTexto">
                </div>
                <button v-if="!modeEdit" @click="agregarItem" class="btn btn-primary">Enviar</button>
                <button v-if="modeEdit" @click="guardarItem" class="btn btn-secondary">Guardar</button>
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
                        <td>{{ item.data.nombre }} {{ item.id }}</td>
                        <td>
                            <button :disabled="modeEdit" @click="editarItem(index)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modeEdit" @click="borrarItem(index)" class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
