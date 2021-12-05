<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title size="large">About</ion-title>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Portfolio-About',
  components: { IonTitle, IonContent, IonPage }
}
</script>