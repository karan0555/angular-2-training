import {Directive, Renderer, ElementRef, HostListener} from "@angular/core";

@Directive({
	selector : '[myUnderline]'
})

export class UnderlineDirective {
	constructor(
		private renderer : Renderer,
		private el : ElementRef
	){}
	
	@HostListener('mouseenter') onMouseEnter(){
		this.hover(true);
	}
	
	
	@HostListener('mouseleave') onMouseLeave(){
		this.hover(false);
	}
	
	hover(makeit : boolean){
		if(makeit){
			this.renderer.setElementStyle(this.el.nativeElement,'text-decoration','underline');
		}
		else{
			this.renderer.setElementStyle(this.el.nativeElement,'text-decoration','none');
		}
	}
}