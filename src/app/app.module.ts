import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LookingForComponent } from './looking-for/looking-for.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { MatListModule } from '@angular/material/list';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToolsComponent } from './tools/tools.component';
import { FooterComponent } from './footer/footer.component';
import { BeeldGeluidComponent } from './beeld-geluid/beeld-geluid.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentsComponent } from './comments/comments.component';
import { BeschikbaarComponent } from './beschikbaar/beschikbaar.component';
import { VoorwaardenComponent } from './voorwaarden/voorwaarden.component';
import { ModalCategoryComponent } from './modal-category/modal-category.component';
import { ModalSubCategoryComponent } from './modal-sub-category/modal-sub-category.component';
import { SearchComponent } from './search/search.component';
import { DashboardItemsHorizontalComponent } from './dashboard-items-horizontal/dashboard-items-horizontal.component';
import { BorrowLendContainerComponent } from './borrow-lend-container/borrow-lend-container.component';
import { BorrowComponent } from './borrow-lend-container/borrow/borrow.component';
import { LendComponent } from './borrow-lend-container/lend/lend.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LookingForComponent,
    ToolsComponent,
    FooterComponent,
    BeeldGeluidComponent,
    HomeComponent,
    AllProductsComponent,
    DashboardComponent,
    ProfileComponent,
    CommentsComponent,
    BeschikbaarComponent,
    VoorwaardenComponent,
    ModalCategoryComponent,
    ModalSubCategoryComponent,
    SearchComponent,
    DashboardItemsHorizontalComponent,
    BorrowLendContainerComponent,
    BorrowComponent,
    LendComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatListModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
