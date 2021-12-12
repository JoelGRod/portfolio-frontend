// Interfaces
import { TabItem } from "@/domains/shared/interfaces/menu.interfaces";
// Composables
import useIcons from "@/domains/shared/composables/useIcons";

const useTabs = () => {
  const { 
    homeOutline, 
    codeWorkingOutline, 
    personOutline, 
    mailOutline 
  } = useIcons();

  const tabItems: TabItem[] = [
    {
      tabName: "home-tab",
      link: "Portfolio-Home",
      icon: homeOutline,
      tabLabel: "Home",
    },
    {
      tabName: "projects-tab",
      link: "Portfolio-Demos",
      icon: codeWorkingOutline,
      tabLabel: "projects",
    },
    {
      tabName: "about-tab",
      link: "Portfolio-About",
      icon: personOutline,
      tabLabel: "About",
    },
    // {
    //   tabName: "contact-tab",
    //   link: "Portfolio-Contact",
    //   icon: mailOutline,
    //   tabLabel: "Contact",
    // },
  ];

  return {
    tabItems,
  };
};

export default useTabs;
