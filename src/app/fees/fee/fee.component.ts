import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/shared/fee.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  constructor(private service: FeeService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
