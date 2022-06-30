import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './pages/info/info.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [InfoComponent, DetailComponent],
  imports: [CommonModule],
  exports: [InfoComponent, DetailComponent ],
})
export class StudentModule {}
