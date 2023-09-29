import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

// Components
import { NavBarComponent } from './components/HOME/nav-bar/nav-bar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/HOME/footer/footer.component';
import { HomeComponent } from './components/HOME/home/home.component';
import { AllProductsComponent } from './components/HOME/all-products/all-products.component';
import { DashboardComponent } from './components/DASHBOARD/dashboard/dashboard.component';
import { ProfileComponent } from './components/MODALS/profile/profile.component';
import { BeschikbaarComponent } from './components/HOME/beschikbaar/beschikbaar.component';
import { VoorwaardenComponent } from './components/PAGES/voorwaarden/voorwaarden.component';
import { ModalCategoryComponent } from './components/MODALS/modal-category/modal-category.component';
import { ModalSubCategoryComponent } from './components/MODALS/modal-sub-category/modal-sub-category.component';
import { SearchComponent } from './components/MODALS/search/search.component';
import { DashboardItemsHorizontalComponent } from './components/DASHBOARD/dashboard-items-horizontal/dashboard-items-horizontal.component';
import { BorrowLendContainerComponent } from './components/HOME/borrow-lend-container/borrow-lend-container.component';
import { BorrowComponent } from './components/HOME/borrow-lend-container/borrow/borrow.component';
import { LendComponent } from './components/HOME/borrow-lend-container/lend/lend.component';
import { ParentComponent } from './Testing/parent/parent.component';
import { ChildComponent } from './Testing/child/child.component';
import { HorizontalCardsComponent } from './components/HOME/horizontal-cards/horizontal-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AllProductsComponent,
    DashboardComponent,
    ProfileComponent,
    BeschikbaarComponent,
    VoorwaardenComponent,
    ModalCategoryComponent,
    ModalSubCategoryComponent,
    SearchComponent,
    DashboardItemsHorizontalComponent,
    BorrowLendContainerComponent,
    BorrowComponent,
    LendComponent,
    ParentComponent,
    ChildComponent,
    HorizontalCardsComponent,
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
