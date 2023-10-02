import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-horizontal-cards',
  templateUrl: './horizontal-cards.component.html',
  styleUrls: ['./horizontal-cards.component.css'],
})
export class HorizontalCardsComponent implements OnInit {
  categories: any;
  items: any;
  userId: number = 1;
  categoryId: number = 1;
  selectedCategoryId: number = 1;

  @Output() categorySelected: EventEmitter<number> = new EventEmitter<number>();

  // Emit selected CategoryId;
  changeCategorySelected() {
    this.categorySelected.emit(this.selectedCategoryId);
  }

  getCategoryId(catId: number) {
    this.selectedCategoryId = catId;
    this.changeCategorySelected();
  }

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Get all categories
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }
}
