import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePoolComponent } from './resume-pool.component';

describe('ResumePoolComponent', () => {
  let component: ResumePoolComponent;
  let fixture: ComponentFixture<ResumePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
