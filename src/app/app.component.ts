import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showSkillsSection = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Check the scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // Set a threshold value to trigger the display of skills section
    const threshold = 500; // Adjust as needed

    // If the scroll position is greater than the threshold, show the skills section
    this.showSkillsSection = scrollPosition > threshold;
  }
}
