import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { fromOldApp } from '../../state/old';
import { UiComponent } from '../ui/ui.component';

@Component({
  selector: 'app-old',
  standalone: true,
  imports: [UiComponent, StoreModule, CommonModule],
  templateUrl: './old.component.html',
  styleUrl: './old.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OldComponent {
  pokemon$ = this.store.select(fromOldApp.selectors.selectPokemon);
  constructor(private store: Store) {}

  getRandomPokemon(): void {
    this.store.dispatch(new fromOldApp.actions.GetRandomPokemon());
  }
}
