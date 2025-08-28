import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
  AugViewMetadata,
} from 'angular-ui-generator';

@Component({
  selector: 'home-view',
  template: '',
})
@AugRegisterView({
  name: 'home',
  children: [],
})
@AugRegisterRoute({
  path: 'home',
  title: 'Home',
})
export class HomeView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'paragraph',
        text: 'Home works!',
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
