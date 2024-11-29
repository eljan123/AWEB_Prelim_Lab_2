import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  experiences = [
    { 
      role: 'Assistant App Developer', 
      company: 'Toro Cloud', 
      description: 'Developed Medical Healthcare application.', 
      duration: '2021' },
  ];
}