import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainsubcontrollerComponent } from './mainsubcontroller.component';

describe('MainsubcontrollerComponent', () => {
  let component: MainsubcontrollerComponent;
  let fixture: ComponentFixture<MainsubcontrollerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainsubcontrollerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainsubcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
