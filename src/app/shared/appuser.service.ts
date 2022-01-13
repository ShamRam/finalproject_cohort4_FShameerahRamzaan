import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class AppuserService {

  constructor() { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl(''),
    department: new FormControl(''),
    emailid: new FormControl('',  Validators.email),
    password: new FormControl('', Validators.required),
    
  });

  initializeFormGroup(){
    this.form.setValue({
      id: null,
      firstname: '',
      lastname: '',
      department: '',
      emailid: '',
      password: '',
     
    })
  }

}
