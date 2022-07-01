import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  @Input()
  student!: Student;

  constructor() {}

  retornarColor(value: number) {
    switch (true) {
      case value <= 3:
        return 'red';
      case value > 3 && value < 3.9:
        return 'yellow';
      default:
        return 'green';
    }
  }

  ngOnInit(): void {}
}
