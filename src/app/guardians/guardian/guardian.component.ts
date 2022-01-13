import { Component, OnInit } from '@angular/core';
import { GuardianService } from 'src/app/shared/guardian.service';

@Component({
  selector: 'app-guardian',
  templateUrl: './guardian.component.html',
  styleUrls: ['./guardian.component.css']
})
export class GuardianComponent implements OnInit {

  constructor(private service: GuardianService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
