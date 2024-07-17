import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoAddItemComponent } from './todo-add-item.component';

describe('TodoAddItemComponent', () => {
  let component: TodoAddItemComponent;
  let fixture: ComponentFixture<TodoAddItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoAddItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
