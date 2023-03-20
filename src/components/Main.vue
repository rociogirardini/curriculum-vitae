<template>
  <nav style="z-index: 10; position:relative;">
    <Navbar />
  </nav>
  <v-container>
    <v-row justify="center" align="center" style="height: 90vh;" class="mx-lg-15">
      <v-col cols="12">
        <RouterView></RouterView>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Navbar from "./Navbar.vue";
</script>

