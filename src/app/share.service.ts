import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShareService {
  constructor() {}

  categoryId: number;
  subCategoryId: number;
  subSubCategoryId: number;

  setCategoryId(id: number) {
    this.categoryId = id;
    console.log('the category id is set to: ', this.categoryId);
  }

  getCategoryId() {
    return this.categoryId;
  }

  setSubCategoryId(id: number) {
    this.subCategoryId = id;
    console.log('the subcategory id is set to: ', this.subCategoryId);
  }

  getSubCategoryId() {
    return this.subCategoryId;
  }

  setSubSubCategoryId(id: number) {
    this.subSubCategoryId = id;
    console.log('the subsubcategory id is set to: ', this.subSubCategoryId);
  }

  getSubSubCategoryId() {
    return this.subSubCategoryId;
  }
}
