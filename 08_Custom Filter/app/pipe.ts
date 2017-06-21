import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'employeeFilter'})

export class EmployeeFilterPipe implements PipeTransform{
	transform(value : any[],args : string):any[]{
		console.log("value is "+value);
		console.log("args is "+args);
		
		let search : string = args ? args.toLocaleLowerCase():null;
		
		console.log("search input is "+search);
		
		return search ? value.filter((employee) => 
			employee.name.toLocaleLowerCase().startsWith(search) != false
		) : value;
	}
}