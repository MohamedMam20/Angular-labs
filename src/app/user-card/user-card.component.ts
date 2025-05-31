import { Component, Input, OnChanges } from '@angular/core';
import { User } from './user.model';
import { CommonModule } from '@angular/common';
import { SearchUserComponent } from '../search-user/search-user.component';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, SearchUserComponent],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css',
})
export class UserCardComponent {
  Users: User[] = [
    {
      name: 'Ayman',
      email: 'Ayman@gmail.com',
      phone: '0456546511',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Mohamed',
      email: 'Mohamed@gmail.com',
      phone: '0564654654',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Ziad',
      email: 'Ziad22@gmail.com',
      phone: '0115456459',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Sayed',
      email: 'Sayed@gmail.com',
      phone: '0213426567',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Ahmed',
      email: 'Ahmed@gmail.com',
      phone: '0345678901',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Omar',
      email: 'Omar@gmail.com',
      phone: '0678901234',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Tamer',
      email: 'Tamer@gmail.com',
      phone: '0789012345',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
    {
      name: 'Mahmoud',
      email: 'Mahmoud@gmail.com',
      phone: '0890123456',
      url: 'https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740',
    },
  ];
  filterdUsers: User[] = [...this.Users];
  reviceFromChild(value: string) {
    if (!value) {
      this.filterdUsers = [...this.Users];
    } else {
      const regex = new RegExp(`^${value}`, 'i');
      this.filterdUsers = this.Users.filter((user) => regex.test(user.email));
    }
  }
}
