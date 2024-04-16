import * as actions from './app.actions';
import { reducer } from './app.reducer';
import * as selectors from './app.selectors';

export const fromOldApp = { actions, reducer, selectors };
