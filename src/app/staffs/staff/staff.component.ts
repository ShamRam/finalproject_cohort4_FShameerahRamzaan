import { StaffService } from './../../shared/staff.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { isRegularExpressionLiteral } from 'typescript';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private service: StaffService,
    private dialogRef: MatDialogRef<StaffComponent>) { }

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

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('id').value)
      this.service.insertStaff(this.service.form.value);
      else 
      this.service.updateStaff(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}
