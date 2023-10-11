import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/enviroments/environments';

// Angular Material
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

// Components

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
import { HorizontalCardsComponent } from './horizontal-cards/horizontal-cards.component';
import { LoginComponent } from './login/login.component';
import { HotToastModule } from '@ngneat/hot-toast';

import { LhomeComponent } from './components/loggedin/lhome/lhome.component';

import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { SignupComponent } from './components/signup/signup.component';
import { NavComponent } from './components/nav/nav.component';
import { InstellingComponent } from './components/instelling/instelling.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { SimpCategoriesComponent } from './components/simp-categories/simp-categories.component';
import { SimpSubcategoriesComponent } from './components/simp-subcategories/simp-subcategories.component';
import { SimpSubsubcategoriesComponent } from './components/simp-subsubcategories/simp-subsubcategories.component';

@NgModule({
  declarations: [
    AppComponent,

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
    LoginComponent,
    LhomeComponent,
    SignupComponent,
    NavComponent,
    InstellingComponent,
    AddItemComponent,
    SimpCategoriesComponent,
    SimpSubcategoriesComponent,
    SimpSubsubcategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatButtonToggleModule,
    MatListModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HotToastModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
