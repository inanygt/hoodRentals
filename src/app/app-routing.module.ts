import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommentsComponent } from './comments/comments.component';
import { ProfileComponent } from './profile/profile.component';
import { VoorwaardenComponent } from './voorwaarden/voorwaarden.component';
import { SearchComponent } from './search/search.component';
import { BorrowLendContainerComponent } from './borrow-lend-container/borrow-lend-container.component';
import { BorrowComponent } from './borrow-lend-container/borrow/borrow.component';
import { LendComponent } from './borrow-lend-container/lend/lend.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'borrow', component: BorrowComponent },
      { path: 'lend', component: LendComponent },
    ],
  },
  {
    path: 'dashboard/:categoryId/subcategory/:subcategoryId',
    component: DashboardComponent,
  },

  { path: 'comments', component: CommentsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'voorwaarden', component: VoorwaardenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
