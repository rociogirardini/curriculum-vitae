<template>
  <v-row>
    <v-col>
      <h1 class="pt-8 title-view" style="font-size: 35px;">{{  $t("coverLetter") }}</h1>
      <br />
      <v-divider></v-divider>
      <br />
      <div class="text-left mb-5" v-html="$t('coverLetterText')">
      </div>
    </v-col>
  </v-row>
</template>

<style scoped>
div{
  font-size: large;
  padding: 0rem 1rem;
}
</style>
