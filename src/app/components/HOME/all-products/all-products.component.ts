import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { UserService } from '../../../services/user.service';

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
  userId: number = 1;
  item: any;
  selectedCategoryId: number = 1;
  totalItems: number = 0;

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    // Get items from categories cards
    this.categoryService
      .getItemsFromCat(this.selectedCategoryId)
      .subscribe((data) => {
        this.items = data;
        this.totalItems = this.items.length;

        // Add corresponding user name to userId
        this.items.forEach((userId: number, index: any) => {
          this.userService.getUserById(this.userId).subscribe((data) => {
            this.items[index].user_id = data.name;
          });
        });
      });
  }

  selectedCategory(data: number) {
    this.selectedCategoryId = data;
    this.loadItemsByCategoryId(this.selectedCategoryId);
  }

  loadItemsByCategoryId(selectedCategoryId: number) {
    this.categoryService
      .getItemsFromCat(selectedCategoryId)
      .subscribe((data) => {
        this.items = data;
        console.log(this.items);
        this.totalItems = this.items.length;
        // Add corresponding user name to userId
        this.items.forEach((userId: number, index: any) => {
          this.userService.getUserById(this.userId).subscribe((data) => {
            this.items[index].user_id = data.name;
          });
        });
      });
  }
}
