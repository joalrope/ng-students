import { Component, OnInit } from '@angular/core';
import { Student } from '../../interfaces/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.sass'],
})
export class StudentsComponent implements OnInit {
  students: Student[] = [];
  headers: string[] = [
    'ID',
    'Active',
    'Name',
    'Gender',
    'Class',
    'Club',
    'Persona',
    'Crush',
    'BreastSize',
    'Strength',
    'Hairstyle',
    'Color',
    'Stockings',
    'Accessory',
    'Average',
  ];

  constructor(private studentService: StudentsService) {}

  retornarColor() {
    return '#00f';
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((students) => {
      this.students = students;
    });
  }
}
