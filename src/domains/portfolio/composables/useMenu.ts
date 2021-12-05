// Interfaces
import { MenuItem } from "@/domains/shared/interfaces/menu.interfaces";
// Icons
import useIcons from "@/domains/shared/composables/useIcons";

const useMenu = () => {

    const { homeOutline } = useIcons();

    const menuItems: MenuItem[] = [
        {
          title: "Portfolio",
          icon: homeOutline,
          link: "Portfolio-Home"
        },
    ];

    return {
        menuItems
    }
}

export default useMenu;