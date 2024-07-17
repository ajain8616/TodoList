import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoAddItemComponent } from '../todo-add-item/todo-add-item.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, TodoAddItemComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos: Todo[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.localItem = null;
    this.todos = [];

    if (isPlatformBrowser(this.platformId)) {
      this.localItem = localStorage.getItem('todos');
      if (this.localItem) {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  ngOnInit(): void { }

  deleteTodo(todo: Todo): void {
    console.log(todo);
    this.todos = this.todos.filter(t => t.id !== todo.id);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  }

  addTodo(newTodo: Todo): void {
    console.log(newTodo);
    this.todos.push(newTodo);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }


  }
}
