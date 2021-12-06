<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
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
import { IonPage, IonContent, IonGrid, IonRow, IonCol } from "@ionic/vue";
import { defineComponent, defineAsyncComponent, computed } from "vue";
import useIcons from "../../shared/composables/useIcons";

export default defineComponent({
  name: "Portfolio-Works",
  components: {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    WorkCard: defineAsyncComponent(() => import("../components/WorkCard.vue")),
  },

  setup() {
    const { logoAngular, logoVue, logoWordpress } = useIcons();
    const works = computed(() => {
      return [
        {
          title: "Chat App",
          subtitle: "Angular",
          content: 
          `A basic chat app created with Angular and NodeJs.
          You only need to register to be able to create your own profiles (chat users) to chat.
          As a security measure, each room can only be entered with a single profile.
          The backend is solved with NodeJs and Express, MongoDb is used as database.`,
          img: "assets/test-photo.jpg",
          icon: logoAngular,
          codeLink: "https://github.com/JoelGRod/Backend-Server-TS-Sockets",
          viewLink: "https://jgrdev-portfolio.herokuapp.com/auth/login",
        },
        {
          title: "Wordpress Page",
          subtitle: "Wordpress",
          content: 
          `A page made for the socio-cultural space El Sitio del Sauzal.
          For its realization, the CMS Wordpress has been used together with the avada template.
          Some elements were developed to satisfy the client needs (styles and custom main menu, all solved with CSS).`,
          img: "assets/test-photo.jpg",
          icon: logoWordpress,
          viewLink: "https://elsitiodelsauzal.com/",
        },
      ];
    });

    return { logoAngular, logoVue, logoWordpress, works };
  },
});
</script>
