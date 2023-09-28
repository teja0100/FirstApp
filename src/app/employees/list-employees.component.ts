import { Component,OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeSerivce } from './employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})

export class ListEmployeesComponent implements OnInit {
  constructor(private _listEmployees : EmployeeSerivce) {}
  employees : Employee[] | undefined;
 
  ngOnInit(): void {
    this.employees = this._listEmployees.getListEmployees();
  }
}