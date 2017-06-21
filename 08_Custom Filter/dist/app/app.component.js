"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.demoTitle = "Custom Pipe Demo";
        this.searchKey = '';
        this.employees = [
            {
                "name": "Karan",
                "id": 353202,
                "location": "Bangalore"
            },
            {
                "name": "Dali Vasudev",
                "id": 353203,
                "location": "Bengaluru"
            },
            {
                "name": "Kiran",
                "id": 252147,
                "location": "Moga"
            },
            {
                "name": "Malika Jindal",
                "id": 353193,
                "location": "Dhuri"
            }
        ];
        this.numbers = [10, 8, 5, 22, 3, 56, 889];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "app/my.html"
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map