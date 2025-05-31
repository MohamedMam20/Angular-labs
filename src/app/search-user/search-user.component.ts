import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-user.component.html',
  styleUrl: './search-user.component.css',
})
export class SearchUserComponent {
  searchTerm: string = '';
  showReturn = false;
  @Output() reviceFromChild = new EventEmitter();
  sendToParent() {
    this.reviceFromChild.emit(this.searchTerm);
    this.searchTerm = '';
    this.showReturn = true;
  }
  returnAll() {
    this.reviceFromChild.emit('');
    this.showReturn = false;
  }
}
