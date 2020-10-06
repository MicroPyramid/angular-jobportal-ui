import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileEditComponent } from './company-profile-edit.component';

describe('CompanyProfileEditComponent', () => {
  let component: CompanyProfileEditComponent;
  let fixture: ComponentFixture<CompanyProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
