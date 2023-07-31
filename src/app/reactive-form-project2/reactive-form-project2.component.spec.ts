import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormProject2Component } from './reactive-form-project2.component';

describe('ReactiveFormProject2Component', () => {
  let component: ReactiveFormProject2Component;
  let fixture: ComponentFixture<ReactiveFormProject2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormProject2Component]
    });
    fixture = TestBed.createComponent(ReactiveFormProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
