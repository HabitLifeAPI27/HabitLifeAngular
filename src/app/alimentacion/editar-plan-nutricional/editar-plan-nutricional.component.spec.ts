import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPlanNutricionalComponent } from './editar-plan-nutricional.component';

describe('EditarPlanNutricionalComponent', () => {
  let component: EditarPlanNutricionalComponent;
  let fixture: ComponentFixture<EditarPlanNutricionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarPlanNutricionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarPlanNutricionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
