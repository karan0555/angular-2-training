import {Component} from "@angular/core";

@Component({
	selector : "my-app",
	templateUrl : "app/my.html"
})
export class AppComponent {
		demoTitle: string="Property Binding";
		isDisabled: boolean=false;
		paragraphTitle: string= "This appears as a stooltip for the paragraph";
}