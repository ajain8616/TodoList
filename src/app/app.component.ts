import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./MyComponent/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TodoList';
  constructor(){
    setTimeout(()=>
    {
      this.title="This is change the Title with the Time"
    },3000)
  }
}
