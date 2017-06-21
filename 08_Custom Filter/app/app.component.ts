import {Component} from "@angular/core";

@Component({
	selector : "my-app",
	templateUrl : "app/my.html"
})
export class AppComponent {
		demoTitle: string="Custom Pipe Demo";
		searchKey : string = '';
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
			"name" : "Kiran",
			"id" : 252147,
			"location" : "Moga"
		},
		{
			"name" : "Malika Jindal",
			"id" : 353193,
			"location" : "Dhuri"
		}
		];
		numbers : number[] = [10,8,5,22,3,56,889];
}