<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div class="ion-text-center img-container">
              <img
                src="assets/profile.png"
                alt="person-image"
                class="profile-img"
              />
            </div>
            <div class="ion-text-center">
              <ion-text color="primary">
                <h1>Joel González</h1>
              </ion-text>
              <ion-text color="secondary">
                <h3>Full-Stack Developer</h3>
              </ion-text>
              <p class="desc-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br />
                Laboriosam rerum voluptatem dolorum iusto,<br />
                fugiat repellat ea impedit?<br />
                Vitae, praesentium optio.<br />
                Molestiae rerum delectus alias commodi <br />
                deleniti explicabo unde quibusdam consequatur?<br />
              </p>
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
} from "@ionic/vue";

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
  },
};
</script>
<style scoped>
.img-container {
  margin-top: calc(100% / 12);
}
.profile-img {
  border-radius: 100%;
  width: calc(100% / 3);
}
.desc-text {
  color: #f3f3f3;
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
