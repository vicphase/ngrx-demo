import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokemon } from '../../models/pokemon.model';
import { UiComponent } from './ui.component';

const mockPokemon: Pokemon = {
  id: 25,
  name: 'Pikachu',
  sprites: {
    front_default: 'test',
  },
};

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UiComponent);
    fixture.componentRef.setInput('pokemon', mockPokemon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
