import {menu} from "./modules/menu"
import {edModal} from "../../node_modules/ed-ui/src/js/modal"
import {edTabs} from "./modules/tabs"
import {videoSize} from "./modules/video"
import {liveLayout} from "./modules/live";
import {stickyCard} from "./modules/sticky-card";
import {loadWithoutScroll} from "./modules/helpers";
import {cloneCardCourse} from "./modules/course";

window.edModal = edModal
window.edTabs = edTabs
window.stickyCard = stickyCard

edTabs()

// Sticky card de curso
stickyCard('course-title', 'course-temary','course-card')

