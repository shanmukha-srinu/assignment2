import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Superhero2Component } from './superhero2.component';

describe('Superhero2Component', () => {
  let component: Superhero2Component;
  let fixture: ComponentFixture<Superhero2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Superhero2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Superhero2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
