export default {
	template: `
	<div class="col-xs-6 col-xs-offset-3">
		<ul class="list-group">
			<li class="list-group-item">
				<input type="text" class="form-control" v-model="newTask.title" @keyup.enter="createTask(newTask)">
			</li>
			<li class="list-group-item text-center" v-if="tasks.length == 0">Create Some Tasks!</li>
			<li class="list-group-item" v-for="task in tasks | orderBy 'complete'" v-else> 
				<button class="btn btn-xs btn-default btn-circle" @click="toggleTaskComplete(task)">
					<span v-if="task.complete == false">&check;</span>
					<span v-else>&times;</span>
				</button>
				{{ task.title }} {{ task.complete }}
				<button class="btn btn-default btn-xs pull-right" @click="deleteTask(task)">Delete</button>
			</li>
		</ul>
	</div>
	`,
	data(): Object{
		return {
			newTask: {
				title: '',
				complete: false
			},
			tasks: []
		}
	},
	methods: {
		createTask(newTask:TaskInterface):void {
			if(this.validateNewTask() == true){
				let newTaskClone: TaskInterface = new Task(this.newTask.title, this.newTask.complete)
				this.tasks.push(newTaskClone);
				this.clearNewTask();
			}
		},	
		clearNewTask():void {
			this.newTask.title = '';
			this.newTask.complete = false;
		},
		toggleTaskComplete(task:TaskInterface):void {
			task.complete = !task.complete;
		},
		deleteTask(task:TaskInterface):void {
			let index = this.tasks.findIndex( (taskItem) => taskItem == task );
			this.tasks.splice(index, 1);
		},
		validateNewTask():boolean {
			if (this.newTask.title.length >= 5){ return true }
			else{ return false }
		}

	}
}

interface TaskInterface {
	title: string;
	complete: boolean;
}

class Task implements TaskInterface {
	title: string;
	complete: boolean;
	constructor(title:string, complete:boolean){
		this.title = title;
		this.complete = complete;
	}
}
