import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private service: TeacherService) { }

  roles = [
    {id:3, value: 'None'},
    {id:2, value: 'Junior'},
    {id:3, value: 'Senior'}
  ];

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
