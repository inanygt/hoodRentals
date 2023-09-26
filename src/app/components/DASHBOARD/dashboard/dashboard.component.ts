import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../../services/item.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  // Categories
  category: any;
  categories: any;
  subCategory: any;
  subcategories: any;
  subsubcategories: any;

  userId: number = 0;

  // Category ID
  items: any;

  ngOnInit(): void {
    // Route Params
    this.route.params.subscribe((params) => {
      const subcategoryId = params['subcategoryId'];
      const categoryId = params['categoryId'];

      // Get items subcategory
      this.itemService.getSubItems(subcategoryId).subscribe((data) => {
        this.items = data;
        console.log(data);

        // Iterate through items and fetch user names
        this.items.forEach((item: any, index: any) => {
          this.userService
            .getUserById(item.user_id)
            .subscribe((userData: any) => {
              this.items[index].user_id = userData.name;
            });
        });
      });

      this.categoryService.getCategoryData(categoryId).subscribe((data) => {
        console.log(data);
        this.category = data;
      });

      // Get subcategories one to many relation
      this.categoryService
        .getSubSubCategories(subcategoryId)
        .subscribe((data) => {
          this.subcategories = data;
        });
    });
  }
}
