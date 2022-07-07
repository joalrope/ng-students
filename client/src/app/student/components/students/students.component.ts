import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { headers } from 'src/app/data/headers';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass'],
})
export class StudentsComponent implements OnInit {
  headers: string[] = headers;
  students!: Student[];
  items!: number;
  page: number = 1;
  limit: number = 5;

  constructor(private studentService: StudentsService) {}

  getStudents(event: any) {
    this.studentService.getStudentsByPage(event.page, event.limit).subscribe((data) => {
      this.page = event.page;
      this.limit = event.limit;
      this.students = data.students;
      this.items = data.records;
    });
  }

  ngOnInit(): void {
    this.studentService.getStudentsByPage(this.page.toString(), this.limit.toString()).subscribe((data) => {
      this.students = data.students;
      this.items = data.records;
    });
  }
}
