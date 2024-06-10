import {
	Component,
	ComponentRef,
	ViewChild,
	ViewContainerRef,
} from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { Task } from "./interfaces/task.interface";
import { SimpleTask } from "./models/simple-task";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
})
export class AppComponent {
	LIMIT = 50;
	tasks: Task[] = [];

	private updateLayers() {
		this.tasks.forEach((task, i) => {
			task.layer = this.tasks.length - i;
		});
	}

	onTaskFocus(id: any) {
		const index = this.tasks.findIndex((task) => task.id == id);

		const focusedEl = this.tasks.splice(index, 1)[0];
		this.tasks.unshift(focusedEl);

		this.updateLayers();
	}

	trackTasksBy(i: number, task: Task) {
		return task.id;
	}

	addTask() {
		if (this.tasks.length < this.LIMIT) {
			this.tasks.unshift(
				new SimpleTask("Very important task to do NOW!")
			);

			this.updateLayers();
		}
	}

	deleteTask(id: any) {
		const index = this.tasks.findIndex((task) => task.id == id);

		this.tasks.splice(index, 1);

		this.updateLayers();
	}

	clearDoneTasks() {
		this.tasks = this.tasks.filter((task) => task.done == false);

		this.updateLayers();
	}

	clearAllTasks() {
		this.tasks = [];
	}
}
