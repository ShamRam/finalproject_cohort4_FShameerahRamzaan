import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  constructor(private service: SubjectService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
