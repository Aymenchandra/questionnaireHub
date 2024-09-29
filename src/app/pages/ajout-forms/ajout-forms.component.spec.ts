import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFormsComponent } from './ajout-forms.component';

describe('AjoutFormsComponent', () => {
  let component: AjoutFormsComponent;
  let fixture: ComponentFixture<AjoutFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
