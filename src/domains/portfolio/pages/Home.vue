<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="img-container">
              <img
                src="assets/profile.png"
                alt="person-image"
                class="profile-img"
              />
            </div>
            <div class="ion-text-center">
              <ion-text color="primary">
                <h1>{{ profile.name }}</h1>
              </ion-text>
              <ion-text color="secondary">
                <h3>{{ profile.specialization }}</h3>
              </ion-text>
              <ion-text color="dark">
                <p class="desc-text">
                  {{ profile.desc }}
                </p>
              </ion-text>
              <ion-item>
                <ion-icon
                  icon="mailOutline"
                  color="secondary"
                  size="large"
                  slot="start"
                ></ion-icon>
                <a :href="'mailto:' + profile.email">
                  {{ profile.email }}
                </a>
              </ion-item>
            </div>
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
  // Profile
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonItem,
  IonIcon,
} from "@ionic/vue";
import useData from "../composables/useData";
import useIcons from "@/domains/shared/composables/useIcons";

export default {
  name: "Portfolio-Home",
  components: {
    IonPage,
    // Content
    IonContent,
    // Profile
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonItem,
    IonIcon,
  },
  setup() {
    const { getProfile: profile } = useData();
    const { mailOutline } = useIcons();
    return {
      profile,
      mailOutline,
    };
  },
};
</script>
<style scoped>
.img-container {
  display: flex;
  justify-content: center;
  margin-top: 3%;
}
.profile-img {
  border-radius: 100%;
  width: 35%;
}
.desc-text {
  padding: 2% 8%;
  line-height: 1.5rem;
}

/* @media screen and (min-width: 500px) {
  .img-container {
    margin-top: calc(100% / 20);
  }
  .profile-img {
    border-radius: 100%;
    width: calc(100% / 4);
  }
} */
</style>
