import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/shared/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  constructor(private service: NoticeService) { }

  ngOnInit(): void {
  }
  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }
}
