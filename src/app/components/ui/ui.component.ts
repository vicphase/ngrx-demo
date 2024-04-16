import { ChangeDetectionStrategy, Component, EventEmitter, Output, input } from '@angular/core';

import { Pokemon } from '../../models/pokemon.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponent {
  pokemon = input.required<Pokemon | null>();
  @Output() getRandomPokemon = new EventEmitter<void>();
}
