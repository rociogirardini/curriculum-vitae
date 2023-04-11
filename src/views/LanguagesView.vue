<template>
  <v-card>
    <v-row>
      <v-col>
        <h1 class="pt-5 title-view">{{ $t('languages') }}</h1>
        <br />
        <v-divider></v-divider>
        <br />
        <div class="text-left ml-5">
          <h2>{{ $t('spanish') }}</h2>
          <p>{{ $t('spanishLevel') }}</p>
          <br />
          <h2>{{ $t('english') }}</h2>
          <p>{{ $t('englishLevel') }} <a href="https://www.efset.org/cert/PstFiU" target="_blank"> <v-icon icon="mdi-open-in-new" size="x-small"/></a></p>
          <br />
          <h2>{{ $t('italian') }}</h2>
          <p class="mb-3">{{ $t('italianLevel') }}</p>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>