import {Component} from "@angular/core";

@Component({
	selector : "my-app",
	templateUrl : "app/my.html"
})
export class AppComponent {
		demoTitle: string="Event Binding";
		counter : number = 0;
		inputData : string = "hello";
		
		incrementCounter(){
			this.counter = this.counter + 1;
		}
		
		setInputData(value : string){
			this.inputData = value;
		}
}