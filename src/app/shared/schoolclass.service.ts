import { Injectable } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class SchoolclassService {

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    classname: new FormControl('', Validators.required),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      classname: '',
      
    })
  }
}
