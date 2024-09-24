import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCompTableComponent } from './mat-comp-table.component';

describe('MatCompTableComponent', () => {
  let component: MatCompTableComponent;
  let fixture: ComponentFixture<MatCompTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatCompTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatCompTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
