import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';

import { fromNewApp } from '../../state/new';
import { UiComponent } from '../ui/ui.component';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [UiComponent, StoreModule, CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewComponent {
  pokemon$ = this.store.select(fromNewApp.selectors.selectPokemon);
  constructor(private store: Store) {}

  getRandomPokemon(): void {
    this.store.dispatch(fromNewApp.actions.getRandomPokemon());
  }
}
