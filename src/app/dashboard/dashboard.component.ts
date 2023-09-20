import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute
  ) {}

  // Categories
  category: any;
  categories: any;
  subCategory: any;
  subcategories: any;
  subsubcategories: any;

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
