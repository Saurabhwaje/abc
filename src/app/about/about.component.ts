// about.component.ts

import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate(1000)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {
  animationState: string = 'in';

  constructor() { }

  ngOnInit(): void {
  }
}
