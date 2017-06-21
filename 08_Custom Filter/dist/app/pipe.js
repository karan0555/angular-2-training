"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeFilterPipe = (function () {
    function EmployeeFilterPipe() {
    }
    EmployeeFilterPipe.prototype.transform = function (value, args) {
        console.log("value is " + value);
        console.log("args is " + args);
        var search = args ? args.toLocaleLowerCase() : null;
        console.log("search input is " + search);
        return search ? value.filter(function (employee) {
            return employee.name.toLocaleLowerCase().startsWith(search) != false;
        }) : value;
    };
    return EmployeeFilterPipe;
}());
EmployeeFilterPipe = __decorate([
    core_1.Pipe({ name: 'employeeFilter' })
], EmployeeFilterPipe);
exports.EmployeeFilterPipe = EmployeeFilterPipe;
//# sourceMappingURL=pipe.js.map