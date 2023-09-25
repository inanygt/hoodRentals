import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  categories: any;
  items: any;
  catId: any;
  categoryId: number = 1;

  constructor(private categoryService: CategoryService) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });

    // Get items from categories cards
    this.categoryService.getItemsFromCat(this.categoryId).subscribe((data) => {
      this.items = data;
    });
  }

  catRefresh(catId: number) {
    // event.preventDefault();
    this.categoryId = catId;
    console.log(this.categoryId);

    // update cards with new catId
    this.categoryService.getItemsFromCat(this.categoryId).subscribe((data) => {
      this.items = data;
    });
  }
}
