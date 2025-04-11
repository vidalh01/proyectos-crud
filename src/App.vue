<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
            <li class="nav-item">
              <RouterLink class="nav-link active" aria-current="page" to="/array">Array</RouterLink>
            </li>
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/objeto">Objeto</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/localStorage">LocalStorage</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/indexeddb">IndexedDB</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/fetch">Fetch</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/firebase">Firebase</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <RouterView />
</template>
