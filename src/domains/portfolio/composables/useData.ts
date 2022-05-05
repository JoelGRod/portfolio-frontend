import { computed } from "vue";
// Icons
import useIcons from "../../shared/composables/useIcons";
// Interfaces
import { 
  WorkCardInfo, 
  SocialMediaInfo,
  ProfileInfo,
  ExperienceInfo,
  EducationInfo,
  LangInfo,
  KnowledgeInfo
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
    logoHtml5,
    logoCss3,
    logoSass,
    logoJavascript,
    logoPython,
    logoIonic,
    logoNodejs,
    cubeOutline,
    logoDocker,
    pencilOutline,
    star
  } = useIcons();

  const getWorks = computed((): WorkCardInfo[] => {
    const projects = jgr.projects.map((proj) => {
      if (proj.icon === "logoAngular") proj.icon = logoAngular;
      if (proj.icon === "logoVue") proj.icon = logoVue;
      if (proj.icon === "logoWordpress") proj.icon = logoWordpress;
      if (proj.icon === "logoPython") proj.icon = logoPython;
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
  });

  const getExperience = computed((): ExperienceInfo[] => {
    return jgr.experience;
  });

  const getEducation = computed((): EducationInfo[] => {
    return jgr.education;
  });

  const getLang = computed((): LangInfo[] => {
    const langs = jgr.lang.map((lang) => {
      if(lang.icon === "star") lang.icon = star;
      return lang;
    });
    return langs;
  });

  const getKnowledge = computed((): KnowledgeInfo[] => {
    const knows = jgr.knowledge.map(know => {
      if(know.icon === "logoHtml5") know.icon = logoHtml5;
      if(know.icon === "logoCss3") know.icon = logoCss3;
      if(know.icon === "logoSass") know.icon = logoSass;
      if(know.icon === "logoJavascript") know.icon = logoJavascript;
      if(know.icon === "logoPython") know.icon = logoPython;
      if(know.icon === "logoVue") know.icon = logoVue;
      if(know.icon === "logoAngular") know.icon = logoAngular;
      if(know.icon === "logoIonic") know.icon = logoIonic;
      if(know.icon === "logoNodejs") know.icon = logoNodejs;
      if(know.icon === "cubeOutline") know.icon = cubeOutline;
      if(know.icon === "logoWordpress") know.icon = logoWordpress;
      if(know.icon === "logoDocker") know.icon = logoDocker;
      if(know.icon === "pencilOutline") know.icon = pencilOutline;
      return know;
    });
    return knows;
  });

  return {
    getWorks,
    getSocial,
    getProfile,
    getExperience,
    getEducation,
    getLang,
    getKnowledge
  };
};

export default useData;
