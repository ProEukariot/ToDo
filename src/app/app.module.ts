import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TaskComponent } from "./task/task.component";
import { DragAndDropDirective } from "./directives/drag-and-drop.directive";
import { StopClickPropagationDirective } from "./directives/stop-click-propagation.directive";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [AppComponent, TaskComponent, StopClickPropagationDirective],
	imports: [BrowserModule, DragAndDropDirective, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
