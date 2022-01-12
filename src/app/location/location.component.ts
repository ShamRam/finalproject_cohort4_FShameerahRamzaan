import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare const google:any ;



@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, AfterViewInit {

  map: any;
  @ViewChild('mapElement') mapElement: any;

  constructor() { }
 

  ngAfterViewInit(): void {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      center: {lat: 6.9271, lng: 79.8612},
      zoom: 14,
    });
      }
 

  ngOnInit(): void {

}
}
