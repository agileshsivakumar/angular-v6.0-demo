import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularElementDemoComponent } from './angular-element-demo.component';

describe('AngularElementDemoComponent', () => {
  let component: AngularElementDemoComponent;
  let fixture: ComponentFixture<AngularElementDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularElementDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularElementDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
