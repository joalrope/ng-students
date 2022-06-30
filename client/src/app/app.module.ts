import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { StudentModule } from './student/student.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    StudentModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
