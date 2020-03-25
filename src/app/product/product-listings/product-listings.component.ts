import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/pruduct.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts()

    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next("ss");
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 3000);
    });

    debugger
    console.log('subscribe前');
    debugger
    observable.subscribe({
      next(x) { console.log('データ： ' + x); },
      error(err) { console.error('エラー: ' + err); },
      complete() { console.log('完了'); }
    });
    console.log('subscribeから抜けました！');
  }

}
