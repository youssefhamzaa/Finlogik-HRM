import { Component } from '@angular/core';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent {
  isFormVisible = false;
  employee = {
    firstName: '',
    lastName: '',
    jobTitle: ''
  };

  showForm() {
    this.isFormVisible = true;
  }
}
