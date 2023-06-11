import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  // obtenemos el listado de todos los cursos
  private baseURL = 'http://localhost:8080/';
  
  constructor(private httpClient : HttpClient) { }
  
  // obtiene todos los cursos
  getCourses():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseURL}cursos`);
  }

   // obtiene un curso
   getCourse(coursename:string):Observable<Course>{
    return this.httpClient.get<Course>(`${this.baseURL}curso/${coursename}`);
  }
  // obtiene los temas de un curso
  getTopicsOfCoruse(){
    // TODO: Obtenr todo los temas de un curso
  }

  // añade un curso (llamando a la API)
  postCourse(course: Course):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}curso`, course);
  }

  // actualiza un curso
  updateCourse(coursename:string, course:Course):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}curso/${coursename}`,course);
  }

  // borra un curso
  deleteCourse(coursename:string):Observable<Object>{
    return this.httpClient.delete<Course>(`${this.baseURL}curso/${coursename}`);
  }

}
