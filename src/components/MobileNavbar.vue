<template>
  <v-card class="mobileNav">
    <v-layout>
      <v-app-bar color="pink-darken-2" prominent>
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-spacer></v-spacer>
        <v-img
            class="lang-icon"
            src="\assets\icons\arg.png"
            @click="toggleLocale('es')"
          />
          <v-img
            class="lang-icon"
            src="\assets\icons\usa.png"
            style="margin-right: 1rem"
            @click="toggleLocale('en')"
          />
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="start" temporary>
        <v-list>
          <RouterLink to="/">
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
