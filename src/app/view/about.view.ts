import { Component } from '@angular/core';
import {
  AugRegisterRoute,
  AugRegisterView,
  AugViewGenerator,
  AugViewMetadata,
} from 'angular-ui-generator';

@Component({
  selector: 'about-view',
  template: '',
})
@AugRegisterView({
  name: 'about',
  children: [],
})
@AugRegisterRoute({
  path: 'about',
  title: 'About',
})
export class AboutView extends AugViewGenerator {
  override buildViewMetadata(): AugViewMetadata[] {
    return [
      {
        kind: 'paragraph',
        text: 'About works!',
      },
      {
        kind: 'link',
        path: '/home',
        text: 'Home',
      },
      {
        kind: 'link',
        path: '/about',
        text: 'About',
      },
    ];
  }
}
