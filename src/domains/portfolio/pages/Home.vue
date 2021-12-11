<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <profile-info :profile="profile"></profile-info>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import {
  IonPage,
  // Content
  IonContent,
} from "@ionic/vue";
import useData from "../composables/useData";

export default defineComponent({
  name: "Portfolio-Home",
  components: {
    IonPage,
    // Content
    IonContent,
    ProfileInfo: defineAsyncComponent(
      () => import("../components/ProfileInfo.vue")
    ),
  },
  setup() {
    const { getProfile: profile } = useData();

    return {
      profile,
    };
  },
});
</script>
