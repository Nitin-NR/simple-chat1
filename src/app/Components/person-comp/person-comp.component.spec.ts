import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCompComponent } from './person-comp.component';

describe('PersonCompComponent', () => {
  let component: PersonCompComponent;
  let fixture: ComponentFixture<PersonCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
