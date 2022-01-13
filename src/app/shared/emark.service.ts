import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class EmarkService {

  constructor() { }

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    evaluationyear: new FormControl('', Validators.required),
    month1m: new FormControl(''),
    month2m: new FormControl(''),
    month3m: new FormControl(''),
    month4m: new FormControl(''),
    month5m: new FormControl(''),
    month6m: new FormControl(''),
    month7m: new FormControl(''),
    month8m: new FormControl(''),
    month9m: new FormControl(''),
    month10m: new FormControl(''),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      evaluationyear: '',
      month1m: '',
      month2m: '',
      month3m: '',
      month4m: '',
      month5m: '',
      month6m: '',
      month7m: '',
      month8m: '',
      month9m: '',
      month10m: '',
    })
  }
}
