<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-grid fixed>
        <ion-row>
          <!-- Experience -->
          <experience-info :experiences="experiences"></experience-info>
          <!-- Education -->
          <education-info :educations="educations"></education-info>
          <!-- Lang -->
          <lang-info :langs="langs"></lang-info>
          <!-- Knowledge -->
          <knowledge-info :knowledges="knowledges"></knowledge-info>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import useData from "../composables/useData";
import KnowledgeInfo from "../components/KnowledgeInfo.vue";

export default defineComponent({
  name: "Portfolio-About",
  components: {
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    ExperienceInfo: defineAsyncComponent(() => import("../components/ExperienceInfo.vue")),
    EducationInfo: defineAsyncComponent(() => import("../components/EducationInfo.vue")),
    LangInfo: defineAsyncComponent(() => import("../components/LangInfo.vue")),
    KnowledgeInfo: defineAsyncComponent(() => import("../components/KnowledgeInfo.vue")),
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

<style>
.pt-02 {
  padding-top: 0.2rem;
}
.text-content {
  white-space: pre-line;
  color: #f3f3f3;
  line-height: 1.5rem;
}
</style>
