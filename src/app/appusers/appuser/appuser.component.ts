import { Component, OnInit } from '@angular/core';
import { AppuserService } from 'src/app/shared/appuser.service';

@Component({
  selector: 'app-appuser',
  templateUrl: './appuser.component.html',
  styleUrls: ['./appuser.component.css']
})
export class AppuserComponent implements OnInit {

  constructor(private service: AppuserService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
