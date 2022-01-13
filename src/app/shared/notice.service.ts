import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; 

@Injectable({
  providedIn: 'root'
})
export class NoticeService {

  constructor() { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    noticedatet: new FormControl(''),
    noticemessage: new FormControl('', Validators.required),
    
  });
  initializeFormGroup(){
    this.form.setValue({
      id: null,
      noticedate: '',
      noticemessage: '',
      
    })
  }
}
