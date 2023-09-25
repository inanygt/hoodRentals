import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { UserService } from '../user.service';

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

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });

    // Get items from categories cards
    this.categoryService.getItemsFromCat(this.categoryId).subscribe((data) => {
      this.items = data;

      // Add corresponding user name to userId
      this.items.forEach((userId: number, index: any) => {
        this.userService.getUserById(this.userId).subscribe((data) => {
          this.items[index].user_id = data.name;
        });
      });
    });
  }

  catRefresh(catId: number) {
    this.categoryId = catId;
    console.log(this.categoryId);

    // update cards with new catId
    this.categoryService.getItemsFromCat(this.categoryId).subscribe((data) => {
      this.items = data;

      // Add corresponding user name to userId
      this.items.forEach((userId: number, index: any) => {
        this.userService.getUserById(this.userId).subscribe((data) => {
          this.items[index].user_id = data.name;
        });
      });
    });
  }
}
