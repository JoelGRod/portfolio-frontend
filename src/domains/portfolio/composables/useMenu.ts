// Interfaces
import { MenuItem } from "@/domains/shared/interfaces/menu.interfaces";
// Icons
import useIcons from "@/domains/shared/composables/useIcons";

const useMenu = () => {

    const { homeOutline, planetOutline, square } = useIcons();

    const menuItems: MenuItem[] = [
        {
          title: "Home",
          icon: homeOutline,
          link: "HomePage"
        },
        {
          title: "Lists",
          icon: planetOutline,
          link: "Lists-1"
        },
        {
          title: "Utility",
          icon: square,
          link: "GridPage"
        },
    ];

    return {
        menuItems
    }
}

export default useMenu;