import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  trainings = [
    { 
      course: "Bachelor's in Information Technology", 
      provider: 'Holy Angel University', 
      year: 2024 },
  ];
}