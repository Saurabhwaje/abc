import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: { name: string, iconClass: string }[] = [
    { name: 'Angular', iconClass: 'fab fa-angular' },
    { name: 'React', iconClass: 'fab fa-react' },
    { name: 'Vue.js', iconClass: 'fab fa-vuejs' },
    { name: 'Node.js', iconClass: 'fab fa-node-js' },
    { name: 'Express.js', iconClass: 'fab fa-node-js' },
    { name: 'MongoDB', iconClass: 'fab fa-envira' },
    { name: 'MySQL', iconClass: 'fas fa-database' },
    { name: 'Firebase', iconClass: 'fas fa-fire' },
    { name: 'HTML5', iconClass: 'fab fa-html5' },
    { name: 'CSS3', iconClass: 'fab fa-css3-alt' },
    { name: 'JavaScript', iconClass: 'fab fa-js' },
    { name: 'TypeScript', iconClass: 'fab fa-js' },
    { name: 'SASS', iconClass: 'fab fa-sass' },
    { name: 'Bootstrap', iconClass: 'fab fa-bootstrap' },
    { name: 'Material UI', iconClass: 'fab fa-react' },
    { name: 'Redux', iconClass: 'fab fa-react' },
    { name: 'GraphQL', iconClass: 'fas fa-database' },
    { name: 'RESTful API', iconClass: 'fas fa-code' },
    { name: 'Docker', iconClass: 'fab fa-docker' },
    { name: 'Kubernetes', iconClass: 'fas fa-network-wired' }
    // Add more relevant skills as needed
  ];

  constructor() { }

  ngOnInit(): void {
    this.shuffleSkills();
  }

  shuffleSkills() {
    for (let i = this.skills.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.skills[i], this.skills[j]] = [this.skills[j], this.skills[i]];
    }
  }
}
