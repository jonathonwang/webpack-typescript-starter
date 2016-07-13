import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
	<h1 class="text-center">My First Angular 2 App</h1>
	<ul class="list-group">
		<li class="list-group-item">
			<input type="text" class="form-control" [(ngModel)]="newTask" (keyup.enter)="createTask()">
		</li>
		<li class="list-group-item" *ngFor="let task of tasks">
			<button class="btn btn-xs btn-primary pull-left" (click)="toggleTaskComplete(task)" style="margin-right: 15px;" *ngIf="task.complete == false">
				Complete	
			</button>
			<button class="btn btn-xs btn-primary pull-left" (click)="toggleTaskComplete(task)" style="margin-right: 15px;" *ngIf="task.complete == true">
				Incomplete
			</button>

			{{ task.title }} Status: {{ task.complete }}
			<button class="btn btn-xs btn-primary pull-right" (click)="deleteTask(task)">
				Delete	
			</button>
		</li>
	</ul>
	`
})
export class AppComponent {
	tasks: Array<Task> = [];
	newTask: string = '';
	// Methods
	// Create Task
	createTask():void {
		let newTaskObject: TaskInterface = new Task(this.newTask);
		this.tasks.push(newTaskObject);
		this.newTask = '';
	}
	// Toggle complete on Task
	toggleTaskComplete(task:TaskInterface):void {
		task.complete = !task.complete;
		console.log(task);
	}
	// Delete a Task
	deleteTask(task:any):void {
		this.tasks.splice(task, 1);
	}
}

export interface TaskInterface {
	title: string;
	complete: boolean;
}
export class Task implements TaskInterface {
	public title: string;
	public complete: boolean;
	constructor(title:string){
		this.title = title;
		this.complete = false;
	}
}
