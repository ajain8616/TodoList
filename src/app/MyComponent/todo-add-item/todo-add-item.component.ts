import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-add-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-add-item.component.html',
  styleUrls: ['./todo-add-item.component.css']
})
export class TodoAddItemComponent implements OnInit {
  title!: string;
  description!: string;

  @Output()
  todoAdd: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit(): void { }

  onSubmit() {
    const numericalId = Math.floor(Math.random() * 1000); // Example of generating a random numerical ID
    const titleSlug = this.title.toLowerCase().replace(/\s+/g, '-'); // Convert title to lowercase and replace spaces with hyphens for slug-like format
    const id = `${titleSlug}-${numericalId}`;

    const todo: Todo = {
      id: id,
      title: this.title,
      description: this.description,
      completed: true
    };

    this.todoAdd.emit(todo);

    this.title = '';
    this.description = '';
  }

}
