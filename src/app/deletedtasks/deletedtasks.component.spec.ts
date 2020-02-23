import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedtasksComponent } from './deletedtasks.component';

describe('DeletedtasksComponent', () => {
  let component: DeletedtasksComponent;
  let fixture: ComponentFixture<DeletedtasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedtasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedtasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
