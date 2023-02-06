<template>
  <MobileNavbar v-if="mobileNav"></MobileNavbar>
  <v-card v-else>
    <v-tabs bg-color="pink-darken-2" align-tabs="center" stacked>
      <v-spacer></v-spacer>
      <RouterLink to="/">
        <v-tab>
          <v-icon>mdi-account</v-icon>
          {{  $t("summary") }}
        </v-tab>
      </RouterLink>
      <RouterLink to="/cover-letter">
        <v-tab>
          <v-icon>mdi-newspaper-variant</v-icon>
          {{  $t("coverLetter") }}
        </v-tab>
      </RouterLink>
      <RouterLink to="/work-experience">
        <v-tab>
          <v-icon>mdi-briefcase</v-icon>
          {{  $t("workExperience") }}
        </v-tab>
      </RouterLink>
      <RouterLink to="/school-background">
        <v-tab>
          <v-icon>mdi-bookshelf</v-icon>
          {{ $t('studies') }}
        </v-tab>
      </RouterLink>
      <RouterLink to="/programming">
        <v-tab>
          <v-icon>mdi-application-brackets</v-icon>
          {{ $t('programming') }}
        </v-tab>
      </RouterLink>
      <RouterLink to="/languages">
        <v-tab>
          <v-icon>mdi-earth</v-icon>
          {{ $t('languages') }}
        </v-tab>
      </RouterLink>
      <v-spacer></v-spacer>
      <v-img class="lang-icon" src="\assets\icons\arg.png" @click="toggleLocale('es')"/>
      <br/>
      <v-img class="lang-icon" src="\assets\icons\usa.png" style="margin-right:1rem ;" @click="toggleLocale('en')"/>
    </v-tabs>
  </v-card>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import i18n from "@/locales/i18n";
import MobileNavbar from "./MobileNavbar.vue";

function toggleLocale(lang: any){
  i18n.global.locale = lang
}

const { mobile } = useDisplay()
const mobileNav = ref<boolean>(false)

if(mobile.value){
  mobileNav.value = true
} else if(!mobile.value){
  mobileNav.value = false
}
</script>
