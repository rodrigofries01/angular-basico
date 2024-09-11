import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompAula43Component } from './comp-aula43.component';

describe('CompAula43Component', () => {
  let component: CompAula43Component;
  let fixture: ComponentFixture<CompAula43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompAula43Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompAula43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
