<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-title>Works</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-sm="6" size-md="4" size-xl="3" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i" >

            <ion-card>
              <ion-card-header>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
                <ion-card-title>Card Title</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                Keep close to Nature's heart... and break clear away, once in
                awhile, and climb a mountain or spend a week in the woods. Wash
                your spirit clean.
              </ion-card-content>
              <ion-item>
                <ion-icon :icon="pin" slot="start"></ion-icon>
                <ion-label
                  >ion-item in a card, icon left, button right</ion-label
                >
                <ion-button fill="outline" slot="end">View</ion-button>
              </ion-item>
            </ion-card>

          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonTitle,
  IonContent,
  IonHeader,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { pin, walk, warning, wifi, wine } from "ionicons/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Portfolio-Works",
  components: {
    IonTitle,
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon,
    IonItem,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
  },

  setup() {
    return { warning, pin, walk, wifi, wine };
  },
});
</script>
