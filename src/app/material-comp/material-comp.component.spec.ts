import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCompComponent } from './material-comp.component';

describe('MaterialCompComponent', () => {
  let component: MaterialCompComponent;
  let fixture: ComponentFixture<MaterialCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialCompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaterialCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
