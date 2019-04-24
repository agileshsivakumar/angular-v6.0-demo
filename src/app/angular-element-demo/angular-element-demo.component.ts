import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-element-demo',
  templateUrl: './angular-element-demo.component.html',
  styleUrls: ['./angular-element-demo.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AngularElementDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position);
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permission Denied');
              break;
            case 2:
              console.log('Position Unavailable');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }
}
