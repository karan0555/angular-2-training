import {Component} from "@angular/core";

@Component({
	selector : "my-app",
	templateUrl : "app/my.html"
})
export class AppComponent {
		demoTitle: string="Two Way Binding";
		data : string = "MY name is Karan";
		inputData : string = "hello";
		
		
		setInputData(value : string){
			this.inputData = value;
		}
}