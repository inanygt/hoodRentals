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

  constructor(
    private categoryService: CategoryService,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
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
}
