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
      <v-tabs v-model="tab" bg-color="pink-darken-4">
        <v-tab value="one">{{ $t("programmingTab1") }}</v-tab>
        <v-tab value="two">Frameworks</v-tab>
        <v-tab value="three">State Management</v-tab>
        <v-tab value="four">{{ $t("programmingTab2") }}</v-tab>
      </v-tabs>

      <v-card-text class="text-left tabs-content">
        <v-window v-model="tab">
          <v-window-item value="one">
            <br />
            <v-row>
              <v-col>
                <v-img src="\assets\icons\html5.png" width="4rem" />
                <p class="mt-3 ml-2">HTML5</p>
              </v-col>
              <v-col>
                <v-img src="\assets\icons\css3.png" width="4rem" />
                <p class="mt-3 ml-3">CSS3</p>
              </v-col>
              <v-col>
                <v-img src="\assets\icons\sass.png" width="4rem" />
                <p class="mt-3 ml-4">SASS</p>
              </v-col>
              <v-col>
                <v-img src="\assets\icons\js.png" width="4rem" />
                <p class="mt-3">JavaScript</p>
              </v-col>
              <v-col>
                <v-img src="\assets\icons\ts.png" width="4rem" />
                <p class="mt-3">TypeScript</p>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="two">
            <br />
            <v-row>
              <v-col :cols="cols">
                <v-img
                  src="\assets\icons\react.png"
                  class="ml-1 pb-3"
                  width="4rem"
                />
                <p class="mt-3 ml-1">React Js</p>
              </v-col>
              <v-col>
                <v-img
                  src="\assets\icons\framework.png"
                  class="ml-5"
                  width="4rem"
                />
                <p class="mt-3">Vue 2 & Vue 3</p>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="three">
            <br />
            <v-row>
              <v-col :cols="cols">
                <v-img
                  src="\assets\icons\framework.png"
                  class="mt-3"
                  width="4rem"
                />
                <p class="mt-3 ml-4">Vuex</p>
              </v-col>
              <v-col>
                <v-img src="\assets\icons\pinia.svg" width="3rem" />
                <p class="mt-3 ml-1">Pinia</p>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="four">
            <v-row>
              <v-col>
                <h4>{{ $t("moreTitle1") }}</h4>
                <v-row class="align-center">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\vsc.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>Visual Studio Code</p></v-col>
                </v-row>
                <br />
                <h4>{{ $t("moreTitle2") }}</h4>
                <v-row class="align-center">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\git.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col :cols="moreTab"><p>Git</p></v-col>
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\github.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>GitHub</p></v-col>
                </v-row>
                <br />
                <h4>{{ $t("moreTitle3") }}</h4>
                <v-row class="align-center mt-1">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\jira.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>Jira</p></v-col>
                </v-row>
              </v-col>
              <v-col>
                <h4>{{ $t("moreTitle4") }}</h4>
                <v-row class="align-center">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\framework.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>Vue Test Utils</p></v-col>
                </v-row>
                <br />
                <h4>{{ $t("moreTitle5") }}</h4>
                <v-row class="align-center mt-1">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\illustrator.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>Adobe Illustrator</p></v-col>
                </v-row>
                <v-row class="align-center mt-1">
                  <v-col :cols="moreTab"
                    ><img src="\assets\icons\photoshop.png" style="width: 3rem; padding-right: 5px"
                  /></v-col>
                  <v-col><p>Adobe Photoshop</p></v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-window-item>
        </v-window>
      </v-card-text>
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
