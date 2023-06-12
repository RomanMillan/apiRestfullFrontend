import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html'
})
export class UpdateCourseComponent implements OnInit{
  corsename!:string;
  course:Course = new Course();

  constructor(private route:ActivatedRoute, private courseService:CourseService, private router: Router){}

  ngOnInit(): void {
    this.corsename = this.route.snapshot.params['id'];
    this.courseService.getCourse(this.corsename).subscribe(data =>{this.course = data})
  }

  updateCourse() {
    this.courseService.updateCourse(this.corsename, this.course).subscribe(()=> this.goToListCourse());

  }

  // metodo que redirige a la lista de cursos
  goToListCourse(){
    this.router.navigate(['cursos'])
  }
}
