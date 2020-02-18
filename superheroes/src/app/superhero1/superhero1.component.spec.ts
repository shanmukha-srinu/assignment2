import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Superhero1Component } from './superhero1.component';

describe('Superhero1Component', () => {
  let component: Superhero1Component;
  let fixture: ComponentFixture<Superhero1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Superhero1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Superhero1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
