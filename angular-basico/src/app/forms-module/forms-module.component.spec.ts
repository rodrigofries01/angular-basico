import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModuleComponent } from './forms-module.component';

describe('FormsModuleComponent', () => {
  let component: FormsModuleComponent;
  let fixture: ComponentFixture<FormsModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
