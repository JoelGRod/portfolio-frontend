<template>
  <ion-tabs>
    <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button
        v-for="{ tabName, link, icon, tabLabel } in tabItems"
        :key="tabName"
        :tab="tabName"
        @click="navigateUrl(link)">
        <ion-icon :icon="icon" />
        <ion-label> {{ tabLabel }} </ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from "@ionic/vue";
import { TabItem } from "../interfaces/menu.interfaces";

export default {
  name: "TabsComponent",
  components: {
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonRouterOutlet
  },
  props: {
    tabItems: {
      type: Object as () => TabItem[],
      required: true,
    },
  },

  setup() {
    const router = useRouter();

    return {
      navigateUrl: (urlName: string) => {
        router.push({ name: urlName });
      },
    };
  },
};
</script>

<style></style>
