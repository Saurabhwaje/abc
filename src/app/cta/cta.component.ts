import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrl: './cta.component.css',
  animations: [
    trigger('boxAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class CtaComponent {
  constructor(private router: Router) {}

  // showExperienceDetails = false;

  // toggleExperienceDetails() {
  //   this.showExperienceDetails = !this.showExperienceDetails;
  // }

  ////////////////////////////////////////////////////////

  showExperienceDetails = false;
  showEducationDetails = false;
  showAnotherContainer = false;

  toggleExperienceDetails() {
    this.showExperienceDetails = !this.showExperienceDetails;
    this.showAnotherContainer = false; // Hide another container if experience details are shown
  }

  toggleEducationDetails() {
    this.showEducationDetails = !this.showEducationDetails;
    this.showAnotherContainer = false; // Hide another container if education details are shown
  }

  boxState: string = 'fadeIn';
  loading: boolean = true;

  ngOnInit(): void {
    // Simulate loading delay
    setTimeout(() => {
      this.loading = false; // Set loading to false after a delay
    }, 2000); // Adjust the delay time as needed
  }

  // private aboutLoaded = false;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   if (!this.aboutLoaded) {
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     const triggerPoint = 300; // Adjust this value as needed

  //     if (scrollPosition > triggerPoint) {
  //       this.router.navigate(['/contacts']);
  //       this.aboutLoaded = true;
  //     }
  //   }
  // }
}
