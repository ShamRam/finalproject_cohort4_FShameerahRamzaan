import { Component, OnInit } from '@angular/core';
import { SalaryService } from 'src/app/shared/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  constructor(private service: SalaryService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
