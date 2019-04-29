import { Component, Input } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent{
  @Input()
  student: Student;

  @Input()
  createStudent(student: Student) {
    this.studentService.createStudent(student).then((newStudent: Student) => {
      this.createHandler(newStudent);
    });
  }
  @Input()
  updateStudent(student: Student): void {
    this.studentService.updateStudent(student).then((updatedStudent: Student) => {
      this.updateHandler(updatedStudent);
    });
  }
  @Input()
  deleteStudent(studentId: String): void {
    this.studentService.deleteStudent(studentId).then((deletedStudentId: String) => {
      this.deleteHandler(deletedStudentId);
    });
  }
  constructor(private studentService: StudentService) { }


}
