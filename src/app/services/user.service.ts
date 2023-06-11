import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // obtenemos el listado de todos los usuarios
  private baseURL = 'http://localhost:8080/';

  constructor(private httpClient : HttpClient) { }

  // añade un usuario (llamando a la API)
  postUser(user : User):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}usuario`, user)
  }
}
