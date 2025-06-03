import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css',
})
export class ItemCardComponent {
  @Input() product!: Product;
  constructor(private router: Router) {}
  showMovieDetail(id: number) {
    console.log(id);
    this.router.navigate(['app-product-details', id]);
  }
}
