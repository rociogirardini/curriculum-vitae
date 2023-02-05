<template>
  <v-row>
    <v-col>
      <h1 class="pt-5 title-view">{{ $t("workExperience") }}</h1>
      <br />
      <v-divider></v-divider>
      <br />
      <p class="text-left ml-2 mr-2">
        {{ $t('workIntro') }}
      </p>
      <br />
      <v-tabs v-model="tab" bg-color="pink-darken-4">
        <v-tab value="one">Front end Developer</v-tab>
        <v-tab value="two">Junior Proyect Manager</v-tab>
      </v-tabs>

      <v-card-text class="text-left tabs-content">
        <v-window v-model="tab">
          <v-window-item value="one">
            <h2>Corporación Cápsula</h2>
            <p class="text-subtitle-1 text-disabled">Fintech startup</p>
            <br />
            <p class="text-medium-emphasis font-italic">
              {{ $t('CCDate') }}
            </p>
            <br />
            <p>{{ $t('CCProject') }}</p>
            <br />
            <div v-html="$t('CCTasks')"></div>
            <br />
            <p class="mb-1"><strong>{{ $t('workTechs') }}:</strong></p>
            <v-tooltip text="Vue & Vuex" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\vue.png"
                  style="width: 2rem"
                  class="mr-1"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="TypeScript" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\ts.png"
                  style="width: 2rem"
                  class="mr-2"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Pinia" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\pinia.svg"
                  style="width: 1.5rem"
                  class="mr-2"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Jira" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\jira.png"
                  style="width: 2rem"
                  class="mr-2"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Github" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\github.png"
                  style="width: 2rem"
                />
              </template>
            </v-tooltip>
          </v-window-item>

          <v-window-item value="two">
            <h2>Global Commerce Media</h2>
            <p class="text-subtitle-1 text-disabled">Marketing agency</p>
            <br />
            <p class="text-medium-emphasis font-italic">
              {{ $t('GCMDate') }}
            </p>
            <br />
            <p>{{ $t('GCMProject') }}</p>
            <br />
            <div v-html="$t('GCMTasks')"></div>
            <br />
            <p class="mb-1"><strong>{{ $t('workTechs') }}:</strong></p>
            <v-tooltip text="Wordpress" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\wordpress.png"
                  style="width: 2rem"
                  class="mr-2"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Slack" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\slack.png"
                  style="width: 2rem"
                  class="mr-2"
                />
              </template>
            </v-tooltip>
            <v-tooltip text="Google Sheets & Excel" location="bottom">
              <template v-slot:activator="{ props }">
                <img
                  v-bind="props"
                  src="src\assets\icons\excel.png"
                  style="width: 2rem"
                />
              </template>
            </v-tooltip>
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
