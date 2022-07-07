import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { DetailsComponent } from './components/details/details.component';
import { InfoComponent } from './pages/info/info.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { StudentsComponent } from './components/students/students.component';

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
