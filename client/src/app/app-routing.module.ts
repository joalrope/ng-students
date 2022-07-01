import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './student/pages/info/info.component';
import { DetailComponent } from './student/pages/detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'student/:id',
    component: DetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), //
  ],
  exports: [
    RouterModule, //
  ],
})
export class AppRoutingModule {}
