<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="11" class="ion-text-center">
            <h2 class="title">
              <ion-text color="dark">Projects</ion-text>
            </h2>
            <p class="ion-padding-top">
              <ion-text color="dark">
                Some of the projects I have worked on, both professionally and personally.
              </ion-text>
            </p>
            <p class="ion-padding-bottom">
              <ion-text color="dark">
                Hoping that I can increase this list with more interesting projects in the future.
              </ion-text>
            </p>
          </ion-col>
        </ion-row>
        <ion-row class="ion-justify-content-center">
          <ion-col
            size="12"
            size-sm="6"
            size-md="4"
            size-xl="3"
            v-for="(work, index) in works"
            :key="index">
            <work-card :cardInfo="work"></work-card>
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
  IonCol 
} from "@ionic/vue";
import { 
  defineComponent, 
  defineAsyncComponent,
} from "vue";
import useData from "../composables/useData";

export default defineComponent({
  name: "Portfolio-Works",
  components: {
    IonPage,
    // Content
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    WorkCard: defineAsyncComponent(() => import("../components/WorkCard.vue")),
  },

  setup() {
    const { getWorks: works } = useData();

    return { works };
  },
});
</script>

<style scoped>

.title {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--ion-color-medium);
}


</style>
