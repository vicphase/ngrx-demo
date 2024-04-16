import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { Action, ActionReducer, provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { fromNewApp } from './state/new';
import { AppNewEffects } from './state/new/app.effects';
import { fromOldApp } from './state/old';
import { AppOldEffects } from './state/old/app.effects';
import { AppState } from './state/shared/app.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      old: fromOldApp.reducer as ActionReducer<AppState, Action>,
      new: fromNewApp.reducer,
    }),
    provideEffects([AppOldEffects, AppNewEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideHttpClient(withFetch()),
  ],
};
