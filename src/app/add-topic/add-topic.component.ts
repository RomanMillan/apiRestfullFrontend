import { Component } from '@angular/core';
import { Topic } from '../topic';
import { TopicService } from '../services/topic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html'
})
export class AddTopicComponent {
  topic : Topic = new Topic();
  
  constructor(private topicService: TopicService, private router: Router){}

  // metodo que llama al metodo del servicio para agregar un tema
  addTopic(){
    this.topicService.postTopic(this.topic).subscribe();
    this.goToListTopic()
  }

  // metodo que redirige a la lista de temas
  goToListTopic(){
    this.router.navigate(['temas'])
  }

}
