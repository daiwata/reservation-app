import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/pruduct.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // this.product = products[params.get('productId')];
      // this.product = this.productService.getProductById(+params.get('productId'))
      debugger
      const productObservable = this.productService.getProductById(params.get('productId'))

      productObservable.subscribe(
        (data) => { this.product = data },
        (error) => { }
      )

    });
  }

}
