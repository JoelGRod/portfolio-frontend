<template>
  <!-- Education -->
  <ion-col size="12" sizeLg="6">
    <ion-list>
      <ion-list-header>
        <ion-label>
          <ion-text color="dark">
            <h2 class="ion-text-uppercase">
              <strong> Education </strong>
            </h2>
          </ion-text>
        </ion-label>
      </ion-list-header>
      <ion-item-group v-for="(edu, index) in educations" :key="index">
        <ion-item-divider>
          <ion-label slot="start" class="ion-text-start">
            <ion-text color="secondary">
              <h3>
                <strong>{{ edu.title }}</strong>
              </h3>
            </ion-text>
            <ion-text color="primary">
              <h4 class="pt-02">{{ edu.academy }}</h4>
            </ion-text>
            <ion-text color="medium" class="ion-hide-sm-up">
              <h5>{{ edu.from }} - {{ edu.to }}</h5>
            </ion-text>
          </ion-label>
          <ion-label
            slot="end"
            class="ion-padding-end ion-text-end ion-hide-sm-down"
          >
            <ion-text color="medium">
              <p>{{ edu.location }}</p>
            </ion-text>
            <ion-text color="medium" class="ion-float-end">
              <h4>{{ edu.from }} - {{ edu.to }}</h4>
            </ion-text>
          </ion-label>
        </ion-item-divider>
        <ion-item>
          <ion-label>
            <ion-text color="dark">
              <p class="text-content">{{ edu.desc }}</p>
            </ion-text></ion-label
          >
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
  IonItemDivider,
  IonItem,
  IonLabel,
  IonText,
} from "@ionic/vue";
import { EducationInfo } from "../interfaces/cards-interfaces";

export default defineComponent({
  name: "About-Education",
  components: {
    IonCol,
    IonList,
    IonListHeader,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonLabel,
    IonText,
  },
  props: {
    educations: {
      type: Object as () => EducationInfo[],
      required: true,
    },
  },
});
</script>
