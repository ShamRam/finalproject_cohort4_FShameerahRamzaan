import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor() { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    subjectname: new FormControl('', Validators.required),
    minspersession: new FormControl(''),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      subjectname: '',
      minspersession: '',
     
    })
  }
}
