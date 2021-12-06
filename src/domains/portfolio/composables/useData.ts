import { computed } from "vue";
// Icons
import useIcons from "../../shared/composables/useIcons";

const useData = () => {
    const { logoAngular, logoVue, logoWordpress } = useIcons();

    const works = [
        {
          title: "Chat App",
          subtitle: "Angular",
          content: 
          `A basic chat app created with Angular and NodeJs.
          You only need to register to be able to create your own profiles (chat users) to chat.
          As a security measure, each room can only be entered with a single profile.
          The backend is solved with NodeJs and Express, MongoDb is used as database.`,
          img: "assets/test-photo.jpg",
          icon: logoAngular,
          codeLink: "https://github.com/JoelGRod/Backend-Server-TS-Sockets",
          viewLink: "https://jgrdev-portfolio.herokuapp.com/auth/login",
        },
        {
          title: "Wordpress Page",
          subtitle: "Wordpress",
          content: 
          `A page made for the socio-cultural space El Sitio del Sauzal.
          For its realization, the CMS Wordpress has been used together with the avada template.
          Some elements were developed to satisfy the client needs (styles and custom main menu, all solved with CSS).`,
          img: "assets/test-photo.jpg",
          icon: logoWordpress,
          viewLink: "https://elsitiodelsauzal.com/",
        },
    ];

    const getWorks = computed(() => {
        return works;
    });

    return {
        getWorks
    }
}

export default useData;