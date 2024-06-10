import {
	Directive,
	ElementRef,
	HostBinding,
	HostListener,
	Renderer2,
} from "@angular/core";

@Directive({
	selector: "[dragAndDrop]",
	standalone: true,
})
export class DragAndDropDirective {
	@HostBinding("class.dragging")
	isDragging: boolean = false;

	constructor(
		private renderer: Renderer2,
		private elementRef: ElementRef<HTMLDivElement>
	) {}

	@HostListener("mousedown", ["$event"])
	onMouseDown(e: MouseEvent) {
		let x = e.clientX;
		let y = e.clientY;

		let unlistenMouseMove: any;
		let unlistenMouseUp: any;

		this.isDragging = true;

		const onMouseMove = (e: MouseEvent) => {
			let offsetX = x - e.clientX;
			let offsetY = y - e.clientY;

			x = e.clientX;
			y = e.clientY;

			this.renderer.setStyle(
				this.elementRef.nativeElement,
				"left",
				`${this.elementRef.nativeElement.offsetLeft - offsetX}px`
			);
			this.renderer.setStyle(
				this.elementRef.nativeElement,
				"top",
				`${this.elementRef.nativeElement.offsetTop - offsetY}px`
			);
		};

		const onMouseUp = (e: MouseEvent) => {
			unlistenMouseMove();
			unlistenMouseUp();

			this.isDragging = false;
		};

		unlistenMouseMove = this.renderer.listen(
			"document",
			"mousemove",
			onMouseMove
		);

		unlistenMouseUp = this.renderer.listen(
			"document",
			"mouseup",
			onMouseUp
		);
	}
}
