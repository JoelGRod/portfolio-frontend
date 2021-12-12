<template>
  <ion-grid class="container">
    <ion-row class="flex-row ion-align-items-center">
      <ion-col size="12">
        <div class="ion-text-center">
          <img :src="profile.img" alt="profile-image" class="profile-img" />
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

          <ion-grid class="profile-icons">
            <ion-row class="ion-justify-content-center">
              <ion-col size="6" sizeSm="4" sizeMd="3" sizeLg="2">
                <ion-label>
                  <ion-icon
                    :icon="homeOutline"
                    color="secondary"
                    size="large"></ion-icon>
                  <ion-text color="primary">
                    <p>{{ profile.location }}</p>
                  </ion-text>
                </ion-label>
              </ion-col>
              <ion-col size="6" sizeSm="4" sizeMd="3" sizeLg="2">
                <ion-label>
                  <ion-icon
                    :icon="mailOutline"
                    color="secondary"
                    size="large"></ion-icon>
                  <ion-text color="primary">
                    <p>
                      <a :href="'mailto:' + profile.email">{{ profile.email }}</a>
                    </p>
                  </ion-text>
                </ion-label>
              </ion-col>
            </ion-row>
          </ion-grid>
          
        </div>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import {
  // Profile
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import useIcons from "../../../domains/shared/composables/useIcons";
import { ProfileInfo } from "../interfaces/cards-interfaces";

export default {
  name: "Profile-Info",
  components: {
    // Profile
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonIcon,
    IonLabel,
  },
  props: {
    profile: {
      type: Object as () => ProfileInfo,
      required: true,
    },
  },
  setup() {
    const { mailOutline, homeOutline } = useIcons();
    return {
      mailOutline,
      homeOutline,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: column;
  height: 100%;
}
.flex-row {
  flex-grow: 1;
}
.profile-img {
  border-radius: 100%;
  width: 35%;
}
.desc-text {
  padding: 2% 8%;
  line-height: 1.5rem;
  white-space: pre-line;
}

@media screen and (max-height: 660px) {
  .profile-icons {
    margin-bottom: 3rem;
  }
}
@media screen and (min-width: 576px) {
  .profile-img {
    width: calc(100% / 4);
  }
}
@media screen and (min-width: 768px) {
  .profile-img {
    width: calc(100% / 5);
  }
}
@media screen and (min-width: 992px) {
  .profile-img {
    width: calc(100% / 6);
  }
}
@media screen and (min-width: 1200px) {
  .profile-img {
    width: calc(100% / 7);
  }
}
</style>
