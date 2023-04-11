<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from 'vuetify'

let tab = ref<any>(null);

const { width } = useDisplay()
const marginTop = ref<string>('')

if (width.value <= 546) {
  marginTop.value = 'mt-16'
} else if (width.value > 546) {
  marginTop.value = 'mt-0'
}
</script>


<template>
  <v-card :class="marginTop">
    <v-row>
      <v-col>
        <h1 class="pt-5 title-view">{{ $t('studies') }}</h1>
        <br />
        <v-divider></v-divider>
        <br />
        <div v-html="$t('studiesIntro')"></div>
        <br />
        <v-tabs v-model="tab" bg-color="amber-darken-4">
          <v-tab value="one">{{ $t('tab1') }}</v-tab>
        </v-tabs>

        <v-card-text class="text-left tabs-content">
          <v-window v-model="tab">
            <v-window-item value="one">
              <h2>Full Stack Developer CORE</h2>
              <p class="text-subtitle-1 text-disabled">{{ $t('studies0') }}</p>
              <br />
              <h2>{{ $t('studies1') }}</h2>
              <p class="text-subtitle-1 text-disabled">Coderhouse - 2021/22</p>
              <br />
              <h2>{{ $t('studies2') }}</h2>
              <p class="text-subtitle-1 text-disabled">Neetwork Business School - 2020/20</p>
              <br />
              <div v-html="$t('studies3')"></div>
            </v-window-item>

            <v-window-item value="two">

            </v-window-item>

          </v-window>
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>