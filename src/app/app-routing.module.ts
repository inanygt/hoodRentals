import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/HOME/home/home.component';
import { DashboardComponent } from './components/DASHBOARD/dashboard/dashboard.component';
import { ProfileComponent } from './components/MODALS/profile/profile.component';
import { VoorwaardenComponent } from './components/PAGES/voorwaarden/voorwaarden.component';
import { SearchComponent } from './components/MODALS/search/search.component';
import { BorrowLendContainerComponent } from './components/HOME/borrow-lend-container/borrow-lend-container.component';
import { BorrowComponent } from './components/HOME/borrow-lend-container/borrow/borrow.component';
import { LendComponent } from './components/HOME/borrow-lend-container/lend/lend.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
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
  { path: 'profile', component: ProfileComponent },
  { path: 'search', component: SearchComponent },
  { path: 'voorwaarden', component: VoorwaardenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
