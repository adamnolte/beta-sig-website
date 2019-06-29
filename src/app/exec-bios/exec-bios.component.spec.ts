import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecBiosComponent } from './exec-bios.component';

describe('ExecBiosComponent', () => {
  let component: ExecBiosComponent;
  let fixture: ComponentFixture<ExecBiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecBiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecBiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
