import { Controller } from "@hotwired/stimulus"
import { useIntersection } from 'stimulus-use'

export default class extends Controller {
  connect() {
    // this.elements = this.element.querySelectorAll(".observe");

    // console.log(this.elements);
    useIntersection(this, {rootMargin: "-300px"})
    
  }

  appear(entry, observer) {
    // callback automatically triggered when the element
    // intersects with the viewport (or root Element specified in the options)
    this.element.classList.add("visible");
  }

  disappear(entry, observer) {
    // callback automatically triggered when the element
    // leaves the viewport (or root Element specified in the options)
    this.element.classList.remove("visible");
  }
}