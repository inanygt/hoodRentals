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
  }

  getCategoryId() {
    return this.categoryId;
  }

  setSubCategoryId(id: number) {
    this.subCategoryId = id;
  }

  getSubCategoryId() {
    return this.subCategoryId;
  }

  setSubSubCategoryId(id: number) {
    this.subSubCategoryId = id;
  }

  getSubSubCategoryId() {
    return this.subSubCategoryId;
  }
}
