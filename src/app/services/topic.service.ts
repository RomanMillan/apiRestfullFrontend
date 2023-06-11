import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Topic } from '../topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  // obtenemos el listado de todos los temas
  private baseURL = 'http://localhost:8080/';
  
  constructor(private httpClient : HttpClient) { }
  
  // obtiene todos los temas
  getTopics():Observable<Topic[]>{
    return this.httpClient.get<Topic[]>(`${this.baseURL}temas`);
  }
  // obtiene un tema
  getTopic(topicname:string):Observable<Topic>{
    return this.httpClient.get<Topic>(`${this.baseURL}tema/${topicname}`);
  }

  // añade un tema (llamando a la API)
  postTopic(topic:Topic):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}tema`, topic);
  }

  // actualiza un tema
  updateTopic(topicname:string, topic:Topic):Observable<Object>{
    console.log(topic)
    console.log(`${this.baseURL}tema/${topicname}`)
    return this.httpClient.put(`${this.baseURL}tema/${topicname}`,topic);
  }

  // borra un tema
  deleteTopic(topicname:string):Observable<Object>{
    return this.httpClient.delete<Topic>(`${this.baseURL}tema/${topicname}`);
  }
}
