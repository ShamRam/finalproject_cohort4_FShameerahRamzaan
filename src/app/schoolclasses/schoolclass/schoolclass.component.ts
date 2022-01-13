import { Component, OnInit } from '@angular/core';
import { SchoolclassService } from 'src/app/shared/schoolclass.service';

@Component({
  selector: 'app-schoolclass',
  templateUrl: './schoolclass.component.html',
  styleUrls: ['./schoolclass.component.css']
})
export class SchoolclassComponent implements OnInit {

  constructor(private service: SchoolclassService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
