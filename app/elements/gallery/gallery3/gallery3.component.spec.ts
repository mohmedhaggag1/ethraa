import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gallery3Component } from './gallery3.component';

describe('Gallery3Component', () => {
  let component: Gallery3Component;
  let fixture: ComponentFixture<Gallery3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gallery3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gallery3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
