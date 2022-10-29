import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import router from "./router/index.js";
import { MotionPlugin } from "@vueuse/motion";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faXmark,
  faAngleUp,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faBars,
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faXmark,
  faAngleUp,
  faHtml5,
  faCss3,
  faJs,
  faVuejs,
  faPhp,
  faAnglesDown
);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .use(VueSweetalert2)
  .use(MotionPlugin)
  .mount("#app");
