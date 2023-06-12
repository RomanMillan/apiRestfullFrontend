import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../services/topic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-update-topic',
  templateUrl: './update-topic.component.html'
})
export class UpdateTopicComponent implements OnInit{
  topicname!:string;
  topic: Topic = new Topic();
  courses!:Course[]
  
  constructor(private route:ActivatedRoute, private topicService: TopicService, private courseService:CourseService, private router: Router){}
  
  ngOnInit(): void {
    this.topicname = this.route.snapshot.params['id'];
    this.topicService.getTopic(this.topicname).subscribe(data =>{this.topic = data})
    this.courseService.getCourses().subscribe(data =>{this.courses = data})
  }

  // metodo que llama al metodo del servicio para agregar un tema
  updateTopic(){
    this.topicService.updateTopic(this.topicname, this.topic).subscribe();
    this.goToListTopic();
  }

  // metodo que redirige a la lista de temas
  goToListTopic(){
    this.router.navigate(['temas'])
  }

  
}
