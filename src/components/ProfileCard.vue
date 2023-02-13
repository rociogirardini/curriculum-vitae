<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify'

const email: string = "rogirardini@gmail.com";

const { mobile } = useDisplay()
const cardHeight = ref<string>("")

if(mobile.value){
  cardHeight.value = "auto"
  if(window.location.pathname === '/'){
    console.log('estoy en inicio')
  }
} else if(!mobile.value){
  cardHeight.value = "770px"
}
</script>

<template>
  <v-card class="text-center mt-5" :height="cardHeight">
    <v-row>
      <v-col>
        <v-img
        transition='fade-transition'
          src="curriculum-vitae\assets\profilePic.png"
          height="400px"
          cover
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h1 class="pt-5">Rocío Girardini</h1>
        <v-card-subtitle class="pt-3">Front-end Developer</v-card-subtitle>
        <v-card-text>{{ $t('profileText') }}</v-card-text>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card-actions>
          <v-divider></v-divider>
          <a href="https://github.com/rociogirardini/" target="_blank">
            <v-btn
              size="x-large"
              color="surface-variant"
              variant="text"
              icon="mdi-github"
            ></v-btn>
          </a>
          <v-tooltip :text="$t('copy')" location="bottom">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                v-clipboard:success="email"
                size="x-large"
                color="surface-variant"
                variant="text"
                icon="mdi-gmail"
              ></v-btn>
            </template>
          </v-tooltip>
          <a
            href="https://www.linkedin.com/in/rocio-girardini/"
            target="_blank"
          >
            <v-btn
              size="x-large"
              color="surface-variant"
              variant="text"
              icon="mdi-linkedin"
            ></v-btn>
          </a>
          <v-tooltip :text="$t('whatsapp')" location="bottom">
            <template v-slot:activator="{ props }">
              <a href="https://wa.link/h4190g" target="_blank">
                <v-btn
                  v-bind="props"
                  size="x-large"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-whatsapp"
                ></v-btn>
              </a>
            </template>
          </v-tooltip>
          <v-tooltip :text="$t('pdf')" location="bottom">
            <template v-slot:activator="{ props }">
              <a href="/Rocio Girardini_CV-EN.pdf" download>
                <v-btn
                  v-bind="props"
                  size="x-large"
                  color="surface-variant"
                  variant="text"
                  icon="mdi-file-download-outline"
                ></v-btn>
              </a>
            </template>
          </v-tooltip>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>
