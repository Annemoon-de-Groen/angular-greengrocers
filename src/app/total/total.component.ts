import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  constructor(private readonly storeService: StoreService) {

  }

  price = this.storeService.totalPrice

  formatPrice(): string {
    let Dollar = new Intl.NumberFormat('en-us', {
      style: 'currency',
      currency: 'EUR'
    });
    return Dollar.format(this.price.price)
  }
}
