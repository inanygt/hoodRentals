import { Component, OnInit } from '@angular/core';
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

  selectedCategoryId: number | null = null; // no category selected

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

  catRefresh(catId: number) {
    // this.categoryId = catId;
    this.selectedCategoryId = catId;
    this.loadItemsByCategoryId(catId);
  }

  loadItemsByCategoryId(categoryId: number) {
    this.categoryService.getItemsFromCat(categoryId).subscribe((data) => {
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
