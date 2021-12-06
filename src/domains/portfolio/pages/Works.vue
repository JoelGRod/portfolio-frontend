<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-sm="6" size-md="4" size-xl="3" v-for="i in [1,2,3,4,5,6,7,8,9,10]" :key="i" >
            <work-card :cardInfo="{
              title: 'test', 
              content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam unde quasi a dolores incidunt voluptates praesentium magni eveniet nostrum, nisi, assumenda saepe maxime dicta autem dolor explicabo culpa molestias.', 
              img: 'assets/test-photo.jpg', 
              icon: logoAngular}">
            </work-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineComponent, defineAsyncComponent } from "vue";
import useIcons from "../../shared/composables/useIcons";

export default defineComponent({
  name: "Portfolio-Works",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    WorkCard: defineAsyncComponent(
      () => import("../components/WorkCard.vue")
    )
  },

  setup() {
    const { logoAngular, logoVue } = useIcons();

    return { logoAngular, logoVue };
  },
});
</script>
