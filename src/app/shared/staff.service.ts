import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor() { }
  

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl(''),
    dob: new FormControl(''),
    emailid: new FormControl('',  Validators.email),
    phonenumber: new FormControl('', Validators.minLength(10)),
    address: new FormControl(''),
    nicnumber: new FormControl(''),
    role: new FormControl(0),
    ispermanentstaff: new FormControl(false)
  });

  getStaffs(){
    this.staffList = this.mysql.list('staffs');
    return this.staffList.snapshotChnages();
  }
  
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      firstname: '',
      lastname: '',
      dob: '',
      emailid: '',
      phonenumber: '',
      address: '',
      nicnumber: '',
      role: 0,
      ispermanentstaff: false
    })
  }
  
 insertStaff(staff){
   this.staffList.push({
     id: staff.id,
     firstname: staff.firstname,
     lastname: staff.lastname,
     dob: staff.dob,
     emailid: staff.emailid,
     phonenumber: staff.phonenumber,
     address: staff.address,
     nicnumber: staff.nicnumber,
     role: staff.role,
     ispermanentstaff: staff.ispermanentstaff
   });
 }
  
 updateStaff(staff){
   this.staffList.update(staff.id,
    {
      id: staff.id,
     firstname: staff.firstname,
     lastname: staff.lastname,
     dob: staff.dob,
     emailid: staff.emailid,
     phonenumber: staff.phonenumber,
     address: staff.address,
     nicnumber: staff.nicnumber,
     role: staff.role,
     ispermanentstaff: staff.ispermanentstaff
    });
 } 

 deleteStaff(id: string){
   this.staffList.remove(id);
 }
  populateForm(staff){
    this.form.setValue(staff);
  }
}
