<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Works</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-title size="large">Home</ion-title>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  // Header
  IonHeader,
  IonToolbar,
  IonTitle,
  // Content
  IonContent,
} from "@ionic/vue";

export default {
  name: "Portfolio-Home",
  components: {
    IonPage,
    // Header
    IonHeader,
    IonToolbar,
    IonTitle,
    // Content
    IonContent,
  },
};
</script>
