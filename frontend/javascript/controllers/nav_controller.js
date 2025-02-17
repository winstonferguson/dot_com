import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.onclick = () => this.show(); 
  }

  show() {
    this.element.closest('links').classList.add('active');
  }
}
