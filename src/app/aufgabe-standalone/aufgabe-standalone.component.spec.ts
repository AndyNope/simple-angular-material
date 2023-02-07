import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AufgabeStandaloneComponent } from './aufgabe-standalone.component';

describe('AufgabeStandaloneComponent', () => {
  let component: AufgabeStandaloneComponent;
  let fixture: ComponentFixture<AufgabeStandaloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AufgabeStandaloneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AufgabeStandaloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
