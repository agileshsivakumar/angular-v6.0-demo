import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-angular-element-demo',
  templateUrl: './angular-element-demo.component.html',
  styleUrls: ['./angular-element-demo.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class AngularElementDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
