import { Component } from '@angular/core';
import { UserCardComponent } from '../app/user-card/user-card.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'title';
}
