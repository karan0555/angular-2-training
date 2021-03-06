import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";
import {UnderlineDirective} from "./app.directive";


@NgModule({
	imports : [BrowserModule, SharedModule],
	declarations : [AppComponent, UnderlineDirective],
	bootstrap : [AppComponent]	
})
export class AppModule{}