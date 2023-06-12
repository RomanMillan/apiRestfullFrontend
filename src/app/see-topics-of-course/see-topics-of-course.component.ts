import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../services/topic.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-see-topics-of-course',
  templateUrl: './see-topics-of-course.component.html'
})
export class SeeTopicsOfCourseComponent implements OnInit{
  coursename!:string;
  topics:Topic[] = [];
  
  ngOnInit(): void {
    this.coursename = this.route.snapshot.params['id'];
    this.getTopicsOfCourse(this.coursename);
  }
  
  constructor(private route:ActivatedRoute, private topicService: TopicService){};
  
  // obtine los temas de un curso
  getTopicsOfCourse(coursename:string){
    this.topicService.getTopicsOfCoruse(coursename).subscribe(data => this.topics = data);
  }

}
