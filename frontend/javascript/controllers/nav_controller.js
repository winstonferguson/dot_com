import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.onclick = () => this.show(); 
  }

  show() {
    document.querySelector("header").classList.toggle('active-menu');
  }
}
