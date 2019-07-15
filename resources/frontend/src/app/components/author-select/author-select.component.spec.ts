import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorSelectComponent } from './author-select.component';

describe('AuthorSelectComponent', () => {
  let component: AuthorSelectComponent;
  let fixture: ComponentFixture<AuthorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
