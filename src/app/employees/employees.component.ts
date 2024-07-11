import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

    isFormVisible = false;
    isCardVisible = true;
    employee = {
      firstName: '',
      lastName: '',
      jobTitle: ''
    };
  
    showForm() {
      this.isFormVisible = true;
    }
}
