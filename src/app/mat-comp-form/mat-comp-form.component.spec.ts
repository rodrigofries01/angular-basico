import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCompFormComponent } from './mat-comp-form.component';

describe('MatCompFormComponent', () => {
  let component: MatCompFormComponent;
  let fixture: ComponentFixture<MatCompFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCompFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatCompFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
