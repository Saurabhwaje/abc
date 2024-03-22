import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private router: Router) {}
  expandedExperience = false;
  expandedEducation = false;

  expandExperience() {
    this.expandedExperience = !this.expandedExperience;
  }

  private navigateToExperience(): void {
    this.router.navigate(['/login']);
  }

  expandEducation() {
    this.expandedEducation = !this.expandedEducation;
  }
}
