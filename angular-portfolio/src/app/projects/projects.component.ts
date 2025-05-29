import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-commerce Site',
      imageUrl: 'assets/projects/Ecommerce.png',
      link: '#',
      description: 'Online store with product listings and cart',
    },
    {
      title: 'YouTube Clone',
      imageUrl: 'assets/projects/youtube.png',
      link: '#',
      description:
        'A responsive YouTube interface clone with video playback functionality',
    },
    {
      title: 'Twitter Clone',
      imageUrl: 'assets/projects/Twitter.png',
      link: '#',
      description: 'Twitter-like social media interface with post creation',
    },
    {
      title: 'Register Form',
      imageUrl: 'assets/projects/Registerform.png',
      link: '#',
      description: 'User registration form with validation',
    },
    {
      title: 'Profile Card',
      imageUrl: 'assets/projects/profilecard.png',
      link: '#',
      description: 'Interactive user profile card component',
    },
  ];
}
