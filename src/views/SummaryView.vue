<template>
  <v-row>
    <v-col>
      <h1 class="pt-5 title-view">{{ $t("summary") }}</h1>
      <br />
      <v-divider></v-divider>
      <br />
      <div class="text-left ml-2 mr-2">
        <p>{{ $t("summaryText") }}</p>
        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel
            :title="$t('summaryQuestion1')"
            :text="$t('summaryAnswer1')"
          ></v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel
            :title="$t('summaryQuestion2')"
            :text="$t('summaryAnswer2')"
          ></v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel
            :title="$t('summaryQuestion3')"
            :text="$t('summaryAnswer3')"
          ></v-expansion-panel>
        </v-expansion-panels>
        <v-expansion-panels variant="inset" class="my-4">
          <v-expansion-panel
            :title="$t('summaryQuestion4')"
            :text="$t('summaryAnswer4')"
          ></v-expansion-panel>
        </v-expansion-panels>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
p,
h3 {
  margin-bottom: 1rem;
}
</style>
