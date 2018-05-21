import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { AngularElementDemoComponent } from './angular-element-demo/angular-element-demo.component';

@NgModule({
  declarations: [
    AngularElementDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    AngularElementDemoComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const angularElementDemoElement = createCustomElement(AngularElementDemoComponent, { injector: this.injector });
    customElements.define('app-angular-element-demo', angularElementDemoElement);
  }
}
