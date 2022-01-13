import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  constructor() { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    department: new FormControl('', Validators.required),
    basicsalary: new FormControl(''),
    allowance: new FormControl(''),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      department: '',
      basicsalary: '',
      allowance: '',
      
    })
  }
}
