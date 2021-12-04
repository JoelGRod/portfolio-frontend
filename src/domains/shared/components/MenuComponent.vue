<template>
  <ion-menu menu-id="side-menu" side="start" :content-id="contentId">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title> {{ title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="menu-content">
      <ion-list>
        <ion-item 
          v-for="{ title, icon, link } in menuItems" 
          :key="title" 
          @click="navigateUrl( link )">
          <ion-icon :icon="icon" slot="start"></ion-icon>
          <ion-label>{{ title }}</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
// Ionic components
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  menuController,
} from "@ionic/vue";
// Interfaces
import { MenuItem } from "../interfaces/menu.interfaces";

export default defineComponent({
  name: "SideMenu",
  props: {
    title: {
      type: String,
      required: false,
      default: "Home Menu",
    },
    menuItems: {
      type: Object as () => MenuItem[],
      required: true,
    },
    contentId: {
      type: String,
      required: true,
      default: "page-content"
    }
  },
  components: {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
  },

  setup() {
    const router = useRouter();

    return {
      navigateUrl: (urlName: string) => {
        router.push( { name: urlName } );
        menuController.close("side-menu");
      },
    };
  },
});
</script>

<style></style>
