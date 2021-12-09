<template>
  <ion-page>
    <MenuComponent :menuItems="menuItems" contentId="home-content">
    </MenuComponent>

    <master-layout
      title="JGR Portfolio"
      layoutId="home-content"
      :isMenuActive="false"
      :rrss="social">
      <TabsComponent :tabItems="tabItems"></TabsComponent>
    </master-layout>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
// Ionic components
import { IonPage } from "@ionic/vue";
// Composables
import useTabs from "../composables/useTabs";
import useMenu from "../composables/useMenu";
import useData from "../composables/useData";

export default defineComponent({
  name: "PortfolioLayout",
  components: {
    IonPage,
    TabsComponent: defineAsyncComponent(
      () => import("../../shared/components/TabsComponent.vue")
    ),
    MenuComponent: defineAsyncComponent(
      () => import("../../shared/components/MenuComponent.vue")
    )
  },

  setup() {
    const { tabItems } = useTabs();
    const { menuItems } = useMenu();
    const { getSocial: social } = useData();
    
    return {
      tabItems,
      menuItems,
      social
    };
  },
});
</script>
