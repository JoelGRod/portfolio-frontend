<template>
  <ion-card>
    <img :src="cardInfo.img" />
    <ion-card-header class="card-header">
      <ion-item>
        <ion-card-title slot="start" color="primary">
            {{ cardInfo.title }}
        </ion-card-title>
        <ion-icon
          :icon="cardInfo.icon"
          class="card-header-icon"
          color="secondary"
          size="large"
          slot="end">
        </ion-icon>
      </ion-item>
      <ion-card-subtitle 
        class="card-header-subtitle" 
        color="secondary">
          {{ cardInfo.subtitle }}
      </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content class="card-content">
      {{ cardInfo.content }}
    </ion-card-content>

    <ion-item class="card-buttons">
      <ion-buttons slot="end">
        <ion-button
          v-if="cardInfo.codeLink"
          class="card-button-margin"
          fill="outline"
          color="primary"
          target="_blank"
          :href="cardInfo.codeLink">
          Code
        </ion-button>
        <ion-button
          v-if="cardInfo.viewLink"
          fill="outline"
          color="secondary"
          target="_blank"
          :href="cardInfo.viewLink">
          View
        </ion-button>
      </ion-buttons>
    </ion-item>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonItem,
  IonButtons,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { WorkCardInfo } from "../interfaces/cards-interfaces";

export default defineComponent({
  name: "WorkCard",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonItem,
    IonButtons,
    IonButton,
  },
  props: {
    cardInfo: {
      type: Object as () => WorkCardInfo,
      required: true,
    },
  },
});
</script>

<style scoped>
.card-button-margin {
  padding-right: 0.3rem;
}
.card-buttons {
  margin-bottom: 0.5rem;
}
.card-header {
  margin: 0rem;
  padding: 0rem 0rem 1rem 0rem;
}
.card-header-icon {
  margin: 0.5rem 0rem 0rem 0rem
}
.card-header-subtitle {
  margin: -0.2rem 0rem 0.4rem 0rem; padding-left: 1rem
}
.card-content {
  white-space: pre-line;
  color: #f3f3f3;
}
</style>
