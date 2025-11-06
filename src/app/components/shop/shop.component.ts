import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { products } from '../../model/products.model'

@Component({
  selector: 'app-shop',
  imports: [CommonModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  standalone: true
})
export class ShopComponent implements OnInit {

  productList = products;

  constructor() { }

  ngOnInit() {
  }

}
