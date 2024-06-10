import { Directive, HostListener } from "@angular/core";

@Directive({
	selector: "[stopClickPropagation]",
})
export class StopClickPropagationDirective {
	constructor() {}

	@HostListener("mousedown", ["$event"])
	onMouseDown(e: MouseEvent) {
		e.stopPropagation();
	}
}
