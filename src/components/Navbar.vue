<template>
  <MobileNavbar v-if="mobileNav"></MobileNavbar>
  <v-card v-else>
    <v-layout>
      <v-navigation-drawer
        class="bg-amber-darken-4"
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="/assets/fotocv.jpg"
            title="Rocío Girardini"
            subtitle="rogirardini@gmail.com"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <RouterLink to="/"><v-list-item prepend-icon="mdi-home" :title="$t('home') + ' & ' + $t('contact') " value="home"></v-list-item></RouterLink>
          <RouterLink to="/summary"><v-list-item prepend-icon="mdi-account" :title="$t('summary')" value="summary"></v-list-item></RouterLink>
          <RouterLink to="/cover-letter"><v-list-item prepend-icon="mdi-newspaper-variant" :title="$t('coverLetter')" value="cover-letter"></v-list-item></RouterLink>
          <RouterLink to="/work-experience"><v-list-item prepend-icon="mdi-briefcase" :title="$t('workExperience')" value="work-experience"></v-list-item></RouterLink>
          <RouterLink to="/school-background"><v-list-item prepend-icon="mdi-bookshelf" :title="$t('studies')" value="studies"></v-list-item></RouterLink>
          <RouterLink to="/programming"><v-list-item prepend-icon="mdi-application-brackets" :title="$t('programming')" value="programming"></v-list-item></RouterLink>
          <RouterLink to="/languages"><v-list-item prepend-icon="mdi-earth" :title="$t('languages')" value="earth"></v-list-item></RouterLink>
        </v-list>
        <v-divider></v-divider>
        <col>
      <div class="text-center mr-3 lang-wrapper">
        <span class="lang-icon ml-2" @click="toggleLocale('es')"><img src="/assets/icons/arg.png" style="width:25px; margin: 8px;" alt="locale"/></span>
        <span class="lang-icon ml-2" @click="toggleLocale('en')"><img src="/assets/icons/usa.png" style="width:25px; margin: 8px;" alt="locale"/></span>
      </div>
      </v-navigation-drawer>

      <!-- <v-main style="height: 250px"></v-main> -->
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import i18n from "@/locales/i18n";
import MobileNavbar from "./MobileNavbar.vue";

function toggleLocale(lang: any) {
  i18n.global.locale = lang
}

const { width } = useDisplay()
const mobileNav = ref<boolean>(false)

if (width.value <= 1279) {
  mobileNav.value = true
} else if (width.value > 1279) {
  mobileNav.value = false
}
</script>

<style scoped>
.lang-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
