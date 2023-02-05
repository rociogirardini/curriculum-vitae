<template>
  <v-container>
    <nav>
      <Navbar />
    </nav>
      <v-row justify="center" no-gutters>
        <v-col :cols="cols[0]">
          <ProfileCard />
        </v-col> 
        <v-col :cols="cols[1]">
          <ViewsCard/>
        </v-col>
      </v-row>
  </v-container>
</template>
<script setup lang="ts">
import Navbar from "./Navbar.vue";
import ProfileCard from "./ProfileCard.vue";
import ViewsCard from "./ViewsCard.vue";
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const { mobile } = useDisplay()

const cols = ref<number[]>([0, 0])

if(!mobile.value){
  cols.value = [4, 6]
} else if(mobile.value){
  cols.value = [12, 12]
}
</script>
