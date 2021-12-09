<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid style="background-color: red; min-height: 100%">
        <ion-row style="background-color: purple; margin: 15% 15% 15% 15%;">
          <ion-col>
            <div class="profile-img">
              <img
                src="assets/test-photo.jpg"
                alt="person-image"
                style="border-radius: 100%"
              />
            </div>
          </ion-col>
        </ion-row>
        <ion-row style="background-color: #3f3f3f;">
          <ion-col>
            <h4>Joel Glez</h4>
          </ion-col>
        </ion-row>
        <ion-row style="background-color: green;">
          <ion-col>
            <div>
              <h2 class="animate-title">Full-Stack Developer</h2>
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  // Content
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";

export default {
  name: "Portfolio-Home",
  components: {
    IonPage,
    // Content
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
  },
};
</script>
<style scoped></style>
