import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGoodComponent } from './new-good.component';

describe('NewGoodComponent', () => {
  let component: NewGoodComponent;
  let fixture: ComponentFixture<NewGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
