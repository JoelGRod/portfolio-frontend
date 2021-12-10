import { computed } from "vue";
// Icons
import useIcons from "../../shared/composables/useIcons";
// Interfaces
import { 
  WorkCardInfo, 
  SocialMediaInfo,
  ProfileInfo
} from "../interfaces/cards-interfaces";
// Data repo
import { jgr } from "../repository/profiles.json";

const useData = () => {
  const {
    logoAngular,
    logoVue,
    logoWordpress,
    logoLinkedin,
    logoGithub,
    logoTwitter,
    logoInstagram,
  } = useIcons();

  const getWorks = computed((): WorkCardInfo[] => {
    const projects = jgr.projects.map((proj) => {
      if (proj.icon === "logoAngular") proj.icon = logoAngular;
      if (proj.icon === "logoVue") proj.icon = logoVue;
      if (proj.icon === "logoWordpress") proj.icon = logoWordpress;
      return proj;
    });
    return projects;
  });

  const getSocial = computed((): SocialMediaInfo[] => {
    const socials = jgr.rrss.map((social) => {
      if (social.icon === "logoLinkedin") social.icon = logoLinkedin;
      if (social.icon === "logoGithub") social.icon = logoGithub;
      if (social.icon === "logoTwitter") social.icon = logoTwitter;
      if (social.icon === "logoInstagram") social.icon = logoInstagram;
      return social;
    });
    return socials;
  });

  const getProfile = computed((): ProfileInfo => {
    return jgr.profile;
  })

  return {
    getWorks,
    getSocial,
    getProfile
  };
};

export default useData;
