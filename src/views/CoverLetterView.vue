<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

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
        <h1 class="pt-5 pl-5 title-view">{{ $t("coverLetter") }}</h1>
        <br />
        <v-divider></v-divider>
        <br />
        <div class="text-justify coverletter-text" v-html="$t('coverLetterText')">
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<style scoped>
.coverletter-text {
  padding: 0rem 1rem 3rem 1rem;
}
</style>
