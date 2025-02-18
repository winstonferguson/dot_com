import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static values = {
    landSrc: String,
    portSrc: String,
  }

  initialize() {   
    this.loadSrc();

    window.onresize = () =>  this.loadSrc();
  }

  loadSrc() {
    if(window.innerHeight > window.innerWidth){
      this.element.src = this.portSrcValue;      
    } else {
      this.element.src = this.landSrcValue;   
    }
  }
}
