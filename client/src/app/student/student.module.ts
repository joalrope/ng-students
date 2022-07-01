import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './pages/info/info.component';
import { DetailComponent } from './pages/detail/detail.component';
import { StudentsComponent } from './components/students/students.component';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    InfoComponent,
    DetailComponent,
    StudentsComponent,
    DetailsComponent,
    PaginationComponent, //
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule, //
  ],
  exports: [
    InfoComponent,
    DetailComponent,
    DetailsComponent,
    StudentsComponent,
    PaginationComponent,

    //
  ],
})
export class StudentModule {}
