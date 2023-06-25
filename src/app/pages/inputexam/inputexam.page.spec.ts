import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputexamPage } from './inputexam.page';

describe('InputexamPage', () => {
  let component: InputexamPage;
  let fixture: ComponentFixture<InputexamPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InputexamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
