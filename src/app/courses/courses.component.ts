import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent implements OnInit{
  courses!:Course[]

  constructor(private courseService:CourseService, private router:Router){}
  
  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(){
    this.courseService.getCourses().subscribe(data =>{
      this.courses = data;
    })
  }

  seeTopics(coursename:string){
    this.router.navigate([`updateCourse`,coursename])
  }

  updateCourse(coursename:string){
    this.router.navigate([`updateCourse`,coursename])
  }

  deleteCourse(coursename:string){
    this.courseService.deleteCourse(coursename).subscribe(()=>{this.getCourses()})
  }
}
