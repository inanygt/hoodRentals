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
import { StackedModalComponent } from './stacked-modal/stacked-modal.component';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LookingForComponent,
    ToolsComponent,
    FooterComponent,
    BeeldGeluidComponent,
    StackedModalComponent,
    HomeComponent,
    AllProductsComponent,
    DashboardComponent,
    ProfileComponent,
    CommentsComponent,
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
