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
}
