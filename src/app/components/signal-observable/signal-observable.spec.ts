import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalObservable } from './signal-observable';

describe('SignalObservable', () => {
  let component: SignalObservable;
  let fixture: ComponentFixture<SignalObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalObservable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
