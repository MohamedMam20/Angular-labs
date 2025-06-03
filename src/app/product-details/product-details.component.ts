import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product';
import products from '../../../products.json';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  productsList: Product[] = products;
  selectedProduct!: Product;
  constructor(private activedRoute: ActivatedRoute) {}
  ngOnInit() {
    const id = this.activedRoute.snapshot.params['id'];
    this.selectedProduct = this.productsList.find((p) => p.id == id)!;
  }
}
