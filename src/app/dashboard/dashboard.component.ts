import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  subCategory: any;

  ngOnInit(): void {
    this.categoryService.getSubCategory().subscribe((subCategory) => {
      if (subCategory) {
        console.log(subCategory.name);

        this.subCategory = subCategory;
      }
    });
  }
}
