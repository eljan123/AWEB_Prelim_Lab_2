import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  degrees = [
    { degree: "Bachelor's in Information Technology", 
      university: 'Holy Angel University', 
      year: 2026 },
  ];
}