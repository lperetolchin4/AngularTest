import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2AngularComponent } from './test2-angular.component';

describe('Test2AngularComponent', () => {
  let component: Test2AngularComponent;
  let fixture: ComponentFixture<Test2AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test2AngularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Test2AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
