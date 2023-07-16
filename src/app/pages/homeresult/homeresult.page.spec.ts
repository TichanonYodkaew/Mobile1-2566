import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeresultPage } from './homeresult.page';

describe('HomeresultPage', () => {
  let component: HomeresultPage;
  let fixture: ComponentFixture<HomeresultPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
