<template>
  <!-- Knowledge -->
  <ion-col size="12" sizeLg="6">
    <ion-list>
      <ion-list-header>
        <ion-label>
          <ion-text color="dark">
            <h2 class="ion-text-uppercase"><strong> Knowledge </strong></h2>
          </ion-text>
        </ion-label>
      </ion-list-header>
      <ion-grid fixed>
        <ion-row>
          <ion-col
            size="auto"
            v-for="(knows, index) in knowledges"
            :key="index">
            <ion-item lines="none">
              <ion-icon slot="start" :icon="knows.icon"></ion-icon>
              <ion-label>{{ knows.name }}</ion-label>
            </ion-item>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-list>
  </ion-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonListHeader,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonIcon,
} from "@ionic/vue";
import { KnowledgeInfo } from "../interfaces/cards-interfaces";

export default defineComponent({
  name: "About-Knowledge",
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonListHeader,
    IonItem,
    IonLabel,
    IonText,
    IonIcon,
  },
  props: {
    knowledges: {
      type: Object as () => KnowledgeInfo,
      required: true,
    },
  },
});
</script>
