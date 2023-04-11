<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";

let tab = ref<any>(null);

const { width, mobile } = useDisplay();
const cols = ref<number>(0);
const marginTop = ref<string>('')
const moreTab = ref<number>(0);
const graphics = ref<number[]>([0, 0]);

const development = ref<string[]>(['HTML5', 'CSS3', 'SASS', 'JavaScript', 'TypeScript', 'Node.js', 'API Rest']);
const frameworks = ref<string[]>(['React Js', 'Vue.js 2', 'Vue.js 3']);
const more = ref<string[]>(['Visual Studio Code', 'Git & GitHub', 'Jira, Atlassian, Confluence', 'DevOps Methodology', 'Scrum Methodology']);

if (width.value <= 546) {
  marginTop.value = 'mt-16'
} else if (width.value > 546) {
  marginTop.value = 'mt-0'
}

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

<template>
  <v-card :class="marginTop">
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
                <v-chip v-for="chip in development" class="ma-1" variant="outlined">{{ chip }}</v-chip>
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
                <v-chip v-for="chip in frameworks" class="ma-1" variant="outlined">{{ chip }}</v-chip>
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
                <v-chip class="ma-1" variant="outlined">Vuex</v-chip>
                <v-chip class="ma-1" variant="outlined">Pinia</v-chip>
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
                <v-chip v-for="chip in more" class="ma-1" variant="outlined">{{ chip }}</v-chip>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-card>
</template>
