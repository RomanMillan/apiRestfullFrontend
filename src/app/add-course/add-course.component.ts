import { Component } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  course : Course = new Course();
  
  constructor(private courseService: CourseService, private router: Router){}

  // metodo que llama al metodo del servicio para agregar un tema
  addCourse(){
    this.courseService.postCourse(this.course).subscribe();
    this.goToListCourse()
  }

  // metodo que redirige a la lista de temas
  goToListCourse(){
    this.router.navigate(['cursos'])
  }

}
