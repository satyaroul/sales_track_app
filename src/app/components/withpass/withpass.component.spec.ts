import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithpassComponent } from './withpass.component';

describe('WithpassComponent', () => {
  let component: WithpassComponent;
  let fixture: ComponentFixture<WithpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithpassComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
