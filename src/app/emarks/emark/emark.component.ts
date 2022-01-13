import { Component, OnInit } from '@angular/core';
import { EmarkService } from 'src/app/shared/emark.service';


@Component({
  selector: 'app-emark',
  templateUrl: './emark.component.html',
  styleUrls: ['./emark.component.css']
})
export class EmarkComponent implements OnInit {

  constructor(private service: EmarkService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
