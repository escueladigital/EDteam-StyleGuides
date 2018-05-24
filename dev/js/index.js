import {menu} from "./modules/menu"
import {edModal} from "../../node_modules/ed-ui/src/js/modal"
import {edTabs} from "./modules/tabs"
import {videoSize} from "./modules/video"
import {liveLayout} from "./modules/live";
import {stickyAside} from "./modules/course-aside";

window.edModal = edModal
window.edTabs = edTabs

edTabs()
