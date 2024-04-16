import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldComponent } from './old.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('OldComponent', () => {
  let component: OldComponent;
  let fixture: ComponentFixture<OldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldComponent],
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(OldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
