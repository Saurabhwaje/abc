import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  constructor(private router: Router) {}

  // private aboutLoaded = false;

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: any) {
  //   if (!this.aboutLoaded) {
  //     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //     const triggerPoint = 300; // Adjust this value as needed

  //     if (scrollPosition > triggerPoint) {
  //       this.router.navigate(['/about']);
  //       this.aboutLoaded = true;
  //     }
  //   }
  // }  
  
}
