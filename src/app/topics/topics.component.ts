import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../services/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html'
})
export class TopicsComponent implements OnInit{
  topics!:Topic[]

  constructor(private topicService: TopicService, private router:Router){}
  
  ngOnInit(): void {
    this.getTopics();
  }

  //obtinene todos los temas 
  private getTopics(){
    this.topicService.getTopics().subscribe(data =>{
      this.topics = data;
    })
  }

  // redirige al componente de actualizar tema
  updateTopic(topicname:string){
    //this.router.navigate([`updateTopic/${topicname}`])
    this.router.navigate([`updateTopic`,topicname])
  }

  // borra un tema
  deleteTopic(topicname:string){
    this.topicService.deleteTopic(topicname).subscribe(() =>{
      this.getTopics();
    });
  }

}
