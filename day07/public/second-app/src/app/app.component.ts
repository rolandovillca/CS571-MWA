import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second-app';
  name = "MyName";
  people:string[] = ["Jack1", "Jack2"];
  students = [{name: "Jack", gpa: 3.0, course: "MWA"}];
  today = new Date();

  onClickBtn(): void {
    this.name = 'New rolando'
  }
}
