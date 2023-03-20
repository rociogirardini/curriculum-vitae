<script setup lang="ts">
import { ref } from 'vue';
const email: string = "rogirardini@gmail.com";

const copyEmail = ref<boolean>(false)
const show = ref<boolean>(false)

function successHandler(){
    copyEmail.value = true
    setTimeout(() => {
        copyEmail.value = false
    }, 1000);
    return email
}

function showTooltip(){
    show.value = true
    setTimeout(() => {
        show.value = false
    }, 1000);
}

</script>

<template>
    <v-row class="justify-center align-center">
        <v-col>
            <v-card>
                <v-row>
                    <v-col>
                        <v-list>
                            <v-list-item prepend-avatar="/assets/fotocv.jpg" title="Rocío Girardini"
                                subtitle="Front-end Developer"></v-list-item>
                        </v-list>
                        <v-card-text>{{ $t('profileText') }}</v-card-text>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-card-actions>
                            <v-divider></v-divider>
                            <a href="https://github.com/rociogirardini/" target="_blank">
                                <v-btn size="x-large" color="surface-variant" variant="text" icon="mdi-github"></v-btn>
                            </a>
                            <v-tooltip v-model="show" :text="!copyEmail ? $t('copy') : $t('copied')" location="bottom">
                                <template v-slot:activator="{ props }">
                                    <v-btn v-bind="props" v-clipboard:success="successHandler" size="x-large" color="surface-variant"
                                        variant="text" icon="mdi-gmail" @click="showTooltip"></v-btn>
                                </template>
                            </v-tooltip>
                            <a href="https://www.linkedin.com/in/rocio-girardini/" target="_blank">
                                <v-btn size="x-large" color="surface-variant" variant="text" icon="mdi-linkedin"></v-btn>
                            </a>
                            <v-tooltip :text="$t('whatsapp')" location="bottom">
                                <template v-slot:activator="{ props }">
                                    <a href="https://wa.link/h4190g" target="_blank">
                                        <v-btn v-bind="props" size="x-large" color="surface-variant" variant="text"
                                            icon="mdi-whatsapp"></v-btn>
                                    </a>
                                </template>
                            </v-tooltip>
                            <v-tooltip :text="$t('pdf')" location="bottom">
                                <template v-slot:activator="{ props }">
                                    <a href="/Rocio Girardini_CV-EN.pdf" download>
                                        <v-btn v-bind="props" size="x-large" color="surface-variant" variant="text"
                                            icon="mdi-file-download-outline"></v-btn>
                                    </a>
                                </template>
                            </v-tooltip>
                        </v-card-actions>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>