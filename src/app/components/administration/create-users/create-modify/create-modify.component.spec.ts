import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModifyComponent } from './create-modify.component';

describe('CreateModifyComponent', () => {
  let component: CreateModifyComponent;
  let fixture: ComponentFixture<CreateModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
