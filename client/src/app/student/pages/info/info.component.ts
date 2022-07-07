import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass'],
})
export class InfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
