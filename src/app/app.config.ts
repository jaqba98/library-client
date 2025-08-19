import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { augRoutes } from 'angular-ui-generator';
import { HomeView } from './view/home.view';
import { AboutView } from './view/about.view';
import { PageNotFoundView } from './view/page-not-found.view';
import { RootView } from './view/root.view';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(augRoutes([RootView, HomeView, AboutView, PageNotFoundView])),
  ],
};
