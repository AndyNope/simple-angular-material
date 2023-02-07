import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeTwoStandaloneComponent } from './aufgabe-two-standalone.component';

describe('AufgabeTwoStandaloneComponent', () => {
  let component: AufgabeTwoStandaloneComponent;
  let fixture: ComponentFixture<AufgabeTwoStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AufgabeTwoStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeTwoStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
