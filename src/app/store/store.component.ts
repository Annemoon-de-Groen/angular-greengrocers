import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from '../models/item';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  constructor(private readonly storeService: StoreService) {
  }
  items = this.storeService.store
  filteredList: Promise<Item[]> = this.items

  getImage(id: string): string {
    return `assets/icons/${id}.svg`
  }
  addToCart(item: Item) {
    this.storeService.addItemToCart(item)
  }



  getFilteredList(filter: string) {
    if (filter === "") this.filteredList = this.items
    else {
      this.filteredList = this.items.then((data) => data.filter((x) => x.type === filter))
    }
  }

  sortList(sortMethod: string) {
    if (sortMethod === 'price') this.filteredList.then((data) => data.sort((a, b) => a.price - b.price))
    if (sortMethod === 'name') this.filteredList.then((data) => data.sort((a, b) => a.name.localeCompare(b.name)))

  }


}
