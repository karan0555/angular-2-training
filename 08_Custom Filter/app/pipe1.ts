import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name:'oddFilter'})

export class OddFilterPipe implements PipeTransform{
	transform(value : any[]):any[]{
		console.log("value is "+value);
		//console.log("args is "+args);
		
		//let search : string = args ? args.toLocaleLowerCase():null;
		
		//console.log("search input is "+search);
		
		return value.filter((number) => 
			number%2 != 0);
	}
}