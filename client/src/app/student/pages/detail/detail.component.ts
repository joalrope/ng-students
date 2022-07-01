import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { headers } from 'src/app/data/headers';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
})
export class DetailComponent implements OnInit {
  headers: string[] = headers;

  student!: Student;

  id!: number;

  constructor(private activatedRoute: ActivatedRoute, private studentsService: StudentsService) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.studentsService.getStudent(id))
        /* ,tap(console.log) */
      )
      .subscribe({
        next: (student) => {
          this.student = student;
        },
        error: () => {
          console.log('error');
        },
      });
  }
}
