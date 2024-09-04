import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfBootstrapComponent } from './conf-bootstrap.component';

describe('ConfBootstrapComponent', () => {
  let component: ConfBootstrapComponent;
  let fixture: ComponentFixture<ConfBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfBootstrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
