<template>
  <ion-page :id="layoutId">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" v-if="isMenuActive">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title> {{ title }} </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  name: "MasterLayout",
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonContent,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    layoutId: {
      type: String,
      required: true,
      default: "page-content",
    },
    isMenuActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
};
</script>

<style></style>
