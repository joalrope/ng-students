import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { headers } from 'src/app/data/headers';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass'],
})
export class StudentsComponent implements OnInit {
  headers: string[] = headers;

  @Input()
  students: Student[] = [];

  constructor() {}

  ngOnInit(): void {}
}
