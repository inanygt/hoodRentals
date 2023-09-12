import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {}

  subCategory: any;
  subcategories: any;
  subsubcategories: any;

  subId: number = 0;
  id = 1;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const subcategoryId = params['subcategoryId'];
      console.log(subcategoryId);

      // Get subcategories one to many relation
      this.categoryService
        .getSubSubCategories(subcategoryId)
        .subscribe((data) => {
          this.subcategories = data;
          console.log(this.subcategories);
        });
    });
  }
}
