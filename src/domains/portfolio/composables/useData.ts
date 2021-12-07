import { computed } from "vue";
// Icons
import useIcons from "../../shared/composables/useIcons";
// Interfaces
import { WorkCardInfo } from "../interfaces/cards-interfaces";
// Data repo
import { jgr } from "../repository/profiles.json";

const useData = () => {
  const { logoAngular, logoVue, logoWordpress } = useIcons();

  const getWorks = computed(() => {
    const projects = jgr.projects.map( proj => {
      if ( proj.icon === "logoAngular" ) proj.icon = logoAngular;
      if ( proj.icon === "logoVue" ) proj.icon = logoVue;
      if ( proj.icon === "logoWordpress" ) proj.icon = logoWordpress;
      return proj;
    });
    return projects;
  });

  return {
    getWorks,
  };
};

export default useData;
