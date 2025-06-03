import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import products from '../../../products.json';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  productsList: Product[] = products;
}
