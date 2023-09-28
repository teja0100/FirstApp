import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/Department.model';
import { Employee } from 'src/app/models/employee.model';
import { BsDatepickerConfig} from 'ngx-bootstrap/datepicker'
import { EmployeeSerivce } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  employeeObj:Employee = {
    id : null,
    name : null,
    gender : null,
    email : null,
    phoneNumber : null,
    contactPreference : null,
    dateOfBirth : null,
    department : null,
    isActive : null,
    photoPath : null
  }


  previewPhoto:boolean = false;
  departments : Department[] = [
   { id : 1, value : 'Help Desk'},
   { id : 2, value : 'HR'},
   { id : 3, value : 'IT'},
   { id : 4, value : 'Payroll'}
  ]
  constructor(private empService : EmployeeSerivce,
              private router : Router
    ){}

  saveEmployee():void{
    this.empService.Save(this.employeeObj);
    this.router.navigate(['list']);
  }
  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }
}
