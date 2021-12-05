<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title size="large">Contact</ion-title>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Portfolio-Contact',
  components: { IonTitle, IonContent, IonPage }
}
</script>