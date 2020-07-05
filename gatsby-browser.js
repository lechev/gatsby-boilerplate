import {initCursor} from "./src/utils/cursor"
import SmoothScroll from "smooth-scroll"

export function onRouteUpdate() {
  initCursor()

  new SmoothScroll(`a[href*="#"]`, {
    speed: 800,
    speedAsDuration: true
  })
}
