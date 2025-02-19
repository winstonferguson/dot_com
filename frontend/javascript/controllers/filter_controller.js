import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "category" ]



  connect() {
    this.filterValues = [];
    this.projects = document.querySelectorAll(".project");

    for (const category of this.categoryTargets) {
      category.onclick = (event) => this.toggle(event)
    }
  }

  toggle(event) {
    event.target.classList.toggle('active');
    this.setFilterValues(event.target.dataset.filterValue)
  }

  setFilterValues(value) {
    if ( this.filterValues.includes(value) ) {
      this.filterValues = this.filterValues.filter(item => item !== value);
    } else {
      this.filterValues.push(value);
    }

    if ( this.filterValues.length == 0 ) {
      this.showAll();
    } else {
      this.filterAll();
    }
  }

  showAll() {
    for (const project of this.projects ) {
      project.style.display = "flex";
    }
  }

  filterAll() {
    for (const project of this.projects ) {
      let projectValues = JSON.parse(project.dataset.categories);

      if ( projectValues.some( v => this.filterValues.includes(v) )) {
        project.style.display = "flex";
      } else {
        project.style.display = "none";
      }
    }
  }
}
