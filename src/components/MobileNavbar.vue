<template>
  <v-card class="mobileNav">
    <v-layout>
      <v-app-bar color="amber-darken-4" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <div class="text-center mr-3 lang-wrapper">
          <span class="lang-icon" @click="toggleLocale('es')"><img src="/assets/icons/arg.png" style="width:25px;" alt="locale"/></span>
        <span class="lang-icon ml-1" @click="toggleLocale('en')"><img src="/assets/icons/usa.png" style="width:25px;" alt="locale"/></span>
      </div>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="start" temporary>
        <v-list>
          <RouterLink to="/">
            <v-list-item>
              <v-icon>mdi-home</v-icon>
              {{ $t('home') }} & {{ $t("contact") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/summary">
            <v-list-item>
              <v-icon>mdi-account</v-icon>
              {{ $t("summary") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/cover-letter">
            <v-list-item>
              <v-icon>mdi-newspaper-variant</v-icon>
              {{ $t("coverLetter") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/work-experience">
            <v-list-item>
              <v-icon>mdi-briefcase</v-icon>
              {{ $t("workExperience") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/school-background">
            <v-list-item>
              <v-icon>mdi-bookshelf</v-icon>
              {{ $t("studies") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/programming">
            <v-list-item>
              <v-icon>mdi-application-brackets</v-icon>
              {{ $t("programming") }}
            </v-list-item>
          </RouterLink>
          <RouterLink to="/languages">
            <v-list-item>
              <v-icon>mdi-earth</v-icon>
              {{ $t("languages") }}
            </v-list-item>
          </RouterLink>
          <v-spacer></v-spacer>

        </v-list>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import i18n from "@/locales/i18n";
import { ref } from "vue";

let drawer = ref<boolean>(false);

function toggleLocale(lang: any) {
  i18n.global.locale = lang;
}

// export default {
//   data: () => ({
//     drawer: false,
//     group: null,
//     items: [
//       {
//         title: "Foo",
//         value: "foo",
//       },
//       {
//         title: "Bar",
//         value: "bar",
//       },
//       {
//         title: "Fizz",
//         value: "fizz",
//       },
//       {
//         title: "Buzz",
//         value: "buzz",
//       },
//     ],
//   }),

//   setup(){
//     function toggleLocale(lang: any){
//   i18n.global.locale = lang
// }
//   }

//   watch: {
//     group() {
//       this.drawer = false;
//     },
//   },
// };
</script>

<style scoped>
.mobileNav {
  z-index: 100;
}
</style>
