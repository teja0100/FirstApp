import { Component, Input , OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() employe : Employee[] | undefined;

  ngOnInit(): void {
  console.log(this.employe);
   }
  
}
