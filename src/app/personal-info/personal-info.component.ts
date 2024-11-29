import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css'],
})
export class PersonalInfoComponent {
  name: string = 'Eljan Joel Y. Pamintuan';
  email: string = 'eypamintuan.work@gmail.com';
  phone: string = '+63 961 754 5113';
  profilePicture: string = 'assets/profile-picture.jpg'; 
}
