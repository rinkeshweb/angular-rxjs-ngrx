import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxHome } from './ngrx-home';

describe('NgrxHome', () => {
  let component: NgrxHome;
  let fixture: ComponentFixture<NgrxHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
