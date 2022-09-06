import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUserByNameComponent } from './find-user-by-name.component';

describe('FindUserByNameComponent', () => {
  let component: FindUserByNameComponent;
  let fixture: ComponentFixture<FindUserByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUserByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUserByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
