<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['title', 'modeEdit', 'xArr', 'borrarItem'])

const emit = defineEmits(["editarItem", "agregarItem", "guardarItem", "cancerEdit"])

let xNombre = ref("")

function editarItem(item: any, index: number) {
    xNombre.value = typeof item === 'string' ? item : item?.nombre ?? item.data.nombre
    emit('editarItem', item, index)
};

function agregarItem() {
    emit('agregarItem', xNombre.value)
    xNombre.value = ""
};

function guardarItem() {
    emit('guardarItem', xNombre.value)
    xNombre.value = ""
};

function cancerGuardar() {
    emit('cancerEdit')
    xNombre.value = ""
};

</script>

<template>
    <div class="d-flex justify-content-center align-items-center" style="height: 600px;">
        <div>
            <h1 class="text-center">Bienvenido a la página {{ title }}</h1>
            <div class="card p-5">
                <div class="mb-3">
                    <label for="inputTexto" class="form-label">Ingrese un nombre</label>
                    <input v-model="xNombre" type="text" class="form-control" id="inputNombre">
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

                <tbody v-if="xArr.constructor.name == 'Map'">
                    <tr v-for="([key, item], index) in xArr" :key="index">
                        <td>{{ item.nombre }} {{ item?.id }} </td>
                        <td>
                            <button :disabled="modeEdit" @click="editarItem(item, index)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modeEdit" @click="borrarItem(item, index)"
                                class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>

                <tbody v-else>
                    <tr v-for="(item, index) in xArr" :key="index">
                        <td>{{ typeof item == "string" ? item : item.nombre ?? item.data.nombre }} {{ item?.id }} </td>
                        <td>
                            <button :disabled="modeEdit" @click="editarItem(item, index)"
                                class="btn btn-success me-2">E</button>
                            <button :disabled="modeEdit" @click="borrarItem(item, index)"
                                class="btn btn-danger">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>