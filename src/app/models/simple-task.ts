import { Task } from "../interfaces/task.interface";

export class SimpleTask implements Task {
	constructor(
		public message: string,
		public id = Math.floor(Math.random() * 10000),
		public done: boolean = false
	) {}
}
