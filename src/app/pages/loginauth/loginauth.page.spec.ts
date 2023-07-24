import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginauthPage } from './loginauth.page';

describe('LoginauthPage', () => {
  let component: LoginauthPage;
  let fixture: ComponentFixture<LoginauthPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
