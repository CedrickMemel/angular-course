import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, viewChildren } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit{
 @Input({required: true}) course!: Course;
 @Output('courseSelected') courseEmitter = new EventEmitter<Course>();
 @Input() noImageTemplate: TemplateRef<any>;
 
  constructor() {  
    }
    
  ngOnInit(): void {
   }

  cardClasses(){
    if(this.course.category == 'BEGINNER')
      return 'beginner';
  }
}
