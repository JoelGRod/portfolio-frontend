<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-title>Home</ion-title>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab3',
  components: { IonTitle, IonContent, IonPage }
}
</script>