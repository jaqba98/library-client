import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
  AugViewMetadata,
} from 'angular-ui-generator';

@Component({
  selector: 'page-not-found-view',
  template: '',
})
@AugRegisterView({
  name: 'page-not-found',
  children: [],
})
@AugRegisterRoute({
  path: '**',
  title: 'Page not found',
})
export class PageNotFoundView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'paragraph',
        text: 'Page not found works!',
      },
      {
        kind: 'link',
        path: 'home',
        text: 'Home',
      },
      {
        kind: 'link',
        path: 'about',
        text: 'About',
      },
    ];
  }
}
