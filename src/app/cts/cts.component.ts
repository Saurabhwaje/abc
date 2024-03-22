import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cts',
  templateUrl: './cts.component.html',
  styleUrl: './cts.component.css'
})
export class CtsComponent {

  constructor(private router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const triggerPoint = 200; // Adjust this value as needed

    if (scrollPosition > triggerPoint) {
      this.router.navigate(['/contacts']);
    }
  }
  
}
