import {Directive, Renderer, ElementRef} from "@angular/core";

@Directive({
	selector : '[myHidden]'
})

export class HiddenDirective {
	constructor(renderer : Renderer,el : ElementRef){
		renderer.setElementStyle(el.nativeElement,'display','none');
	}
}