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

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(augRoutes([HomeView, AboutView, PageNotFoundView])),
  ],
};
