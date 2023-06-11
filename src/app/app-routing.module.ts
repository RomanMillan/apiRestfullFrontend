import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { TopicsComponent } from './topics/topics.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

const routes: Routes = [
  {path : '', component : CoursesComponent},
  {path : 'cursos', component : CoursesComponent},
  {path : 'temas', component : TopicsComponent},
  {path : 'addTema', component : AddTopicComponent},
  {path : 'addCourse', component : AddCourseComponent},
  {path : 'addUser', component : AddUserComponent},
  {path : 'updateCourse/:id', component : UpdateCourseComponent},
  {path : 'updateTopic/:id', component : UpdateTopicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
