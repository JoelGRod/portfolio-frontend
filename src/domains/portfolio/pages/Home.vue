<template>
  <ion-page>
    <ion-content :fullscreen="true">
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

              <ion-item
                color="none"
                class="ion-text-center profile-icons"
                lines="none"
              >
                <ion-label class="ion-text-center">
                  <ion-icon
                    :icon="homeOutline"
                    color="secondary"
                    size="large"
                  ></ion-icon>
                  <ion-text color="primary">
                    <p>{{ profile.location }}</p>
                  </ion-text>
                </ion-label>
                <ion-label class="ion-text-center">
                  <ion-icon
                    :icon="mailOutline"
                    color="secondary"
                    size="large"
                  ></ion-icon>
                  <ion-text color="primary">
                    <p>
                      <a :href="'mailto:' + profile.email">
                        {{ profile.email }}
                      </a>
                    </p>
                  </ion-text>
                </ion-label>
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
  IonLabel,
} from "@ionic/vue";
import useData from "../composables/useData";
import useIcons from "../../../domains/shared/composables/useIcons";

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
    IonLabel,
  },
  setup() {
    const { getProfile: profile } = useData();
    const { mailOutline, homeOutline } = useIcons();
    return {
      profile,
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
