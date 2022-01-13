import { StaffService } from './../../shared/staff.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private service: StaffService) { }

  roles = [
    {id:3, value: 'Manager'},
    {id:2, value: 'Accountant'},
    {id:3, value: 'Administrator'}
  ];

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
