<template>
  <div class="views-card">
    <v-card class="text-center mt-15" max-width="100%" :height="cardHeight">
      <RouterView />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()
const cardHeight = ref<string>("")

if(!mobile.value){
  cardHeight.value = "680px"
} else if(mobile.value){
  cardHeight.value = "auto"
}
</script>
