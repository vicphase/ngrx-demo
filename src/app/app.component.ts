import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NewComponent } from './components/new/new.component';
import { OldComponent } from './components/old/old.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NewComponent, OldComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
