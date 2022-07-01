import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoComponent } from './pages/info/info.component';
import { DetailComponent } from './pages/detail/detail.component';
import { StudentsComponent } from './components/students/students.component';

@NgModule({
  declarations: [InfoComponent, DetailComponent, StudentsComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [InfoComponent, DetailComponent, StudentsComponent],
})
export class StudentModule {}
