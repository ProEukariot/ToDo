import { style } from "@angular/animations";
import {
	Component,
	ElementRef,
	EventEmitter,
	HostBinding,
	Input,
	OnInit,
	Output,
	Renderer2,
	ViewContainerRef,
} from "@angular/core";
import { DragAndDropDirective } from "../directives/drag-and-drop.directive";
import { Task } from "../interfaces/task.interface";

@Component({
	selector: "app-task",
	templateUrl: "task.component.html",
	styleUrls: ["task.component.scss"],
	hostDirectives: [DragAndDropDirective],
})
export class TaskComponent implements OnInit {
	@HostBinding("style.--main-color")
	color: string = "white";

	@HostBinding("style.z-index")
	@Input()
	layer?: number = 1;

	@Input()
	private colors: { [color: string]: string } = {
		"Sky Blue": "#87CEEB",
		"Coral ": "#FF7F50",
		"Mint Green": "#98FF98",
		Lavender: "#E6E6FA",
		"Sunshine Yellow": "#FFD700",
	};

	@Input({ required: true }) task!: Task;

	@Output() delete = new EventEmitter<any>();
	@Output() focus = new EventEmitter<any>();

	deleteTask() {
		this.delete.emit(this.task.id);
	}

	ngOnInit(): void {
		const values = Object.values(this.colors);
		this.color = values[Math.floor(Math.random() * values.length)];
	}

	focusTask() {
		this.focus.emit(this.task.id);
	}
}
