import { initCursor } from "./src/utils/cursor"
import SmoothScroll from "smooth-scroll"

export function onRouteUpdate() {
  initCursor()

  if(document.querySelector(`a[href*="#"]`)) {
    new SmoothScroll(`a[href*="#"]`, {
      speed: 800,
      offset: 50,
      speedAsDuration: true
    })
  }
}
