import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemoComponent } from './observable';

describe('ObservableDemoComponent', () => {
  let component: ObservableDemoComponent;
  let fixture: ComponentFixture<ObservableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
