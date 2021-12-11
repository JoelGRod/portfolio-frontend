<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid fixed>
        <ion-row>
          <!-- Experience -->
          <ion-col size="12" sizeLg="6">
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <ion-text color="dark">
                    <h2 class="ion-text-uppercase">Experience</h2>
                  </ion-text>
                </ion-label>
              </ion-list-header>
              <ion-item-group v-for="(exp, index) in experiences" :key="index">
                <ion-item-divider>
                  <ion-label>
                    <ion-text color="secondary">
                      <h3>{{ exp.profile }} - {{ exp.company }}</h3>
                    </ion-text>
                    <ion-text color="primary">
                      <h4>{{ exp.from }} - {{ exp.to }}</h4>
                    </ion-text>
                  </ion-label>
                </ion-item-divider>
                <ion-item>
                  <ion-label>
                    <ion-text color="dark">
                      <p class="text-content">{{ exp.desc }}</p>
                    </ion-text>
                  </ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
          </ion-col>

          <!-- Education -->
          <ion-col size="12" sizeLg="6">
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <ion-text color="dark">
                    <h2 class="ion-text-uppercase">Education</h2>
                  </ion-text>
                </ion-label>
              </ion-list-header>
              <ion-item-group v-for="(edu, index) in educations" :key="index">
                <ion-item-divider>
                  <ion-label>
                    <ion-text color="secondary">
                      <h3>{{ edu.title }}</h3>
                    </ion-text>
                    <ion-text color="primary">
                      <h4>{{ edu.from }} - {{ edu.to }}</h4>
                    </ion-text>
                  </ion-label>
                </ion-item-divider>
                <ion-item lines="none">
                  <ion-label>
                    <p>{{ edu.academy }}</p>
                  </ion-label>
                  <ion-text color="dark">
                      <p>{{ edu.location }}</p>
                  </ion-text>
                </ion-item>
                <ion-item>
                  <ion-label>
                    <ion-text color="dark">
                      <p class="text-content">{{ edu.desc }}</p>
                    </ion-text></ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
          </ion-col>

          <!-- Lang -->
          <ion-col size="12" sizeLg="6">
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <ion-text color="primary">
                    <h2 class="ion-text-uppercase">Lang</h2>
                  </ion-text>
                </ion-label>
              </ion-list-header>
              <ion-item-group v-for="lang, index in langs" :key="index">
                <ion-item-divider>
                  <ion-label>
                    <ion-text color="secondary">
                      <h3>{{lang.lang}}</h3>
                    </ion-text>
                  </ion-label>
                </ion-item-divider>
                <ion-item lines="none">
                  <ion-label>{{lang.level}}</ion-label>
                  <ion-label>
                    <ion-icon 
                    v-for="star, index in lang.stars" 
                    :key="index" 
                    slot="end"
                    color="success"
                    :icon="lang.icon"></ion-icon>
                  </ion-label>
                </ion-item>
              </ion-item-group>
            </ion-list>
          </ion-col>

          <!-- Knowledge -->
          <ion-col size="12" sizeLg="6">
            <ion-list>
              <ion-list-header>
                <ion-label>
                  <ion-text color="primary">
                    <h2 class="ion-text-uppercase">Knowledge</h2>
                  </ion-text>
                </ion-label>
              </ion-list-header>
              <ion-grid fixed>
                <ion-row>
                  <ion-col size="auto" v-for="knows, index in knowledges" :key="index">
                    <ion-item>
                      <ion-icon slot="start" :icon="knows.icon"></ion-icon> 
                      <ion-label>{{knows.name}}</ion-label>
                    </ion-item>
                  </ion-col>
                </ion-row>
              </ion-grid>
            </ion-list>
          </ion-col>

        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  // Lists
  IonListHeader,
  IonList,
  IonItemGroup,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonIcon
} from "@ionic/vue";
import useData from "../composables/useData";

export default defineComponent({
  name: "Portfolio-About",
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol,
    // Lists
    IonListHeader,
    IonList,
    IonItemGroup,
    IonItemDivider,
    IonItem,
    IonLabel,
    IonIcon
  },
  setup() {
    const {
      getExperience: experiences,
      getEducation: educations,
      getLang: langs,
      getKnowledge: knowledges,
    } = useData();

    return {
      experiences,
      educations,
      langs,
      knowledges,
    };
  },
});
</script>

<style scoped>
.red {
  background-color: red;
}
.green {
  background-color: green;
}
.purple {
  background-color: purple;
}
.text-content {
  white-space: pre-line;
  color: #f3f3f3;
  line-height: 1.5rem;
}
</style>
