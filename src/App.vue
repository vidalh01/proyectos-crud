<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router'

let arrLista = [
  "/array",
  "/objeto",
  "/localStorage",
  "/indexeddb",
  "/fetch",
  "/firebase",
  "/set",
  "/map"
]

</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi Aplicación</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li v-for="(item, index) in arrLista" :key="index" class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" :to="item">{{
                item.slice(1).charAt(0).toUpperCase() + item.slice(2) }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
