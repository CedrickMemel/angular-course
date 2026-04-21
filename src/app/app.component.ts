import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit{

    @ViewChildren(CourseCardComponent)
    courseCards!: QueryList<CourseCardComponent>;

    courses = [...COURSES];
    onCourseSelected(course: Course){
        console.log("Course selected: ", course);
    }
    trackCourseById(index: number, course: Course){
        return course.id;
    }

    ngAfterViewInit(): void {
        this.courseCards.changes.subscribe((courseCards: QueryList<CourseCardComponent>) => {
            console.log("Number of course cards: ", courseCards.length);
        });
    }

}
