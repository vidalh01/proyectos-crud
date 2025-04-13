<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { FTH } from '../class/lib_fetch';
import MainComp from '../components/mainComp.vue';

let title = 'Fetch'

let xArr = ref<any[]>([]);
let xNombre = ref<string>('');
let xIndex = ref<number | null>(null);
let modeEdit = ref<boolean>(false);

let url = 'http://localhost:3000/usuarios'

onMounted(async () => {
    // crear la base de datos
    FTH.get(url)
        .then((res) => {
            xArr.value = res;
            console.log(res)
        })
});

// actualizar los datos
async function actualizarDatos() {
    await FTH.get(url)
        .then((res) => {
            xArr.value = res;
        })
};
// agregar Item 
async function agregarItem(data: string) {
    let item = {
        data: {
            nombre: data
        }
    };

    if (data === '') {
        alert('El campo no puede estar vacío');
        return;
    }

    await FTH.post(url, item)
        .then(() => {
            actualizarDatos();
        })

}

// borrar Item
async function borrarItem(item: any, index: number) {
    let id = item.id;

    await FTH.del(`${url}/${id}`)
        .then(() => {
            actualizarDatos();
        })

};

// editar Item
function editarItem(item: any, index: number) {
    xIndex.value = index;
    modeEdit.value = true;
};

// guardar Item
async function guardarItem() {
    if (xIndex.value !== null) {
        let id = xArr.value[xIndex.value].id;
        if (id !== undefined) {
            await FTH.patch(`${url}/${id}`, {
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
    <MainComp :title="title" @editarItem="editarItem" @agregar-item="agregarItem" @guardar-item="guardarItem"
        :mode-edit="modeEdit" :x-arr="xArr" :borrar-item="borrarItem" :cancer-guardar="cancerGuardar" />
</template>
