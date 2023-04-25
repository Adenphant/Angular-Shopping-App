import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteringComponent } from './testering.component';

describe('TesteringComponent', () => {
  let component: TesteringComponent;
  let fixture: ComponentFixture<TesteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
