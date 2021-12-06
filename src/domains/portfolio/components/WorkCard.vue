<template>
  <ion-card>
    <img :src="cardInfo.img" />
    <ion-card-header style="margin: 0px; padding: 0px 0px 10px 0px">
      <ion-item>
        <ion-card-title slot="start">{{ cardInfo.title }}</ion-card-title>
        <ion-icon :icon="cardInfo.icon" slot="end"></ion-icon>
      </ion-item>
    </ion-card-header>
    <ion-card-content>
      {{ cardInfo.content }}
    </ion-card-content>
    <ion-item>
      <ion-icon :icon="cardInfo.icon" slot="start"></ion-icon>
      <ion-label>ion-item in a card, icon left, button right</ion-label>
      <ion-button fill="outline" slot="end">View</ion-button>
    </ion-item>
  </ion-card>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { WorkCard } from "../interfaces/cards-interfaces";

export default defineComponent({
  name: "WorkCard",
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
  },
  props: {
    cardInfo: {
      type: Object as () => WorkCard,
      required: true,
    },
  },

  //   setup() {},
});
</script>

<style></style>
