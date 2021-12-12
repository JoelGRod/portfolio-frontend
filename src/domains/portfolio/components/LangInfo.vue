<template>
  <!-- Lang -->
  <ion-col size="12" sizeLg="6">
    <ion-list>
      <ion-list-header>
        <ion-label>
          <ion-text color="dark">
            <h2 class="ion-text-uppercase"><strong> Lang </strong></h2>
          </ion-text>
        </ion-label>
      </ion-list-header>
      <ion-item-group v-for="(lang, index) in langs" :key="index">
        <ion-item lines="none">
          <ion-label slot="start" class="ion-text-start">
            <ion-text color="secondary">
              <h3><strong>{{ lang.lang }}</strong></h3>
            </ion-text>
            <ion-text color="primary" class="ion-float-start">
              <h4>{{ lang.level }}</h4>
            </ion-text>
          </ion-label>
          <ion-label slot="end" class="ion-text-end">
            <ion-icon
              v-for="(star, index) in lang.stars"
              :key="index"
              slot="end"
              color="warning"
              :icon="lang.icon"></ion-icon>
          </ion-label>
        </ion-item>
      </ion-item-group>
    </ion-list>
  </ion-col>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonCol,
  IonListHeader,
  IonList,
  IonItemGroup,
  IonItem,
  IonLabel,
  IonText,
  IonIcon
} from "@ionic/vue";
import { LangInfo } from "../interfaces/cards-interfaces";

export default defineComponent({
  name: "About-Lang",
  components: {
    IonCol,
    IonList,
    IonListHeader,
    IonItemGroup,
    IonItem,
    IonLabel,
    IonText,
    IonIcon
  },
  props: {
    langs: {
      type: Object as () => LangInfo[],
      required: true,
    },
  },
});
</script>
