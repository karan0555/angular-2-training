"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var OddFilterPipe = (function () {
    function OddFilterPipe() {
    }
    OddFilterPipe.prototype.transform = function (value) {
        console.log("value is " + value);
        //console.log("args is "+args);
        //let search : string = args ? args.toLocaleLowerCase():null;
        //console.log("search input is "+search);
        return value.filter(function (number) {
            return number % 2 != 0;
        });
    };
    return OddFilterPipe;
}());
OddFilterPipe = __decorate([
    core_1.Pipe({ name: 'oddFilter' })
], OddFilterPipe);
exports.OddFilterPipe = OddFilterPipe;
//# sourceMappingURL=pipe1.js.map