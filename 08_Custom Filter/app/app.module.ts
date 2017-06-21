import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {FormsModule} from "@angular/forms";
import {EmployeeFilterPipe} from "./pipe";
import {OddFilterPipe} from "./pipe1";

@NgModule({
	imports : [BrowserModule, FormsModule],
	declarations : [AppComponent, EmployeeFilterPipe, OddFilterPipe],
	bootstrap : [AppComponent]	
})
export class AppModule{}