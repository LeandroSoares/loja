import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorManageComponent } from './author-manage.component';

describe('AuthorManageComponent', () => {
  let component: AuthorManageComponent;
  let fixture: ComponentFixture<AuthorManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
