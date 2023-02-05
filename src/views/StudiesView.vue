<template>
  <v-row>
    <v-col>
      <h1 class="pt-5 title-view">{{ $t('studies') }}</h1>
      <br />
      <v-divider></v-divider>
      <br />
      <div v-html="$t('studiesIntro')"></div>
      <br />
      <v-tabs v-model="tab" bg-color="pink-darken-4">
        <v-tab value="one">{{ $t('tab1') }}</v-tab>
        <v-tab value="two">{{ $t('tab2') }}</v-tab>
      </v-tabs>

      <v-card-text class="text-left tabs-content">
        <v-window v-model="tab">
          <v-window-item value="one">
            <h2>{{ $t('studies1') }}</h2>
            <p class="text-subtitle-1 text-disabled">Coderhouse - 2021/22</p>
            <br />
            <div v-html="$t('studiesText1')"></div>
            <br/>
            <br/>
            <h2>{{ $t('studies2') }}</h2>
            <p class="text-subtitle-1 text-disabled">Neetwork Business School - 2020</p>
          </v-window-item>

          <v-window-item value="two">
            <div v-html="$t('studies3')"></div> 
          </v-window-item>

        </v-window>
      </v-card-text>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
let tab = ref<any>(null);
</script>
