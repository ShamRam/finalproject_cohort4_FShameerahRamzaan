import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class FeeService {

  constructor() { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    class: new FormControl('', Validators.required),
    feeamount: new FormControl(''),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      class: '',
      feeamount: '',
      
    })
  }
}
