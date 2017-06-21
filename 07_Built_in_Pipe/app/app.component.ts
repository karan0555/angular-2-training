import {Component} from "@angular/core";

@Component({
	selector : "my-app",
	templateUrl : "app/my.html"
})
export class AppComponent {
		demoTitle: string="Built In Pipe Demo";
		todayDate : any = new Date();
		employees : any[] = [
		{
			"name" : "Karan",
			"id" : 353202,
			"location" : "Bangalore"
		},
		{
			"name" : "Dali Vasudev",
			"id" : 353203,
			"location" : "Bengaluru"
		},
		{
			"name" : "Malika Jindal",
			"id" : 353193,
			"location" : "Dhuri"
		}
		];
}