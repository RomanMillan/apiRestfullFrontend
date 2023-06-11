import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { TopicsComponent } from './topics/topics.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTopicComponent } from './add-topic/add-topic.component'
import { FormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateTopicComponent } from './update-topic/update-topic.component';
import { UpdateCourseComponent } from './update-course/update-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TopicsComponent,
    NavbarComponent,
    AddTopicComponent,
    AddCourseComponent,
    AddUserComponent,
    UpdateTopicComponent,
    UpdateCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
