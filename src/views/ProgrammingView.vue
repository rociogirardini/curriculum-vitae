<template>
  <v-row>
    <v-col>
      <h1 class="pt-5 title-view">{{ $t("programming") }}</h1>
      <br />
      <v-divider></v-divider>
      <br />
      <p class="ml-2 text-left">
        {{ $t("programmingIntro") }}
      </p>
      <br />
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              {{ $t("programmingTab1") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <v-chip class="ma-1"  variant="outlined">HTML5</v-chip>
              <v-chip class="ma-1"  variant="outlined">CSS3</v-chip>
              <v-chip class="ma-1"  variant="outlined">SASS</v-chip>
              <v-chip class="ma-1"  variant="outlined">JavaScript</v-chip>
              <v-chip class="ma-1"  variant="outlined">TypeScript</v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Frameworks
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <v-chip class="ma-1"  variant="outlined">React Js</v-chip>
              <v-chip class="ma-1"  variant="outlined">Vue.js 2</v-chip>
              <v-chip class="ma-1"  variant="outlined">Vue.js 3</v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              State Management
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <v-chip class="ma-1"  variant="outlined">Vuex</v-chip>
              <v-chip class="ma-1"  variant="outlined">Pinia</v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              {{ $t("programmingTab2") }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <v-chip class="ma-1"  variant="outlined">Visual Studio Code</v-chip>
              <v-chip class="ma-1"  variant="outlined">Git & GitHub</v-chip>
              <v-chip class="ma-1"  variant="outlined">Jira, Atlassian, Confluence</v-chip>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

let tab = ref<any>(null);

const { mobile } = useDisplay();
const cols = ref<number>(0);
const moreTab = ref<number>(0);
const graphics = ref<number[]>([0, 0]);

if (mobile.value) {
  cols.value = 4;
  moreTab.value = 5;
  graphics.value = [12, 12];
} else if (!mobile.value) {
  cols.value = 2;
  moreTab.value = 2;
  graphics.value = [2, 4];

}
</script>
