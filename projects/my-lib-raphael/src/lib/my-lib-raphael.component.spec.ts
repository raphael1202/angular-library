import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibRaphaelComponent } from './my-lib-raphael.component';

describe('MyLibComponent', () => {
  let component: MyLibRaphaelComponent;
  let fixture: ComponentFixture<MyLibRaphaelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibRaphaelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyLibRaphaelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
